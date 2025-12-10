"use client";
import Link from "next/link";
import { useContext, useState, useRef, useEffect } from "react";
import { Lztallcontext } from "@/context/Lztcontext";
import CardContainerBorder from "@/components/CardContainerBorder";
import CTA from "@/components/CTA";
import Trusted from "@/components/Trusted";
import CardContainer from "@/components/CardContainer";
import FAQSection from "@/components/FAQSection";
import {
  FolderSync,
  Box,
  Users,
  FileCog,
  Headset,
  Diamond,
  Phone,
  Mail,
  MapPin,
  Clock,
  LayoutGrid,
  Search,
  ShieldEllipsis,
  FileScan,
  Send,
} from "lucide-react";
import SuccessStory from "@/components/SucessStory";
import Testimonials from "@/components/Testimonials";
import HeroSection from "@/components/HeroSection";
import Head from "./head";
import ContactUsForm from "@/components/ContactUsForm";

function ChevronDownIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

function CounterValue({ value, duration = 1200 }) {
  const parse = (raw) => {
    const s = String(raw).trim();
    const m =
      s.match(
        /^([+\-₹$€£]*)\s*([0-9]*\.?[0-9]+)\s*([KMB]?)\s*(\+)?\s*([%xX]?)$/
      ) || [];
    const [, prefix = "", num = "0", abbr = "", plus = "", tail = ""] = m;

    const decimals = (num.split(".")[1] || "").length;

    return {
      prefix,
      target: parseFloat(num || "0"),
      abbr,
      showPlus: !!plus,
      tail,
      decimals,
    };
  };

  const { prefix, target, abbr, showPlus, tail, decimals } = parse(value);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef();

  useEffect(() => {
    const start = performance.now();
    const animate = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const p = 1 - Math.pow(1 - t, 3); // ease out
      setDisplay(target * p);
      if (t < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  const formatted =
    (prefix || "") +
    (decimals ? display.toFixed(decimals) : Math.round(display)) +
    (abbr || "") +
    (showPlus ? "+" : "") +
    (tail || "");

  return <>{formatted}</>;
}
const shouldSkipCounter = (v) =>
  String(v).includes("/") || String(v).toLowerCase().includes("hrs");

const BgColors = [
  "bgblue",
  "peachgreen",
  "bggreen",
  "peachgreen-100",
  "bgorange-100",
  "bgred-100",
  "bgdarkgreen",
];

const BgColors2 = [
  "bgblue",
  "peachgreen",
  "bggreen",
  "bgpurpal",
  "bgorange",
  "bgred-100",
];

const Gradients = [
  "gradient1",
  "gradient2",
  "gradient3",
  "gradient4",
  "gradient5",
  "gradient6",
];

const statData = [
  { value: "150+", label: "Developers" },
  { value: "500+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const featuresData = [
  {
    icon: <FolderSync size={20} className="text-white" />,
    title: "Tailored Solutions",
    description:
      "We craft customized mobile apps tailored to your unique business requirements and goals.",
    highlight: "Custom-built for your success.",
  },
  {
    icon: <Users size={20} className="text-white" />,
    title: "Dedicated Team",
    description:
      "Our team of experts works alongside you at every stage, ensuring your vision is realized.",
    highlight: "Your success is our mission.",
  },
  {
    icon: <FileCog size={20} className="text-white" />,
    title: "Transparency",
    description:
      "Clear communication and regular updates throughout the development process keep you informed.",
    highlight: "No surprises, complete visibility.",
  },
  {
    icon: <Diamond size={20} className="text-white" />,
    title: "Proven Track Record",
    description:
      "Success stories from clients across various industries speak to our expertise and reliability.",
    highlight: "500+ successful projects delivered.",
  },
  {
    icon: <Headset size={20} className="text-white" />,
    title: "Post-Launch Support",
    description:
      "We provide continuous support and app optimization to keep your app relevant and running smoothly.",
    highlight: "Partnership that lasts beyond launch.",
  },
];

const faqs = [
  {
    question: "What factors affect the time required to develop a mobile app?",
    answer:
      "It depends on app type, features, complexity, platform choice, and design requirements.",
  },
  {
    question: "How much does mobile app development cost?",
    answer:
      "Cost varies based on app features, technology stack, integrations, and custom requirements.",
  },
  {
    question: "Do you build apps for both Android and iOS?",
    answer:
      "Yes, we develop native apps, cross-platform apps and others using the latest tools and frameworks.",
  },
  {
    question: "What is the difference between native and hybrid apps?",
    answer:
      "Native apps are built specifically for one platform and offer strong performance.Hybrid/cross-platform apps work on both platforms and offer faster development with shared code.",
  },
  {
    question: "Do you assist with app launches on Play Store and App Store?",
    answer:
      "Yes, we assist with deployment, store listing, optimization, and approval processes.",
  },
  {
    question: "Do you offer app maintenance after development?",
    answer:
      "Yes, we provide ongoing support, updates, bug fixes, and performance monitoring as per your needs.",
  },
];

const MobileappSucessStoryData = [
  {
    title:
      "Enhancing Home Interior Projects with InteriorChowk’s Comprehensive Marketplace",
    subtitle: "Home Interior Solutions & Services Marketplace",
    challenge:
      "Homeowners struggled with fragmented service providers, lack of trust, limited access to quality materials, and complex coordination during home interior projects.",
    solution:
      "InteriorChowk developed a single mobile app connecting homeowners with verified designers, skilled workers, and premium suppliers—offering a seamless platform for design, sourcing, and project management.",
    Resultstext:
      "Streamlined project workflows, improved customer satisfaction, higher trust through verified professionals, faster execution, and easy access to top-quality materials.",
    technologies: ["PHP", " Laravel", "MySQL", " Flutter"],
    image: "/assets/img/health-tracker.png",
    width: 564,
    height: 323,
    link: "https://www.logzerotechnologies.com/case-studies/enhancing-home-interior-projects-with-interiorchowks-comprehensive-marketplace/",
  },
  {
    title: "ADPKD Urination-Tracking App for Tolvaptan Patients",
    subtitle: "Healthcare, Pharmaceuticals",
    challenge:
      "The challenge was to create a solution that enables patients to easily and consistently track their urination patterns.",
    solution:
      "A Flutter app was developed for real-time urination tracking with set reporting times, followed by user feedback to refine the app for future trials.",
    Resultstext:
      "Higher data completeness and accuracy than self-reports, strong usability feedback, and clearer side-effect patterns to guide care.",
    technologies: ["Flutter", "PHP (Laravel)", "React.js", "MySQL"],
    image:
      "/assets/img/ADPKD Urination-Tracking App for Tolvaptan Patients- Case Study.webp",
    width: 564,
    height: 383,
    link: "https://www.logzerotechnologies.com/case-studies/improving-patient-experience-adpkd-treatment-urination-tracking-app/",
  },
];

const statsData2 = [
  {
    value: "99%",
    title: "Client Satisfaction",
    description: "Based on project completion surveys",
  },
  {
    value: "48hrs",
    title: "Response Time",
    description: "Average support ticket resolution",
  },
  {
    value: "100%",
    title: "On-Time Delivery",
    description: "Project completion within agreed timeline",
  },
];

const StatCard = ({ value, title, description }) => {
  const v = String(value);
  const skipCounter = v.includes("/") || v.toLowerCase().includes("hrs"); // e.g., "24/7", "48hrs"

  return (
    <div className="bg-[#F1F6FB] rounded-xl p-8 text-center transition-colors duration-300 ease-in-out transition-transform hover:scale-104">
      <p className="subheading-5 text-[#5BC2A7]">
        {skipCounter ? value : <CounterValue value={value} />}
      </p>
      <h3 className="subheading-2  text-[#1E293B] mt-4">{title}</h3>
      <p className="text-[#64748B] mt-2 subtext-2">{description}</p>
    </div>
  );
};

export default function MobileDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    ChallengesMobileApp,
    MobileAppDevelopment,
    TailoredAppSolutions,
    IndustryFocusedMobile,
    testimonialsOne,
    SucessStoryData,
  } = useContext(Lztallcontext);
  console.log(ChallengesMobileApp, MobileAppDevelopment);

  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    "Mobile App Design",
    "Mobile App Integration",
    "Testing & QA",
    "Maintenance & Support",
    "Mobile App Transformation",
    "Redesign Your Mobile App",
  ];

  return (
    <>
      <Head> </Head>
      <HeroSection
        title="Custom Mobile App Development for Android & iOS"
        description="From concept to launch, we build mobile apps that deliver performance, usability, and business growth"
        description2={false}
        // shortdescription="Whether you're building a billion-dollar SaaS or a sleek e-commerce site, we architect, design, and deliver websites that outperform industry standards—every time."
        addCounterNo={true}
        BtnPrimary={true}
        buttonText="Request Free Consultation"
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo="Watch Demo"
        buttonlinkurlTwo="/"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={false}
        keyFeaturesList={false}
        servicesOptions={services}
        bannerimage="/assets/img/mobile-app-banner.webp"
        nostats={[
          { Novalue: 250, indicator: "+", label: "Apps Delivered" },
          { Novalue: 150, indicator: "+", label: "Happy Clients" },
          { Novalue: 99, indicator: "%", label: "Success Rate" },
        ]}
      />

      {/* <Trusted /> */}
      <Trusted
        bgcolorchange=""
        titlecolor="textblack"
        subtitlecolor="textblack"
        title="Trusted by Leading Companies"
        subtitle="We’ve partnered with industry leaders to deliver exceptional mobile experiences."
      />

      {/* Challenges Mobile App Users Face Start */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2 text-center">
            <h2 className="mb-4">Challenges Mobile App Users Face</h2>
            <p className="max-w-full md:max-w-[55%] mx-auto">
              We understand the pain points that frustrate users and hurt your
              business. Let us solve these challenges for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {ChallengesMobileApp?.map((carddata, index) => (
              <CardContainerBorder
                key={index}
                index={index}
                carddata={carddata}
                bgadd="bgwhite"
                borderadd="border1px"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[10px]"
                shadowadd="shadow"
                IconbgColor={BgColors[index % BgColors.length]}
                roundcorner="rounded-full"
                desminheight="min-h-[55px]"
                lineclamp="line-clamp-2"
              />
            ))}
          </div>
        </div>
      </section>
      {/* End Challenges Mobile App Users Face */}

      {/* Our Seamless Development Process */}
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
                  <Box size={22} className="text-white" />
                </div>
                <p className="subtext text-black !leading-[20px]">
                  Development
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="text-teal-500 w-28 h-28 flex items-center justify-center flex-col gap-2">
                <div className="w-11 h-11 p-2 bgblue7 flex items-center justify-center rounded-full">
                  <ShieldEllipsis size={22} className="text-white" />
                </div>
                <p className="subtext text-black !leading-[20px]">Testing</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="text-teal-500 w-28 h-28 flex items-center justify-center flex-col gap-2">
                <div className="w-11 h-11 p-2 bgblue7 flex items-center justify-center rounded-full">
                  <FileScan size={22} className="text-white" />
                </div>
                <p className="subtext text-black !leading-[20px]">Deployment</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center">
              <div className="text-teal-500 w-28 h-28 flex items-center justify-center flex-col gap-2">
                <div className="w-11 h-11 p-2 bgblue7 flex items-center justify-center rounded-full">
                  <Headset size={22} className="text-white" />
                </div>
                <p className="subtext text-black !leading-[20px]">Support</p>
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
              icon: <Box size={22} className="text-white" />,
              title: " Development",
            },
            {
              icon: <ShieldEllipsis size={22} className="text-white" />,
              title: "Testing",
            },
            {
              icon: <FileScan size={22} className="text-white" />,
              title: " Deployment",
            },
            {
              icon: <Headset size={22} className="text-white" />,
              title: "Support",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white rounded-xl shadow-md p-4"
            >
              <div className="w-12 h-12 bgblue7 flex items-center justify-center rounded-full">
                {step.icon}
              </div>
              <p className="subtext text-black text-lg font-medium">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 mt-16">
        <CTA
          title="Don’t Let These Issues Hold Back Your Success"
          description="Partner with LogZero Technologies to overcome these challenges and deliver exceptional mobile experiences."
          linkUrl="/contact-us"
          ctabtnType="primary"
          linkText="Start Your Project Today"
        />
      </section>

      {/* Start Comprehensive Mobile App Development Services */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              Comprehensive Mobile App Development Services
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto">
              From concept to deployment and beyond, we provide end-to-end
              mobile development solutions that drive business growth and user
              satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {MobileAppDevelopment?.map((service, index) => (
              <CardContainer
                key={index}
                index={index}
                service={service}
                bgadd={Gradients[index % Gradients.length]}
                borderadd="border1px"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[10px]"
                shadowadd="shadow"
                IconbgColor={BgColors2[index % BgColors2.length]}
                roundcorner="rounded-full"
                desminheight="min-h-[80px]"
                lineclamp="line-clamp-3"
                ctaType="none"
              />
            ))}
          </div>
        </div>
      </section>
      {/* End Comprehensive Mobile App Development Services Section */}

      {/* What Sets Us Apart */}
      <section className="bgblue1 py-16 px-6">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="mb-4">What Sets Us Apart</h2>
            <p className="max-w-full md:max-w-[75%] mx-auto">
              We don’t just build apps – we create digital experiences that
              transform businesses and delight users. Here’s what makes Logzero
              Technologies different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Stats */}
            <div className="grid w-full bgblue7 text-white rounded-lg px-5 py-10">
              <div className="grid w-full lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-6 text-white">
                {statData.map((stat, index) => {
                  const skipCounter = String(stat.value).includes("/"); // ✅ skip 24/7

                  return (
                    <div
                      key={index}
                      className="bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-md gap-2 w-full flex flex-col items-start justify-center text-left px-4 py-3 shadow2 hover:bg-[#53b39a]"
                    >
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        {skipCounter ? (
                          stat.value
                        ) : (
                          <CounterValue value={stat.value} />
                        )}
                      </span>
                      <p className="text-base sm:text-lg">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Award block */}
              <div className="w-full mt-4 text-center">
                <h2 className="mt-4 textwhite">Award-Winning Excellence</h2>
                <p className="mt-2 subtext !mb-0">
                  Recognized by industry leaders for innovation and quality.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6 pl-5">
              {featuresData.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-[56px] h-[56px] p-3 bgblue7 flex items-center justify-center rounded-full hover:scale-105 transition-transform duration-200">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <p className="subtext subtextcolor">{item.description}</p>
                    <h4>{item.title}</h4>
                    <p className="mt-2 italic text-[var(--link-color)] py-1">
                      {item.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Start Tailored App Solutions for Every Need */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              Tailored App Solutions for Every Need
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto">
              Whether you need a native iOS app, cross-platform solution, or
              enterprise-grade application, we have the expertise to bring your
              vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            {TailoredAppSolutions?.map((service, index) => (
              <CardContainer
                key={index}
                index={index}
                service={service}
                bgadd="bggray1"
                borderadd="border1px"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[4px]"
                shadowadd="shadow"
                IconbgColor={BgColors2[index % BgColors2.length]}
                roundcorner="rounded-full"
                desminheight="min-h-[80px]"
                lineclamp="line-clamp-3"
                ctaType="none"
              />
            ))}
          </div>
        </div>
      </section>
      {/* End Tailored App Solutions for Every Need */}

      <section className="px-6">
        <CTA
          title="Ready to Start Your Project?"
          description="Let’s discuss your requirements and create a custom development plan that fits your timeline and budget."
          linkUrl="/contact-us"
          linkText="Schedule Free Consultation"
          linkUrl2="/portfolio"
          linkText2="View Our Portfolio"
          ctabtnType="both"
        />
      </section>

      {/* Start Industry-Focused Mobile Applications */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              Industry-Focused Mobile Applications
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto">
              We specialize in creating tailored mobile solutions for diverse
              industries, each with unique requirements and user expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            {IndustryFocusedMobile?.map((service, index) => (
              <CardContainer
                key={index}
                index={index}
                service={service}
                bgadd="bggray1"
                borderadd="border1px"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[4px]"
                shadowadd="shadow"
                IconbgColor={BgColors2[index % BgColors2.length]}
                roundcorner="rounded-full"
                desminheight="min-h-[80px]"
                lineclamp="line-clamp-3"
                ctaType="none"
              />
            ))}
          </div>
        </div>
      </section>
      {/* End Industry-Focused Mobile Applications */}

      {/* CTA section */}
      <section className="px-6">
        <div className="container bgsecondary text-white text-left rounded-[8px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="mb-4 !text-white">Don’t See Your Industry?</h2>
            <p className="w-full sm:max-w-full md:max-w-[75%]">
              We work with businesses across all sectors. Our flexible approach
              allows us to adapt to any industry’s specific needs and
              regulations.
            </p>
            <ul className="space-y-1 mt-6 list-disc pl-[20px] subtext">
              <li className="">E-commerce & Retail</li>
              <li className="">Education & E-learning</li>
              <li className="">Real Estate & Property</li>
              <li className="">Food & Restaurant</li>
            </ul>
          </div>
          <div className="flex-shrink-0 pr-6">
            <Link
              href="/industry"
              className="inline-block bluenew text-white font-semibold text-[15px] leading-[22px] font-inter px-[24px] py-[17px] rounded-full transition-all duration-300 hover:bg-[#fff] text-center  hover:shadow-md transition-transform hover:scale-107"
            >
              Discuss Your Industry Needs
            </Link>
          </div>
        </div>
      </section>

      {/* Success story */}
      <section className="px-6 bgwhite py-16">
        <div className="container mx-auto">
          <SuccessStory
            title="Our Success Story"
            subtitle="Real projects, real results. See how we’ve helped businesses transform their ideas into successful mobile applications that drive growth and user engagement."
            caseStudies={MobileappSucessStoryData}
          />
        </div>
      </section>

      {/* CTA section */}
      <section className="px-6">
        <CTA
          title="Want to Be Our Next Success Story?"
          description="Let’s discuss how we can help you achieve similar results with your mobile app project."
          linkUrl="/portfolio"
          ctabtnType="primary"
          linkText="Start Your Success Story"
        />
      </section>

      <section className=" py-16 px-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statsData2.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                title={stat.title}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimony section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Testimonials
            title="See Why Our Clients Trust Us"
            subtitle="Discover how our solutions have helped clients achieve success. Hear their stories and experiences with our services."
            testimonials={testimonialsOne}
          />
        </div>
      </section>

      {/* CTA section */}
      <section className="px-6 pb-16">
        <CTA
          title="Ready to join our success stories?"
          description="Let’s discuss how we can help you create a mobile app that your customers will love and that drives real business results."
          linkUrl="/contact-us"
          ctabtnType="primary"
          linkText="Get your free consultation"
        />
      </section>

      {/* Contact US form */}
      <ContactUsForm
        heading="Get In Touch"
        subheading="Ready to transform your mobile app idea into reality? Let’s discuss your project and see how we can help you achieve your goals."
        contactCardTitle="Let’s Start a Conversation"
        contactText="We’re here to answer your questions and discuss how we can bring your mobile app vision to life. Reach out to us through any of the following channels."
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

      {/* faq */}
      <FAQSection
        title="FAQs"
        subtitle=""
        faqs={faqs}
        sectionBg="#ffffff"
        cardBg="#042C21"
      />
    </>
  );
}
