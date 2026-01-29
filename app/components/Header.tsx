'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="px-6 py-6 md:px-12 lg:px-24">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <img 
              src="/images/LOGO3.svg" 
              alt="Gather Together" 
              className="h-16 md:h-24 w-auto"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-[18px] md:text-[23px] leading-relaxed text-black hover:text-gray-600 relative group">
            Expertise
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black transition-all duration-500 ease-out group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="text-[18px] md:text-[23px] leading-relaxed text-black hover:text-gray-600 relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black transition-all duration-500 ease-out group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Burger Button */}
        <button 
          className="md:hidden flex flex-col space-y-1 w-6 h-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="max-w-[1800px] mx-auto">
        <nav className={`md:hidden mt-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
            <Link href="/about" className="text-[18px] text-black hover:text-gray-600 py-2">Expertise</Link>
            <Link href="/contact" className="text-[18px] text-black hover:text-gray-600 py-2">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
