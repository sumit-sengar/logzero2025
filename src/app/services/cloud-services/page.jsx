"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect, useRef } from "react";
import { Lztallcontext } from "@/context/Lztcontext";
import CardContainerBorder from "@/components/CardContainerBorder";
import CTA from "@/components/CTA";
import Trusted from "@/components/Trusted";
import CardContainer from "@/components/CardContainer";
import WhyChooseUs from "@/components/WhyChooseUS";
import {
  FolderSync,
  Users,
  FileCog,
  Headset,
  Diamond,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckIcon,
  Award,
  Building,
  Target,
  CircleCheckBig,
  SquareCheckBig,
  Search,
  UserPlus,
  SquareChartGantt,
  TrendingUp,
  MoveRight,
  Send,
  Check,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import GreenButton from "@/components/GreenButton";
import CounterNo from "@/components/CounterNo";
import SuccessStory from "@/components/SucessStory";
import WhiteButton from "@/components/WhiteButton";
import Testimonials from "@/components/Testimonials";
import Head from "./head";
import FAQSection from "@/components/FAQSection";
import ContactUsForm from "@/components/ContactUsForm";

const BgColors = [
  "bgblue5",
  "bgblue4",
  "bgblue6",
  "bgpurpal2",
  "bgpurpal3",
  "bgpurpal1",
];

const BgColors2 = ["bgblue5", "bgblue6", "bgpurpal1"];

const statData = [
  { value: "500+", label: "Successful Migrations" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Expert Support" },
  { value: "40%", label: "Average Cost Savings" },
];

const yourcloudjourney = [
  {
    icon: <FolderSync size={20} className="text-white" />,
    title: "Proven Expertise",
    description:
      "With years of experience in cloud computing, we bring unparalleled expertise.",
  },
  {
    icon: <Users size={20} className="text-white" />,
    title: "Scalability & Flexibility",
    description:
      "Our solutions grow with your business, providing scalable resources as needed.",
  },
  {
    icon: <FileCog size={20} className="text-white" />,
    title: "Top-tier Security",
    description:
      "We prioritize the security of your data with robust encryption and compliance features.",
  },
  {
    icon: <Diamond size={20} className="text-white" />,
    title: "Cost Efficiency",
    description:
      "We help you reduce operational costs by optimizing your cloud infrastructure.",
  },
  {
    icon: <Headset size={20} className="text-white" />,
    title: "24/7 Support",
    description:
      "Our dedicated support team ensures your cloud operations run smoothly at all times.",
  },
];

const keyFeaturesList = [
  {
    icon: "/assets/icons/ShieldCheck.png",
    alt: "Security Icon",
    text: "Enterprise Security",
  },
  {
    icon: "/assets/icons/music.svg",
    alt: "Support Icon",
    text: "24/7 Support",
  },
];

function CounterValue({ value, duration = 1200 }) {
  const raw = String(value).trim();

  if (raw.includes("/")) return <>{raw}</>;

  const m = raw.match(/^([0-9]*\.?[0-9]+)\s*([^\d.\s]+)?$/);
  if (!m) return <>{raw}</>;

  const num = parseFloat(m[1]);
  const suffix = m[2] || "";
  const decimals = m[1].includes(".") ? m[1].split(".")[1].length : 0;

  const [display, setDisplay] = useState(0);
  const rafRef = useRef();

  useEffect(() => {
    const start = performance.now();
    const animate = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(num * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [num]);

  return (
    <>
      {decimals ? display.toFixed(decimals) : Math.round(display)}
      {suffix}
    </>
  );
}

const services = [
  "Cloud Migration Services",
  "Cloud Infrastructure Management",
  "Cloud Security Solutions",
  "Hybrid Cloud Solutions",
  "DevOps",
  "Backup & 24/7 Cloud Support",
];

const faqs = [
  {
    qId: 1,
    question: "What are cloud migration services?",
    answer:
      "Cloud migration means moving your applications, systems, or data to the cloud for better performance, scalability, and security.",
  },
  {
    qId: 2,
    question: "Which cloud platforms do you support?",
    answer:
      "We work with AWS, Google Cloud, Azure, and DigitalOcean, based on your business needs and goals.",
  },
  {
    qId: 3,
    question: "Are cloud services secure?",
    answer:
      "Yes. Cloud platforms provide multi-layer security, encryption, firewalls, and identity management to ensure data protection.",
  },
  {
    qId: 4,
    question: " How much do cloud services cost?",
    answer:
      "Costs depend on usage, storage, infrastructure needs, and performance requirements, making each project unique.",
  },
  {
    qId: 5,
    question: "Do you offer cloud monitoring and management?",
    answer:
      "Yes. We provide 24/7 cloud monitoring, optimization, backups, and incident management.",
  },
  {
    qId: 6,
    question: " Can you migrate our system to cloud without downtime?",
    answer:
      "We follow a structured approach to ensure smooth and minimal-disruption migration, based on your system architecture.",
  },
];

export default function CloudServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    TrustedPartnerinCloud,
    MobileAppDevelopment,
    SucessStoryData,
    BenefitsLogzerotechnologies,
    CloudServicesTailored,
    testimonialsOne,
    CloudMigrationSteps,
  } = useContext(Lztallcontext);
  console.log(TrustedPartnerinCloud, MobileAppDevelopment);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service");
  };

  return (
    <>
      <Head> </Head>

      <HeroSection
        title="Scale Faster with Reliable Cloud Solutions"
        description="Move to the cloud confidently — from migration to management, we simplify your journey with expert cloud support."
        description2={false}
        // shortdescription="Whether you're building a billion-dollar SaaS or a sleek e-commerce site, we architect, design, and deliver websites that outperform industry standards—every time."
        addCounterNo={true}
        BtnPrimary={true}
        buttonText="Get Your Free Cloud Consultation Today!"
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo="Watch Demo"
        buttonlinkurlTwo="/"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={true}
        keyFeaturesList={keyFeaturesList}
        servicesOptions={services}
        bannerimage="/assets/img/developer-banner.webp"
        nostats={[]}
      />

      {/* LogZero Technologies: Your Trusted Partner in Cloud Solutio Start */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              LogZero Technologies: Your Trusted Partner in Cloud Solutions
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto">
              LogZero Technologies provides custom cloud solutions to enhance
              efficiency, scalability, and security—seamlessly aligned with your
              business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 text-center">
            {TrustedPartnerinCloud?.map((carddata, index) => (
              <CardContainerBorder
                key={index}
                index={index}
                carddata={carddata}
                bgadd="bgwhite"
                borderadd="border1px"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[10px]"
                shadowadd="shadow0"
                IconbgColor={BgColors2[index % BgColors2.length]}
                roundcorner="rounded-[5px]"
                desminheight="h-auto"
                lineclamp="line-clamp-7"
                mxauto={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Cloud Services Tailored to Your Business Needs Start */}
      <section className="px-6 py-16 bgblue3">
        <div className="container mx-auto">
          <div className="headingbox pb-2 mb-6">
            <h2 className="text-center">
              Comprehensive Cloud Services Tailored to Your Business Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {CloudServicesTailored?.map((service, index) => (
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
        </div>
      </section>

      {/* Why LogZero is the Best Choice for Your Cloud Journey Start */}
      <section className="bgblue1 py-16 px-6 bgwhite">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="mb-4">
              Why LogZero is the Best Choice for Your Cloud Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Features */}
            <div className="space-y-6 pl-5">
              {yourcloudjourney.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-[56px] h-[56px] p-3 bgblue7 flex items-center justify-center rounded-full hover:scale-105 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="">{item.title}</h4>
                    <p className="subtext subtextcolor">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid w-full bgblue7 text-white rounded-lg px-5 py-10">
              {/* Award Block */}
              <div className="w-full text-center mb-6">
                <h2 className="textwhite">Ready to Transform Your Business?</h2>
              </div>

              <div className="grid w-full lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-6 text-white">
                {statData.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-[#FFFFFF1A] border !border-[#FFFFFF33] rounded-md 
                             gap-2 w-full flex flex-col items-center justify-center 
                             text-center px-4 py-3 shadow2 hover:bg-[#53b39a]"
                  >
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                      <CounterValue value={stat.value} />
                    </span>
                    <p className="text-base sm:text-lg">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="w-full mt-4 text-center">
                <WhiteButton
                  text="Learn More About Our Expertise"
                  linkurl="/about"
                  linktarget=""
                  MoveRighticon={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Business with Our Cloud Solutions Start */}
      <section className="pb-16 px-6 bgblue3 py-16">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              Transform Your Business with Our Cloud Solutions
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-4">
            {/* Left Text */}
            <div className="w-full lg:w-1/4 flex flex-col">
              <div>
                <h3 className="subheading-2 !text-[#05BCC1] mb-2">
                  Enhanced Performancet
                </h3>
                <p className="subtext2 subtextcolor">
                  Experience faster workflows and optimized systems with
                  cloud-based infrastructure.
                </p>
              </div>
              <div className="my-8">
                <h3 className="subheading-2 !text-[#A3CE37] mb-2">
                  Cost Savings
                </h3>
                <p className="subtext2 subtextcolor">
                  Pay only for what you use and eliminate the need for costly
                  physical hardware.
                </p>
              </div>
              <div>
                <h3 className="subheading-2 !text-[#59696E] mb-2">
                  Global Accessibility
                </h3>
                <p className="subtext2 subtextcolor">
                  Access your data and applications from anywhere, anytime,
                  ensuring productivity on the go.
                </p>
              </div>
            </div>

            {/* Center Circular Image */}
            <div className="lg:w-1/2 justify-center relative items-center  lg:block">
              <Image
                src="/assets/img/benefits.svg"
                alt="Expertise Circle"
                width={631}
                height={439}
                className="object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center subheading-4 text-[#666666]">
                Effortless Cloud. <br />
                Real Results.
              </div>
            </div>

            {/* Right Text */}
            <div className="w-full lg:w-1/4 flex flex-col">
              <div>
                <h3 className="subheading-2 !text-[#8F4881] mb-2">
                  Disaster Recovery
                </h3>
                <p className="subtext2 subtextcolor">
                  With cloud-based backup and disaster recovery, you can rest
                  assured that your data is safe.
                </p>
              </div>
              <div className="my-8">
                <h3 className="subheading-2 !text-[#F1A229] mb-2">
                  Seamless Collaboration
                </h3>
                <p className="subtext2 subtextcolor">
                  Collaborate across teams and locations with cloud-enabled
                  tools.
                </p>
              </div>
              <div>
                <h3 className="subheading-2 !text-[#F7615A] mb-2">
                  Business Growth
                </h3>
                <p className="subtext2 subtextcolor">
                  Scale your operations efficiently and focus on what matters
                  most - growing your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Start */}
      {/* <section className="px-6 py-16 bgwhite">
            <div className="container mx-auto">
            <SuccessStory
                title="Case Studies"
                subtitle="Real projects, real results. See how we've helped businesses transform their ideas into successful mobile applications that drive growth and user engagement."
                caseStudies={SucessStoryData}
            />
            </div>
        </section> */}

      {/* Flexible Cloud Service Plans to Fit Your Needs Start */}
      {/* <section id="services" className="pb-16 px-6 bgblue3 py-16">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              Flexible Cloud Service Plans to Fit Your Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            <div className="flex flex-col bggray1 border1px border-[#E6E6E6] rounded-[10px] shadow m-0 transition-colors duration-300 ease-in-out transition-transform hover:scale-104">
              <div className="gap-4 flex flex-col flex-grow">
                <div className="pt-[40px] pb-[30px] px-[20px] gap-4 flex flex-col flex-grow">
                  <h3 className="!font-bold">Basic Cloud Services</h3>
                  <p className="subtext subtextcolor">
                    Ideal for small businesses looking to migrate to the cloud
                  </p>
                  <ul className="subtext subtextcolor finter">
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Cloud Migration Assessment</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Basic Security Setup</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Business Hours Support</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Monthly Performance Reports</span>
                    </li>
                  </ul>

                  <div className="mt-auto">
                    <Link
                      href="#"
                      className="flex items-center justify-center gap-2 text-[15px] font-semibold leading-[22px] text-black bg-[#fff] border-2 border-[#1E8767] rounded-[6px] px-[35px] py-[17px] font-[var(--font-inter)] transition duration-300 ease-in-out hover:bg-[#1E8767] hover:text-white transition-transform hover:scale-104"
                    >
                      Contact Sales
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
                  <h3 className="!font-bold">Advanced Cloud Solutions</h3>
                  <p className="subtext subtextcolor">
                    For medium to large enterprises needing comprehensive cloud
                    infrastructure
                  </p>
                  <ul className="subtext subtextcolor finter">
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Complete Cloud Migration</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Advanced Security & Compliance</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>24/7 Support</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Disaster Recovery Planning</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Cost Optimization</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href="#"
                      className="flex items-center justify-center gap-2 text-[15px] font-semibold leading-[22px] text-white bg-[#1E8767] border border-[#1E8767] rounded-[6px] px-[35px] py-[17px] font-[var(--font-inter)] transition duration-300 ease-in-out hover:bg-[#1E8767] hover:text-white transition-transform hover:scale-104"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bggray1 border1px border-[#E6E6E6] rounded-[10px] shadow m-0 transition-colors duration-300 ease-in-out transition-transform hover:scale-104">
              <div className="gap-4 flex flex-col flex-grow">
                <div className="pt-[40px] pb-[30px] px-[20px] gap-4 flex flex-col flex-grow">
                  <h3 className="!font-bold">Enterprise Cloud</h3>
                  <p className="subtext subtextcolor">
                    Custom enterprise solutions for businesses with complex
                    requirements
                  </p>

                  <ul className="subtext subtextcolor finter">
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Custom Cloud Architecture</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Enterprise-grade Security</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Dedicated Account Manager</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Priority Support</span>
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" />{" "}
                      <span>Custom Integrations</span>
                    </li>
                  </ul>

                  <div className="mt-auto">
                    <Link
                      href="#"
                      className="flex items-center justify-center gap-2 text-[15px] font-semibold leading-[22px] text-black bg-[#fff] border-2 border-[#1E8767] rounded-[6px] px-[35px] py-[17px] font-[var(--font-inter)] transition duration-300 ease-in-out hover:bg-[#1E8767] hover:text-white transition-transform hover:scale-104"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* How to Do Cloud Migration in 3 Simple Steps? Start */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              How to Do Cloud Migration in 3 Simple Steps?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 text-center">
            {CloudMigrationSteps?.map((carddata, index) => (
              <CardContainerBorder
                key={index}
                index={index}
                carddata={carddata}
                bgadd="bgwhite"
                borderadd="border1px"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[10px]"
                shadowadd="shadow3"
                IconbgColor={BgColors2[index % BgColors2.length]}
                roundcorner="rounded-full"
                desminheight="h-auto"
                lineclamp="line-clamp-7"
                mxauto={true}
              />
            ))}
          </div>

          {/* <div className="flex justify-center mt-10">
            <GreenButton
              text="Start Your Cloud Migration Today"
              linkurl="/"
              linktarget=""
              MoveRighticon={false}
            />
          </div> */}
        </div>
      </section>

      {/* Testimony section */}
      <section className="py-16 px-6 bg-[#F6F6F6]">
        <div className="container mx-auto">
          <Testimonials
            title="See Why Our Clients Trust Us"
            subtitle="Discover how our solutions have helped clients achieve success. Hear their stories and experiences with our services."
            testimonials={testimonialsOne}
          />
        </div>
      </section>

      {/* Top-notch Cloud Security: Safeguarding Your Data section */}
      <section className="py-16 px-6 bgblue3">
        <div className="container mx-auto">
          <div className="headingbox mb-10">
            <h2 className="text-center">
              Top-notch Cloud Security: Safeguarding Your Data
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-[70%] sm:w-full pr-0 ">
              <Image
                src="/assets/img/cloudsecurity2.webp"
                alt="Expertise Circle"
                width={765}
                height={500}
                className="w-full object-cover rounded-[10px]"
              />
            </div>

            <div className="w-full lg:w-[30%] sm:w-full flex flex-col gap-2 text-white">
              <div className="space-y-4 grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-5 items-start bgwhite rounded-[5px] p-5">
                  <div className="w-13 h-13 p-4 bgblue flex items-center justify-center rounded-full">
                    <Award size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="subheading-2 ptextcolor">Encryption</p>
                    <p className="subtext subtextcolor !mb-0">
                      Your data is fully encrypted during transit and at rest.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-start bgwhite rounded-[5px] p-5">
                  <div className="w-13 h-13 p-4 bg-[#9A3FEE] flex items-center justify-center rounded-full">
                    <Award size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="subheading-2 ptextcolor">Compliance</p>
                    <p className="subtext subtextcolor !mb-0">
                      We comply with industry standards like GDPR, HIPAA, and
                      more.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-start bgwhite rounded-[5px] p-5">
                  <div className="w-13 h-13 p-4 bggreen flex items-center justify-center rounded-full">
                    <Award size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="subheading-2 ptextcolor">Access Control</p>
                    <p className="subtext subtextcolor !mb-0">
                      Granular control over user access to ensure data security.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-start bgwhite rounded-[5px] p-5">
                  <div className="w-13 h-13 p-4 bg-[#5E6674] flex items-center justify-center rounded-full">
                    <Award size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="subheading-2 ptextcolor">Regular Audits</p>
                    <p className="subtext subtextcolor !mb-0">
                      Continuous monitoring and auditing for highest security
                      levels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactUsForm
        heading="Ready to Take Your Business to the Cloud?"
        subheading="Contact us today to get started with LogZero Technologies’ cloud services. Our experts will guide through every step of the process, from planning to implementation, and beyond."
        contactCardTitle="Why choose LogZertechnologies?"
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
