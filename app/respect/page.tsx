import Carduripers, { RespectCard } from "./Carduripers";

/**
 * Respect Page - Content and data management
 * This page contains all the card data and content
 * New cards should be added to the end of the array to appear first (due to reverse order)
 */
export default function RespectPage() {
  // AICI E SMECHERIE - ULTIMUL E PRIMUL SI PRIMUL E ULTIOMUL, ADICA CAND DVS ADAUGATI ID 6 VA FI ARATAT CA PRIMUL, ASA NU TREBUIE SA VA FACETI GRIJI DE ORDINE SI SA POSTATI CAT DORITI
  const respectCards: RespectCard[] = [
    {
      id: 1,
      name: "Iulian Raul Antanas",
      country: "Germania",
      description:
        "Membru al partidului suveran AUR. Un om cu suflet de patriot. Romanii din Germania iti multumesc!",
      image: "/iulian-raul.jpeg",
      altText: "John Doe profile picture from Germany",
    },
    {
      id: 2,
      name: "Familia Gagea ",
      country: "Spania",
      description:
        "O familie de romani suverani care a luptat cu trup si suflet pentru o Romanie frumoasa. www.diasporaeu.de iti multumeste!",
      image: "/fam-gagea.jpeg",
      altText: "Maria Silva profile picture from Spain",
      imagePosition: "center",
    },
    {
      id: 4,
      name: "Alexandra",
      country: "Germania",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/alexandra-gr.jpeg",
      altText: "Alexandra from Germany profile picture",
      imagePosition: "center top", // Added imagePosition to move image down and show full head
    },
    {
      id: 5,
      name: "Alexandra",
      country: "Romania",
      description: "TikTok Influencer",
      image: "/alexandra-ro.jpeg",
      altText: "Alexandra from Romania profile picture",
    },
    {
      id: 6,
      name: "Bobby D",
      country: "Jurnalist Independent",
      description:
        "Salutare om bun, strajer al Romaniei suverane. Iti multumim.",
      image: "/bobby-d.jpeg",
      altText: "Bobby D profile picture",
    },
    {
      id: 7,
      name: "Dogar Daniel Alexandru",
      country: "Suedia",
      description: "TikTok Influencer",
      image: "/daniel-suedia.jpeg",
      altText: "Daniel from Sweden profile picture",
    },
    {
      id: 8,
      name: "Flavia",
      country: "Germania",
      description: "TikTok Influencer",
      image: "/flavia-gr.jpeg",
      altText: "Flavia from Germany profile picture",
    },
    {
      id: 9,
      name: "Flavius",
      country: "Germania",
      description: "TikTok Influencer",
      image: "/flavius-gr.jpeg",
      altText: "Flavius from Germany profile picture",
    },
    {
      id: 10,
      name: "Georgiana",
      country: "UK",
      description: "TikTok Influencer",
      image: "/georgiana-uk.jpeg",
      altText: "Georgiana from UK profile picture",
    },
    {
      id: 11,
      name: "Marius",
      country: "Italia",
      description: "TikTok Influencer",
      image: "/marius-it.jpeg",
      altText: "Marius from Italy profile picture",
    },
    {
      id: 12,
      name: "Vasile",
      country: "UK",
      description: " ",
      image: "/vasile-uk.jpeg",
      altText: "Vasile from UK profile picture",
    },
    {
      id: 3,
      name: "Ana G. - Calin G - George S",
      country: "Romania",
      description:
        "Parintele suveranismului romanesc modern, Copilul nazdravan si neobosita luptatoare. Poporul va multumeste.",
      image: "gc-gs.jpeg",
      altText: "John Doe profile picture from Germany",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-yellow-500 to-red-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            RESPECT
          </h1>
        </div>
      </div>

      {/* Cards Section */}
      <Carduripers cards={respectCards} />
    </div>
  );
}
