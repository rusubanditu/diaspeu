"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { href: "/", label: "Acasă" },
  { href: "/echipa", label: "Echipa" },
  { href: "/proiecte", label: "Proiecte" },
  //{ href: "/tari", label: "Țări" },
  { href: "/respect", label: "Respect" },
  { href: "/contact", label: "Contact" },
];

// Animated Romanian Flag Component with Horizontal Wave Effect and Extended Static Pole
function AnimatedRomanianFlag() {
  return (
    <div className="w-16 h-10 relative overflow-visible">
      <style jsx>{`
        @keyframes flag-wave-horizontal {
          0% {
            clip-path: polygon(
              0% 0%,
              100% 0%,
              95% 25%,
              100% 50%,
              95% 75%,
              100% 100%,
              0% 100%,
              5% 75%,
              0% 50%,
              5% 25%
            );
          }
          25% {
            clip-path: polygon(
              0% 0%,
              100% 0%,
              98% 20%,
              95% 40%,
              98% 60%,
              95% 80%,
              100% 100%,
              0% 100%,
              2% 80%,
              5% 60%,
              2% 40%,
              5% 20%
            );
          }
          50% {
            clip-path: polygon(
              0% 0%,
              100% 0%,
              95% 15%,
              98% 35%,
              95% 55%,
              98% 75%,
              95% 95%,
              100% 100%,
              0% 100%,
              5% 95%,
              2% 75%,
              5% 55%,
              2% 35%,
              5% 15%
            );
          }
          75% {
            clip-path: polygon(
              0% 0%,
              100% 0%,
              98% 30%,
              100% 50%,
              98% 70%,
              100% 100%,
              0% 100%,
              2% 70%,
              0% 50%,
              2% 30%
            );
          }
          100% {
            clip-path: polygon(
              0% 0%,
              100% 0%,
              95% 25%,
              100% 50%,
              95% 75%,
              100% 100%,
              0% 100%,
              5% 75%,
              0% 50%,
              5% 25%
            );
          }
        }

        @keyframes flag-flow {
          0% {
            transform: translateX(0%) scaleX(1);
          }
          33% {
            transform: translateX(1%) scaleX(1.02);
          }
          66% {
            transform: translateX(-1%) scaleX(0.98);
          }
          100% {
            transform: translateX(0%) scaleX(1);
          }
        }

        .flag-container {
          animation: flag-flow 2.5s ease-in-out infinite;
          transform-origin: left center;
        }

        .flag-stripe {
          animation: flag-wave-horizontal 2s ease-in-out infinite;
        }

        .flag-stripe:nth-child(2) {
          animation-delay: 0.15s;
        }

        .flag-stripe:nth-child(3) {
          animation-delay: 0.3s;
        }

        .flag-shadow {
          animation: flag-wave-horizontal 2s ease-in-out infinite;
          animation-delay: 0.1s;
        }
      `}</style>

      {/* Extended Static Black Pole - positioned at the left side with extended height downward */}
      <div
        className="absolute left-0 top-0 w-1 z-10"
        style={{
          height: "60px", // Extended height to make it look like a proper flagpole
          background:
            "linear-gradient(to right, #1a1a1a 0%, #333333 50%, #1a1a1a 100%)",
          boxShadow: "1px 0 2px rgba(0,0,0,0.3)",
        }}
      />

      <div className="flag-container w-full h-full relative ml-1">
        {/* Red stripe (right) */}
        <div
          className="flag-stripe absolute top-0 left-2/3 w-1/3 h-full"
          style={{ backgroundColor: "#CE1126" }}
        />

        {/* Yellow stripe (center) */}
        <div
          className="flag-stripe absolute top-0 left-1/3 w-1/3 h-full"
          style={{ backgroundColor: "#FCD116" }}
        />

        {/* Blue stripe (left) */}
        <div
          className="flag-stripe absolute top-0 left-0 w-1/3 h-full"
          style={{ backgroundColor: "#003DA5" }}
        />

        {/* Dynamic shadow overlay for realistic depth */}
        <div
          className="flag-shadow absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.1) 20%, rgba(0,0,0,0.05) 40%, rgba(255,255,255,0.15) 60%, rgba(0,0,0,0.1) 80%, rgba(255,255,255,0.1) 100%)",
          }}
        />

        {/* Additional highlight for wind effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
            animation: "flag-flow 3s ease-in-out infinite reverse",
          }}
        />
      </div>
    </div>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b-4 border-orange-600"
            : "bg-white shadow-lg border-b-4 border-orange-600"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with Animated Romanian Flag */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              onClick={closeMobileMenu}
            >
              <div className="relative transition-transform duration-300 group-hover:scale-105">
                <AnimatedRomanianFlag />
              </div>
              <div className="animate-fade-in">
                <h1 className="text-2xl font-bold text-orange-700 group-hover:text-orange-600 transition-colors ">
                  Voluntar în Europa
                </h1>
                <p className="text-3xl text-orange-600/80 lg:pl-28">
                  Suveran român
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "nav-link px-4 py-2 rounded-lg text-lg font-medium transition-all duration-300 button-hover",
                    pathname === item.href
                      ? "bg-orange-600 text-white shadow-md active"
                      : "text-orange-700 hover:bg-orange-50 hover:text-orange-600",
                    "animate-fade-in"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className={cn(
                "md:hidden p-2 rounded-lg transition-all duration-300 focus-warm hamburger",
                isMobileMenuOpen ? "open bg-orange-100" : "hover:bg-orange-50",
                "flex flex-col justify-center items-center w-10 h-10 space-y-1"
              )}
              aria-label="Toggle mobile menu"
            >
              <span
                className={cn("hamburger-line w-6 h-0.5 bg-orange-600 rounded")}
              />
              <span
                className={cn("hamburger-line w-6 h-0.5 bg-orange-600 rounded")}
              />
              <span
                className={cn("hamburger-line w-6 h-0.5 bg-orange-600 rounded")}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden mobile-menu overflow-hidden transition-all duration-300",
            isMobileMenuOpen
              ? "max-h-96 opacity-100 open"
              : "max-h-0 opacity-0 closed"
          )}
        >
          <div className="warm-gradient-subtle border-t border-orange-200">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 button-hover",
                    pathname === item.href
                      ? "bg-orange-600 text-white shadow-md"
                      : "text-orange-700 hover:bg-orange-100 hover:text-orange-600",
                    "animate-slide-up"
                  )}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={closeMobileMenu}
        />
      )}

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
}
