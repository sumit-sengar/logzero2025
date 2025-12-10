"use client";
import { Zap, Headphones, Mail, Phone, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/GreenButton";
import Trusted from "@/components/Trusted";
import Head from "./head";
import FAQSection from "@/components/FAQSection";
import { useEffect, useState } from "react";
import Recaptcha from "../../components/Recaptcha"
export default function ContactSection() {
 const [recaptchaToken, setRecaptchaToken] = useState(null);  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const LocationCard = ({ title, address, phone, email }) => {
    return (
      <div className="w-full">
        <h3 className="!text-[24px] !font-semibold !text-[#1E8767] mb-3">
          {title}
        </h3>
        <div className="space-y-1 text-base text-gray-700">
          <p>
            <strong className="font-semibold text-slate-800">Address:</strong>{" "}
            {address}
          </p>
          <p>
            <strong className="font-semibold text-slate-800">Phone:</strong>{" "}
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300"
            >
              {phone}
            </a>
          </p>
          <p className="!text-[17px]">
            <strong className="font-semibold text-slate-800">Email:</strong>{" "}
            <a
              href={
                "https://mail.google.com/mail/?view=cm&fs=1&to=sales@logzerotechnologies.com"
              }
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300"
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    );
  };

  const locations = [
    {
      title: "India Corporate (Head office)",
      address:
        "Pegasus Tower, A-10, 8th Floor, Sector- 68, Gautam Buddha Nagar, Noida, Uttar Pradesh, 201301",
      phone: "+91 11 40789940",
      email: "sales@logzerotechnologies.com",
    },
    {
      title: "India Corporate (New Delhi)",
      address:
        "7th Floor, DPT-703, Prime Tower, Okhla, Phase-I, New Delhi, South East Delhi, Delhi, 11020",
      phone: "+91 11 40789940",
      email: "sales@logzerotechnologies.com",
    },
  ];

  const faqs = [
    {
      qId: 1,
      question: "How can I contact LogZero Technologies?",
      answer:
        "You can contact us via form submission, email, or direct phone support.",
    },
    {
      qId: 2,
      question: "What information should I share when contacting you?",
      answer:
        "Share your project idea, business requirements, goals, and any technical preferences.",
    },
    {
      qId: 3,
      question: "Do you offer a free consultation?",
      answer:
        "Yes, we offer initial project discussion and recommendations at no cost.",
    },
    {
      qId: 4,
      question: " How soon will your team respond to inquiries?",
      answer:
        "Response times depend on query load, but we prioritize timely support.",
    },
    {
      qId: 5,
      question: "Can I schedule a video meeting with your team?",
      answer:
        "Yes. We offer calls via Google Meet, Zoom, Microsoft Teams, and other platforms.",
    },
    {
      qId: 6,
      question: "Do you work with clients outside India?",
      answer:
        "Yes, we support clients globally with flexible communication options.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    detail: "",
  });
  const [formSuccess, setFormSucess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Find the reCAPTCHA response token
    // The reCAPTCHA widget inserts a hidden input field named 'g-recaptcha-response'
    const recaptchaTokenField = document.querySelector('[name="g-recaptcha-response"]');
    const recaptchaToken = recaptchaTokenField ? recaptchaTokenField.value : null;

    if (!recaptchaToken) {
        alert("Please complete the reCAPTCHA verification.");
        // Optional: If you are using explicit rendering, you might need to reset/re-render the widget here.
        return; 
    }
    const payload = {
      full_name: formData.name,
      email: formData.email,
      phone_number: formData.phone,
      message: formData.detail,
      'g-recaptcha-response': recaptchaToken,
    };
    try {
      const res = await fetch(
        "https://webapi.logzerotechnologies.com/api/v1/inquiry/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      console.log("res", res);
      const responseData = await res.json();
      console.log("Submission response:", responseData);
      if (res.ok) {
        console.log( "Submission response:", responseData);
        setFormSucess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          detail: "",
        });
        // 3. BEST PRACTICE: Reset the reCAPTCHA widget after a successful submission
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
      }else{

        alert("Submission failed: " + (responseData.message || "Please try again later."));
        setFormData({
          name: "",
          email: "",
          phone: "",
          detail: "",
        });
         if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
      }
    } catch (error) {
      console.error("Network error during submission:", error);
       if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
    }
  };

  return (
    <>
      <Head> </Head>
      <section className="pt-16 px-6 bg-[#F2F9F7DB]/86">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1.2fr] gap-4 ">
            <div className="space-y-4 mr-8  md:mt-[26px]">
              {[
                {
                  icon: <Zap size={32} className="" />,
                  title: "Fast & Reliable Response",
                  desc: "We typically get back to you within an hour on business days schedule a discussion — because your time matters.",
                },
                {
                  icon: <Users size={32} className="" />,
                  title: "Expert Guidance, Personalized for You",
                  desc: "You’ll connect directly with specialists who understand your industry and provide insights tailored to your needs.",
                },
                {
                  icon: <Headphones size={32} className="" />,
                  title: "Zero Pressure, Full Support",
                  desc: "We’re here to listen, guide, and advise — on your timeline. Move forward when you’re ready, with clarity and confidence.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className=" item-center p-2 rounded-md shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="!font-normal ">{item.title}</h5>
                    <p className=" subtextcolor !leading-[128%]  !text-[14px] mt-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="border border-[#F0F0F0] shadow2 rounded-[8px]  bg-white  p-6 flex flex-col justify-between ">
                <div>
                  {formSuccess && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                      <p className="font-bold">Success! 🎉</p>
                      <p>
                        Your consultation request has been submitted. We will
                        contact you shortly.
                      </p>
                    </div>
                  )}
                  <h3 className="subheading-4 mb-3">Get In Touch</h3>
                  <p className="!text-[14px] subtextcolor !leading-[128%]  pb-4">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <textarea
                      name="detail"
                      onChange={handleChange}
                      value={formData.detail}
                      placeholder="Kindly share your request."
                      className="w-full border border-[#E5E5E7] rounded-lg p-3 text-[15px] focus:outline-none focus:ring-1 focus:ring-blue-400"
                      rows={3}
                    ></textarea>
                    <label className=" block text-[15px] leading-[22px] font-[600]  font-inter mb-2">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={formData.name}
                      placeholder="Enter Full Name"
                      className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className=" block text-[15px] leading-[22px] font-[600]  font-inter mb-2">
                          Email Address
                        </label>
                        <input
                         required
                          type="email"
                          name="email"
                          onChange={handleChange}
                          value={formData.email}
                          placeholder="Your @email.com"
                          className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                      </div>

                      <div>
                        <label className=" block text-[15px] leading-[22px] font-[600]  font-inter mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          onChange={handleChange}
                          value={formData.phone}
                          placeholder="Enter Your Phone Number"
                          className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                      </div>
                    </div>
                                  <div className="flex justify-center py-4">
    <Recaptcha onVerify={setRecaptchaToken} />
  </div>
                    <div>
                      <div className="flex justify-center">
                        {/* <GreenButton
                          text="Send  Message"
                          linkurl="/"
                          linktarget=""
                          MoveRighticon={false}
                          send={true}
                        /> */}
                        <button
                          type="submit"
                          className="flex items-center justify-center gap-2 text-[15px] font-semibold leading-[22px] text-white bg-[#1E8767] border !border-[var(--bg-blue-700)] rounded-[6px] px-[35px] xl:px-[35px] lg:px-[28px] py-[17px] font-[var(--font-inter)] transition duration-300 ease-in-out hover:bg-[#1E8767] hover:text-white transition-transform hover:scale-104 cursor-pointer"
                        >
                          {" "}
                          Send message
                        </button>
                      </div>
                    </div>
        
                  </form>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6 border border-[#F0F0F0] bg-white lg:max-w-[372px] p-6">
                <div>
                  <h3 className="subheading-4 mb-4">Our Contacts</h3>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-3 subtext subtextcolor  ">
                    <div className="bg-[#3C74ED] p-3 rounded-full inline-block transition-transform duration-200 hover:scale-105">
                      <Phone className="text-[#f9fbfe] " size={20} />
                    </div>
                    <a href="tel:+911140789940" className="inline-block transition-transform duration-200 hover:scale-105">+91 11 40789940 </a>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-3 subtext subtextcolor py-2">
                    <div className="bg-[#42B1A5] p-3 rounded-full inline-block transition-transform duration-200 hover:scale-105">
                      <Mail className="text-[#ffffff]" size={20} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@logzerotechnologies.com"
                        className="whitespace-normal break-words sm:whitespace-nowrap inline-block transition-transform duration-200 hover:scale-105"
                      >
                        sales@logzerotechnologies.com 
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className=" !text-[24px] finter !leading-[1.28] !tracking-normal mb-2">
                    Social Media
                  </h3>
                  <div className="flex gap-3 text-gray-600">
                    {/* LinkedIn */}
                    <Link
                      href="https://www.linkedin.com/company/logzero-technologies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0A77FF]"
                    >
                      <Image
                        src="/assets/icons/linkedin.svg"
                        alt="LinkedIn"
                        width={32}
                        height={32}
                      />
                    </Link>

                    {/* X (Twitter) */}
                    <Link
                      href="https://x.com/logzerotech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0A77FF]"
                    >
                      <Image
                        src="/assets/icons/Twitter.png"
                        alt="X (Twitter)"
                        width={32}
                        height={32}
                      />
                    </Link>

                    {/* Pinterest */}
                    <Link
                      href="https://pinterest.com/logzerotechnologies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0A77FF]"
                    >
                      <Image
                        src="/assets/icons/pinterest.png"
                        alt="Pinterest"
                        width={32}
                        height={32}
                      />
                    </Link>

                    {/* Google */}
                    <Link
                      href="https://www.google.com/search?sca_esv=c019091b52478373&rlz=1C1ONGR_en&sxsrf=AE3TifNuGL6qIljipNhKMWj9-YwwMAwJlg:1762851169715&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E08fmkHkhr3qf25clKYpHEKUVOWYYhzObx6QqdIkocQhTpncxHegMmEZA0qoZEnGltvXfWl_96NIomGxH9w3dcAcABMd9ZULuddluYtcaMreOw0cnQT0c8aGRQBkeB8GkuKQy6SQ3yA0N3umSgSfQQEJwb6J0vwVRwjT4oK-snHzs7RZ3riSG_Dw6niHgLaWw4v_mS8%3D&q=LogZero+Technologies+%7C+Web+%26+Mobile+App+Development,+Cloud+Services+%26+Data+Solutions+Reviews&sa=X&ved=2ahUKEwi35oyu3OmQAxWSyzgGHX2KAYIQ0bkNegQIJhAE&cshid=1762851205263191&biw=1366&bih=633&dpr=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0A77FF]"
                    >
                      <Image
                        src="/assets/icons/google-business.png"
                        alt="google business"
                        width={32}
                        height={32}
                      />
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg  overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112091.26491215869!2d77.30742829186444!3d28.604215594215614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce21c8defdc59%3A0xc561e639b5ef2fea!2sUnit.No%20802%2C%208th%20Floor%2C%20Pegasus%20Tower%2C%20A-10%2C%20Block%20A%2C%20Sector%2068%2C%20Noida%2C%20Basi%20Bahuddin%20Nagar%2C%20Uttar%20Pradesh%20201309!3m2!1d28.6042405!2d77.38982969999999!5e0!3m2!1sen!2sin!4v1762424033344!5m2!1sen!2sin"
                    width="600"
                    height="218"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted section */}

      <div>
        <Trusted
          bgcolorchange=""
          titlecolor="textblack"
          subtitlecolor="textblack"
          title=""
          subtitle=""
        />
      </div>

      <section className="bg-white font-sans">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="!text-[40px] leading-[128%]">Our Presence</h2>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12 ">
            {locations.map((location, index) => (
              <LocationCard
                key={index}
                title={location.title}
                address={location.address}
                phone={location.phone}
                email={location.email}
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
