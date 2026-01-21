"use client";
import React, { useEffect, useState } from "react";
import {
  Code,
  Bolt,
  Server,
  Diamond,
  FileText,
  CalendarDays,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InlineGreenButton } from "@/components/InlineGreenButton";

const DEV_POSTS_ENDPOINT = `${(process.env.NEXT_PUBLIC_API_BASE_URL || "https://webapi.logzerotechnologies.com/api").replace(/\/$/, "")}/posts?type=blog_post&blogCategory=dev`;
const DEFAULT_DEV_POST_IMAGE = "/assets/img/featuredImage2.webp";
const DEV_POST_LIMIT = 10;
const popularPostImage = "/assets/img/popularPostImg.webp";
const devImg = "/assets/img/devImage.webp";

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

const MOCK_POSTS = [
  {
    id: 1,
    title: "When Medical Expert Witnesses Change The Course of Litigation",
    author: "NEHA BHATNAGAR",
    date: "November 16, 2025",
    category: "Mobile App Development",
    summary:
      "High-Stakes Scenarios Meet Medical Expertise A pedestrian struck by a distracted driver suffers internal injuries so complex the courtroom air...",
    imageUrl: "/assets/img/featuredImage.webp",
    isFeatured: true,
  },

  {
    id: 2,
    title:
      "Enhancing Your Dental Health with Premier Services from St. George Dentists",
    date: "December 1, 2025",
    imageUrl: "/assets/img/featuredImage2.webp",
  },
  {
    id: 3,
    title:
      "Boost Your Dental Wellness with Top-Notch Care from St. George Dental Experts",
    date: "December 1, 2025",
    imageUrl: "/assets/img/featuredImage2.webp",
  },
  {
    id: 4,
    title:
      "Boost Your Dental Wellness with Top-notch Care from St. George Dental Experts",
    date: "December 1, 2025",
    imageUrl: "/assets/img/featuredImage2.webp",
  },
  {
    id: 5,
    title:
      "Boost Your Dental Wellness with Top-notch Care from St. George Dental Experts",
    date: "December 1, 2025",
    imageUrl: "/assets/img/featuredImage2.webp",
  },
];

const SearchOfCategory = [
  {
    id: 1,
    title: "Dev",
    color: "#FFEDEC",
    iconBg: "#F9E4E3",
    icon: Code,
    iconColor: "#7D2F2B",
  },
  {
    id: 2,
    title: "Digital Solutions",
    color: "#F7EBFF",
    icon: Bolt,
    iconBg: "#ECDDF6",
    iconColor: "#60387A",
  },
  {
    id: 3,
    title: "DevOps &Server Management",
    color: "#ECF1FF",
    icon: Server,
    iconBg: "#E0E7FB",
    iconColor: "#354571",
  },
  {
    id: 4,
    title: "Design",
    color: "#D8F9F3",
    icon: Diamond,
    iconBg: "#BBE4DD",
    iconColor: "#256D5B",
  },
  {
    id: 5,
    title: "Docs",
    color: "#FFF3CB",
    icon: FileText,
    iconBg: "#F9E4E3",
    iconColor: "#9F8A47",
  },
];

const PopularPosts = [
  {
    id: 1,
    category: "Web Development",
    title:
      "Boost Your Dental Wellness with Top-notch Care from St. George Dental Experts",
    date: "October 10, 2025",
    imageUrl: popularPostImage,
  },
  {
    id: 2,
    category: "Mobile Development",
    title:
      "Boost Your Dental Wellness with Top-notch Care from St. George Dental Experts",
    date: "October 12, 2025",
    imageUrl: popularPostImage,
  },
  {
    id: 3,
    category: "Design",
    title:
      "Boost Your Dental Wellness with Top-notch Care from St. George Dental Experts",
    date: "October 12, 2025",
    imageUrl: popularPostImage,
  },
  {
    id: 4,
    category: "Digital Solutions",
    title:
      "Boost Your Dental Wellness with Top-notch Care from St. George Dental Experts",
    date: "October 12, 2025",
    imageUrl: popularPostImage,
  },
  {
    id: 5,
    category: "Digital Solutions",
    title:
      "Boost Your Dental Wellness with Top-notch Care from St. George Dental Experts",
    date: "October 12, 2025",
    imageUrl: popularPostImage,
  },
  {
    id: 6,
    category: "Digital Solutions",
    title:
      "Boost Your Dental Wellness with Top-notch Care from St. George Dental Experts",
    date: "October 12, 2025",
    imageUrl: popularPostImage,
  },
  {
    id: 7,
    category: "Digital Solutions",
    title:
      "Boost Your Dental Wellness with Top-notch Care from St. George Dental Experts",
    date: "October 12, 2025",
    imageUrl: popularPostImage,
  },
  {
    id: 8,
    category: "Digital Solutions",
    title:
      "Boost Your Dental Wellness with Top-notch Care from St. George Dental Experts",
    date: "October 12, 2025",
    imageUrl: popularPostImage,
  },
  {
    id: 9,
    category: "Digital Solutions",
    title:
      "Boost Your Dental Wellness with Top-notch Care from St. George Dental Experts",
    date: "October 12, 2025",
    imageUrl: popularPostImage,
  },
];

const CTA_CONFIG = {
  text: "Schedule Consultation",
  link: "/contact-us",
  target: "_self",
  servicesOptions: [],
};

const getDevPostHref = (post) => {
  const identifier = post?.id ?? post?.slug ?? "";
  if (!identifier) return "/blog/blogDetails";
  return `/blog/blogDetails?id=${encodeURIComponent(identifier)}`;
};

const Dev = () => {
  const [devPosts, setDevPosts] = useState([]);
  const [isLoadingDevPosts, setIsLoadingDevPosts] = useState(true);

  const featuredPost = MOCK_POSTS.find((p) => p.isFeatured);

  useEffect(() => {
    const fetchDevPosts = async () => {
      setIsLoadingDevPosts(true);
      try {
        const response = await fetch(DEV_POSTS_ENDPOINT);
        if (!response.ok) {
          throw new Error("Failed to fetch Dev posts");
        }
        const result = await response.json();
        const rows = result?.data?.rows ?? result?.rows ?? [];
        setDevPosts(rows.slice(0, DEV_POST_LIMIT));
      } catch (error) {
        console.error("Failed to load Dev posts", error);
      } finally {
        setIsLoadingDevPosts(false);
      }
    };

    fetchDevPosts();
  }, []);
  return (
    <div className="bg-white font-sans">
         {/* transformation obstacles */}
        <section className="mt-16 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            <div className="gap-6 pt-[30px] pb-[30px] pl-6 xl:pl-[80px] lg:pl-[50px] md:pl-8 pr-6 lg:pr-[30px] md:pr-[0px]">
              <h2 className=" lg:!text-[48px] md:!leading-[2rem] lg:!leading-[3rem] font-semibold text-[#1F1F1F]">
                Dev Insights & Best Practices
              </h2>
              <p className="lg:text-xl text-[#111827] mt-2">
               Stay ahead in Web and Mobile Development with expert insights, coding best practices, performance tips, and real-world implementation guides. From modern frameworks to scalable architecture — discover developer-focused content that helps you build faster, smarter, and industry-ready applications.
              </p>
              <div className="inline-block        ">
                <InlineGreenButton
                text={CTA_CONFIG.text}
                linkurl={CTA_CONFIG.link}
                linktarget={CTA_CONFIG.target}
                MoveRighticon
                services={CTA_CONFIG.servicesOptions}
              />
              </div>
              
              
              
            </div>
            <Image
              src={devImg}
              alt="Ladder Image"
              width={1200}
              height={800}
              className="object-cover w-full"
            />

            
          </div>
        </section>
      <div className="container mx-auto px-4 lg:px-0 pb-10">
       
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

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {PopularPosts.map((post) => (
                  <div key={post.id} className="flex flex-col">
                    <div className="relative">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-[4px]"
                      />
                      <span className="absolute bottom-4 right-4 px-3 py-2 bg-[#1E8767] text-white text-sm font-medium rounded-lg shadow-md">
                        {post.category}
                      </span>
                    </div>
                    <div className="mt-4">
                      <Link href={getDevPostHref(post)} className="subtext-6">
                        {post.title}
                      </Link>
                      <p className="text-sm text-gray-500 mt-2 flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1 text-[#525D6A]" />
                        <span className="font-semibold text-xs">{post.date}</span>
                      </p>
                    </div>
                  </div>
                ))}
          </div>
          <div className="flex justify-center items-center lg:mt-10 mt-6">
            <a
              href="/blog/dev"
              className=" mt-[16px] text-green-600 font-semibold hover:text-green-700 transition border-green-200 hover:border-green-600 pb-0.5 mt-auto"
            >
              <button className=" flex items-center text-[#1E8767] py-2 px-6 border border[#1E8767] cursor-pointer  hover:bg-[#1E8767] hover:text-white transition">
                Load More
              </button>
            </a>
          </div>
        </section>
        {/* <section className="mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold text-[#2B2D2F]">
              Dev Blog Posts
            </h2>
            {!isLoadingDevPosts && devPosts.length > 0 && (
              <p className="text-sm text-gray-500">
                Showing {devPosts.length} posts
              </p>
            )}
          </div>
          <div className="border-b border-[#E5E5E7] mb-6"></div>

          {isLoadingDevPosts ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-64 rounded-[20px] border border-dashed border-[#D1D5DB] bg-gray-50 animate-pulse"
                />
              ))}
            </div>
          ) : devPosts.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {devPosts.map((post) => {
                const imageSrc =
                  post.featuredImageBase64 ||
                  post.featuredImage ||
                  DEFAULT_DEV_POST_IMAGE;
                const dateLabel = formatIsoDate(
                  post.publishedAt || post.createdAt || post.updatedAt
                );
                  const detailSlug = post.slug || post.id;
                return (
                  <Link
                    key={post.id}
                      href={`/blog/blogDetails?id=${encodeURIComponent(detailSlug)}`}
                    className="group block overflow-hidden rounded-[26px] border border-[#E5E5E7] bg-white shadow-sm transition hover:shadow-lg"
                  >
                    <div className="h-56 w-full overflow-hidden bg-gray-100">
                      <img
                        src={imageSrc}
                        alt={post.metaTitle ?? "Dev post image"}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-3 p-5 sm:p-6">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#1E8767]">
                        <span>Dev</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#111827]">
                        {post.metaTitle || post.title}
                      </h3>
                      <p className="text-sm leading-6 text-[#4B5563]">
                        {post.metaDescription || post.summary}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#6B7280]">
                        <CalendarDays className="w-4 h-4 text-[#6B7280]" />
                        <span>{dateLabel}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-sm text-gray-500 py-6">
              No Dev posts available right now.
            </p>
          )}
        </section> */}
      </div>
    </div>
  );
};

export default Dev;
