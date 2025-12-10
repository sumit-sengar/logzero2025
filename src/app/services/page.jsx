"use client";
import { useContext, React, useEffect } from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Lztallcontext } from "@/context/Lztcontext";
import CardContainer from "@/components/CardContainer";
import CardContainerBorder from "@/components/CardContainerBorder";
import SuccessStory from "@/components/SucessStory";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import CTA from "@/components/CTA";
import GreenButton from "@/components/GreenButton";
import { Check, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import ContactUsForm from "@/components/ContactUsForm";

export default function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    Servicesmain,
    Banner6,
    IndustriesWeServe2,
    SucessStoryData,
    testimonialsOne,
  } = useContext(Lztallcontext);
  console.log(
    Servicesmain,
    Banner6,
    IndustriesWeServe2,
    SucessStoryData,
    testimonialsOne
  );

  const BgColors = [
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

  const BgColors1 = [
    "bg-[#D91616]",
    "bg-[#10A045]",
    "bg-[#2563EB]",
    "bg-[#902DE9]",
    "bg-[#038F82]",
    "bg-[#E84C00]",
    "bg-[#4338E3]",
    "bg-[#4A5462]",
    "bg-[#DB2777]",
    "bg-[#CA8A04]",
  ];

  const Gradients1 = [
    "gradient5",
    "gradient2",
    "gradient1",
    "gradient5",
    "gradient1",
    "gradient5",
    "gradient2",
    "gradient2",
    "gradient5",
    "gradient5",
  ];

  const services = [
    "Web Development Services",
    "Mobile App Development",
    "Cloud & DevOps Solutions",
    "Data Management & Analytics",
    "Virtual Resource Management",
    "Testing & QA",
  ];

  return (
    <>
      <HeroSection
        title=" Powering Your Business with Tailored Tech Solutions"
        titlecolor={false}
        subtitle=""
        description="We specialize in Web & Mobile Development, Cloud Solutions, DevOps, Data Management, and more. Let us help you scale your business effortlessly."
        description2="Your success is our mission—customized tech solutions for your business needs."
        shortdescription={false}
        addCounterNo={false}
        BtnPrimary={true}
        playiconyes={true}
        buttonText="Get Your Free Consultation Today!"
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo="See Our Work"
        buttonlinkurlTwo="/"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={false}
        keyFeaturesList={false}
        servicesOptions={services}
        bannerimage="/assets/img/service-main-heroSection.webp"
        nostats={[]}
      />

      {/* Our Services: Comprehensive Tech Solutions */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center ">
              Our Services: Comprehensive Tech Solutions
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto ">
              We offer a wide range of technology services to meet your business
              needs. From custom web development to data analytics, we've got
              you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {Servicesmain?.map((service, index) => (
              <CardContainer
                key={index}
                index={index}
                service={service}
                ctaType="primary"
                IconbgColor={BgColors[index % BgColors.length]}
                shadowadd="shadow0"
                roundcorner="rounded-full"
                borderadd="border1px"
                bgadd={Gradients[index % Gradients.length]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="bgsecondary py-16 px-6">
        <div className="container mx-auto ">
          <div className="text-center max-w-4xl mx-auto pb-5">
            <h2 className=" !text-white ">Why Choose Us?</h2>
            <p className="my-3 text-white ">
              We’re a full-stack technology partner, providing services from
              custom websites to mobile apps, cloud solutions, DevOps, and data
              analytics. We work with startups and established enterprises
              alike, delivering cutting-edge solutions that ensure your business
              stays ahead of the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 ">
            {Banner6.map((p) => {
              const Icon = p.Icon;
              return (
                <article
                  key={p.id}
                  className="rounded-xl !border !border-white/5 p-5 bg-[#163B31] flex flex-col m-0 transition-colors duration-300 ease-in-out transition-transform hover:scale-104"
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow">
                    <div
                      className={`${p.colorClass} w-14 h-14 rounded-full flex items-center justify-center`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  <p className="mt-6 subheading-3 text-[#5F69F1] ">{p.step}</p>

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

      {/* Industries We Serve */}
      <section id="services" className="pt-16 px-6 ">
        <div className="container mx-auto  ">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center ">Industries We Serve</h2>
            <p className="text-center mb-10 max-w-full md:max-w-[55%] mx-auto ">
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

      {/* Our Success Story */}
      <section className="px-6  py-16">
        <div className="container mx-auto">
          <SuccessStory
            title="Our Success Story"
            subtitle="Real projects, real results. See how we've helped businesses transform their ideas into successful mobile applications that drive growth and user engagement."
            caseStudies={SucessStoryData}
          />
        </div>
      </section>

      {/* Testimony section */}
      <section className="py-16 px-6 bg-[#F1F6FB]">
        <div className="container mx-auto">
          <Testimonials
            title="See Why Our Clients Trust Us"
            subtitle="Discover how our solutions have helped clients achieve success. Hear their stories and experiences with our services."
            testimonials={testimonialsOne}
          />
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 item-center ">
            <div className="w-full">
              <img
                src="/assets/img/Our Approach.webp"
                alt="Our Approach"
                height="[383px]"
                width="[564px]"
                className="h-full w-full object-contain mx-auto"
              />
            </div>

            <div className="space-y-8">
              <h2 className=""> Our Approach</h2>
              <p className="text-[18px] subtextcolor">
                At Tech Solutions, we believe in a collaborative approach to
                technology. We don't just build solutions; we partner with you
                to understand your business challenges and goals, ensuring that
                the technology we implement drives real results.
              </p>

              <ul className="list-[disc] list-inside text-[18px] subtextcolor leading-8">
                <li>Deep discovery and requirements analysis</li>
                <li>Agile development methodology</li>
                <li>Regular client checkpoints and feedback loops</li>
                <li>Continuous improvement and optimization</li>
                <li>Long-term support and partnership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Affordable, Transparent Pricing */}
      {/* <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="text-center pb-2">
              Affordable, Transparent Pricing
            </h2>
            <p className="text-center md:max-w-[60%] mx-auto">
              No hidden fees. No surprise charges. We offer competitive pricing
              with clear value for each of our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
         
            <div className="flex flex-col border border-[#E6E6E6] rounded-[10px] shadow transition-transform hover:scale-105">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="subheading-4 mb-3">Starter Package</h3>
                <p className="subtext subtextcolor">
                  Perfect for small businesses or startups
                </p>
                <h2 className="mt-4 !text-[#5BC2A7]">$2,499</h2>
                <ul className="subtext subtextcolor mt-4">
                  <li className="flex items-start gap-2 mb-3">
                    <Check className="text-[#5BC2A7] w-[20px]" /> Website design
                    & development
                  </li>
                  <li className="flex items-start gap-2 mb-3">
                    <Check className="text-[#5BC2A7] w-[20px]" /> Mobile
                    responsive layout
                  </li>
                  <li className="flex items-start gap-2 mb-3">
                    <Check className="text-[#5BC2A7] w-[20px]" /> Basic SEO
                    optimization
                  </li>
                  <li className="flex items-start gap-2 mb-3">
                    <Check className="text-[#5BC2A7] w-[20px]" /> Content
                    management system
                  </li>
                  <li className="flex items-start gap-2 mb-3">
                    <Check className="text-[#5BC2A7] w-[20px]" /> One month of
                    maintenance
                  </li>
                </ul>
                <Link
                  href="#"
                  className="mt-auto flex justify-center items-center gap-2 text-[15px] font-semibold leading-[22px] textcolor bluenew border-2 border-[var(--bg-blue-700)] rounded-[6px] px-[35px] py-[17px] hover:bg-[#179A8E] hover:text-white transition-transform hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>

         
            <div className="flex flex-col gradient2 border-[2] border-[#5BC2A7] rounded-[10px] shadow m-0 transition-colors duration-300 ease-in-out transition-transform hover:scale-104">
              <div className="gap-4 flex flex-col flex-grow">
                <div className="bgblue7 p-3 text-[#fff] text-center subtext rounded-t-[6px]">
                  Most Popular
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="subheading-4 mb-3">Growth Package</h3>
                  <p className="subtext subtextcolor">
                    Ideal for growing companies with expanded needs
                  </p>
                  <h2 className="mt-4 !text-[#5BC2A7]">$4,999</h2>
                  <ul className="subtext subtextcolor mt-4">
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" /> Everything
                      in Starter Package
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" /> Custom
                      mobile app development
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" /> Cloud
                      integration & hosting
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" /> E-commerce
                      functionality
                    </li>
                    <li className="flex items-start gap-2 mb-3">
                      <Check className="text-[#5BC2A7] w-[20px]" /> Advanced
                      analytics
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="mt-auto flex justify-center items-center gap-2 text-[15px] font-semibold leading-[22px] hover:text-white textcolor bluenew   border border-[var(--bg-blue-700)] rounded-[6px] px-[35px] py-[17px] hover:bg-[#179A8E] transition-transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>

         
            <div className="flex flex-col border border-[#E6E6E6] rounded-[10px] shadow transition-transform hover:scale-105">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="subheading-4 mb-3">Enterprise Package</h3>
                <p className="subtext subtextcolor">
                  Comprehensive solutions for large organizations
                </p>
                <h2 className="mt-4 !text-[#5BC2A7]">$9,999</h2>
                <ul className="subtext subtextcolor mt-4">
                  <li className="flex items-start gap-2 mb-3">
                    <Check className="text-[#5BC2A7] w-[20px]" /> Everything in
                    Growth Package
                  </li>
                  <li className="flex items-start gap-2 mb-3">
                    <Check className="text-[#5BC2A7] w-[20px]" /> Custom
                    enterprise software
                  </li>
                  <li className="flex items-start gap-2 mb-3">
                    <Check className="text-[#5BC2A7] w-[20px]" /> API
                    development & integration
                  </li>
                  <li className="flex items-start gap-2 mb-3">
                    <Check className="text-[#5BC2A7] w-[20px]" /> Data migration
                    & management
                  </li>
                  <li className="flex items-start gap-2 mb-3">
                    <Check className="text-[#5BC2A7] w-[20px]" /> DevOps
                    implementation
                  </li>
                </ul>
                <Link
                  href="#"
                  className="mt-auto flex justify-center items-center gap-2 text-[15px] font-semibold leading-[22px] textcolor bluenew  border-2 border-[var(--bg-blue-700)] rounded-[6px] px-[35px] py-[17px] hover:bg-[#179A8E] hover:text-white transition-transform hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
         <div className="p-8 w-full ">
      <p className="text-lg text-gray-800 text-center">
        Need a custom solution?{' '}
        <Link
          href="/contact-us"
          className="text-teal-500 hover:text-teal-600 transition-colors duration-200"
        >
          [Contact us]
        </Link>
        {' '}for a personalized quote.
      </p>
    </div>
        </div>
      </section> */}

      {/* Let's Get Started on Your Project! */}
      <section className="px-6 pb-16">
        <CTA
          title="Let's Get Started on Your Project!"
          description="Whether you're a startup looking to launch a website or an enterprise in need of cloud solutions, we have the expertise to bring your ideas to life. Contact us today to schedule your consultation."
          linkUrl="/contact-us"
          ctabtnType="primary"
          linkText="Get Free Quote"
        />
      </section>

      {/* Contact Us */}
      <ContactUsForm
        heading="Contact Us"
        subheading="Tell us about your project, and we'll get back to you within 24 hours with a tailored plan."
        contactCardTitle="Get in Touch"
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
