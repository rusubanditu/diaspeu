"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-orange-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2 text-orange-700">
              <Mail className="h-5 w-5" />
              <h3 className="font-semibold">Contact</h3>
            </div>
            <a
              href="mailto:office@diasporaeu.de"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              office@diasporaeu.de
            </a>
            <a
              href="mailto:contact@diasporaeu.de"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              contact@diasporaeu.de
            </a>
          </div>

          {/* Quote Column */}
          <div className="text-center md:text-left">
            <blockquote className="italic text-gray-700">
              „România este patria noastră și a tuturor românilor. E România
              celor de demult și a celor de mai apoi. E patria celor dispăruți
              și a celor ce va să vie"
            </blockquote>
            <cite className="block mt-2 text-orange-700 font-medium">
              - Barbu Ștefănescu Delavrancea
            </cite>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <p className="text-gray-600">
              Toate drepturile Rezervate - DiasporaEU
            </p>
            <Link
              href="/politica-gdpr"
              className="text-orange-700 hover:text-orange-600 transition-colors font-medium"
            >
              Politica GDPR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
