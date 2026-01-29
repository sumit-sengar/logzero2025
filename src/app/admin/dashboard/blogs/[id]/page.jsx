import React from "react";
import { notFound } from "next/navigation";
import api from "@/lib/api";

export const dynamic = "force-dynamic";

// --- Data Fetching ---
async function getPost(identifier) {
  try {
    const res = await api.get(`/posts/${identifier}`);
    const json = res.data;
    if (!json?.success || !json?.data) throw new Error("Invalid API response");
    return json.data;
  } catch (err) {
    if (err?.response?.status === 404) return null;
    console.error(err);
    return null;
  }
}

function getSavedHtml(post) {
  return post?.content?.blocks?.[0]?.data?.text ?? "<p></p>";
}

// --- Main Component ---
export default async function BlogByIdPage({ params }) {
  // ✅ unwrap params promise (standard for Next.js 15+ in JS)
  const { id } = await params;

  const post = await getPost(id);
  if (!post) notFound();

  const html = getSavedHtml(post);

  // Define chips for metadata
  const chips = [
    { label: "Type", value: post.type },
    { label: "Status", value: post.status },
    ...(post.blogCategory
      ? [{ label: "Category", value: post.blogCategory }]
      : []),
    ...(post.slug ? [{ label: "Slug", value: post.slug }] : []),
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="mx-auto w-full max-w-5xl px-6 py-10 space-y-6">
        <header className="space-y-2 border-b border-zinc-800 pb-4">
          <h1 className="text-3xl font-semibold !text-white">{post.metaTitle}</h1>
          {post.metaDescription ? (
            <p className="text-sm text-zinc-300">{post.metaDescription}</p>
          ) : null}
        </header>

        {/* Categories, Tags, and Taxonomy Chips */}
        <div className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <button
              key={`${c.label}-${c.value}`}
              type="button"
              className="px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-200"
            >
              {c.label}: {c.value}
            </button>
          ))}

          {post.solutions?.map((s) => (
            <button
              key={`sol-${s.id}`}
              type="button"
              className="px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-200"
            >
              {s.name}
            </button>
          ))}

          {post.technologies?.map((t) => (
            <button
              key={`tech-${t.id}`}
              type="button"
              className="px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-200"
            >
              {t.name}
            </button>
          ))}

          {post.industries?.map((i) => (
            <button
              key={`ind-${i.id}`}
              type="button"
              className="px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-900 text-xs text-zinc-200"
            >
              {i.name}
            </button>
          ))}
        </div>

        {/* Featured Image */}
        {(post.featuredImageBase64 || post.featuredImage) ? (
          <img
            src={post.featuredImageBase64 || post.featuredImage}
            alt={post.metaTitle}
            className="w-full rounded-lg border border-zinc-800"
          />
        ) : null}

        {/* Render Content Blocks */}
        <article
          className={`
            leading-relaxed text-zinc-100
            [&_p]:text-base [&_p]:mb-3
            [&_h1]:text-5xl [&_h1]:font-bold [&_h1]:my-6
            [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:my-5
            [&_h3]:text-3xl [&_h3]:font-semibold [&_h3]:my-4
            [&_h4]:text-2xl [&_h4]:font-semibold [&_h4]:my-3
            [&_h5]:text-xl [&_h5]:font-semibold [&_h5]:my-2
            [&_h6]:text-lg [&_h6]:font-semibold [&_h6]:my-2
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-3
            [&_li]:mb-1
            [&_a]:text-blue-400 [&_a]:underline
            [&_img]:max-w-full [&_img]:rounded-md [&_img]:my-3
          `}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}