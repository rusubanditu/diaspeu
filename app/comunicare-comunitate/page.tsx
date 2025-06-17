"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Smartphone,
  Monitor,
  Download,
  MessageCircle,
  Users,
  Volume2,
  Settings,
  ArrowRight,
  CheckCircle,
  Play,
  Coffee,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

/**
 * Discord Tutorial Page for 45+ Romanian Users
 * Easy-to-follow instructions with device selection and micro-animations
 * Based on latest Discord download information from discord.com
 */
export default function ComunicareComunitate() {
  const [selectedDevice, setSelectedDevice] = useState<
    "android" | "ios" | "windows"
  >("windows");
  const [currentStep, setCurrentStep] = useState(0);

  // Animated step tracker
  const Step = ({
    number,
    title,
    isActive,
    isCompleted,
  }: {
    number: number;
    title: string;
    isActive: boolean;
    isCompleted: boolean;
  }) => (
    <div
      className={`flex items-center space-x-3 transition-all duration-500 ${
        isActive ? "scale-105" : ""
      }`}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isCompleted
            ? "bg-green-500 text-white"
            : isActive
            ? "bg-blue-600 text-white animate-pulse"
            : "bg-gray-300 text-gray-600"
        }`}
      >
        {isCompleted ? <CheckCircle className="w-5 h-5" /> : number}
      </div>
      <span
        className={`font-medium ${
          isActive ? "text-blue-600" : "text-gray-700"
        }`}
      >
        {title}
      </span>
    </div>
  );

  // Device-specific instructions
  const getInstructions = () => {
    switch (selectedDevice) {
      case "android":
        return {
          downloadLink:
            "https://play.google.com/store/apps/details?id=com.discord",
          steps: [
            {
              title: "Deschideți Google Play Store",
              description:
                "Găsiți aplicația Play Store pe telefon (iconița colorată cu un triunghi)",
              icon: <Smartphone className="w-6 h-6 text-green-500" />,
            },
            {
              title: "Căutați 'Discord'",
              description:
                "Apăsați pe bara de căutare de sus și scrieți 'Discord'",
              icon: <Download className="w-6 h-6 text-blue-500" />,
            },
            {
              title: "Instalați aplicația",
              description:
                "Apăsați butonul verde 'Instalează' lângă aplicația Discord",
              icon: <CheckCircle className="w-6 h-6 text-green-500" />,
            },
            {
              title: "Deschideți Discord",
              description:
                "După instalare, apăsați 'Deschide' sau găsiți iconița Discord pe telefon",
              icon: <Play className="w-6 h-6 text-purple-500" />,
            },
          ],
        };

      case "ios":
        return {
          downloadLink: "https://apps.apple.com/app/discord/id985746746",
          steps: [
            {
              title: "Deschideți App Store",
              description:
                "Găsiți aplicația App Store pe iPhone/iPad (iconița albastră cu 'A')",
              icon: <Smartphone className="w-6 h-6 text-blue-500" />,
            },
            {
              title: "Căutați 'Discord'",
              description:
                "Apăsați pe 'Search' jos și scrieți 'Discord' în bara de căutare",
              icon: <Download className="w-6 h-6 text-blue-500" />,
            },
            {
              title: "Descărcați aplicația",
              description:
                "Apăsați butonul 'GET' lângă aplicația Discord (poate să vă ceară parola)",
              icon: <CheckCircle className="w-6 h-6 text-green-500" />,
            },
            {
              title: "Deschideți Discord",
              description:
                "După descărcare, apăsați 'Open' sau găsiți iconița Discord pe ecran",
              icon: <Play className="w-6 h-6 text-purple-500" />,
            },
          ],
        };

      case "windows":
      default:
        return {
          downloadLink: "https://discord.com/download",
          steps: [
            {
              title: "Mergeți pe site-ul Discord",
              description:
                "Deschideți browserul (Chrome, Edge, Firefox) și mergeți la discord.com/download",
              icon: <Monitor className="w-6 h-6 text-blue-500" />,
            },
            {
              title: "Descărcați pentru Windows",
              description:
                "Apăsați butonul mare albastru 'Download for Windows' de pe pagină",
              icon: <Download className="w-6 h-6 text-blue-500" />,
            },
            {
              title: "Rulați fișierul descărcat",
              description:
                "Găsiți fișierul 'DiscordSetup.exe' în folderul Downloads și faceți dublu-click pe el",
              icon: <Settings className="w-6 h-6 text-orange-500" />,
            },
            {
              title: "Instalarea automată",
              description:
                "Discord se va instala automat. După câteva minute se va deschide singur",
              icon: <CheckCircle className="w-6 h-6 text-green-500" />,
            },
          ],
        };
    }
  };

  const instructions = getInstructions();

  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Comunicare în Comunitate
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
            Învățați să folosiți Discord - o platformă simplă pentru a vorbi cu
            românii din diaspora. Este ca IRC-ul din anii 2000, dar mult mai
            ușor de folosit!
          </p>
          <div className="flex items-center justify-center space-x-2 text-white/80">
            <Coffee className="w-5 h-5" />
            <span>Urmează instrucțiunile pas cu pas - este foarte simplu!</span>
          </div>

          {/* Quick join button for those familiar with Discord */}
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 shadow-lg"
              onClick={() =>
                window.open("https://discord.gg/qbadfZmKNA", "_blank")
              }
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Alăturați-vă Acum
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* What is Discord - Simple Explanation */}
        <Card className="mb-12 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <MessageCircle className="w-8 h-8 text-blue-600" />
              <span>Ce este Discord?</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  <strong>Discord este ca un club virtual</strong> unde românii
                  din toată lumea se pot întâlni și vorbi. Imaginați-vă
                  cafeneaua din cartier, dar pe internet!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-green-500" />
                    <span>Conversații în grup cu sute de români</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-6 h-6 text-blue-500" />
                    <span>Mesaje scrise, ca pe WhatsApp</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Volume2 className="w-6 h-6 text-purple-500" />
                    <span>Conversații vocale, ca la telefon</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-6">
                  <Heart className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
                  <p className="text-lg font-semibold text-gray-700">
                    Comunitatea românilor din diaspora vă așteaptă!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Device Selection */}
        <Card className="mb-12 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl mb-4">
              Ce dispozitiv aveți?
            </CardTitle>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Alegeți dispozitivul pe care vreți să instalați Discord
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                {
                  id: "android",
                  name: "Telefon Android",
                  icon: Smartphone,
                  desc: "Samsung, Huawei, Xiaomi, etc.",
                },
                {
                  id: "ios",
                  name: "iPhone/iPad",
                  icon: Smartphone,
                  desc: "Dispozitive Apple",
                },
                {
                  id: "windows",
                  name: "Computer Windows",
                  icon: Monitor,
                  desc: "PC sau laptop",
                },
              ].map((device) => (
                <Button
                  key={device.id}
                  variant={selectedDevice === device.id ? "default" : "outline"}
                  className={`h-auto p-4 md:p-6 w-full flex flex-col items-center space-y-2 md:space-y-3 transition-all duration-300 hover:scale-105 ${
                    selectedDevice === device.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : ""
                  }`}
                  onClick={() => setSelectedDevice(device.id as any)}
                >
                  <device.icon className="w-8 h-8 md:w-12 md:h-12" />
                  <div className="text-center">
                    <div className="font-semibold text-base md:text-lg">
                      {device.name}
                    </div>
                    <div className="text-xs md:text-sm opacity-75">
                      {device.desc}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Step-by-Step Instructions */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center">
              Instrucțiuni pentru{" "}
              {selectedDevice === "android"
                ? "Android"
                : selectedDevice === "ios"
                ? "iPhone/iPad"
                : "Windows"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-8">
            <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto">
              {instructions.steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start md:space-x-6 p-4 md:p-6 rounded-lg transition-all duration-500 ${
                    index === currentStep
                      ? "bg-blue-50 border-2 border-blue-200 shadow-md"
                      : "bg-gray-50"
                  }`}
                >
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${
                        index === currentStep
                          ? "bg-blue-600 text-white animate-bounce"
                          : "bg-gray-300"
                      }`}
                    >
                      {index < currentStep ? (
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                      ) : (
                        index + 1
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-center gap-2">
                      {step.icon}
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download button placed directly under title */}
            <motion.div
              className="mt-4 flex justify-center"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 shadow-md"
                onClick={() => window.open(instructions.downloadLink, "_blank")}
              >
                <Download className="w-5 h-5 mr-2" />
                Descarcă Discord
              </Button>
            </motion.div>
          </CardContent>
        </Card>

        {/* Join Community Server */}
        <Card className="mb-12 border-2 border-green-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
            <CardTitle className="text-xl sm:text-2xl md:text-3xl text-center flex items-center justify-center space-x-2 sm:space-x-3">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600" />
              <span>Alăturați-vă Comunității Românilor</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 md:p-8 text-center">
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              După ce ați instalat Discord, urmați acești pași simpli pentru a
              vă alătura comunității noastre:
            </p>

            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
                Codul de invitație:
              </h3>
              <div className="bg-white rounded-lg p-2 sm:p-4 border-2 border-dashed border-blue-300 overflow-x-auto">
                <code className="text-base sm:text-xl md:text-2xl font-mono text-blue-600 font-bold whitespace-nowrap">
                  https://discord.gg/qbadfZmKNA
                </code>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl font-bold text-blue-600">
                    1
                  </span>
                </div>
                <p className="text-sm sm:text-base">
                  Deschideți Discord pe dispozitivul dvs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl font-bold text-green-600">
                    2
                  </span>
                </div>
                <p className="text-sm sm:text-base">
                  Căutați butonul "+" pentru a vă alătura unui server
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl font-bold text-purple-600">
                    3
                  </span>
                </div>
                <p className="text-sm sm:text-base">
                  Introduceți codul de mai sus
                </p>
              </div>
            </div>

            {/* Join button directly under title */}
            <motion.div
              className="mt-4 flex justify-center"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 shadow-md"
                onClick={() =>
                  window.open("https://discord.gg/qbadfZmKNA", "_blank")
                }
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Alăturați-vă Acum
              </Button>
            </motion.div>
          </CardContent>
        </Card>

        {/* Tips for Beginners */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-center">
              Sfaturi pentru începători
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  📱 Pe telefon:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Apăsați pe un canal pentru a citi mesajele</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>
                      Scrieți în căsuța de jos pentru a trimite mesaje
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>
                      Pentru conversații vocale, apăsați pe canalele cu simbolul
                      🔊
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-600">
                  💻 Pe computer:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>
                      Canalele sunt în stânga, ca niște camere virtuale
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Mesajele apar în mijloc, ca într-o conversație</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Persoanele conectate sunt în dreapta</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-lg mb-2">
                💡 Important de reținut:
              </h4>
              <p className="text-gray-700">
                Discord este <strong>GRATUIT</strong> și <strong>SIGUR</strong>{" "}
                de folosit. Nu vă cerem niciodată date bancare sau informații
                personale sensibile. Comportați-vă politicos și respectați
                celelalte persoane din comunitate.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
