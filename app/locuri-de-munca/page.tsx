"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Componenta principală pentru pagina de locuri de muncă
export default function JobsPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedForm, setSelectedForm] = useState("");

  // Funcție pentru gestionarea redirecționării către formulare
  const handleRedirect = (formUrl: string) => {
    window.location.href = formUrl;
  };

  // Funcție pentru deschiderea dialogului
  const openDialog = (formUrl: string) => {
    setSelectedForm(formUrl);
    setShowDialog(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Secțiunea principală */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 traditional-pattern opacity-20"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Titlu și descriere */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-orange-800 mb-6">
              Locuri de Muncă pentru Români
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Ne dedicăm să ajutăm românii să găsească oportunități de muncă
              decente și bine plătite, atât în țară cât și în diaspora. Prin
              rețeaua noastră de contacte și parteneri, facilităm conexiunea
              dintre angajatori de încredere și români care caută un loc de
              muncă stabil.
            </p>
          </div>

          {/* Container pentru carduri */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card pentru Diaspora */}
            <Card className="border-2 border-orange-200 transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-orange-800 mb-6">
                  Locuri de Muncă în Diaspora
                </h3>
                <p className="text-gray-700 mb-6">
                  Căutați oportunități de muncă în străinătate? Vă ajutăm să
                  găsiți poziții potrivite și să vă conectăm cu angajatori
                  serioși din toată Europa.
                </p>
                <Button
                  className="bg-orange-600 hover:bg-orange-700 text-white w-full"
                  onClick={() =>
                    openDialog("https://forms.gle/JXXiW5QHX2CKfF4h9")
                  }
                >
                  Aplică pentru Diaspora
                </Button>
              </CardContent>
            </Card>

            {/* Card pentru România */}
            <Card className="border-2 border-orange-200 transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-orange-800 mb-6">
                  Locuri de Muncă în România
                </h3>
                <p className="text-gray-700 mb-6">
                  Doriți să lucrați în România? Vă sprijinim în găsirea unui loc
                  de muncă potrivit și bine plătit în țară.
                </p>
                <Button
                  className="bg-orange-600 hover:bg-orange-700 text-white w-full"
                  onClick={() =>
                    openDialog(
                      "https://docs.google.com/forms/d/e/1FAIpQLSfQCyZ23X7wtf8X3XyBCx76nX4-XkG3xL9F7AK7kspRX5gZKQ/viewform?usp=dialog"
                    )
                  }
                >
                  Aplică pentru România
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dialog de confirmare */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Redirecționare către formular</AlertDialogTitle>
            <AlertDialogDescription>
              Veți fi redirecționat către un formular pentru completarea
              informațiilor despre experiența profesională. Acest lucru ne ajută
              să identificăm cele mai potrivite oportunități de muncă pentru
              dumneavoastră.
              <br />
              <br />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Anulează</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleRedirect(selectedForm)}
              className="bg-orange-600 hover:bg-orange-700"
            >
              Continuă
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
