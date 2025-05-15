"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Mail, Clock, Instagram, Phone } from "lucide-react"
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
    "id": 3,
    "title": "Painting Transformation in Open Kitchen and Living Area",
    "category": "interior",
    "description": "Painting project that visually integrated the kitchen and living room with a neutral color palette. The result is a modern and inviting space, with paintwork that highlights the clean lines and architectural features.",
    "imageBefore": "/gallery/image-3.jpeg",
    "imageAfter": "/gallery/image-3.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 37,
    "title": "Exterior House Painting with Fresh Yellow Siding",
    "category": "exterior",
    "description": "Exterior painting service on this two-story house, applying a fresh coat of yellow siding and white trim to enhance its curb appeal.",
    "imageBefore": "/gallery/image-36.jpeg",
    "imageAfter": "/gallery/image-37.jpeg",
    "isBeforeAfter": true
  },
  {
    "id": 13,
    "title": "Custom Exterior Painting of a Modern School Building",
    "category": "commercial",
    "description": "Exterior painting project on a contemporary school building, with colors and finishes that enhance the architectural design and visual identity of the institution.",
    "imageBefore": "/gallery/image-13.jpeg",
    "imageAfter": "/gallery/image-13.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 25,
    "title": "Painting in Office Area with Exit Signage",
    "category": "commercial",
    "description": "Painting service in an office area, with attention to lighting and the integration of exit signage, ensuring a safe and well-finished environment.",
    "imageBefore": "/gallery/image-25.jpeg",
    "imageAfter": "/gallery/image-25.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 30,
    "title": "Residential Facade Preparation for Painting",
    "category": "exterior",
    "description": "Preparation stage of this house's facade for painting, with removal of old paint and necessary repairs to ensure perfect adhesion of the new yellow color.",
    "imageBefore": "/gallery/image-30.jpeg",
    "imageAfter": "/gallery/image-30.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 1,
    "title": "Living Space Revitalized with Neutral Paint Application",
    "category": "interior",
    "description": "Application of neutral-toned paint on the walls of this living space, creating a bright and airy atmosphere. The paint job enhances the architectural details and provides a pristine backdrop for future décor.",
    "imageBefore": "/gallery/image-1.jpeg",
    "imageAfter": "/gallery/image-1.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 44,
    "title": "Living Room Interior Painting with Gray Built-in Shelves",
    "category": "interior",
    "description": "Interior painting service in a living room, highlighting the gray built-in bookshelves surrounding the fireplace and complementing the light hardwood floors with neutral wall paint.",
    "imageBefore": "/gallery/image-43.jpeg",
    "imageAfter": "/gallery/image-44.jpeg",
    "isBeforeAfter": true
  },
  {
    "id": 14,
    "title": "Classroom Painting Preparation",
    "category": "commercial",
    "description": "Image of a classroom in the preparation phase for painting, with marked walls and materials ready for the application of the new color.",
    "imageBefore": "/gallery/image-14.jpeg",
    "imageAfter": "/gallery/image-14.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 11,
    "title": "Modern School Corridor with Blue Accent Painting",
    "category": "commercial",
    "description": "Painting work in a modern school corridor, with neutral-toned walls and architectural details highlighted by blue paint on the door frames.",
    "imageBefore": "/gallery/image-11.jpeg",
    "imageAfter": "/gallery/image-11.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 55,
    "title": "Exterior Wood Siding Treatment and Solar Panel Integration",
    "category": "exterior",
    "description": "Exterior wood siding treatment and painting on this multi-level house, ensuring protection and enhancing its natural look, while integrating seamlessly with the installed solar panels.",
    "imageBefore": "/gallery/image-55.jpeg",
    "imageAfter": "/gallery/image-55.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 31,
    "title": "Modern Kitchenette Painting with Blue Tile Accent",
    "category": "interior",
    "description": "Painting service that harmonized the white cabinets and light countertop of this modern kitchenette with an elegant dark blue tiled backsplash.",
    "imageBefore": "/gallery/image-31.jpeg",
    "imageAfter": "/gallery/image-31.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 20,
    "title": "Painting in Small Office Kitchenette",
    "category": "commercial",
    "description": "Painting service in a small office kitchenette, using light colors that optimize lighting and create a functional environment for daily use.",
    "imageBefore": "/gallery/image-20.jpeg",
    "imageAfter": "/gallery/image-20.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 2,
    "title": "Classic White Interior Door Painting Service",
    "category": "interior",
    "description": "Painting service for a six-panel interior door, using high-quality white paint for an elegant finish that complements various decor styles.",
    "imageBefore": "/gallery/image-2.jpeg",
    "imageAfter": "/gallery/image-2.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 26,
    "title": "Office Painting with Angled Ceiling Expertise",
    "category": "commercial",
    "description": "Painting challenge in an office with an angled ceiling, using techniques that enhanced the architecture of the space and provided a uniform finish.",
    "imageBefore": "/gallery/image-26.jpeg",
    "imageAfter": "/gallery/image-26.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 52,
    "title": "Exterior Painting with Gray Shingle Siding and White Door",
    "category": "exterior",
    "description": "Exterior painting project on this house with gray shingle siding, emphasizing the crisp white paint on the back door and the gray painted steps.",
    "imageBefore": "/gallery/image-51.jpeg",
    "imageAfter": "/gallery/image-52.jpeg",
    "isBeforeAfter": true
  },
  {
    "id": 42,
    "title": "Exterior House Painting with New Gray Siding",
    "category": "exterior",
    "description": "Exterior painting project on this two-story house, featuring newly applied gray siding and black shutters for a refreshed and modern look.",
    "imageBefore": "/gallery/image-42.jpeg",
    "imageAfter": "/gallery/image-42.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 10,
    "title": "Painting in Spacious and Bright School Cafeteria",
    "category": "commercial",
    "description": "Painting project that revitalized this large school cafeteria with light and uniform colors, taking advantage of natural light to create a functional and pleasant space.",
    "imageBefore": "/gallery/image-10.jpeg",
    "imageAfter": "/gallery/image-10.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 29,
    "title": "Residential Exterior Painting in Dark Blue",
    "category": "exterior",
    "description": "Transformation of the facade of this two-story house with dark blue paint and white trim, enhancing the architecture and beauty of the residence.",
    "imageBefore": "/gallery/image-29.jpeg",
    "imageAfter": "/gallery/image-29.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 33,
    "title": "Painting in School Hallway with Organization System",
    "category": "commercial",
    "description": "Painting service in a school hallway, with colors that complement the organization system of shelves and containers, creating a functional and pleasant environment.",
    "imageBefore": "/gallery/image-33.jpeg",
    "imageAfter": "/gallery/image-33.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 35,
    "title": "Painting at The Woodsum Gymnasium Entrance",
    "category": "commercial",
    "description": "Painting work in the entrance area of The Woodsum Gymnasium, with neutral tones and blue accents enhancing the welcoming atmosphere.",
    "imageBefore": "/gallery/image-35.jpeg",
    "imageAfter": "/gallery/image-35.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 27,
    "title": "Painting in Modern Reception with Blue Accent",
    "category": "commercial",
    "description": "Painting project that transformed this modern reception area with a blue accent wall, creating an elegant and inviting focal point.",
    "imageBefore": "/gallery/image-27.jpeg",
    "imageAfter": "/gallery/image-27.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 50,
    "title": "Exterior House Painting of Back with Gray Siding",
    "category": "exterior",
    "description": "Exterior painting service on the rear of this house, featuring gray siding and a screened-in porch, with a fresh coat enhancing the overall appearance.",
    "imageBefore": "/gallery/image-49.jpeg",
    "imageAfter": "/gallery/image-50.jpeg",
    "isBeforeAfter": true
  },
  {
    "id": 46,
    "title": "Interior Painting of Living Room with Fireplace and Shelving",
    "category": "interior",
    "description": "Interior painting work in a spacious living room with gray built-in shelves and a fireplace, showcasing the freshly painted millwork and light hardwood floors.",
    "imageBefore": "/gallery/image-45.jpeg",
    "imageAfter": "/gallery/image-46.jpeg",
    "isBeforeAfter": true
  },
  {
    "id": 15,
    "title": "Painting in School Hallway with Vibrant Colors",
    "category": "commercial",
    "description": "Painting work that transformed this school hallway with a combination of blue, beige, and orange details, resulting in a cheerful and inviting space.",
    "imageBefore": "/gallery/image-15.jpeg",
    "imageAfter": "/gallery/image-15.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 7,
    "title": "Painting Service in Newly Installed Kitchen",
    "category": "interior",
    "description": "Painting project in a newly installed kitchen with dark cabinets, where the wall paint complements the tones of the furniture and light countertop.",
    "imageBefore": "/gallery/image-7.jpeg",
    "imageAfter": "/gallery/image-7.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 21,
    "title": "Painting in Commercial Kitchenette with Safety Focus",
    "category": "commercial",
    "description": "Painting project in a commercial kitchenette, with a durable and easy-to-clean finish, integrating safety elements such as the fire extinguisher.",
    "imageBefore": "/gallery/image-21.jpeg",
    "imageAfter": "/gallery/image-21.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 17,
    "title": "Painting in Accessible Commercial Restroom",
    "category": "commercial",
    "description": "Painting project in a commercial restroom, ensuring a clean and durable finish, while complementing the accessibility features of the space.",
    "imageBefore": "/gallery/image-17.jpeg",
    "imageAfter": "/gallery/image-17.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 23,
    "title": "Painting in Functional Office Space",
    "category": "commercial",
    "description": "Painting work in a busy office, using neutral colors that provide a functional and distraction-free work environment.",
    "imageBefore": "/gallery/image-23.jpeg",
    "imageAfter": "/gallery/image-23.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 28,
    "title": "Commercial Interior Painting with Scissor Lift",
    "category": "commercial",
    "description": "Painting service in a large commercial interior, utilizing a scissor lift to reach high areas and ensure a professional and uniform finish.",
    "imageBefore": "/gallery/image-28.jpeg",
    "imageAfter": "/gallery/image-28.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 4,
    "title": "Interior Hallway with Fresh Neutral Paint Coat",
    "category": "interior",
    "description": "Professional paint application in an interior hallway, using a neutral tone that amplified the brightness and provided a clean, contemporary look to the space.",
    "imageBefore": "/gallery/image-4.jpeg",
    "imageAfter": "/gallery/image-4.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 22,
    "title": "Finishing of Gray Interior Door with Gold Detail",
    "category": "commercial",
    "description": "Painting service that enhanced this gray interior door with a flawless finish, complemented by the gold handle, an elegant detail in the commercial space.",
    "imageBefore": "/gallery/image-22.jpeg",
    "imageAfter": "/gallery/image-22.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 5,
    "title": "Closet Door Renovation with White Paint",
    "category": "interior",
    "description": "Painting service that revitalized this interior closet door with a coat of white paint, providing a fresh and updated appearance integrated with the surrounding wall.",
    "imageBefore": "/gallery/image-5.jpeg",
    "imageAfter": "/gallery/image-5.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 8,
    "title": "Vibrant Painting in School Hallway",
    "category": "commercial",
    "description": "Painting service in a school hallway, combining blue, beige, and orange accents to create a cheerful and well-lit environment ideal for an educational setting.",
    "imageBefore": "/gallery/image-8.jpeg",
    "imageAfter": "/gallery/image-8.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 53,
    "title": "Exterior House Painting with Dark Blue Siding",
    "category": "exterior",
    "description": "Exterior painting service on this two-story house, applying a rich dark blue to the siding, creating a striking contrast with the surrounding greenery.",
    "imageBefore": "/gallery/image-53.jpeg",
    "imageAfter": "/gallery/image-54.jpeg",
    "isBeforeAfter": true
  },
  {
    "id": 39,
    "title": "Dining Room Interior Painting Preparation",
    "category": "interior",
    "description": "Interior painting project in a dining room, showing the preparation phase with teal upper walls and white wainscoting ready for the final coat.",
    "imageBefore": "/gallery/image-38.jpeg",
    "imageAfter": "/gallery/image-39.jpeg",
    "isBeforeAfter": true
  },
  {
    "id": 6,
    "title": "Bedroom Painting in Neutral Tones with White Doors",
    "category": "interior",
    "description": "Painting work in a bedroom, using neutral tones on the walls to create a serene atmosphere, with a focus on the crisp white finish on the doors.",
    "imageBefore": "/gallery/image-6.jpeg",
    "imageAfter": "/gallery/image-6.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 41,
    "title": "Bright Living Room Interior Painting",
    "category": "interior",
    "description": "Interior painting service in a living room, applying fresh white paint to the walls, complementing the stone fireplace and hardwood floors.",
    "imageBefore": "/gallery/image-40.jpeg",
    "imageAfter": "/gallery/image-41.jpeg",
    "isBeforeAfter": true
  },
  {
    "id": 9,
    "title": "Painting Preparation in School Cafeteria",
    "category": "commercial",
    "description": "Image of a school cafeteria in the process of being prepared for painting, with tables and chairs moved and areas isolated, aiming for the space's renovation.",
    "imageBefore": "/gallery/image-9.jpeg",
    "imageAfter": "/gallery/image-9.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 16,
    "title": "Office Reception with Blue Accent Wall Painting",
    "category": "commercial",
    "description": "Painting service in an office reception area, featuring a blue accent wall that adds style and modernity to the commercial environment.",
    "imageBefore": "/gallery/image-16.jpeg",
    "imageAfter": "/gallery/image-16.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 18,
    "title": "Commercial Hallway with Modern Gray Paint",
    "category": "commercial",
    "description": "Application of gray paint in a commercial hallway, creating a professional and contemporary atmosphere, with doors that received a similar finish.",
    "imageBefore": "/gallery/image-18.jpeg",
    "imageAfter": "/gallery/image-18.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 12,
    "title": "Painting in Elementary School Hallway with Lockers",
    "category": "commercial",
    "description": "Painting service in a school hallway with blue lockers and orange accents, creating a stimulating and welcoming environment for students.",
    "imageBefore": "/gallery/image-12.jpeg",
    "imageAfter": "/gallery/image-12.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 34,
    "title": "Painting in School Gymnasium with Padded Walls",
    "category": "commercial",
    "description": "Painting project that revitalized the interior of this school gymnasium, with vibrant colors on the padded walls and the sports court.",
    "imageBefore": "/gallery/image-34.jpeg",
    "imageAfter": "/gallery/image-34.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 32,
    "title": "Painting in Empty Room with Protected Furniture",
    "category": "interior",
    "description": "Painting work in an empty room, with furniture carefully covered for protection, ensuring a flawless finish on the white walls.",
    "imageBefore": "/gallery/image-32.jpeg",
    "imageAfter": "/gallery/image-32.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 48,
    "title": "Bathroom Interior Painting with Dark Vanity Focus",
    "category": "interior",
    "description": "Interior painting project in a bathroom, using a light neutral tone on the walls to contrast and highlight the dark-colored vanity with marble countertop and gold fixtures.",
    "imageBefore": "/gallery/image-47.jpeg",
    "imageAfter": "/gallery/image-48.jpeg",
    "isBeforeAfter": true
  },
  {
    "id": 56,
    "title": "Exterior House Painting with Blue Siding in Winter Setting",
    "category": "exterior",
    "description": "Exterior painting service on this house, applying a fresh coat of dark blue paint to the siding, providing a vibrant contrast to the winter landscape and snow.",
    "imageBefore": "/gallery/image-56.jpeg",
    "imageAfter": "/gallery/image-56.jpeg",
    "isBeforeAfter": false
  },
  {
    "id": 24,
    "title": "Organization and Painting in Office Workspace",
    "category": "commercial",
    "description": "Painting project that contributed to an organized and visually pleasing office workspace, with colors that favor concentration.",
    "imageBefore": "/gallery/image-24.jpeg",
    "imageAfter": "/gallery/image-24.jpeg",
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
                <span className="text-xl font-bold">Oda Painting Services</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional painting services for residential and commercial properties across the United States.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/odapaintingservices/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Interior Painting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Exterior Painting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Commercial Painting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Residential Painting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cabinet Refinishing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-400">+(475) 237-8189</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-400">odapaintingservices@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-400">Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>{new Date().getFullYear()} - Oda Painting Services</p>
          </div>
        </div>
      </footer>
  </div>
)
}
