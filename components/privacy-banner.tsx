"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function PrivacyBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasSeenBanner = localStorage.getItem("privacy-banner-seen")
    if (!hasSeenBanner) {
      // Delay showing banner for better UX
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const handleClose = () => {
    localStorage.setItem("privacy-banner-seen", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 text-white p-4 shadow-2xl z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 animate-fade-in">
          <p className="text-lg font-medium flex items-center">
            <span className="text-2xl mr-3 animate-bounce-gentle">🔒</span>
            Respectăm confidențialitatea dumneavoastră
          </p>
          <p className="text-sm opacity-90 mt-1">
            Nu colectăm informații personale sau cookie-uri. Acest site funcționează fără urmărire sau analiză a datelor
            utilizatorilor.
          </p>
        </div>
        <button
          onClick={handleClose}
          className="ml-4 p-2 hover:bg-orange-600 rounded-full transition-all duration-300 button-hover focus-warm group"
          aria-label="Închide notificarea"
        >
          <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>
    </div>
  )
}
