import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for getting started with property management",
    features: [
      "Manage up to 3 properties",
      "Basic analytics dashboard",
      "Standard support",
      "Property listing creation",
      "Basic booking management",
      "Simple ID verification"
    ],
    cta: "Get Started",
    highlighted: false
  },
  {
    name: "Standard",
    price: "15",
    description: "Great for growing property portfolios",
    features: [
      "Manage up to 10 properties",
      "Intermediate analytics",
      "Priority listing in search",
      "Early access to new features",
      "Priority email support",
      "Booking calendar integration",
      "Revenue trend analysis",
      "Occupancy tracking"
    ],
    cta: "Start Free Trial",
    highlighted: true
  },
  {
    name: "Premium",
    price: "29",
    description: "For professional property managers",
    features: [
      "Unlimited properties",
      "Advanced analytics",
      "AI-powered pricing",
      "Featured listings",
      "Priority 24/7 support",
      "Automated rent adjustments",
      "Detailed revenue breakdowns",
      "Custom reporting",
      "Bulk property management"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-serif font-bold mb-6">
                Simple, Transparent{" "}
                <span className="text-[#4B6BFB]">Pricing</span>
              </h1>
              <p className="text-xl text-[#4B5563] mb-4">
                Choose the perfect plan for your property management needs
              </p>
              <p className="text-[#4B5563]">
                All plans include a 14-day free trial. No credit card required.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tiers.map((tier, index) => (
                <Card 
                  key={index} 
                  className={`relative ${
                    tier.highlighted 
                      ? "border-[#4B6BFB] shadow-lg" 
                      : "border-gray-200"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#4B6BFB] text-white px-3 py-1 rounded-full text-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">${tier.price}</span>
                      <span className="text-[#4B5563]">/month</span>
                    </div>
                    <p className="text-[#4B5563] text-sm">
                      {tier.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-[#4B6BFB] mr-2 flex-shrink-0" />
                          <span className="text-[#4B5563]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${
                        tier.highlighted
                          ? "bg-[#4B6BFB] hover:bg-[#3451E0]"
                          : "bg-white text-[#4B6BFB] border-[#4B6BFB] border hover:bg-[#F8FAFC]"
                      }`}
                    >
                      {tier.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold mb-2">Can I upgrade or downgrade my plan?</h3>
                  <p className="text-[#4B5563]">
                    Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
                  <p className="text-[#4B5563]">
                    We accept all major credit cards and bank transfers. Payments are processed securely through Stripe.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Is there a contract or commitment?</h3>
                  <p className="text-[#4B5563]">
                    No, all plans are month-to-month. You can cancel at any time without penalty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 