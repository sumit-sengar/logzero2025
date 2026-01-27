"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import CardContainerBorder from "@/components/CardContainerBorder";
import { Lztallcontext } from "@/context/Lztcontext";
import CardContainer from "@/components/CardContainer";
import Testimonials from "@/components/Testimonials";
import CTB from "@/components/CTB";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import GreenButton from "@/components/GreenButton";
import SuccessStory from "@/components/SucessStory";
import FAQSection from "@/components/FAQSection";

import ContactUsForm from "@/components/ContactUsForm";

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

const statsData = [
  { value: "4.9/5", label: "Client Satisfaction" },
  { value: "95%", label: "Project Success Rate" },
  { value: "24/7", label: "Support Available" },
  { value: "100+", label: "Support Available" },
];

const faqs = [
  {
    qId: 1,
    question: "What is UX design and why is it important?",
    answer:
      "UX design ensures users have a smooth, positive experience with your product, making it more engaging and efficient.",
  },
  {
    qId: 2,
    question: "What factors affect UX design timelines?",
    answer:
      "Timelines vary depending on research needs, user flows, screens, testing stages, and complexity.",
  },
  {
    qId: 3,
    question: " What is included in your UX process?",
    answer:
      "User research, wireframing, prototyping, user flows, usability testing, and refinement.",
  },
  {
    qId: 4,
    question: "Can UX design improve conversions?",
    answer:
      "Yes. A strong UX helps reduce friction, improves navigation, and enhances satisfaction, leading to higher conversion rates.",
  },
  {
    qId: 5,
    question: "Do you offer UX audits?",
    answer:
      "Yes. We analyze your website/app to identify usability issues and provide actionable recommendations.",
  },
  {
    qId: 6,
    question: "What tools do you use for UX design?",
    answer: "Figma, Miro, Whimsical, Adobe XD, and other UX-centric tools.",
  },
];

const services = [
  "User Research",
  "Wireframing & Prototyping",
  "Interaction Design",
  "Usability Testing",
  "UX Audits",
  "Strategy & Consulting",
];

export default function UxServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    IndustriesWeServe,
    UxServices,
    Banner,
    testimonialsOne,
    SucessStoryData,
  } = useContext(Lztallcontext);
  // console.log(
  //   IndustriesWeServe,
  //   UxServices,
  //   Banner,
  //   testimonialsOne,
  //   SucessStoryData
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your submit logic (API call / form handler)
    // console.log("submit", Object.fromEntries(new FormData(e.target)));
  };

  const [openIndex, setOpenIndex] = useState(0); // first one open by default
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
   
      <HeroSection
        title="Design Experiences That Users Love"
        description="Our UX experts design with empathy — delivering digital products that are intuitive, engaging, and conversion-driven."
        description2={false}
        shortdescription={false}
        // shortdescription="Whether you're building a billion-dollar SaaS or a sleek e-commerce site, we architect, design, and deliver websites that outperform industry standards—every time."
        addCounterNo={true}
        BtnPrimary={true}
        buttonText="Get a Free UX Consultation"
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo="Watch Demo"
        buttonlinkurlTwo="/"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={true}
        keyFeaturesList={false}
        servicesOptions={services}
        bannerimage="/assets/img/Rectangle 148.png"
        nostats={[
          { Novalue: 100, indicator: "+", label: "Projects Completed" },
          { Novalue: 50, indicator: "+", label: "UX Designers" },
          { Novalue: 20, indicator: "+", label: "Active Projects" },
        ]}
      />

      {/* Service Section Start */}
      <section id="services" className="py-16 px-6 bggray1">
        <div className="container mx-auto  ">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center fsumana ">Industries We Serve</h2>
            <p className="text-center mb-10 max-w-full md:max-w-[55%] mx-auto fopensans">
              We bring expertise across diverse industries, creating tailored UX
              solutions that drive results for your specific market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 bg-white">
            {IndustriesWeServe?.map((carddata, index) => {
              const cardWithoutFeatureText = { ...carddata };
              delete cardWithoutFeatureText.featurestext;

              return (
                <CardContainerBorder
                  key={index}
                  index={index}
                  carddata={cardWithoutFeatureText}
                  IconbgColor="bluenew"
                  roundcorner="rounded-full"
                  borderadd="border1px"
                  shadowadd="shadow3"
                  bgadd=""
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* End Service Page Section */}

      {/* Ux Services section */}
      <section id="services" className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center fsumana">Our UX Design Services</h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto fopensans">
              Comprehensive UX design services to transform your digital
              products and deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {UxServices?.map((service, index) => (
              <CardContainer
                key={index}
                index={index}
                service={service}
                ctaType="none"
                IconbgColor={BgColors2[index % BgColors2.length]}
                shadowadd="shadow0"
                roundcorner="rounded-full"
                borderadd="border1px"
                bgadd={Gradients[index % Gradients.length]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Banner section */}
      <section className="bgsecondary py-16 px-6">
        <div className="container mx-auto ">
          <div className="text-center max-w-4xl mx-auto pb-5">
            <h2 className=" !text-white fsumana">
              Our UX Design Development Process
            </h2>
            <p className="my-3 text-white fopensans">
              A proven methodology that ensures exceptional results through
              systematic design and iteration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4 ">
            {Banner.map((p) => {
              const Icon = p.Icon;
              return (
                <article
                  key={p.id}
                  className="rounded-xl !border !border-white/25 p-5 bg-[#163B31] flex flex-col m-0 transition-colors duration-300 ease-in-out transition-transform hover:scale-104"
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow">
                    <div
                      className={`${p.colorClass} w-14 h-14 rounded-full flex items-center justify-center`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  <p className="mt-6 subheading-3 text-[#5F69F1] fsumana">
                    {p.phase}
                  </p>

                  <h3 className="subheading-2 finter !text-white">{p.title}</h3>

                  <p className="mt-4 subheading-3 !text-white !font-normal">
                    {p.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success story */}
      {/* <section className="px-6 bgblue1 py-16">
              <div className="container mx-auto">
                <SuccessStory
                  title="Our Success Story"
                  subtitle="Real projects, real results. See how we’ve helped businesses transform their ideas into successful mobile applications that drive growth and user engagement."
                  caseStudies={SucessStoryData}
                />
                </div>
            </section> */}

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

      <CTB stats={statsData} />

      {/*Contact Us Form */}
      <ContactUsForm
        heading="Let's Start Your UX Design Project"
        subheading="Tell us about your project, and we'll craft the best UX solution for your needs."
        contactCardTitle="Get in Touch"
        contactText="Ready to transform your digital experience? We're here to help you create user-centered designs that drive results and delight your customers."
         phone={{
          label: "Expert Developer",
          number: "Skilled professionals with proven track records",
          
        }}
        email={{
          label: "Quick Turnaround",
          address: "Start your project within 24-48 hours",
        }}
        emailComposeMode="gmail"
        address={{
          label: "Competitive Rates",
          lines: ["Quality development at affordable prices"],
        }}
        contactDetails={{
          need: "Need immediate Help?",
          urgent: "Mail us directly for urgent requirements",
          email: "sales@logzerotechnologies.com",
        }}
        form={{
          respondText:
            "🔒Your information is secure and will only be used to contact you about your inquiry.",
        }}
        onSubmit={(formData) => {
          // console.log("Form submitted:", formData);
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
