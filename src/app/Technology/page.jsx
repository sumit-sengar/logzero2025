"use client";
import HeroSection from "@/components/HeroSection";
import { useContext, React, useEffect } from "react";
import FAQSection from "@/components/FAQSection";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock2,
  StretchHorizontal,
  Bot,
  Database,
  Smartphone,
  Cloud,
  Code,
} from "lucide-react";
import { Lztallcontext } from "@/context/Lztcontext";
import Image from "next/image";
import GreenButton from "@/components/GreenButton";
import ContactUsForm from "@/components/ContactUsForm";

export default function solutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, features3, Banner7 } = useContext(Lztallcontext);
  console.log(data, features3, Banner7);

  const services = [
    "Front-end & UI/UX",
    "Back-end & API",
    "Databases & Data Analytics",
    "Cloud & DevOps",
    "Mobile & Cross-Platform",
    "AI & Automation",
  ];

  const faqs = [
    {
      qId: 1,
      question: "What technologies does LogZero Technologies specialize in?",
      answer:
        "We work with React, Node.js, Next.js, Laravel, Python, AWS, Flutter, React Native, and other latest tech stacks.",
    },
    {
      qId: 2,
      question: " How do you choose the right tech stack for a project?",
      answer:
        "We evaluate project goals, scalability needs, security requirements, and performance expectations.",
    },
    {
      qId: 3,
      question: "Do you use the latest frameworks and development tools?",
      answer:
        "Yes. We stay updated with modern tools, libraries, and services.",
    },
    {
      qId: 4,
      question: " Can the technology stack be customized?",
      answer:
        "Absolutely. We customize the tech stack based on business needs and long-term growth plans.",
    },
    {
      qId: 5,
      question: "Why is choosing the right technology important?",
      answer:
        "The right tech stack ensures speed, stability, security, scalability, and smooth user experience.",
    },
    {
      qId: 6,
      question: "Do you work with open-source and enterprise technologies?",
      answer:
        "Yes. We use open-source frameworks, enterprise tools, and various platforms depending on requirements.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Powered by Cutting-Edge Technologies"
        description="We leverage the best tech stacks — from React and Node.js to AWS and Python — to build secure, scalable, and future-ready solutions."
        description2={false}
        shortdescription={false}
        // shortdescription="Whether you're building a billion-dollar SaaS or a sleek e-commerce site, we architect, design, and deliver websites that outperform industry standards—every time."
        addCounterNo={true}
        BtnPrimary={true}
        buttonText="Get Started Today"
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo=""
        buttonlinkurlTwo="/"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={true}
        keyFeaturesList={false}
        servicesOptions={services}
        bannerimage="/assets/img/Turning Innovation into Impact with CuttingEdge-heroSection.webp"
        nostats={[]}
      />

      {/* Why Our Technology Stack Matters */}
      <section className="py-16 px-6">
        <div className=" max-w-6xl mx-auto text-center">
          <h2 className=" mb-3">Why Our Technology Stack Matters</h2>
          <p className="mb-12 max-w-[40%] mx-auto">
            We solve real business pain points with the right technology choices
          </p>

          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-2">
            {data.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#E6E6E6] p-5 flex flex-col gap-4 shadow-sm bg-white "
              >
                <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-md">
                  {item.icon}
                </div>
                <h3 className="text-left subheading-2 finter">{item.title}</h3>

                <div className="rounded-lg bg-[#FFF4F3]  p-3 border-l-4 border-l-[#f44336] ">
                  <div className="flex items-center gap-2 text-[#F26161] font-medium">
                    <Clock2 size={24} />
                    <h6 className="finter">What it costs you:</h6>
                  </div>
                  <p className="text-gray-700 !text-[14px] text-left pl-8 mt-1">
                    {item.cost}
                  </p>
                </div>

                <div className="rounded-lg bg-[#F0FDF4] p-3 border-l-4 border-l-[#36CB6C]">
                  <div className="flex items-center gap-2 text-[#36CB6C] font-medium">
                    <Clock2 size={24} />
                    <h6 className=" ">How we solve it:</h6>
                  </div>
                  <p className="text-gray-700 text-left pl-8 mt-1 !text-[14px]">
                    {item.solve}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Technology & Tooling */}
      <section className="py-16 px-6 bg-[#F2F7FC]">
        <div className="container mx-auto max-w-7xl">
          <div className="headingbox pb-2 mb-10">
            <h2 className="mb-4 text-center">Our Technology & Tooling</h2>
            <p className="text-center mb-10 max-w-full md:max-w-[55%] mx-auto">
              The stacks, tools, and platforms we work with — grouped by
              category so you know exactly what we bring to the table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {/* Card 1 */}
            <div className="flex flex-col bg-white border border-[#E6E6E6] rounded-[10px] shadow9  transition-transform hover:scale-105">
              <div className=" p-5 flex flex-col gap-4 flex-grow">
                <div className="w-12 h-12 p-2 bg-[#DBEAFE] rounded-[5px] flex items-center justify-center">
                  <Code size={24} className="text-[#0A77FF]" />
                </div>
                <p className="subheading-2 foutfit pt-2 ">Front-end & UI/UX</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Vue.js",
                    "Angular",
                    "TypeScript",
                    "JavaScript (ES6+)",
                    "CSS3 (SASS/LESS)",
                    "Bootstrap",
                    "MUI",
                    "HTML5",
                    "Tailwind",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-[10px] py-[5px] border !border-[#000000] text-[16px] finter rounded-[20px]  text-[#181818]"
                    >
                      {tech}
                    </span>
                  ))}
                  {/* <button className="px-[10px] py-[5px] bluenew text-white text-[16px] finter rounded-[20px] ">
                    More...
                  </button> */}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col bg-white border border-[#E6E6E6] rounded-[10px]  transition-transform hover:scale-105">
              <div className="p-5 flex flex-col gap-4 flex-grow">
                <div className="w-12 h-12 p-2 bg-[#CCFBF1] rounded-[5px] flex items-center justify-center">
                  <StretchHorizontal size={24} className="text-[#13978B]" />
                </div>
                <p className="subheading-2 foutfit pt-2">Back-end & API</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "PHP",
                    "Node.js",
                    "Python",
                    "Java",
                    "Express.js",
                    "Django",
                    "Laravel",
                    "REST",
                    "GraphQL",
                    "MUI",
                    "OAuth/JWT Authentication",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-[10px] py-[5px] border !border-[#000000] text-[16px] finter rounded-[20px]  text-[#181818]"
                    >
                      {tech}
                    </span>
                  ))}
                  {/* <button className="px-[10px] py-[5px] bluenew text-white text-[16px] finter rounded-[20px] ">
                    More...
                  </button> */}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col bg-white border border-[#E6E6E6] rounded-[10px] transition-transform hover:scale-105">
              <div className="p-5 flex flex-col gap-4 flex-grow">
                <div className="w-12 h-12 p-2 bg-[#F3E8FF] rounded-[5px] flex items-center justify-center">
                  <Database size={24} className="text-[#A265EE]" />
                </div>
                <p className="subheading-2 foutfit pt-2">
                  Databases & Data Analytics
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "MySQL",
                    "PostgreSQL",
                    "SQL Server",
                    "Data Analyticss",
                    "Real-time Data & Streams",
                    "Power BI",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-[10px] py-[5px] border !border-[#000000] text-[16px] finter rounded-[20px]  text-[#181818]"
                    >
                      {tech}
                    </span>
                  ))}
                  {/* <button className="px-[10px] py-[5px] bluenew text-white text-[16px] finter rounded-[20px] ">
                    More...
                  </button> */}
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col bg-white border border-[#E6E6E6] rounded-[10px]  transition-transform hover:scale-105">
              <div className="p-5 flex flex-col gap-4 flex-grow">
                <div className="w-12 h-12 p-2 bg-[#FEE2E2] rounded-[5px] flex items-center justify-center">
                  <Cloud size={24} className="text-[#DC282A]" />
                </div>
                <p className="subheading-2 foutfit pt-2">Cloud & DevOps</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS",
                    "Docker",
                    "Kubernetes",
                    "CI/CD Pipelines",
                    "Prometheus",
                    "Grafana",
                    "ELK",
                    "Auto-scaling & Redundancy",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-[10px] py-[5px] border !border-[#000000] text-[16px] finter rounded-[20px]  text-[#181818]"
                    >
                      {tech}
                    </span>
                  ))}
                  {/* <button className="px-[10px] py-[5px] bluenew text-white text-[16px] finter rounded-[20px] ">
                    More...
                  </button> */}
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col bg-white border border-[#E6E6E6] rounded-[10px]  transition-transform hover:scale-105">
              <div className="p-5 flex flex-col gap-4 flex-grow">
                <div className="w-12 h-12 p-2 bg-[#FFEDD5] rounded-[5px] flex items-center justify-center">
                  <Smartphone size={24} className="text-[#EB5E14]" />
                </div>
                <p className="subheading-2 foutfit pt-2">
                  Mobile & Cross-Platform
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "iOS (Swift)",
                    "Android (Kotlin+Java)",
                    "React Native",
                    "Flutter",
                    "Offline/Sync Capabilities",
                    "Device Testing & QA",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-[10px] py-[5px] border !border-[#000000] text-[16px] finter rounded-[20px]  text-[#181818]"
                    >
                      {tech}
                    </span>
                  ))}
                  {/* <button className="px-[10px] py-[5px] bluenew text-white text-[16px] finter rounded-[20px] ">
                    More...
                  </button> */}
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col bg-white border border-[#E6E6E6] rounded-[10px]  transition-transform hover:scale-105">
              <div className="p-5 flex flex-col gap-4 flex-grow">
                <div className="w-12 h-12 p-2 bg-[#DCFCE7] rounded-[5px] flex items-center justify-center">
                  <Bot size={24} className="text-[#16A35E]" />
                </div>
                <p className="subheading-2 foutfit pt-2">AI & Automation</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Predictive Analytics",
                    "Recommendation Engines",
                    "Workflow Automation",
                    "Payment Gateways & APIs",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-[10px] py-[5px] border !border-[#000000] text-[16px] finter rounded-[20px]  text-[#181818]"
                    >
                      {tech}
                    </span>
                  ))}
                  {/* <button className="px-[10px] py-[5px] bluenew text-white text-[16px] finter rounded-[20px] ">
                    More...
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Apply These for You */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              How We Apply These for You
            </h2>
            <p className="max-w-[55%] mx-auto text-center mt-2">
              Turning technology into business value across different domains
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex ">
              <div className="self-center w-full px-4 sm:px-0 ">
                <div className="relative  overflow-hidden md:h-[450px] sm:h-[500px] w-full mx-auto ">
                  <Image
                    src="/assets/img/How-We-Apply-These-for-You.jpg"
                    alt="How We Apply These for You.webp"
                    width={459}
                    height={450}
                    className="rounded-xl object-cover h-full w-full "
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {features3.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start p-4 rounded-xl border !border-[#E6E6E6] hover:bg-[#EAF1FB]  transition-transform hover:scale-105"
                >
                  <div className="w-12 h-12 pt-1 flex items-center justify-center rounded-lg bluenew mr-4 shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="pb-3">{f.title}</h4>
                    </div>
                    <p className="subtext subtextcolor">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our Tech Smarter */}
      <section className="bgsecondary py-16 px-6">
        <div className="container mx-auto ">
          <div className="text-center max-w-5xl mx-auto pb-5 ">
            <h2 className=" !text-white ">What Makes Our Tech Smarter</h2>
            <p className="my-3 text-white max-w-[60%] text-center mx-auto ">
              We don't just write code — we build solutions that last
            </p>
          </div>

          <div className="grid grid-cols-1  lg:grid-cols-3  gap-4 ">
            {Banner7.map((p) => {
              const Icon = p.Icon;
              return (
                <article
                  key={p.id}
                  className="border !border-solid [border-image-slice:1] !border-[#FFFFFF33]
                    p-5 items-start rounded-xl
                   bg-[#163B31] flex flex-col m-0 transition-colors duration-300 
                  ease-in-out transition-transform hover:scale-104"
                >
                  <div className=" mb-6">
                    <div
                      className={`${p.colorClass} w-14 h-14 rounded-full flex items-center justify-center`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>

                  <div className="">
                    <h2 className="!leading-[128%] subheading-4 max-w-[78%] !text-white">
                      {p.title}
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
                text=" + More Industries"
                linkurl="/industry"
                linktarget=""
                MoveRighticon={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* form */}
      <ContactUsForm
        heading="Get In Touch"
        subheading="With LogZero Technologies, your business gets accuracy, compliance, and insights that drive real growth."
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
