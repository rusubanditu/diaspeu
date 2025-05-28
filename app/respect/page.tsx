import { Card, CardContent } from "@/components/ui/card"

export default function RespectPage() {
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <section className="warm-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-red-800 mb-6">Respect și Transparență</h1>
          <p className="text-xl text-gray-700 leading-relaxed">Principiile și valorile care ne ghidează activitatea</p>
        </div>
      </section>

      {/* Traditional Pattern Divider */}
      <div className="traditional-pattern h-8"></div>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-2 border-red-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center">
                <span className="text-4xl mr-4">🏛️</span>
                Independența Noastră
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong>ONG România</strong> este o organizație complet independentă, care nu este asociată, susținută
                  sau finanțată de niciun partid politic, guvern sau organizație cu interese politice.
                </p>
                <p>
                  Activitatea noastră este bazată exclusiv pe voluntariat și donații private din partea comunității
                  românești din diaspora.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center">
                <span className="text-4xl mr-4">🤝</span>
                Misiunea de Voluntariat
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Suntem o rețea de voluntari români din toate colțurile Europei, uniți de dorința comună de a ajuta
                  compatrioții noștri care se află în situații dificile.
                </p>
                <p>
                  Serviciile noastre sunt oferite gratuit, din solidaritate și empatie pentru cei care au nevoie de
                  sprijin în momentele grele.
                </p>
                <p>
                  Nu avem niciun motiv ulterior în afara dorinței sincere de a ajuta și de a crea o comunitate puternică
                  în diaspora.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center">
                <span className="text-4xl mr-4">⚠️</span>
                Poziția Noastră Fermă
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong>Condamnăm ferm</strong> orice act de dezinformare, propagandă sau manipulare a opiniei
                  publice.
                </p>
                <p>
                  Nu promovăm nicio agendă politică și nu susținem niciun candidat sau partid politic din România sau
                  din țările în care activăm.
                </p>
                <p>
                  Activitatea noastră se concentrează exclusiv pe ajutorarea concretă a românilor din diaspora, fără
                  implicații politice.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-red-800 mb-6 flex items-center">
                <span className="text-4xl mr-4">🔒</span>
                Confidențialitatea și Respectul
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Respectăm pe deplin confidențialitatea și demnitatea tuturor persoanelor care apelează la serviciile
                  noastre.
                </p>
                <p>
                  Nu colectăm, nu stocăm și nu partajăm informații personale fără consimțământul explicit al persoanelor
                  implicate.
                </p>
                <p>Toate interacțiunile noastre sunt bazate pe respect mutual, empatie și solidaritate între români.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-50 border-2 border-red-300">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-red-800 mb-4">Angajamentul Nostru</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Ne angajăm să rămânem fideli acestor principii și să oferim sprijin autentic și dezinteresat tuturor
                românilor care au nevoie de ajutor în diaspora europeană.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
