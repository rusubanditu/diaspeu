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
      image: "/iulian-raul.jpeg", //
      altText: "John Doe profile picture from Germany",
    },
    {
      id: 2,
      name: "Familia Gagea ",
      country: "Spania",
      description:
        "O familie de romani suverani care au luptat cu trup si suflet pentru o Romanie frumoasa. www.diasporaeu.de iti multumeste!",
      image: "/fam-gagea.jpeg",
      altText: "Maria Silva profile picture from Spain",
      // Using valid imagePosition value
      imagePosition: "center",
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
    // Adauga ca in exemplu de mai jos pentru noi persoane
    //
    // {
    //   id: 6,
    //   name: "New Person",
    //   country: "New Country",
    //   description: "New description here...",
    //   image: "/path-to-new-image.jpg",
    //   altText: "New person profile picture"
    // }
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
