"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { Lztallcontext } from "@/context/Lztcontext";
import Trusted from "@/components/Trusted";
import SuccessStory from "@/components/SucessStory";
import CTB from "@/components/CTB";
import WhyChooseUs from "@/components/WhyChooseUS";
import Testimonials from "@/components/Testimonials";
import Head from "./head";
import FAQSection from "@/components/FAQSection";
import ContactUsForm from "@/components/ContactUsForm";

import CardContainerBorder from "@/components/CardContainerBorder";
import {
  Headset,
  Component,
  Code,
  TestTube,
  Rocket,
  Clock,
  LayoutGrid,
  Search,
  ShieldEllipsis,
  FileScan,
  MonitorCog,
  ChevronsLeftRight,
  Gpu,
  Target,
  Users,
  Eye,
  Award,
  HeartHandshake,
} from "lucide-react";
import CardContainer from "@/components/CardContainer";
import CTA from "@/components/CTA";
import HeroSection from "@/components/HeroSection";

import WebDevelopmentbanner from "../../../../public/assets/img/web-development-banner.webp";
import WhiteButton from "@/components/WhiteButton";
import GreenButton from "@/components/GreenButton";

const BgColors = [
  "bgblue",
  "bgpurpal4",
  "bgdarkgreen",
  "bgorange-100",
  "bgred-100",
  "bggray",
  "peachgreen",
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    PowerfulWebDevelopment,
    SucessStoryDataWeb,
    Industriesweserveimagedata,
    testimonialsOne,
  } = useContext(Lztallcontext);

  const statsData = [
    {
      value: "+135%",
      label: "increase in conversion rate for a global SaaS platform",
    },
    {
      value: "2.5x",
      label: "improvement in page speed for an enterprise ERP client",
    },
    {
      value: "$100K+",
      label: "saved annually for a marketplace client by automating workflows",
    },
    {
      value: "10M+",
      label: "daily visitors at 99.99% uptime for a custom CMS",
    },
  ];

  // whychooseus
  const statData = [
    { value: "150+", label: "Developers" },
    { value: "500+", label: "Projects Delivered" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ];

  const featuresData = [
    {
      icon: Target,
      iconBgColor: "bg-blue-600",
      title: "Tailored Solutions",
      description:
        "We craft customized mobile apps tailored to your unique business requirements and goals.",
      highlight: "Custom-built for your success.",
    },
    {
      icon: Users,
      iconBgColor: "bg-purple-600",
      title: "Dedicated Team",
      description:
        "Our team of experts works alongside you at every stage, ensuring your vision is realized.",
      highlight: "Your success is our mission.",
    },
    {
      icon: Eye,
      iconBgColor: "bg-orange-500",
      title: "Transparency",
      description:
        "Clear communication and regular updates throughout the development process keep you informed.",
      highlight: "No surprises, complete visibility.",
    },
    {
      icon: Award,
      iconBgColor: "bg-red-600",
      title: "Proven Track Record",
      description:
        "Success stories from clients across industries speak to our expertise and reliability.",
      highlight: "500+ successful projects delivered.",
    },
    {
      icon: HeartHandshake,
      iconBgColor: "bg-teal-500",
      title: "Post-Launch Support",
      description:
        "We provide continuous support and optimization to keep your app running smoothly.",
      highlight: "Partnership that lasts beyond launch.",
    },
  ];

  const services = [
    "Powerful Web Development",
    "Mobile-First & Responsive Design",
    "E-Commerce Development",
    "Web Applications",
    "SEO-Ready & Speed-Optimized",
    "SaaS Integration",
    "Marketplace Development",
  ];

  const faqs = [
    {
      qId: 1,
      question: "What is custom web development and why is it important?",
      answer:
        "Custom web development means building a website based on your business goals, branding, and features. It ensures better performance, security, and user experience compared to ready-made templates.",
    },
    {
      qId: 2,
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the project’s complexity, design requirements, and features. Simple websites take less time, while advanced ones require more planning and development.",
    },
    {
      qId: 3,
      question: "How much do web development services cost?",
      answer:
        "Costs vary based on the scope of work, functionality, integrations, and customization level. Every business has different needs, so pricing is project-specific.",
    },
    {
      qId: 4,
      question: "Do you build SEO-friendly websites?",
      answer:
        "Yes, we develop clean-coded, mobile-friendly, fast-loading, and SEO-optimized websites to improve rankings and visibility.",
    },
    {
      qId: 5,
      question: " Can you redesign my existing website?",
      answer:
        "Absolutely. We upgrade your UI/UX, improve loading speed, enhance security, and make your website more modern and conversion-driven.",
    },
    {
      qId: 6,
      question: "Which technologies do you use for website development?",
      answer:
        "We use React, Node.js, Laravel, WordPress, Next.js, Python, and other modern frameworks depending on project requirements.",
    },
  ];

  const handleChange = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service");
  };

  return (
    <>
      <Head> </Head>
      <HeroSection
        title="Build Scalable, Modern Websites That Convert"
        description="Empower your business with fast, responsive, and SEO-optimized web development solutions tailored to your goals."
        shortdescription="Whether you're building a billion-dollar SaaS or a sleek e-commerce site, we architect, design, and deliver websites that outperform industry standards—every time."
        description2={false}
        // shortdescription="Whether you're building a billion-dollar SaaS or a sleek e-commerce site, we architect, design, and deliver websites that outperform industry standards—every time."
        addCounterNo={true}
        BtnPrimary={true}
        buttonText="Request a Strategy Session"
        buttonLink="/contact-us"
        buttonTarget=""
        playiconyes={true}
        buttonTextTwo="See Our Work"
        buttonlinkurlTwo="/"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={false}
        keyFeaturesList={false}
        servicesOptions={services}
        bannerimage={WebDevelopmentbanner}
        nostats={[
          { Novalue: 500, indicator: "+", label: "Projects Completed" },
          { Novalue: 50, indicator: "+", label: "Expert Developer" },
          { Novalue: 100, indicator: "+", label: "Industries Served" },
        ]}
      />

      {/* What We Do – Powerful Web Development Capabilities Start */}
      <section id="services" className="py-16 px-6 bgblue1">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              What We Do – Powerful Web Development Capabilities
            </h2>
            {/* <p className="text-center mb-10 max-w-full md:max-w-[55%] mx-auto">We understand the pain points that frustrate users and hurt your business.Let us solve these challenges for you.</p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {PowerfulWebDevelopment?.map((carddata, index) => (
              <CardContainerBorder
                key={index}
                index={index}
                carddata={carddata}
                bgadd="bgwhite"
                borderadd="borderpx"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[4px]"
                shadowadd="shadow1"
                IconbgColor={BgColors[index % BgColors.length]}
                roundcorner="rounded-full"
                desminheight="min-h-[55px]"
                lineclamp="line-clamp-2"
              />
            ))}
          </div>
        </div>
      </section>
      {/* End What We Do – Powerful Web Development Capabilities */}

      <Trusted
        bgcolorchange="bgwhite"
        titlecolor="textblack"
        subtitlecolor="textblack"
        title="Our Clients"
        subtitle="Empowering Your Success, Every Step of the Way."
      />

      {/* Process section */}
      <section className="py-16 px-6 bgblue1">
        {/* Heading */}
        <div className="container m-auto mb-6">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              Our Development Process – Agile, Transparent, Proven
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[75%] mx-auto">
              Real projects, real results. See how we've helped businesses
              successful mobile applications that drive growth and user
              engagement.
            </p>
          </div>
        </div>
        {/* DESKTOP (Show only on large)    */}
        <div
          className="relative bg-cover bg-center max-w-[1154px] m-auto py-16 px-6 hidden lg:block"
          style={{ backgroundImage: "url('/assets/img/servicebg.svg')" }}
        >
          <div className="grid grid-cols-5 gap-8 text-center text-blue px-2">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="text-teal-500 w-28 h-28 flex items-center justify-center flex-col gap-2">
                <div className="w-11 h-11 p-2 bgblue7 flex items-center justify-center rounded-full">
                  <Search size={22} className="text-white" />
                </div>
                <p className="subtext text-black !leading-[20px]">
                  Discovery & Strategy
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="text-teal-500 w-28 h-28 flex items-center justify-center flex-col gap-2">
                <div className="w-11 h-11 p-2 bgblue7 flex items-center justify-center rounded-full">
                  <Component size={22} className="text-white" />
                </div>
                <p className="subtext text-black !leading-[20px]">
                  UI/UX Design
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="text-teal-500 w-28 h-28 flex items-center justify-center flex-col gap-2">
                <div className="w-11 h-11 p-2 bgblue7 flex items-center justify-center rounded-full">
                  <Code size={22} className="text-white" />
                </div>
                <p className="subtext text-black !leading-[20px]">
                  Agile Development
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="text-teal-500 w-28 h-28 flex items-center justify-center flex-col gap-2">
                <div className="w-11 h-11 p-2 bgblue7 flex items-center justify-center rounded-full">
                  <TestTube size={22} className="text-white" />
                </div>
                <p className="subtext text-black !leading-[20px]">
                  Quality Assurance
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center">
              <div className="text-teal-500 w-28 h-28 flex items-center justify-center flex-col gap-2">
                <div className="w-11 h-11 p-2 bgblue7 flex items-center justify-center rounded-full">
                  <Rocket size={22} className="text-white" />
                </div>
                <p className="subtext text-black !leading-[20px]">
                  Launch & Optimization
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE/TABLET VERTICAL VERSION  */}
        <div className="lg:hidden max-w-[600px] mx-auto space-y-8">
          {[
            {
              icon: <Search size={22} className="text-white" />,
              title: "Discovery & Strategy",
            },
            {
              icon: <Component size={22} className="text-white" />,
              title: "UI/UX Design",
            },
            {
              icon: <Code size={22} className="text-white" />,
              title: "Agile Development",
            },
            {
              icon: <TestTube size={22} className="text-white" />,
              title: "Quality Assurance",
            },
            {
              icon: <Rocket size={22} className="text-white" />,
              title: "Launch & Optimization",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white rounded-xl shadow-md p-4"
            >
              <div className="w-12 h-12 bgblue7 flex items-center justify-center rounded-full">
                {step.icon}
              </div>
              <p className="subtext text-black  text-lg font-medium">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="mb-9 text-center">
            We Engineer Experiences, Not Just Websites
          </h2>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="gradient-frame">
              <div className="flex flex-col justify-between h-full rounded-[8px] p-[22px] bg-[linear-gradient(178.97deg,#9DFEE5_0.99%,#FFFFFF_99.25%)]">
                <div className="w-11 h-11 p-2 bg-[#27A483] rounded-full flex items-center justify-center mb-4">
                  <LayoutGrid size={22} className="text-white" />
                </div>
                <h3 className="!text-[24px] !leading-[30px] mb-4">
                  UI/UX Design that Boosts Conversions by up to 58%
                </h3>
                <p className="subtext textgray">
                  Built using insights, user psychology, and behavioral design
                  principles that guide users toward key actions while creating
                  memorable brand experiences.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-frame">
              <div className="flex flex-col justify-between h-full rounded-[8px] p-[22px] bg-[linear-gradient(178.97deg,#9DFEE5_0.99%,#FFFFFF_99.25%)]">
                <div className="w-11 h-11 p-2 bg-[#27A483] rounded-full flex items-center justify-center mb-4">
                  <ChevronsLeftRight size={22} className="text-white" />
                </div>
                <h3 className="!text-[24px] !leading-[30px] mb-4">
                  Full Stack Development
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Frontend, backend, and DevOps-all covered by elite developers
                  who write clean, maintainable code and build scalable
                  architectures that grow with your business.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-frame">
              <div className="flex flex-col justify-between h-full rounded-[8px] p-[22px] bg-[linear-gradient(178.97deg,#9DFEE5_0.99%,#FFFFFF_99.25%)]">
                <div className="w-11 h-11 p-2 bg-[#27A483] rounded-full flex items-center justify-center mb-4">
                  <Gpu size={22} className="text-white" />
                </div>
                <h3 className="!text-[24px] !leading-[30px] mb-4">
                  Tech Technologies We Use
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Angular",
                    "Node.js",
                    "Laravel",
                    "AWS",
                    "WordPress",
                    "Next.js",
                    "Figma",
                    "Docker",
                    "Stripe",
                    "Tailwind",
                    "+more",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-[#0D614B] text-[14px] ptextcolor"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* industries we serve  */}
      <section className="py-16 px-6 bgblue3">
        <div className="container mx-auto">
          <h2 className="mb-9 text-center">Industries we serve</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            {Industriesweserveimagedata?.map((service, index) => (
              <CardContainer
                key={index}
                index={index}
                service={service}
                bgadd="bggray1"
                borderadd="border1px"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[10px]"
                shadowadd="shadow"
                IconbgColor={BgColors[index % BgColors.length]}
                roundcorner="rounded-full"
                desminheight="h-full"
                lineclamp="line-clamp-none"
                ctaType="none"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Success story */}
      <section className="px-6 bgblue1 py-16">
        <div className="container mx-auto">
          <SuccessStory
            title="Our Success Story"
            subtitle="Real projects, real results. See how we’ve helped businesses transform their ideas into successful mobile applications that drive growth and user engagement."
            caseStudies={SucessStoryDataWeb}
          />
        </div>
      </section>

      <CTB stats={statsData} />

      {/* Why Choose Us */}
      <section className="px-6 py-16">
        <div className="container mx-auto">
          <WhyChooseUs
            heading="What Sets Us Apart"
            subheading="We don't just build apps – we create digital experiences that transform businesses and delight users.  Here’s what makes LogZero Technologies different."
            stats={statData}
            features={featuresData}
          />
        </div>
      </section>

      <section className="px-6 pb-16 bgblue1">
        <CTA
          title="Experience The LogZero Difference"
          description="Join hundreds of satisfied clients who chose excellence. Let’s build
          something amazing together."
          linkUrl="/contact-us"
          ctabtnType="primary"
          linkText="Start Your Project"
        />
      </section>

      {/* Testimony section */}
      <section className="py-16 px-6 bgwhite">
        <div className="container mx-auto">
          <Testimonials
            title="See Why Our Clients Trust Us"
            subtitle="Discover how our solutions have helped clients achieve success. Hear their stories and experiences with our services."
            testimonials={testimonialsOne}
          />
        </div>
      </section>

      {/* Book session section */}
      <ContactUsForm
        heading="Still Thinking? Book a Free Strategy Session."
        subheading="Talk to a senior strategist. No obligations, no hard sell—just insights."
        contactCardTitle="Let’s Start a Conversation"
        contactText="We’re here to answer your questions and discuss how we can bring your  vision to life. Reach out to us through any of the following channels."
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

      <FAQSection
        title="FAQs"
        subtitle=""
        faqs={faqs}
        sectionBg="#F2F7FC"
        cardBg="#042C21"
      />
    </>
  );
};

export default Services;
