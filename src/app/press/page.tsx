'use client'

import { useState, useEffect, useRef } from 'react'
import { usePressConference, useMediaCoverage } from '@/lib/hooks/usePressConference'
import type { PressRelase } from '@/lib/api/client'

const PRESS_CONFERENCE_PAYLOAD = {
  chapter: 13,
  category: 29,
  limit: 10,
  offset: 0,
  orderby: '',
  order: 'asc' as const,
}

const MEDIA_COVERAGE_PAYLOAD = {
  chapter: 13,
  category: 32,
  limit: 10,
  offset: 0,
  orderby: '',
  order: 'asc' as const,
}

export default function PressPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [pressReleaseData, setPressReleaseData] = useState<PressRelase[]>([])
  const [mediaCoverageData, setMediaCoverageData] = useState<PressRelase[]>([])
  const [pressReleaseOffset, setPressReleaseOffset] = useState(0)
  const [mediaCoverageOffset, setMediaCoverageOffset] = useState(0)
  const [allOffset, setAllOffset] = useState(0)
  const [hasMorePressRelease, setHasMorePressRelease] = useState(true)
  const [hasMoreMediaCoverage, setHasMoreMediaCoverage] = useState(true)
  const [hasMoreAll, setHasMoreAll] = useState(true)
  const [allFetchedCount, setAllFetchedCount] = useState(0)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const observerTarget = useRef<HTMLDivElement>(null)

  // Fetch data based on filter
  const pressReleasePayload = { ...PRESS_CONFERENCE_PAYLOAD, offset: pressReleaseOffset }
  const mediaCoveragePayload = { ...MEDIA_COVERAGE_PAYLOAD, offset: mediaCoverageOffset }
  const allPressPayload = { ...PRESS_CONFERENCE_PAYLOAD, offset: allOffset }
  const allMediaPayload = { ...MEDIA_COVERAGE_PAYLOAD, offset: allOffset }

  const pressReleaseQuery = usePressConference(pressReleasePayload)
  const mediaCoverageQuery = useMediaCoverage(mediaCoveragePayload)
  const allPressQuery = usePressConference(allPressPayload)
  const allMediaQuery = useMediaCoverage(allMediaPayload)

  // Handle initial load and filter changes
  useEffect(() => {
    if (selectedFilter === 'press-release' && pressReleaseQuery.data) {
      const result = Array.isArray(pressReleaseQuery.data.content.result) ? pressReleaseQuery.data.content.result : []
      if (pressReleaseOffset === 0) {
        setPressReleaseData(result)
      } else {
        setPressReleaseData((prev) => [...prev, ...result])
      }
      const totalData = pressReleaseOffset + result.length
      setHasMorePressRelease((pressReleaseQuery.data.content.record || 0) > totalData)
      setIsLoadingMore(false)
    }
  }, [pressReleaseQuery.data, pressReleaseOffset, selectedFilter])

  useEffect(() => {
    if (selectedFilter === 'media-coverage' && mediaCoverageQuery.data) {
      const result = Array.isArray(mediaCoverageQuery.data.content.result) ? mediaCoverageQuery.data.content.result : []
      if (mediaCoverageOffset === 0) {
        setMediaCoverageData(result)
      } else {
        setMediaCoverageData((prev) => [...prev, ...result])
      }
      const totalData = mediaCoverageOffset + result.length
      setHasMoreMediaCoverage((mediaCoverageQuery.data.content.record || 0) > totalData)
      setIsLoadingMore(false)
    }
  }, [mediaCoverageQuery.data, mediaCoverageOffset, selectedFilter])

  useEffect(() => {
    if (selectedFilter === 'all' && allPressQuery.data && allMediaQuery.data) {
      const pressResult = Array.isArray(allPressQuery.data.content.result) ? allPressQuery.data.content.result : []
      const mediaResult = Array.isArray(allMediaQuery.data.content.result) ? allMediaQuery.data.content.result : []
      const combinedData = [...pressResult, ...mediaResult]
      
      if (allOffset === 0) {
        const sliced = combinedData.slice(0, 10)
        setPressReleaseData(sliced)
        setAllFetchedCount(sliced.length)
      } else {
        const sliced = combinedData.slice(0, 10)
        setPressReleaseData((prev) => [...prev, ...sliced])
        setAllFetchedCount((prev) => prev + sliced.length)
      }
      
      const totalRecords = (allPressQuery.data.content.record || 0) + (allMediaQuery.data.content.record || 0)
      
      // Calculate total fetched so far
      const totalFetched = allOffset + combinedData.length
      setHasMoreAll(totalRecords > totalFetched)
      
      setIsLoadingMore(false)
    }
  }, [allPressQuery.data, allMediaQuery.data, allOffset, selectedFilter])

  // Reset data when filter changes
  useEffect(() => {
    if (selectedFilter === 'press-release') {
      setPressReleaseOffset(0)
      setMediaCoverageData([])
      setAllOffset(0)
      setAllFetchedCount(0)
    } else if (selectedFilter === 'media-coverage') {
      setMediaCoverageOffset(0)
      setPressReleaseData([])
      setAllOffset(0)
      setAllFetchedCount(0)
    } else if (selectedFilter === 'all') {
      setAllOffset(0)
      setPressReleaseData([])
      setMediaCoverageData([])
      setPressReleaseOffset(0)
      setMediaCoverageOffset(0)
      setAllFetchedCount(0)
    }
    setIsLoadingMore(false)
  }, [selectedFilter])

  // Infinite scroll intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore) {
          let shouldLoadMore = false
          
          if (selectedFilter === 'press-release' && hasMorePressRelease) {
            shouldLoadMore = true
            setPressReleaseOffset((prev) => prev + 10)
          } else if (selectedFilter === 'media-coverage' && hasMoreMediaCoverage) {
            shouldLoadMore = true
            setMediaCoverageOffset((prev) => prev + 10)
          } else if (selectedFilter === 'all' && hasMoreAll) {
            shouldLoadMore = true
            setAllOffset((prev) => prev + 10)
          }
          
          if (shouldLoadMore) {
            setIsLoadingMore(true)
          }
        }
      },
      { threshold: 0.1 },
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
    }
  }, [selectedFilter, hasMorePressRelease, hasMoreMediaCoverage, hasMoreAll, isLoadingMore])

  // Filter results based on search
  const getDisplayData = () => {
    if (selectedFilter === 'media-coverage') {
      return mediaCoverageData
    }
    return pressReleaseData
  }

  const displayData = getDisplayData()

  const filteredPress = displayData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.text.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="page-wrapper">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
              Press Release
            </h1>
            <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Liputan media dan press release resmi W202 Club of Indonesia.
            </p>
          </div>

          {/* Filter & Search Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 space-y-4 md:space-y-0">
              {/* Filter Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                    selectedFilter === 'all'
                      ? 'bg-brand-primary text-white'
                      : 'bg-gray-50 text-brand-primary hover:bg-brand-accent hover:text-white'
                  }`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setSelectedFilter('press-release')}
                  className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                    selectedFilter === 'press-release'
                      ? 'bg-brand-primary text-white'
                      : 'bg-gray-50 text-brand-primary hover:bg-brand-accent hover:text-white'
                  }`}
                >
                  Press Release
                </button>
                <button
                  onClick={() => setSelectedFilter('media-coverage')}
                  className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                    selectedFilter === 'media-coverage'
                      ? 'bg-brand-primary text-white'
                      : 'bg-gray-50 text-brand-primary hover:bg-brand-accent hover:text-white'
                  }`}
                >
                  Media Coverage
                </button>
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-auto md:min-w-[300px]">
                <input
                  type="text"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm pl-10 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  placeholder="Cari press release..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
            </div>

            {/* Press Release Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPress.length > 0 ? (
                filteredPress.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="inline-block mb-2 text-xs font-medium text-brand-primary bg-gray-50 px-2 py-1 rounded">
                        {item.category}
                      </div>
                      <h3 className="font-sans font-semibold text-lg text-brand-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {item.date}
                      </p>
                      <p className="text-sm mb-4 line-clamp-3">{item.text || item.shortdesc}</p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <button className="w-full py-2 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white rounded text-sm font-medium transition">
                            Baca Artikel
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-600">
                    {pressReleaseQuery.isLoading || mediaCoverageQuery.isLoading || allPressQuery.isLoading || allMediaQuery.isLoading
                      ? 'Memuat data...'
                      : 'Tidak ada data yang ditemukan'}
                  </p>
                </div>
              )}
            </div>

            {/* Infinite Scroll Observer */}
            <div ref={observerTarget} className="py-8">
              {isLoadingMore && (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Media Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-sans font-semibold text-xl text-brand-primary mb-4">
                Untuk Media
              </h3>
              <p className="text-gray-600 mb-6">
                W202 Club Indonesia terbuka untuk kolaborasi dengan media dalam
                liputan kegiatan klub dan event-event yang diselenggarakan. Silahkan
                hubungi kami untuk informasi lebih lanjut, wawancara dengan pengurus,
                atau permintaan press release.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-sans font-medium text-brand-primary mb-2">
                  Kontak Media
                </h4>
                <p className="text-sm">
                  <span className="font-medium">Email:</span>{' '}
                  mbw202clubindonesia@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
