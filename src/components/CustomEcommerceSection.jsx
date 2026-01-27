"use client";
import React from 'react';
import { useState } from 'react';
import ScrollingLogosSection from './ScrollingLogosSection';
import { CircleCheckBig } from 'lucide-react';
import { InlineGreenButton } from './InlineGreenButton';
import TrustedSection from "@/components/Trusted";
import Image from 'next/image';
const devImg = "/assets/img/custom-ecommerce.png";
const real1 = "/assets/img/Real1.png"
const real2 = "/assets/img/Real2.png"
const custEcom = "/assets/img/Cus1.png";
import Testimonials from '@/components/Testimonials';
import { Phone, Mail, MapPin } from "lucide-react";
import { Search, Pen, Code, Rocket } from "lucide-react";


import { ChevronRight, Plus, Minus,Shield } from "lucide-react";
import { Target, Layers, Globe, Send } from "lucide-react";
import { Users, TrendingUp, Star } from "lucide-react";







const services = [
    {
        title: "Custom storefronts & headless ecommerce development",
        description:
            "Fast, flexible storefronts built with modern frameworks for superior UX and SEO.",
        image: "/assets/img/service-1.jpg",
    },
    {
        title: "Shopify custom development",
        description:
            "Theme customization, Shopify Plus migrations, app integrations and headless Shopify setups.",
        image: "/assets/img/service-2.jpg",
    },
    {
        title: "B2C & B2B ecommerce platforms",
        description:
            "Advanced product rules, customer groups, dynamic pricing, catalogs and role-based access.",
        image: "/assets/img/service-3.jpg",
    },
    {
        title: "Marketplace & multivendor solutions",
        description:
            "Vendor onboarding, commission engines, payout scheduling and analytics.",
        image: "/assets/img/service-4.jpg",
    },
    {
        title: "Payment & tax integrations",
        description:
            "Razorpay, Stripe, PayU, GST compliance and regional tax rules.",
        image: "/assets/img/service-5.jpg",
    },
    {
        title: "PWA & Mobile Apps",
        description:
            "Progressive Web Apps and native-like mobile experiences for higher conversion and retention.",
        image: "/assets/img/service-6.jpg",
    },
    {
        title: "Performance & Security",
        description:
            "CDN, image optimization, HSTS, WAF recommendations and PCI-aware payment flows.",
        image: "/assets/img/service-7.jpg",
    },
];


const whyChooseUs = [
    {
        icon: Target,
        title: "Business-first approach",
        description:
            "UX and architecture designed to increase conversions and lifetime value.",
        bgColor: "bg-[#EEF4FF]",
        iconColor: "text-[#2563EB]",
    },
    {
        icon: Layers,
        title: "Platform expertise",
        description:
            "Shopify custom development, WooCommerce, Magento, and headless stacks (Next.js/React).",
        bgColor: "bg-[#ECFDF5]",
        iconColor: "text-[#059669]",
    },
    {
        icon: Globe,
        title: "GEO-aware implementations",
        description:
            "Local payment gateways, GST-ready invoicing and multi-currency readiness for global expansion.",
        bgColor: "bg-[#F5F3FF]",
        iconColor: "text-[#7C3AED]",
    },
];


const resultsData = [
    {
        icon: Users,
        value: "50K+",
        label: "Active Users",
    },
    {
        icon: TrendingUp,
        value: "300%",
        label: "Order Increase",
    },
    {
        icon: Star,
        value: "4.8",
        label: "App Store Rating",
    },
];



const technologies = [
    "React Native",
    "Node.js",
    "MongoDB",
    "Socket.io",
];


// second case study data
const resultsData2 = [
    { icon: Users, value: "25K+", label: "Patients" },
    { icon: TrendingUp, value: "85%", label: "Engagement Rate" },
    { icon: Star, value: "4.9", label: "App Store Rating" },
];

const technologies2 = [
    "Flutter",
    "Firebase",
    "Google Fit API",
    "HealthKit",
];


const faqData = [
    { question: "1. What is custom ecommerce website development?", answer: "" },
    { question: "2. Which platform is best — Shopify or headless ecommerce?", answer: "" },
    { question: "3. Which platform is best — Shopify or headless ecommerce?", answer: "" },
    { question: "4. Do you handle payment and tax integrations for India?", answer: "" },
    { question: "5. How long does a custom ecommerce project take?", answer: "" },
    { question: "6. Do you offer post-launch support?", answer: "" },
];




const CustomEcommercePage = () => {
    const [openIndex, setOpenIndex] = useState(null);


    return (

        <>

            {/* Custom Ecommerce Website Development That Scales Your Business */}
            <section className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 ">
                    <div className="gap-6 pt-[30px]  pl-4 xl:pl-[56px] lg:pl-[50px] md:pl-8  md:pr-[0px]">
                        <h2 className=" lg:!text-[48px] md:!leading-[2rem] lg:!leading-[3rem] font-semibold text-[#1F1F1F]">
                            Custom Ecommerce Website Development That Scales Your Business
                        </h2>

                        <p className="mt-6">
                            End-to-end custom ecommerce development — from Shopify custom development
                            to headless commerce and enterprise marketplaces. Fast, secure and conversion-focused.
                        </p>
                        <div className="flex gap-3 mt-8">
                            <div className="inline-block">
                                <InlineGreenButton text="Request a Free Quote" linkurl="/contact-us" linktarget="_self" MoveRighticon services={[]} />
                            </div>
                            <a
                                href="/contact-us"
                                className="white-space-nowwrap border border-[#DBDBDB] rounded-[6px] px-[35px] xl:px-[30px] lg:px-[24px] py-[17px] font-[var(--font-inter)]"
                            >
                                Connect Us
                            </a>

                        </div>
                        <div className="mt-8 ">
                            <div className="flex items-start gap-2 ">
                                <CircleCheckBig className="w-6 h-6 text-green-600" />
                                <p className="text-[17px]">
                                    Custom ecommerce solutions for startups & enterprises
                                </p>
                            </div>
                            <div className="flex items-start gap-2 mt-2 ">
                                <CircleCheckBig className="w-6 h-6 text-green-600" />
                                <p className="text-[17px]">
                                    Payment, tax & marketplace integrations for India & global markets
                                </p>
                            </div>
                            <div className="flex items-start gap-2 mt-2 ">
                                <CircleCheckBig className="w-6 h-6 text-green-600" />
                                <p className="text-[17px]">
                                    Performance, security & CRO from day one
                                </p>
                            </div>
                        </div>
                    </div>

                    <Image src={devImg} alt="Category image" width={675} height={562} className="object-cover" />

                </div>
            </section>

            {/* Why businesses choose our custom ecommerce website development company */}

            <section className="px-4  bg-white">
                <div className="container mx-auto py-4 md:py-16">
                    <div className="flex flex-col gap-3">
                        <h2 className="max-w-4xl mx-auto text-center">
                            Why businesses choose our custom ecommerce website development company
                        </h2>
                        <p className="max-w-5xl mx-auto text-center text-[#383030]">
                            We’re a results-driven ecommerce website development agency that builds stores focused on revenue, user experience and long-term growth. Whether you need a fast Shopify launch, a robust headless
                            ecommerce solution, or a custom marketplace, our team delivers practical, measurable outcomes.
                        </p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {whyChooseUs.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="border border-[#EAEAEA] rounded-[10px] px-[20px] py-[30px] text-center bg-white"
                                >
                                    <div
                                        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-[6px] ${item.bgColor}`}
                                    >
                                        <Icon className={`h-6 w-6 ${item.iconColor}`} />
                                    </div>

                                    <h3 className="text-[20px] mt-6">
                                        {item.title}
                                    </h3>

                                    <p className="max-w-[290px] mx-auto mt-2 text-[#525D6A] text-[16px] text-center">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>



                </div>

            </section>


            {/* Trusted Section */}
            <TrustedSection
                title="Trusted by Industry Leaders"
                subtitle="We’ve partnered with innovative companies across industries to create exceptional user experiences."
                bgcolorchange="bg-[#F2F7FC]"
            />



            {/* Custom ecommerce website development services we provide */}
            <section className="px-4  bg-white">
                <div className="container mx-auto py-4 md:py-16">
                    <div className="flex flex-col">
                        <h2 className="mx-auto text-center">
                            Custom ecommerce website development services we provide
                        </h2>
                    </div>


                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-[8px] border border-[#EAEAEA] bg-white overflow-hidden shadow-[0_4px_0px_rgba(0,0,0,0.08)]"
                            >
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-[212px] w-[379px] object-cover"
                                />

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-[20px] font-semibold text-[#111827]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-[16px] text-[#525D6A]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>



                </div>
            </section>

            {/* Custom ecommerce development process */}
            <section className="px-4  bg-[#F2F7FC]">
                <div className="container mx-auto py-4 md:py-16">
                    <div className="flex flex-col">
                        <h2 className="mx-auto text-center">
                            Custom ecommerce development process
                        </h2>
                    </div>
                </div>
            <div className="p-3 ">
            <div className="flex justify-between flex-wrap gap-0 max-w-[1100px] mx-auto mt-5">
              {[
                {
                  icon: Search,
                  title: "Discovery & Strategy",
                  subtitle: "Journey mapping,feature roadmap",
                },
                {
                  icon: Pen,
                  title: "UI & Prototyping",
                  subtitle:
                    "Design, mobile-first prototypes",
                },
                {
                  icon: Code,
                  title: "Build & Integrate",
                  subtitle: "Headless setups, APIs, third-party systems",
                },
                {
                  icon: Rocket,
                  title: "QA & Launch",
                  subtitle: "Checklists, launch",
                },
                {
                  icon: TrendingUp,
                  title: "Growth & Support",
                  subtitle: "CRO and scaling updates",
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
                    <div className="w-[110px] h-[110px] bg-white rounded-full flex items-center justify-center text-[1.2rem] font-bold text-[#1E8767]">
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


            </section>




            {/* Case Studies */}
            <section className="px-4 bg-white">
                <div className="container mx-auto md:py-16 pt-4">
                    <div className="flex flex-col gap-3 py-4 ">
                        <h2 className="mx-auto text-center">Case Studies</h2>
                        <p className="max-w-[60%] mx-auto text-center text-[18px]">
                            Real projects, real results. See how we've helped businesses
                            transform their ideas into successful mobile applications that drive growth and user engagement.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 md:mt-12">
                        <div className="flex items-center justify-center">
                            <Image
                                src={real1}
                                width={564}
                                height={384}
                                className="rounded-lg"
                                alt="Case Study Image"
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-4">
                                <h4 className="font-semibold text-[24px]">Foodie Express - Web Design</h4>
                                <p className="text-[18px] text-[#1E8767] font-semibold">Restaurant Chain</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="font-semibold text-[24px]">Challenge</h4>
                                <p className="text-[16px] text-[#525D6A] font-semibold">Client needed a comprehensive food deliv
                                    ery platform to compete with major players in the market.</p>
                                <h4 className="font-semibold text-[24px]">Challenge</h4>
                                <p className="text-[16px] text-[#525D6A] font-semibold">Client needed a comprehensive food deliv
                                    ery platform to compete with major players in the market.</p>
                                <h4>Results</h4>

                            </div>


                            <div className="flex flex-col sm:flex-row justify-between items-center ">

                                {resultsData.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col"
                                        >
                                            {/* ICON */}
                                            <div className="w-[56px] h-[56px] rounded-full bg-[#F2F2F299] flex items-center justify-center mx-auto">
                                                <Icon className="w-6 h-6 text-[#1E8767]" />
                                            </div>


                                            {/* VALUE */}
                                            <div className="flex flex-col">
                                                <p className="text-[24px] font-bold text-[#1F1F1F] mt-2 text-center">
                                                    {item.value}
                                                </p>

                                                {/* LABEL */}
                                                <p className="text-[16px] text-[#525D6A] ">
                                                    {item.label}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <h4>Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-[10px] py-1 text-[14px] text-[#181818] font-
                                                    border border-[#000000] rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href=""
                                className="inline-flex items-center  text-[#1E8767] font-semibold text-[18px] hover:underline mt-5"
                            >
                                Read Full Case Study
                                <ChevronRight className="w-6 h-6" />
                            </a>

                        </div>



                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 md:mt-20">



                        {/* CONTENT */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-4">
                                <h4 className="font-semibold text-[24px]">
                                    Health Tracker Pro – Website Creation
                                </h4>
                                <p className="text-[18px] text-[#1E8767] font-semibold">
                                    Healthcare Startup
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="font-semibold text-[24px]">Challenge</h4>
                                <p className="text-[16px] text-[#525D6A] font-semibold">
                                    Creating a HIPAA-compliant health monitoring app with complex data
                                    visualization.
                                </p>

                                <h4 className="font-semibold text-[24px]">Solution</h4>
                                <p className="text-[16px] text-[#525D6A] font-semibold">
                                    Built a secure, analytics-driven platform with wearable integration.
                                </p>

                                <h4>Results</h4>
                            </div>

                            {/* RESULTS */}
                            <div className="flex flex-col sm:flex-row justify-between items-center">
                                {resultsData2.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={index} className="flex flex-col">
                                            <div className="w-[56px] h-[56px] rounded-full bg-[#F2F2F299] flex items-center justify-center mx-auto">
                                                <Icon className="w-6 h-6 text-[#1E8767]" />
                                            </div>

                                            <div className="flex flex-col">
                                                <p className="text-[24px] font-bold mt-2 text-center">
                                                    {item.value}
                                                </p>
                                                <p className="text-[16px] text-[#525D6A] text-center">
                                                    {item.label}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* TECHNOLOGIES */}
                            <h4>Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {technologies2.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-[10px] py-1 text-[14px] border border-black rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <a
                                href=""
                                className="inline-flex items-center text-[#1E8767] font-semibold text-[18px] hover:underline mt-5"
                            >
                                Read Full Case Study
                                <ChevronRight className="w-6 h-6 ml-1" />
                            </a>
                        </div>
                        {/* IMAGE */}
                        <div className="flex items-center justify-center">
                            <Image
                                src={real2}
                                width={564}
                                height={384}
                                className="rounded-lg"
                            />
                        </div>


                    </div>

                    <div className="text-center mt-6 md:mt-12">
                        <div className="inline-block">
                            <button className="text-white py-4 px-6 bg-[#1E8767] font-[var(--font-inter)] rounded-md">
                                Explore Our Latest Case Studies
                            </button>
                        </div>
                    </div>


                </div>
            </section>

            <ScrollingLogosSection
            title="Build Smarter Digital Experiences with Expert Web Technologies"
            description="We build smart, engaging digital experiences using modern web technologies—delivering high-performance websites 
            and web apps that drive real results."
            />


            {/* testimonial */}
            <section className="px-6 bg-white">
                <div className="container mx-auto ">
                    <Testimonials
                        title="See Why Our Clients Trust Us"
                        subtitle="Discover how our solutions have helped clients achieve success. 
                                    Hear their stories and experiences with our services."
                    />
                </div>
            </section>


            {/* Tell Us About Your Project */}


            <section className="px-4 bg-[#F2F7FC]">
                <div className="container mx-auto py-4 md:py-16">
                    <div className="flex flex-col gap-3">
                        <h2 className="mx-auto text-center">Tell Us About Your Project</h2>
                        <p className="max-w-[55%] mx-auto text-center text-[18px]">
                            Use the form below to specify the type of web application services you need,
                            and our team will get back to you with a tailored solution.
                        </p>
                    </div>
                    <div className="grid grir-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4 md:mt-8 gap-4">
                        <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 md:p-6 shadow-lg w-full ">
                            <form className="flex flex-col gap-5">

                                {/* Full Name */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[15px] font-medium text-[#323539]">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Full Name"
                                        className="w-full  rounded-md border border-[#E5E5E7] p-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1E8767]"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[15px] font-medium text-[#323539]">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your@email.com"
                                        className="w-full rounded-md border border-[#E5E7EB] p-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1E8767]"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[15px] font-medium text-[#323539]">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+91-95759 38484"
                                        className="w-full  rounded-md border border-[#E5E7EB] p-3  text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1E8767]"
                                    />
                                </div>

                                {/* Project Details */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[15px] font-medium text-[#111827]">
                                        Project Details
                                    </label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tell us about your project and requirements..."
                                        className="w-full rounded-md border border-[#E5E7EB] px-4 py-3 text-[15px] resize-none focus:outline-none focus:ring-2 focus:ring-[#1E8767]"
                                    />
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="mt-2 flex items-center justify-center gap-2 py-[13px] px-6 bg-[#1E8767] text-white text-[15px] font-semibold rounded-md"
                                >
                                    <Send size={18} className='mt-1' />
                                    Send Message
                                </button>


                                <p className="mt-1 text-center text-[16px] text-[#323539]">
                                    We typically respond within 24 hours during business days.
                                </p>

                            </form>
                        </div>


                        <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 md:p-6 shadow-lg w-full ">

                            {/* Heading */}
                            <h2 className="text-[24px] font-semibold text-[#111827] ">
                                Why choose <br /> LogZerotechnologies?
                            </h2>

                            {/* Expert Developer */}
                            <div className="flex items-start gap-4 mt-4 md:mt-8">
                                <div>
                                    <div className="w-[56px] h-[56px] rounded-full bg-[#3C74ED] flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-[16px]">Expert Developer</h4>
                                    <p className="text-[16px] text-[#6B7280]">
                                        Skilled professionals with proven track records
                                    </p>
                                </div>
                            </div>

                            {/* Quick Turnaround */}
                            <div className="flex items-start gap-4 mt-4 md:mt-8">
                                <div>
                                    <div className="w-[56px] h-[56px] rounded-full bg-[#14B8A6] flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[16px]">Quick Turnaround</h4>
                                    <p className="text-[16px] text-[#6B7280]">
                                        Start your project within 24–48 hours
                                    </p>
                                </div>
                            </div>

                            {/* Competitive Rates */}
                            <div className="flex items-start gap-4 mt-4 md:mt-8">
                                <div>
                                    <div className="w-[56px] h-[56px] rounded-full bg-[#22C55E] flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[16px]">Competitive Rates</h4>
                                    <p className="text-[16px] text-[#6B7280]">
                                        Quality development at affordable prices
                                    </p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className=" border-[#E5E7EB] mt-4 md:mt-[41px] ">
                                <h3 className="font-semibold text-[20px] ">
                                    Need immediate Help?
                                </h3>
                                <p className="text-[18px] text-[#6B7280] mt-3">
                                    Mail us directly for urgent requirements
                                </p>
                                <div className="mt-3">
                                    <a
                                        href="mailto:sales@logzerotechnologies.com"
                                        className="text-[18px] font-medium text-[#252525]"
                                    >
                                        sales@logzerotechnologies.com
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Faq Section */}

            <section className="px-4  bg-white">
                <div className="container mx-auto py-4 md:py-16">
                    <div className="flex flex-col gap-3">
                        <h2 className="mx-auto text-center">FAQs</h2>
                        <p className="max-w-[60%] mx-auto text-center text-[18px]">
                            Get answers to common questions about Custom Web App Development.
                        </p>
                    </div>

                    {/* FAQ LIST */}
                    <div className="mt-10 max-w-4xl mx-auto space-y-4">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-700 bgsecondary rounded-lg text-white"
                            >
                                {/* QUESTION */}
                                <button
                                    className="w-full flex justify-between items-center px-5 py-4 text-left font-medium"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span className="font-[var(--font-inter)]">{faq.question}</span>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5" />
                                    ) : (
                                        <Plus className="w-5 h-5" />
                                    )}
                                </button>

                                {/* ANSWER (empty for now) */}
                                {openIndex === index && (
                                    <div className="px-5 py-4 border-t border-gray-700 text-gray-200">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </>
    );
}

export default CustomEcommercePage;