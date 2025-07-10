import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, UserPlus } from "lucide-react";
import { FcGoogle } from "react-icons/fc";  

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ai-bg via-ai-surface to-ai-blue-light/20 p-4">
      <Card className="w-full max-w-md border-0 shadow-elegant-lg bg-ai-surface/80 backdrop-blur-sm animate-slide-up">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-ai-blue to-ai-green rounded-xl flex items-center justify-center shadow-elegant">
              <UserPlus className="w-6 h-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-ai-text mb-2">Create Account</CardTitle>
          <p className="text-ai-text-light">Sign up to get started with AI Support</p>
        </CardHeader>

        <CardContent className="space-y-6">
          <Button 
            className="w-full border border-ai-border bg-white text-ai-text hover:bg-ai-blue-light/20 rounded-xl flex items-center justify-center space-x-3 shadow-elegant"
            variant="ghost"
          >
            <FcGoogle className="w-5 h-5" />
            <span className="font-semibold">Sign up with Google</span>
          </Button>

          <div className="flex items-center justify-center space-x-2 text-ai-text-light text-sm">
            <span className="border-t border-ai-border flex-grow"></span>
            <span>or</span>
            <span className="border-t border-ai-border flex-grow"></span>
          </div>

          {/* Formulaire classique */}
          <div className="space-y-3">
            <Label htmlFor="name" className="text-ai-text font-semibold">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              className="bg-ai-bg border-ai-border rounded-xl"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-ai-text font-semibold">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="email address"
              className="bg-ai-bg border-ai-border rounded-xl"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="password" className="text-ai-text font-semibold">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="bg-ai-bg border-ai-border rounded-xl"
            />
          </div>

          <Button className="w-full bg-gradient-to-r from-ai-blue to-ai-green hover:from-ai-blue/90 hover:to-ai-green/90 text-white px-6 py-3 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            Sign Up
          </Button>

          <p className="text-sm text-ai-text-light text-center">
            Already have an account?{" "}
            <Link href="/auth" className="text-ai-blue font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

