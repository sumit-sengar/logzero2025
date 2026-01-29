"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { CalendarDays, User } from "lucide-react";
import api from "@/lib/api";

const featuredImage = "/assets/img/featuredImage.webp";
const defaultSearchImage = "/assets/img/featuredImage2.webp";

const getSearchResultImageSrc = (post) => {
  if (!post) return defaultSearchImage;
  if (post.featuredImageBase64) return post.featuredImageBase64;
  if (post.featuredImage) return post.featuredImage;
  if (post.imageUrl) return post.imageUrl;
  return defaultSearchImage;
};

const getYouMayLikeImageSrc = (post) => {
  if (!post) return featuredImage;
  if (post.featuredImageBase64) return post.featuredImageBase64;
  if (post.featuredImage) return post.featuredImage;
  if (post.imageUrl) return post.imageUrl;
  return featuredImage;
};

const getYouMayLikeTitle = (post) => post?.metaTitle || post?.title || "";

const formatDate = (iso) => {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    return iso;
  }
};

const formatCategoryName = (value) =>
  value.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

const getPostHref = (post) => {
  const identifier = post?.id ?? post?.slug ?? "";
  if (!identifier) return "/blog/blogDetails";
  return `/blog/blogDetails?id=${encodeURIComponent(identifier)}`;
};

const SearchResultClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";

  const [searchTerm, setSearchTerm] = useState(query);
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [searchLoading, setSearchLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [youMayLikePosts, setYouMayLikePosts] = useState([]);
  const [youMayLikeLoading, setYouMayLikeLoading] = useState(true);
  const highlightCategoryCount = categories.reduce((max, cat) => {
    const count = typeof cat?.count === "number" ? cat.count : 0;
    return Math.max(max, count);
  }, 0);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setTotalResults(0);
      setSearchLoading(false);
      return;
    }

    const fetchResults = async () => {
      setSearchLoading(true);
      try {
        const { data } = await api.get("/posts", {
          params: { search: query },
        });
        const rows = data?.data?.rows ?? data?.rows ?? [];
        setResults(rows);
        setTotalResults(
          typeof data?.count === "number" ? data.count : rows.length
        );
      } catch (error) {
        console.error("Error fetching search results:", error);
        setResults([]);
        setTotalResults(0);
      } finally {
        setSearchLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await api.get("/posts/blog-category-count");
        setCategories(Array.isArray(data?.data) ? data.data : []);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchYouMayLike = async () => {
      setYouMayLikeLoading(true);
      try {
        const { data } = await api.get("/posts/blogs/", {
          params: { limit: 3, page: 1 },
        });
        setYouMayLikePosts(Array.isArray(data?.data) ? data.data : []);
      } catch (error) {
        console.error('Error fetching "You may also like" posts:', error);
        setYouMayLikePosts([]);
      } finally {
        setYouMayLikeLoading(false);
      }
    };

    fetchYouMayLike();
  }, []);

  const handleSearchKey = (event) => {
    if (event.key === "Enter" && searchTerm.trim()) {
      router.push(
        `/blog/searchResult?q=${encodeURIComponent(searchTerm.trim())}`
      );
    }
  };

  const renderResultItem = (post) => (
    <article
      key={post.id ?? post.slug}
      className="flex flex-col md:flex-row gap-5  overflow-hidden "
    >
      <div className="relative">
        <img
          src={getSearchResultImageSrc(post)}
          alt={post.metaTitle}
          className="w-full md:w-64 h-48 object-cover"
        />
        <span className="absolute bottom-4 right-4 px-3 py-2 bg-[#1E8767] text-white text-sm font-medium rounded-lg shadow-md">
          {post.blogCategory || ""}
        </span>
      </div>

      <div className=" flex-1 flex flex-col justify-between">
        <div>
          <Link
            href={getPostHref(post)}
            className="text-2xl font-semibold text-[#0D0B0B] hover:text-green-600"
          >
            {post.metaTitle}
          </Link>
          <div className="flex items-center gap-2 text-sm text-[#525D6A] mt-3">
            <CalendarDays className="w-4 h-4" />
            <span>{formatDate(post.publishedAt || post.createdAt)}</span>
            <span>|</span>
            <User className="w-4 h-4" />
            <span>{post.author ? post.author.toUpperCase() : "LOGZERO"}</span>
          </div>
          <p className="text-gray-600 mt-3 line-clamp-3 leading-relaxed">
            {post.metaDescription}
          </p>
        </div>
        <div className="mt-4">
          <Link
            href={getPostHref(post)}
            className="text-[#1E8767] font-semibold hover:text-[#145f45] flex items-center gap-1"
          >
            Read Blog
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="container mx-auto px-4 lg:px-0 py-10">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold !text-[#2B2D2F] !text-[40px] mb-2">
            Search Results for: "Digital Transformation"
          </h2>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-[#1E8767] !text-xl">
              {searchLoading
                ? "Loading posts..."
                : `Found ${totalResults} result${
                    totalResults === 1 ? "" : "s"
                  } matching your query`}
            </p>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative w-full max-w-sm">
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  onKeyDown={handleSearchKey}
                  className="search-input w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition shadow-sm"
                />
                <svg
                  className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {results.length >= 2 && <div className="border-b border-[#E5E5E7] my-4"></div>}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
          <section className="lg:col-span-2 space-y-6">
            {searchLoading ? (
              <p className="text-gray-500">Loading posts...</p>
            ) : results.length > 0 ? (
              results.map((post, index) => (
                <React.Fragment key={post.id ?? post.slug ?? index}>
                  {renderResultItem(post)}
                  {results.length >= 2 && index < results.length - 1 && (
                    <div className="border-b border-[#E5E5E7]"></div>
                  )}
                </React.Fragment>
              ))
            ) : (
              <div className="p-6 border border-dashed border-gray-300 rounded-2xl text-gray-500">
                No results matched your search.
              </div>
            )}
          </section>

          <aside className="space-y-6">
            <div className="bg-white ">
              <h2 className="!text-[18px] font-semibold mb-2">Categories</h2>
              <ul className="space-y-3 text-sm text-gray-700">
                {categories.map((cat) => {
                  const isHighlighted =
                    typeof cat?.count === "number" && cat.count === highlightCategoryCount && highlightCategoryCount > 0;
                  return (
                    <li key={cat.blogCategory} className="flex justify-between">
                      <Link
                        // href={`/blog/category/${cat.blogCategory}`}
                        href="javascript:void(0);"
                        className={`font-semibold ${
                          isHighlighted ? "text-[#1E8767]" : "text-[#2B2D2F] hover:text-green-600"
                        }`}
                      >
                        {formatCategoryName(cat.blogCategory)}
                      </Link>
                      <span
                        className={`font-medium ${isHighlighted ? "text-[#1E8767]" : "text-[#858C95]"}`}
                      >
                        ({cat.count})
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-white ">
              <h2 className="text-xl font-semibold mb-4">You may also like</h2>
              {youMayLikeLoading ? (
                <p className="text-gray-500">Loading...</p>
              ) : (
                <ul className="space-y-4">
                  {youMayLikePosts.map((post) => (
                    <li key={post.id ?? post.slug}>
                      <Link
                        href={getPostHref(post)}
                        className="flex gap-3 items-start"
                      >
                        <img
                          src={getYouMayLikeImageSrc(post)}
                          alt={getYouMayLikeTitle(post)}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div>
                          <p className="text-[15px] !font-semibold text-[#0D0B0B]">
                            {getYouMayLikeTitle(post)}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <CalendarDays className="w-4 h-4" />
                            <span className="uppercase">
                              {formatDate(post.publishedAt || post.createdAt)}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-[#1E8767] text-white rounded-2xl p-6 space-y-3">
              <p className="!text-2xl !font-semibold  text-white ">
                Ready to Evolve?
              </p>

              <p className="text-sm text-white leading-relaxed">
                Let LogZero help you navigate your digital journey with custom
                IT solutions.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-[6px]
                ] bg-white text-[#0D6E4C] font-semibold px-5 py-2 text-sm"
              >
                Book a Consultation
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SearchResultClient;