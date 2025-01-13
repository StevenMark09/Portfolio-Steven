'use client'

import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900 text-white z-50 bg-transparent backdrop-blur-sm" style={{ boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)' }}> 
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">Steven Mark </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-sky-400 hover:border-b hover:border-sky-300 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-sky-400 hover:border-b hover:border-sky-300 transition-colors">About</Link>
          <Link href="/projects" className="hover:text-sky-400 hover:border-b hover:border-sky-300 transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-sky-400 hover:border-b hover:border-sky-300 transition-colors">Contact</Link>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-slate-800 py-2">
          <Link href="/" className="block px-4 py-2 hover:bg-slate-700" onClick={toggleMenu}>Home</Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-slate-700" onClick={toggleMenu}>About</Link>
          <Link href="/projects" className="block px-4 py-2 hover:bg-slate-700" onClick={toggleMenu}>Projects</Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-slate-700" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </header>
  )
}

export default Header

