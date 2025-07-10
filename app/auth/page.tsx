import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, LogIn } from "lucide-react";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ai-bg via-ai-surface to-ai-blue-light/20 p-4">
      <Card className="w-full max-w-md border-0 shadow-elegant-lg bg-ai-surface/80 backdrop-blur-sm animate-slide-up">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-ai-blue to-ai-green rounded-xl flex items-center justify-center shadow-elegant">
              <Lock className="w-6 h-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-ai-text mb-2">Welcome Back</CardTitle>
          <p className="text-ai-text-light">Sign in to your account to continue</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="email" className="text-ai-text font-semibold">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your email address"
              className="bg-ai-bg border-ai-border rounded-xl"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="password" className="text-ai-text font-semibold">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="bg-ai-bg border-ai-border rounded-xl"
            />
          </div>

          <Button className="w-full bg-gradient-to-r from-ai-blue to-ai-green hover:from-ai-blue/90 hover:to-ai-green/90 text-white px-6 py-3 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            <LogIn className="w-5 h-5 mr-2" />
            Sign In
          </Button>

          <p className="text-sm text-ai-text-light text-center">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-ai-blue font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

