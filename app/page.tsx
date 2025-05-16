import { MainNav } from "@/components/main-nav"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Clock, MapPin, Facebook, Instagram, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <MainNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative h-[80vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/backdrop/backdrop.jpeg?height=1080&width=1920"
              alt="House Painting"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Transform Your Home With Professional Painting
              </h1>
              <p className="text-xl mb-8">
                Quality painting services that bring your vision to life. Trusted by homeowners across the United
                States.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                  Get a Free Estimate
                </Button>
                </Link>
                                <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
                >
                  View Our Work
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Painting Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a wide range of professional painting services to meet all your residential and commercial
                needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Interior Painting */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <Image
                    src="/services/interior.jpeg?height=400&width=600"
                    alt="Interior Painting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Interior Painting</h3>
                  <p className="text-gray-600 mb-4">
                    Transform your living spaces with our premium interior painting services. We use high-quality paints
                    that are durable and long-lasting.
                  </p>
                  <Link href="#contact" className="text-blue-700 font-medium inline-flex items-center">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Exterior Painting */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <Image
                    src="/services/exterior.jpeg?height=400&width=600"
                    alt="Exterior Painting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Exterior Painting</h3>
                  <p className="text-gray-600 mb-4">
                    Enhance your home's curb appeal with our exterior painting services. We use weather-resistant paints
                    that protect your home.
                  </p>
                  <Link href="#contact" className="text-blue-700 font-medium inline-flex items-center">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Commercial Painting */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <Image
                    src="/services/commercial.jpeg?height=400&width=600"
                    alt="Commercial Painting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Commercial Painting</h3>
                  <p className="text-gray-600 mb-4">
                    Create a professional environment for your business with our commercial painting services. Minimal
                    disruption to your operations.
                  </p>
                  <Link href="#contact" className="text-blue-700 font-medium inline-flex items-center">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Residential Painting */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <Image
                    src="/services/residencial.jpeg?height=400&width=600"
                    alt="Residential Painting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Residential Painting</h3>
                  <p className="text-gray-600 mb-4">
                    Complete home painting solutions tailored to your style and preferences. We handle projects of all
                    sizes.
                  </p>
                  <Link href="#contact" className="text-blue-700 font-medium inline-flex items-center">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Cabinet Refinishing */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <Image
                    src="/services/cabinet.jpeg?height=400&width=600"
                    alt="Cabinet Refinishing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cabinet Refinishing</h3>
                  <p className="text-gray-600 mb-4">
                    Update your kitchen without the cost of replacement. Our cabinet refinishing services give your
                    cabinets a fresh new look.
                  </p>
                  <Link href="#contact" className="text-blue-700 font-medium inline-flex items-center">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Work</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse through our portfolio of completed projects to see the quality of our work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Before/After 1 */}
              <Link href="/gallery" className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/gallery/image-13.jpeg?height=600&width=800"
                  alt="Before and After Painting"
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-bold">Custom Exterior Painting of a Modern School Building</p>
                    <p className="text-sm">Commercial Painting</p>
                  </div>
                </div>
              </Link>

              {/* Before/After 2 */}
              <Link href="/gallery" className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/gallery/image-16.jpeg?height=600&width=800"
                  alt="Before and After Painting"
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-bold">Office Reception with Blue Accent Wall Painting</p>
                    <p className="text-sm">Exterior Painting</p>
                  </div>
                </div>
              </Link>

              {/* Before/After 3 */}
              <Link href="/gallery" className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/gallery/image-29.jpeg?height=600&width=800"
                  alt="Before and After Painting"
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-bold">Residential Exterior Painting in Dark Blue</p>
                    <p className="text-sm">Exterior Painting</p>
                  </div>
                </div>
              </Link>

              {/* Before/After 4 */}
              <Link href="/gallery" className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/gallery/image-37.jpeg?height=600&width=800"
                  alt="Before and After Painting"
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-bold">Exterior House Painting with Fresh Yellow Siding</p>
                    <p className="text-sm">Exterior Painting</p>
                  </div>
                </div>
              </Link>

              {/* Before/After 5 */}
              <Link href="/gallery" className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/gallery/image-44.jpeg?height=600&width=800"
                  alt="Before and After Painting"
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-bold">Living Room Interior Painting with Gray Built-in Shelves</p>
                    <p className="text-sm">Interior Painting</p>
                  </div>
                </div>
              </Link>

              {/* Before/After 6 */}
              <Link href="/gallery" className="relative group overflow-hidden rounded-lg">
                <Image
                  src="/gallery/image-54.jpeg?height=600&width=800"
                  alt="Before and After Painting"
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-bold">Exterior House Painting with Dark Blue Siding</p>
                    <p className="text-sm">Exterior Painting</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center mt-6">
              <Link href="/gallery">
                <Button className="bg-blue-700 hover:bg-blue-800">View Full Gallery</Button>
              </Link>
            </div>
          </div>
        </section>

<section id="contact" className="py-16 from-white to-blue-50 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ready to transform your space? Reach out to us for a free consultation and estimate.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Contact Info */}
                  <div className="lg:col-span-2 bg-blue-700 text-white p-8 lg:p-12">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <p className="mb-8 opacity-90">
                      We're here to answer any questions you have about our painting services.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-blue-600 p-3 rounded-full mr-4">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-sm opacity-90">Phone</p>
                          <a href="tel:+15551234567" className="text-lg hover:underline">
                            (475) 237-8189
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-blue-600 p-3 rounded-full mr-4">
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
                            className="h-5 w-5"
                          >
                            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                            <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                            <path d="M9.5 13.5c.5 1.5 2.5 2 4 1" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-sm opacity-90">WhatsApp</p>
                          <a
                            href="https://wa.me/14752378189"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg hover:underline"
                          >
                            (475) 237-8189
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-blue-600 p-3 rounded-full mr-4">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-sm opacity-90">Email</p>
                          <a href="mailto:odapaintingservices@gmail.com" className="text-lg hover:underline">
                            odapaintingservices@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-blue-600 p-3 rounded-full mr-4">
                          <Instagram className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-sm opacity-90">Instagram</p>
                          <a
                            href="https://instagram.com/odapaintingservices
"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg hover:underline"
                          >
                            @odapaintingservices
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact Options */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Quick Contact</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <a
                        href="https://wa.me/14752378189"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                      >
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
                          className="h-5 w-5 text-blue-700"
                        >
                          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M9.5 13.5c.5 1.5 2.5 2 4 1" />
                        </svg>
                        <span className="font-medium">WhatsApp Us</span>
                      </a>

                      <a
                        href="https://instagram.com/odapaintingservices"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <Instagram className="h-5 w-5 text-blue-700" />
                        <span className="font-medium">DM on Instagram</span>
                      </a>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-gray-800">Request a Free Estimate</h4>
                      <p className="text-gray-600 mb-4">
                        
Get in touch and receive a quote within 24 hours, free of charge and without obligation
                      </p>
                      <a href="https://wa.me/14752378189" target="_blank">
                      <Button className="w-full bg-blue-700 hover:bg-blue-800">Get Your Free Estimate</Button>
</a>
                    </div>

                    <div className="mt-8 text-center text-gray-500 text-sm">
                      <p>Business Hours: Monday-Friday 8AM-6PM, Saturday 9AM-2PM</p>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* Back to Top Button */}
      <Link
        href="#home"
        className="fixed bottom-6 right-6 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </Link>
    </div>
  )
}
