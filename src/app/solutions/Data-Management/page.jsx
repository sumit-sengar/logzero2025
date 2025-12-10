"use client";
import { useContext, React, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { Lztallcontext } from "@/context/Lztcontext";
import CardContainer from "@/components/CardContainer";
import CardContainerBorder from "@/components/CardContainerBorder";
import GreenButton from "@/components/GreenButton";
import SuccessStory from "@/components/SucessStory";
import ContactUsForm from "@/components/ContactUsForm";
import {
  Users,
  Headset,
  Shield,
  Award,
  Check,
  Send,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function data() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function PlusMinusIcon({ isOpen, className }) {
    return (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14"
          />
        ) : (
          <>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v14M5 12h14"
            />
          </>
        )}
      </svg>
    );
  }

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [showMore, setShowMore] = useState(false);

  const {
    dataManagment,
    ComprehensiveDataSolutions,
    Dataindatamanagment,
    SucessStoryData,
    faq3,
  } = useContext(Lztallcontext);
  console.log(
    dataManagment,
    ComprehensiveDataSolutions,
    Dataindatamanagment,
    SucessStoryData,
    faq3
  );

  const BgColors = ["bg-[#DBEAFE]", "bg-[#CCFBF1]", "bg-[#F3E8FF]"];
  const BgColors2 = ["bg-[#DBEAFE]"];

  const cards = [
    {
      Icon: Award,
      title: "11+ Years Experience",
      desc: "Proven track record with enterprise clients",
    },
    {
      Icon: Users,
      title: "Compliance First",
      desc: "GDPR, HIPAA, and SOC 2 certified processes",
    },
    {
      Icon: Shield,
      title: "Expert Team",
      desc: "Certified Data Pros & Consultants",
    },
    {
      Icon: Headset,
      title: "24/7 Support",
      desc: "Round-the-clock monitoring and support",
    },
  ];

  const steps = [
    {
      title: "Data Audit & Assessment",
      desc: "Identify gaps, silos, and risks in your current data infrastructure",
      number: "01",
    },
    {
      title: "Strategy & Roadmap",
      desc: "Build a custom governance and integration plan tailored to your business",
      number: "02",
    },
    {
      title: "Implementation",
      desc: "Deploy data integration, ETL, and cloud migration services",
      number: "03",
    },
    {
      title: "Monitoring & Optimization",
      desc: "Ongoing quality checks and compliance reviews for continuous improvement",
      number: "04",
    },
  ];

  const services = [
    "Data Integration & ETL Services",
    "Master Data Management (MDM)",
    "Data Quality Management",
    "Cloud Data Migration Services",
    "Data Governance & Compliance",
    "Big Data & Analytics Support",
  ];

  return (
    <>
      <HeroSection
        title="Data Management Services That Power Smarter Business Decisions"
        titlecolor={false}
        subtitle=""
        description="At LogZero Technologies, we deliver enterprise data management services designed to simplify, secure, and optimize your business data. From cloud migration to master data management (MDM), we help you unlock the true value of your data."
        description2=""
        shortdescription={false}
        // shortdescription="Whether you're building a billion-dollar SaaS or a sleek e-commerce site, we architect, design, and deliver websites that outperform industry standards—every time."
        addCounterNo={false}
        BtnPrimary={true}
        playiconyes={true}
        buttonText="Book Your Free Data Audit Today "
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo=""
        buttonlinkurlTwo="/"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={false}
        keyFeaturesList={false}
        servicesOptions={services}
        bannerimage="/assets/img/Data Management Services That Power Smarter Business Decisions-hero section.webp"
        nostats={[]}
      />

      {/* Understanding Data Management in Today's Business World */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              Understanding Data Management in Today's Business World
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[80%] mx-auto">
              Modern businesses generate more data than ever before. Without
              structured management, this information becomes siloed,
              unreliable, and unusable. Our data lifecycle management services
              ensure that every stage of your data journey—collection, storage,
              governance, and analytics—is optimized for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 mt-6  text-center ">
            {dataManagment?.map((carddata, index) => (
              <CardContainerBorder
                key={index}
                index={index}
                carddata={carddata}
                bgadd="bgwhite"
                borderadd="border"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[10px]"
                shadowadd=""
                IconbgColor={BgColors[index % BgColors.length]}
                roundcorner="rounded-[5px]"
                desminheight="h-auto"
                lineclamp="line-clamp-5"
                mxauto={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Your Trusted Partner for Enterprise Data Solutions */}
      <section className="py-16 px-6 bg-[#F2F7FC]">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className=" ">
                <h2 className="headingbox mb-2">
                  Your Trusted Partner for Enterprise Data Solutions
                </h2>
                <p className=" mb-4">
                  For over a decade, Logzero Technologies has been the
                  outsourced data management company enterprises trust. Our
                  services are tailored for compliance-heavy industries like
                  healthcare and finance, as well as dynamic sectors like retail
                  and IT.
                </p>
                <p className="mb-6">
                  We combine expertise with scalability, ensuring your data is
                  always accurate, accessible, and compliant.
                </p>
              </div>
              <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 items-start mx-auto pt-6 ">
                {cards.map(({ Icon, title, desc }, i) => (
                  <div
                    key={i}
                    className=" flex flex-col  rounded-[5px] bg-[#ffff] "
                  >
                    <div className="flex items-center  ">
                      <div className="w-[48px] h-[48px]  text-[#0A77FF] rounded-full hover:scale-105 transition-transform duration-200 flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                      <h3 className="">{title}</h3>
                    </div>
                    <div className=" pl-12">
                      <p className=" subtext subtextcolor ">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="self-center w-full px-0 sm:px-4">
              <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[432px] sm:h-[500px]  shadow-lg mx-auto">
                <img
                  src="/assets/img/Clients Success Metrics.webp"
                  alt="Clients Success Metrics"
                  // width={560}
                  // height={432}
                  className="w-full h-full  object-cover border border-[#ccc7c7]"
                />

                <div className="p-5 absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent  flex flex-col justify-end">
                  <div className=" pt-6">
                    <h2 className="!text-white mb-4 ">
                      Clients Success Metrics
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:pb-6 ">
                    {[
                      { value: "99.7%", label: "Data Accuracy" },
                      { value: "35%", label: "Cost Deduction" },
                      { value: "8x", label: "Faster Processing" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-[8px] text-center py-3 backdrop-blur-md bg-white/10 border !border-[#4d4b4b] "
                      >
                        <p className="subheading-4 text-white !sm:text-[10px]">
                          {item.value}
                        </p>
                        <p className="subtext text-white !sm:text-[10px] !mb-0 !leading-[18px]">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Data Solutions to Fit Your Business */}
      <section className="px-6 py-16 ">
        <div className="container mx-auto">
          <div className="headingbox pb-2 mb-6">
            <h2 className="text-center">
              Comprehensive Data Solutions to Fit Your Business
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto py-3">
              {" "}
              From integration to analytics, we provide end-to-end data
              management services that scale with your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {ComprehensiveDataSolutions?.map((service, index) => (
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
                imgheight="h-[212px]"
              />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <GreenButton
              text="View All Services"
              linkurl="/services"
              linktarget=""
              MoveRighticon={false}
            />
          </div>
        </div>
      </section>

      {/* Tailored Data Services Across Industries */}
      <section className="py-16 px-6 bg-[#F2F7FC]">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="">Tailored Data Services Across Industries</h2>
            <p className="mt-5 max-w-full md:max-w-[75%] mx-auto">
              Every sector has unique data challenges. We provide
              industry-specific data governance frameworks to ensure compliance
              and efficiency.
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

          <div className="flex justify-center mt-10">
            <GreenButton
              text="+ More Industries"
              linkurl="/industry"
              linktarget=""
              MoveRighticon={false}
            />
          </div>
        </div>
      </section>

      {/* Transform Your Business with Smarter Data */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              Transform Your Business with Smarter Data
            </h2>
            <p className="text-center mb-10 max-w-full  mx-auto">
              Our clients choose us for more than just data handling—they choose
              us for growth enablement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 items-start mx-auto pt-6 ">
            {Dataindatamanagment.map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="p-5 flex flex-col  rounded-[5px] bg-[#F6FAFF] "
              >
                <div className="flex  gap-4">
                  {/* Icon container */}
                  <div className="flex-shrink-0  ">
                    <div className="w-[48px] h-[48px] flex items-center justify-center text-[#0A77FF] bg-[#DBEAFE] rounded-[8px] hover:scale-105 transition-transform duration-200">
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Title container */}
                  <div className="flex flex-col  max-w-[75%]">
                    <h3 className="mb-2">{title}</h3>
                    <p className="subtext subtextcolor">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="px-6 bgblue1 py-16">
        <div className="container mx-auto">
          <SuccessStory
            title="Real Results with LogZero Technologies"
            subtitle="See how we’ve helped businesses transform their data infrastructure and 
achieve measurable results."
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

      {/* How We Deliver End-to-End Data Lifecycle Management */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              How We Deliver End-to-End Data Lifecycle Management
            </h2>
            <p className="text-center pb-8 max-w-full  mx-auto">
              Our proven methodology ensures successful data transformation from
              assessment to optimization.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 sm:gap-0  md:gap-22">
            {/* Vertical dotted line */}
            <div className="hidden md:block absolute left-1/2 top-12 bottom-0 transform -translate-x-1/2 flex flex-col items-center justify-between">
              <div className="flex flex-col items-center gap-3">
                {[...Array(19)].map((_, i) => (
                  <span
                    key={i}
                    className={`rounded-full ${
                      [0, 6, 12, 18].includes(i)
                        ? "w-4 h-4 bluenew"
                        : "w-2 h-2 bg-[#333]"
                    }`}
                  ></span>
                ))}
              </div>
            </div>

            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex ${
                  i % 2 === 0
                    ? "md:justify-end text-right"
                    : "md:justify-start mt-16 md:mt-24"
                }`}
              >
                <div className=" w-full">
                  <div
                    className={`h-1 bluenew  ${
                      i % 2 === 0 ? "lg:ml-auto w-2/3" : "lg:mr-auto w-2/3"
                    }`}
                  ></div>

                  <div
                    className={`flex gap-4 ${
                      i % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`bluenew text-white font-bold w-38 h-32 flex items-center justify-center text-lg
                      ${
                        i % 2 === 0
                          ? " rounded-br-[40px] "
                          : " rounded-bl-[40px]"
                      }`}
                    >
                      <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-[6px_9px_6px_1px_#00000061]">
                        <span className="text-black text-4xl font-bold">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`flex flex-col ${
                        i % 2 === 0 ? "md:text-right" : "md:text-left"
                      } text-left`}
                    >
                      <h3 className="font-semibold mb-2 mt-4 ">{step.title}</h3>
                      <p className="text-gray-600 max-w-[270px] ">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Data Management Pricing Plans */}
      {/* <section id="services" className="pb-16 px-6 bgblue3 py-16">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              Flexible Data Management Pricing Plans
            </h2>
            <p className="text-center">
              We believe in transparent pricing that scales with your business
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            <div className="flex flex-col bggray1 border1px border-[#E6E6E6] rounded-[10px] shadow m-0 transition-colors duration-300 ease-in-out transition-transform hover:scale-104">
              <div className="gap-4 flex flex-col flex-grow">
                <div className="pt-[40px] pb-[30px] px-[20px] gap-4 flex flex-col flex-grow">
                  <h3 className="!font-bold subheading-4">Starter Plan</h3>
                  <p className="subtext subtextcolor">
                    For SMEs needing structured data storage
                  </p>

                  <h2 className="!text-[#1E8767] subheading-4">
                    $2,500 /month
                  </h2>
                  <ul className="subtext subtextcolor finter pt-2">
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#1E8767] w-[20px]" />{" "}
                      <span>Up to 10GB data processing</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#1E8767] w-[20px]" />{" "}
                      <span>Basic data integration</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#1E8767] w-[20px]" />{" "}
                      <span>Email support</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#1E8767] w-[20px]" />{" "}
                      <span>Monthly reporting</span>
                    </li>
                  </ul>

                  <div className="mt-auto">
                    <Link
                      href="#"
                      className="flex items-center justify-center gap-2 text-[15px] font-semibold leading-[22px] text-black bg-[#fff] border-2 border-[var(--bg-green-300)] rounded-[6px] px-[35px] py-[17px] font-[var(--font-inter)] transition duration-300 ease-in-out hover:bg-[#1E8767] hover:text-white transition-transform hover:scale-104"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gradient2 border-[2] border-[#1E8767] rounded-[10px] shadow m-0 transition-colors duration-300 ease-in-out transition-transform hover:scale-104">
              <div className="gap-4 flex flex-col flex-grow">
                <div className="bluenew p-3 text-[#fff] text-center subtext rounded-t-[6px]">
                  Most Popular
                </div>

                <div className="pt-[1px] pb-[30px] px-[20px] gap-4 flex flex-col flex-grow">
                  <h3 className="!font-bold subheading-4">Growth Plan</h3>
                  <p className="subtext subtextcolor">
                    For enterprises with complex requirements
                  </p>
                  <h2 className="!text-[#1E8767] subheading-4">
                    $10,000 /month
                  </h2>
                  <ul className="subtext subtextcolor finter">
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Up to 1TB data processing</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Advanced ETL and analytics</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>24/7 priority support</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Real-time monitoring</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Compliance frameworks</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href="#"
                      className="flex items-center justify-center gap-2 text-[15px] font-semibold leading-[22px] text-white bg-[var(--bg-green-300)] border border-[var(--bg-green-300)] rounded-[6px] px-[35px] py-[17px] font-[var(--font-inter)] transition duration-300 ease-in-out hover:bg-[#179A8E] hover:text-white transition-transform hover:scale-104"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bggray1 border1px border-[#E6E6E6] rounded-[10px] shadow m-0 transition-colors duration-300 ease-in-out transition-transform hover:scale-104">
              <div className="gap-4 flex flex-col flex-grow">
                <div className="pt-[40px] pb-[30px] px-[20px] gap-4 flex flex-col flex-grow">
                  <h3 className="!font-bold subheading-4">Custom Plan</h3>
                  <p className="subtext subtextcolor">
                    Custom solutions for regulated industries
                  </p>
                  <h2 className="!text-[#1E8767] subheading-4">Custom</h2>

                  <ul className="subtext subtextcolor finter">
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Unlimited data processing</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Dedicated Account Manager</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>SLA guarantees</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>On-site consulting</span>
                    </li>
                  </ul>

                  <div className="mt-auto">
                    <Link
                      href="#"
                      className="flex items-center justify-center gap-2 text-[15px] font-semibold leading-[22px] text-black bg-[#fff] border-2 border-[var(--bg-green-300)] rounded-[6px] px-[35px] py-[17px] font-[var(--font-inter)] transition duration-300 ease-in-out hover:bg-[#1E8767] hover:text-white transition-transform hover:scale-104"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* form */}
      <ContactUsForm
        heading="Ready to Take Control of Your Business Data?"
        subheading="With LogZero Technologies' data management services, your business gets accuracy, compliance, and insights that drive real growth."
        contactCardTitle="Let’s Start a Conversation"
        contactText=""
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
    </>
  );
}
