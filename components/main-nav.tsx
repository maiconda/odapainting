"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export function MainNav({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        className,
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
              <span className="text-xl font-bold text-black">Oda Painting Services</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-700 transition-colors">
            Home
          </Link>
          <Link href="/#services" className="text-sm font-medium hover:text-blue-700 transition-colors">
            Services
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-blue-700 transition-colors">
            Gallery
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-blue-700 transition-colors">
            Contact
          </Link>
        </nav>
            <Link href="https://wa.me/14752378189" target="_blank">
        <Button className="hidden md:inline-flex bg-blue-700 hover:bg-blue-800">Get a Quote</Button>
</Link>
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed md:hidden left-0 right-0 top-16 bg-white z-50 shadow-md transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none",
        )}
      >
        <nav className="container py-4 flex flex-col space-y-4 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-700 transition-colors px-2 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium hover:text-blue-700 transition-colors px-2 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium hover:text-blue-700 transition-colors px-2 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium hover:text-blue-700 transition-colors px-2 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-2">
            <Link href="https://wa.me/14752378189" target="_blank">
            <Button className="w-full bg-blue-700 hover:bg-blue-800">Get a Quote</Button>
          </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
