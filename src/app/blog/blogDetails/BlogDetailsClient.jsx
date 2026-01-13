"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { useSearchParams } from "next/navigation";

const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://webapi.logzerotechnologies.com/api";
const DEFAULT_DETAILS_IMAGE = "/assets/img/devImage.webp";

const formatIsoDate = (isoValue) => {
  if (!isoValue) return "";
  try {
    const date = new Date(isoValue);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    return isoValue;
  }
};

export default function BlogDetailsClient() {
  const searchParams = useSearchParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError("");
      try {
        const postId = searchParams.get("id") || "109";
        if (!postId) {
          setError("Missing post id");
          setPost(null);
          return;
        }
        const res = await fetch(`${baseUrl}/posts/${postId}`, {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error(`Failed to fetch post ${postId}`);
        }
        const payload = await res.json();
        const data = payload?.data ?? null;
        if (!data) {
          setError("Post not found");
          setPost(null);
          return;
        }
        setPost(data);
      } catch (err) {
        setError(err?.message || "Unable to load post");
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [searchParams]);

  const imageSrc =
    post?.featuredImageBase64?.trim() || post?.featuredImage || DEFAULT_DETAILS_IMAGE;
  const description = post?.metaDescription || post?.summary || "Details coming soon.";
  const dateLabel = post?.publishedAt || post?.createdAt || post?.updatedAt;
  const formattedDate = formatIsoDate(dateLabel);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1E8767]"
          >
            <span aria-hidden className="text-base">&lt;</span>
            <span>Back to Blog posts</span>
          </Link>

          {loading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-[320px] w-full rounded-2xl bg-gray-200" />
              <div className="h-6 w-1/2 rounded bg-gray-200" />
              <div className="h-4 w-3/4 rounded bg-gray-200" />
            </div>
          ) : error ? (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
              {error}
            </div>
          ) : !post ? (
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-gray-700">
              Post not found.
            </div>
          ) : (
            <article className="overflow-hidden rounded-[32px] border border-[#E5E5E7] bg-white shadow-sm">
              <div className="relative h-[420px] w-full bg-gray-100">
                <img
                  src={imageSrc}
                  alt={post.metaTitle ?? "Blog post image"}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-5 p-6 text-[#1F1F1F] md:p-10">
                <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <CalendarDays className="h-5 w-5" />
                  <span>{formattedDate}</span>
                </div>
                <h1 className="!text-xl md:!text-2xl lg:!text-3xl !leading-[1.5]  font-semibold !mb-4">
                  {post.metaTitle || post.title}
                </h1>
                <p className="text-lg leading-7 text-[#4B5563]">{description}</p>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}