import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Support Bot - Customer Support Chatbot",
  description: "AI-powered customer support chatbot with document analysis",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-ai-bg min-h-screen`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
