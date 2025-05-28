import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, Users, Phone, Mail } from "lucide-react";
import { notFound } from "next/navigation";

const articles = {
  "sprijin-familii-diaspora": {
    title: "Sprijin pentru Familiile din Diaspora",
    subtitle:
      "Cum ajutăm românii să depășească provocările vieții în străinătate",
    publishDate: "15 Noiembrie 2024",
    readTime: "8 min citire",
    author: "Echipa ONG România",
    heroImage: "/pagina-principala/imagine-familie.png",
    content: {
      intro:
        "Viața în diaspora poate fi plină de provocări neașteptate. De la dificultăți administrative până la situații de urgență medicală, românii din străinătate se confruntă adesea cu obstacole care par de neînvins. ONG România a fost înființată pentru a oferi sprijin concret și empatic în aceste momente dificile.",
      sections: [
        {
          id: "situatii-urgenta",
          title: "Situații de Urgență și Intervenție Rapidă",
          content:
            "Când viața te pune în fața unei situații de urgență în străinătate, fiecare minut contează. Echipa noastră de voluntari este pregătită să intervină rapid în cazuri de urgență medicală, probleme legale acute sau situații care necesită asistență imediată.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Asistență medicală de urgență și coordonarea cu serviciile locale",
            "Sprijin în cazul accidentelor sau bolilor grave",
            "Facilitarea comunicării cu autoritățile locale",
            "Organizarea transportului medical de urgență",
            "Suport emoțional pentru familie în momentele critice",
          ],
        },
        {
          id: "asistenta-administrativa",
          title: "Asistență Administrativă și Birocrație",
          content:
            "Sistemele birocratice din diferite țări europene pot fi copleșitoare. Voluntarii noștri cu experiență locală te ghidează prin procesele administrative complexe, de la obținerea documentelor până la înțelegerea drepturilor tale.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Ajutor pentru completarea formularelor oficiale",
            "Traduceri certificate și interpretariat",
            "Ghidare prin procesele de obținere a documentelor",
            "Consultanță pentru probleme de rezidență și cetățenie",
            "Sprijin în relația cu autoritățile locale",
          ],
        },
        {
          id: "suport-emotional",
          title: "Suport Emoțional și Integrare Socială",
          content:
            "Adaptarea la o nouă cultură și societate poate fi provocatoare din punct de vedere emoțional. Oferim sprijin psihologic și facilităm integrarea în comunitățile locale prin programe dedicate.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Consiliere psihologică în limba română",
            "Grupuri de suport pentru familiile din diaspora",
            "Programe de integrare culturală",
            "Activități comunitare și evenimente sociale",
            "Mentoring pentru copii și adolescenți",
          ],
        },
        {
          id: "retea-voluntari",
          title: "Rețeaua de Voluntari și Solidaritate",
          content:
            "Forța organizației noastre stă în rețeaua extinsă de voluntari români din toată Europa. Fiecare voluntar aduce experiența sa locală și dorința de a ajuta compatrioții în nevoie.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Voluntari în peste 15 țări europene",
            "Expertiză locală în fiecare regiune",
            "Disponibilitate 24/7 pentru urgențe",
            "Rețea de profesioniști în diverse domenii",
            "Sprijin peer-to-peer între familii",
          ],
        },
      ],
    },
  },
  "retea-voluntari-europeni": {
    title: "Rețeaua de Voluntari Europeni",
    subtitle:
      "Cum conectăm românii din toată Europa pentru a se ajuta reciproc",
    publishDate: "20 Noiembrie 2024",
    readTime: "6 min citire",
    author: "Echipa ONG România",
    heroImage: "/pagina-principala/imagine-om.png",
    content: {
      intro:
        "Rețeaua noastră de voluntari reprezintă inima organizației, formând o comunitate puternică de români dedicați din toată Europa. Prin solidaritate și sprijin mutual, transformăm provocările vieții în diaspora în oportunități de creștere și conexiune.",
      sections: [
        {
          id: "structura-retea",
          title: "Structura Rețelei de Voluntari",
          content:
            "Rețeaua noastră este organizată strategic pentru a asigura acoperirea optimă a nevoilor comunității românești din diaspora. Fiecare voluntar aduce valoare unică prin experiența sa locală și expertiza profesională.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Coordonatori regionali în fiecare țară",
            "Echipe specializate pe domenii specifice",
            "Sistem de rotație pentru disponibilitate 24/7",
            "Training continuu pentru voluntari",
            "Evaluare și feedback regulat",
          ],
        },
        {
          id: "proces-selectie",
          title: "Procesul de Selecție și Training",
          content:
            "Selectăm cu atenție fiecare voluntar pentru a ne asigura că oferim servicii de cea mai înaltă calitate. Procesul de training este continuu și adaptat nevoilor specifice ale fiecărei regiuni.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Interviuri și evaluări de competențe",
            "Training în managementul cazurilor",
            "Workshop-uri de dezvoltare personală",
            "Simulări de situații reale",
            "Certificări și acreditări",
          ],
        },
        {
          id: "coordonare-activitati",
          title: "Coordonarea Activităților",
          content:
            "Sistemul nostru de coordonare asigură o intervenție rapidă și eficientă în orice situație. Utilizăm tehnologii moderne pentru a gestiona cazurile și a comunica între voluntari.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Platformă digitală de management",
            "Sistem de alocare inteligentă a cazurilor",
            "Comunicare în timp real",
            "Monitorizare și evaluare continuă",
            "Raportare și analiză de performanță",
          ],
        },
        {
          id: "impact-comunitate",
          title: "Impactul în Comunitate",
          content:
            "Rețeaua noastră de voluntari a făcut deja o diferență semnificativă în viețile multor români din diaspora. Măsurăm și evaluăm constant impactul pentru a ne îmbunătăți continuu serviciile.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Peste 1000 de cazuri rezolvate",
            "Satisfacție client de 98%",
            "Timp mediu de răspuns sub 2 ore",
            "Rata de succes în rezolvarea cazurilor",
            "Feedback pozitiv din partea beneficiarilor",
          ],
        },
      ],
    },
  },
  "programe-integrare": {
    title: "Programe de Integrare Comunitară",
    subtitle:
      "Facilităm integrarea românilor în comunitățile locale din țările de adopție",
    publishDate: "25 Noiembrie 2024",
    readTime: "7 min citire",
    author: "Echipa ONG România",
    heroImage: "/pagina-principala/imagine-copil.png",
    content: {
      intro:
        "Integrarea într-o nouă comunitate poate fi o provocare majoră. Programele noastre sunt concepute pentru a facilita această tranziție, oferind suport practic și emoțional pentru românii care încep o nouă viață în străinătate.",
      sections: [
        {
          id: "orientare-culturala",
          title: "Orientare Culturală și Socială",
          content:
            "Programul nostru de orientare culturală ajută românii să înțeleagă și să se adapteze la noile norme sociale și culturale, facilitând integrarea în comunitatea locală.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Workshop-uri de adaptare culturală",
            "Ghiduri practice pentru viața de zi cu zi",
            "Sesiuni de networking cu comunitatea locală",
            "Activități interculturale",
            "Consiliere pentru familii",
          ],
        },
        {
          id: "suport-educational",
          title: "Suport Educațional",
          content:
            "Oferim programe educaționale specializate pentru copii și adulți, ajutându-i să se adapteze la sistemul educațional local și să-și dezvolte abilitățile necesare.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Mediere lingvistică pentru copii",
            "Cursuri de limba locală",
            "Suport pentru teme și studii",
            "Orientare profesională",
            "Programe de alfabetizare digitală",
          ],
        },
        {
          id: "activitati-comunitare",
          title: "Activități Comunitare",
          content:
            "Organizăm evenimente și activități care aduc împreună românii și comunitatea locală, creând oportunități de socializare și integrare naturală.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Festivaluri culturale",
            "Evenimente sportive",
            "Workshop-uri de artă și meșteșuguri",
            "Grupuri de suport pentru părinți",
            "Activități de voluntariat comunitar",
          ],
        },
        {
          id: "mentorat",
          title: "Program de Mentorat",
          content:
            "Programul nostru de mentorat conectează familiile noi cu români cu experiență în țara de adopție, oferind ghidare personalizată și suport continuu.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Mentori cu experiență locală",
            "Planuri personalizate de integrare",
            "Întâlniri regulate de follow-up",
            "Suport pentru rezolvarea problemelor",
            "Rețea de contacte utile",
          ],
        },
      ],
    },
  },
  "asistenta-juridica": {
    title: "Asistență Juridică Gratuită",
    subtitle:
      "Consultanță juridică pentru probleme legate de documentație și drepturi",
    publishDate: "30 Noiembrie 2024",
    readTime: "9 min citire",
    author: "Echipa ONG România",
    heroImage: "/pagina-principala/imagine-muncitor.png",
    content: {
      intro:
        "Navigarea sistemului juridic dintr-o țară străină poate fi intimidantă. Echipa noastră de avocați și consultanți juridici oferă asistență gratuită pentru a te ajuta să înțelegi și să-ți exercită drepturile în mod eficient.",
      sections: [
        {
          id: "consiliere-juridica",
          title: "Consiliere Juridică Specializată",
          content:
            "Oferim consultanță juridică în diverse domenii, de la dreptul muncii până la probleme de imigrare, asigurându-ne că beneficiezi de informații precise și actualizate.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Dreptul muncii și protecția angajaților",
            "Drepturi de imigrare și rezidență",
            "Protejarea consumatorilor",
            "Drepturi de locuință",
            "Drepturi civile și administrative",
          ],
        },
        {
          id: "asistenta-documente",
          title: "Asistență în Pregătirea Documentelor",
          content:
            "Te ajutăm să pregătești și să completezi corect toate documentele necesare, reducând riscul de erori și întârzieri în procesele administrative.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Verificare și completare formulare",
            "Traduceri certificate",
            "Legalizări și apostile",
            "Pregătire cereri și apeluri",
            "Arhivare și organizare documente",
          ],
        },
        {
          id: "reprezentare-juridica",
          title: "Reprezentare Juridică",
          content:
            "În cazurile care necesită reprezentare în instanță sau în fața autorităților, echipa noastră de avocați te poate asista în tot procesul.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Reprezentare în instanță",
            "Negocieri cu autoritățile",
            "Mediere în conflicte",
            "Apeluri și recursuri",
            "Monitorizare proceduri",
          ],
        },
        {
          id: "educatie-juridica",
          title: "Educație Juridică",
          content:
            "Organizăm sesiuni de educație juridică pentru a te ajuta să înțelegi mai bine drepturile tale și să știi cum să le exercită în mod eficient.",
          image: "/placeholder.svg?height=300&width=500",
          details: [
            "Workshop-uri informative",
            "Ghiduri practice",
            "Sesiuni Q&A cu experți",
            "Materiale educaționale",
            "Training-uri specializate",
          ],
        },
      ],
    },
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="warm-gradient py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 traditional-pattern opacity-20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <div className="mb-8 animate-fade-in">
            <Button
              asChild
              variant="outline"
              className="border-orange-600 text-orange-700 hover:bg-orange-50 button-hover"
            >
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Înapoi la pagina principală
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-orange-700 mb-6 leading-relaxed">
              {article.subtitle}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap justify-center gap-6 text-orange-600 mb-8">
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                {article.author}
              </span>
              <span>📅 {article.publishDate}</span>
              <span>⏱️ {article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative">
        <div className="relative h-96 overflow-hidden">
          <Image
            src={article.heroImage || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent"></div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 animate-fade-in">
            <p className="text-xl leading-relaxed text-orange-800 font-medium bg-orange-50 p-6 rounded-xl border-l-4 border-orange-600">
              {article.content.intro}
            </p>
          </div>

          {/* Article Sections */}
          <div className="space-y-16">
            {article.content.sections.map((section, index) => (
              <div
                key={section.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="overflow-hidden shadow-lg border-2 border-orange-200 card-hover">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={section.image || "/placeholder.svg"}
                        alt={section.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-8 bg-gradient-to-br from-white to-orange-50/50">
                      <h2 className="text-2xl font-bold text-orange-800 mb-4 romanian-accent">
                        {section.title}
                      </h2>
                      <p className="text-orange-700 leading-relaxed mb-6">
                        {section.content}
                      </p>

                      {/* Details List */}
                      <div className="space-y-3 mb-6">
                        {section.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-orange-700">{detail}</p>
                          </div>
                        ))}
                      </div>

                      <Button
                        asChild
                        className="bg-orange-600 hover:bg-orange-700 button-hover"
                      >
                        <Link href="/contact">Solicită Ajutor</Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 animate-scale-in">
            <Card className="bg-gradient-to-r from-orange-600 to-orange-700 text-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 animate-bounce-gentle" />
                <h3 className="text-2xl font-bold mb-4">
                  Ai nevoie de ajutor?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Nu ezita să ne contactezi. Echipa noastră este aici să te
                  sprijine în orice situație dificilă.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="button-hover"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Trimite un mesaj
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-orange-700 button-hover"
                  >
                    <Link
                      href="tel:+40123456789"
                      className="flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      Sună acum
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-12 romanian-accent">
            Alte Articole Utile
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Rețeaua de Voluntari Europeni",
                description: "Cum funcționează rețeaua noastră de sprijin",
                image: "/pagina-principala/imagine-om.png",
                slug: "retea-voluntari-europeni",
              },
              {
                title: "Programe de Integrare",
                description: "Facilităm integrarea în comunitățile locale",
                image: "/pagina-principala/imagine-copil.png",
                slug: "programe-integrare",
              },
              {
                title: "Asistență Juridică",
                description: "Consultanță juridică gratuită pentru români",
                image: "/pagina-principala/imagine-muncitor.png",
                slug: "asistenta-juridica",
              },
            ].map((relatedArticle, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg border-2 border-orange-200 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48">
                  <Image
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-800 mb-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-orange-700 mb-4">
                    {relatedArticle.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-orange-600 text-orange-700 hover:bg-orange-50 button-hover"
                  >
                    <Link href={`/articol/${relatedArticle.slug}`}>
                      Citește mai mult →
                    </Link>
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
