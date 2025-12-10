"use client";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { Lztallcontext } from "@/context/Lztcontext";
import CardContainerBorder from "@/components/CardContainerBorder";
import Trusted from "@/components/Trusted";
import { Phone, Mail, MapPin, Send, Target, Lightbulb } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import GreenButton from "@/components/GreenButton";
import WhiteButton from "@/components/WhiteButton";
import HeroSection from "@/components/HeroSection";
import SuccessStory from "@/components/SucessStory";
import FAQSection from "@/components/FAQSection";
import ContactUsForm from "@/components/ContactUsForm";

import Head from "./head";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { Credential, values, testimonialsOne, SucessStoryData } =
    useContext(Lztallcontext);
  console.log(Credential, values, testimonialsOne, SucessStoryData);

  const BgColors = [
    "bgblue",
    "peachgreen",
    "bggreen",
    "peachgreen-100",
    "bgorange-100",
    "bgred-100",
    "bgdarkgreen",
  ];

  const services = [
    "Web Development Services",
    "Mobile App Development",
    "Data Management Services",
    "Cloud Services",
    "UI/UX Design & Development",
    "Testing & QA",
  ];

  const faqs = [
    {
      qId: 1,
      question: "What does LogZero Technologies do?",
      answer:
        "LogZero Technologies is a full-service IT company offering web development, mobile apps, cloud solutions, UI/UX design, ERP, CRM, and software development.",
    },
    {
      qId: 2,
      question: "Why should I choose LogZero Technologies for my project?",
      answer:
        "Because we combine expertise, innovation, transparency, and reliable delivery to create solutions that help businesses grow.",
    },
    {
      qId: 3,
      question: "What industries does LogZero Technologies work with?",
      answer:
        "We work with startups, enterprises, eCommerce, healthcare, real estate, education, IT, logistics, and many more.",
    },
    {
      qId: 4,
      question: "Do you work with international clients?",
      answer:
        "Yes. We serve clients across India, USA, UK, UAE, Europe, and other global locations.",
    },
    {
      qId: 5,
      question: "What technologies does your team specialize in?",
      answer:
        "Our team works with React, Node.js, Python, PHP, Laravel, AWS, Flutter, React Native, Figma, and modern enterprise tools.",
    },
    {
      qId: 6,
      question: "How does LogZero Technologies ensure project quality?",
      answer:
        "Through strong project planning, QA testing, code reviews, performance audits, and client feedback cycles.",
    },
  ];

  return (
    <>
      <Head> </Head>

      <HeroSection
        title="Empowering Innovation Through Technology"
        titlecolor={true}
        subtitle="Driven by Innovation, Fueled by Purpose"
        description="Founded in 2014, LogZero Technologies is a trusted provider of IT solutions and software development services. Our clients value our commitment to strict budget and time management, ensuring projects are completed on time and within budget."
        description2="We prioritize transparency in collaboration, fostering strong relationships built on open communication. Known for consistently delivering exceptional service quality, we are dedicated to exceeding industry standards and providing innovative, reliable solutions that drive business success."
        shortdescription={false}
        // shortdescription="Whether you're building a billion-dollar SaaS or a sleek e-commerce site, we architect, design, and deliver websites that outperform industry standards—every time."
        addCounterNo={false}
        BtnPrimary={true}
        playiconyes={true}
        buttonText="Explore Our Services"
        buttonLink="/services"
        buttonTarget=""
        buttonTextTwo="Join Our Team"
        buttonlinkurlTwo="/contact-us"
        buttonlinktargetTw=""
        isocertified={false}
        KeyFeatures={false}
        keyFeaturesList={false}
        servicesOptions={false}
        bannerimage="/assets/img/pegasus.jpg"
        nostats={[
          { Novalue: 100, indicator: "+", label: "Projects Completed" },
          { Novalue: 50, indicator: "+", label: "UX Designers" },
          { Novalue: 20, indicator: "+", label: "Active Projects" },
        ]}
      />

      {/* trusted section */}

      <Trusted
        bgcolorchange=""
        titlecolor="textblack"
        subtitlecolor="textblack"
        title="Trusted by Leading Companies"
        subtitle="We’ve partnered with industry leaders to deliver exceptional mobile experiences."
      />

      {/* mission & vision */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center">Mission & Vision</h2>
          <p className="max-w-full md:max-w-[75%] mx-auto">
            Delivering innovative, reliable, and scalable technology solutions
            that drive your success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-8">
            <div className="flex flex-col bg-[#EFF6FF] rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-600 text-white">
                  {" "}
                  <Target size={24} />
                </div>
                <h3 className="subheading-4">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To deliver innovative, reliable, and scalable technology
                solutions that drive your success. We're committed to
                transforming challenges into opportunities through cutting-edge
                technology.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col bg-[#F9F3FF] rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-purple-600 text-white">
                  <Lightbulb size={24} />
                </div>
                <h3 className="subheading-4">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                We envision a future where seamless digital transformation is
                accessible to all, helping businesses thrive in an ever-evolving
                technological landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* industries we serve  */}
      <section className="py-16 px-6 bg-[#F2F7FC]">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="">Industries We Serve</h2>
            <p className="mt-5 max-w-full md:max-w-[75%] mx-auto">
              We provide tailored solutions across diverse industries,
              understanding unique challenges and requirements
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
                text="+ More Industries"
                linkurl="/industry"
                linktarget=""
                MoveRighticon={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credential section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox mb-6">
            <h2 className="mb-4 text-center">Our Credentials</h2>
            <p className="text-center mb-12 max-w-full md:max-w-[70%] mx-auto">
              At LogZero Technologies, our credentials demonstrate expertise and
              commitment to excellence. With a track record of exceptional
              software solutions, we tailor services to meet diverse client
              needs, ensuring projects are in capable hands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-h-70% ">
            {Credential.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center bg-white rounded-2xl border border-gray-200 mt-18 p-4"
              >
                <div
                  className={`absolute top-[-50] w-19 h-19 flex items-center justify-center rounded-full text-white mb-4 ${item.color}`}
                >
                  {item.icon}
                </div>
                <div
                  className={`w-full py-1 my-6 text-white text-[20px] font-outfit ${item.color}`}
                >
                  {item.title}
                </div>
                <p className="text-center subtext subtextcolor">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* our core values  */}
      <section className="bg-white pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="headingbox text-center mb-10">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="mb-12 w-full mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-9 items-center">
            <div className="w-full">
              <Image
                src="/assets/img/values.svg"
                alt="Hands arranging blocks with values like integrity, honesty, ethics"
                width={594}
                height={563}
                className="object-cover rounded-xl shadow-lg w-full h-auto"
              />
            </div>

            <div className="space-y-8">
              {values.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bluenew">
                    {item.icon}
                  </div>

                  <div className="flex-1 ">
                    <h4 className="subheading-2 foutfit mb-3">{item.title}</h4>
                    <p className="subtext subtextcolor">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial  */}
      <section className="py-16 px-6 bgblue3">
        <div className="container mx-auto">
          <Testimonials
            title="See Why Our Clients Trust Us"
            subtitle="Discover how our solutions have helped clients achieve success. Hear their stories and experiences with our services."
            testimonials={testimonialsOne}
          />
        </div>
      </section>

      {/* Success story */}
      <section className="px-6 bgblue1 py-16">
        <div className="container mx-auto">
          <SuccessStory
            title="Our Success Story"
            subtitle="Real projects, real results. See how we’ve helped businesses transform their ideas into successful mobile applications that drive growth and user engagement."
            caseStudies={SucessStoryData}
          />
        </div>
      </section>

      {/* form */}
      <ContactUsForm
        heading="Let's Discuss Your Project"
        subheading="Fill out the form below and we'll get back to you within 24 hours with a customized solution for your development needs."
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
