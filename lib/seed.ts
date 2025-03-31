import { prisma } from "./db"
import { hash } from "bcrypt"

async function main() {
  try {
    // Create a test owner
    const ownerPassword = await hash("test123", 12)
    const owner = await prisma.user.create({
      data: {
        email: "owner@example.com",
        password: ownerPassword,
        role: "OWNER",
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "+855123456789",
        isVerified: true,
        subscription: "STANDARD"
      }
    })

    // Create a test tenant
    const tenantPassword = await hash("test123", 12)
    const tenant = await prisma.user.create({
      data: {
        email: "tenant@example.com",
        password: tenantPassword,
        role: "TENANT",
        firstName: "Jane",
        lastName: "Smith",
        phoneNumber: "+855987654321",
        isVerified: true
      }
    })

    // Create a test property
    const property = await prisma.property.create({
      data: {
        ownerId: owner.id,
        title: "Modern Apartment in BKK1",
        description: "Beautiful 2-bedroom apartment in the heart of BKK1",
        address: "Street 51, BKK1",
        city: "Phnom Penh",
        coordinates: { latitude: 11.5564, longitude: 104.9282 },
        price: 800,
        weeklyDiscount: 5,
        monthlyDiscount: 10,
        propertyType: "APARTMENT",
        bedrooms: 2,
        bathrooms: 2,
        maxOccupancy: 4,
        amenities: ["wifi", "ac", "parking", "pool"],
        images: {
          create: [
            {
              url: "https://example.com/image1.jpg",
              isPrimary: true
            }
          ]
        }
      }
    })

    console.log("Database seeded successfully!")
    console.log({
      owner: { id: owner.id, email: owner.email },
      tenant: { id: tenant.id, email: tenant.email },
      property: { id: property.id, title: property.title }
    })
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 