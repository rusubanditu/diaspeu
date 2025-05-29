"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Shield } from "lucide-react";
import HeroSection from "./Herosec";

const homeArticles = [
  {
    id: 1,
    title: "Sprijin pentru Familiile din Diaspora",
    description:
      "Oferim asistență completă pentru românii care se confruntă cu dificultăți în străinătate.",
    image: "/pagina-principala/imagine-familie.png",
    slug: "sprijin-familii-diaspora",
  },
  {
    id: 2,
    title: "Rețeaua de Voluntari Europeni",
    description:
      "Conectăm românii din toată Europa pentru a se ajuta reciproc în momentele dificile.",
    image: "/pagina-principala/imagine-om.png",
    slug: "retea-voluntari-europeni",
  },
  {
    id: 3,
    title: "Integrare Comunitară",
    description:
      "Facilităm integrarea românilor în comunitățile locale din țările de adopție.",
    image: "/pagina-principala/imagine-copil.png",
    slug: "programe-integrare",
  },
  {
    id: 4,
    title: "Asistență Juridică Gratuită",
    description:
      "Consultanță juridică pentru probleme legate de documentație și drepturi.",
    image: "/pagina-principala/imagine-muncitor.png",
    slug: "asistenta-juridica",
  },
];

const stats = [
  {
    icon: Users,
    number: "700+",
    label: "Persoane implicate",
    description: "In toate partile Europei",
  },
  {
    icon: Globe,
    number: "10",
    label: "Tari acoperite",
    description: "Cu dorinta de a ne ajuta",
  },
  {
    icon: Heart,
    number: "50+",
    label: "Voluntari activi",
    description: "Romani dedicati sa ajute",
  },
  {
    icon: Shield,
    number: "24/7",
    label: "Disponibilitate",
    description: "Stim cat de greu este sa ai probleme intr-o tara straina",
  },
];

// Enhanced Background Music Component with aggressive autoplay
function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [autoplayAttempted, setAutoplayAttempted] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  // Aggressive autoplay function that tries multiple strategies
  const attemptAutoplay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || autoplayAttempted) return;

    setAutoplayAttempted(true);

    try {
      // Strategy 1: Direct play attempt
      await audio.play();
      console.log("Autoplay successful - direct play");
      return;
    } catch (error) {
      console.log("Direct autoplay failed, trying alternative methods:", error);
    }

    // Strategy 2: Reset and try again with muted first
    try {
      audio.muted = true;
      await audio.play();
      // Gradually unmute
      setTimeout(() => {
        if (audio) {
          audio.muted = false;
          console.log("Autoplay successful - muted first strategy");
        }
      }, 100);
      return;
    } catch (error) {
      console.log("Muted autoplay failed:", error);
    }

    // Strategy 3: Use setTimeout to delay and retry
    if (retryCount < 3) {
      setTimeout(() => {
        setAutoplayAttempted(false);
        setRetryCount((prev) => prev + 1);
      }, 1000);
    }
  }, [autoplayAttempted, retryCount]);

  // Initialize audio with optimal settings for autoplay
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Configure audio for maximum autoplay compatibility
    audio.volume = 0.6;
    audio.loop = true;
    audio.preload = "auto";
    audio.crossOrigin = "anonymous";

    // Audio event handlers
    const handleCanPlay = () => {
      setIsLoaded(true);
    };

    const handleCanPlayThrough = () => {
      setIsLoaded(true);
      // Attempt autoplay as soon as audio can play through
      if (!autoplayAttempted) {
        attemptAutoplay();
      }
    };

    const handleLoadedData = () => {
      setIsLoaded(true);
      // Another trigger point for autoplay
      if (!autoplayAttempted) {
        attemptAutoplay();
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handleError = (e: Event) => {
      console.error("Audio error:", e);
      setIsLoaded(false);
    };

    // Add comprehensive event listeners
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("canplaythrough", handleCanPlayThrough);
    audio.addEventListener("loadeddata", handleLoadedData);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    // Force load the audio
    audio.load();

    return () => {
      // Cleanup all event listeners
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.removeEventListener("loadeddata", handleLoadedData);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, [attemptAutoplay]);

  // Retry autoplay when loaded state changes
  useEffect(() => {
    if (isLoaded && !isPlaying && !autoplayAttempted) {
      attemptAutoplay();
    }
  }, [isLoaded, isPlaying, autoplayAttempted, attemptAutoplay]);

  // Additional autoplay attempt on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isPlaying && isLoaded && !autoplayAttempted) {
        attemptAutoplay();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [isLoaded, isPlaying, autoplayAttempted, attemptAutoplay]);

  // Toggle play/pause with enhanced functionality
  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !isLoaded) return;

    try {
      if (isPlaying) {
        audio.pause();
      } else {
        // Ensure audio is unmuted when user manually plays
        audio.muted = false;
        await audio.play();
      }
    } catch (error) {
      console.log("Manual playback error:", error);
      // Try with muted first if manual play fails
      try {
        audio.muted = true;
        await audio.play();
        setTimeout(() => {
          if (audio) audio.muted = false;
        }, 100);
      } catch (mutedError) {
        console.log("Muted playback also failed:", mutedError);
      }
    }
  }, [isLoaded, isPlaying]);

  return (
    <>
      {/* Audio element with aggressive autoplay settings */}
      <audio
        ref={audioRef}
        src="/imn_romania.mp3"
        preload="auto"
        autoPlay
        loop
        playsInline
        muted={false}
        style={{ display: "none" }}
      />

      {/* Always visible music control button */}
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        <button
          onClick={togglePlay}
          disabled={!isLoaded}
          className={`
            bg-orange-800/90 text-white p-3 rounded-full hover:bg-orange-700 
            transition-all duration-300 shadow-lg backdrop-blur-sm
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-400
            sm:p-4 group border border-orange-600/50
            ${!isLoaded ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            ${isPlaying ? "animate-pulse" : ""}
          `}
          aria-label={
            !isLoaded
              ? "Se încarcă muzica..."
              : isPlaying
              ? "Oprește imnul"
              : "Pornește imnul"
          }
          title={
            !isLoaded
              ? "Se încarcă imnul României..."
              : isPlaying
              ? "Oprește imnul României"
              : "Pornește imnul României"
          }
        >
          <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-200 block">
            {!isLoaded ? "⏳" : isPlaying ? "⏸️" : "▶️"}
          </span>
        </button>
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Background Music Component - Romanian National Anthem */}
      <BackgroundMusic />
      <HeroSection />
      {/* Powerful Statement Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-800 to-orange-900 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 bg-[url('/traditional-pattern.png')] opacity-10"></div>

        {/* Content container */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-orange-500/20">
            {/* Main heading with animation */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-100 mb-8 leading-tight text-center animate-fade-in">
              Un mesaj pentru toți românii
            </h2>

            {/* Statement paragraphs with staggered animation */}
            <div className="space-y-6 text-lg md:text-xl text-orange-50/90 leading-relaxed max-w-4xl mx-auto">
              <p
                className="animate-slide-up"
                style={{ animationDelay: "200ms" }}
              >
                <span className="text-2xl md:text-3xl font-bold text-orange-300 block mb-4">
                  Stop! Ajunge!
                </span>
                Încetați cu jignirile aduse românilor de pretutindeni. Nu suntem
                "pleava necalificată" așa cum încercați să ne prezentați.
              </p>

              <p
                className="animate-slide-up"
                style={{ animationDelay: "400ms" }}
              >
                Suntem români muncitori și educați, mulți dintre noi cu studii
                superioare și calificări la standarde mult mai ridicate. Suntem
                români cu bun simț, crescuți de părinți care ne-au învățat
                respectul față de ceilalți.
              </p>

              <p
                className="animate-slide-up"
                style={{ animationDelay: "600ms" }}
              >
                Nu răspundem cu jigniri, pentru că știm cine suntem și ce
                valoare avem. Înainte să ne judecați, gândiți-vă că diaspora nu
                este marginea societății, ci o parte valoroasă și integrantă a
                ei.
              </p>

              <p
                className="text-2xl md:text-3xl font-bold text-orange-300 text-center mt-12 animate-slide-up"
                style={{ animationDelay: "800ms" }}
              >
                Suntem români mândri și demni, oriunde ne-am afla!
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-4 top-4 text-orange-500/20 text-6xl animate-float">
          ❋
        </div>
        <div className="absolute right-4 bottom-4 text-orange-500/20 text-6xl animate-float-delayed">
          ❋
        </div>
      </section>

      {/* Greeting Section - Now first with emotional background */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/emotional-1.jpeg"
            alt="Emotional connection to Romania"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-orange-800/30 to-orange-700/40"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fade-in order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-800 mb-6 romanian-accent leading-tight">
                Bun venit în comunitatea noastră!
              </h2>
              <div className="space-y-6 text-lg sm:text-xl text-orange-700 leading-relaxed">
                <p>
                  Suntem aici pentru a întinde o mână de ajutor românilor din
                  Diaspora, celor care poate, într-o zi, nu știu la cine să
                  apeleze.
                </p>
                <p>
                  Și mai departe decât atât, vrem să facem ceva și pentru cei
                  de-acasă: pentru bătrânii noștri care, pentru o pâine, vând o
                  legătură de pătrunjel și sunt{" "}
                  <span className="font-extrabold">amendați</span> și{" "}
                  <span className="font-extrabold">alungați</span> din piețe.
                  Pentru micii antreprenori care abia supraviețuiesc.
                </p>
                <p className="font-semibold text-orange-800 text-xl sm:text-2xl">
                  Noi nu ne-am pierdut țara din suflet. Poate am pierdut-o din
                  vedere pentru o vreme, dar acum e timpul să o strângem din nou
                  la piept!
                </p>
              </div>

              {/* Feature highlights */}
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center gap-3 text-orange-600 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                  <Heart className="h-6 w-6 flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">
                    Sprijin cu empatie
                  </span>
                </div>
                <div className="flex items-center gap-3 text-orange-600 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                  <Users className="h-6 w-6 flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">
                    Comunitate unită
                  </span>
                </div>
                <div className="flex items-center gap-3 text-orange-600 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                  <Shield className="h-6 w-6 flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">
                    Ajutor de încredere
                  </span>
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div className="animate-scale-in order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                <div className="aspect-[6/8] relative">
                  <Image
                    src="/emotional-1.jpeg"
                    alt="Românii din diaspora - conexiune emoțională"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-transparent to-transparent"></div>
                </div>

                {/* Overlay text on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    România în inimile noastre
                  </h3>
                  <p className="text-sm sm:text-base opacity-90">
                    Oriunde am fi, rămânem conectați prin dragoste și
                    solidaritate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Now second with call to action */}
      <section className="warm-gradient py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 traditional-pattern opacity-30"></div>

        <div
          className="absolute bottom-20 right-4 sm:right-10 text-orange-500/30 text-3xl sm:text-4xl animate-bounce-gentle"
          style={{ animationDelay: "1s" }}
        >
          ✦
        </div>

        {/* Diaspora Products Section */}
        <div className="max-w-7xl mx-auto mt-16 px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-800 mb-6">
              Gustul de acasă în diaspora
            </h2>
            <p className="text-lg text-orange-900/80 leading-relaxed mb-8">
              Noi în diaspora ne dorim să gustăm fructe și legume românești, cu
              gustul de odinioară. Ne-am propus dezvoltarea unei rețele de
              voluntari pentru a ajuta micii antreprenori să își vândă produsele
              peste hotare. Împreună putem aduce bucuria și savoarea produselor
              românești autentice mai aproape de casele românilor din
              străinătate.
            </p>
            <p className="text-lg text-orange-900/80 leading-relaxed">
              Prin această inițiativă, nu doar că sprijinim agricultura locală
              și micii producători din România, dar aducem și un strop de acasă
              în viața românilor din diaspora. Este o punte între tradiție și
              prezent, între gusturile copilăriei și viața de zi cu zi în
              străinătate.
            </p>
          </div>
          {/* Responsive image container with proper Next.js Image optimization */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] w-full">
              <Image
                src="/cules-rosii.png"
                alt="Roșii românești proaspete - produse tradiționale din România"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority={false}
              />
              {/* Gradient overlay for better visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-20 right-4 sm:right-10 text-orange-500/30 text-3xl sm:text-4xl animate-bounce-gentle"
          style={{ animationDelay: "1s" }}
        >
          ✦
        </div>

        <div className="max-w-7xl mx-auto mt-16 px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Responsive image container with proper Next.js Image optimization - moved to left */}
          <div className="relative animate-fade-in order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] w-full">
              <Image
                src="/mamaie-coase.jpg"
                alt="Batrana coase"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority={false}
              />
              {/* Gradient overlay for better visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
            </div>
          </div>

          {/* Text content moved to right */}
          <div className="animate-slide-up order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-800 mb-6">
              Nu uitam nici de cei batrani
            </h2>
            <p className="text-lg text-orange-900/80 leading-relaxed mb-8">
              Știm cât de greu este să fii bătrân în România, dar noi,
              voluntarii de peste hotare, ne dorim să-i ajutăm! Planificăm o
              rețea de voluntari pentru bătrânii care încearcă să își câștige o
              pâine cu o legătură de pătrunjel sau produse croșetate.
            </p>
            <p className="text-lg text-orange-900/80 leading-relaxed">
              Prin această inițiativă sprijinim bătrânii noștri și creăm o punte
              de solidaritate între românii din diaspora și cei de acasă. Este
              modalitatea noastră de a arăta respect pentru generația care ne-a
              crescut și ne-a învățat valorile românești.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-800 mb-6">
              De la joaca în livadă, la sprijin peste granițe
            </h2>
            <p className="text-lg text-orange-900/80 leading-relaxed mb-8">
              Așa cum în copilărie ne sprijineam unii pe alții să ajungem la
              caisele coapte din vârful copacului, cu o naturalețe și o bucurie
              firească, tot așa putem astăzi – chiar dacă suntem departe – să ne
              întindem mâna unii altora. Prieteniile de atunci nu aveau nevoie
              de multe cuvinte, ci doar de dorința sinceră de a ajuta.
            </p>
            <p className="text-lg text-orange-900/80 leading-relaxed">
              Astăzi, ca adulți, reaprindem acea empatie și inocență, oferind
              sprijin compatrioților noștri. E un gest simplu, dar plin de sens:
              diaspora și România, din nou împreună – ca niște copii ce culeg
              fructe, doar că acum culegem speranță, solidaritate și gustul de
              acasă.
            </p>
          </div>
          {/* Responsive image container with proper Next.js Image optimization */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] w-full">
              <Image
                src="/la-cirese.jpg"
                alt="Roșii românești proaspete - produse tradiționale din România"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority={false}
              />
              {/* Gradient overlay for better visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 px-4 relative">
          {/* Large centered image with text overlay */}
          <div className="relative w-full aspect-[8/21] lg:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/costum-popular.jpg"
              alt="Costum popular românesc tradițional"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority={true}
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>

            {/* Text content positioned over the image */}
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 text-white animate-slide-up">
              <h2 className="text-3xl lg:text-5xl sm:text-4xl font-bold mb-6">
                Români pentru România – Puterea e în noi!
              </h2>
              <p className="text-2xl leading-relaxed mb-8 max-w-3xl">
                Când ne unim, nimic nu ne poate opri. Suntem răspândiți în toată
                lumea, dar rădăcinile noastre rămân adânc înfipte în pământul
                românesc. Fiecare gest de sprijin, fiecare produs cumpărat de la
                un român, fiecare voluntar care se implică – e un pas spre o
                Românie mai puternică, mai demnă, mai suverană. Nu așteptăm
                salvarea din afară. Ne ridicăm singuri – pentru că știm cine
                suntem.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 px-4 relative">
          {/* Large centered image with text overlay */}
          <div className="relative w-full aspect-[8/21] lg:aspect-[16/12] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/romania-te.jpg"
              alt="Costum popular românesc tradițional"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority={true}
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>

            {/* Text content positioned over the image */}
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 text-white animate-slide-up">
              <h2 className="text-3xl lg:text-5xl sm:text-4xl font-bold mb-6">
                Din dragoste pentru ai noștri – România se leagă din nou
              </h2>
              <p className="text-lg lg:text-2xl leading-relaxed mb-8 max-w-3xl">
                Nu politicienii vor uni România, ci oamenii simpli, care aleg să
                facă bine fără să ceară nimic în schimb. Când diaspora se
                întoarce cu inima spre cei rămași acasă, iar cei de acasă
                răspund cu încredere, se naște o punte mai puternică decât orice
                hotar. Voluntariatul nu are pașaport, iar iubirea de aproape e
                cel mai curat act de patriotism. Așa reparăm ruptura: prin
                fapte, nu vorbe. România începe din sufletul fiecăruia dintre
                noi.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 pt-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in text-shimmer leading-tight">
            Împreună pentru românii de pretutindeni
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-orange-900/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Un proiect non-guvernamental dedicat sprijinirii și conectării
            românilor din întreaga Europă. Suntem aici să vă ajutăm în momentele
            dificile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button
              asChild
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4 button-hover shadow-lg"
            >
              <Link href="/proiecte">Vreau să Ajut</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-orange-600 text-orange-700 hover:bg-orange-50 text-lg px-8 py-4 button-hover shadow-lg"
            >
              <Link href="/proiecte">Am Nevoie de Ajutor</Link>
            </Button>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-4 sm:left-10 text-orange-600/30 text-4xl sm:text-6xl animate-bounce-gentle">
          ❋
        </div>
        <div
          className="absolute bottom-20 right-4 sm:right-10 text-orange-500/30 text-3xl sm:text-4xl animate-bounce-gentle"
          style={{ animationDelay: "1s" }}
        >
          ✦
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 traditional-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Împreună facem diferența
            </h2>
            <p className="text-lg sm:text-xl opacity-90">
              Suntem uniți prin iubirea pentru România
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slide-up card-hover p-4 sm:p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-4 animate-bounce-gentle" />
                <div className="text-2xl sm:text-3xl font-bold mb-2 text-shimmer">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-lg font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm opacity-80">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Pattern Divider */}
      <div className="traditional-pattern h-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 opacity-50"></div>
      </div>

      {/* Articles Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-orange-800 mb-12 romanian-accent animate-fade-in">
            Cu ce va putem ajuta
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {homeArticles.map((article, index) => (
              <Card
                key={article.id}
                className="overflow-hidden shadow-lg border-2 border-orange-200 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
                </div>
                <CardContent className="p-6 bg-gradient-to-b from-white to-orange-50/30">
                  <h3 className="text-2xl font-bold text-orange-800 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-orange-700/80 text-lg leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-lg button-hover">
                    Serviciu in dezvoltare, revenim in curand!
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 traditional-pattern opacity-40"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-orange-800 mb-6">
                O comunitate care se sprijină reciproc
              </h2>
              <p className="text-xl text-orange-700 leading-relaxed mb-6">
                Fiecare roman din diaspora are o poveste unica, dar provocarile
                sunt adesea similare. Prin solidaritate si sprijin mutual,
                transformam dificultatile in oportunitati de crestere si
                conexiune comunitara.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <span className="text-orange-700 font-medium">
                    Retea de sprijin în toata Europa
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <span className="text-orange-700 font-medium">
                    Voluntari cu experienta locala
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <span className="text-orange-700 font-medium">
                    Servicii gratuite si confidentiale
                  </span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="imagine-familie.png"
                  alt="Comunitatea română din diaspora"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 traditional-pattern opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Alătură-te Comunității Noastre
          </h2>
          <p className="text-xl mb-8 leading-relaxed animate-slide-up">
            Împreună putem face diferența în viețile românilor din diaspora.
            Fiecare ajutor contează, indiferent cât de mic.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-4 button-hover bg-white text-orange-700 hover:bg-orange-50 shadow-lg animate-scale-in"
          >
            <Link href="/contact">Contactează-ne</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
