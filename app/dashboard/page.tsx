import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, Settings, Bell, User, Heart } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full md:w-64 space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#4B6BFB] flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">John Doe</h3>
                      <p className="text-sm text-[#4B5563]">john@example.com</p>
                    </div>
                  </div>
                  
                  <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <Home className="w-5 h-5 mr-2" />
                      Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Heart className="w-5 h-5 mr-2" />
                      Saved Properties
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Bell className="w-5 h-5 mr-2" />
                      Notifications
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="w-5 h-5 mr-2" />
                      Settings
                    </Button>
                  </nav>
                </CardContent>
              </Card>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="properties">My Properties</TabsTrigger>
                  <TabsTrigger value="bookings">Bookings</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm font-medium text-[#4B5563]">
                          Total Properties
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">3</div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm font-medium text-[#4B5563]">
                          Active Bookings
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">2</div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm font-medium text-[#4B5563]">
                          Total Earnings
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$1,234</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                          <div key={i} className="flex items-center justify-between py-4 border-b last:border-0">
                            <div>
                              <p className="font-medium">New Booking Request</p>
                              <p className="text-sm text-[#4B5563]">2 bedroom apartment in BKK1</p>
                            </div>
                            <p className="text-sm text-[#4B5563]">2 hours ago</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="properties" className="space-y-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">My Properties</h2>
                    <Button className="bg-[#4B6BFB] hover:bg-[#3451E0]">
                      Add New Property
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3].map((_, i) => (
                      <Card key={i}>
                        <CardContent className="p-6">
                          <div className="aspect-video bg-[#F8FAFC] rounded-lg mb-4" />
                          <h3 className="font-semibold mb-2">2 Bedroom Apartment in BKK1</h3>
                          <p className="text-[#4B5563] mb-4">$800/month</p>
                          <div className="flex space-x-2">
                            <Button variant="outline" className="flex-1">Edit</Button>
                            <Button variant="outline" className="flex-1">View</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="bookings" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Active Bookings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2].map((_, i) => (
                          <div key={i} className="flex items-center justify-between py-4 border-b last:border-0">
                            <div>
                              <p className="font-medium">2 Bedroom Apartment in BKK1</p>
                              <p className="text-sm text-[#4B5563]">Booked by: Sarah Smith</p>
                              <p className="text-sm text-[#4B5563]">Duration: 6 months</p>
                            </div>
                            <Button variant="outline">View Details</Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 