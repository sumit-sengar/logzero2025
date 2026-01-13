"use client";
import Link from "next/link";
import { Lztallcontext } from "@/context/Lztcontext";
import { useContext, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import Head from "./head";
import { CalendarDays, ChevronRight, User } from "lucide-react";
import FAQSection from "@/components/FAQSection";

const defaultPortfolioImage = "/assets/img/E-max-india.webp";

const stripHtml = (value) =>
  typeof value === "string" ? value.replace(/<[^>]+>/g, "").trim() : "";

const getCaseStudyImageSrc = (caseStudy) => {
  if (!caseStudy) return defaultPortfolioImage;
  if (caseStudy.featuredImageBase64) return caseStudy.featuredImageBase64;
  if (caseStudy.featuredImage) return caseStudy.featuredImage;
  if (caseStudy.imageUrl) return caseStudy.imageUrl;
  return defaultPortfolioImage;
};

const formatDate = (iso) => {
  if (!iso) return "";
  try {
    const date = new Date(iso);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    return iso;
  }
};

const getCaseStudyDescription = (caseStudy) => {
  if (!caseStudy) return "";
  if (caseStudy.metaDescription) return caseStudy.metaDescription;
  const richText = Array.isArray(caseStudy.content?.blocks)
    ? caseStudy.content.blocks
        .map((block) => block?.data?.text)
        .filter(Boolean)
        .join(" ")
    : "";
  if (richText) return stripHtml(richText);
  return caseStudy.challenge || caseStudy.solution || "";
};

const getCaseStudyTitle = (caseStudy) =>
  caseStudy?.metaTitle || caseStudy?.title || "Case Study";

const getCaseStudyCategory = (caseStudy) => {
  if (!caseStudy) return "";
  if (caseStudy.blogCategory) return caseStudy.blogCategory;
  if (
    Array.isArray(caseStudy.portfolioCategories) &&
    caseStudy.portfolioCategories[0]?.name
  ) {
    return caseStudy.portfolioCategories[0].name;
  }
  return "";
};

const getCaseStudyHref = (caseStudy) => {
  if (!caseStudy) return "/blog/blogDetails";
  if (caseStudy.link) return caseStudy.link;
  const identifier = caseStudy.id ?? caseStudy.slug ?? "";
  if (!identifier) return "/blog/blogDetails";
  return `/blog/blogDetails?id=${encodeURIComponent(identifier)}`;
};

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { blogs, caseStudiesLoaded, caseStudiesError } = useContext(Lztallcontext);

  const hasCaseStudies = Array.isArray(blogs) && blogs.length > 0;
  const showEmptyState = caseStudiesLoaded && !hasCaseStudies;
  const emptyStateTitle = caseStudiesError
    ? "Case studies are temporarily unavailable"
    : "Case studies will appear here soon";
  const emptyStateBody = caseStudiesError
    ? "We’re syncing with our portfolio feed. Please refresh later or connect with our team if you need case study details right away."
    : "We are curating the latest proof points for our work. Stay tuned or reach out to us to see how we’ve helped companies in your industry.";

  const faqs = [
    {
      qId: 1,
      question: "What type of projects has LogZero Technologies completed?",
      answer:
        "We’ve delivered projects in web development, mobile apps, cloud solutions, ERP/CRM, SaaS platforms, and more.",
    },
    {
      qId: 2,
      question: "Do you work with diverse industries and global clients?",
      answer:
        "Because we combine expertise, innovation, transparency, and reliable delivery to create solutions that help businesses grow. Our portfolio includes clients from multiple industries and countries.",
    },
    {
      qId: 3,
      question: "Can I request a case study similar to my project?",
      answer:
        "Absolutely. We share relevant case studies based on your business requirements.",
    },
    {
      qId: 4,
      question: "How do your past projects reflect your expertise?",
      answer:
        "Through performance results, client feedback, scalability, UI/UX quality, and successful outcomes.",
    },
    {
      qId: 5,
      question: "Do you offer consultations based on previous case studies?",
      answer:
        "Yes. We analyze your goals and recommend the best solution inspired by our past work.",
    },
    {
      qId: 6,
      question: "How often do you update your portfolio?",
      answer:
        "We update it regularly based on completed projects and new achievements.",
    },
  ];

  return (
    <>
      <Head />

      {/* Hero Section */}
      <HeroSection
        title=" Our Work Speaks for Itself"
        description="Discover how we’ve transformed ideas into impactful digital solutions. Real results, measurable growth, and proven innovation."
        description2={false}
        addCounterNo={true}
        BtnPrimary={true}
        buttonText="Get Started Today"
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo=""
        buttonlinkurlTwo="/"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={false}
        keyFeaturesList={false}
        servicesOptions={false}
        playiconyes={true}
        bannerimage="/assets/img/Portfolio-HeroSection.webp"
        nostats={[]}
      />

      {/* Case Studies */}
      <section className="py-10 px-4 sm:px-8 lg:px-16 bg-[#E9F7F3]">
        <div className="max-w-[1180px] mx-auto">
          {showEmptyState ? (
            <div className="rounded-[32px] border border-[#1E8767]/40 bg-white px-8 py-10 text-center shadow-[0_30px_80px_rgba(4,20,12,0.12)] space-y-4">
              <p className="text-xl font-semibold text-[#042C21]">
                {emptyStateTitle}
              </p>
              <p className="text-sm text-[#525D6A] leading-relaxed">
                {emptyStateBody}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full border border-[#1E8767] px-5 py-2 text-sm font-semibold text-[#1E8767] transition hover:bg-[#1E8767] hover:text-white"
                >
                  Talk to our team
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-transparent bg-[#1E8767] px-5 py-2 text-sm font-semibold text-white shadow hover:bg-[#146848]"
                >
                  Explore services
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {blogs.map((post, index) => (
                <article
                  key={post.id ?? post.slug ?? index}
                  className="bg-white rounded-lg overflow-hidden border border-transparent hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="relative w-full h-44 sm:h-48 md:h-44 lg:h-48">
                    <img
                      src={getCaseStudyImageSrc(post)}
                      alt={getCaseStudyTitle(post)}
                      className="w-full h-full object-cover object-center"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                    {getCaseStudyCategory(post) && (
                      <span className="absolute bottom-4 right-4 px-3 py-2 text-xs font-semibold text-white bg-[#1E8767] rounded-lg shadow">
                        {getCaseStudyCategory(post)}
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <Link
                      href={getCaseStudyHref(post)}
                      aria-label={`Read more about ${getCaseStudyTitle(post)}`}
                    >
                      <h3 className="text-[16px] font-semibold text-[#042C21] leading-snug mb-4">
                        {getCaseStudyTitle(post)}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-2 text-xs text-[#525D6A] mt-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>
                        {formatDate(post.publishedAt || post.createdAt)}
                      </span>
                      <span>|</span>
                      <User className="w-4 h-4" />
                      <span>
                        {post.author ? post.author.toUpperCase() : "LOGZERO"}
                      </span>
                    </div>

                    <p className="text-gray-600 mt-3 line-clamp-3 leading-relaxed">
                      {getCaseStudyDescription(post)}
                    </p>

                    <div className="mt-auto pt-4 border-t border-black/10">
                      <Link
                        href={getCaseStudyHref(post)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#27A483] hover:text-[#1e8c6f] transition-colors duration-200"
                        aria-label={`Read more about ${getCaseStudyTitle(post)}`}
                      >
                        <span>Read Case Study</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="FAQs"
        subtitle=""
        faqs={faqs}
        sectionBg="#F2F7FC"
        cardBg="#042C21"
      />
    </>
  );
}
