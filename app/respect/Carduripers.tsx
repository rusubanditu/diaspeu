"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

// TypeScript interface for card data structure
export interface RespectCard {
  id: number;
  name: string;
  country: string;
  description: string;
  image: string;
  altText: string;
  // Optional override for image display behavior
  imageDisplayMode?: "object-cover" | "object-contain";
  imagePosition?: "center" | "center top" | "center bottom" | "left" | "right";
}

// Props interface for the component
interface CarduripersProps {
  cards: RespectCard[];
}

/**
 * Smart Image Component - Handles various image sizes and aspect ratios intelligently
 * Automatically adjusts object-fit based on image dimensions to prevent cropping or blank space
 */
interface SmartImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  imageDisplayMode?: "object-cover" | "object-contain";
  imagePosition?: "center" | "center top" | "center bottom" | "left" | "right";
}

function SmartImage({
  src,
  alt,
  priority = false,
  imageDisplayMode,
  imagePosition,
}: SmartImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  // Calculate the best object-fit strategy based on aspect ratio
  const getObjectFitStrategy = () => {
    // Use manual override if provided (highest priority)
    if (imageDisplayMode) return imageDisplayMode;

    if (!imageDimensions) return "object-cover";

    const aspectRatio = imageDimensions.width / imageDimensions.height;

    // For very wide images (landscape social media posts, banners)
    if (aspectRatio > 2.5) return "object-contain";

    // For extremely tall images (like Instagram stories - very skinny)
    if (aspectRatio < 0.76) return "object-contain";

    // For all other images including portraits, mugshots, profile pics
    // This covers normal portraits (0.67:1 like your image), squares, and moderate landscapes
    return "object-cover";
  };

  // Get optimal object position for different image types
  const getObjectPosition = () => {
    // Use manual override if provided (highest priority)
    if (imagePosition) return imagePosition;

    if (!imageDimensions) return "center";

    const aspectRatio = imageDimensions.width / imageDimensions.height;

    // For portrait images (including mugshots), focus on the upper portion to show face
    if (aspectRatio < 0.8) return "center top";

    // For square and landscape images, center positioning works well
    return "center";
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setImageDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight,
    });
    setImageLoaded(true);
  };

  const objectFitClass = getObjectFitStrategy();
  const objectPosition = getObjectPosition();

  return (
    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg">
      {/* Background pattern for any potential blank space */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 opacity-30"></div>

      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-xs">Loading...</span>
            </div>
          </div>
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill
        className={`${objectFitClass} rounded-t-lg transition-all duration-500 hover:scale-105 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        onLoad={handleImageLoad}
      />

      {/* Image info overlay (only visible on hover for debugging) */}
      {imageDimensions && (
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
          {imageDimensions.width}x{imageDimensions.height}
          <br />
          {(imageDimensions.width / imageDimensions.height).toFixed(2)}:1
        </div>
      )}
    </div>
  );
}

/**
 * Carduripers component - Backbone component for rendering respect cards
 * Handles the logic and structure for displaying individual respect cards
 * Cards are displayed in reverse order (newest first)
 * Now includes intelligent image sizing for various social media image formats
 */
export default function Carduripers({ cards }: CarduripersProps) {
  // Reverse the cards array to show newest first (highest ID first)
  const reversedCards = [...cards].reverse();

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reversedCards.map((card) => (
          <Card
            key={card.id}
            className="relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
          >
            {/* RESPECT Badge - positioned absolutely with rotation */}
            <div className="absolute -rotate-12 top-4 right-4 z-10">
              <span className="font-bold text-3xl drop-shadow-lg">
                <span className="text-blue-600">RES</span>
                <span className="text-yellow-500">PE</span>
                <span className="text-red-600">CT</span>
              </span>
            </div>

            {/* Smart Image Container with adaptive sizing */}
            <SmartImage
              src={card.image}
              alt={card.altText}
              priority={card.id <= 3} // Prioritize loading for first 3 cards
              imageDisplayMode={card.imageDisplayMode}
              imagePosition={card.imagePosition}
            />

            {/* Card Content */}
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                {card.name} - {card.country}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
