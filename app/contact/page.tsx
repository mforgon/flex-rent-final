import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-[#4B5563] max-w-2xl mx-auto">
              Have questions about FlexRent? We&apos;re here to help. Send us a message and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-[#4B6BFB] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Office Address</h3>
                      <p className="text-[#4B5563]">
                        123 Street Name, BKK1<br />
                        Phnom Penh, Cambodia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-[#4B6BFB] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <a 
                        href="mailto:support@flexrent.com" 
                        className="text-[#4B6BFB] hover:underline"
                      >
                        support@flexrent.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[#4B6BFB] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <a 
                        href="tel:+85512345678" 
                        className="text-[#4B6BFB] hover:underline"
                      >
                        +855 12 345 678
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-[#F8FAFC] p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-[#4B5563]">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="firstName">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="lastName">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="subject">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Enter message subject"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    rows={6}
                    required
                  />
                </div>

                <Button className="w-full bg-[#4B6BFB] hover:bg-[#3451E0]">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 