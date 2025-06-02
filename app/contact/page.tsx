import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="warm-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-red-800 mb-6">
            Contactează-ne
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Suntem aici să te ajutăm. Nu ezita să ne contactezi!
          </p>
        </div>
      </section>

      {/* Traditional Pattern Divider */}
      <div className="traditional-pattern h-8"></div>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Contact Form */}

            {/* Contact Information */}
            <div className="space-y-8 ">
              <Card className="border-2 border-red-200 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">
                    Informații de Contact
                  </h2>

                  <div className="space-y-8 flex flex-col items-center">
                    <div className="flex flex-col items-center space-y-2">
                      <Mail className="h-8 w-8 text-red-800" />
                      <h3 className="text-lg font-semibold text-gray-800">
                        Email
                      </h3>
                      <p className="text-gray-600">contact@diasporaeu.de</p>
                      <p className="text-gray-600">office@diasporaeu.de</p>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                      <Clock className="h-8 w-8 text-red-800" />
                      <h3 className="text-lg font-semibold text-gray-800">
                        Program
                      </h3>
                      <p className="text-gray-600">
                        Luni - Duminică: 09:00 - 18:00
                      </p>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                      <MapPin className="h-8 w-8 text-red-800" />
                      <h3 className="text-lg font-semibold text-gray-800">
                        Acoperire
                      </h3>
                      <p className="text-gray-600">
                        Toate țările Uniunii Europene
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-red-800 mb-4">
                    Alătură-te Echipei
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Dacă vrei să devii voluntar și să ajuți compatrioții tăi din
                    diaspora, contactează-ne! Căutăm mereu oameni dedicați care
                    vor să facă diferența.
                  </p>
                  <Button asChild className="bg-red-800 hover:bg-red-700">
                    <a href="mailto:voluntari@ong-romania.eu">
                      Devino Voluntar
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
