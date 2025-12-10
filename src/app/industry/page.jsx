"use client";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import CardContainer from "@/components/CardContainer";
import { useContext, useState, useEffect } from "react";
import { Lztallcontext } from "@/context/Lztcontext";
import Link from "next/link";
import SuccessStory from "@/components/SucessStory";
import { Phone, Mail, MapPin, Send, Target, Users, Zap } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import ContactUsForm from "@/components/ContactUsForm";

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

export default function IndustryWeServe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    CoreServices,
    Industriesweservepage,
    MoreIndustriesData,
    SucessStoryData,
    Banner2,
  } = useContext(Lztallcontext);
  console.log(
    CoreServices,
    Industriesweservepage,
    MoreIndustriesData,
    SucessStoryData,
    Banner2
  );

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [showMore, setShowMore] = useState(false);

  const BgColors = [
    "bgblue",
    "bgpurpal4",
    "bgdarkgreen",
    "bgorange-100",
    "bgred-100",
    "bggray",
    "peachgreen",
  ];

  const faqs = [
    {
      question: "How can LogZero  help my business with cloud services?",
      answer:
        "Our FAQ area is the best place to look to find answers to your questions. Our community and support team constantly updates the questions and answers.",
    },
    {
      question: "Do you provide custom mobile app development for startups?",
      answer:
        "Yes, we provide continuous support to help with updates, bug fixes, and improvements.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "Absolutely, we assist with preparing your app and submitting it to both iOS and Android stores.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Our consultation includes project scope discussion, technical feasibility analysis, and cost estimation.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Our consultation includes project scope discussion, technical feasibility analysis, and cost estimation.",
    },
  ];

  const services = [
    "Web Development Services",
    "Mobile App Development",
    "Data Management",
    "Cloud Services",
    "UI/UX Design",
    "Server Management",
  ];

  return (
    <>
      <HeroSection
        title="Tailored IT Solutions for Every Industry"
        description="From Web Development to Mobile Apps, Cloud Services to Data Management,
         Logzerotechnologies provides comprehensive IT solutions across industries like Healthcare, Finance, Retail, Manufacturing, and more."
        description2={false}
        addCounterNo={true}
        BtnPrimary={true}
        buttonText="Request a Consultation"
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo="Call Us Today"
        buttonlinkurlTwo="/"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={false}
        keyFeaturesList={false}
        playiconyes={true}
        servicesOptions={services}
        bannerimage="/assets/img/industry-herosection.webp"
        nostats={[
          { Novalue: 1000, indicator: "+", label: "Projects Completed" },
          { Novalue: 100, indicator: "+", label: "Expert Developer" },
          { Novalue: 10, indicator: "+", label: "Industries Served" },
        ]}
      />

      {/* Comprehensive Services */}
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

          {/* Desktop / large screens */}
          <div
            className="hidden md:flex items-start justify-around min-h-[350px] bg-contain bg-center bg-no-repeat py-12"
            style={{ backgroundImage: "url('/assets/img/Group.webp')" }}
          >
            <div className="flex flex-col items-center text-center w-1/3 max-w-[260px] px-4">
              <div className="mb-4 w-12 h-12 bg-[#D1FEFF] flex items-center justify-center rounded-lg">
                <Target size={24} className="text-blue-400" />
              </div>
              <h3 className="mb-2">Industry-Focused</h3>
              <p className="subtext subtextcolor !leading-snug">
                Solutions designed specifically for your industry’s unique
                challenges and requirements.
              </p>
            </div>

            <div className="flex flex-col items-center text-center w-1/3 max-w-[240px] px-4">
              <div className="mb-4 w-12 h-12 flex items-center justify-center bg-[#F9FFEA] rounded-lg">
                <Users size={24} className="text-lime-300" />
              </div>
              <h3 className="mb-2">Expert Team</h3>
              <p className="subtext subtextcolor !leading-snug">
                Experienced professionals with deep knowledge across multiple
                technology stacks.
              </p>
            </div>

            <div className="flex flex-col items-center text-center w-1/3 max-w-[240px] px-4">
              <div className="mb-4 w-12 h-12 flex items-center justify-center bg-[#FEEFEE] rounded-lg">
                <Zap size={24} className="text-red-400" />
              </div>
              <h3 className="mb-2">Cutting-Edge Tech</h3>
              <p className="subtext subtextcolor !leading-snug">
                Latest technologies and best practices to ensure your solutions
                are future-ready.
              </p>
            </div>
          </div>

          {/* Mobile & tablet */}
          <div
            className="md:hidden relative w-full"
            style={{
              backgroundImage: "url('/assets/img/GroupM.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              height: "860px",
            }}
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center px-4"
              style={{ top: "6%" }}
            >
              <div className="w-8 h-8 bg-[#D1FEFF] flex items-center justify-center rounded-lg">
                <Target size={16} className="text-blue-400" />
              </div>
              <h3 className="mt-3 text-sm leading-tight font-semibold">
                Industry <br /> Focused
              </h3>
            </div>

            <div
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center px-4"
              style={{ top: "43%" }}
            >
              <div className="w-8 h-8 bg-[#F9FFEA] flex items-center justify-center rounded-lg">
                <Users size={16} className="text-lime-300" />
              </div>
              <h3 className="mt-3 text-sm leading-tight font-semibold">
                Expert <br /> Team
              </h3>
            </div>

            <div
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center px-4"
              style={{ top: "77%" }}
            >
              <div className="w-8 h-8 bg-[#FEEFEE] flex items-center justify-center rounded-lg">
                <Zap size={16} className="text-red-400" />
              </div>
              <h3 className="mt-3 text-sm leading-tight font-semibold">
                Cutting-Edge <br /> Tech
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Industry we serve */}
      <section className="py-16 px-6 ">
        <div className="container mx-auto ">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center ">Industry we serve</h2>
            <p className="text-center mb-10 max-w-full md:max-w-[75%] mx-auto ">
              We offer customized solutions for all industries, ensuring that
              each sector gets the attention it needs. By understanding unique
              challenges, we develop innovative strategies that foster growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {Industriesweservepage?.map((service, index) => (
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

          {showMore && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
              {MoreIndustriesData?.map((service, index) => (
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
          )}

          <div className="flex gap-4 mt-12 justify-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center justify-center gap-2 text-[15px] font-semibold leading-[22px] text-white bg-[var(--bg-green-300)] border border-[var(--bg-green-300)] rounded-[6px] px-[35px] py-[17px] font-finter transition duration-300 ease-in-out hover:bg-[#1E8767] hover:text-white transition-transform hover:scale-104 cursor-pointer"
            >
              {showMore ? "- Show less" : "+ More Industries"}
            </button>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="px-6 ">
        <div className="container bgsecondary text-white text-left rounded-[8px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 ml-8">
            <h2 className="mb-4 !text-white">Is Your Industry Missing?</h2>
            <p className="w-full sm:max-w-full md:max-w-[85%]">
              We collaborate with companies from various industries. Our
              adaptable strategy enables us to meet the unique requirements and
              regulations of each sector.
            </p>
          </div>

          <div className="flex-shrink-0 mr-7">
            <Link
              href="/contact-us"
              className="inline-block bluenew text-white font-semibold text-[15px] leading-[22px] font-inter px-[24px] py-[17px] rounded-full transition-all duration-300 hover:bg-[#4FB79C]  hover:shadow-md transition-transform hover:scale-107"
            >
              Share Your Industry Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services */}

      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center ">Our Core Services</h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto ">
              Tailored Solutions for Your Industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 ">
            {CoreServices?.map((service, index) => (
              <CardContainer
                key={index}
                index={index}
                service={service}
                maincartrounded="rounded-[10px]"
                ctaType="primary"
                IconbgColor={BgColors2[index % BgColors2.length]}
                shadowadd="shadow"
                bordercolor="border-[#E6E8E999]"
                roundcorner="rounded-full"
                borderadd="border"
                bgadd={Gradients[index % Gradients.length]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Success story */}
      <section className="px-6 bgblue1 py-16">
        <div className="container mx-auto">
          <SuccessStory
            title="Case Studies"
            subtitle="Real projects, real results. See how we’ve helped businesses transform their ideas into successful mobile applications that drive growth and user engagement."
            caseStudies={SucessStoryData}
          />
        </div>
      </section>

      {/* Banner Section  */}
      <section className="bgsecondary py-16 px-6">
        <div className="container mx-auto ">
          <div className="text-center max-w-5xl mx-auto pb-5 ">
            <h2 className=" !text-white ">
              Understanding User Challenges with LogZero Technologies
            </h2>
            <p className="my-3 text-white  ">
              At LogZero Technologies, we offer customized IT solutions designed
              to meet the unique demands of your industry. With extensive
              experience, a focus on client satisfaction, and the latest
              technology, we empower businesses to thrive in the modern digital
              world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 ">
            {Banner2.map((p) => {
              const Icon = p.Icon;
              return (
                <article
                  key={p.id}
                  className="border border-solid [border-image-slice:1] !border-[#FFFFFF33]
                    p-5 items-center rounded-xl
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

                  <div className="text-center">
                    <h3 className=" min-h-[52px] !text-white">{p.title}</h3>

                    <p className="mt-8 subheading-3 !text-white !font-normal ">
                      {p.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* form */}
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
      <FAQSection title="FAQs" subtitle="" faqs={faqs} />
    </>
  );
}
