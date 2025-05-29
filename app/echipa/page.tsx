"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const euCountries = [
  "Toate țările",
  "Germania",
  "Franța",
  "Italia",
  "Spania",
  "Olanda",
  "Belgia",
  "Austria",
  "Portugalia",
  "Suedia",
  "Danemarca",
  "Finlanda",
  "Irlanda",
  "Grecia",
  "Polonia",
  "Cehia",
  "Ungaria",
  "Slovacia",
  "Slovenia",
  "Croația",
  "Bulgaria",
  "România",
  "Estonia",
  "Letonia",
  "Lituania",
  "Luxemburg",
  "Malta",
  "Cipru",
];

const teamMembers = [
  {
    id: 1,
    name: "Doamna Cristina",
    role: "Coordonator General & Coordonator Germania",
    country: "Germania",

    image: "/dna_cristina.png",
  },
  {
    id: 2,
    name: "Domnul Dan",
    role: "Coordonator Proiecte",
    country: "Franța",

    image: "/dl-dan.png",
  },
  {
    id: 3,
    name: "Doamna X",
    role: "Reprezentant  DiasporaEU",
    country: "Bulgaria",

    image: "/anonim1.png",
  },
  {
    id: 4,
    name: "Domnul Y",
    role: "Specialist Integrare",
    country: "Spania",

    image: "/anonim2.png",
  },
  // {
  //   id: 5,
  //   name: "Elena Radu",
  //   role: "Responsabil Comunicare",
  //   country: "Olanda",
  //   description:
  //     "Gestionează comunicarea organizației și menține legătura cu comunitățile românești.",
  //   image: "/placeholder.svg?height=300&width=300",
  // },
  // {
  //   id: 6,
  //   name: "Andrei Stoica",
  //   role: "Coordonator Proiecte",
  //   country: "Germania",
  //   description:
  //     "Dezvoltă și implementează proiecte de sprijin pentru românii din diaspora.",
  //   image: "/placeholder.svg?height=300&width=300",
  // },
];

export default function EchipaPage() {
  const [selectedCountry, setSelectedCountry] = useState("Toate țările");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredMembers =
    selectedCountry === "Toate țările"
      ? teamMembers
      : teamMembers.filter((member) => member.country === selectedCountry);

  return (
    <div className="min-h-screen py-8">
      {/* Header Section */}
      <section className="warm-gradient py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 traditional-pattern opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1
            className={`text-5xl font-bold text-orange-800 mb-6 transition-all duration-1000 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Echipa Noastră
          </h1>
          <p
            className={`text-xl text-orange-900/80 leading-relaxed mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
            }`}
          >
            Suntem o echipă dedicată de voluntari români răspândiți în toată
            Europa, uniți de dorința comună de a ajuta compatrioții noștri din
            diaspora.
          </p>
          <div
            className={`bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-orange-200 transition-all duration-1000 delay-500 ${
              isVisible ? "animate-scale-in" : "opacity-0 scale-95"
            }`}
          >
            <h2 className="text-2xl font-bold text-orange-800 mb-4 romanian-accent">
              Misiunea Noastră
            </h2>
            <p className="text-lg text-orange-700/90 leading-relaxed">
              Creăm o rețea de sprijin pentru românii care trăiesc în
              străinătate, oferind asistență în momentele dificile și facilitând
              integrarea în comunitățile locale. Fiecare membru al echipei
              noastre aduce experiența și cunoștințele locale pentru a oferi cel
              mai bun sprijin posibil.
            </p>
          </div>
        </div>
      </section>

      {/* Traditional Pattern Divider */}
      <div className="traditional-pattern h-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 opacity-50"></div>
      </div>

      {/* Team Members Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-orange-800 mb-4 text-center romanian-accent">
              Membrii Echipei
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <label className="block text-lg font-medium text-orange-700 mb-2">
                  Filtrează după țară:
                </label>
                <Select
                  value={selectedCountry}
                  onValueChange={setSelectedCountry}
                >
                  <SelectTrigger className="text-lg border-2 border-orange-300 focus:border-orange-500 bg-white hover:bg-orange-50 transition-colors button-hover">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-orange-200">
                    {euCountries.map((country) => (
                      <SelectItem
                        key={country}
                        value={country}
                        className="text-lg hover:bg-orange-50 focus:bg-orange-100"
                      >
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <Card
                key={member.id}
                className="overflow-hidden shadow-lg border-2 border-orange-200 card-hover animate-slide-up bg-gradient-to-b from-white to-orange-50/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-orange-800">
                      {member.name}
                    </h3>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium border border-orange-200 pulse-warm">
                      {member.country}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-orange-600 mb-3">
                    {member.role}
                  </p>
                  {/* <p className="text-orange-700/80 leading-relaxed">
                    {member.description}
                  </p> */}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="text-6xl mb-4 animate-bounce-gentle">🌍</div>
              <p className="text-xl text-orange-600">
                Nu avem încă membri din {selectedCountry}.
                <br />
                <span className="text-orange-800 font-semibold">
                  Vrei să te alături echipei noastre?
                </span>
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
