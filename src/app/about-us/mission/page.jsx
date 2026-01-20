"use client";
import HeroSection from "@/components/HeroSection";
import CardContainerBorder from "@/components/CardContainerBorder";
import { useContext, useEffect } from "react";
import { Lztallcontext } from "@/context/Lztcontext";
import Image from "next/image";
import CardContainer from "@/components/CardContainer";
import SuccessStory from "@/components/SucessStory";
import CountUp from "react-countup";
import Head from "./head";
import FAQSection from "@/components/FAQSection";

export default function Mission() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const BgColors2 = ["bgblue10", "bgpurpal7", "bggreen1", "bggray3"];
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
      qId: 1,
      question: "What is the mission of LogZero Technologies?",
      answer:
        "Our mission is to deliver modern, scalable, user-centric digital solutions that empower businesses to grow.",
    },
    {
      qId: 2,
      question: "How does LogZero  support digital transformation?",
      answer:
        "We offer web, mobile, cloud, data, and automation solutions that help businesses become more efficient and future-ready.",
    },
    {
      qId: 3,
      question: " Why is innovation important in your mission?",
      answer:
        "Innovation enables businesses to stay competitive, automate workflows, and deliver better customer experiences.",
    },
    {
      qId: 4,
      question: "How do you ensure your solutions are future-ready?",
      answer:
        "We use modern technologies, scalable architecture, cloud integration, and continuous updates based on evolving business needs.",
    },
    {
      qId: 5,
      question: "What values guide LogZero Technologies?",
      answer:
        "Integrity, innovation, transparency, quality, and customer success.",
    },
    {
      qId: 6,
      question: "How do you align your mission with client goals?",
      answer:
        "By understanding business objectives and delivering solutions that support long-term growth.",
    },
  ];

  const { Purpose, Banner3, Commitment, SucessStoryData } =
    useContext(Lztallcontext);
  // console.log(Purpose, Banner3, Commitment, SucessStoryData);

  return (
    <>
      <Head> </Head>
      <HeroSection
        title="Driving Innovation with Purpose"
        titlecolor={false}
        description="At Logzero Technologies, we don’t just manage projects—we crush them. Big hurdles, tight deadlines, messy challenges? Bring ’em on. With our blend of project management chops, tech muscle, and digital innovation, we help businesses cut through the noise, stay locked in, and deliver results that matter. "
        description2="Our mission is crystal clear: flip every obstacle into a win and make sure your projects land on time, on budget, and with max impact—every single time."
        shortdescription={false}
        // shortdescription="Whether you're building a billion-dollar SaaS or a sleek e-commerce site, we architect, design, and deliver websites that outperform industry standards—every time."
        addCounterNo={false}
        BtnPrimary={true}
        playiconyes={true}
        buttonText="Work With Us"
        buttonLink="/contact-us"
        buttonTarget=""
        buttonTextTwo=""
        buttonlinkurlTwo="/"
        buttonlinktargetTwo=""
        isocertified={false}
        KeyFeatures={false}
        keyFeaturesList={false}
        bannerimage="/assets/img/MISSION-HERO.webp"
        nostats={[]}
      />

      {/* The Purpose Behind Our Passion section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">The Purpose Behind Our Passion</h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto">
              Our core pillars guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 ">
            {Purpose?.map((carddata, index) => (
              <CardContainerBorder
                key={index}
                index={index}
                carddata={carddata}
                bgadd="bgwhite"
                borderadd="border"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[5px]"
                shadowadd="shadow"
                IconbgColor={BgColors2[index % BgColors2.length]}
                roundcorner="rounded-full"
                desminheight="h-auto"
                lineclamp="line-clamp-5"
                mxauto={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Turning Challenges into Opportunities section */}
      <section className="py-16 px-6 bgblue3">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="  ">
              <Image
                src="/assets/img/promise.webp"
                alt="Expertise Circle"
                width={626}
                height={400}
                className="object-cover rounded-lg  "
              />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h2 className="!leading-[117%]">
                Turning Challenges into Opportunities
              </h2>
              <p className="pt-4">
                At LogZero Technologies, we see every challenge as a chance to
                level up. Our crew knows how to flip tough project roadblocks
                into growth wins with next-gen tech solutions, smart project
                management, and digital transformation know-how. We tackle
                obstacles with speed, creativity, and hustle—helping businesses
                unlock fresh opportunities, cut down risks, and score long-term
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* where mission section */}
      <section className="bgsecondary py-16 px-6">
        <div className="container mx-auto ">
          <div className="text-center max-w-5xl mx-auto pb-5 ">
            <h2 className=" !text-white ">
              Where Mission Meets Meaningful Results
            </h2>
            <p className="my-3 text-white  ">
              Our mission is not just words — it's results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 ">
            {Banner3.map((p) => {
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
                      <CountUp
                        end={p.Novalue}
                        duration={2}
                        decimals={p.Novalue % 1 !== 0 ? 1 : 0}
                        separator=","
                        enableScrollSpy={true}
                        scrollSpyDelay={300}
                      />
                      {p.indicator && <span>{p.indicator}</span>}
                    </h2>

                    <p className="mt-3 subheading-3 !text-white !font-normal ">
                      {p.label}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
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

      {/* our commitments */}
      <section className="py-16 px-6 ">
        <div className="container mx-auto ">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center ">Our Commitment, Your Success</h2>
            <p className="text-center mb-10 max-w-full md:max-w-[75%] mx-auto ">
              Our mission guides our future — a future where technology bridges
              gaps, fuels innovation, and creates meaningful change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
            {Commitment?.map((service, index) => (
              <CardContainer
                key={index}
                index={index}
                service={service}
                bgadd=""
                borderadd="border"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[10px]"
                shadowadd="shadow"
                IconbgColor={BgColors[index % BgColors.length]}
                roundcorner="rounded-full"
                desminheight="h-[112px]"
                lineclamp=""
                ctaType=""
              />
            ))}
          </div>
        </div>
      </section>

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
