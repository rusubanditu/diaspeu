import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const countries = [
  {
    name: "Germania",
    population: "~800.000",
    coordinator: "Maria Popescu",
    services: [
      "Asistență juridică",
      "Transport",
      "Traduceri",
      "Cazare urgență",
    ],
    contact: "germania@ong-romania.eu",
    flag: "🇩🇪",
  },
  {
    name: "Italia",
    population: "~1.200.000",
    coordinator: "Ana Gheorghiu",
    services: ["Repatrieri", "Asistență medicală", "Documentație", "Integrare"],
    contact: "italia@ong-romania.eu",
    flag: "🇮🇹",
  },
  {
    name: "Spania",
    population: "~900.000",
    coordinator: "Mihai Constantinescu",
    services: [
      "Sprijin fermieri",
      "Asistență socială",
      "Educație",
      "Traduceri",
    ],
    contact: "spania@ong-romania.eu",
    flag: "🇪🇸",
  },
  {
    name: "Franța",
    population: "~600.000",
    coordinator: "Ion Marinescu",
    services: [
      "Consultanță juridică",
      "Asistență birocrație",
      "Transport",
      "Cazare",
    ],
    contact: "franta@ong-romania.eu",
    flag: "🇫🇷",
  },
  {
    name: "Marea Britanie",
    population: "~400.000",
    coordinator: "Elena Radu",
    services: [
      "Post-Brexit support",
      "Documentație",
      "Asistență juridică",
      "Comunitate",
    ],
    contact: "uk@ong-romania.eu",
    flag: "🇬🇧",
  },
  {
    name: "Olanda",
    population: "~250.000",
    coordinator: "Andrei Stoica",
    services: ["Integrare", "Asistență fiscală", "Educație copii", "Transport"],
    contact: "olanda@ong-romania.eu",
    flag: "🇳🇱",
  },
];

export default function TariPage() {
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="warm-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-red-800 mb-6">
            Țările în Care Activăm
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Rețeaua noastră de voluntari acoperă principalele destinații ale
            diasporei românești din Europa
          </p>
        </div>
      </section>

      {/* Traditional Pattern Divider */}
      <div className="traditional-pattern h-8"></div>

      {/* Statistics */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-red-800 mb-2">15+</div>
              <p className="text-lg text-gray-700">Țări Acoperite</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-red-800 mb-2">4M+</div>
              <p className="text-lg text-gray-700">Români în Diaspora</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-red-800 mb-2">700+</div>
              <p className="text-lg text-gray-700">Voluntari Activi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">
            Principalele Țări de Destinație
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => (
              <Card
                key={country.name}
                className="border-2 border-red-200 hover:border-red-400 transition-colors duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-red-800">
                      {country.name}
                    </h3>
                    <span className="text-4xl">{country.flag}</span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Populație română estimată:
                      </p>
                      <p className="text-lg font-semibold text-gray-800">
                        {country.population}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Coordonator local:
                      </p>
                      <p className="text-lg font-semibold text-gray-800">
                        {country.coordinator}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-2">
                        Servicii disponibile:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {country.services.map((service) => (
                          <span
                            key={service}
                            className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-red-800 text-red-800 hover:bg-red-50"
                      >
                        <a href={`mailto:${country.contact}`}>
                          Contactează Echipa
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-800 mb-6">
            Extindem Rețeaua
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Lucrăm continuu pentru a extinde rețeaua de voluntari în toate
            țările europene cu comunități românești semnificative.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="border-2 border-red-200">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-red-800 mb-3">
                  Țări în Dezvoltare
                </h3>
                <p className="text-gray-600 mb-4">
                  Austria, Belgia, Portugalia, Suedia, Danemarca
                </p>
                <p className="text-sm text-gray-500">
                  Căutăm voluntari locali pentru aceste țări
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-red-800 mb-3">
                  Vrei să Ajuți?
                </h3>
                <p className="text-gray-600 mb-4">
                  Dacă locuiești într-o țară unde nu avem încă echipă
                </p>
                <Button asChild className="bg-red-800 hover:bg-red-700">
                  <Link href="/contact">Contactează-ne</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
