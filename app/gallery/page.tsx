"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Phone } from "lucide-react"
import { ImageLightbox } from "@/components/image-lightbox"

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
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const galleryItems: GalleryItem[] = [
  
      {
        "id": 1,
        "title": "Blue House Exterior in Winter Setting",
        "category": "exterior",
        "description": "View of a blue house with snow on the ground and bare trees.",
        "imageBefore": "/gallery/image-1.jpeg",
        "imageAfter": "/gallery/image-1.jpeg",
        "isBeforeAfter": false
      },
      {
        "id": 2,
        "title": "Overhead View of a School Cafeteria",
        "category": "commercial",
        "description": "High-angle shot of empty lunch tables and a serving area in a school.",
        "imageBefore": "/gallery/image-2.jpeg",
        "imageAfter": "/gallery/image-2.jpeg",
        "isBeforeAfter": false
      },
      {
        "id": 3,
        "title": "Another View of the School Cafeteria from Above",
        "category": "commercial",
        "description": "Elevated perspective showing more of the cafeteria layout and some cleaning equipment.",
        "imageBefore": "/gallery/image-3.jpeg",
        "imageAfter": "/gallery/image-3.jpeg",
        "isBeforeAfter": false
      },
      {
        "id": 4,
        "title": "Hallway with Blue and Orange Accents in a Commercial Building",
        "category": "commercial",
        "description": "Interior hallway with colorful floor tiles and a staircase.",
        "imageBefore": "/gallery/image-4.jpeg",
        "imageAfter": "/gallery/image-4.jpeg",
        "isBeforeAfter": false
      },
      {
        "id": 5,
        "title": "Unfinished Kitchen with Dark Cabinets and Appliance Boxes",
        "category": "interior",
        "description": "Image of a kitchen under construction with unpacked appliances.",
        "imageBefore": "/gallery/image-5.jpeg",
        "imageAfter": "/gallery/image-5.jpeg",
        "isBeforeAfter": false
      },
      {
        "id": 6,
        "title": "Empty Room Under Renovation with Open Doorways",
        "category": "interior",
        "description": "View of a room with bare walls and unfinished flooring.",
        "imageBefore": "/gallery/image-6.jpeg",
        "imageAfter": "/gallery/image-6.jpeg",
        "isBeforeAfter": false
      },
      {
        "id": 7,
        "title": "Close-up of a White Door in a Room",
        "category": "interior",
        "description": "Detailed shot of a closed white paneled door.",
        "imageBefore": "/gallery/image-7.jpeg",
        "imageAfter": "/gallery/image-7.jpeg",
        "isBeforeAfter": false
      },
      {
        "id": 8,
        "title": "Long Corridor Under Construction with Exposed Wiring",
        "category": "commercial",
        "description": "Interior hallway with unfinished ceiling and visible pipes and wires.",
        "imageBefore": "/gallery/image-8.jpeg",
        "imageAfter": "/gallery/image-8.jpeg",
        "isBeforeAfter": false
      },
      {
        "id": 9,
        "title": "Partially Furnished Room with Kitchen Area",
        "category": "interior",
        "description": "Image showing a kitchen counter and sink area open to a living space with unpacked items.",
        "imageBefore": "/gallery/image-9.jpeg",
        "imageAfter": "/gallery/image-9.jpeg",
        "isBeforeAfter": false
      },
      {
        "id": 10,
        "title": "New White Door Leaning Against a Wall",
        "category": "interior",
        "description": "A white six-panel door awaiting installation.",
        "imageBefore": "/gallery/image-10.jpeg",
        "imageAfter": "/gallery/image-10.jpeg",
        "isBeforeAfter": false
      },
      {
        "id": 11,
        "title": "Image-11",
        "category": "interior",
        "description": "Description of Image-11",
        "imageBefore": "/gallery/image-11.jpeg",
        "imageAfter": "/gallery/image-11.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 12,
        "title": "Image-12",
        "category": "exterior",
        "description": "Description of Image-12",
        "imageBefore": "/gallery/image-12.jpeg",
        "imageAfter": "/gallery/image-12.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 13,
        "title": "Image-13",
        "category": "commercial",
        "description": "Description of Image-13",
        "imageBefore": "/gallery/image-13.jpeg",
        "imageAfter": "/gallery/image-13.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 14,
        "title": "Image-14",
        "category": "interior",
        "description": "Description of Image-14",
        "imageBefore": "/gallery/image-14.jpeg",
        "imageAfter": "/gallery/image-14.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 15,
        "title": "Image-15",
        "category": "exterior",
        "description": "Description of Image-15",
        "imageBefore": "/gallery/image-15.jpeg",
        "imageAfter": "/gallery/image-15.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 16,
        "title": "Image-16",
        "category": "commercial",
        "description": "Description of Image-16",
        "imageBefore": "/gallery/image-16.jpeg",
        "imageAfter": "/gallery/image-16.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 17,
        "title": "Image-17",
        "category": "interior",
        "description": "Description of Image-17",
        "imageBefore": "/gallery/image-17.jpeg",
        "imageAfter": "/gallery/image-17.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 18,
        "title": "Image-18",
        "category": "exterior",
        "description": "Description of Image-18",
        "imageBefore": "/gallery/image-18.jpeg",
        "imageAfter": "/gallery/image-18.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 20,
        "title": "Image-20",
        "category": "interior",
        "description": "Description of Image-20",
        "imageBefore": "/gallery/image-20.jpeg",
        "imageAfter": "/gallery/image-20.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 21,
        "title": "Image-21",
        "category": "exterior",
        "description": "Description of Image-21",
        "imageBefore": "/gallery/image-21.jpeg",
        "imageAfter": "/gallery/image-21.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 22,
        "title": "Image-22",
        "category": "commercial",
        "description": "Description of Image-22",
        "imageBefore": "/gallery/image-22.jpeg",
        "imageAfter": "/gallery/image-22.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 23,
        "title": "Image-23",
        "category": "interior",
        "description": "Description of Image-23",
        "imageBefore": "/gallery/image-23.jpeg",
        "imageAfter": "/gallery/image-23.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 24,
        "title": "Image-24",
        "category": "exterior",
        "description": "Description of Image-24",
        "imageBefore": "/gallery/image-24.jpeg",
        "imageAfter": "/gallery/image-24.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 25,
        "title": "Image-25",
        "category": "commercial",
        "description": "Description of Image-25",
        "imageBefore": "/gallery/image-25.jpeg",
        "imageAfter": "/gallery/image-25.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 26,
        "title": "Image-26",
        "category": "interior",
        "description": "Description of Image-26",
        "imageBefore": "/gallery/image-26.jpeg",
        "imageAfter": "/gallery/image-26.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 27,
        "title": "Image-27",
        "category": "exterior",
        "description": "Description of Image-27",
        "imageBefore": "/gallery/image-27.jpeg",
        "imageAfter": "/gallery/image-27.jpeg",
        "isBeforeAfter": false,
        },
        {
        "id": 28,
        "title": "Image-28",
        "category": "commercial",
        "description": "Description of Image-28",
        "imageBefore": "/gallery/image-28.jpeg",
        "imageAfter": "/gallery/image-28.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 29,
        "title": "Image-29",
        "category": "interior",
        "description": "Description of Image-29",
        "imageBefore": "/gallery/image-29.jpeg",
        "imageAfter": "/gallery/image-29.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 30,
        "title": "Image-30",
        "category": "exterior",
        "description": "Description of Image-30",
        "imageBefore": "/gallery/image-30.jpeg",
        "imageAfter": "/gallery/image-30.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 31,
        "title": "Image-31",
        "category": "commercial",
        "description": "Description of Image-31",
        "imageBefore": "/gallery/image-31.jpeg",
        "imageAfter": "/gallery/image-31.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 32,
        "title": "Image-32",
        "category": "interior",
        "description": "Description of Image-32",
        "imageBefore": "/gallery/image-32.jpeg",
        "imageAfter": "/gallery/image-32.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 33,
        "title": "Image-33",
        "category": "exterior",
        "description": "Description of Image-33",
        "imageBefore": "/gallery/image-33.jpeg",
        "imageAfter": "/gallery/image-33.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 34,
        "title": "Image-34",
        "category": "commercial",
        "description": "Description of Image-34",
        "imageBefore": "/gallery/image-34.jpeg",
        "imageAfter": "/gallery/image-34.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 35,
        "title": "Image-35",
        "category": "interior",
        "description": "Description of Image-35",
        "imageBefore": "/gallery/image-35.jpeg",
        "imageAfter": "/gallery/image-35.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 37,
        "title": "Image-37",
        "category": "commercial",
        "description": "Description of Image-37",
        "imageBefore": "/gallery/image-36.jpeg",
        "imageAfter": "/gallery/image-37.jpeg",
        "isBeforeAfter": true
        },
        {
        "id": 39,
        "title": "Image-39",
        "category": "exterior",
        "description": "Description of Image-39",
        "imageBefore": "/gallery/image-38.jpeg",
        "imageAfter": "/gallery/image-39.jpeg",
        "isBeforeAfter": true
        },
        {
        "id": 41,
        "title": "Image-41",
        "category": "interior",
        "description": "Description of Image-41",
        "imageBefore": "/gallery/image-40.jpeg",
        "imageAfter": "/gallery/image-41.jpeg",
        "isBeforeAfter": true
        },
        {
        "id": 42,
        "title": "Image-42",
        "category": "exterior",
        "description": "Description of Image-42",
        "imageBefore": "/gallery/image-42.jpeg",
        "imageAfter": "/gallery/image-42.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 44,
        "title": "Image-44",
        "category": "interior",
        "description": "Description of Image-44",
        "imageBefore": "/gallery/image-43.jpeg",
        "imageAfter": "/gallery/image-44.jpeg",
        "isBeforeAfter": true
        },
        {
        "id": 46,
        "title": "Image-46",
        "category": "commercial",
        "description": "Description of Image-46",
        "imageBefore": "/gallery/image-45.jpeg",
        "imageAfter": "/gallery/image-46.jpeg",
        "isBeforeAfter": true
        },
        {
        "id": 48,
        "title": "Image-48",
        "category": "exterior",
        "description": "Description of Image-48",
        "imageBefore": "/gallery/image-47.jpeg",
        "imageAfter": "/gallery/image-48.jpeg",
        "isBeforeAfter": true
        },
        {
        "id": 50,
        "title": "Image-50",
        "category": "interior",
        "description": "Description of Image-50",
        "imageBefore": "/gallery/image-49.jpeg",
        "imageAfter": "/gallery/image-50.jpeg",
        "isBeforeAfter": true
        },
        {
        "id": 52,
        "title": "Image-52",
        "category": "commercial",
        "description": "Description of Image-52",
        "imageBefore": "/gallery/image-51.jpeg",
        "imageAfter": "/gallery/image-52.jpeg",
        "isBeforeAfter": true
        },
        {
        "id": 53,
        "title": "Image-53",
        "category": "interior",
        "description": "Description of Image-53",
        "imageBefore": "/gallery/image-53.jpeg",
        "imageAfter": "/gallery/image-54.jpeg",
        "isBeforeAfter": true
        },
        {
        "id": 55,
        "title": "Image-55",
        "category": "commercial",
        "description": "Description of Image-55",
        "imageBefore": "/gallery/image-55.jpeg",
        "imageAfter": "/gallery/image-55.jpeg",
        "isBeforeAfter": false
        },
        {
        "id": 56,
        "title": "Image-56",
        "category": "interior",
        "description": "Description of Image-56",
        "imageBefore": "/gallery/image-56.jpeg",
        "imageAfter": "/gallery/image-56.jpeg",
        "isBeforeAfter": false
        }
  ]

  const filteredItems =
  activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

const filteredBeforeAfterItems = filteredItems.filter((item) => item.isBeforeAfter)

// Prepare images for lightbox
const lightboxImages = filteredItems.map(item => ({
  src: item.imageAfter,
  alt: item.title,
  title: item.title,
  category: item.category
}))

// Prepare before/after images for lightbox
const beforeAfterLightboxImages = filteredBeforeAfterItems.flatMap(item => [
  {
    src: item.imageBefore,
    alt: `${item.title} - Before`,
    title: `${item.title} - Before`,
    category: item.category
  },
  {
    src: item.imageAfter,
    alt: `${item.title} - After`,
    title: `${item.title} - After`,
    category: item.category
  }
])

const openLightbox = (index: number) => {
  setLightboxIndex(index)
  setLightboxOpen(true)
}

const openBeforeAfterLightbox = (itemIndex: number, isBefore: boolean) => {
  // Each item has 2 images (before and after)
  const index = itemIndex * 2 + (isBefore ? 0 : 1)
  setLightboxIndex(index)
  setLightboxOpen(true)
}

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
              {filteredItems.map((item, index) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div 
                    className="relative h-64 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={item.imageAfter || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {item.isBeforeAfter && (
                      <div className="absolute top-2 right-2 bg-blue-700 text-white text-xs px-2 py-1 rounded">
                        Before/After Available
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="text-white opacity-0 hover:opacity-100 transition-opacity text-sm font-medium">
                        Click to enlarge
                      </span>
                    </div>
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
                filteredBeforeAfterItems.map((item, index) => (
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
                        <div 
                          className="relative h-64 md:h-80 cursor-pointer"
                          onClick={() => openBeforeAfterLightbox(index, true)}
                        >
                          <Image
                            src={item.imageBefore || "/placeholder.svg"}
                            alt={`${item.title} Before`}
                            fill
                            className="object-cover rounded transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors rounded flex items-center justify-center">
                            <span className="text-white opacity-0 hover:opacity-100 transition-opacity text-sm font-medium">
                              Click to enlarge
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium text-center">After</p>
                        <div 
                          className="relative h-64 md:h-80 cursor-pointer"
                          onClick={() => openBeforeAfterLightbox(index, false)}
                        >
                          <Image
                            src={item.imageAfter || "/placeholder.svg"}
                            alt={`${item.title} After`}
                            fill
                            className="object-cover rounded transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors rounded flex items-center justify-center">
                            <span className="text-white opacity-0 hover:opacity-100 transition-opacity text-sm font-medium">
                              Click to enlarge
                            </span>
                          </div>
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

      {/* Lightbox */}
      {viewMode === "grid" ? (
        <ImageLightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      ) : (
        <ImageLightbox
          images={beforeAfterLightboxImages}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}

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
                {/* <Facebook className="h-5 w-5" /> */}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* <Instagram className="h-5 w-5" /> */}
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
                {/* <Phone className="h-5 w-5 mr-2 text-gray-400" /> */}
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2 text-gray-400"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 13.5c.5 1.5 2.5 2 4 1" />
                </svg>
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Instagram className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">@odapainting</span>
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
