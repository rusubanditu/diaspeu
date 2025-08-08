"use client";

// Responsive, auto-opening pop-up with mobile Drawer and desktop Dialog
// Includes CTA text in Romanian and quick social links. Content is capped
// to viewport height with smooth micro-animations for a delightful UX.

import React, { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/components/ui/use-mobile";
import { Facebook, Instagram, Send, Users, Heart } from "lucide-react";

// Constants for social links reused across the app
const SOCIAL_LINKS = {
  facebookPage: "https://www.facebook.com/profile.php?id=61578082146140",
  facebookGroup: "https://www.facebook.com/groups/diasporaeude/",
  whatsappGroup: "https://chat.whatsapp.com/Ll9mu2s0zNnDbnpiL6vPcx",
  instagram: "https://www.instagram.com/diasporaeu1/",
  telegram: "https://t.me/+J1jB4RhqSmI3MzU0",
};

// Utility: build a stable storage key scoped to the site/page
const STORAGE_KEY = "popupx_shown_session";
const STORAGE_KEY_DAILY = "popupx_last_shown_date";

// Helper: get YYYY-MM-DD for daily limit
const getTodayKey = () => {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

// Shared visual content used by both Drawer and Dialog
function PopupBody({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative">
      {/* Decorative glow and subtle gradient background for a premium feel */}
      <div
        className="absolute -inset-1 bg-gradient-to-br from-orange-500/10 via-amber-400/10 to-yellow-400/10 rounded-2xl blur-2xl"
        aria-hidden="true"
      />

      {/* Main content container with max height to stay within viewport */}
      <Card className="relative bg-white/95 dark:bg-neutral-900/95 border-orange-200/60 overflow-hidden">
        <CardContent className="p-4 sm:p-6">
          {/* Header with tiny logo and warm greeting, micro-animations for entrance */}
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-orange-800 dark:text-orange-200 leading-tight">
                Comunitatea Diaspora EU
              </h3>
              <p className="text-xs sm:text-sm text-orange-700/80 dark:text-orange-300/80 leading-snug">
                Hai cu noi – creștem împreună prin respect, fapte și unitate.
              </p>
            </div>
          </div>

          {/* Romanian CTA message crafted to inspire action; concise for mobile */}
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
            <p className="animate-fade-in">
              Român drag, ești printre ai tăi. Aici ne strângem laolaltă să ne
              ajutăm, să ne susținem și să construim o comunitate demnă, în care
              fiecare voce contează. Alătură-te acum și primești informații,
              sprijin real și prieteni pe care te poți baza!
            </p>
            <p className="animate-slide-up">
              Intră în grupurile noastre de Facebook, Telegram și WhatsApp –
              acolo anunțăm zilnic noutăți și cazuri reale unde putem face bine,
              iar pe pagina de Facebook ținem aproape și dăm vestea mai departe.
            </p>
          </div>

          {/* Fast actions grid: compact, thumb-friendly, with subtle hover/press animations */}
          <div className="mt-5 sm:mt-6 grid grid-cols-3 sm:grid-cols-5 gap-3">
            {/* Facebook Page */}
            <Link
              href={SOCIAL_LINKS.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-1 rounded-lg border border-orange-200 bg-white/80 dark:bg-white/5 hover:bg-orange-50 dark:hover:bg-white/10 p-3 transition-all shadow-sm active:scale-95"
            >
              <Facebook className="size-5 sm:size-6 text-orange-700 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] sm:text-xs font-medium text-orange-800/90">
                Pagina FB
              </span>
            </Link>

            {/* Facebook Group */}
            <Link
              href={SOCIAL_LINKS.facebookGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-1 rounded-lg border border-orange-200 bg-white/80 dark:bg-white/5 hover:bg-orange-50 dark:hover:bg-white/10 p-3 transition-all shadow-sm active:scale-95"
            >
              <Users className="size-5 sm:size-6 text-orange-700 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] sm:text-xs font-medium text-orange-800/90">
                Grup FB
              </span>
            </Link>

            {/* WhatsApp Group (SVG icon for fidelity) */}
            <Link
              href={SOCIAL_LINKS.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-1 rounded-lg border border-orange-200 bg-white/80 dark:bg-white/5 hover:bg-orange-50 dark:hover:bg-white/10 p-3 transition-all shadow-sm active:scale-95"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5 sm:size-6 fill-orange-700 group-hover:scale-110 transition-transform"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="text-[10px] sm:text-xs font-medium text-orange-800/90">
                WhatsApp
              </span>
            </Link>

            {/* Instagram */}
            <Link
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden sm:flex flex-col items-center justify-center gap-1 rounded-lg border border-orange-200 bg-white/80 dark:bg-white/5 hover:bg-orange-50 dark:hover:bg-white/10 p-3 transition-all shadow-sm active:scale-95"
            >
              <Instagram className="size-5 sm:size-6 text-orange-700 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] sm:text-xs font-medium text-orange-800/90">
                Instagram
              </span>
            </Link>

            {/* Telegram */}
            <Link
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden sm:flex flex-col items-center justify-center gap-1 rounded-lg border border-orange-200 bg-white/80 dark:bg-white/5 hover:bg-orange-50 dark:hover:bg-white/10 p-3 transition-all shadow-sm active:scale-95"
            >
              <Send className="size-5 sm:size-6 text-orange-700 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] sm:text-xs font-medium text-orange-800/90">
                Telegram
              </span>
            </Link>
          </div>

          {/* Primary CTA button: prominent and full-width for mobile comfort */}
          <div className="mt-5 sm:mt-6">
            <Button
              className="w-full h-12 text-base bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-600/90 hover:via-orange-500/90 hover:to-amber-500/90 text-white shadow-lg transition-all active:scale-[0.99] animate-scale-in"
              onClick={() => {
                // Soft nudge: open Facebook Group where people can instantly join
                window.open(
                  SOCIAL_LINKS.facebookGroup,
                  "_blank",
                  "noopener,noreferrer"
                );
                onClose();
              }}
            >
              <Users className="mr-2" /> Alătură-te acum comunității noastre
            </Button>
          </div>

          {/* Secondary row: quick actions + dismiss controls for respectful UX */}
          <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Heart className="size-4 text-orange-600 animate-pulse" />
              <span>Dă like paginii de Facebook pentru noutăți zilnice.</span>
            </div>
            <div className="flex items-center gap-3 justify-between sm:justify-end">
              <button
                onClick={() => {
                  const today = getTodayKey();
                  try {
                    localStorage.setItem(STORAGE_KEY_DAILY, today);
                  } catch {}
                  onClose();
                }}
                className="text-orange-700 hover:underline font-medium"
              >
                Nu mai arăta azi
              </button>
              <button
                onClick={onClose}
                className="text-gray-500 hover:underline"
              >
                Închide
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Popupx() {
  // Track whether the component is mounted to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);

  // Open state for the pop-up
  const [open, setOpen] = useState(false);

  // Detect mobile to pick Drawer vs Dialog for optimal UX
  const isMobile = useIsMobile();

  // Shared inner content memoized for stability
  const content = useMemo(
    () => <PopupBody onClose={() => setOpen(false)} />,
    []
  );

  // Auto-open on first visit of the session or if not shown yet today
  useEffect(() => {
    setMounted(true);

    // Defer to next tick for smoother entry animation
    const t = setTimeout(() => {
      try {
        const today = getTodayKey();
        const lastShown = localStorage.getItem(STORAGE_KEY_DAILY);
        const shownThisSession = sessionStorage.getItem(STORAGE_KEY);

        if (!shownThisSession && lastShown !== today) {
          setOpen(true);
          sessionStorage.setItem(STORAGE_KEY, "1");
        }
      } catch {
        // If storage is not available, still show once
        setOpen(true);
      }
    }, 220);

    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  // Render mobile Drawer (bottom-sheet) or desktop Dialog (centered modal)
  return isMobile ? (
    <Drawer open={open} onOpenChange={setOpen} shouldScaleBackground>
      {/* DrawerContent already renders its own overlay */}
      <DrawerContent className="sm:hidden border-none shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-white/20">
        <DrawerHeader className="sr-only">
          <DrawerTitle>Comunitatea Diaspora EU</DrawerTitle>
          <DrawerDescription>
            Alătură-te comunității noastre și primește sprijin real în fiecare
            zi. Împreună creștem prin respect, fapte și unitate.
          </DrawerDescription>
        </DrawerHeader>
        <div className="w-full px-3 pb-[max(env(safe-area-inset-bottom),1rem)] pt-3">
          {/* Constrain to viewport height and make scrollable if needed */}
          <div className="max-h-[85vh] overflow-y-auto will-change-transform">
            {content}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md w-[92vw] sm:w-full p-0 border-none shadow-2xl bg-transparent">
        <DialogHeader className="sr-only">
          <DialogTitle>Comunitatea Diaspora EU</DialogTitle>
          <DialogDescription>
            Alătură-te comunității noastre și primește sprijin real în fiecare
            zi. Împreună creștem prin respect, fapte și unitate.
          </DialogDescription>
        </DialogHeader>
        {/* Constrain height inside dialog and allow scroll */}
        <div className="max-h-[86vh] overflow-y-auto p-3 sm:p-4">{content}</div>
      </DialogContent>
    </Dialog>
  );
}
