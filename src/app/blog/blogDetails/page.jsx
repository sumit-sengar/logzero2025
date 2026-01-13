import { Suspense } from "react";
import BlogDetailsClient from "./BlogDetailsClient";

const BlogDetailsFallback = () => (
  <div className="bg-white min-h-screen">
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="h-[320px] w-full rounded-2xl bg-gray-200 animate-pulse" />
        <div className="h-6 w-1/2 rounded bg-gray-200 animate-pulse" />
        <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
      </div>
    </div>
  </div>
);

export default function BlogDetailsPage() {
  return (
    <Suspense fallback={<BlogDetailsFallback />}>
      <BlogDetailsClient />
    </Suspense>
  );
}

