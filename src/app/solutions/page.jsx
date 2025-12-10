"use client";
import { useContext, React, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { Lztallcontext } from "@/context/Lztcontext";
import CardContainer from "@/components/CardContainer";
import SuccessStory from "@/components/SucessStory";
import CardContainerBorder from "@/components/CardContainerBorder";
import GreenButton from "@/components/GreenButton";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import Head from "./head";
import ContactUsForm from "@/components/ContactUsForm";
import {
  Check,
  CircleCheckBig,
  Target,
  ReceiptText,
  Search,
  Blocks,
  ShieldPlus,
  Settings,
  Send,
  Phone,
  Mail,
  MapPin,
  Shield,
  TrendingUp,
  Users,
  BarChart,
} from "lucide-react";

export default function data() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { solutionData, SucessStoryDataSolution, testimonialsOne, faq4 } =
    useContext(Lztallcontext);
  console.log(solutionData, SucessStoryDataSolution, testimonialsOne, faq4);

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [showMore, setShowMore] = useState(false);

  const CogIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-cog"
      {...props}
    >
      <path d="M11 10.27 7 3.34"></path>
      <path d="m11 13.73-4 6.93"></path>
      <path d="M12 22v-2"></path>
      <path d="M12 2v2"></path>
      <path d="M14 12h8"></path>
      <path d="m17 20.66-1-1.73"></path>
      <path d="m17 3.34-1 1.73"></path>
      <path d="M2 12h2"></path>
      <path d="m20.66 17-1.73-1"></path>
      <path d="m20.66 7-1.73 1"></path>
      <path d="m3.34 17 1.73-1"></path>
      <path d="m3.34 7 1.73 1"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <circle cx="12" cy="12" r="8"></circle>
    </svg>
  );
  const ChartIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chart-column-increasing"
      {...props}
    >
      <path d="M13 17V9"></path>
      <path d="M18 17V5"></path>
      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
      <path d="M8 17v-3"></path>
    </svg>
  );
  const UsersIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-users"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <circle cx="9" cy="7" r="4"></circle>
    </svg>
  );
  const ArrowIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-right"
      {...props}
    >
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  );

  const services = [
    "Operations Management",
    "Analytics",
    "Customer Experience",
  ];

  const BgColors = ["bgblue", "peachgreen", "bg-[#9A3FEE]"];

  const Gradients = ["gradient17", "gradient3", "gradient18"];
  return (
    <>
      <Head> </Head>
      <HeroSection
        title=" Data-Driven Solutions That Power Business Performance"
        titlecolor={false}
        subtitle=""
        description="From analytics and ERP to CRM and dashboard management — our intelligent software solutions help businesses optimize operations, improve decision-making, and elevate customer experience."
        description2=""
        shortdescription={false}
        // shortdescription="Whether you're building a billion-dollar SaaS or a sleek e-commerce site, we architect, design, and deliver websites that outperform industry standards—every time."
        addCounterNo={false}
        BtnPrimary={true}
        playiconyes={true}
        buttonText="Book a Free Solutions Consultation "
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo="Explore Case Studies"
        buttonlinkurlTwo="/"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={false}
        keyFeaturesList={false}
        servicesOptions={services}
        bannerimage="/assets/img/Solutions That Turn Strategy into Measurable Results-herosection.webp"
        nostats={[]}
      />

      {/* The Roadblocks Holding Teams Back */}
      <section className="py-16 px-6  overflow-hidden">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              The Roadblocks Holding Teams Back
            </h2>
            <p className="text-center max-w-full md:max-w-[85%] mx-auto">
              Your teams juggle manual handoffs, siloed systems, and unclear
              metrics. Reports don't match, customer journeys feel clunky, and
              projects stall. Our end-to-end solutions cut complexity by
              integrating the right tools, automating workflows, and defining
              metrics everyone trusts.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* Left Card */}
            <div className="bg-[#F3F8FF] rounded-xl py-6 flex flex-col items-center">
              <Image
                src="/assets/img/Results-Driven Approach.webp"
                alt="Results Driven Approach"
                width={387}
                height={190}
                className=" w-full max-w-[435px] h-auto object-cover"
              />
              <h3 className="mt-4 !text-[#179A8E] ">Results–Driven Approach</h3>
            </div>

            {/* Right Card */}
            <div className="bg-[#F3F8FF] rounded-xl p-8 text-left">
              <div className=" mb-2 text-center max-w-[80%] ">
                <h2 className=" subheading-4  ">Quick wins</h2>
              </div>
              <ul className="py-2  md:max-w-[75%] sm:max-w-full text-gray-700">
                {[
                  "Eliminate data and process silos across departments",
                  "Increase speed to insight and time-to-value",
                  "Strengthen governance, security, and compliance",
                  "Improve conversions and retention with better journeys",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 py-1 subtext subtextcolor"
                  >
                    <Check className="w-5 h-5 text-teal-600 mt-0.5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Core Solution Areas */}
      <section className="py-16 px-6 bg-[#F2F7FC]">
        <div className="container mx-auto">
          <div className="pb-2 md:max-w-[65%] items-center mx-auto">
            <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold">
              Explore Our Core&nbsp;Solution Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12">
            {solutionData.map((solution, index) => (
              <div
                key={index}
                className={`flex flex-col ${solution.gradientClass} rounded-[10px] transition-transform duration-300 ease-in-out hover:scale-105`}
              >
                <div className="p-5 gap-4 flex flex-col flex-grow border border-[#E6E8E9]/60 rounded-xl">
                  <div
                    className={`w-11 h-11 p-2 ${solution.iconBgClass} rounded-[5px] flex items-center justify-center`}
                  >
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="subtext subtextcolor !mb-0">
                    {solution.description}
                  </p>
                  <p
                    className={` mt-auto subheading-3  ${solution.outcomesColor}`}
                  >
                    {solution.outcomes}
                  </p>
                  {/* <div className=" pt-4   border-t border-black/10">
                  <a 
                    className={`inline-flex items-center font-semibold ${solution.linkColor} hover:text-gray-800 transition-colors duration-200 group`}
                    href="/"
                  >
                    {solution.linkText}
                    <span className={`pl-[9px] text-[14px] font-bold ${solution.linkColor} transition-transform duration-300 ease-in-out group-hover:translate-x-1`}>
                      <ArrowIcon />
                    </span>
                  </a>
                </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Proven Path from Idea to Impact */}
      <section className="px-6 py-16 bgwhite">
        <div className="container mx-auto">
          <div className="headingbox pb-2 mb-10">
            <h2 className="mb-4 text-center">
              A Proven Path from Idea to Impact
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            {/* Dedicated Team Card */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)] order-2 md:order-1 ">
              {/* Icon */}
              <div className="w-12 h-12 p-2 bgblue5 rounded-[5px] flex items-center justify-center shrink-0">
                <Search size={22} className="text-[#1658EA]" />
              </div>
              {/* Text Content */}
              <div className="flex-1">
                <p className="subheading-3 !mb-1 textblue">01</p>
                <p className="subheading-3 text-[#252525]">Discover & Align</p>
                <p className="subtext subtextcolor mt-6">
                  KPI mapping, capability assessment, roadmap
                </p>
              </div>
            </div>

            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/Discover-&-Align.webp')] bg-cover bg-center h-[300px] md:h-[auto] order-1 md:order-2 "></div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/Blueprint.webp')] bg-cover bg-center h-[300px] md:h-[auto]"></div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)]">
              <div className="w-12 h-12 p-2 bgblue6 rounded-[5px] flex items-center justify-center">
                <ReceiptText size={22} className="text-[#13978B]" />
              </div>

              <div className="flex-1">
                <p className="subheading-3 mb-1 text-[#13978B] !mb-1">02</p>
                <p className="subheading-3 text-[#252525]">Blueprint</p>
                <p className="subtext subtextcolor mt-6">
                  Target architecture, stack selection (vendor-agnostic),
                  rollout plan
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)] order-2 md:order-1">
              <div className="w-12 h-12 p-2 bg-[#F3E8FF] rounded-[5px] flex items-center justify-center">
                <Blocks size={22} className="text-[#A265EE]" />
              </div>

              <div className="flex-1">
                <p className="text-[#A265EE] subheading-3 !mb-1">03</p>
                <p className="subheading-3 text-[#252525]">Build</p>
                <p className="subtext subtextcolor mt-6 max-w-[85%]">
                  Integrations, workflows, data models, dashboards, CX flows
                </p>
              </div>
            </div>

            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/Build.webp')] bg-cover bg-center h-[300px] md:h-[auto] order-1 md:order-2"></div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/Enable.webp')] bg-cover bg-center h-[300px] md:h-[auto]"></div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)]">
              <div className="w-12 h-12 p-2 bgblue4 rounded-[5px] flex items-center justify-center">
                <ShieldPlus size={22} className="text-[#16A35E]" />
              </div>

              <div className="flex-1">
                <p className="subheading-3 !mb-1 text-[#16A35E]">04</p>
                <p className="subheading-3 text-[#252525]">Enable</p>
                <p className="subtext subtextcolor mt-6">
                  Training, documentation, governance, and success playbooks
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)] order-2 md:order-1">
              <div className="w-12 h-12 p-2 bgpurpal2 rounded-[5px] flex items-center justify-center">
                <Settings size={22} className="text-[#EB5E14]" />
              </div>

              <div className="flex-1">
                <p className="subheading-3 !mb-1 text-[#EB5E14]">05</p>
                <p className="subheading-3 text-[#252525]">Operate</p>
                <p className="subtext subtextcolor mt-6 max-w-[85%]">
                  SLAs, observability, cost guardrails, quarterly optimization
                </p>
              </div>
            </div>

            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/Operate.webp')] bg-cover bg-center h-[300px] md:h-[auto] order-1 md:order-2"></div>
          </div>
        </div>
      </section>

      {/* Solution that fit your Industry */}
      <section className="py-16 px-6 bg-[#F2F7FC]">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="">Solution that fit your Industry</h2>
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

      {/* Case Studies */}
      <section className="px-6 bgblue1 py-16">
        <div className="container mx-auto">
          <SuccessStory
            title="Case Studies"
            subtitle="Real projects, real results. See how we've helped businesses transform their ideas into successful mobile applications that drive growth and user engagement.."
            caseStudies={SucessStoryDataSolution}
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

      {/* Testimonial */}
      <section className="py-16 px-6 bg-[#F6F6F6]">
        <div className="container mx-auto">
          <Testimonials
            title="See Why Our Clients Trust Us"
            subtitle="Discover how our solutions have helped clients achieve success. Hear their stories and experiences with our services."
            testimonials={testimonialsOne}
          />
        </div>
      </section>

      {/* What Makes Our Solutions Different */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="">What Makes Our Solutions Different</h2>
          </div>
          <div className="p-3 ">
            <div className="flex justify-between flex-wrap gap-0 max-w-[1100px] mx-auto mt-[100px]">
              {[
                {
                  icon: CircleCheckBig,
                  title: "Vendor-Agnostic",
                  subtitle: "Fit over fee",
                },
                {
                  icon: Target,
                  title: "Measurable",
                  subtitle:
                    "every sprint maps to a KPI (speed, cost, adoption, ROI)",
                },
                {
                  icon: Shield,
                  title: "Secure & Compliant",
                  subtitle: "privacy-first design, auditable controls",
                },
                {
                  icon: TrendingUp,
                  title: "Scalable by Design",
                  subtitle: "architectures that survive growth",
                },
                {
                  icon: Users,
                  title: "Enablement-First",
                  subtitle: "documentation, playbooks, and training included",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-[220px] text-center mb-[100px] mx-auto  relative"
                >
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
                  <div className="mt-[50px] relative pr-12 mx-auto  ">
                    <span className="h-[20px] w-[20px] rounded-full bluenew block absolute right-[33px] bottom-[-25px]"></span>
                    <div className="absolute right-[20px] top-[-40px] h-[4px] w-[20px] bluenew"></div>
                    <div className="absolute right-[40px] top-[-40px] h-[174px] w-[4px] bluenew"></div>
                    <div className="mt-4 text-[20px] font-bold text-[#111827]">
                      {item.title}
                    </div>
                    <div className="text-[16px] min-h-[78px]  subtextcolor mt-2">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* form */}
      <ContactUsForm
        heading="Get In Touch"
        subheading="With LogZero Technologies solutions, your business gets accuracy, compliance, and insights that drive real growth."
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

      {/* FAQs */}
      <FAQSection title="FAQs" subtitle="" faqs={faq4} />
    </>
  );
}
