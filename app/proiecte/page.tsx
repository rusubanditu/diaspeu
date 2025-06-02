import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

      {/* Traditional Pattern Divider */}
      <div className="traditional-pattern h-8"></div>

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
    </div>
  );
}
