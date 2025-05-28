import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { PrivacyBanner } from "@/components/privacy-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ONG România - Ajutăm Românii din Diaspora",
  description: "Organizație non-guvernamentală dedicată sprijinirii românilor din diaspora europeană",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <PrivacyBanner />
      </body>
    </html>
  )
}
