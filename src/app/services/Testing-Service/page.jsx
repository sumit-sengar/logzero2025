"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { Lztallcontext } from "@/context/Lztcontext";
import HeroSection from "@/components/HeroSection";
import CTA from "@/components/CTA";
import GreenButton from "@/components/GreenButton";
import Testimonials from "@/components/Testimonials";
import Head from "./head";
import FAQSection from "@/components/FAQSection";

export default function UxServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { solutions, challenges, testimonialsOne, features2 } =
    useContext(Lztallcontext);
  console.log(solutions, challenges, testimonialsOne, features2);

  const faqs = [
    {
      qId: 1,
      question: "What is included in software testing and QA services?",
      answer:
        "We provide functional testing, manual testing, automation, performance testing, usability testing, and full QA lifecycle support.",
    },
    {
      qId: 2,
      question: "Why is software testing important?",
      answer:
        "Testing ensures your application is bug-free, secure, stable, and performs correctly before launch.",
    },
    {
      qId: 3,
      question: " Do you offer manual and automated testing?",
      answer:
        "Yes. Based on the project, we choose the right mix of manual and automation testing for maximum efficiency.",
    },
    {
      qId: 4,
      question: " Can you test an already developed software?",
      answer:
        "Absolutely. We conduct testing for third-party applications, legacy software, or in-progress systems.",
    },
    {
      qId: 5,
      question: "What factors affect testing timelines?",
      answer:
        "Timelines depend on project size, number of features, test cases, complexity, and testing type.",
    },
    {
      qId: 6,
      question: "Do you provide QA documentation and reports?",
      answer:
        "Yes. We provide test plans, test cases, bug reports, and improvement recommendations.",
    },
  ];

  return (
    <>
      <Head> </Head>
      <HeroSection
        title="Reliable Testing & QA Services"
        description="From functional and performance testing to full QA lifecycle support—our team delivers high-quality, bug-free software solutions."
        description2={false}
        shortdescription={false}
        // shortdescription="Whether you're building a billion-dollar SaaS or a sleek e-commerce site, we architect, design, and deliver websites that outperform industry standards—every time."
        addCounterNo={true}
        BtnPrimary={true}
        buttonText="Get Your Free Test Consultation"
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo=""
        buttonlinkurlTwo="/"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={true}
        keyFeaturesList={false}
        servicesOptions={false}
        bannerimage="/assets/img/Testing-Services-Herosection.webp"
        nostats={[
          {
            Novalue: "250",
            indicator: "+",
            label: "Website & App Already Tested",
          },
          { Novalue: "98", indicator: "%", label: "Success Rate" },
          { Novalue: "50", indicator: "+", label: "Technologies" },
        ]}
      />

      {/* Transform Your QA Challenges */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Transform Your QA Challenges
          </h2>
          <p className="mb-12 max-w-2xl mx-auto">
            We understand the pain points in modern software testing and provide
            comprehensive solutions
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="subheading-2 mt-10 mb-6">Common QA Challenges</h3>
              <div className="space-y-4">
                {challenges.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 border border-l-[#f44336] rounded-tl-lg rounded-bl-lg bg-white p-4 shadow-sm "
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-md  bg-[#FEF2F2] mx-4  ${item.accentBg}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="subheading-3 mb-1">{item.title}</h4>
                      <p className="subtext subtextcolor">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="subheading-2 mt-10 mb-6">
                Our Solutions with LogZero
              </h3>
              <div className="space-y-4">
                {solutions.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 border-l-4 border-l-[#13A248] rounded-tl-lg rounded-bl-lg bg-white p-4 shadow-sm"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-md bg-[#F0FDF4] mx-4 ${item.accentBg}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className=" subheading-3 mb-1">{item.title}</h4>
                      <p className="subtext subtextcolor">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Proven Testing Process */}
      <section className="py-16 px-6 bgblue3">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">Our Proven Testing Process</h2>
            <p className="max-w-[65%]  text-center mx-auto">
              A systematic 6-step methodology that ensures comprehensive testing
              and quality assurance for your projects
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-4">
            {/* Left Text */}
            <div className="w-full lg:w-1/4 flex flex-col">
              <div>
                <h3 className="subheading-2 !text-[#05BCC1] mb-2">
                  1. Requirement Analysis
                </h3>
                <p className="subtext2 subtextcolor">
                  Understanding the scope of your product and defining testing
                  objectives
                </p>
              </div>
              <div className="my-8">
                <h3 className="subheading-2 !text-[#A3CE37] mb-2">
                  2. Test Planning & Strategy
                </h3>
                <p className="subtext2 subtextcolor">
                  Tailoring a comprehensive testing approach specific to your
                  needs
                </p>
              </div>
              <div>
                <h3 className="subheading-2 !text-[#59696E] mb-2">
                  3. Test Execution
                </h3>
                <p className="subtext2 subtextcolor">
                  Running both manual and automated tests with precision and
                  efficiency
                </p>
              </div>
            </div>

            {/* Center Circular Image */}
            <div className="lg:w-1/2 justify-center relative items-center  lg:block">
              <Image
                src="/assets/img/Our-Proven-Testing-Process.webp"
                alt="Our Proven Testing Process"
                width={631}
                height={439}
                className="object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center  subheading-4 text-[#666666]">
                Testing
                <br />& QA
              </div>
            </div>

            {/* Right Text */}
            <div className="w-full lg:w-1/4 flex flex-col">
              <div>
                <h3 className="subheading-2 !text-[#8F4881] mb-2">
                  4. Bug Reporting & Fixes
                </h3>
                <p className="subtext2 subtextcolor">
                  Detailed reports with real-time tracking and collaborative
                  resolution
                </p>
              </div>
              <div className="my-8">
                <h3 className="subheading-2 !text-[#F1A229] mb-2">
                  5. Final Evaluation & Reports
                </h3>
                <p className="subtext2 subtextcolor">
                  Comprehensive performance and security testing with detailed
                  analytics
                </p>
              </div>
              <div>
                <h3 className="subheading-2 !text-[#F7615A] mb-2">
                  6. Delivery & Feedback Loop
                </h3>
                <p className="subtext2 subtextcolor">
                  Continuous improvement based on client feedback and industry
                  best practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Experience These Benefits? */}
      <section className="px-6 py-16">
        <CTA
          title="Ready to Experience These Benefits?"
          description="Join hundreds of companies that trust LogZero for their 
testing needs"
          linkUrl="/contact-us"
          ctabtnType="primary"
          linkText="Start Your Free Consultation"
        />
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="mb-2">Industries We Serve</h2>
            <p className="max-w-[80%] mx-auto">
              Our expertise spans across diverse industries, delivering tailored
              UI designs that meet specific market needs and user expectations.
            </p>
          </div>

          <div className="flex md:flex-nowrap flex-wrap pt-6 pb-6">
            <div className="md:w-[50%] w-full pr-4">
              <div className="grid gap-4">
                {/* Top Full Box */}
                <div className="relative overflow-hidden rounded-lg group h-[245px]">
                  <Image
                    src="/assets/img/healthcare.jpg"
                    alt="Healthcare"
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white text-[#111827] font-semibold text-[16px] px-4 py-2 rounded shadow">
                      Healthcare
                    </span>
                  </div>
                </div>

                {/* Bottom 2 Boxes */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 h-[465px] sm:h-[365px]">
                  {/* Left Box */}
                  <div className="relative overflow-hidden rounded-lg group">
                    <Image
                      src="/assets/img/travel.jpg"
                      alt="Travel"
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white text-[#111827] font-semibold text-[16px] px-4 py-2 rounded shadow">
                        Travel
                      </span>
                    </div>
                  </div>

                  {/* Right Box */}
                  <div className="relative overflow-hidden rounded-lg group">
                    <Image
                      src="/assets/img/realestate.jpg"
                      alt="Real Estate"
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white text-[#111827] font-semibold text-[16px] px-4 py-2 rounded shadow">
                        Real Estate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[50%] w-full  mt-4 md:mt-0">
              <div className="grid gap-4">
                {/* Bottom 2 Boxes */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 h-[465px] sm:h-[365px]">
                  {/* Left Box */}
                  <div className="relative overflow-hidden rounded-lg group">
                    <Image
                      src="/assets/img/automobile.jpg"
                      alt="automobile"
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white text-[#111827] font-semibold text-[16px] px-4 py-2 rounded shadow">
                        Automobile
                      </span>
                    </div>
                  </div>

                  {/* Right Box */}
                  <div className="relative overflow-hidden rounded-lg group">
                    <Image
                      src="/assets/img/ecommerce.jpg"
                      alt="E-commerce"
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white text-[#111827] font-semibold text-[16px] px-4 py-2 rounded shadow">
                        E-commerce
                      </span>
                    </div>
                  </div>
                </div>

                {/* Top Full Box */}
                <div className="relative overflow-hidden rounded-lg group h-[245px]">
                  <Image
                    src="/assets/img/media.jpg"
                    alt="media"
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white text-[#111827] font-semibold text-[16px] px-4 py-2 rounded shadow">
                      Media
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <div className="inline-block">
              <GreenButton
                text="+ More Industries"
                linkurl="/industry"
                linktarget=""
                MoveRighticon={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bgblue3">
        <div className="container mx-auto">
          <Testimonials
            title="See Why Our Clients Trust Us"
            subtitle="Discover how our solutions have helped clients achieve success. Hear their stories and experiences with our services."
            testimonials={testimonialsOne}
          />
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              What Sets Us Apart
            </h2>
            <p className="max-w-[55%] mx-auto text-center mt-2">
              Discover the LogZero difference that makes us the preferred choice
              for quality assurance
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-13 items-center">
            <div className="space-y-4">
              {features2.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start p-4 rounded-xl bg-[#F3F7FD] hover:bg-[#EAF1FB] transition"
                >
                  <div className="w-12 h-12 pt-1 flex items-center justify-center rounded-lg bluenew mr-4 shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="pb-1">{f.title}</h4>
                      <span className="text-xs px-2 py-0.5 bg-[#DBEAFE] text-gray-700 rounded-full">
                        {f.tag}
                      </span>
                    </div>
                    <p className="!text-[14px]  subtextcolor">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex ">
              <div className="self-center w-full px-4 sm:px-0 ">
                <div className="relative rounded-xl overflow-hidden md:h-[412px] sm:h-[500px] mx-auto">
                  <Image
                    src="/assets/img/What-Sets-Us-Apart.webp"
                    alt="QA Testing"
                    width={500}
                    height={600}
                    className="rounded-xl object-cover h-full "
                  />
                </div>
              </div>
            </div>
          </div>
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
