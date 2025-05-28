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
    title: "Programe de Integrare Comunitară",
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

      {/* Hero Section */}
      <section className="warm-gradient py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 traditional-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-orange-800 mb-6 animate-fade-in text-shimmer">
            Impreuna pentru romanii de pretutindeni
          </h1>
          <p className="text-xl md:text-2xl text-orange-900/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Un proiect non-guvernamental dedicat sprijinirii și conectarii
            romanilor din intreaga Europa. Suntem aici sa va ajutam in momentele
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
        <div className="absolute top-20 left-10 text-orange-600/30 text-6xl animate-bounce-gentle">
          ❋
        </div>
        <div
          className="absolute bottom-20 right-10 text-orange-500/30 text-4xl animate-bounce-gentle"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impreuna facem diferenta
            </h2>
            <p className="text-xl opacity-90">
              Suntem uniti prin iubirea pentru Romania
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slide-up card-hover p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 animate-bounce-gentle" />
                <div className="text-3xl font-bold mb-2 text-shimmer">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Greeting Section */}
      <section className="py-16 px-4 bg-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-orange-800 mb-6 romanian-accent">
              Bun venit in comunitatea noastra!
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-orange-200 animate-scale-in">
              <p className="text-xl text-orange-700 leading-relaxed mb-6">
                Suntem aici pentru a intinde o mana de ajutor romanilor din
                Diaspora, celor care poate, intr-o zi, nu stiu la cine sa
                apeleze. <br></br>Si mai departe decat atat, vrem sa facem ceva
                si pentru cei de-acasa: pentru batranii nostri care, pentru o
                paine, vand o legatura de patrujnel si sunt alungati din piete.
                Pentru micii antrepenori care abea supravietuiesc. Vrem sa-i
                ajutam sa se ridice si sa le deschidem usi. <br></br>{" "}
                <strong>
                  {" "}
                  Noi nu ne-am pierdut tara din suflet. Poate am pierdut-o din
                  vedere pentru o vreme, dar acum e timpul sa o strangem din nou
                  la piept!
                </strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-3 text-orange-600">
                  <Heart className="h-6 w-6" />
                  <span className="font-medium">Sprijin cu empatie</span>
                </div>
                <div className="flex items-center gap-3 text-orange-600">
                  <Users className="h-6 w-6" />
                  <span className="font-medium">Comunitate unita</span>
                </div>
                <div className="flex items-center gap-3 text-orange-600">
                  <Shield className="h-6 w-6" />
                  <span className="font-medium">Ajutor de incredere</span>
                </div>
              </div>
            </div>
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
                  <Button
                    asChild
                    className="bg-orange-600 hover:bg-orange-700 text-lg button-hover"
                  >
                    <Link href={`/articol/${article.slug}`}>
                      Citește mai mult →
                    </Link>
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
                  src="/placeholder.svg?height=400&width=600"
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
