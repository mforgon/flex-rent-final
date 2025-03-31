import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: "📅",
    title: "Flexible Rental Options",
    description: "Rent properties for any duration - daily, weekly, or monthly with dynamic pricing."
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    description: "Track revenue, occupancy rates, and property performance with visual dashboards."
  },
  {
    icon: "💳",
    title: "Streamlined Payments",
    description: "Secure payment processing with automatic receipts and booking confirmations."
  },
  {
    icon: "🏠",
    title: "Property Listings",
    description: "Showcase your properties with beautiful listings and detailed information."
  },
  {
    icon: "🔒",
    title: "ID Verification",
    description: "Enhance security with built-in tenant verification for peace of mind."
  },
  {
    icon: "🔧",
    title: "Maintenance Management",
    description: "Track repair requests, schedule maintenance, and manage service providers."
  },
  {
    icon: "📱",
    title: "Mobile Friendly",
    description: "Manage your properties on the go with our responsive mobile experience."
  },
  {
    icon: "⭐",
    title: "Subscription Tiers",
    description: "Choose the plan that works for you with flexible subscription options."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything you need to manage your rental properties</h2>
          <p className="text-xl text-muted-foreground">
            FlexRent combines powerful tools and intuitive design to streamline every aspect of property management.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-none bg-white">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 