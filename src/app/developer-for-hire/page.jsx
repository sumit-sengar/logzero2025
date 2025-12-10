"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { Lztallcontext } from "@/context/Lztcontext";

import CardContainerBorder from "@/components/CardContainerBorder";
import CTA from "@/components/CTA";
import Trusted from "@/components/Trusted";
import CardContainer from "@/components/CardContainer";
import WhyChooseUs from "@/components/WhyChooseUS";
import FAQSection from "@/components/FAQSection";
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
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import GreenButton from "@/components/GreenButton";
import CounterNo from "@/components/CounterNo";
import SuccessStory from "@/components/SucessStory";
import Head from "./head";
import ContactUsForm from "@/components/ContactUsForm";

const BgColors = [
  "bgblue5",
  "bgblue4",
  "bgblue6",
  "bgpurpal2",
  "bgpurpal3",
  "bgpurpal1",
];

const BgColors2 = ["bgred-200", "bggreen-200", "bgpurpal5"];

const faqs = [
  {
    qId: 1,
    question: "What does “hire dedicated developers” mean?",
    answer:
      "It means you get skilled developers working full-time on your project — just like an in-house team but more flexible.",
  },
  {
    qId: 2,
    question: " What types of developers can I hire?",
    answer:
      "You can hire full-stack developers, front-end specialists, mobile app developers, cloud engineers, backend developers, and more.",
  },
  {
    qId: 3,
    question: " How do you choose the right developer for my project?",
    answer:
      "We analyze your requirements, tech stack, and goals and match you with the best-fit developer.",
  },
  {
    qId: 4,
    question: " Can I scale my developer team anytime?",
    answer:
      "Yes, you can add or reduce team members based on project needs and workload changes.",
  },
  {
    qId: 5,
    question: " How do you ensure developers meet quality standards?",
    answer:
      "We conduct skill tests, code reviews, experience checks, and technical interviews before assigning developers",
  },
  {
    qId: 6,
    question: "How long does it take to onboard a developer?",
    answer:
      "Onboarding time depends on role requirements, tech stack, and project urgency.",
  },
];

export default function DeveloperForHire() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    WhyHireDevelopers,
    MobileAppDevelopment,
    SucessStoryData,
    BenefitsLogzerotechnologies,
  } = useContext(Lztallcontext);
  console.log(WhyHireDevelopers, MobileAppDevelopment);

  return (
    <>
      <Head> </Head>
      <HeroSection
        title="Hire Dedicated Developers for Your Projects"
        description="Whether you need a full-stack engineer, mobile app coder or cloud specialist—our developers are ready to deliver."
        addCounterNo={true}
        isocertified={false}
        buttonText="Hire a Developer Today"
        buttonLink={"/contact-us"}
        BtnPrimary={true}
        buttonTarget=""
        bannerimage="/assets/img/developer-banner.svg"
        servicesOptions={false}
        nostats={[
          { Novalue: 150, indicator: "+", label: "Developers Hired" },
          { Novalue: 98, indicator: "%", label: "Success Rate" },
          { Novalue: 50, indicator: "+", label: "Technologies Rate" },
        ]}
      />

      {/* Service Sectio Start */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              Why Hire Developers from Logzerotechnologies?
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[55%] mx-auto">
              Logzerotechnologies provides top talent to help you scale, fill
              skill gaps, and accelerate development with flexible hiring
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {WhyHireDevelopers?.map((carddata, index) => (
              <CardContainerBorder
                key={index}
                index={index}
                carddata={carddata}
                bgadd="peachgreen-300"
                borderadd="border0px"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[10px]"
                shadowadd="shadow0"
                IconbgColor={BgColors2[index % BgColors2.length]}
                roundcorner="rounded-[5px]"
                desminheight="min-h-[85px]"
                lineclamp="line-clamp-5"
              />
            ))}
          </div>
        </div>
      </section>
      {/* End Service Page Section */}

      {/* CTA section */}
      <section className="px-6 pb-16">
        <div className="container bgsecondary text-white text-left rounded-[8px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="mb-4 !text-white">
              Ready to Transform Your Development Process?
            </h2>
            <p className="w-full sm:max-w-full md:max-w-[75%]">
              Join hundreds of companies that have successfully scaled their
              development teams with our expert developers.
            </p>
            <ul className="space-y-2 mt-6">
              <li className="flex items-center gap-2 text-white/90">
                <CheckIcon className="w-5 h-5 text-emerald-400" />
                No upfront costs
              </li>
              <li className="flex items-center gap-2 text-white/90">
                <CheckIcon className="w-5 h-5 text-emerald-400" />
                Free consultation
              </li>
            </ul>
          </div>

          <div className="flex-shrink-0 pr-6">
            <Link
              href="/contact-us"
              className="inline-block bluenew text-white font-semibold text-[15px] leading-[22px] font-inter px-[24px] py-[17px] rounded-full transition-all duration-300 hover:bg-[#1E8767] hover:text-white hover:shadow-md transition-transform hover:scale-107"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Models of Hiring Developers */}
      <section className="px-6 py-16 bgblue3">
        <div className="container mx-auto">
          <div className="headingbox pb-2 mb-10">
            <h2 className="mb-4 text-center">Models of Hiring Developers</h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto">
              Find the perfect hiring model to fit your project requirements,
              team structure, and timeline.
            </p>
          </div>

          <div className="max-w-7xl bg-white mx-auto grid grid-cols-1 md:grid-cols-[69%_31%] items-start rounded-[6px] pt-[30px] pb-[30px] pl-[35px] pr-[35px] mb-5 gap-y-6 md:gap-0">
            {/* Left Section */}
            <div className="pr-0 md:pr-20">
              <div className="flex flex-wrap gap-6">
                <div className="w-12 h-12 p-2 bgblue5 rounded-[5px] flex items-center justify-center">
                  <Building size={22} className="textblue" />
                </div>
                <div>
                  <h4 className="mb-1">In-House Hiring</h4>
                  <p className="!text-[14px] text-[#0A77FF] !mb-1">
                    Full-Time Developers for Long-Term Growth
                  </p>
                  <p className="subtext subtextcolor">
                    Control, Manage, and Build a Long-Term Development Team
                  </p>
                </div>
              </div>

              <p className="mt-6">
                With in-house hiring, you bring developers onto your team
                permanently, ensuring they are aligned with your company's
                values, culture, and goals. This option gives you complete
                control over your development team, and you're responsible for
                their management, compensation, and benefits.
              </p>
            </div>

            {/* Right Section */}
            <div className="border border-solid border-[#CBE0FC] bg-[#F0F7FF] rounded-[6px] pt-[20px] pb-[20px] pl-[20px] pr-[20px] flex flex-col gap-2">
              <div className="">
                <h4 className="text-[#111827]  mb-3">
                  Model Details
                </h4>
              </div>

              <div className="">
                <h3 className="!text-[#858C95] subheading-3">
                  Official Employer
                </h3>
                <p className="!text-[14px] text-[#252525]">Your Company</p>
              </div>

              <div className="">
                <h3 className="!text-[#858C95] subheading-3">Management</h3>
                <p className="!text-[14px] text-[#252525]">
                  Managed by your PM or team lead
                </p>
              </div>

              <div className="">
                <h3 className="!text-[#858C95] subheading-3">Payment</h3>
                <p className="!text-[14px] text-[#252525]">
                  Time and Material (T&amp;M) hourly rates
                </p>
              </div>

              <div className="">
                <h3 className="!text-[#858C95] subheading-3">Best for</h3>
                <p className="!text-[14px] text-[#252525]">
                  Existing teams needing specific skills
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl bg-white mx-auto grid grid-cols-1 md:grid-cols-[69%_31%] items-start rounded-[6px] pt-[30px] pb-[30px] pl-[35px] pr-[35px] mb-5 gap-y-6 md:gap-0">
            {/* Left Section */}
            <div className="pr-20">
              <div className="flex flex-wrap gap-6">
                <div className="w-12 h-12 p-2 bgblue6 rounded-[5px] flex items-center justify-center">
                  <Users size={22} className="text-[#13978B]" />
                </div>
                <div>
                  <h4 className="mb-1">Team Augmentation</h4>
                  <p className="!text-[14px] text-[#13978B] !mb-1">
                    Fill Skill Gaps and Boost Your Capacity
                  </p>
                  <p className="subtext subtextcolor">
                    Enhance Your Existing Team with Expert Talent on Demand
                  </p>
                </div>
              </div>

              <p className="mt-6">
                Team augmentation lets you partner with us to hire specialized
                developers temporarily. This is perfect when you need to
                accelerate project timelines or bring in expertise for a
                specific task, without the long-term commitment.
              </p>
            </div>

            {/* Right Section */}
            <div className="border border-solid border-[#d1fbf3] bg-[#f0fdfa] rounded-[6px] pt-[20px] pb-[20px] pl-[20px] pr-[20px] flex flex-col gap-2">
              <div className="">
                <h4 className="text-[#111827]  mb-3">
                  Model Details
                </h4>
              </div>
              <div className="">
                <h3 className="!text-[#858C95] subheading-3">
                  Official Employer
                </h3>
                <p className="!text-[14px] text-[#252525]">Vendor (us)</p>
              </div>
              <div className="">
                <h3 className="!text-[#858C95] subheading-3">Management</h3>
                <p className="!text-[14px] text-[#252525]">
                  Your PM manages augmented developers
                </p>
              </div>
              <div className="">
                <h3 className="!text-[#858C95] subheading-3">Payment</h3>
                <p className="!text-[14px] text-[#252525]">
                  Time and Material (T&M) hourly rates
                </p>
              </div>
              <div className="">
                <h3 className="!text-[#858C95] subheading-3">Best for</h3>
                <p className="!text-[14px] text-[#252525]">
                  Existing teams needing specific skills
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl bg-white mx-auto grid grid-cols-1 md:grid-cols-[69%_31%] items-start rounded-[6px] pt-[30px] pb-[30px] pl-[35px] pr-[35px] mb-5 gap-y-6 md:gap-0">
            {/* Left Section */}
            <div className="pr-20">
              <div className="flex flex-wrap gap-6">
                <div className="w-12 h-12 p-2 bgpurpal1 rounded-[5px] flex items-center justify-center">
                  <Target size={22} className="text-[#A265EE]" />
                </div>
                <div>
                  <h4 className="mb-1">Dedicated Team</h4>
                  <p className="!text-[14px] text-[#A265EE] !mb-1">
                    Full Project Outsourcing with Expert Teams
                  </p>
                  <p className="subtext subtextcolor">
                    Let Our Expert Developers Handle Your Project from Start to
                    Finish
                  </p>
                </div>
              </div>

              <p className="mt-6">
                When you hire a dedicated team, you get a group of developers
                fully committed to your project. This model is best for
                businesses that want to outsource development entirely but still
                want oversight and collaboration.
              </p>
            </div>

            {/* Right Section */}
            <div className="border border-solid border-[#f5ecff] bg-[#faf5ff] rounded-[6px] pt-[20px] pb-[20px] pl-[20px] pr-[20px] flex flex-col gap-2">
              <div className="">
                <h4 className="text-[#111827]  mb-3">
                  Model Details
                </h4>
              </div>
              <div className="">
                <h3 className="!text-[#858C95] subheading-3">
                  Official Employer
                </h3>
                <p className="!text-[14px] text-[#252525]">Vendor (us)</p>
              </div>
              <div className="">
                <h3 className="!text-[#858C95] subheading-3">Management</h3>
                <p className="!text-[14px] text-[#252525]">
                  Managed by our vendor team
                </p>
              </div>
              <div className="">
                <h3 className="!text-[#858C95] subheading-3">Payment</h3>
                <p className="!text-[14px] text-[#252525]">
                  Time and Material (T&M) hourly rates
                </p>
              </div>
              <div className="">
                <h3 className="!text-[#858C95] subheading-3">Best for</h3>
                <p className="!text-[14px] text-[#252525]">
                  Complete project outsourcing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="px-6 py-16">
        <CTA
          title="Still Unsure?"
          description="Reach out to us for a consultation, and we'll help you determine the best hiring model based on your business needs."
          linkUrl="/contact-us"
          ctabtnType="primary"
          linkText="Get Free Consultation"
        />
      </section>

      {/* How to Hire a Developer: Key Steps */}
      <section className="px-6 pb-16 bgwhite">
        <div className="container mx-auto">
          <div className="headingbox pb-2 mb-10">
            <h2 className="mb-4 text-center">
              How to Hire a Developer: Key Steps
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto">
              Follow these simple steps to hire the perfect developer for your
              project needs.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)] order-2 md:order-1">
              <div className="w-12 h-12 p-2 bgblue5 rounded-[5px] flex items-center justify-center shrink-0">
                <Search size={22} className="text-[#1658EA]" />
              </div>
              <div className="flex-1">
                <p className="subheading-3 !mb-1 textblue">01</p>
                <p className="subheading-3 text-[#252525]">
                  Define Your Project Scope and Needs
                </p>
                <p className="subtext subtextcolor mt-6">
                  Start by identifying the type of project you want to build and
                  the skill sets needed. Do you need web, mobile, or data
                  management solutions? Define the technologies and specific
                  expertise required (e.g., React developers, iOS developers).
                </p>
              </div>
            </div>

            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/key-step-1.svg')] bg-cover bg-center h-[300px] md:h-[auto] order-1 md:order-2"></div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/key-step-2.svg')] bg-cover bg-center h-[300px] md:h-[auto]"></div>

            {/* Dedicated Team Card */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)]">
              <div className="w-12 h-12 p-2 bgblue6 rounded-[5px] flex items-center justify-center">
                <Users size={22} className="text-[#13978B]" />
              </div>
              {/* Text Content */}
              <div className="flex-1">
                <p className="subheading-3 mb-1 text-[#13978B] !mb-1">02</p>
                <p className="subheading-3 text-[#252525]">
                  Choose the Right Hiring Model
                </p>
                <p className="subtext subtextcolor mt-6">
                  Decide which hiring model fits your business needs: In-house
                  Hiring, Team Augmentation, or Dedicated Team. Consider your
                  project timeline, budget, and management preferences.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            {/* Dedicated Team Card */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)] order-2 md:order-1">
              {/* Icon */}
              <div className="w-12 h-12 p-2 bg-[#F3E8FF] rounded-[5px] flex items-center justify-center">
                <SquareCheckBig size={22} className="text-[#A265EE]" />
              </div>
              {/* Text Content */}
              <div className="flex-1">
                <p className="text-[#A265EE] subheading-3 !mb-1">03</p>
                <p className="subheading-3 text-[#252525]">
                  Screen Candidates and Assess Skills{" "}
                </p>
                <p className="subtext subtextcolor mt-6">
                  Once you've chosen the model, look at resumes, portfolios, and
                  past work. We'll help you shortlist developers and assess
                  their technical expertise to make sure they match your
                  requirements.
                </p>
              </div>
            </div>

            {/* In-House Hiring Card */}
            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/key-step-3.svg')] bg-cover bg-center h-[300px] md:h-[auto] order-1 md:order-2"></div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/key-step-4.svg')] bg-cover bg-center h-[300px] md:h-[auto]"></div>

            {/* Dedicated Team Card */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)]">
              <div className="w-12 h-12 p-2 bgblue4 rounded-[5px] flex items-center justify-center">
                <UserPlus size={22} className="text-[#16A35E]" />
              </div>

              <div className="flex-1">
                <p className="subheading-3 !mb-1 text-[#16A35E]">04</p>
                <p className="subheading-3 text-[#252525]">
                  Onboard Your Developer or Team{" "}
                </p>
                <p className="subtext subtextcolor mt-6">
                  Once selected, onboard your developer or team by providing the
                  necessary tools, resources, and a clear project roadmap. With
                  Logzerotechnologies, we help integrate developers into your
                  team mdoothly.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)] order-2 md:order-1">
              <div className="w-12 h-12 p-2 bgpurpal2 rounded-[5px] flex items-center justify-center">
                <SquareChartGantt size={22} className="text-[#EB5E14]" />
              </div>

              <div className="flex-1">
                <p className="subheading-3 !mb-1 text-[#EB5E14]">05</p>
                <p className="subheading-3 text-[#252525]">
                  Manage and Collaborate{" "}
                </p>
                <p className="subtext subtextcolor mt-6">
                  Whether you manage the developer directly or rely on our
                  project management support, ensure that regular check-ins and
                  feedback loops are established for a successful outcome.
                </p>
              </div>
            </div>

            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/key-step-5.svg')] bg-cover bg-center h-[300px] md:h-[auto] order-1 md:order-2"></div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="rounded-[10px] w-full md:w-[calc(50%-0.5rem)] bg-[url('/assets/img/key-step-6.svg')] bg-cover bg-center h-[300px] md:h-[auto]"></div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-5 border border-[#E6E6E6] rounded-[10px] w-full md:w-[calc(50%-0.5rem)]">
              <div className="w-12 h-12 p-2 bgpurpal3 rounded-[5px] flex items-center justify-center">
                <TrendingUp size={22} className="text-[#DC282A]" />
              </div>

              <div className="flex-1">
                <p className="subheading-3 !mb-1 text-[#DC282A]">06</p>
                <p className="subheading-3 text-[#252525]">
                  Evaluate and Scale
                </p>
                <p className="subtext subtextcolor mt-6">
                  After a successful engagement, evaluate the performance of the
                  developer/team. If necessary, scale the team up or down based
                  on your ongoing project needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Hiring Developers from Logzerotechnologies */}
      <section id="services" className="pb-16 px-6 bgblue3 py-16">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">
              Benefits of Hiring Developers from Logzerotechnologies
            </h2>
            <p className="text-center mb-10 max-w-full md:max-w-[55%] mx-auto">
              Why choose us? Here are the key benefits that make
              Logzerotechnologies your trusted partner in development.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-4">
            {/* Left Text */}
            <div className="w-full lg:w-1/4 flex flex-col">
              <div>
                <h3 className="subheading-2 !text-[#05BCC1] mb-2">
                  Expert Talent
                </h3>
                <p className="subtext2 subtextcolor">
                  Access top-tier developers skilled in React, Node.js, Python,
                  and more.
                </p>
              </div>
              <div className="my-8">
                <h3 className="subheading-2 !text-[#A3CE37] mb-2">
                  Cost-Effective Solutions
                </h3>
                <p className="subtext2 subtextcolor">
                  Save on recruitment costs, overhead, and training by hiring
                  top-tier developers at competitive rates.
                </p>
              </div>
              <div>
                <h3 className="subheading-2 !text-[#59696E] mb-2">
                  Scalability and Flexibility
                </h3>
                <p className="subtext2 subtextcolor">
                  Easily scale your team with flexible full-time, part-time, or
                  project-based developersâ€”no long-term commitments.
                </p>
              </div>
            </div>

            {/* Center Circular Image */}
            <div className="lg:w-1/2 justify-center relative items-center hidden lg:block">
              <Image
                src="/assets/img/benefits.svg"
                alt="Expertise Circle"
                width={631}
                height={439}
                className="object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center subheading-4 text-[#666666]">
                Fueling Your <br />
                Success with <br />
                Expertise
              </div>
            </div>

            {/* Right Text */}
            <div className="w-full lg:w-1/4 flex flex-col">
              <div>
                <h3 className="subheading-2 !text-[#8F4881] mb-2">
                  Faster Time to Market
                </h3>
                <p className="subtext2 subtextcolor">
                  Accelerate time to market with developers who integrate
                  smoothly or work independently.
                </p>
              </div>
              <div className="my-8">
                <h3 className="subheading-2 !text-[#F1A229] mb-2">
                  Reduced Risk
                </h3>
                <p className="subtext2 subtextcolor">
                  Highly vetted developers deliver quality work, backed by
                  dedicated project management for reliable execution.
                </p>
              </div>
              <div>
                <h3 className="subheading-2 !text-[#F7615A] mb-2">
                  Full Control
                </h3>
                <p className="subtext2 subtextcolor">
                  Manage developers directly or through our project
                  managersâ€”with full flexibility and transparency throughout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="px-6 pt-16">
        <CTA
          title="Ready to Experience These Benefits?"
          description="Join hundreds of companies that have successfully scaled their development teams 
with our expert developers."
          linkUrl="/contact-us"
          ctabtnType="primary"
          linkText="Start Your Project Today"
        />
      </section>

      {/* Success story */}
      <section className="px-6 bgblue1 py-16">
        <div className="container mx-auto">
          <SuccessStory
            title="Our Success Story"
            subtitle="Real projects, real results. See how we've helped businesses transform their ideas into successful mobile applications that drive growth and user engagement."
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
