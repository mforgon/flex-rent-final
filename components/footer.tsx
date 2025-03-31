import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <Link href="/" className="font-semibold text-xl flex items-center">
              <span className="text-[#4B6BFB]">Flex</span>
              <span className="text-[#E97777]">Rent</span>
            </Link>
            <p className="text-sm text-[#4B5563]">
              Reimagining property rental management in Cambodia with smart solutions for property owners and tenants.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#4B5563] hover:text-[#4B6BFB]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#4B5563] hover:text-[#4B6BFB]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#4B5563] hover:text-[#4B6BFB]">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/properties" className="text-[#4B5563] hover:text-[#4B6BFB]">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[#4B5563] hover:text-[#4B6BFB]">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-[#4B5563] hover:text-[#4B6BFB]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#4B5563] hover:text-[#4B6BFB]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Property Owners */}
          <div>
            <h3 className="font-semibold mb-4">For Property Owners</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/dashboard" className="text-[#4B5563] hover:text-[#4B6BFB]">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#4B5563] hover:text-[#4B6BFB]">
                  List Your Property
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#4B5563] hover:text-[#4B6BFB]">
                  Owner Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#4B5563] hover:text-[#4B6BFB]">
                  Property Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-[#4B5563] hover:text-[#4B6BFB]">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#4B5563] hover:text-[#4B6BFB]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#4B5563] hover:text-[#4B6BFB]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="mailto:support@flexrent.com" className="text-[#4B5563] hover:text-[#4B6BFB]">
                  support@flexrent.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <p className="text-center text-sm text-[#4B5563]">
            © {new Date().getFullYear()} FlexRent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 