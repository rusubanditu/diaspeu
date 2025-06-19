"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const helpArticles = [
  {
    id: 1,
    title: "Asistență pentru Repatrierea Persoanelor Decedate",
    description:
      "Oferim sprijin complet pentru familiile care au nevoie să repatrieze o persoană dragă decedată în străinătate.",
    image: "/placeholder.svg?height=250&width=400",
    slug: "repatriere-persoane-decedate",
  },
  {
    id: 2,
    title: "Sprijin în Situații de Urgență ",
    description:
      "Asistență rapidă pentru românii care se confruntă cu probleme în străinătate.",
    image: "/placeholder.svg?height=250&width=400",
    slug: "urgente-medicale",
  },
  {
    id: 3,
    title: "Ajutor pentru Documentație și Birocrație",
    description:
      "Te ajutăm să navighezi prin sistemele birocratice complexe din țările europene.",
    image: "/placeholder.svg?height=250&width=400",
    slug: "documentatie-birocratice",
  },
];

const volunteerServices = [
  {
    id: 1,
    title: "Transport și Logistică",
    description: "Ajută cu transportul persoanelor sau bunurilor între țări",
    icon: "🚛",
  },
  {
    id: 2,
    title: "Traduceri și Interpretariat",
    description: "Oferă servicii de traducere pentru documentele oficiale",
    icon: "🗣️",
  },
  {
    id: 3,
    title: "Asistență Juridică",
    description: "Consultanță juridică pentru probleme administrative",
    icon: "⚖️",
  },
  {
    id: 4,
    title: "Sprijin Emoțional",
    description: "Oferă suport moral în momentele dificile",
    icon: "❤️",
  },
  {
    id: 5,
    title: "Rețea de Fermieri",
    description: "Ajută fermierii români să-și vândă produsele în Europa",
    icon: "🌾",
  },
  {
    id: 6,
    title: "Găzduire Temporară",
    description: "Oferă cazare temporară pentru situații de urgență",
    icon: "🏠",
  },
];

export default function ProiectePage() {
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="warm-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-red-800 mb-6">
            Proiectele Noastre
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Alege cum vrei să interacționezi cu comunitatea noastră
          </p>
        </div>
      </section>

      {/* Diaspora Products Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-800 mb-6">
              Gustul de acasă în diaspora
            </h2>
            <p className="text-lg text-orange-900/80 leading-relaxed mb-8">
              Noi în diaspora ne dorim să gustăm fructe și legume românești, cu
              gustul de odinioară. Ne-am propus dezvoltarea unei rețele de
              voluntari pentru a ajuta micii antreprenori să își vândă produsele
              peste hotare.
            </p>
            <p className="text-lg text-orange-900/80 leading-relaxed">
              Prin această inițiativă, nu doar că sprijinim agricultura locală
              și micii producători din România, dar aducem și un strop de acasă
              în viața românilor din diaspora.
            </p>
          </div>
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
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Elderly Support Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
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
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
            </div>
          </div>
          <div className="animate-slide-up order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-800 mb-6">
              Nu uităm nici de cei bătrâni
            </h2>
            <p className="text-lg text-orange-900/80 leading-relaxed mb-8">
              Știm cât de greu este să fii bătrân în România, dar noi,
              voluntarii de peste hotare, ne dorim să-i ajutăm! Planificăm o
              rețea de voluntari pentru bătrânii care încearcă să își câștige o
              pâine cu o legătură de pătrunjel sau produse croșetate.
            </p>
            <p className="text-lg text-orange-900/80 leading-relaxed">
              Prin această inițiativă sprijinim bătrânii noștri și creăm o punte
              de solidaritate între românii din diaspora și cei de acasă.
            </p>
          </div>
        </div>
      </section>

      {/* Choice Section */}
      {/* <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-4 border-red-200 hover:border-red-400 transition-colors duration-300 cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🆘</div>
                <h2 className="text-3xl font-bold text-red-800 mb-4">
                  Am Nevoie de Ajutor
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Te confrunți cu o situație dificilă și ai nevoie de sprijin?
                  Comunitatea noastră este aici să te ajute.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-red-800 hover:bg-red-700 text-lg px-8 py-4"
                >
                  <Link href="/proiecte/ajutor">Solicită Ajutor</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-red-200 hover:border-red-400 transition-colors duration-300 cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🤝</div>
                <h2 className="text-3xl font-bold text-red-800 mb-4">
                  Vreau să Ajut
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Vrei să faci parte din echipa de voluntari și să ajuți
                  compatrioții tăi din diaspora?
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-red-800 hover:bg-red-700 text-lg px-8 py-4"
                >
                  <Link href="/proiecte/voluntariat">Devino Voluntar</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Help Articles Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">
            Situații în Care Te Putem Ajuta
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {helpArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <Button className=" text-md ">
                    Serviciu in dezvoltare, revenim in curand!
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Consulting Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-br from-orange-800 to-orange-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full"
            animate={{
              scale: [1, 0.8, 1.3, 1],
              opacity: [0.4, 0.2, 0.8, 0.4],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-40 right-1/3 w-24 h-24 bg-white/5 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 30px rgba(255,255,255,0.8)",
                  "0 0 20px rgba(255,255,255,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-5xl sm:text-6xl">💻</span> Consultanță
              Gratuită
              <br />
              <span className="text-orange-300 text-shimmer">
                Marketing Digital
              </span>
            </motion.h2>
            <motion.p
              className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-2xl">🎯</span> Te ajut să înțelegi totul
              despre promovarea online -{" "}
              <strong className="text-orange-300">GRATUIT!</strong>
              <br />
            </motion.p>
          </motion.div>

          {/* Main Value Proposition */}
          <motion.div
            className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 sm:p-12 text-center border border-white/30 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-8"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-6xl">💡</span>
            </motion.div>
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              🎓 Îți Explic Totul - Simplu și Clar!
            </motion.h3>

            {/* WhatsApp CTA */}
            <motion.div
              className="mt-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="https://wa.me/4915255474082?text=Salut! Sunt interesat/ă de consultanța gratuită pentru marketing digital. Mulțumesc!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 sm:gap-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl border-2 border-orange-500"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(234, 88, 12, 0.6)",
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  y: [0, -5, 0],
                  boxShadow: [
                    "0 10px 30px rgba(234, 88, 12, 0.3)",
                    "0 15px 40px rgba(234, 88, 12, 0.5)",
                    "0 10px 30px rgba(234, 88, 12, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.span
                  className="text-2xl sm:text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  📱
                </motion.span>
                <span className="text-center">Contactează-mă pe WhatsApp</span>
                <motion.span
                  className="text-2xl sm:text-3xl"
                  animate={{
                    y: [0, -3, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                >
                  💬
                </motion.span>
              </motion.a>

              <motion.p
                className="text-white/80 mt-4 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                📞 +49 1525 5474082
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
