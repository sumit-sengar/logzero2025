"use client";
import { useContext, React, useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { Lztallcontext } from "@/context/Lztcontext";
import CardContainer from "@/components/CardContainer";
import GreenButton from "@/components/GreenButton";
import SuccessStory from "@/components/SucessStory";
import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Head from "./head";
import ContactUsForm from "@/components/ContactUsForm";
import {
  Users,
  Shield,
  TrendingUp,
  FolderKanban,
  Headset,
  Search,
  Rocket,
  Palette,
  Code,
  Star,
  Zap,
  Crown,
  Check,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Settings,
  Database,
  Smartphone,
  Cloud,
} from "lucide-react";

export default function Mission() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    Comprehensive,
    logServices,
    SucessStoryData,
    Banner4,
    techStack,
    tech,
    faq2,
  } = useContext(Lztallcontext);
  console.log(
    Comprehensive,
    logServices,
    SucessStoryData,
    Banner4,
    techStack,
    tech,
    faq2
  );

  const BgColors = [
    "bgblue",
    "peachgreen",
    "bggreen",
    "bgpurpal",
    "bgorange",
    "bgred-100",
  ];
  const BgColors2 = [
    "bg-[#DBEAFE]",
    "bg-[#CCFBF1]",
    "bg-[#F3E8FF]",
    "bg-[#FEE2E2]",
    "bg-[#FFEDD5]",
    "bg-[#DCFCE7]",
  ];
  const BgColors4 = ["bg-[#D2FAF3]"];

  const cards = [
    {
      Icon: Users,
      title: "Expert Team",
      desc: "Experienced developers and engineers",
    },
    {
      Icon: Shield,
      title: "Secure Solutions",
      desc: "Enterprise-grade security standards",
    },
    {
      Icon: TrendingUp,
      title: "Scalable Growth",
      desc: "Solutions that grow with your business",
    },
  ];

  const stats = [
    {
      Icon: FolderKanban,
      title: "Projects Delivered",
      desc: "Across various industries",
      Novalue: 1000,
      indicator: "+",
    },
    {
      Icon: Users,
      title: "Client Satisfaction",
      desc: "Based on client feedback",
      Novalue: 98,
      indicator: "%",
    },
    {
      Icon: Headset,
      title: "24/7 Support",
      desc: "Ongoing maintenance & update",
      Novalue: null, // no counter in this one
    },
  ];

  const CTB = [
    {
      value: "500+",
      label: "Projects Completed",
    },
    {
      value: "98%",
      label: "Client Retention Rate",
    },
    {
      value: "50+",
      label: "Industries Served",
    },
    {
      value: "24/7 ",
      label: "Support Available",
    },
  ];

  const plans = [
    {
      name: "Basic Package",
      description:
        "Ideal for small businesses or startups needing simple web apps or mobile applications.",
      highlight: "Starting at $2,500",
      topBgClass: "bg-[#E1FCEA]",
      topTextClass: "text-[#19AA4E]",
      iconBgClass: "bg-[#19AA4E]",
      iconTextClass: "text-white",
      topCheckClass: "text-[#5BC2A7]",
      borderClass: "border-[var(--bg-blue-700)]",
      Icon: Star,
      features: [
        "Simple web or mobile application",
        "Basic UI/UX design",
        "Standard database integration",
        "3 months maintenance included",
        "Email support",
        "Basic security features",
        "Responsive design",
        "Source code delivery",
      ],
    },
    {
      name: "Professional Package",
      description:
        "Perfect for mid-sized businesses requiring custom-built software or enterprise solutions.",
      highlight: "Starting at $5,000",
      topBgClass: "bg-[#DEECFE]",
      topTextClass: "text-[#0A77FF]",
      iconBgClass: "bg-[#0A77FF]",
      iconTextClass: "text-white",
      topCheckClass: "text-[#5BC2A7]",
      borderClass: "border-[#5BC2A7]",
      Icon: Zap,
      features: [
        "Custom software development",
        "Advanced UI/UX design",
        "Complex database architecture",
        "6 months maintenance included",
        "Priority phone & email support",
        "Advanced security features",
        "Third-party integrations",
        "Performance optimization",
        "Admin panel included",
        "Cloud deployment assistance",
      ],
    },
    {
      name: "Enterprise Package",
      description:
        "Tailored for large businesses needing complex, scalable software with extensive support and integration.",
      highlight: "Starting at $20,000",
      highlightColor: "text-[#19AA4E]",
      topBgClass: "bg-[#F4EAFF]",
      topTextClass: "text-[#983CED]",
      iconBgClass: "bg-[#983CED]",
      iconTextClass: "text-white",
      topCheckClass: "text-[#5BC2A7]",
      borderClass: "border-red",
      Icon: Crown,
      features: [
        "Enterprise-grade software solutions",
        "Custom architecture design",
        "Microservices architecture",
        "12 months maintenance included",
        "24/7 dedicated support",
        "Enterprise security compliance",
        "Multiple system integrations",
        "Load balancing & scaling",
        "Custom reporting dashboard",
        "DevOps & CI/CD pipeline",
        "Staff training included",
        "Dedicated project manager",
      ],
    },
  ];

  function CounterValue({ value, duration = 1200 }) {
    const raw = String(value).trim();

    if (raw.includes("/")) return <>{raw}</>;

    const m = raw.match(/^([^\d.\s]+)?\s*([0-9]*\.?[0-9]+)\s*([^\d.\s]+)?$/);
    if (!m) return <>{raw}</>;

    const prefix = m[1] || "";
    const num = parseFloat(m[2]);
    const suffix = m[3] || "";
    const decimals = m[2].includes(".") ? m[2].split(".")[1].length : 0;

    const [display, setDisplay] = useState(0);
    const rafRef = useRef();

    useEffect(() => {
      const start = performance.now();
      const animate = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(num * eased);
        if (t < 1) rafRef.current = requestAnimationFrame(animate);
      };
      rafRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(rafRef.current);
    }, [num]);

    return (
      <>
        {prefix}
        {decimals ? display.toFixed(decimals) : Math.round(display)}
        {suffix}
      </>
    );
  }

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [showMore, setShowMore] = useState(false);

  const services = [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "Enterprise Solutions",
    "Cloud-based Software Solutions",
    "Software Maintenance & Support",
  ];

  return (
    <>
      <Head> </Head>
      <HeroSection
        title="Custom Software Development Services"
        titlecolor={false}
        subtitle=""
        description="From concept to deployment and beyond, we specialise in software built to scale—secure, high-performing and aligned to your goals. "
        description2=""
        shortdescription={false}
        // shortdescription="Whether you're building a billion-dollar SaaS or a sleek e-commerce site, we architect, design, and deliver websites that outperform industry standards—every time."
        addCounterNo={false}
        BtnPrimary={true}
        playiconyes={true}
        buttonText="Get Your Free Software Consultation Today!"
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo=""
        buttonlinkurlTwo="/"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={false}
        keyFeaturesList={false}
        servicesOptions={services}
        bannerimage="/assets/img/Unlock the Power of Custom Software Development for Your Business-hero section.webp"
        nostats={[]}
      />

      {/* Trusted partner section */}
      <section className="py-16 px-6">
        <div className="container mx-auto ">
          <h2 className="text-center mb-12">
            LogZero Technologies: Your Trusted Software Development Partner
          </h2>

          <div className="flex flex-col lg:flex-row gap-14">
            <div>
              <div className="text-left ">
                <p className="text-gray-700 mb-4">
                  At LogZero Technologies, we provide end-to-end custom software
                  development services that are tailored to meet your business
                  needs. Our experienced team of developers and engineers work
                  closely with you to deliver secure, scalable, and
                  high-performance solutions.
                </p>
                <p className="text-gray-700 mb-6">
                  From web and mobile apps to complex enterprise solutions, we
                  create software that fuels your business growth and transforms
                  your operational efficiency.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-2 items-center mx-auto pt-6">
                {cards.map(({ Icon, title, desc }, i) => (
                  <div
                    key={i}
                    className="space-y-5 pt-5 flex flex-col items-center border border-[#E6E6E6] rounded-xl "
                  >
                    <div className="w-[48px] h-[48px] p-3 bg-[#0A77FF] justify-center text-white rounded-full hover:scale-105 transition-transform duration-200">
                      <Icon size={24} />
                    </div>
                    <p className="!font-semibold !text-[18px] !font-outfit mb-1">
                      {title}
                    </p>
                    <p className="!text-[14px] text-gray-600 text-center !leading-normal ">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="self-center">
              <div className="bg-[#5BC2A7] text-white md:px-20 md:py-14 px-4 py-6 rounded-xl shadow-lg lg:w-[450px]">
                <div className="space-y-6">
                  {stats.map(({ Icon, title, desc, Novalue, indicator }, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center text-emerald-500">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h5 className="font-semibold !text-white foutfit mb-1">
                          {Novalue ? (
                            <>
                              <CountUp
                                end={Novalue}
                                duration={2}
                                separator=","
                                enableScrollSpy
                              />
                              {indicator}
                            </>
                          ) : (
                            title
                          )}
                        </h5>

                        <p className="!text-[14px]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Software Development Services  */}
      <section className="pb-16 px-6 ">
        <div className="container mx-auto ">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center ">
              Comprehensive Software Development Services for Every Need
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[75%] mx-auto ">
              From concept to deployment, we offer a complete range of software
              development services designed to transform your business and drive
              digital innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
            {Comprehensive?.map((service, index) => (
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
                ctaType="secondary"
                imgheight="h-[212px]"
              />
            ))}
          </div>
          {/* <div className="flex justify-center mt-10">
            <GreenButton
              text="Explore All Our Software Development Services"
              linkurl="/"
              linktarget=""
              MoveRighticon={false}
            />
          </div> */}
        </div>
      </section>
      {/* why logzero */}
      <section className="py-16 px-6 bg-[#F2F7FC]">
        <div className="container mx-auto ">
          <div className="headingbox pb-2 md:max-w-[65%] items-center mx-auto">
            <h2 className="mb-4 text-center">
              Why LogZero is the Right Choice for Your Software Development
              Needs
            </h2>
            <p className="text-center mb-10 max-w-full mx-auto">
              Partner with us for exceptional software development that drives
              results and transforms your business operations.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {CTB.map((item, index) => {
              const raw = String(item.value).trim();
              if (raw.includes("/")) {
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 text-center flex flex-col items-center justify-center m-0 transition-colors duration-300 ease-in-out transition-transform hover:scale-104"
                  >
                    <span className="text-emerald-500 font-bold text-[32px] pt-6">
                      {item.value}
                    </span>
                    <p className="text-gray-800 text-center pt-4 !text-base">
                      {item.label}
                    </p>
                  </div>
                );
              }
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center flex flex-col items-center justify-center m-0 transition-colors duration-300 ease-in-out transition-transform hover:scale-104"
                >
                  <span className="text-emerald-500 font-bold text-[32px] pt-6">
                    <CounterValue value={item.value} />
                  </span>
                  <p className="text-gray-800 text-center pt-4 !text-base">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {logServices?.map((service, index) => (
              <CardContainer
                key={index}
                index={index}
                service={service}
                maincartrounded="rounded-[10px]"
                ctaType="false"
                IconbgColor={BgColors2[index % BgColors2.length]}
                shadowadd="shadow5"
                bordercolor=""
                roundcorner="rounded-[5px]"
                borderadd=""
                desminheight=""
                lineclamp="none"
                bgadd="bgwhite"
              />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <GreenButton
              text="Learn More About Our Expertise"
              linkurl="/about"
              linktarget=""
              MoveRighticon={false}
            />
          </div>
        </div>
      </section>
      {/* End-to-End Software Development Process */}
      <section className="px-6 py-16 bgwhite">
        <div className="container mx-auto">
          <div className="headingbox pb-2 mb-10">
            <h2 className="mb-4 text-center">
              End-to-End Software Development Process
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto">
              Our proven development methodology ensures your project is
              delivered on time, within budget, and exceeds your expectations at
              every stage.
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
                  Discovery & Planning
                </p>
                <p className="subtext subtextcolor mt-6">
                  We begin by understanding your business goals and gathering
                  detailed requirements to create a comprehensive project
                  roadmap.
                </p>
              </div>
            </div>

            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/planning.webp')] bg-cover bg-center h-[300px] md:h-[auto] order-1 md:order-2"></div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/designsd.webp')] bg-cover bg-center h-[300px] md:h-[auto]"></div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)]">
              <div className="w-12 h-12 p-2 bgblue6 rounded-[5px] flex items-center justify-center">
                <Palette size={22} className="text-[#13978B]" />
              </div>

              <div className="flex-1">
                <p className="subheading-3 mb-1 text-[#13978B] !mb-1">02</p>
                <p className="subheading-3 text-[#252525]">
                  Design & Prototyping
                </p>
                <p className="subtext subtextcolor mt-6">
                  Our design team creates intuitive, user-friendly prototypes
                  that align with your vision and brand identity.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)] order-2 md:order-1">
              <div className="w-12 h-12 p-2 bg-[#F3E8FF] rounded-[5px] flex items-center justify-center">
                <Code size={22} className="text-[#A265EE]" />
              </div>

              <div className="flex-1">
                <p className="text-[#A265EE] subheading-3 !mb-1">03</p>
                <p className="subheading-3 text-[#252525]">
                  Development & Testing
                </p>
                <p className="subtext subtextcolor mt-6">
                  Our developers use agile methodologies, delivering incremental
                  results and ensuring top-notch quality through rigorous
                  testing.
                </p>
              </div>
            </div>

            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/testing.webp')] bg-cover bg-center h-[300px] md:h-[auto] order-1 md:order-2"></div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/launch.webp')] bg-cover bg-center h-[300px] md:h-[auto]"></div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)]">
              <div className="w-12 h-12 p-2 bgblue4 rounded-[5px] flex items-center justify-center">
                <Rocket size={22} className="text-[#16A35E]" />
              </div>

              <div className="flex-1">
                <p className="subheading-3 !mb-1 text-[#16A35E]">04</p>
                <p className="subheading-3 text-[#252525]">
                  Deployment & Launch
                </p>
                <p className="subtext subtextcolor mt-6">
                  We deploy your software to the cloud or on-premise with full
                  support for a smooth, successful launch.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)] order-2 md:order-1">
              <div className="w-12 h-12 p-2 bgpurpal2 rounded-[5px] flex items-center justify-center">
                <Headset size={22} className="text-[#EB5E14]" />
              </div>

              <div className="flex-1">
                <p className="subheading-3 !mb-1 text-[#EB5E14]">05</p>
                <p className="subheading-3 text-[#252525]">
                  Maintenance & Support
                </p>
                <p className="subtext subtextcolor mt-6">
                  We continue to support and update your software, ensuring it
                  adapts to evolving business needs and technology.
                </p>
              </div>
            </div>

            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/supportsd.webp')] bg-cover bg-center h-[300px] md:h-[auto] order-1 md:order-2"></div>
          </div>

          <div className="flex justify-center mt-10">
            <GreenButton
              text="Start Your Software Development Journey Today"
              linkurl="/contact-us"
              linktarget=""
              MoveRighticon={false}
            />
          </div>
        </div>
      </section>
      {/* case study */}
      <section className="px-6 bgblue1 py-16">
        <div className="container mx-auto">
          <SuccessStory
            title="Case Studies"
            subtitle="Real projects, real results. See how we’ve helped businesses transform their ideas into successful mobile applications that drive growth and user engagement."
            caseStudies={SucessStoryData}
          />
          {/* <div className="flex justify-center mt-10">
            <GreenButton
              text="Explore Our Latest Case Studies"
              linkurl="/"
              linktarget=""
              MoveRighticon={false}
            />
          </div> */}
        </div>
      </section>
      {/* Our Impact Across All Projects */}
      <section className="bgsecondary py-16 px-6">
        <div className="container mx-auto ">
          <div className="text-center max-w-5xl mx-auto pb-5 ">
            <h2 className=" !text-white ">Our Impact Across All Projects</h2>
            <p className="my-3 text-white  ">
              Consistent results that drive business growth and operational
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {Banner4.map((p) => {
              const Icon = p.Icon;
              return (
                <article
                  key={p.id}
                  className="border border-solid [border-image-slice:1] !border-[#FFFFFF33]
              p-5 items-center rounded-xl
              bg-[#163B31] flex flex-col m-0 transition-colors duration-300 
              ease-in-out transition-transform hover:scale-104"
                >
                  <div className=" mb-4">
                    <div
                      className={`${p.colorClass} w-14 h-14 rounded-full flex items-center justify-center`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>

                  <div className="text-center">
                    <h2 className="!text-white">
                      <CounterValue value={p.title} />
                    </h2>

                    <p className="mt-3 subheading-3 !text-white !font-normal ">
                      {p.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {/* Flexible Software Development Plans */}
      {/* <section className="py-16 px-6 bg-[#F2F7FC]">
        <div className="container mx-auto max-w-7xl">
          <div className="headingbox pb-2 mb-10">
            <h2 className="mb-4 text-center ">
              Flexible Software Development Plans
              <br className="hidden sm:block" /> to Fit Your Needs
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[75%] mx-auto">
              Choose the perfect package for your business requirements. All
              plans include consultation, development, testing, and deployment
              with ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => {
              const Icon = plan.Icon;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border ${plan.borderClass}  overflow-hidden flex flex-col`}
                >
                 
                  <div className={`${plan.topBgClass} p-6 `}>
                    <div
                      className={`p-3 rounded-lg inline-block ${plan.iconBgClass} mb-4`}
                    >
                      <Icon
                        className={`h-6 w-6 ${
                          (plan.topTextClass, plan.iconTextClass)
                        }`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                    <p className="subtext subtextcolor mb-3">
                      {plan.description}
                    </p>
                    <p
                      className={`subheading-4 font-bold ${plan.topTextClass}`}
                    >
                      {plan.highlight}
                    </p>
                  </div>

                 
                  <div className="bg-white p-3 md:p-5 flex flex-col flex-1 ">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check
                            className={`h-5 w-5 shrink-0 ${plan.topCheckClass}`}
                          />
                          <span className="text-gray-700 subtext">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                 
                    <div className=" mt-auto">
                      <GreenButton
                        text="Choose This Plan"
                        linkurl="/"
                        linktarget=""
                        MoveRighticon={false}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
      {/* CTA */}
      <section className="px-6 py-16">
        <CTA
          title="Need a Custom Quote?"
          description="Every business is unique. If none of our standard packages fit your specific requirements, we'd be happy to create a custom solution tailored just for you."
          linkUrl="/contact-us"
          ctabtnType="primary"
          linkText="Get Custom Quote Schedule Consultation"
        />
      </section>
      {/* Advanced Technologies for Robust  */}
      <section className="py-16 px-6 bg-[#F2F7FC]">
        <div className="container mx-auto max-w-7xl">
          <div className="headingbox pb-2 mb-10">
            <h2 className="mb-4 text-center">
              Advanced Technologies for Robust Software Development
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[75%] mx-auto">
              We leverage cutting-edge technologies and industry best practices
              to build scalable, secure, and high-performance software
              solutions.
            </p>
          </div>

          {/* Tech Grid with Slider */}
          <div className="bg-white">
            <h3 className="text-center subheading-4 pt-10 pb-6">
              Featured Technologies We Excel In
            </h3>

            <div className="relative px-6 pb-8">
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={2}
                spaceBetween={12}
                loop
                autoplay={{
                  delay: 2000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }}
                speed={900}
                breakpoints={{
                  640: { slidesPerView: 4 },
                  768: { slidesPerView: 6 },
                  1024: { slidesPerView: 8 },
                }}
              >
                {techStack.map((tech, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col max-h-[114px] items-center justify-center  rounded-lg p-2 ">
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={104}
                        height={104}
                        className=""
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {/* Card 1 */}
            <div className="flex flex-col bg-white border border-[#E6E6E6] rounded-[10px] transition-transform hover:scale-105">
              <div className="p-5 flex flex-col gap-4 flex-grow">
                <div className="w-12 h-12 p-2 bg-[#D2FAF3] rounded-[5px] flex items-center justify-center">
                  <Code size={24} className="text-[#13978B]" />
                </div>
                <p className="subheading-2 foutfit pt-2">
                  Programming Language
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Java",
                    "Python",
                    "JavaScript",
                    "C++",
                    "Ruby on Rails",
                    "PHP",
                    "TypeScript",
                    "Go",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-[10px] py-[5px] text-[16px] finter rounded-[20px] bg-[#5BC2A7] text-[#ffffff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col bg-white border border-[#E6E6E6] rounded-[10px] transition-transform hover:scale-105">
              <div className="p-5 flex flex-col gap-4 flex-grow">
                <div className="w-12 h-12 p-2 bg-[#D2FAF3] rounded-[5px] flex items-center justify-center">
                  <Settings size={24} className="text-[#13978B]" />
                </div>
                <p className="subheading-2 foutfit pt-2">
                  Frameworks & Libraries
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Angular",
                    "Node.js",
                    "Django",
                    ".NET",
                    "Vue.js",
                    "Spring Boot",
                    "Express.js",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-[10px] py-[5px] text-[16px] finter rounded-[20px] bg-[#5BC2A7] text-[#ffffff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col bg-white border border-[#E6E6E6] rounded-[10px] transition-transform hover:scale-105">
              <div className="p-5 flex flex-col gap-4 flex-grow">
                <div className="w-12 h-12 p-2 bg-[#D2FAF3] rounded-[5px] flex items-center justify-center">
                  <Database size={24} className="text-[#13978B]" />
                </div>
                <p className="subheading-2 foutfit pt-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "MySQL",
                    "PostgreSQL",
                    "MongoDB",
                    "Redis",
                    "Oracle",
                    "SQLite",
                    "Cassandra",
                    "DynamoDB",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-[10px] py-[5px] text-[16px] finter rounded-[20px] bg-[#5BC2A7] text-[#ffffff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col bg-white border border-[#E6E6E6] rounded-[10px] transition-transform hover:scale-105">
              <div className="p-5 flex flex-col gap-4 flex-grow">
                <div className="w-12 h-12 p-2 bg-[#D2FAF3] rounded-[5px] flex items-center justify-center">
                  <Cloud size={24} className="text-[#13978B]" />
                </div>
                <p className="subheading-2 foutfit pt-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS",
                    "Google Cloud",
                    "Microsoft Azure",
                    "Docker",
                    "Kubernetes",
                    "Heroku",
                    "DigitalOcean",
                    "Vercel",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-[10px] py-[5px] text-[16px] finter rounded-[20px] bg-[#5BC2A7] text-[#ffffff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col bg-white border border-[#E6E6E6] rounded-[10px] transition-transform hover:scale-105">
              <div className="p-5 flex flex-col gap-4 flex-grow">
                <div className="w-12 h-12 p-2 bg-[#D2FAF3] rounded-[5px] flex items-center justify-center">
                  <Smartphone size={24} className="text-[#13978B]" />
                </div>
                <p className="subheading-2 foutfit pt-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React Native",
                    "Flutter",
                    "Swift",
                    "Kotlin",
                    "Ionic",
                    "Xamarin",
                    "PhoneGap",
                    "Cordova",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-[10px] py-[5px] text-[16px] finter rounded-[20px] bg-[#5BC2A7] text-[#ffffff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col bg-white border border-[#E6E6E6] rounded-[10px] transition-transform hover:scale-105">
              <div className="p-5 flex flex-col gap-4 flex-grow">
                <div className="w-12 h-12 p-2 bg-[#D2FAF3] rounded-[5px] flex items-center justify-center">
                  <Shield size={24} className="text-[#13978B]" />
                </div>
                <p className="subheading-2 foutfit pt-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "OAuth",
                    "SSL/TLS",
                    "OWASP",
                    "Two-factor Authentication",
                    "JWT",
                    "HTTPS",
                    "AES Encryption",
                    "RBAC",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-[10px] py-[5px] text-[16px] finter rounded-[20px] bg-[#5BC2A7] text-[#ffffff]"
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
      {/* CTA */}
      <section className="px-6 py-16">
        <CTA
          title="Still Have Questions?"
          description="Our team of experts is here to help answer any specific questions about your project and provide personalized recommendations for your software development needs."
          linkUrl="/contact-us"
          ctabtnType="primary"
          linkText="Contact Our Experts"
        />
      </section>
      {/* FORM */}
      <ContactUsForm
        heading="Get In Touch"
        subheading="Ready to transform your  idea into reality? Let’s discuss your project and see how we can help you achieve your goals."
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
      {/* FAQ */}
      <FAQSection title="FAQs" subtitle="" faqs={faq2} />
    </>
  );
}
