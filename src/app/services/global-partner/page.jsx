"use client";
import CTA from "@/components/CTA";
import { useEffect, useContext } from "react";
import { MapPin, Phone, Mail, Send, FileCheck, Headset } from "lucide-react";
import SucessStory from "@/components/SucessStory";
import Image from "next/image";

import { Lztallcontext } from "@/context/Lztcontext";
import CardContainer from "@/components/CardContainer";
import HeroSection from "@/components/HeroSection";

import Globalbanner from "../../../../public/assets/img/Global.jpg";
import WhiteButton from "@/components/WhiteButton";
import GreenButton from "@/components/GreenButton";
import SuccessStory from "@/components/SucessStory";
import CardContainerBorder from "@/components/CardContainerBorder";
import Head from "./head";
import FAQSection from "@/components/FAQSection";
import ContactUsForm from "@/components/ContactUsForm";

export default function Global() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { services, features, industries } = useContext(Lztallcontext);
  // console.log(services);

  const BgColors = [
    "bgred-100",
    "bggreen-200",
    "bgpurpal5",
    "bgblue0",
    "bgpurpal6",
    "bgorange-100",
  ];

  const BgColors2 = [
    "bgblue",
    "peachgreen",
    "bggreen",
    "bgpurpal",
    "bgorange",
    "bgred-100",
  ];

  const BgColors3 = ["bgblue0", "bgpurpal5", "bggreen-200", "bggray"];

  const Gradients = [
    "gradient1",
    "gradient2",
    "gradient3",
    "gradient4",
    "gradient5",
    "gradient6",
  ];

  const markets = [
    {
      flag: "/assets/img/usa.png",
      country: "USA",
      desc: "Technology solutions that power industries across the country, from Silicon Valley to New York, and everywhere in between. We help companies stay ahead with cutting-edge innovations and scalable tech solutions.",
    },
    {
      flag: "/assets/img/canada.png",
      country: "CANADA",
      desc: "Tailored services for Canadian businesses, helping them stay ahead in the fast-paced digital landscape. From Toronto to Vancouver, we provide innovative solutions that scale with your business.",
    },
    {
      flag: "/assets/img/uk.jpg",
      country: "UK",
      desc: "Helping UK businesses excel with top-notch mobile, web, and cloud solutions. We understand the demands of the UK market and are committed to delivering results that matter.",
    },
    {
      flag: "/assets/img/uae.png",
      country: "UAE",
      desc: "Specialized tech services to support the growing demand in the Middle East's vibrant market. From mobile development to cloud solutions, we provide scalable and secure solutions for UAE businesses.",
    },
    {
      flag: "/assets/img/australia.png",
      country: "AUSTRALIA",
      desc: "Revolutionizing industries in Australia with powerful solutions for businesses in Sydney, Melbourne, and beyond. Whether it’s cloud or mobile, we’ve got the expertise to propel your business.",
    },
    {
      flag: "/assets/img/newzealand.png",
      country: "NEW ZEALAND",
      desc: "Driving innovation and success for businesses across New Zealand with seamless tech solutions. We help you stay competitive with mobile apps, cloud solutions, and data management.",
    },
  ];

  const featuresForHero = [
    {
      icon: "/assets/icons/mappin.svg",
      alt: "Location Pin Icon",
      text: "Serving 50+ Countries",
    },
    {
      icon: "/assets/icons/filecheck.svg",
      alt: "Checklist Icon",
      text: "1000+ Projects Delivered",
    },
    {
      icon: "/assets/icons/headp.svg",
      alt: "Headset icon",
      text: "24/7 Support",
    },
  ];

  const faqs = [
    {
      qId: 1,
      question: "What is a global remote work partner?",
      answer:
        "It means providing businesses access to skilled remote developers, QA experts, designers, and cloud engineers worldwide.",
    },
    {
      qId: 2,
      question: " How do remote tech teams work for businesses?",
      answer:
        "We assign verified experts who work as an extended part of your team with daily communication and transparent reporting.",
    },
    {
      qId: 3,
      question: "What skills and roles can I hire remotely?",
      answer:
        "You can hire developers, testers, cloud engineers, DevOps, designers, and technical project managers. For more information, visit our page for hiring developers.",
    },
    {
      qId: 4,
      question: "  How do you ensure productivity with remote teams?",
      answer:
        "We use structured workflows, collaboration tools, daily standups, time tracking, and clear deliverables.",
    },
    {
      qId: 5,
      question: "Are remote developers dedicated to only one project?",
      answer:
        "Yes. You get fully dedicated remote team members working exclusively on your tasks.",
    },
    {
      qId: 6,
      question: "What factors affect hiring duration for remote talent?",
      answer:
        "It depends on required skills, project complexity, and whether you need a single developer or a full team.",
    },
  ];

  const SucessStoryData = [
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
    {
      title: "From Slow to Slick: Emax India’s Game-Changing Web Revamp",
      subtitle: "Information Technology & Digital Services",
      challenge:
        "Emax India’s old website was slow, outdated, and not mobile-friendly, limiting user engagement and online visibility.",
      solution:
        "We redesigned the site with a modern UI, faster load speed, SEO optimization, and a custom WordPress CMS for easy updates.",
      Resultstext:
        "60% faster performance, higher organic reach, improved mobile experience, and stronger user engagement.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "PHP",
        "MySQL",
        "WordPress",
        "Cloudflare CDN",
        "Google Analytics",
      ],
      image: "/assets/img/health-tracker.png",
      width: 564,
      height: 323,
      link: "https://www.logzerotechnologies.com/blog/it-consultancy-and-web-management-for-emax-india/",
    },
  ];

  const service = [
    "Web Development Services",
    "Mobile App Development",
    "Enterprise Solutions",
    "Cloud Solutions",
    "UI/UX Design ",
    "Data Management",
  ];

  return (
    <>
      <Head> </Head>
      <HeroSection
        title="Your Global Remote Work Partner"
        description="Tap into global talent, scale faster, and optimise costs with our remote work services designed for modern IT businesses."
        description2={false}
        // shortdescription="Whether you're building a billion-dollar SaaS or a sleek e-commerce site, we architect, design, and deliver websites that outperform industry standards—every time."
        addCounterNo={true}
        BtnPrimary={false}
        buttonText="Get Your Free Consultation Today"
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo="Explore Our Services"
        buttonlinkurlTwo="/services"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={true}
        playiconyes={true}
        servicesOptions={service}
        // keyFeaturesList={true}
        bannerimage="/assets/img/Global.jpg"
        keyFeaturesList={featuresForHero}
      />

      {/* Start Why Choose LogZero Technologies? */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              Why Choose LogZero Technologies?
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto">
              WAt LogZero Technologies, we specialize in delivering innovative,
              tailored tech solutions for businesses in North America, Europe,
              Asia, and Oceania. Our global team is committed to providing
              cutting-edge solutions that meet the unique needs of each market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            {features?.map((service, index) => (
              <CardContainer
                key={index}
                index={index}
                service={service}
                bgadd="bggray1"
                borderadd="border1px"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[10px]"
                shadowadd="shadow"
                IconbgColor={BgColors3[index % BgColors3.length]}
                roundcorner="rounded-full"
                desminheight="max-h-[196]"
                lineclamp="line-clamp-none"
                ctaType="none"
              />
            ))}
          </div>
        </div>
      </section>
      {/* End Why Choose LogZero Technologies? */}

      <section className="px-6  py-16">
        <div className="container mx-auto">
          <SuccessStory
            title="Our Success Story"
            subtitle="Real projects, real results. See how we’ve helped businesses transform their ideas into successful mobile applications that drive growth and user engagement."
            caseStudies={SucessStoryData}
            portfolioCategorySlug="global-partner"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pt-16">
        <CTA
          title="Ready to Transform Your Business?"
          description="Join hundreds of satisfied clients across the globe who trust LogZero Technologies."
          linkUrl="/contact-us"
          ctabtnType="primary"
          linkText="Start Your Project Today"
        />
      </section>

      {/* Serving Major Markets Worldwide */}
      <section className="bg-white pt-16 px-6">
        <div className="container mx-auto ">
          <div className="headingbox pb-2 text-center">
            <h2 className="mb-4">Serving Major Markets Worldwide</h2>
            <p className="max-w-full md:max-w-[55%] mx-auto">
              LogZero Technologies serves businesses across continents, with
              localized expertise in the following regions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-24 pt-14">
            {markets.map((item, index) => (
              <div
                key={index}
                className="relative bg-gray-50 border border-[#E6E8E999]/60 rounded-lg shadow px-6 pb-6 pt-20 flex flex-col items-center text-center"
              >
                <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[120px] h-[120px] rounded-full bg-gray-200 z-0"></div>{" "}
                <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-31 h-31 rounded-full overflow-hidden border-4 border-white shadow-md z-10">
                  <img
                    src={item.flag}
                    alt={item.country}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-center mt-2">
                  {" "}
                  <h2 className="text-center mb-4">{item.country}</h2>
                  <p className="text-gray-600 !text-[16px] py-2 mx-auto min-h-[120px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="flex justify-center mt-8 gap-4">
            <GreenButton
              text="+35 More Countries"
              linkurl="/"
              linktarget=""
              MoveRighticon={false}
            />
          </div> */}
        </div>
      </section>

      {/* Service section */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              World-Class Solutions for Your Business Needs
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto">
              No matter where you're located, LogZero Technologies has the
              services to take your business to the next level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {services?.map((service, index) => (
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
                desminheight="max-h-[196]"
                lineclamp="line-clamp-none"
                ctaType="primary"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <CTA
          title="Need a Custom Solution?"
          description="Let's discuss your unique requirements and build something amazing together"
          linkUrl="/contact-us"
          ctabtnType="primary"
          linkText="Get some Quote"
        />
      </section>

      {/* industries section */}
      <section id="services" className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2 text-center">
            <h2 className="mb-4">Driving Success Across Multiple Industries</h2>
            <p className="max-w-full  mx-auto">
              Whether you're in tech, finance, healthcare, or education, our
              solutions fit your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {industries?.map((carddata, index) => (
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
                desminheight="min-h-[125px]"
                lineclamp="line-clamp-none"
              />
            ))}

            {/* {industries.map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 bg-white shadow-sm p-4 flex flex-col px-5"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={49}
                  height={49}
                  className=""
                />
                <h3 className="subheading-2 py-3 mt-3">{item.title}</h3>
                <p className="text-gray-600 !text-[16px]  ">{item.desc}</p>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 bgblue1">
        <CTA
          title="Don’t See Your Industry?"
          description="We work with businesses across all sectors. Let's discuss your specific needs."
          linkUrl="/contact-us"
          ctabtnType="primary"
          linkText="Contact Us Today"
        />
      </section>

      <ContactUsForm
        heading="Let's Connect and Start Building Your Future Today"
        subheading="Whether you're looking to transform your business with technology or simply have a question, we're here to help. Reach out today and let's discuss how we can support your growth."
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
