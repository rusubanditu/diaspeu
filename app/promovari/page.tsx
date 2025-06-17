"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client, GROQ_QUERIES, urlFor, Ad, getTextPreview } from "@/lib/sanity";

// Real Sanity data fetching
const getAllAds = async (): Promise<Ad[]> => {
  try {
    const ads = await client.fetch(GROQ_QUERIES.getAllAds);
    return ads;
  } catch (error) {
    console.error("Error fetching ads from Sanity:", error);
    // Return empty array instead of mock data
    return [];
  }
};

function SanityAdsPage() {
  const [ads, setAds] = React.useState<Ad[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState<"all" | "business" | "help">(
    "all"
  );

  React.useEffect(() => {
    const fetchAds = async () => {
      try {
        const fetchedAds = await getAllAds();
        setAds(fetchedAds);
      } catch (error) {
        console.error("Error fetching ads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  const filteredAds = ads.filter(
    (ad) => filter === "all" || ad.type === filter
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading ads...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            PROMOVARI SERVICII SI CERERI AJUTOR PENTRU ROMANII DE PRETUTINDENI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cele mai relevante servicii si afaceri romanesti dar si urgente
            pentru cazuri sociale vor fi postate aici
          </p>
        </header>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Toate ({ads.length})
            </button>
            <button
              onClick={() => setFilter("business")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "business"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Afaceri & Servicii Romanesti (
              {ads.filter((ad) => ad.type === "business").length})
            </button>
            <button
              onClick={() => setFilter("help")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "help"
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Cereri Ajutor ({ads.filter((ad) => ad.type === "help").length})
            </button>
          </div>
        </div>

        {/* Ads Grid */}
        {filteredAds.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Nu sunt promovari gasite momentan
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {filter === "all"
                ? "Verifica serverul nostru de discord pentru a fi la curent cu toate promovarile si cererile de ajutor!"
                : `No ${
                    filter === "business" ? "business" : "help request"
                  } ads found.`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAds.map((ad) => (
              <Link
                key={ad._id}
                href={`/promovari/${ad.slug.current}`}
                className="group"
              >
                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative h-48 bg-gray-200">
                    {ad.image ? (
                      <Image
                        src={urlFor(ad.image).width(400).height(340).url()}
                        alt={ad.image.alt || ad.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        style={{ objectPosition: "50% 1%" }} // Position image higher to show faces better
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <svg
                          className="h-12 w-12 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Type Badge */}
                    <div className="absolute top-2 left-2">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          ad.type === "business"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {ad.type === "business" ? "Business" : "Help Request"}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {ad.title}
                    </h3>

                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {ad.location}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {getTextPreview(ad.description)}
                    </p>

                    <div className="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-800">
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SanityAdsPage;
