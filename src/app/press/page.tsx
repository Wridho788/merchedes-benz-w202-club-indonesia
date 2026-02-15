'use client'

import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
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

// Month mapping for date parsing
const MONTHS: { [key: string]: number } = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
}

// Parse date string "03 Nov 2025" to Date object
const parseDate = (dateStr: string): Date => {
  try {
    const match = dateStr.match(/(\d{2})\s+(\w+)\s+(\d{4})/)
    if (!match) return new Date(0)
    const [, day, month, year] = match
    const monthIndex = MONTHS[month]
    if (monthIndex === undefined) return new Date(0)
    return new Date(parseInt(year), monthIndex, parseInt(day))
  } catch {
    return new Date(0)
  }
}

// Validate and sanitize image URL
const getImageUrl = (imageUrl?: string): string => {
  if (!imageUrl || imageUrl.trim() === '' || imageUrl.endsWith('/')) {
    return '/images/press-default.jpg'
  }
  return imageUrl
}

// Validate URL format
const isValidUrl = (url: string | null | undefined): boolean => {
  if (!url) return false
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Normalize category display
const normalizeCategory = (category: string): string => {
  if (!category) return 'Uncategorized'
  if (category.toLowerCase().includes('press')) return 'Press Release'
  if (category.toLowerCase().includes('media') || category.toLowerCase().includes('coverage')) return 'Media Coverage'
  return category
}

export default function PressPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [pressReleaseData, setPressReleaseData] = useState<PressRelase[]>([])
  const [mediaCoverageData, setMediaCoverageData] = useState<PressRelase[]>([])
  const [pressReleaseOffset, setPressReleaseOffset] = useState(10)
  const [mediaCoverageOffset, setMediaCoverageOffset] = useState(10)
  const [hasMorePressRelease, setHasMorePressRelease] = useState(true)
  const [hasMoreMediaCoverage, setHasMoreMediaCoverage] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalPressRecords, setTotalPressRecords] = useState(0)
  const [totalMediaRecords, setTotalMediaRecords] = useState(0)
  const [dataFetched, setDataFetched] = useState(false)
  const observerTarget = useRef<HTMLDivElement>(null)

  // Initial fetch for both press release and media coverage (offset 0)
  const initialPressPayload = { ...PRESS_CONFERENCE_PAYLOAD, offset: 0 }
  const initialMediaPayload = { ...MEDIA_COVERAGE_PAYLOAD, offset: 0 }

  // Fetch payloads for infinite scroll (only when needed)
  const pressReleaseInfinityPayload = { ...PRESS_CONFERENCE_PAYLOAD, offset: pressReleaseOffset }
  const mediaCoverageInfinityPayload = { ...MEDIA_COVERAGE_PAYLOAD, offset: mediaCoverageOffset }

  // Always fetch initial data for both filters on component mount
  const pressReleaseQuery = usePressConference(initialPressPayload)
  const mediaCoverageQuery = useMediaCoverage(initialMediaPayload)

  // Only fetch for infinite scroll when actively scrolling a filter
  const infinityPressQuery = usePressConference(
    selectedFilter === 'press-release' && isLoadingMore ? pressReleaseInfinityPayload : initialPressPayload
  )
  const infinityMediaQuery = useMediaCoverage(
    selectedFilter === 'media-coverage' && isLoadingMore ? mediaCoverageInfinityPayload : initialMediaPayload
  )

  // Handle initial fetch for press release and media coverage
  useEffect(() => {
    if (pressReleaseQuery.data && mediaCoverageQuery.data && !dataFetched) {
      try {
        const pressResult = Array.isArray(pressReleaseQuery.data.content.result) 
          ? pressReleaseQuery.data.content.result 
          : []
        const mediaResult = Array.isArray(mediaCoverageQuery.data.content.result) 
          ? mediaCoverageQuery.data.content.result 
          : []

        setPressReleaseData(pressResult)
        setMediaCoverageData(mediaResult)
        setTotalPressRecords(pressReleaseQuery.data.content.record || 0)
        setTotalMediaRecords(mediaCoverageQuery.data.content.record || 0)
        setDataFetched(true)
        setError(null)
        setIsInitialLoading(false)
      } catch (err) {
        setError('Gagal mengambil data')
        setIsInitialLoading(false)
      }
    }
  }, [pressReleaseQuery.data, mediaCoverageQuery.data, dataFetched])

  // Handle infinite scroll for press release
  useEffect(() => {
    if (selectedFilter === 'press-release' && isLoadingMore && infinityPressQuery.data && dataFetched) {
      try {
        const result = Array.isArray(infinityPressQuery.data.content.result) 
          ? infinityPressQuery.data.content.result 
          : []
        if (result.length > 0) {
          setPressReleaseData((prev) => [...prev, ...result])
          const totalData = pressReleaseOffset + result.length
          setHasMorePressRelease(totalPressRecords > totalData)
        } else {
          setHasMorePressRelease(false)
        }
        setIsLoadingMore(false)
      } catch (err) {
        setError('Gagal mengambil data press release')
        setIsLoadingMore(false)
      }
    }
  }, [infinityPressQuery.data, pressReleaseOffset, selectedFilter, isLoadingMore, dataFetched, totalPressRecords])

  // Handle infinite scroll for media coverage
  useEffect(() => {
    if (selectedFilter === 'media-coverage' && isLoadingMore && infinityMediaQuery.data && dataFetched) {
      try {
        const result = Array.isArray(infinityMediaQuery.data.content.result) 
          ? infinityMediaQuery.data.content.result 
          : []
        if (result.length > 0) {
          setMediaCoverageData((prev) => [...prev, ...result])
          const totalData = mediaCoverageOffset + result.length
          setHasMoreMediaCoverage(totalMediaRecords > totalData)
        } else {
          setHasMoreMediaCoverage(false)
        }
        setIsLoadingMore(false)
      } catch (err) {
        setError('Gagal mengambil data media coverage')
        setIsLoadingMore(false)
      }
    }
  }, [infinityMediaQuery.data, mediaCoverageOffset, selectedFilter, isLoadingMore, dataFetched, totalMediaRecords])

  // Reset on filter change - but keep data loaded
  useEffect(() => {
    setSearchQuery('') // Reset search query on filter change
    window.scrollTo(0, 0)
    setIsLoadingMore(false)
    setError(null)

    // Check if more data available for current filter
    if (selectedFilter === 'press-release') {
      const totalData = 10 // Initial fetch size
      setHasMorePressRelease(totalPressRecords > totalData)
    } else if (selectedFilter === 'media-coverage') {
      const totalData = 10 // Initial fetch size
      setHasMoreMediaCoverage(totalMediaRecords > totalData)
    } else if (selectedFilter === 'all') {
      const totalData = 10 + 10 // Both initial fetches combined
      setHasMorePressRelease(totalPressRecords > 10)
      setHasMoreMediaCoverage(totalMediaRecords > 10)
    }
  }, [selectedFilter, totalPressRecords, totalMediaRecords])

  // Infinite scroll intersection observer - memoized
  useEffect(() => {
    if (!observerTarget.current) return

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (!entries[0].isIntersecting || isLoadingMore) return

      let shouldLoadMore = false
      
      if (selectedFilter === 'press-release' && hasMorePressRelease) {
        shouldLoadMore = true
        setPressReleaseOffset((prev) => prev + 10)
      } else if (selectedFilter === 'media-coverage' && hasMoreMediaCoverage) {
        shouldLoadMore = true
        setMediaCoverageOffset((prev) => prev + 10)
      } else if (selectedFilter === 'all' && (hasMorePressRelease || hasMoreMediaCoverage)) {
        shouldLoadMore = true
        if (hasMorePressRelease) {
          setPressReleaseOffset((prev) => prev + 10)
        }
        if (hasMoreMediaCoverage) {
          setMediaCoverageOffset((prev) => prev + 10)
        }
      }
      
      if (shouldLoadMore) {
        setIsLoadingMore(true)
      }
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 })
    observer.observe(observerTarget.current)

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
    }
  }, [selectedFilter, hasMorePressRelease, hasMoreMediaCoverage, isLoadingMore])

  // Filter results based on search with memoization
  const getDisplayData = useCallback(() => {
    if (selectedFilter === 'media-coverage') {
      return mediaCoverageData
    } else if (selectedFilter === 'all') {
      // Combine press and media data, then sort by date (newest first)
      const combined = [...pressReleaseData, ...mediaCoverageData]
      return combined.sort((a, b) => {
        const dateA = parseDate(a.date)
        const dateB = parseDate(b.date)
        return dateB.getTime() - dateA.getTime() // Newest first
      })
    }
    return pressReleaseData
  }, [selectedFilter, pressReleaseData, mediaCoverageData])

  const displayData = useMemo(() => getDisplayData(), [getDisplayData])

  const filteredPress = useMemo(() => {
    return displayData.filter((item) => {
      if (!searchQuery.trim()) return true
      const query = searchQuery.toLowerCase()
      const title = item.title?.toLowerCase() || ''
      const text = item.text?.toLowerCase() || ''
      const shortdesc = item.shortdesc?.toLowerCase() || ''
      return title.includes(query) || text.includes(query) || shortdesc.includes(query)
    })
  }, [displayData, searchQuery])

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
                  aria-label="Tampilkan semua press release"
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
                  aria-label="Tampilkan press release saja"
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
                  aria-label="Tampilkan media coverage saja"
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
                <label htmlFor="search" className="sr-only">Cari press release</label>
                <input
                  id="search"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm pl-10 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  placeholder="Cari press release..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Cari press release dan media coverage"
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
              {error && (
                <div className="col-span-full bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                  <p className="font-medium">Terjadi kesalahan</p>
                  <p className="text-sm">{error}</p>
                </div>
              )}
              
              {isInitialLoading ? (
                <div className="col-span-full flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
                </div>
              ) : filteredPress.length > 0 ? (
                filteredPress.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Image */}
                    <div className="h-48 overflow-hidden bg-gray-200">
                      <img
                        src={getImageUrl(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="inline-block mb-2 text-xs font-medium text-brand-primary bg-gray-50 px-2 py-1 rounded">
                        {normalizeCategory(item.category)}
                      </div>
                      <h3 className="font-sans font-semibold text-lg text-brand-primary mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {item.date}
                      </p>
                      <p className="text-sm mb-4 line-clamp-3 text-gray-700">
                        {item.shortdesc || item.text || 'Tidak ada deskripsi'}
                      </p>
                      {isValidUrl(item.link) ? (
                        <a
                          href={item.link!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                          aria-label={`Baca artikel: ${item.title}`}
                        >
                          <button className="w-full py-2 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white rounded text-sm font-medium transition">
                            Baca Artikel
                          </button>
                        </a>
                      ) : (
                        <button 
                          disabled
                          className="w-full py-2 border border-gray-300 text-gray-400 bg-gray-50 rounded text-sm font-medium cursor-not-allowed"
                          aria-label="Link tidak tersedia"
                        >
                          Baca Artikel
                        </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-600">Tidak ada data yang ditemukan</p>
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
