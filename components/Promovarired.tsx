"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

// Component for promotional sections with business and social help
export default function PromoVariedSection() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-orange-800 to-orange-900 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 traditional-pattern opacity-30"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Business Section */}
          <div className="bg-white/95 rounded-xl p-8 backdrop-blur-sm shadow-xl hover:transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-800 text-center mb-4">
              Afaceri 100% Românești
            </h2>
            <p className="text-orange-700 text-base sm:text-lg text-center mb-6 leading-relaxed">
              Descoperă produse și servicii autentice, create cu pasiune de
              antreprenori români. Susține economia locală și bucură-te de
              calitate garantată, direct de la producători români de încredere.
            </p>
            <div className="text-center">
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 text-lg shadow-lg"
              >
                <Link href="/promovari?filter=business">Vezi mai multe</Link>
              </Button>
            </div>
          </div>

          {/* Social Help Section */}
          <div className="bg-white/95 rounded-xl p-8 backdrop-blur-sm shadow-xl hover:transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-800 text-center mb-4">
              Ajutor Cazuri Sociale
            </h2>
            <p className="text-orange-700 text-base sm:text-lg text-center mb-6 leading-relaxed">
              Frați, surori, părinți și bunici care au nevoie de sprijinul
              nostru. Împreună putem face diferența în viețile românilor aflați
              în dificultate. Solidaritatea noastră poate schimba destine.
            </p>
            <div className="text-center">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-lg shadow-lg"
              >
                <Link href="/promovari?filter=help">Vezi mai multe</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
