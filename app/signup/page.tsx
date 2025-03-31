import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select } from "@/components/ui/select"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <Link href="/" className="inline-block mb-6">
            <div className="font-semibold text-2xl flex items-center justify-center">
              <span className="text-[#4B6BFB]">Flex</span>
              <span className="text-[#E97777]">Rent</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-sm text-[#4B5563]">
            Join FlexRent to start managing your properties
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
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
              placeholder="Enter your email"
              type="email"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              placeholder="Create a password"
              type="password"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="accountType">
              Account Type
            </label>
            <Select defaultValue="tenant">
              <option value="tenant">Tenant</option>
              <option value="owner">Property Owner</option>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="rounded border-gray-300 text-[#4B6BFB] focus:ring-[#4B6BFB]"
              required
            />
            <label htmlFor="terms" className="text-sm text-[#4B5563]">
              I agree to the{" "}
              <Link href="/terms" className="text-[#4B6BFB] hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#4B6BFB] hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
          <Button className="w-full bg-[#4B6BFB] hover:bg-[#3451E0]">
            Create Account
          </Button>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm text-[#4B5563]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#4B6BFB] hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
} 