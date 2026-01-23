import { Suspense } from "react";
import SearchResultClient from "./SearchResultClient";

const SearchResultFallback = () => (
  <div className="min-h-screen bg-white font-sans">
    <div className="container mx-auto px-4 lg:px-0 py-10 space-y-6">
      <div className="h-10 w-1/2 rounded bg-gray-200 animate-pulse" />
      <div className="h-8 w-1/4 rounded bg-gray-200 animate-pulse" />
      <div className="space-y-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="rounded-2xl border border-gray-200 p-4 shadow-sm">
            <div className="h-6 w-1/3 rounded bg-gray-200 animate-pulse" />
            <div className="h-4 w-full mt-3 rounded bg-gray-100 animate-pulse" />
            <div className="h-4 w-full mt-2 rounded bg-gray-100 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function SearchResultPage() {
  return (
    <Suspense fallback={<SearchResultFallback />}>
      <SearchResultClient />
    </Suspense>
  );
}
