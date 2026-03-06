"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="font-bold text-xl text-gray-900">LearnHub</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/courses" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Kursy</Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Dashboard</Link>
            <Link href="/courses" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Kategorie</Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/dashboard" className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 transition-colors">
              Zaloguj się
            </Link>
            <Link href="/courses" className="bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Rozpocznij naukę
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-indigo-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            <Link href="/courses" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">Kursy</Link>
            <Link href="/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">Dashboard</Link>
            <Link href="/courses" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">Kategorie</Link>
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <Link href="/dashboard" className="block px-3 py-2 text-center text-gray-700 border border-gray-300 rounded-md">Zaloguj się</Link>
              <Link href="/courses" className="block px-3 py-2 text-center bg-indigo-600 text-white rounded-md">Rozpocznij naukę</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
