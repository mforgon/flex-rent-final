import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PropertyCardProps {
  id: string
  title: string
  location: string
  price: {
    daily: number
    weekly: number
    monthly: number
  }
  images: string[]
  beds: number
  baths: number
  size: number
  rating: number
  isFeatured?: boolean
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  images,
  beds,
  baths,
  size,
  rating,
  isFeatured
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/3]">
        {isFeatured && (
          <Badge className="absolute top-4 left-4 z-10 bg-coral-500">
            Featured
          </Badge>
        )}
        <Badge className="absolute top-4 right-4 z-10 bg-white text-black">
          ★ {rating}
        </Badge>
        <Image
          src={images[0]}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center text-muted-foreground mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 mr-1"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {location}
        </div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="grid grid-cols-3 gap-4 text-center mb-4">
          <div>
            <div className="text-sm text-muted-foreground">Beds</div>
            <div className="font-medium">{beds}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Baths</div>
            <div className="font-medium">{baths}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Size</div>
            <div className="font-medium">{size} m²</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="w-full">
          <div className="flex justify-between items-baseline mb-2">
            <div className="text-2xl font-bold">${price.monthly}/month</div>
            <Link 
              href={`/properties/${id}`}
              className="text-blue-700 hover:underline"
            >
              View
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            From ${price.daily}/day or ${price.weekly}/week
          </div>
        </div>
      </CardFooter>
    </Card>
  )
} 