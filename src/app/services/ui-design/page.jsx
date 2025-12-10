"use client";
import { useContext, React, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { Lztallcontext } from "@/context/Lztcontext";
import Trusted from "@/components/Trusted";
import Testimonials from "@/components/Testimonials";
import CardContainer from "@/components/CardContainer";
import CTA from "@/components/CTA";
import CounterNo from "@/components/CounterNo";
import FAQSection from "@/components/FAQSection";
import Head from "./head";
import ContactUsForm from "@/components/ContactUsForm";
import {
  Search,
  PenTool,
  Palette,
  TestTube,
  Rocket,
  Send,
  Phone,
  Mail,
  MapPin,
  Component,
  MonitorSmartphone,
  Users,
} from "lucide-react";

export default function UI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { UiServices, testimonialsOne, Banner5, ComprehensiveUi } =
    useContext(Lztallcontext);
  console.log(UiServices, testimonialsOne, Banner5, ComprehensiveUi);

  const BgColors2 = [
    "bgblue",
    "peachgreen",
    "bggreen",
    "bgpurpal",
    "bgorange",
    "bgred-100",
  ];

  const Gradients = [
    "gradient17",
    "gradient2",
    "gradient3",
    "gradient18",
    "gradient5",
    "gradient6",
  ];

  const services = [
    "Web UI Design",
    "Mobile UI Design",
    "Dashboard UI Design",
    "UI Prototyping & Wireframing",
    "UI/UX Research",
    "Brand & Visual Identity",
  ];

  const faqs = [
    {
      qId: 1,
      question: "Why is UI design important for my website or app?",
      answer:
        "A good UI enhances visual appeal, user engagement, and overall usability, helping users enjoy the product and take action.",
    },
    {
      qId: 2,
      question: "How long does UI design take?",
      answer:
        "It depends on the number of screens, design style, revisions, and complexity of the interface.",
    },
    {
      qId: 3,
      question: "What tools do you use for UI design?",
      answer:
        "We use Figma, Adobe XD, Photoshop, and other top industry tools to create high-quality designs.",
    },
    {
      qId: 4,
      question: "Do you design UI for both websites and mobile apps?",
      answer:
        "Yes, we design interfaces for web apps, mobile apps, software dashboards, SaaS platforms, admin panels, and more.",
    },
    {
      qId: 5,
      question: "Can you redesign or refresh my existing UI?",
      answer:
        "Yes, we can revamp your existing interface to make it more modern, user-friendly, and conversion-focused.",
    },
    {
      qId: 6,
      question: "What makes a good UI design?",
      answer:
        "Clean layouts, consistency, brand alignment, accessibility, and an easy-to-navigate structure.",
    },
  ];

  return (
    <>
      <Head> </Head>
      <HeroSection
        title=" Beautiful, Functional UI Design That Engages Users"
        titlecolor={false}
        subtitle=""
        description="We design user interfaces that are visually appealing, easy to navigate, and built to impress."
        description2=""
        shortdescription={false}
        // shortdescription="Whether you're building a billion-dollar SaaS or a sleek e-commerce site, we architect, design, and deliver websites that outperform industry standards—every time."
        addCounterNo={false}
        BtnPrimary={true}
        playiconyes={true}
        buttonText="Get a Free Consultation "
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo="View Our Work"
        buttonlinkurlTwo="/"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={false}
        keyFeaturesList={false}
        servicesOptions={services}
        bannerimage="/assets/img/UI-Design-HeroSection.webp"
        nostats={[]}
      />

      {/* Trusted by Industry Leaders */}

      <div>
        <Trusted
          bgcolorchange="bgblue3"
          titlecolor="textblack"
          subtitlecolor="textblack"
          // logobgchange="bgblue3"
          title="Trusted by Leading Companies"
          subtitle="We've partnered with innovative companies across various industries 
to create exceptional user experiences."
        />
        <p className="text-[#179A8E] w-full !font-semibold  text-center pb-6 !mb-0 bgblue3">
          Join 100+ companies that trust us with their UI design needs
        </p>
      </div>

      {/* Industries We Serve */}
      <section className="py-16 px-6 bgblue1">
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
        </div>
      </section>

      {/* What Clients Need for Exceptional UI Design */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="">What Clients Need for Exceptional UI Design</h2>
            <p className="text-center mx-auto max-w-[70%] mt-3">
              Our approach blends innovative design, technical skill, and
              strategic insight to produce user interfaces that are visually
              appealing and effectively enhance business outcomes.
            </p>
          </div>
          <div className="p-3 ">
            <div className="flex justify-between flex-wrap gap-0 max-w-[1100px] mx-auto mt-[100px]">
              {[
                {
                  icon: Component,
                  title: "Expert Designers with Years of Experience",
                  subtitle:
                    "Our team brings decades of combined experience in UI/UX design across various industries.",
                },
                {
                  icon: Palette,
                  title: "Tailored UI Solutions for Your Brand",
                  subtitle:
                    "Every design is customized to reflect your brand identity and business objectives.",
                },
                {
                  icon: MonitorSmartphone,
                  title: "Cross-Device Compatibility",
                  subtitle:
                    "Responsive designs that work flawlessly across all devices and screen sizes.",
                },
                {
                  icon: MonitorSmartphone,
                  title: "Rapid Prototyping & Testing",
                  subtitle:
                    "Quick iterations and user testing to validate designs before development.",
                },
                {
                  icon: Users,
                  title: "User-Centered Design Approach",
                  subtitle:
                    "Every decision is backed by user research and behavioral data.",
                },
              ].map((item, i) => (
                <div key={i} className="w-[220px] mb-[100px] mx-auto  relative">
                  {/* Breadcrumb */}
                  <div
                    className="h-[60px] relative z-[1]"
                    style={{
                      "--s": "20px",
                      lineHeight: "1.8",
                      paddingInline: "calc(var(--s) + .3em)",
                      clipPath:
                        "polygon(0 0, calc(100% - var(--s)) 0, 100% 50%, calc(100% - var(--s)) 100%, 0 100%, var(--s) 50%)",
                      background: "#1E8767",
                    }}
                  ></div>

                  {/* Green Circle */}
                  <div className="w-[150px] h-[150px] bluenew rounded-full absolute top-[-50px] left-1/2 -translate-x-1/2 z-[2] flex items-center justify-center">
                    <div className="w-[110px] h-[110px] bg-white rounded-full flex items-center justify-center text-[1.2rem] font-bold text-[#5BC2A7]">
                      <item.icon size={48} />
                    </div>
                  </div>

                  {/* Text Box */}
                  <div className="mt-[50px] relative pr-12 mx-auto max-h-[152px]  ">
                    <span className="h-[20px] w-[20px] rounded-full bluenew block absolute right-[32px] bottom-[-25px]"></span>
                    <div className="absolute right-[20px] top-[-40px] h-[4px] w-[20px] bluenew"></div>
                    <div className="absolute right-[40px] top-[-40px] h-[208px] w-[4px] bluenew"></div>
                    <div className="mt-4 text-[20px] text-left font-bold text-[#111827]">
                      {item.title}
                    </div>
                    <div className="text-[16px] text-left  min-h-[96px]  subtextcolor mt-2">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our UI Design Services */}
      <section id="services" className="py-16 px-6 bgblue3">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center fsumana">Our UI Design Services</h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto fopensans">
              From concept to completion, we offer comprehensive UI design
              services that transform your vision into engaging digital
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {UiServices?.map((service, index) => (
              <CardContainer
                key={index}
                index={index}
                service={service}
                ctaType="none"
                IconbgColor={BgColors2[index % BgColors2.length]}
                shadowadd="shadow0"
                roundcorner="rounded-full"
                borderadd="border1px"
                checkicon={true}
                bgadd={Gradients[index % Gradients.length]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Digital Presence? */}
      <section className="px-6 py-16">
        <CTA
          title="Ready to Transform Your Digital Presence?"
          description="Let's discuss how our unique approach to UI design can help elevate your brand and create meaningful user experiences that drive business growth."
          linkUrl="/contact-us"
          ctabtnType="primary"
          linkText="Start Your Project Today"
        />
      </section>

      {/* Our UI Design Development Process */}
      <section className="px-6 pb-16 ">
        <div className="container mx-auto">
          <div className="headingbox pb-2 mb-10">
            <h2 className="mb-4 text-center">
              Our UI Design Development Process
            </h2>
            <p className=" text-center mx-auto max-w-[60%]">
              Our structured approach ensures every project delivers exceptional
              results through careful planning, execution, and optimization.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            {/* Dedicated Team Card */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)] order-2 md:order-1">
              {/* Icon */}
              <div className="w-12 h-12 p-2 bgblue5 rounded-[5px] flex items-center justify-center shrink-0">
                <Search size={22} className="text-[#1658EA]" />
              </div>
              {/* Text Content */}
              <div className="flex-1">
                <p className="subheading-3 !mb-1 textblue">01</p>
                <p className="subheading-3 text-[#252525]">
                  Discovery & Research
                </p>
                <p className="subtext subtextcolor mt-6">
                  Understanding the target audience, business goals, and market
                  landscape.
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      Stakeholder interviews
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      User personas
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      Competitor analysis
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px] ">
                      Requirements gathering
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/Discovery-&-Research.webp')] bg-cover bg-center h-[400px] md:h-[auto] order-1 md:order-2"></div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/Wireframing-&-Prototyping.webp')] bg-cover bg-center h-[300px] md:h-[auto]"></div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)]">
              <div className="w-12 h-12 p-2 bgblue6 rounded-[5px] flex items-center justify-center">
                <PenTool size={22} className="text-[#13978B]" />
              </div>

              <div className="flex-1">
                <p className="subheading-3 mb-1 text-[#13978B] !mb-1">02</p>
                <p className="subheading-3 text-[#252525]">
                  Wireframing & Prototyping
                </p>
                <p className="subtext subtextcolor mt-6">
                  Creating low-fidelity prototypes and gathering initial
                  feedback.
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      Information architecture
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      User flow mapping
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      Low-fi wireframes
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px] ">
                      Interactive prototypes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)] order-2 md:order-1">
              <div className="w-12 h-12 p-2 bg-[#F3E8FF] rounded-[5px] flex items-center justify-center">
                <Palette size={22} className="text-[#A265EE]" />
              </div>

              <div className="flex-1">
                <p className="text-[#A265EE] subheading-3 !mb-1">03</p>
                <p className="subheading-3 text-[#252525]">
                  UI Design & Refinement
                </p>
                <p className="subtext subtextcolor mt-6">
                  Crafting beautiful, interactive interfaces with attention to
                  detail.
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      Visual design
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      Component library
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      Style guide
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px] ">
                      High-fi mockups
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/UI-Design-&-Refinement.webp')] bg-cover bg-center h-[300px] md:h-[auto] order-1 md:order-2"></div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/User-Testing.webp')] bg-cover bg-center h-[300px] md:h-[auto]"></div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)]">
              <div className="w-12 h-12 p-2 bgblue4 rounded-[5px] flex items-center justify-center">
                <TestTube size={22} className="text-[#16A35E]" />
              </div>

              <div className="flex-1">
                <p className="subheading-3 !mb-1 text-[#16A35E]">04</p>
                <p className="subheading-3 text-[#252525]">User Testing</p>
                <p className="subtext subtextcolor mt-6">
                  Gathering feedback to ensure usability and optimal user
                  experience.
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      Usability testing
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      A/B testing
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      Feedback analysis
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px] ">
                      Design iterations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)] order-2 md:order-1">
              <div className="w-12 h-12 p-2 bgpurpal2 rounded-[5px] flex items-center justify-center">
                <Rocket size={22} className="text-[#EB5E14]" />
              </div>

              <div className="flex-1">
                <p className="subheading-3 !mb-1 text-[#EB5E14]">05</p>
                <p className="subheading-3 text-[#252525]">
                  Launch & Optimization
                </p>
                <p className="subtext subtextcolor mt-6">
                  Final adjustments, handoff to development, and post-launch
                  optimization.
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      Developer handoff
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      Quality assurance
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px]">
                      Launch support
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-[#5BC2A7] text-[16px] ">
                      Performance monitoring
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/Launch-&-Optimization.webp')] bg-cover bg-center h-[300px] md:h-[auto] order-1 md:order-2"></div>
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

      {/* Our Achievements & Milestones */}
      <section className="bgsecondary py-16 px-6">
        <div className="container mx-auto ">
          <div className="text-center max-w-5xl mx-auto pb-5 ">
            <h2 className="!text-white">Our Achievements & Milestones</h2>
            <p className="my-3 text-white max-w-[60%] text-center mx-auto ">
              Numbers that showcase our commitment to excellence and the trust
              our clients place in our UI design expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Banner5.map((p) => {
              const Icon = p.Icon;
              // Parse "150+" -> Novalue=150, indicator="+"
              const m = String(p.title)
                .trim()
                .match(/^([0-9]*\.?[0-9]+)\s*([^\d.\s]+)?$/);
              const Novalue = m ? parseFloat(m[1]) : 0;
              const indicator = (m && m[2]) || "";

              return (
                <article
                  key={p.id}
                  className="border !border-solid [border-image-slice:1] !border-[#FFFFFF33]
              p-5 items-center rounded-xl bg-[#163B31]
              flex flex-col m-0 transition-colors duration-300 
              ease-in-out transition-transform hover:scale-104"
                >
                  <div className="mb-4">
                    <div
                      className={`${p.colorClass} w-14 h-14 rounded-full flex items-center justify-center`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Counter (single stat per card) */}
                  <CounterNo
                    numbersize="text-3xl md:text-4xl !text-white"
                    labelsize="text-sm md:text-base !text-white/90"
                    gapadd={true}
                    nostats={[{ Novalue, indicator, label: p.desc }]}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 px-6 ">
        <div className="container mx-auto ">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center ">Why We're Different</h2>
            <p className="text-center mb-10 max-w-full md:max-w-[85%] mx-auto ">
              At LogZero Technologies, we create attractive designs focused on
              intuitive user experiences to enhance your business. Our method is
              based on user behavior and data, ensuring each design element is
              valuable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3  gap-4 mt-6">
            {ComprehensiveUi?.map((service, index) => (
              <CardContainer
                key={index}
                index={index}
                service={service}
                bgadd="bggray1"
                borderadd="border1px"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[10px]"
                shadowadd="shadow"
                IconbgColor={false}
                roundcorner="rounded-full"
                desminheight="h-full"
                lineclamp="line-clamp-none"
                ctaType=""
                imgheight="h-[212px]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* form */}
      <ContactUsForm
        heading="Get In Touch"
        subheading="Ready to transform your Ui design idea into reality? Let’s discuss your project and see how we can help you achieve your goals."
        contactCardTitle="Let’s Start a Conversation"
        contactText="We’re here to answer your questions and discuss how we can bring your Ui design vision to life. Reach out to us through any of the following channels."
        phone={{
          label: "Phone Number",
          number: "+91 11 40789940",
          href: "tel:+91 11 40789940",
        }}
        email={{
          label: "Email",
          address: "sales@logzerotechnologies.com",
        }}
        emailComposeMode="gmail"
        address={{
          label: "Address",
          lines: [
            "Pegasus Tower, A-10, 8th Floor Sector-68,Gautam Buddha Nagar, Noida, Uttar Pradesh, 201301,",
          ],
          mapLink: "https://maps.app.goo.gl/f1tAeRmdHf2wWoMD6",
        }}
        businessHours={[
          { day: "Monday–Friday", text: "24x7 Open" },
          { day: "Saturday", text: "Closed" },
          { day: "Sunday", text: "Closed" },
        ]}
        form={{
          respondText:
            "🔒Your information is secure and will only be used to contact you about your inquiry.",
        }}
        onSubmit={(formData) => {
          console.log("Form submitted:", formData);
        }}
      />

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
