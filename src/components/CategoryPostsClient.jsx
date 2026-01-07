"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

const getDevPostHref = (post) => {
  const identifier = post?.id ?? post?.slug ?? "";
  if (!identifier) return "/blog/blogDetails";
  return `/blog/blogDetails?id=${encodeURIComponent(identifier)}`;
};

export default function CategoryPostsClient({ initialPosts = [], morePosts = [] }) {
  const [visiblePosts, setVisiblePosts] = useState(initialPosts);
  const [expanded, setExpanded] = useState(false);

  const handleLoadMore = (e) => {
    e?.preventDefault();
    if (expanded) return;
    setVisiblePosts((prev) => [...prev, ...morePosts]);
    setExpanded(true);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {visiblePosts.map((post) => (
          <div key={post.id} className="flex flex-col">
            <div className="relative">
              <img
                src={post.featuredImage || "/assets/img/featuredImage.webp"}
                alt={post.metaTitle || post.metaTitle}
                className="w-full h-48 object-cover rounded-[4px]"
              />
              <span className="absolute bottom-4 right-4 px-3 py-2 bg-[#1E8767] text-white text-sm font-medium rounded-lg shadow-md">{post.blogCategory}</span>
            </div>
              <div className="mt-4">
                <Link href={getDevPostHref(post)} className="subtext-6">
                  {post.metaTitle}
                </Link>
              <p className="text-sm text-gray-500 mt-2 flex items-center">
                <CalendarDays className="w-4 h-4 mr-1 text-[#525D6A]" />
                <span className="font-semibold text-xs">{new Date(post.createdAt).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric'})}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {!expanded && morePosts && morePosts.length > 0 ? (
        <div className="flex justify-center items-center lg:mt-10 mt-6">
          <button onClick={handleLoadMore} className="text-[#1E8767] py-2 px-6 border border-[#1E8767] hover:bg-[#1E8767] hover:text-white transition rounded">
            Load More
          </button>
        </div>
      ) : null}

      {expanded && (morePosts?.length === 0) && (
        <div className="text-center text-sm text-gray-500 mt-4">No more posts</div>
      )}
    </div>
  );
}
