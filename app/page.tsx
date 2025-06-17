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
      "Conectăm românii din toată Europa pentru a se ajuta reciproc în momentele dificile. Harta voluntarilor in Europa",
    image: "/pagina-principala/imagine-om.png",
    slug: "retea-voluntari-europeni",
  },
  {
    id: 3,
    title: "Ajutor pentru familiile vulnerabile din Romania",
    description:
      "Credem cu tarie ca un copil nu trebuie sa duca povara a lipsurilor materiale si nici nu sunt vinovati pentru starea precara a tarii in care ne aflam. Haideti sa-i ajutam.",
    image: "/pagina-principala/imagine-copil.png",
    slug: "programe-integrare",
  },
  {
    id: 4,
    title: "Ajutor pentru mediul de afaceri cu capital 100% romanesc",
    description:
      "Suntem aici in speranta ca vom putea impreuna sa ajutam mici producatori autohtoni sa supravietuiasca perioadei precare in care ne aflam.",
    image: "/pagina-principala/imagine-muncitor.png",
    slug: "asistenta-juridica",
  },
];

const stats = [
  {
    icon: Users,
    number: "5,339,053+",
    label: "Total Patrioți",
    description: "In România și  toate partile Europei",
  },
  {
    icon: Globe,
    number: "11",
    label: "Total membrii",
    description: "Cu dorinta de a ne ajuta",
  },
  {
    icon: Heart,
    number: "9",
    label: "Voluntari activi",
    description: "Romani dedicati sa ajute",
  },
  {
    icon: Shield,
    number: "5,390,042",
    label: "Inca asteptati alaturi de noi",
    description: "Suveranii care inca nu s-au alaturat",
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
        src="/laura-olteanu.mp3"
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
                "pleava necalificată" așa cum încercați să ne prezentați. Ne-ați
                jignit destul. Ajunge!
              </p>

              <p
                className="animate-slide-up"
                style={{ animationDelay: "400ms" }}
              >
                Suntem români muncitori și educați, mulți dintre noi cu studii
                superioare și calificări la standarde mult mai ridicate decat
                ale multora dintre voi. Suntem crescuți de părinți care ne-au
                învățat bunul simț și respectul față de ceilalți. Iar locul
                nostru aici a fost câștigat pe drept nu prin nepotisme.
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
                Suntem români mândri, integrii, verticali și demni, oriunde
                ne-am afla!
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
                  Dacă simți în suflet mândria și onoarea de a fi român, dacă
                  îți prețuiești rădăcinile și demnitatea, te chemăm cu drag
                  alături de noi, să păstram împreună tot ceea ce am câștigat.
                  Unirea noastră ca frați ori unde ne-am afla. Demnitatea și
                  suveranitatea acestui neam strămoșesc trebuie păstrată și o
                  vom păstra asa cum am fost învățați. Prin unire si respect.
                </p>
                <p>
                  Nu avem conturi bancare și NU solicităm bani pentru noi. Toate
                  acțiunile noastre vor fi facute complet voluntar și vor fi
                  îndreptate direct spre cei aflați în situații grele. Suntem
                  aici pentru a întinde o mână de ajutor românilor de
                  pretutindeni, celor care poate, într-o zi, nu știu la cine să
                  apeleze. Și mai departe decât atat, vrem să facem ceva și
                  pentru ce-i de-acasă, pentru bătrânii noștri care, pentru o
                  pâine, vând o legătură de pătrunjel și sunt amendați și
                  alungați din piețe. Pentru micii antrepenori care abia
                  supraviețuiesc.
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
                    solidaritate.
                  </p>
                  <p className="text-sm sm:text-base opacity-90">
                    Steagul sus române și rămânem uniți pentru țara noastră.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Respect și Transparență Section */}
      <section className="py-12 sm:py-16 px-4 bg-white relative z-10">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-800 mb-4 sm:mb-6">
              Respect și Transparență
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Principiile și valorile care ne ghidează activitatea
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
            <Card className="border-2 border-orange-200 transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-4 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-800 mb-4 sm:mb-6 flex items-center">
                  <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">🏛️</span>
                  Independența Noastră
                </h3>
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
                  <p>
                    <strong>
                      Suntem complet independeți și nu suntem asociați,
                      susținuți sau finanțați de niciun partid politic, guvern
                      sau organizații politice.
                    </strong>
                  </p>
                  <p>
                    Activitatea noastră este bazată exclusiv pe voluntariat și
                    donații private din partea comunității suverane românești.
                    Toate donațiile se vor face direct în contul persoanei care
                    are nevoie de ajutor, noi fiind doar un hub al informației
                    și nu al banilor.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-4 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-800 mb-4 sm:mb-6 flex items-center">
                  <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">🤝</span>
                  Misiunea de Voluntariat
                </h3>
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
                  <p>
                    Suntem o rețea de voluntari români din toate colțurile
                    Europei, uniți de dorința comună de a ajuta compatrioții
                    noștri.
                  </p>
                  <p>
                    Serviciile noastre sunt oferite gratuit, din solidaritate și
                    empatie.
                  </p>
                  <p>
                    Suntem deschiși la orice fel de colaborări cu alte
                    organizații care au acelasi scop cu al nostru.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-4 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-800 mb-4 sm:mb-6 flex items-center">
                  <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">⚠️</span>
                  Poziția Noastră Fermă
                </h3>
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
                  <p>
                    <strong>Condamnăm ferm</strong> orice act de dezinformare,
                    propagandă sau manipulare a opiniei publice.
                  </p>
                  <p>
                    Susținem doar dragostea de țară și a fraților noștri,
                    RESPECTUL și PACEA în lume.
                  </p>
                  <p>
                    Toate cazurile sociale vor fi verificate iar dacă există
                    persoane care doresc să profite de pe urma noastră vom face
                    plângeri penale împotriva acestora. Nu admitem și nu tolerăm
                    persoanele rău intenționate.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-4 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-800 mb-4 sm:mb-6 flex items-center">
                  <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">🔒</span>
                  Confidențialitatea și Respectul
                </h3>
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
                  <p>
                    Respectăm pe deplin confidențialitatea și demnitatea tuturor
                    persoanelor care apelează la serviciile noastre.
                  </p>
                  <p>
                    Toate interacțiunile noastre sunt bazate pe respect mutual,
                    empatie și solidaritate între români.
                  </p>
                  <p>
                    Din acest motiv am evitat să creem pe acest website o bază
                    de date, aceasta va exista doar pe canalele de comunicare.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Commitment Card */}
          <Card className="bg-orange-50 border-2 border-orange-300 transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-4 sm:p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-3 sm:mb-4">
                Angajamentul Nostru
              </h3>
              <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
                Ne angajăm să rămânem fideli acestor principii și să oferim
                sprijin autentic și dezinteresat tuturor românilor care au
                nevoie de ajutor în diaspora europeană.
              </p>
              <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
                Membrii noștri nu sunt obligați să fie permanent activi.
                Activitatea lor însă, poate duce la un statut de membru activ și
                care implica sau duce la alte mici avantaje.
              </p>
            </CardContent>
          </Card>
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
            <div className="absolute inset-0 flex flex-col justify-center p-2 lg:p-8 md:p-16 text-white animate-slide-up">
              <h2 className="text-lg lg:text-5xl  font-bold mb-6">
                Din dragoste pentru ai noștri – România se leagă din nou
              </h2>
              <p className="text-md lg:text-2xl  max-w-3xl">
                Nu politicienii vor uni România, ci oamenii simpli, care aleg să
                facă bine fără să ceară nimic în schimb. Când diaspora se
                întoarce cu inima spre cei rămași acasă, iar cei de acasă
                răspund cu încredere, se naște o punte mai puternică decât orice
                hotar. Voluntariatul nu are pașaport, iar iubirea de aproape e
                cel mai curat act de patriotism. Așa reparăm ruptura: prin
                fapte, nu vorbe. România începe din sufletul fiecăruia dintre
                noi. Haideți să ne respectăm și să continuam unirea care s-a
                format la începutul lunii Mai.
              </p>
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
              <h2 className="text-xl lg:text-5xl sm:text-4xl font-bold mb-6">
                Români pentru România – Puterea e în noi!
              </h2>
              <p className="text-lg leading-relaxed mb-8 max-w-3xl">
                Când ne unim, nimic nu ne poate opri. Suntem răspândiți în toată
                lumea, dar rădăcinile noastre rămân adânc înfipte în pământul
                românesc. Fiecare gest de sprijin, fiecare produs cumpărat de la
                un român, fiecare voluntar care se implică – e un pas spre o
                Românie mai puternică, mai demnă, mai suverană. Nu așteptăm
                salvarea din afară și nici de la politicieni actuali. Ne ridicăm
                singuri, ținem steagul sus și rămânem uniți pentru că știm cine
                sumtem.
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

          {/* Visual guide for Discord installation */}
          <div className="max-w-2xl mx-auto mb-12 p-6 bg-white/90 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-700 mb-6">
              Cum să intrați în grupul nostru de ajutor:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full text-blue-600 animate-pulse"
                  >
                    <path
                      fill="currentColor"
                      d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"
                    />
                  </svg>
                </div>
                <p className="text-base font-medium">
                  1. Apăsați butonul de mai jos
                </p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full text-green-600 group-hover:animate-bounce"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2a10 10 0 0 0-3.16 19.5c.5.08.66-.23.66-.5v-1.7C6.73 19.91 6.14 18 6.14 18A2.69 2.69 0 0 0 5 16.5c-.91-.62.07-.6.07-.6a2.1 2.1 0 0 1 1.53 1 2.15 2.15 0 0 0 2.91.83 2.16 2.16 0 0 1 .63-1.34C8 16.17 5.62 15.31 5.62 11.5a3.87 3.87 0 0 1 1-2.71 3.58 3.58 0 0 1 .1-2.64s.84-.27 2.75 1a9.63 9.63 0 0 1 5 0c1.91-1.29 2.75-1 2.75-1a3.58 3.58 0 0 1 .1 2.64 3.87 3.87 0 0 1 1 2.71c0 3.82-2.34 4.66-4.57 4.91a2.39 2.39 0 0 1 .69 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 12 2z"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      className="text-green-400 animate-ping"
                    />
                  </svg>
                </div>
                <p className="text-base font-medium">
                  2. Descărcați aplicația Discord
                  <br />
                  (ca și cum ați descărca WhatsApp)
                </p>
                <span className="text-sm text-gray-600 mt-1">
                  Apăsați "Install" sau "Instalează"
                </span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full text-orange-600"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
                      className="group-hover:animate-spin"
                    />
                    <path
                      fill="currentColor"
                      d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                      className="group-hover:animate-ping"
                    />
                  </svg>
                </div>
                <p className="text-base font-medium">
                  3. Gata! Veți intra direct în grupul nostru
                  <br />
                  unde vă putem ajuta
                </p>
                <span className="text-sm text-gray-600 mt-1">
                  Vă vom ghida pas cu pas
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-orange-600 text-orange-700 hover:bg-orange-50 text-lg px-8 py-4 button-hover shadow-lg group relative"
            >
              <Link href="https://discord.gg/qbadfZmKNA" target="_blank">
                <span className="flex items-center gap-2">
                  Apăsați Aici Pentru Ajutor
                  <svg
                    className="w-6 h-6 group-hover:animate-bounce"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"
                    />
                  </svg>
                </span>
              </Link>
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
              Suntem uniți prin iubirea pentru tara noastra, România
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
          <p className="text-xl mb-8 leading-relaxed animate-slide-up">
            Și cel mai important ne organizam din timp pentru ca la următoarele
            ocazii de exercitare a drepturilor constituționale să fim uniți și
            pregătiți.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-4 button-hover bg-white text-orange-700 hover:bg-orange-50 shadow-lg animate-scale-in"
          >
            <Link
              href={
                typeof window !== "undefined" && window.innerWidth < 768
                  ? "whatsapp://send?phone=491754606617"
                  : "https://wa.me/491754606617"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactează-ne
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
