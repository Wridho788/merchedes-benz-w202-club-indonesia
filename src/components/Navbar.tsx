'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useState } from 'react'
import Image from 'next/image'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'History', href: '/sejarah' },
  { label: 'Organization', href: '/about' },
  { label: 'Member', href: '/member' },
  { label: 'Event', href: '/event' },
  { label: 'Merchant', href: '/merchant' },
  { label: 'Press Release', href: '/press' },
  { label: 'All About W202', href: '/w202' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-primary">
      {/* Header Top - Logo, Title, Flag */}
      <div className="container py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="MB W202 Club Logo" 
            width={60} 
            height={60}
            className="w-12 h-12 md:w-15 md:h-15"
          />
          <div className="flex flex-col">
            <h1 className="font-heading text-white text-lg md:text-xl lg:text-2xl tracking-wide">
              Mercedes Benz W202
            </h1>
            <p className="text-gray-400 text-xs md:text-sm">
              Club Indonesia
            </p>
          </div>
        </div>

        {/* Flag */}
        <div className="hidden md:block">
          <Image 
            src="/flag-indonesia.png" 
            alt="Indonesia Flag" 
            width={40} 
            height={27}
            className="w-10 h-auto"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className={clsx(
        "bg-brand-menu border-t border-brand-primary/20",
        isMenuOpen ? "block" : "hidden md:block"
      )}>
        <div className="container">
          <ul className="flex flex-col md:flex-row md:items-center md:gap-0">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href

              return (
                <li key={item.href} className="border-b border-brand-primary/10 md:border-0">
                  <Link
                    href={item.href}
                    className={clsx(
                      'block px-4 py-3 text-sm transition-colors duration-300 capitalize',
                      isActive
                        ? 'bg-brand-accent text-white font-medium'
                        : 'text-white hover:bg-brand-accent hover:text-white'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
