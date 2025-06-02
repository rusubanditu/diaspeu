// GDPR Policy Page with DiasporaEu content
export default function GDPRPage() {
  return (
    <div className="min-h-screen py-8">
      {/* Header Section */}
      <section className="warm-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-red-800 mb-6">
            Politica GDPR
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Informații despre modul în care procesăm și protejăm datele
            dumneavoastră
          </p>
        </div>
      </section>

      {/* Traditional Pattern Divider */}
      <div className="traditional-pattern h-8"></div>

      {/* Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-red-800 mb-4">
                1. Introducere și Contextul Legal
              </h2>
              <p className="text-gray-700 mb-6">
                DiasporaEu este o inițiativă comunitară dedicată sprijinirii
                românilor din diaspora europeană prin facilitarea accesului la
                oportunități de muncă și ajutor reciproc între membrii
                comunității noastre. Această platformă digitală funcționează ca
                un punct de întâlnire virtual pentru românii stabiliți în
                diferite țări europene, oferind un spațiu sigur și transparent
                pentru schimbul de informații despre locuri de muncă,
                oportunități profesionale și sprijin comunitar.
              </p>
              <p className="text-gray-700 mb-6">
                În calitate de platformă digitală care operează în spațiul
                Uniunii Europene, DiasporaEu respectă pe deplin prevederile
                Regulamentului (UE) 2016/679 al Parlamentului European și al
                Consiliului din 27 aprilie 2016 privind protecția persoanelor
                fizice în ceea ce privește prelucrarea datelor cu caracter
                personal și privind libera circulație a acestor date, cunoscut
                sub denumirea de Regulamentul General privind Protecția Datelor
                (GDPR). De asemenea, respectăm întocmai Legea nr. 190/2018
                privind măsuri de punere în aplicare a Regulamentului General
                privind Protecția Datelor, precum și toate normele metodologice
                emise de Autoritatea Națională de Supraveghere a Prelucrării
                Datelor cu Caracter Personal.
              </p>
              <p className="text-gray-700 mb-6">
                Transparența și responsabilitatea constituie pilonii
                fundamentali ai activității noastre. Ne angajăm să oferim
                informații complete și clare despre modul în care funcționează
                platforma noastră din perspectiva protecției datelor, să
                respectăm drepturile fundamentale ale persoanelor vizate și să
                implementăm toate măsurile tehnice și organizatorice necesare
                pentru a asigura un nivel adecvat de securitate a prelucrării
                datelor.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Operator de date personale:</strong> DiasporaEu -
                Inițiativă Comunitară
                <br />
                <br />
                <strong>Contact principal:</strong> contact@diasporaeu.de
                <br />
              </p>

              <h2 className="text-2xl font-bold text-red-800 mb-4">
                2. Principiile Noastre de Confidențialitate și Fundamentul Legal
              </h2>
              <p className="text-gray-700 mb-6">
                DiasporaEu funcționează pe principiul fundamental al{" "}
                <strong>minimalizării colectării de date</strong>, în
                conformitate cu articolul 5 alineatul (1) litera (c) din GDPR,
                care stipulează că datele cu caracter personal trebuie să fie
                "adecvate, relevante și limitate la ceea ce este necesar în
                raport cu scopurile pentru care sunt prelucrate". Această
                abordare reflectă angajamentul nostru de a respecta principiul
                proporționalității în prelucrarea datelor, asigurându-ne că
                orice informație procesată servește unui scop legitim și necesar
                pentru funcționarea platformei.
              </p>
              <p className="text-gray-700 mb-6">
                Conformându-ne cu principiul transparenței prevăzut la articolul
                5 alineatul (1) litera (a) din GDPR, declarăm în mod categoric
                că nu colectăm în mod deliberat și sistematic date personale de
                la utilizatori. Platforma noastră nu solicită înregistrarea
                obligatorie, nu impune furnizarea de informații personale pentru
                accesarea conținutului și nu implementează mecanisme de
                colectare activă a datelor identificabile direct sau indirect.
              </p>
              <p className="text-gray-700 mb-6">
                Această filozofie de design "privacy by design" și "privacy by
                default", concepte consacrate prin articolele 25 din GDPR,
                înseamnă că am integrat protecția datelor încă din faza de
                concepție a platformei. Fiecare funcționalitate este gândită
                pentru a minimiza impactul asupra vieții private a
                utilizatorilor, respectând astfel unul dintre principiile
                cardinale ale legislației europene de protecție a datelor.
              </p>
              <p className="text-gray-700 mb-6">
                Recunoaștem totuși că, în conformitate cu jurisprudența Curții
                de Justiție a Uniunii Europene și cu interpretările EDPB
                (European Data Protection Board), orice platformă digitală
                procesează inevitabil anumite categorii de date tehnice pentru
                funcționarea sa de bază. Această procesare se înscrie în cadrul
                excepțiilor prevăzute pentru interesul legitim al operatorului,
                fiind strict necesară pentru prestarea serviciului solicitat de
                utilizator.
              </p>

              <h2 className="text-2xl font-bold text-red-800 mb-4">
                3. Analiza Detaliată a Categoriilor de Date Procesate
              </h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-red-700 mb-4">
                  3.1 Date Tehnice de Conectare și Navigare
                </h3>
                <p className="text-gray-700 mb-4">
                  În conformitate cu articolul 6 alineatul (1) litera (f) din
                  GDPR, care permite prelucrarea pe baza interesului legitim al
                  operatorului, procesăm automat și temporar următoarele
                  categorii de informații tehnice generate în mod inevitabil de
                  orice conexiune la o platformă web:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Adrese de Protocol Internet (IP):</strong> Acestea
                    reprezintă identificatorul numeric unic al dispozitivului de
                    la care se realizează accesul. Procesarea adreselor IP este
                    considerată de Curtea de Justiție a UE (hotărârea din cauza
                    C-582/14, Patrick Breyer) ca fiind o prelucrare de date cu
                    caracter personal când operatorul dispune de mijloacele
                    legale pentru identificarea persoanei vizate. În cazul
                    nostru, adresele IP sunt procesate exclusiv pentru scopuri
                    tehnice și de securitate, fiind stocate temporar în
                    jurnalele serverului pentru maximum 30 de zile
                    calendaristice.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Informații despre browser și dispozitiv:</strong>{" "}
                    Include tipul și versiunea browserului web, sistemul de
                    operare, rezoluția ecranului și alte caracteristici tehnice
                    transmise automat prin antetele HTTP. Aceste informații sunt
                    procesate în baza necesității tehnice de a adapta conținutul
                    la capacitățile dispozitivului utilizatorului, respectând
                    astfel principiul adecvării prevăzut la articolul 5 GDPR.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Date temporale de acces:</strong> Înregistrăm
                    timestampurile precise ale accesărilor pentru monitorizarea
                    performanței sistemului și identificarea potențialelor
                    probleme tehnice. Aceste informații sunt esențiale pentru
                    îndeplinirea obligației noastre de a asigura funcționarea
                    continuă și sigură a serviciului.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Pagini și resurse accesate:</strong> Registrul
                    paginilor vizitate și al resurselor solicitate ne permite să
                    optimizăm performanța site-ului și să identificăm
                    eventualele probleme de funcționare. Această informație este
                    procesată exclusiv în scopuri tehnice și nu este utilizată
                    pentru crearea de profiluri comportamentale.
                  </p>
                </div>
                <p className="text-gray-700 mb-6">
                  <strong>Temei legal:</strong> Prelucrarea se fundamentează pe
                  articolul 6 alineatul (1) litera (f) din GDPR - interesul
                  legitim al operatorului pentru asigurarea funcționării
                  tehnice, securității și integrității sistemului informatic.
                  Evaluarea balanței de interese, conform cerințelor considerate
                  în jurisprudența europeană, demonstrează că interesul nostru
                  legitim de a menține un serviciu funcțional și sigur
                  prevalează asupra impactului minimal asupra drepturilor și
                  libertăților persoanelor vizate.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Durata de conservare:</strong> În aplicarea
                  principiului limitării stocării din articolul 5 alineatul (1)
                  litera (e) GDPR, aceste date sunt păstrate strict pentru
                  perioada necesară îndeplinirii scopurilor pentru care au fost
                  colectate. Jurnalele de sistem sunt configurate pentru rotație
                  automată la intervalul de 30 de zile, după care sunt
                  supraScrise ireversibil. Pentru situații excepționale legate
                  de securitate sau investigații tehnice, perioada poate fi
                  extinsă la maximum 90 de zile, cu notificarea corespunzătoare.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-red-700 mb-4">
                  3.2 Tehnologii de Urmărire și Cookies
                </h3>
                <p className="text-gray-700 mb-4">
                  Conformându-ne cu Directiva 2009/136/CE (Directiva Cookie) și
                  cu ghidurile EDPB privind consimțământul și tehnologiile de
                  urmărire, implementăm o politică restrictivă privind
                  utilizarea cookie-urilor și tehnologiilor similare:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Cookie-uri strict necesare:</strong> Utilizăm
                    exclusiv cookie-uri de sesiune și tehnice care sunt absolut
                    esențiale pentru funcționarea de bază a site-ului. Acestea
                    includ cookie-uri pentru menținerea sesiunii de navigare,
                    stocarea preferințelor de limbă ale utilizatorului și
                    asigurarea securității împotriva atacurilor CSRF (Cross-Site
                    Request Forgery). Conform articolului 5 alineatul (3) din
                    Directiva e-Privacy, aceste cookie-uri nu necesită
                    consimțământul explicit al utilizatorului, fiind exceptate
                    ca fiind "strict necesare pentru furnizarea unui serviciu al
                    societății informaționale solicitat în mod explicit de
                    abonat sau utilizator".
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Absența cookie-urilor de urmărire:</strong> Nu
                    utilizăm cookie-uri de urmărire, de publicitate, de analiză
                    comportamentală sau orice alte tehnologii care ar permite
                    crearea de profiluri ale utilizatorilor. Nu implementăm
                    Google Analytics, Facebook Pixel, sisteme de remarketing sau
                    alte servicii care ar procesa date personale în scopuri
                    comerciale sau de marketing.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Cookie-uri terțe:</strong> Platforma noastră poate
                    încorpora anumite resurse externe (cum ar fi Google Fonts
                    pentru tipografie sau CDN-uri pentru librării JavaScript)
                    care pot genera cookie-uri proprii. Aceste servicii
                    funcționează conform propriilor politici de
                    confidențialitate, iar utilizatorii sunt încurajați să
                    consulte documentația corespunzătoare. Este important de
                    notat că nu avem control direct asupra acestor cookie-uri
                    terțe și nu le utilizăm pentru profilarea utilizatorilor.
                  </p>
                </div>
                <p className="text-gray-700 mb-6">
                  <strong>Managementul cookie-urilor:</strong> Utilizatorii pot
                  gestiona preferințele pentru cookie-uri direct din setările
                  browserului lor web. Majoritatea browserelor moderne oferă
                  opțiuni granulare pentru acceptarea, respingerea sau ștergerea
                  cookie-urilor. Blocarea cookie-urilor strict necesare poate
                  afecta funcționalitatea site-ului, dar respectăm întru totul
                  dreptul utilizatorilor de a-și controla experiența de
                  navigare.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-red-700 mb-4">
                  3.3 Servicii și Infrastructură Terțe
                </h3>
                <p className="text-gray-700 mb-4">
                  În conformitate cu principiile responsabilității și
                  transparenței din GDPR, furnizăm informații detaliate despre
                  serviciile terțe care pot procesa date în cadrul funcționării
                  platformei noastre:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Servicii de hosting și CDN:</strong> Platforma este
                    găzduită pe infrastructura Netlify și utilizează servicii de
                    Content Delivery Network pentru optimizarea performanței.
                    Acești furnizori de servicii acționează în calitate de
                    prelucrători în sensul articolului 28 GDPR și sunt
                    contractați să respecte măsuri tehnice și organizatorice
                    adecvate pentru protecția datelor procesate. Toate
                    contractele de prelucrare respectă clauzele contractuale
                    standard aprobate de Comisia Europeană pentru transferurile
                    internaționale de date.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Resurse externe și API-uri:</strong> Pentru
                    funcționalități specifice (precum încărcarea fonturilor web
                    sau librăriilor JavaScript), platforma poate face apeluri
                    către servicii externe. Aceste interacțiuni sunt minimize la
                    strictul necesar și sunt selectate servicii care oferă
                    garanții adecvate de protecție a datelor conform
                    standardelor europene.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-red-800 mb-4">
                4. Declarații Explicite de Non-Colectare și Transparență
                Completă
              </h2>
              <p className="text-gray-700 mb-6">
                În spiritul transparenței absolute cerut de articolul 12 din
                GDPR, care impune furnizarea de informații "într-o formă
                concisă, transparentă, inteligibilă și ușor accesibilă",
                declarăm în mod categoric și detaliat toate practicile pe care
                NU le implementăm în cadrul platformei DiasporaEu:
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  <strong>Colectare activă de date personale:</strong> Nu
                  implementăm formulare de înregistrare obligatorie, nu
                  solicităm informații de identificare personală (nume, prenume,
                  CNP, adrese de domiciliu, numere de telefon, adrese de email),
                  nu creăm conturi de utilizator și nu menținem baze de date cu
                  informații personale identificabile. Această abordare respectă
                  principiul minimizării datelor din articolul 5 GDPR și elimină
                  multe dintre riscurile asociate cu prelucrarea datelor
                  personale.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Tehnologii de urmărire comportamentală:</strong> Nu
                  utilizăm Google Analytics, Google Tag Manager, Facebook Pixel,
                  sisteme de remarketing, cookie-uri de urmărire cross-site,
                  tehnologii de fingerprinting sau orice alte instrumente care
                  ar permite monitorizarea comportamentului utilizatorilor pe
                  durata mai multor sesiuni de navigare. Această politică ne
                  diferențiază substantial de majoritatea platformelor web
                  comerciale și demonstrează angajamentul nostru pentru
                  respectarea vieții private.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Profilare și luare de decizii automatizate:</strong>{" "}
                  Conform articolului 22 din GDPR, care reglementează luarea de
                  decizii individuale automatizate, inclusiv crearea de
                  profiluri, declarăm că nu implementăm algoritmi de profilare
                  comportamentală, nu creăm segmente de utilizatori, nu
                  personalizăm conținutul pe baza comportamentului anterior și
                  nu utilizăm inteligență artificială sau machine learning
                  pentru analiza utilizatorilor.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Partajare comercială de date:</strong> Nu vindem, nu
                  închiriem, nu schimbăm și nu distribuim în niciun alt mod
                  informații către terțe părți în scopuri comerciale,
                  publicitare sau de marketing. Nu colaborăm cu brokeri de date,
                  nu participăm la programele de affiliate marketing bazate pe
                  date utilizatorilor și nu monetizăm în niciun fel informațiile
                  accesate prin platformă.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Comunicări comerciale nesolicitate:</strong> Nu
                  trimitem newslettere, emailuri promoționale, notificări push
                  nesolicitate sau orice alte forme de comunicare comercială
                  directă. Nu menținem liste de email marketing și nu procesăm
                  date în scopul comunicărilor comerciale, respectând astfel
                  cerințele Regulamentului 511/2004 privind comunicările
                  comerciale nesolicitate.
                </p>
              </div>
              <p className="text-gray-700 mb-6">
                Această abordare "privacy-first" nu este doar o declarație de
                intenție, ci o filosofie integrată în arhitectura tehnică a
                platformei. Fiecare decizie de design este evaluată prin prisma
                impactului asupra confidențialității utilizatorilor, aplicând
                principiile "privacy by design" și "privacy by default"
                consacrate prin articolul 25 din GDPR.
              </p>

              <h2 className="text-2xl font-bold text-red-800 mb-4">
                5. Drepturile Dumneavoastră conform GDPR
              </h2>
              <p className="text-gray-700 mb-6">
                Aveți următoarele drepturi: dreptul la informare, dreptul de
                acces, dreptul la rectificare, dreptul la ștergere, dreptul la
                portabilitatea datelor, dreptul la opoziție și dreptul de a
                depune plângere la Autoritatea Națională de Supraveghere a
                Prelucrării Datelor cu Caracter Personal (ANSPDCP).
              </p>

              <h2 className="text-2xl font-bold text-red-800 mb-4">
                6. Securitatea Datelor
              </h2>
              <p className="text-gray-700 mb-6">
                Implementăm măsuri tehnice și organizatorice adecvate: conexiuni
                sigure (HTTPS), actualizări regulate de securitate, acces
                limitat la sistemele tehnice și monitorizarea activității
                suspecte.
              </p>

              <h2 className="text-2xl font-bold text-red-800 mb-4">
                7. Contact pentru Protecția Datelor
              </h2>
              <p className="text-gray-700 mb-6">
                Pentru orice întrebare referitoare la protecția datelor
                personale sau pentru exercitarea drepturilor dumneavoastră, ne
                puteți contacta la: <strong>contact@diasporaeu.de</strong> cu
                subiectul "Protecția subiectul "Protecția Datelor - DiasporaEu".
                Ne angajăm să răspundem în maximum 30 de zile.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-700 mb-2">
                  Autoritatea de Supraveghere
                </h3>
                <p className="text-gray-700">
                  <strong>ANSPDCP</strong>
                  <br />
                  Website: www.dataprotection.ro
                  <br />
                  Email: anspdcp@dataprotection.ro
                  <br />
                  Telefon: +40.318.059.211
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Declarație de Conformitate:</strong> DiasporaEu
                  declară că respectă pe deplin GDPR și legislația națională
                  aplicabilă în materie de protecția datelor personale.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Ultima actualizare: 02-06-2025 | Versiunea: 1.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
