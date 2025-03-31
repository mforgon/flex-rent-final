import { Navbar } from "@/components/navbar"
import { SearchBar } from "@/components/search-bar"
import { PropertyCard } from "@/components/property-card"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

// Sample data for featured properties
const featuredProperties = [
  {
    id: "1",
    title: "Modern Apartment in BKK1",
    location: "BKK1, Phnom Penh",
    price: {
      daily: 35,
      weekly: 210,
      monthly: 800
    },
    images: ["/images/property-1.jpg"],
    beds: 2,
    baths: 2,
    size: 85,
    rating: 4.8,
    isFeatured: true
  },
  {
    id: "2",
    title: "Riverside Studio with Balcony",
    location: "Daun Penh, Phnom Penh",
    price: {
      daily: 25,
      weekly: 150,
      monthly: 550
    },
    images: ["/images/property-2.jpg"],
    beds: 1,
    baths: 1,
    size: 45,
    rating: 4.6,
    isFeatured: true
  },
  {
    id: "3",
    title: "Luxury Villa with Pool",
    location: "Toul Kork, Phnom Penh",
    price: {
      daily: 120,
      weekly: 750,
      monthly: 2800
    },
    images: ["/images/property-3.jpg"],
    beds: 4,
    baths: 3,
    size: 250,
    rating: 4.9,
    isFeatured: true
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <main>
        <section className="pt-20 pb-32 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-sm text-[#4B5563] font-medium mb-4">
                Reimagining Property Rental in Cambodia
              </div>
              <h1 className="text-[3.5rem] leading-[1.1] font-serif font-bold mb-6">
                The Smart Way to{" "}
                <span className="text-[#4B6BFB]">Manage</span> and{" "}
                <span className="text-[#E97777]">Rent</span>{" "}
                Properties
              </h1>
              <p className="text-xl text-[#4B5563] mb-8">
                FlexRent streamlines property management with flexible rental options,
                maintenance tracking, and powerful analytics for property owners in
                Cambodia.
              </p>
              <div className="flex justify-center gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-[#4B6BFB] hover:bg-[#3451E0] text-white px-8"
                >
                  Get Started Free
                </Button>
              </div>
              <SearchBar />
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="text-sm text-[#4B5563] font-medium mb-2">
                Featured Properties
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">
                Discover our top rentals
              </h2>
              <p className="text-xl text-[#4B5563]">
                Explore our selection of premium properties with flexible rental options
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Pricing Section */}
        <PricingSection />
      </main>

      <Footer />
    </div>
  )
}
