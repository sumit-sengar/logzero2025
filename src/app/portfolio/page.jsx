"use client";
import Image from "next/image";
import Link from "next/link";
import { Lztallcontext } from "@/context/Lztcontext";
import { useContext, React, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import Head from "./head";
import GreenButton from "@/components/GreenButton";
import WhiteButton from "@/components/WhiteButton";
import { ChevronRight } from "lucide-react";
import FAQSection from "@/components/FAQSection";

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { blogs } = useContext(Lztallcontext);
  // console.log(blogs);

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
        "Because we combine expertise, innovation, transparency, and reliable delivery to create solutions that help businesses gYes. Our portfolio includes clients from multiple industries and countries.",
    },
    {
      qId: 3,
      question: "Can I request a case study similar to my project?",
      answer:
        "Absolutely. We share relevant case studies based on your business requirements.",
    },
    {
      qId: 4,
      question: " How do your past projects reflect your expertise?",
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
      <Head> </Head>

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
      <section className={`py-10 px-4 sm:px-8 lg:px-16 bg-[#E9F7F3]`}>
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {blogs.map((b, i) => (
              <article
                key={i}
                className="bg-white rounded-lg overflow-hidden border border-transparent hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative w-full h-44 sm:h-48 md:h-44 lg:h-48">
                  {b.image ? (
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      priority={i < 2}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100" />
                  )}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  {/* {b.category && (
                    <span className="inline-block text-xs text-[#16B89A] font-medium mb-3">
                      {b.category}
                    </span>
                  )} */}

                  <h3 className="text-[15px] font-semibold text-[#042C21] leading-snug mb-4">
                    {b.title}
                  </h3>

                  <div className="mt-auto pt-4 border-t border-black/10">
                    <Link href={b.link || "#"}>
                      <span
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#27A483] hover:text-[#1e8c6f] transition-colors duration-200"
                        aria-label={`Read more about ${b.title}`}
                      >
                        <span>Read more</span>
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-5">
          {/* <div className="inline-block">
            <GreenButton
              text="Load More"
              linkurl="/"
              linktarget=""
              MoveRighticon={false}
            />
          </div> */}
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
