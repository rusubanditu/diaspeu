import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    title: "Sprijin în Situații de Urgență Medicală",
    description: "Asistență rapidă pentru românii care se confruntă cu probleme medicale grave în străinătate.",
    image: "/placeholder.svg?height=250&width=400",
    slug: "urgente-medicale",
  },
  {
    id: 3,
    title: "Ajutor pentru Documentație și Birocrație",
    description: "Te ajutăm să navighezi prin sistemele birocratice complexe din țările europene.",
    image: "/placeholder.svg?height=250&width=400",
    slug: "documentatie-birocratice",
  },
]

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
]

export default function ProiectePage() {
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="warm-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-red-800 mb-6">Proiectele Noastre</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Alege cum vrei să interacționezi cu comunitatea noastră
          </p>
        </div>
      </section>

      {/* Choice Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-4 border-red-200 hover:border-red-400 transition-colors duration-300 cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🆘</div>
                <h2 className="text-3xl font-bold text-red-800 mb-4">Am Nevoie de Ajutor</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Te confrunți cu o situație dificilă și ai nevoie de sprijin? Comunitatea noastră este aici să te
                  ajute.
                </p>
                <Button asChild size="lg" className="bg-red-800 hover:bg-red-700 text-lg px-8 py-4">
                  <Link href="/proiecte/ajutor">Solicită Ajutor</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-red-200 hover:border-red-400 transition-colors duration-300 cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🤝</div>
                <h2 className="text-3xl font-bold text-red-800 mb-4">Vreau să Ajut</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Vrei să faci parte din echipa de voluntari și să ajuți compatrioții tăi din diaspora?
                </p>
                <Button asChild size="lg" className="bg-red-800 hover:bg-red-700 text-lg px-8 py-4">
                  <Link href="/proiecte/voluntariat">Devino Voluntar</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Traditional Pattern Divider */}
      <div className="traditional-pattern h-8"></div>

      {/* Help Articles Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Situații în Care Te Putem Ajuta</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {helpArticles.map((article) => (
              <Card
                key={article.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-3">{article.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{article.description}</p>
                  <Button asChild variant="outline" className="border-red-800 text-red-800 hover:bg-red-50">
                    <Link href={`/proiecte/${article.slug}`}>Citește mai mult →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">Servicii de Voluntariat</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerServices.map((service) => (
              <Card
                key={service.id}
                className="border-2 border-red-100 hover:border-red-300 transition-colors duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-red-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
