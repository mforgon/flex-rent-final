import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Free Tier",
    price: "0",
    description: "Perfect for getting started with basic property management.",
    features: [
      "Up to 3 properties",
      "Basic analytics",
      "Standard booking management",
      "Email support"
    ],
    buttonText: "Start for Free",
    buttonVariant: "outline" as const,
    highlighted: false
  },
  {
    name: "Standard Tier",
    price: "15",
    description: "Perfect for growing your rental business with enhanced features.",
    features: [
      "Up to 10 properties",
      "Intermediate analytics",
      "Priority listing",
      "Early access to features",
      "Priority support"
    ],
    buttonText: "Get Standard",
    buttonVariant: "default" as const,
    highlighted: true,
    badge: "Best Value"
  },
  {
    name: "Premium Tier",
    price: "29",
    description: "Everything you need for professional property management.",
    features: [
      "Unlimited properties",
      "Advanced analytics",
      "AI-powered pricing",
      "Featured listings",
      "Priority support",
      "Custom reports"
    ],
    buttonText: "Get Premium",
    buttonVariant: "default" as const,
    highlighted: false
  }
]

export function PricingSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-sm text-[#4B5563] font-medium mb-2">
            Pricing
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-[#4B5563]">
            Choose the plan that works best for your business needs, with no hidden fees or long-term commitments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative bg-white ${
                tier.highlighted 
                  ? "border-2 border-[#4B6BFB] shadow-lg" 
                  : "border border-gray-200"
              }`}
            >
              {tier.badge && (
                <div className="absolute top-0 right-0 -translate-y-1/2 px-3 py-1 bg-[#4B6BFB] text-white rounded-full text-sm font-medium">
                  {tier.badge}
                </div>
              )}
              <CardHeader className="text-center pb-0 pt-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-[#4B5563]">/month</span>
                </div>
                <p className="text-[#4B5563] text-sm">{tier.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="mt-6 space-y-4 text-[#4B5563]">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-[#4B6BFB] mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full mt-8 ${
                    tier.highlighted 
                      ? "bg-[#4B6BFB] hover:bg-[#3451E0] text-white" 
                      : "bg-white text-[#4B6BFB] border-[#4B6BFB] hover:bg-[#F8FAFC]"
                  }`}
                >
                  {tier.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 