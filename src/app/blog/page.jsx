"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Code, Bolt, Server, Diamond, FileText, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowRight } from "react-icons/md";

const featuredImage = "/assets/img/featuredImage.webp";
const popularPostImage = "/assets/img/popularPostImg.webp";
const ladderImg = "/assets/img/ladderImg.webp";
const dentalImage1 = "https://placehold.co/100x100/C8E6C9/388E3C?text=Dental+Health";
const dentalImage2 = "https://placehold.co/100x100/A5D6A7/000000?text=Dental+Wellness";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://webapi.logzerotechnologies.com/api";

const SearchOfCategory = [
  { id: 1, title: "Dev", color: "#FFEDEC", iconBg: "#F9E4E3", icon: Code, iconColor: "#7D2F2B" },
  { id: 2, title: "Digital Solutions", color: "#F7EBFF", icon: Bolt, iconBg: "#ECDDF6", iconColor: "#60387A" },
  { id: 3, title: "DevOps &Server Management", color: "#ECF1FF", icon: Server, iconBg: "#E0E7FB", iconColor: "#354571" },
  { id: 4, title: "Design", color: "#D8F9F3", icon: Diamond, iconBg: "#BBE4DD", iconColor: "#256D5B" },
  { id: 5, title: "Docs", color: "#FFF3CB", icon: FileText, iconBg: "#F9E4E3", iconColor: "#9F8A47" },
];

const getDevPostHref = (post) => {
  const identifier = post?.id ?? post?.slug ?? "";
  if (!identifier) return "/blog/blogDetails";
  return `/blog/blogDetails?id=${encodeURIComponent(identifier)}`;
};

const ChevronRightIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M10 17l5-5-5-5v10z" />
  </svg>
);

const ChevronDownIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const InfoCircleIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const SmallBlogItem = ({ post, onDropdownToggle, isDropdownOpen }) => {
  const isSpecial = post.title.includes("No-Claim Bonus");
  const Icon = isDropdownOpen ? ChevronDownIcon : ArrowRightIcon;

  return (
    <div className="">
      <div
        className={`flex items-start text-sm cursor-pointer transition ${
          isSpecial ? "font-semibold" : "text-gray-800"
        }`}
        onClick={isSpecial ? () => onDropdownToggle(post.id) : null}
      >
        {isSpecial ? (
          <div className="flex items-center text-blue-500 mr-2 hover:text-blue-700 transition">
            <Icon className="w-8 h-8" />
          </div>
        ) : (
          <span className="text-blue-500 mr-2 mt-1 text-lg leading-none">&raquo;</span>
        )}
        <Link href={getDevPostHref(post)} className="leading-tight text-[#0D0B0B] hover:text-green-600">
          <span className="text-base">{post.title} </span>
        </Link>
      </div>
      <p className="text-xs text-gray-500 ml-[40px] mt-1 flex items-center">
        <CalendarDays className="w-4 h-4 mr-1" />
        <span className="text-sm">{post.date} </span>
      </p>
      {isSpecial && isDropdownOpen && (
        <div className="mt-2 ml-6 p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600 shadow-inner">
          <h4 className="font-bold mb-1 text-green-700">Restore Your NCB: Quick Info</h4>
          <p>
            The No-Claim Bonus (NCB) can typically be restored within 90 days of policy renewal. However, if you make a
            claim, the NCB is reset to zero. You can protect it using an NCB Protect Add-on.
          </p>
          <Link href={getDevPostHref(post)} className="text-blue-500 hover:text-blue-700 mt-2 block font-medium">
            View Full Guide →
          </Link>
        </div>
      )}
    </div>
  );
};

// Main App Component
export default function App() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [page, setPage] = useState(2); // sidebar starts from the next batch after the first five
  const [staticPosts, setStaticPosts] = useState([]);
  const [sidebarPosts, setSidebarPosts] = useState([]);
  const [loadingMain, setLoadingMain] = useState(true);
  const [loadingSidebar, setLoadingSidebar] = useState(true);
  const [popularPosts, setPopularPosts] = useState([]);
  const [loadingPopular, setLoadingPopular] = useState(false);
  const [popularLoadedMore, setPopularLoadedMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [youMayLikePosts, setYouMayLikePosts] = useState([]);
  const [loadingYouMayLike, setLoadingYouMayLike] = useState(false);
  const [canLoadMoreYouMayLike, setCanLoadMoreYouMayLike] = useState(true);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      router.push(`/blog/searchResult?q=${searchTerm.trim()}`);
    }
  };

  useEffect(() => {
    const fetchInitialPosts = async () => {
      setLoadingMain(true);
      try {
        const res = await fetch(`${baseUrl}/posts?type=blog_post&limit=5&page=1`);
        const data = await res.json();
        const rows = data?.data?.rows ?? data?.rows ?? [];
        setStaticPosts(rows);
        // console.log('Fetched initial posts rows:', rows);
      } catch (err) {
        console.error('Error fetching initial posts:', err);
      } finally {
        setLoadingMain(false);
      }
    };

    fetchInitialPosts();
  }, []);

  useEffect(() => {
    const fetchYouMayLikePosts = async () => {
      try {
        const res = await fetch(`${baseUrl}/posts/blogs?limit=4&page=1`);
        const data = await res.json();
        const rows = data?.data ?? [];
        const initialBatch = Array.isArray(rows) ? rows : [];
        setYouMayLikePosts(initialBatch);
        if (initialBatch.length < 4) {
          setCanLoadMoreYouMayLike(false);
        }
      } catch (err) {
        console.error('Error fetching "You May Also Like" posts:', err);
      }
    };

    fetchYouMayLikePosts();
  }, []);

  useEffect(() => {
    const fetchSidebarPosts = async () => {
      setLoadingSidebar(true);
      try {
        const res = await fetch(`${baseUrl}/posts?type=blog_post&limit=5&page=${page}`);
        const data = await res.json();
        const rows = data?.data?.rows ?? data?.rows ?? [];

        if (!Array.isArray(rows) || rows.length === 0) {
          setHasMore(false);
          setReachedEnd(true);
          setLoadingSidebar(false);
          return;
        }

        setSidebarPosts(rows);
        setHasMore(rows.length === 5);
        setReachedEnd(false);
        // console.log('Fetched sidebar posts rows:', rows);
      } catch (err) {
        console.error('Error fetching sidebar posts:', err);
      } finally {
        setLoadingSidebar(false);
      }
    };

    fetchSidebarPosts();
  }, [page]);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const res = await fetch(`${baseUrl}/posts?popular=true&limit=4&page=1`);
        const data = await res.json();
        const rows = data?.data?.rows ?? data?.rows ?? [];
        const firstBatch = Array.isArray(rows) ? rows : [];
        setPopularPosts(firstBatch);
        setPopularLoadedMore(false);
     
      } catch (err) {
        console.error('Error fetching popular posts:', err);
      }
    };

    fetchPopularPosts();
  }, []);

  // derive columns: first five are fixed (feature + stacked), sidebar is paginated
  const featuredPost = staticPosts[0] ?? null;
  const col2Posts = staticPosts.slice(1, 5);
  const col3Posts = sidebarPosts || [];
  const sidebarCount = Array.isArray(sidebarPosts) ? sidebarPosts.length : 0;

  const formatDate = (iso) => {
    if (!iso) return "";
    try {
      const d = new Date(iso);
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (e) {
      return iso;
    }
  };

  const getFeaturedImageSrc = (post) => {
    if (!post) return featuredImage;
    // Use base64 if present, otherwise fallback to featuredImage or default
    return post.featuredImageBase64 || post.featuredImage || featuredImage;
  };

  const getCol2ImageSrc = (post) => {
    // prefer a local default image when post has no image
    return post?.featuredImage || "/assets/img/featuredImage2.webp";
  };

  const getPopularImageSrc = (post) => {
    if (!post) return popularPostImage;
    if (post.featuredImageBase64) return post.featuredImageBase64;
    if (post.featuredImage) return post.featuredImage;
    if (post.imageUrl) return post.imageUrl;
    return popularPostImage;
  };

  const getPopularTitle = (post) => post?.metaTitle || post?.title || "";

  const hasPopularPosts = Array.isArray(popularPosts) && popularPosts.length > 0;
  const hasYouMayLikePosts = Array.isArray(youMayLikePosts) && youMayLikePosts.length > 0;

  const specialPost = {
    id: 6,
    title: "How to Restore Your No-Claim Bonus After a Car Accident",
    date: "December 1, 2025",
  };
  const rightColumnPosts = [
    { ...specialPost, id: 6.1 },
    { ...specialPost, id: 6.2 },
    { ...specialPost, id: 6.3 },
    { ...specialPost, id: 6.4 },
    { ...specialPost, id: 6.5 },
  ];

  const handleDropdownToggle = (id) => {
    if (id === 6.1) {
      setOpenDropdownId(openDropdownId === id ? null : id);
    }
  };

  const handleLoadMoreYouMayLike = async () => {
    if (loadingYouMayLike) return;
    setLoadingYouMayLike(true);
    try {
      const res = await fetch(`${baseUrl}/posts/blogs?limit=12&page=1`);
      const data = await res.json();
      const rows = data?.data ?? [];
      const allRows = Array.isArray(rows) ? rows : [];
      setYouMayLikePosts(allRows);
      setCanLoadMoreYouMayLike(false); // Hide button after loading more
    } catch (err) {
      console.error('Error fetching more "You May Also Like" posts:', err);
    } finally {
      setLoadingYouMayLike(false);
    }
  };

  const handleLoadMorePopular = async () => {
    if (popularLoadedMore || loadingPopular) return;
    setLoadingPopular(true);
    try {
      // Fetch a larger window (first 12) and append everything after the initial 4
      const res = await fetch(`${baseUrl}/posts?popular=true&limit=12&page=1`);
      const data = await res.json();
      const rows = data?.data?.rows ?? data?.rows ?? [];
      const allRows = Array.isArray(rows) ? rows : [];
      const nextBatch = allRows.slice(4, 12); // take items after the first four
      setPopularPosts((prev) => [...prev, ...nextBatch].slice(0, 12));
      setPopularLoadedMore(true);
     
    } catch (err) {
      console.error('Error fetching more popular posts:', err);
    } finally {
      setLoadingPopular(false);
    }
  };

  const canLoadMorePopular = !popularLoadedMore && popularPosts.length > 0 && popularPosts.length < 12;

  const handleNextPage = () => {
    if (!reachedEnd && sidebarCount === 5) {
      setPage(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (!reachedEnd && page > 2 && sidebarCount > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="container mx-auto px-4 lg:px-0 py-10">
        <h2 className="font-semibold !text-[#2B2D2F] !text-[40px] mb-2">Tech Insights & Industry Updates</h2>
        {/* Header and Search */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h3 className="!text-xl font-bold !text-[#1E8767] mb-4 md:mb-0">
          In-depth insights, tutorials, and expert opinions on modern technology and digital solutions.
          </h3>
          <div className="relative w-full md:w-64">
            <input
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
              className="search-input w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition shadow-sm"
            />
            {/* Search Icon */}
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
          
        </header>
        <div className="border-b border-[#E5E5E7] mb-4"></div>

        {/* Main Content: 3-Column Grid */}
        {loadingMain ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
            <div className="space-y-2">
              <div className="w-full h-48 bg-gray-200 rounded" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mt-3" />
              <div className="h-3 bg-gray-200 rounded w-1/2 mt-2" />
            </div>

            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex space-x-4 items-center">
                  <div className="w-24 h-16 bg-gray-200 rounded" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded w-full" />
              ))}
            </div>
          </div>
        ) : (
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Column 1: Featured Post */}
          <div className="md:col-span-1">
            {featuredPost && (
              <div className=" flex flex-col">
                <div className="relative">
                  <img
                    src={getFeaturedImageSrc(featuredPost)}
                    alt={featuredPost.metaTitle || "Featured"}
                    className="w-full h-48 object-cover rounded rounded-[4px]"
                  />
                  {/* <span className="absolute bottom-4 right-4 px-3 py-2 bg-[#1E8767] text-white text-sm font-medium rounded-lg shadow-md">
                    {featuredPost.blogCategory || ""}
                  </span> */}
                </div>
                <div className="mt-4 flex flex-col flex-grow">
                  <Link href={getDevPostHref(featuredPost)} className=" subtext-6 hover:text-green-600">
                    {featuredPost.metaTitle}
                  </Link>
                  <p className="text-sm text-gray-500 mb-4 flex items-center mt-2">
                    <span className="font-semibold text-gray-700 mr-2 text-xs">
                      BY NEHA BHATNAGAR
                    </span>
                    &bull;
                    <CalendarDays className="w-4 h-4 mx-1 text-gray-400 " />
                    <span className="font-semibold text-gray-700 mr-2 text-xs">
                      {formatDate(featuredPost.createdAt)}
                    </span>
                  </p>
                  <p className="text-gray-600 mb-6 line-clamp-3 ">
                    {featuredPost.metaDescription}
                  </p>

                  <Link
                    href={getDevPostHref(featuredPost)}
                    className=" mt-[16px] text-green-600 font-semibold hover:text-green-700 transition border-green-200 hover:border-green-600 pb-0.5 mt-auto"
                  >
                    <button className=" flex items-center text-[#1E8767] p-2 border border[#1E8767] cursor-pointer  hover:bg-[#1E8767] hover:text-white transition">
                      Read More <ChevronRightIcon className="ml-2 h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Column 2: Stacked Medium Posts */}
          <div className="md:col-span-1 space-y-2">
            {col2Posts.map((post) => (
              <div key={post.id} className="flex space-x-4 bg-white">
                <div className="flex-shrink-0">
                  <img
                    src={getCol2ImageSrc(post)}
                    alt={post.metaTitle}
                    className="object-cover rounded-[2px]"
                  />
                </div>
                <div className="flex-grow">
                  <Link
                    href={getDevPostHref(post)}
                    className="text-base font-semibold text-[#0D0B0B] hover:text-green-600 transition line-clamp-2 leading-snug"
                  >
                    {post.metaTitle}
                  </Link>
                  <p className="text-xs text-gray-500 mt-1 flex items-center">
                    <CalendarDays className="w-4 h-4 mr-1 text-[#525D6A]" />
                    <span className="text-sm"> {formatDate(post.createdAt)} </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3: Right Sidebar (Text List) */}
          <aside className="md:col-span-1  h-fit">
            <div className="">
              {loadingSidebar
                ? Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-start text-sm mb-2 animate-pulse">
                      <div className="text-blue-500 mr-2 mt-1">
                        <ChevronRightIcon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-3/4" />
                        <div className="h-3 bg-gray-200 rounded w-1/2" />
                      </div>
                    </div>
                  ))
                : col3Posts.map((post) => (
                    <div key={post.id} className="flex items-start text-sm">
                      <div className="text-blue-500 mr-2 mt-1">
                        <ChevronRightIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <Link href={getDevPostHref(post)} className="leading-tight text-[#0D0B0B] hover:text-green-600 font-semibold">
                          <span className="text-base">{post.metaTitle}</span>
                        </Link>
                        <p className="text-xs text-gray-500 mt-1 flex items-center">
                          <CalendarDays className="w-4 h-4 mr-1" />
                          <span className="text-sm">{formatDate(post.createdAt)}</span>
                        </p>
                      </div>
                    </div>
                  ))}
            </div>
          </aside>
        </main>
        )}

        {/* Pagination (Dynamic Next/Prev Buttons) */}
        <div className="flex justify-center md:justify-start lg:justify-end items-center  space-x-4 mt-4">
          <button
            onClick={handlePrevPage}
            disabled={page <= 2 || sidebarCount === 0 || reachedEnd}
            className="flex items-center px-4 py-2 cursor-pointer text-sm font-medium rounded-full transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: page <= 2 || sidebarCount === 0 || reachedEnd ? "#e0e0e0" : "#d1fae5",
              color: page <= 2 || sidebarCount === 0 || reachedEnd ? "#757575" : "#059669",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <ChevronRightIcon className="h-4 w-4 mr-2 transform rotate-180" />
            Previous
          </button>
          <span className="text-sm font-medium text-gray-600">Page {page - 1}</span>
          <button
            onClick={handleNextPage}
            disabled={sidebarCount < 5 || reachedEnd}
            className="flex items-center cursor-pointer px-4 py-2 text-sm font-medium text-white rounded-full transition duration-150 ease-in-out bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: sidebarCount < 5 || reachedEnd ? "#e0e0e0" : "#16a34a",
              color: sidebarCount < 5 || reachedEnd ? "#757575" : "#ffffff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Next
            <ChevronRightIcon className="h-4 w-4 ml-2" />
          </button>
        </div>

        {/* search by category start */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4 text-[#2B2D2F]">
            Search by Category
          </h2>
          <div className=" border-b border-[#E5E5E7] mb-8"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SearchOfCategory.map((category) => {
              const IconComponent = category.icon;
              const slug = category.title.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={category.id}
                  href={`/blog/category/${slug}`}
                  className="flex flex-col items-center p-4 rounded-lg hover:shadow-lg transition"
                  style={{ backgroundColor: category?.color }}
                >
                  <div
                    className=" w-16 h-16 rounded rounded-full flex items-center justify-center"
                    style={{ backgroundColor: category?.iconBg }}
                  >
                    <IconComponent
                      className="w-8 h-8"
                      style={{ color: category?.iconColor }}
                    />
                  </div>

                  <p
                    className="lg:!text-[20px] text-center font-bold mt-4"
                    style={{ color: category.iconColor }}
                  >
                    {category.title}
                  </p>
                </Link>
              );
            })}
            {SearchOfCategory.length === 0 && <p>No categories available.</p>}
          </div>
        </div>
        {/* search by category end */}

        {/* Popular posts */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4 text-[#2B2D2F]">
            Popular Posts
          </h2>
          <div className="border-b border-[#E5E5E7] mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {hasPopularPosts ? (
              popularPosts.map((post) => (
                <div key={post.id ?? post.metaTitle} className="flex flex-col">
                  <div className="relative">
                    <img
                      src={getPopularImageSrc(post)}
                      alt={getPopularTitle(post)}
                      className="w-full h-48 object-cover rounded-[4px]"
                    />
                    <span className="absolute bottom-4 right-4 px-3 py-2 bg-[#1E8767] text-white text-sm font-medium rounded-lg shadow-md">
                      {post?.blogCategory || post?.category || ""}
                    </span>
                  </div>
                  <div className="mt-4">
                    <Link href={getDevPostHref(post)} className="subtext-6 hover:text-green-600">
                      {getPopularTitle(post)}
                    </Link>
                    <p className="text-sm text-gray-500 mt-2 flex items-center">
                      <CalendarDays  className="w-4 h-4 mr-1 text-[#525D6A]" />
                      <span className="font-semibold text-xs">{formatDate(post?.createdAt) || post?.date}</span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col border border-dashed border-gray-300 rounded-[4px] p-4 bg-gray-50 text-gray-700">
                <div className="relative">
                  <img
                    src={popularPostImage}
                    alt="Popular posts coming soon"
                    className="w-full h-48 object-cover rounded-[4px]"
                  />
                  <span className="absolute bottom-4 right-4 px-3 py-2 bg-[#1E8767] text-white text-sm font-medium rounded-lg shadow-md">
                    Popular
                  </span>
                </div>
                <div className="mt-4">
                  <p className="subtext-6">Popular posts coming soon</p>
                  <p className="text-sm text-gray-500 mt-2">We are curating top reads. Check back shortly.</p>
                </div>
              </div>
            )}
          </div>
          {canLoadMorePopular && (
            <div className="flex justify-center items-center lg:mt-10 mt-6">
              <button
                onClick={handleLoadMorePopular}
                disabled={loadingPopular}
                className="flex items-center text-[#1E8767] py-2 px-6 border border-[#1E8767] cursor-pointer hover:bg-[#1E8767] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loadingPopular ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </section>

        {/* transformation obstacles */}
        <section className="mt-16">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

              <Image
                src={ladderImg}
                alt="Ladder Image"
                width={1200}
                height={800}
                className="object-cover w-full"
              />

              <div className="flex flex-col gap-1">
                <h2 className="lg:text-2xl font-semibold text-[#1F1F1F]">Embracing Change: Transforming Obstacles into Success</h2>
                <p className="lg:text-xl text-[#111827] mt-2">At LogZero Technologies, we view every challenge as an opportunity to elevate our game. Our team excels at transforming difficult project hurdles into growth victories through innovative tech solutions, effective project management, and expertise in digital transformation. We approach challenges with agility, creativity, and determination—empowering businesses to discover new opportunities, minimize risks, and achieve lasting success.</p>
                 <p className="text-sm text-gray-500  flex items-center">
                    <CalendarDays  className="w-4 h-4 mr-1 text-[#525D6A]" />
                    <span className="font-semibold text-xs text-[#525D6A]">May 15, 2023</span>
                  </p>
              </div>

            </div>
        </section>

        {/* Ads */}

        <section className="mt-16">
            <div className="flex justify-center items-center bg-[#C4C4C4] py-[110px] rounder rounded-[10px]">
                <h1 className="lg:!text-[96px] !text-[#FFFFFF]">Ads</h1>

            </div>
        </section>
        {/* Popular posts */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4 text-[#2B2D2F]">
           You May Also Like
          </h2>
          <div className="border-b border-[#E5E5E7] mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {hasYouMayLikePosts ? (
                  youMayLikePosts.map((post) => (
                    <div key={post.id ?? post.metaTitle} className="flex flex-col">
                      <div className="relative">
                        <img
                          src={getPopularImageSrc(post)}
                          alt={getPopularTitle(post)}
                          className="w-full h-48 object-cover rounded-[4px]"
                        />
                        <span className="absolute bottom-4 right-4 px-3 py-2 bg-[#1E8767] text-white text-sm font-medium rounded-lg shadow-md">
                          {post?.blogCategory || post?.category || ""}
                        </span>
                      </div>
                      <div className="mt-4">
                        <Link href={getDevPostHref(post)} className="subtext-6">
                          {getPopularTitle(post)}
                        </Link>
                    <p className="text-sm text-gray-500 mt-2 flex items-center">
                      <CalendarDays  className="w-4 h-4 mr-1 text-[#525D6A]" />
                      <span className="font-semibold text-xs">{formatDate(post?.createdAt) || post?.date}</span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col border border-dashed border-gray-300 rounded-[4px] p-4 bg-gray-50 text-gray-700">
                <div className="relative">
                  <img
                    src={popularPostImage}
                    alt="Popular posts coming soon"
                    className="w-full h-48 object-cover rounded-[4px]"
                  />
                  <span className="absolute bottom-4 right-4 px-3 py-2 bg-[#1E8767] text-white text-sm font-medium rounded-lg shadow-md">
                    Demo Post
                  </span>
                </div>
                <div className="mt-4">
                  <p className="subtext-6">Popular posts coming soon</p>
                  <p className="text-sm text-gray-500 mt-2">We are curating top reads. Check back shortly.</p>
                </div>
              </div>
            )}
          </div>
          {canLoadMoreYouMayLike && (
            <div className="flex justify-center items-center lg:mt-10 mt-6">
              <button
                onClick={handleLoadMoreYouMayLike}
                disabled={loadingYouMayLike}
                className="flex items-center text-[#1E8767] py-2 px-6 border border-[#1E8767] cursor-pointer hover:bg-[#1E8767] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loadingYouMayLike ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
