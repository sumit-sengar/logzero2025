"use client";
import { InlineGreenButton } from "@/components/InlineGreenButton";
import TrustedSection from "@/components/Trusted";
import { Phone, Mail, MapPin } from "lucide-react";

import Testimonials from "@/components/Testimonials";

import { Users, TrendingUp, Star } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ContactUsForm from "@/components/ContactUsForm";



import { Search, Palette, Code, CircleCheckBig, Upload } from 'lucide-react';
import Image from "next/image";
const devImg = "/assets/img/custom-web-dev.jpg";
const frame1 = "/assets/img/frame1.png";
const frame2 = "/assets/img/frame2.png";
const real1 = "/assets/img/Real1.png"
const real2 = "/assets/img/Real2.png"

const features = [
    {
        title: "Expert Team",
        desc: "To help businesses leverage the power of custom technology solutions for sustainable growth.",
        img: "/assets/icons/expert1.png",

    },
    {
        title: "Our Approach",
        desc: "We combine innovation with data-driven strategies to ensure each project delivers measurable results.",
        img: "/assets/icons/expert2.png",
    },
    {
        title: "Our Expertise",
        desc: "With deep knowledge of both frontend and backend technologies, we specialize in delivering end-to-end web development services.",
        img: "/assets/icons/expert3.png",
    },
];


const cards = [
    {
        icon: "/assets/icons/choose1.png",
        title: "Tailored Solutions",
        desc: "Every web application we create is custom-built to meet your specific business requirements and objectives.",
        highlight:
            "Tailored Web Solutions, Custom Web Development, Unique Web Applications",
    },
    {
        icon: "/assets/icons/choose2.png",
        title: "Scalability at Its Core",
        desc: "We design web apps that can grow as your business does, ensuring long-term scalability and adaptability.",
        highlight:
            "Scalable Web Applications, Flexible Web Solutions",
    },
    {
        icon: "/assets/icons/choose3.png",
        title: "High Security",
        desc: "We understand the importance of securing your business and user data.",
        highlight:
            "Secure Web Apps, High-Performance Applications, Web App Security",
    },
    {
        icon: "/assets/icons/choose4.png",
        title: "Exceptional UX/UI Design",
        desc: "We create intuitive, beautiful interfaces that improve user engagement and satisfaction.",
        highlight:
            "UX/UI Web Design, User-Centric Web Solutions",
    },
    {
        icon: "/assets/icons/choose5.png",
        title: "Performance Optimized",
        desc: "Fast, responsive web applications that offer a seamless experience.",
        highlight:
            "High-Performance Web Applications, Fast Load Times",
    },
    {
        icon: "/assets/icons/choose6.png",
        title: "Cross-Platform Compatibility",
        desc: "Your custom web app will function flawlessly across all platforms and devices.",
        highlight:
            "Cross-Platform Web Development, Multi-Device Compatibility",
    },
];


const processData = [
    {
        title: "Discovery & Requirement Gathering",
        desc: "We start by understanding your business needs, goals, and the challenges you’re facing. This is a collaborative phase where we define your vision for the project.",
        highlight: "Web Development Process, Requirement Gathering",
        img: "/assets/img/process1.jpg",
        icon: Search,
    },
    {
        title: "Design & Prototype",
        desc: "Our UX/UI experts create stunning designs and wireframes that reflect your brand identity and ensure a smooth user experience.",
        highlight: "UX/UI Design, Web App Prototypes",
        img: "/assets/img/process2.jpg",
        icon: Palette,
    },
    {
        title: "Development",
        desc: "We use cutting-edge technologies to build your web app, ensuring it is scalable, secure, and performance-optimized.",
        highlight: "Custom Web Development, Web App Development",
        img: "/assets/img/process3.jpg",
        icon: Code,


    },
    {
        title: "Quality Assurance & Testing",
        desc: "We rigorously test every aspect of your web application to ensure it functions seamlessly and meets your requirements.",
        highlight: "Web App Testing, Quality Assurance",
        img: "/assets/img/process4.jpg",
        icon: CircleCheckBig,


    },
    {
        title: "Deployment & Ongoing Support",
        desc: "Once your app is live, we ensure it performs smoothly with ongoing maintenance and updates to meet evolving needs.",
        highlight: "Web App Deployment, Post-Launch Support, Maintenance Services",
        img: "/assets/img/process5.jpg",
        icon: Upload,
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
    {
        question: "What is custom web app development?",
        answer:
            "Custom web app development is the process of building web-based software tailored to a business’s specific requirements, workflows, and users. Unlike ready-made tools, it delivers better scalability, security, and flexibility.",
    },
    {
        question: "How is a custom web app different from a template-based website?",
        answer:
            "A custom web application is designed from scratch around your exact needs, while template sites rely on pre-built layouts and limited features. Custom builds give you higher performance, deeper integrations, and long-term scalability.",
    },
    {
        question: "Why should I choose LogZero Technologies?",
        answer:
            "We architect solutions around your goals, user experience, and growth plans—delivering secure, scalable, fully tailored applications with end-to-end support.",
    },
    {
        question: "Do you offer custom ecommerce web development?",
        answer:
            "Yes. We build secure, high-performing ecommerce platforms tailored to your products, customers, and regional markets.",
    },
    {
        question: "How long does custom web app development take?",
        answer:
            "Timelines depend on complexity, features, and integrations; most projects span from a few weeks to several months, following a structured build and testing process.",
    },
];

export default function CustomWebDevelopment() {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className="bg-white">

    {/* transform your buisness */}
            <section className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 ">
                    <div className="gap-6 pt-[30px]  pl-4 xl:pl-[56px] lg:pl-[50px] md:pl-8 pr-6 lg:pr-[30px] md:pr-[0px]">
                        <h2 className=" lg:!text-[48px] md:!leading-[2rem] lg:!leading-[3rem] font-semibold text-[#1F1F1F]">
                            Transform Your Business with Custom Web App Solutions
                        </h2>
                        <p className="mt-6 text-[18px] italic text-[#1E8767]">
                            Tailored to Drive Growth, Boost Efficiency, and Maximize Security
                        </p>
                        <p className="mt-6 text-[18px]">
                            Logzeo Technologies specializes in crafting high-performance,
                            user-friendly custom web applications that elevate your business to the
                            next level. From intuitive UX/UI designs to robust functionality, we deliver scalable solutions to meet your unique needs.

                        </p>

                        <div className="inline-block mt-8">
                            <InlineGreenButton text="Get Your Free Consultation" linkurl="/contact-us" linktarget="_self" MoveRighticon services={[]} />
                        </div>
                    </div>

                    <Image src={devImg} alt="Category image" width={1000} height={1000} className="object-cover" />

                </div>
                <p className="pl-6 pt-16 text-[18px] italic text-[#1E8767] xl:px-[56px] lg:px-[50px] md:px-8">A custom web application is browser-based software designed and
                    developed to address the specific needs, workflows, and business
                    goals of an organization. Unlike off-the-shelf solutions,
                    custom web apps are built to scale, integrate seamlessly with
                    existing systems, and deliver measurable business value.</p>

            </section>


            {/* Who we are */}
            <section className=" py-4 px-4 md:py-16 ">
                <div className="container mx-auto">
                    <h2 className="flex flex-col mx-auto text-center">Who We Are: Your Web Development Partners</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                        <div className="flex flex-col mt-8 md:mt-[73px]">
                            <p>As a custom website development company with deep technical expertise,
                                LogZero Technologies delivers end-to-end custom web app development
                                services—covering ideation, requirement analysis, <span className="text-blue-500">UI design</span>,<span className="text-blue-500">UX development</span>,
                                testing, and secure deployment. We also specialize in custom ecommerce website
                                development, helping businesses build high-performance, conversion-driven
                                platforms tailored to their unique operational and customer needs.
                            </p>
                            <div className="flex flex-col gap-6 mt-6">
                                {features.map((item, index) => (
                                    <div key={index} className="flex gap-3">
                                        <div className="w-[48px] h-[48px] bg-[#1E8767] rounded-full flex items-center justify-center flex-shrink-0">
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                width={24}
                                                height={24}
                                                className="object-contain"
                                            />
                                        </div>


                                        <div className="flex flex-col gap-1">
                                            <h3 className="font-semibold text-[18px]">{item.title}</h3>
                                            <p className="text-[#525D6A] text-[16px]">{item.desc}</p>
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 ">
                            <div className="flex rounded-lg group gap-4">

                                <Image src={frame2} alt="Category image" width={281} height={497} className="object-cover md:mt-[61px]" />
                                <Image src={frame1} alt="Category image" width={281} height={497} className="object-cover md:mt-[86px]" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            {/* why Choose Us */}
            <section className="px-4  bg-[#F2F7FC]">
                <div className="container mx-auto py-4 md:py-16">
                    <div className="flex flex-col gap-3">
                        <h2 className="max-w-3xl mx-auto text-center">Why Choose Us for Your Custom Web Application Development?</h2>
                        <p className="max-w-3xl mx-auto text-center text-[18px]">We deliver exceptional web applications that drive business growth and provide a competitive
                            edge in today's digital landscape.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-12">
                        {cards.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col px-5 py-[22px] border border-[#E5E7EB] rounded-md bg-white gap-6 tranform transition-transform duration-300 hover:scale-105 cursor-pointer"
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={48}
                                    height={48}
                                />

                                <div className="flex flex-col gap-3 ">
                                    <h3>{item.title}</h3>

                                    <p className="text-[#525D6A] text-[16px]">
                                        {item.desc}
                                    </p>

                                    <p className="text-[#1E8767] italic text-[16px]">
                                        {item.highlight}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="flex font-[var(--font-inter)] font-semibold text-white text-[15px] bg-[#1E8767] rounded-md px-6 py-4 text-center mt-8 md:mt-12 mx-auto cursor-pointer">
                        Let’s Build Your Custom Web App
                    </button>
                </div>
            </section>



            {/* Trusted by Industry Leaders */}
            <TrustedSection
                title="Trusted by Industry Leaders"
                subtitle="We’ve partnered with innovative companies across industries to create exceptional user experiences."
                bgcolorchange="bg-white"
            />
            <p className="-mt-5 mb-16 text-center text-[18px] font-semibold text-[#1E8767]">
                Join 100+ companies that trust us with their UI design needs
            </p>

            {/* our cusstomer web application */}
            <section className="px-4 bg-[#F2F7FC]">
                <div className="container mx-auto py-4 md:py-16">
                    <div className="flex flex-col gap-3">
                        <h2 className="mx-auto text-center">Our Custom Web Application Development Process</h2>
                        <p className="max-w-[651px] mx-auto text-center text-[18px]">We follow a structured, transparent approach to ensure your web application
                            is delivered on time, within budget, and exceeds your expectations.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-6 mt-8 md:mt-12">
                        {processData.map((item, index) => {
                            const isReverse = index % 2 !== 0;

                            return (
                                <div
                                    key={index}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                >
                                    {/* TEXT */}
                                    <div className={`flex flex-col border border-[#E6E6E6] rounded-md p-5 bg-white tranform transition-tranform duration-300 hover:scale-105 cursor-pointer
                                            ${isReverse ? "md:order-2" : "md:order-1"}`}
                                    >
                                        <div className="w-12 h-12 bg-[#CCFBF1] rounded-xl flex items-center justify-center">
                                            {item.icon && (
                                                <item.icon className="w-6 h-6 text-green-700" />
                                            )}
                                        </div>


                                        <div className="flex flex-col gap-3 mt-6">
                                            <h6 className="text-[16px]">{item.title}</h6>
                                            <p className="text-[16px] text-[#525D6A]">
                                                {item.desc}
                                            </p>
                                            <p className="text-[#1E8767] italic text-[16px]">
                                                {item.highlight}
                                            </p>
                                        </div>
                                    </div>

                                    {/* IMAGE */}
                                    <div
                                        className={`relative w-full h-[220px]  sm:h-[310px] lg:h-[262px] rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer
                                        ${isReverse ? "md:order-1" : "md:order-2"}`}
                                    >
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-cover"

                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                    <button className="flex font-[var(--font-inter)] font-semibold text-white text-[15px] bg-[#1E8767] rounded-md px-6 py-4 text-center mt-6  md:mt-12 mx-auto cursor-pointer">
                        Get Started Today
                    </button>

                </div>

            </section>


            {/* Industries We Serve */}
            <section className=" py-4 md:py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h2 className="mb-2">Industries We Serve</h2>
                        <p className="max-w-[80%] mx-auto">
                            Specialized testing solutions tailored to meet the unique requirements of your industry
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
                    <div className="text-center md:mt-5">
                        <div className="inline-block">
                            <button className="text-white py-4 px-6 bg-[#1E8767] rounded-md">
                                Explore All Industries
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* See Why Our Clients Trust Us */}

            <section className="px-6 bg-[#F1F6FB]">
                <div className="container mx-auto ">
                    <Testimonials
                        title="See Why Our Clients Trust Us"
                        subtitle="Discover how our solutions have helped clients achieve success."
                    />
                </div>
            </section>



            {/* Real Results with LogZero Technologies */}
            <section className="px-4 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-3 py-4 md:py-16">
                        <h2 className="mx-auto text-center">Real Results with LogZero Technologies</h2>
                        <p className="max-w-[60%] mx-auto text-center text-[18px]">
                            See how we’ve helped businesses transform their data infrastructure and
                            achieve measurable results.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 md:mt-12">
                        <div className="flex items-center justify-center">
                            <Image
                                src={real1}
                                width={564}
                                height={384}
                                className="rounded-lg"
                                alt="Case study image"
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
                                alt="Case study image"
                            />
                        </div>


                    </div>

                    <div className="text-center mt-6 md:mt-12">
                        <div className="inline-block">
                            <button className="text-white py-4 px-6 bg-[#1E8767] rounded-md cursor-pointer hover:bg-[#166c52] transition-colors duration-300">
                                Explore Our Latest Case Studies
                            </button>
                        </div>
                    </div>


                </div>
            </section>



            {/* FAQ */}
            <section className="px-4 mt-6 md:mt-16 bg-[#F2F7FC]">
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
                                    <span>{faq.question}</span>
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



            {/* Tell Us About Your Project */}

           {/* form */}
                 <ContactUsForm
                   heading="Let's Discuss Your Project"
                   subheading="Fill out the form below and we'll get back to you within 24 hours with a customized solution for your development needs."
                   contactCardTitle="Why choose LogZerotechnologies?"
                   contactText=""
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


        </div>
    );
}
