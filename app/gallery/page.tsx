"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram } from "lucide-react"

type GalleryItem = {
  id: number
  title: string
  category: string
  description: string
  imageBefore: string
  imageAfter: string
  isBeforeAfter: boolean
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"grid" | "before-after">("grid")

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Modern Living Room Transformation",
      category: "interior",
      description: "Complete interior painting with accent wall",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
      isBeforeAfter: true,
    },
    {
      id: 2,
      title: "Exterior Home Refresh",
      category: "exterior",
      description: "Full exterior painting with trim detail",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
      isBeforeAfter: true,
    },
    {
      id: 3,
      title: "Office Space Renovation",
      category: "commercial",
      description: "Commercial office painting project",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
      isBeforeAfter: true,
    },
    {
      id: 4,
      title: "Kitchen Cabinet Refinishing",
      category: "interior",
      description: "Cabinet refinishing with modern colors",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
      isBeforeAfter: true,
    },
    {
      id: 5,
      title: "Bedroom Makeover",
      category: "interior",
      description: "Calming bedroom color palette",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
      isBeforeAfter: false,
    },
    {
      id: 6,
      title: "Retail Store Renovation",
      category: "commercial",
      description: "Retail space with brand-specific colors",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
      isBeforeAfter: false,
    },
    {
      id: 7,
      title: "Victorian Home Exterior",
      category: "exterior",
      description: "Historic home exterior restoration",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
      isBeforeAfter: true,
    },
    {
      id: 8,
      title: "Dining Room Accent Wall",
      category: "interior",
      description: "Bold dining room transformation",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
      isBeforeAfter: false,
    },
    {
      id: 9,
      title: "Restaurant Interior",
      category: "commercial",
      description: "Complete restaurant color scheme",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
      isBeforeAfter: false,
    },
    {
      id: 10,
      title: "Modern Farmhouse Exterior",
      category: "exterior",
      description: "Farmhouse style with modern touches",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
      isBeforeAfter: true,
    },
    {
      id: 11,
      title: "Home Office Transformation",
      category: "interior",
      description: "Productive workspace color scheme",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
      isBeforeAfter: false,
    },
    {
      id: 12,
      title: "Deck Staining Project",
      category: "exterior",
      description: "Outdoor deck restoration and staining",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
      isBeforeAfter: true,
    },
  ]

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  const filteredBeforeAfterItems = filteredItems.filter((item) => item.isBeforeAfter)

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Our Work Gallery</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse through our portfolio of completed projects to see the quality and craftsmanship of our painting
                services.
              </p>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Button
                  variant={activeFilter === "all" ? "default" : "outline"}
                  onClick={() => setActiveFilter("all")}
                  className={activeFilter === "all" ? "bg-blue-700 hover:bg-blue-800" : ""}
                >
                  All Projects
                </Button>
                <Button
                  variant={activeFilter === "interior" ? "default" : "outline"}
                  onClick={() => setActiveFilter("interior")}
                  className={activeFilter === "interior" ? "bg-blue-700 hover:bg-blue-800" : ""}
                >
                  Interior
                </Button>
                <Button
                  variant={activeFilter === "exterior" ? "default" : "outline"}
                  onClick={() => setActiveFilter("exterior")}
                  className={activeFilter === "exterior" ? "bg-blue-700 hover:bg-blue-800" : ""}
                >
                  Exterior
                </Button>
                <Button
                  variant={activeFilter === "commercial" ? "default" : "outline"}
                  onClick={() => setActiveFilter("commercial")}
                  className={activeFilter === "commercial" ? "bg-blue-700 hover:bg-blue-800" : ""}
                >
                  Commercial
                </Button>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-blue-700 hover:bg-blue-800" : ""}
                >
                  Grid View
                </Button>
                <Button
                  variant={viewMode === "before-after" ? "default" : "outline"}
                  onClick={() => setViewMode("before-after")}
                  className={viewMode === "before-after" ? "bg-blue-700 hover:bg-blue-800" : ""}
                  disabled={filteredBeforeAfterItems.length === 0}
                >
                  Before/After
                </Button>
              </div>
            </div>

            {/* Gallery Grid View */}
            {viewMode === "grid" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={item.imageAfter || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      {item.isBeforeAfter && (
                        <div className="absolute top-2 right-2 bg-blue-700 text-white text-xs px-2 py-1 rounded">
                          Before/After Available
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded capitalize">
                        {item.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Before/After View */}
            {viewMode === "before-after" && (
              <div className="space-y-12">
                {filteredBeforeAfterItems.length > 0 ? (
                  filteredBeforeAfterItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="p-4 border-b">
                        <h3 className="font-bold text-xl">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                        <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mt-2 capitalize">
                          {item.category}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        <div className="space-y-2">
                          <p className="font-medium text-center">Before</p>
                          <div className="relative h-64 md:h-80">
                            <Image
                              src={item.imageBefore || "/placeholder.svg"}
                              alt={`${item.title} Before`}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="font-medium text-center">After</p>
                          <div className="relative h-64 md:h-80">
                            <Image
                              src={item.imageAfter || "/placeholder.svg"}
                              alt={`${item.title} After`}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No before/after projects available for this filter.</p>
                    <Button variant="outline" onClick={() => setActiveFilter("all")} className="mt-4">
                      View All Projects
                    </Button>
                  </div>
                )}
              </div>
            )}

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No projects found for this filter.</p>
                <Button variant="outline" onClick={() => setActiveFilter("all")} className="mt-4">
                  View All Projects
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate on your painting project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 w-full sm:w-auto"
                >
                  Get a Free Estimate
                </Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Oda Painting Logo"
                  width={40}
                  height={40}
                  className="rounded bg-white"
                />
                <span className="text-xl font-bold">Oda Painting</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional painting services for residential and commercial properties across the United States.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="text-gray-400 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                    Interior Painting
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                    Exterior Painting
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                    Commercial Painting
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                    Residential Painting
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                    Cabinet Refinishing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-400">(555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400">info@odapainting.com</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400">123 Paint Street, Colorful City, CA 90210</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400">Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Oda Painting Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
