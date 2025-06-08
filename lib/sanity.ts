import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Configuration with environment variables for production
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "4kzecmsy";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

// Create Sanity client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production", // Enable CDN in production for better performance
  ignoreBrowserTokenWarning: true,
});

// Image URL builder
const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);

// GROQ QUERIES for promovari content type
export const GROQ_QUERIES = {
  // Get all ads with complete field selection
  getAllAds: `*[_type == "promovari"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    location,
    fullAddress,
    image,
    description,
    type,
    phone,
    email,
    website,
    businessHours,
    bankAccount,
    urgencyLevel,
    goalAmount,
    featured,
    status,
    _createdAt
  }`,

  // Get single ad by slug
  getAdBySlug: `*[_type == "promovari" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    location,
    fullAddress,
    image,
    description,
    type,
    phone,
    email,
    website,
    businessHours,
    bankAccount,
    urgencyLevel,
    goalAmount,
    featured,
    status,
    _createdAt,
    _updatedAt
  }`,

  // Get all slugs for static generation
  getAllSlugs: `*[_type == "promovari" && defined(slug.current)][]{
    "slug": slug.current
  }`,

  // Get featured ads
  getFeaturedAds: `*[_type == "promovari" && featured == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    location,
    image,
    type,
    _createdAt
  }`,

  // Get ads by type
  getAdsByType: `*[_type == "promovari" && type == $type] | order(_createdAt desc) {
    _id,
    title,
    slug,
    location,
    fullAddress,
    image,
    description,
    type,
    phone,
    email,
    website,
    businessHours,
    bankAccount,
    urgencyLevel,
    goalAmount,
    featured,
    status,
    _createdAt
  }`,
};

// TypeScript interface matching the Sanity schema exactly
export interface Ad {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  location: string;
  fullAddress: string;
  image?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  };
  description: Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text: string;
      marks?: string[];
    }>;
    markDefs?: Array<{
      _key: string;
      _type: string;
      href?: string;
    }>;
  }>;
  type: "business" | "help";
  // Business-specific fields (conditional)
  phone?: string;
  email?: string;
  website?: string;
  businessHours?: string;
  // Help request-specific fields (conditional)
  bankAccount?: string;
  urgencyLevel?: "low" | "medium" | "high";
  goalAmount?: number;
  // Meta fields
  featured: boolean;
  status: "active" | "paused" | "completed" | "expired";
  _createdAt: string;
  _updatedAt?: string;
}

// Helper function to extract text preview from Portable Text
export const getTextPreview = (
  description: Ad["description"],
  maxLength = 150
): string => {
  if (!description || !Array.isArray(description)) return "";

  const text = description
    .filter((block) => block._type === "block")
    .map((block) => block.children?.map((child) => child.text).join("") || "")
    .join(" ");

  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

// Helper function to validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Helper function to format phone number
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "");

  // Format Romanian phone numbers
  if (cleaned.length === 10 && cleaned.startsWith("07")) {
    return `+40 ${cleaned.substring(0, 3)} ${cleaned.substring(
      3,
      6
    )} ${cleaned.substring(6)}`;
  }

  return phone; // Return as-is if not matching Romanian format
};

// Helper function to get urgency level color
export const getUrgencyColor = (level: Ad["urgencyLevel"]) => {
  switch (level) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

// Helper function to get status color
export const getStatusColor = (status: Ad["status"]) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800";
    case "paused":
      return "bg-yellow-100 text-yellow-800";
    case "completed":
      return "bg-blue-100 text-blue-800";
    case "expired":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
