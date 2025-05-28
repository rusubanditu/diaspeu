import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="warm-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-red-800 mb-6">Contactează-ne</h1>
          <p className="text-xl text-gray-700 leading-relaxed">Suntem aici să te ajutăm. Nu ezita să ne contactezi!</p>
        </div>
      </section>

      {/* Traditional Pattern Divider */}
      <div className="traditional-pattern h-8"></div>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-red-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-red-800 mb-6">Trimite-ne un Mesaj</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-lg font-medium text-gray-700 mb-2">Nume *</label>
                      <Input
                        type="text"
                        required
                        className="text-lg border-2 border-red-200 focus:border-red-500"
                        placeholder="Numele tău"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-medium text-gray-700 mb-2">Prenume *</label>
                      <Input
                        type="text"
                        required
                        className="text-lg border-2 border-red-200 focus:border-red-500"
                        placeholder="Prenumele tău"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      required
                      className="text-lg border-2 border-red-200 focus:border-red-500"
                      placeholder="adresa@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">Telefon</label>
                    <Input
                      type="tel"
                      className="text-lg border-2 border-red-200 focus:border-red-500"
                      placeholder="+40 xxx xxx xxx"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">Țara în care te afli</label>
                    <Input
                      type="text"
                      className="text-lg border-2 border-red-200 focus:border-red-500"
                      placeholder="Germania, Franța, Italia..."
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">Mesajul tău *</label>
                    <Textarea
                      required
                      rows={6}
                      className="text-lg border-2 border-red-200 focus:border-red-500"
                      placeholder="Descrie situația ta sau cum vrei să ajuți..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-red-800 hover:bg-red-700 text-lg py-4">
                    Trimite Mesajul
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-2 border-red-200">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-red-800 mb-6">Informații de Contact</h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-red-800 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600">contact@ong-romania.eu</p>
                        <p className="text-gray-600">urgente@ong-romania.eu</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-red-800 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Telefon Urgențe</h3>
                        <p className="text-gray-600">+49 xxx xxx xxxx (Germania)</p>
                        <p className="text-gray-600">+33 xxx xxx xxxx (Franța)</p>
                        <p className="text-gray-600">+39 xxx xxx xxxx (Italia)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-red-800 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Program</h3>
                        <p className="text-gray-600">Luni - Vineri: 09:00 - 18:00</p>
                        <p className="text-gray-600">Urgențe: 24/7</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-red-800 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Acoperire</h3>
                        <p className="text-gray-600">Toate țările Uniunii Europene</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-2 border-red-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-red-800 mb-4">Situații de Urgență</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Pentru situații care necesită intervenție imediată (probleme medicale grave, deces, probleme legale
                    urgente), te rugăm să ne contactezi direct la numerele de telefon de urgență.
                  </p>
                  <p className="text-lg font-semibold text-red-800">Răspundem în maxim 2 ore!</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-red-800 mb-4">Alătură-te Echipei</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Dacă vrei să devii voluntar și să ajuți compatrioții tăi din diaspora, contactează-ne! Căutăm mereu
                    oameni dedicați care vor să facă diferența.
                  </p>
                  <Button asChild className="bg-red-800 hover:bg-red-700">
                    <a href="mailto:voluntari@ong-romania.eu">Devino Voluntar</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
