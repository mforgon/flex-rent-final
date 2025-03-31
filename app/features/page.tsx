import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Shield, BarChart3, Upload, CreditCard, Users } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-[#4B6BFB]" />,
      title: "Flexible Rentals",
      description: "Choose from daily, weekly, or monthly rental options to suit your needs. Our flexible system adapts to your schedule."
    },
    {
      icon: <Shield className="w-12 h-12 text-[#4B6BFB]" />,
      title: "Secure Transactions",
      description: "Every payment is protected with bank-level security. Feel confident with every transaction you make."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-[#4B6BFB]" />,
      title: "Real-time Analytics",
      description: "Track your property performance with detailed analytics. Make data-driven decisions to maximize your earnings."
    },
    {
      icon: <Upload className="w-12 h-12 text-[#4B6BFB]" />,
      title: "Easy ID Upload",
      description: "Simple and secure ID verification process. Upload your documents with just a few clicks."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-[#4B6BFB]" />,
      title: "Online Payments",
      description: "Accept payments online through our secure payment gateway. Get paid faster and more efficiently."
    },
    {
      icon: <Users className="w-12 h-12 text-[#4B6BFB]" />,
      title: "Tenant Screening",
      description: "Review tenant applications and verify their credentials easily. Find the right tenants for your properties."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-serif font-bold mb-6">
                Powerful Features for{" "}
                <span className="text-[#4B6BFB]">Property Management</span>
              </h1>
              <p className="text-xl text-[#4B5563] mb-8">
                Discover how FlexRent makes property management easier and more efficient with our comprehensive set of features.
              </p>
              <Button 
                size="lg" 
                className="bg-[#4B6BFB] hover:bg-[#3451E0] text-white px-8"
              >
                Get Started Free
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-[#4B5563]">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Ready to streamline your property management?
              </h2>
              <p className="text-[#4B5563] mb-8">
                Join thousands of property owners who trust FlexRent to manage their rentals efficiently.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#4B6BFB] hover:bg-[#3451E0] text-white px-8"
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 