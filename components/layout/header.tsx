"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bot, FileText, MessageSquare, BarChart3, Settings, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/", icon: Sparkles },
    { name: "Documents", href: "/upload", icon: FileText },
    { name: "Chat", href: "/chat", icon: MessageSquare },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <header className="sticky top-0 z-50 bg-ai-surface/80 backdrop-blur-xl border-b border-ai-border/50 shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-ai-blue to-ai-green rounded-xl flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-300">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-ai-green rounded-full animate-pulse-glow"></div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-ai-text to-ai-text-light bg-clip-text text-transparent">
                  AI Support
                </span>
                <div className="text-xs text-ai-text-light font-medium">Intelligent Assistant</div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-ai-blue to-ai-green text-white shadow-elegant"
                        : "text-ai-text-light hover:text-ai-text hover:bg-ai-blue-light/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-ai-blue to-ai-green rounded-xl opacity-10"></div>
                    )}
                  </Button>
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-ai-green-light rounded-full">
              <div className="w-2 h-2 bg-ai-green rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-ai-green">Online</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
