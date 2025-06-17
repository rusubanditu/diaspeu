import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Define volunteer services array
const volunteerServices = [
  {
    id: 1,
    title: "Transport și Logistică, Service Auto",

    icon: "🚛",
  },
  {
    id: 2,
    title: "Traduceri și Interpretariat",

    icon: "🗣️",
  },
  {
    id: 3,
    title: "Asistență Juridică",

    icon: "⚖️",
  },
  {
    id: 4,
    title: "Sprijin Emoțional",

    icon: "❤️",
  },
  {
    id: 5,
    title: "Rețea de Fermieri ",

    icon: "🌾",
  },
  {
    id: 6,
    title: "Promovare produse 100% capital Românesc",

    icon: "🚀", // Changed to a rocket ship to represent growth and promotion
  },
  {
    id: 7,
    title: "Locuri de muncă în Europa",

    icon: "💼", // Changed to a briefcase to represent jobs and employment
  },
  {
    id: 8,
    title: "Restaurante Românești",

    icon: "🍴", // Changed to a fork and knife to represent food and dining
  },
  {
    id: 9,
    title: "Magazine Românești",

    icon: "🛍️", // Changed to a shopping bag to represent shopping and commerce
  },
  {
    id: 10,
    title: "Alte afaceri românești",

    icon: "🚧", // Changed to a construction sign to represent business and entrepreneurship
  },
];

export default function PaginaSpecialaPage() {
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="warm-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-red-800 mb-6">
            Detalii despre serviciile noastre
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Servicii dedicate comunității românești din diaspora
          </p>
        </div>
      </section>

      {/* Traditional Pattern Divider */}
      <div className="traditional-pattern h-8"></div>

      {/* Volunteer Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-800 mb-12">
            Servicii de Voluntariat
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerServices.map((service) => (
              <Card
                key={service.id}
                className="border-2 border-red-100 hover:border-red-300 transition-colors duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-red-800 mb-3">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
