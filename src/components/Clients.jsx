"use client";
import { useContext, useEffect } from "react";
import Testimonials from "@/components/Testimonials";
import { Lztallcontext } from "@/context/Lztcontext";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";

export default function Clients() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { testimonialsOne } = useContext(Lztallcontext);
  // console.log(testimonialsOne);

  const faqs = [
    {
      qId: 1,
      question: "What mobile platforms do you develop for?",
      answer:
        "Tailored IT solutions help optimize workflows, reduce manual effort, and streamline communication across departments for better productivity.",
    },
    {
      qId: 2,
      question: "Can you develop apps for both smartphones and tablets?",
      answer:
        "Yes, we provide continuous maintenance, upgrades, and 24/7 technical assistance to ensure your systems run smoothly.",
    },
    {
      qId: 3,
      question: "What industries do you cater to for mobile app development?",
      answer:
        "Absolutely. Our solutions are scalable and designed to meet the specific needs of startups, SMEs, and enterprises alike.",
    },
    {
      qId: 4,
      question: "Do you provide UI/UX design services for mobile apps?",
      answer:
        "Implementation time varies depending on project scope, but we ensure timely delivery through agile development practices.",
    },
    {
      qId: 5,
      question: "Can you integrate third-party APIs into mobile applications?",
      answer:
        "Implementation time varies depending on project scope, but we ensure timely delivery through agile development practices.",
    },
  ];

  const logos = [
    { src: "/assets/img/i-smart.png", alt: "I-Smart Logo" },
    { src: "/assets/img/WKMT.png", alt: "I AM L.I.P Logo" },
    {
      src: "/assets/img/LIGHTHOUSE.png",
      alt: "Education Maximum (E-MAX) Logo",
    },
    { src: "/assets/img/PASHU.png", alt: "Aapka eshop Logo" },
    { src: "/assets/img/STAY-LEARNING.png", alt: "KritiKar Solutions Logo" },
    { src: "/assets/img/PRAKASH.png", alt: "Solutions Logo" },
    { src: "/assets/img/ICRS.png", alt: "Inflore Logo" },
    {
      src: "/assets/img/Inflore.png",
      alt: "inflore Logo",
    },
    { src: "/assets/img/Solutions.png", alt: "Prakash Logo" },
    { src: "/assets/img/Kritikal.png", alt: "Stay Learning Logo" },
    {
      src: "/assets/img/Aapka-eshop.png",
      alt: "I-Smart Personal Solutions Logo",
    },
    { src: "/assets/img/e-max.png", alt: "Pashu Shala Logo" },
    { src: "/assets/img/LIP.png", alt: "Lighthouse Logo" },
    { src: "/assets/img/vapes.png", alt: "WKMT Logo" },
  ];

  return (
    <>
      <HeroSection
        title=" We Transform Your Vision into Captivating Experiences"
        titlecolor={false}
        subtitle=""
        description="We combine dedication and innovation to ensure each client's vision becomes a reality. We've partnered with brands from diverse industries and helped them transform their digital experiences."
        description2="Your success is our mission—customized tech solutions for your business needs."
        shortdescription={false}
        addCounterNo={true}
        BtnPrimary={true}
        playiconyes={false}
        buttonText="Get Started Today"
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo=""
        buttonlinkurlTwo=""
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={false}
        keyFeaturesList={false}
        servicesOptions={false}
        bannerimage="/assets/img/Turning Innovation into Impact with CuttingEdge-heroSection.webp"
        nostats={[
          { Novalue: 1000, indicator: "+", label: "Projects Completed" },
          { Novalue: 100, indicator: "+", label: "Expert Developer" },
          { Novalue: 15, indicator: "+", label: "Industries Served" },
        ]}
      />

      {/* LOGOS */}
      <section className="bg-white py-4 px-6 overflow-hidden">
        <div className="max-w-[95%] mx-auto space-y-4 ">
          {[1, 2].map((row, i) => (
            <div key={i} className={`flex overflow-hidden`}>
              <div
                className={`flex gap-6 animate-scroll-${
                  i % 2 === 0 ? "ltr" : "rtl"
                }`}
              >
                {[...logos, ...logos].map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex  h-32 w-32  p-2 border border-gray-100 object-contain"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes scroll-ltr {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          @keyframes scroll-rtl {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll-ltr {
            animation: scroll-ltr 55s linear infinite;
          }

          .animate-scroll-rtl {
            animation: scroll-rtl 55s linear infinite;
          }
        `}</style>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 px-6 bg-[#F1F6FB]">
        <div className="container mx-auto">
          <Testimonials
            title="See Why Our Clients Trust Us"
            subtitle="Discover how our solutions have helped clients achieve success. Hear their stories and experiences with our services."
            testimonials={testimonialsOne}
          />
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
