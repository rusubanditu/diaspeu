import React from "react";
import { PortableText as SanityPortableText } from "@portabletext/react";

// TypeScript interface for Portable Text blocks
interface PortableTextBlock {
  _type: string;
  _key?: string;
  style?: string;
  children?: Array<{
    _type: string;
    _key?: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _key: string;
    _type: string;
    href?: string;
  }>;
  level?: number;
  listItem?: string;
}

interface PortableTextProps {
  content: PortableTextBlock[];
  className?: string;
}

// Simple components configuration
const components = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-semibold text-gray-900 mb-5 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-600 pl-6 py-2 mb-6 bg-blue-50 rounded-r-lg">
        <div className="text-gray-800 italic font-medium">{children}</div>
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 ml-4">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => (
      <li className="mb-1 leading-relaxed">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="mb-1 leading-relaxed">{children}</li>
    ),
  },

  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-gray-800">{children}</em>
    ),
    underline: ({ children }: any) => (
      <span className="underline decoration-blue-600 decoration-2 underline-offset-2">
        {children}
      </span>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-blue-600 hover:text-blue-800 underline decoration-blue-600 decoration-1 underline-offset-2 hover:decoration-2 transition-all duration-200"
        >
          {children}
        </a>
      );
    },
  },
};

/**
 * PortableText Component
 * Renders Sanity's portable text content with custom styling
 * Optimized for Romanian content and responsive design
 */
export const PortableText: React.FC<PortableTextProps> = ({
  content,
  className = "",
}) => {
  // Handle empty or invalid content
  if (!content || !Array.isArray(content) || content.length === 0) {
    return (
      <div className={`text-gray-500 italic ${className}`}>
        Nu există conținut disponibil.
      </div>
    );
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <SanityPortableText value={content} components={components} />
    </div>
  );
};

export default PortableText;
