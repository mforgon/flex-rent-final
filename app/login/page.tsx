import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <Link href="/" className="inline-block mb-6">
            <div className="font-semibold text-2xl flex items-center justify-center">
              <span className="text-[#4B6BFB]">Flex</span>
              <span className="text-[#E97777]">Rent</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-sm text-[#4B5563]">
            Enter your credentials to access your account
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
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
              placeholder="Enter your password"
              type="password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="rounded border-gray-300 text-[#4B6BFB] focus:ring-[#4B6BFB]"
              />
              <label htmlFor="remember" className="text-sm text-[#4B5563]">
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-[#4B6BFB] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Button className="w-full bg-[#4B6BFB] hover:bg-[#3451E0]">
            Sign in
          </Button>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm text-[#4B5563]">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#4B6BFB] hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
} 