"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/lib/sanity";

export default function TestSanityPage() {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] =
    useState<string>("Testing...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Testing Sanity connection...");
        console.log("Project ID:", "4kzecmsy");
        console.log("Dataset:", "production");

        setConnectionStatus("Connecting to Sanity...");

        // Test basic connection
        const basicQuery = '*[_type == "promovari"]';
        const result = await client.fetch(basicQuery);

        console.log("Sanity connection successful!");
        console.log("Data received:", result);

        setData(result);
        setConnectionStatus(
          `Connected! Found ${result.length} promovari documents`
        );
      } catch (err) {
        console.error("Sanity connection error:", err);
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
        setConnectionStatus("Connection failed");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sanity Connection Test</h1>

      {/* Connection Status */}
      <div className="mb-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
        <h2 className="text-lg font-semibold mb-2">Connection Status</h2>
        <p className={`text-sm ${error ? "text-red-600" : "text-green-600"}`}>
          {connectionStatus}
        </p>
      </div>

      {/* Configuration Info */}
      <div className="mb-6 p-4 rounded-lg bg-gray-50 border border-gray-200">
        <h2 className="text-lg font-semibold mb-2">Configuration</h2>
        <div className="text-sm space-y-1">
          <p>
            <strong>Project ID:</strong> 4kzecmsy
          </p>
          <p>
            <strong>Dataset:</strong> production
          </p>
          <p>
            <strong>API Version:</strong> 2023-05-03
          </p>
          <p>
            <strong>Use CDN:</strong> false (development mode)
          </p>
          <p>
            <strong>Content Type:</strong> promovari
          </p>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <span className="ml-4 text-gray-600">Testing connection...</span>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
          <h2 className="text-lg font-semibold mb-2 text-red-800">Error</h2>
          <p className="text-red-600 text-sm">{error}</p>

          <div className="mt-4 text-sm text-red-700">
            <p>
              <strong>Common solutions:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Ensure your Sanity studio is running</li>
              <li>
                Check if CORS is configured:{" "}
                <code className="bg-red-100 px-1 rounded">
                  npx sanity cors add http://localhost:3000 --credentials
                </code>
              </li>
              <li>
                Verify dataset visibility:{" "}
                <code className="bg-red-100 px-1 rounded">
                  npx sanity dataset visibility set production public
                </code>
              </li>
              <li>Make sure you have published content (not just drafts)</li>
            </ul>
          </div>
        </div>
      )}

      {/* Success State */}
      {!loading && !error && data && (
        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-green-50 border border-green-200">
            <h2 className="text-lg font-semibold mb-2 text-green-800">
              Success!
            </h2>
            <p className="text-green-600 text-sm">
              Successfully connected to Sanity and retrieved data.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
            <h2 className="text-lg font-semibold mb-2">Retrieved Data</h2>
            <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        </div>
      )}

      {/* No Data State */}
      {!loading &&
        !error &&
        data &&
        Array.isArray(data) &&
        data.length === 0 && (
          <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200">
            <h2 className="text-lg font-semibold mb-2 text-yellow-800">
              No Data Found
            </h2>
            <p className="text-yellow-700 text-sm mb-3">
              Connection successful, but no "promovari" documents found.
            </p>

            <div className="text-sm text-yellow-700">
              <p>
                <strong>Next steps:</strong>
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Create the "promovari" schema in your Sanity Studio</li>
                <li>Add some content in Sanity Studio</li>
                <li>Make sure to publish (not just save as draft)</li>
              </ul>
            </div>
          </div>
        )}

      {/* Instructions */}
      <div className="mt-8 p-4 rounded-lg bg-blue-50 border border-blue-200">
        <h2 className="text-lg font-semibold mb-2">Next Steps</h2>
        <div className="text-sm space-y-2">
          <p>
            1. <strong>Create the Sanity Schema:</strong> Add the "promovari"
            schema to your Sanity Studio
          </p>
          <p>
            2. <strong>Add Content:</strong> Create some promotional ads in your
            studio
          </p>
          <p>
            3. <strong>Test Pages:</strong> Visit{" "}
            <a href="/promovari" className="text-blue-600 underline">
              /promovari
            </a>{" "}
            to see the listing page
          </p>
        </div>
      </div>
    </div>
  );
}
