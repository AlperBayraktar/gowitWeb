"use client"

import Link from "next/link"

export function NavigationMenu() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center h-20">
          <Link href="/" className="text-4xl font-bold tracking-wider hover:opacity-80 transition-opacity">
            LIMOSA
          </Link>
        </div>
      </div>
    </nav>
  )
}

