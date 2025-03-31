import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { MapIcon } from "lucide-react"

// Sample properties data (in real app, this would come from an API)
const properties = [
  {
    id: "1",
    title: "Modern Apartment in BKK1",
    location: "BKK1, Phnom Penh",
    price: { daily: 35, weekly: 210, monthly: 800 },
    images: ["/images/property-1.jpg"],
    beds: 2,
    baths: 2,
    size: 85,
    rating: 4.8
  },
  {
    id: "2",
    title: "Riverside Studio with Balcony",
    location: "Daun Penh, Phnom Penh",
    price: { daily: 25, weekly: 150, monthly: 550 },
    images: ["/images/property-2.jpg"],
    beds: 1,
    baths: 1,
    size: 45,
    rating: 4.6
  },
  {
    id: "3",
    title: "Luxury Villa with Pool",
    location: "Toul Kork, Phnom Penh",
    price: { daily: 120, weekly: 750, monthly: 2800 },
    images: ["/images/property-3.jpg"],
    beds: 4,
    baths: 3,
    size: 250,
    rating: 4.9
  }
]

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif font-bold mb-4">
              Find Your Perfect Property
            </h1>
            <p className="text-[#4B5563] max-w-2xl mx-auto">
              Browse our selection of premium properties in Cambodia with flexible rental options - daily, weekly, or monthly stays available.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-xl">Find Your Perfect Rental</h2>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-sm text-[#4B5563]">View:</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="bg-[#4B6BFB] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                  </Button>
                  <Button variant="outline" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="3" y1="12" y2="12"/><line x1="21" x2="3" y1="18" y2="18"/></svg>
                  </Button>
                  <Button variant="outline" size="icon">
                    <MapIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Input 
                placeholder="Search by property name"
                className="md:col-span-2"
              />
              <Select defaultValue="">
                <option value="">Any Location</option>
                <option value="bkk1">BKK1</option>
                <option value="bkk2">BKK2</option>
                <option value="bkk3">BKK3</option>
                <option value="daun-penh">Daun Penh</option>
                <option value="toul-kork">Toul Kork</option>
              </Select>
              <Select defaultValue="">
                <option value="">Any Type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="room">Room</option>
              </Select>
              <Button className="bg-[#4B6BFB] hover:bg-[#3451E0]">
                Search Properties
              </Button>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm text-[#4B5563]">All Properties</span>
            <span>·</span>
            <span className="text-sm text-[#4B5563]">Apartments</span>
            <span>·</span>
            <span className="text-sm text-[#4B5563]">Houses</span>
            <span>·</span>
            <span className="text-sm text-[#4B5563]">Villas</span>
            <span>·</span>
            <span className="text-sm text-[#4B5563]">Rooms</span>
          </div>

          {/* Sort Dropdown */}
          <div className="flex justify-end mb-6">
            <Select defaultValue="default" className="w-48">
              <option value="default">Default Sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </Select>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="outline" className="bg-[#4B6BFB] text-white">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </nav>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 