import { FaGoogle, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import WhiteButton from "./WhiteButton";
import { useModal } from "@/context/ModalContext";

export default function Footer() {
  const { openModal } = useModal();

  // Function to open the global LeadFormModal
  const handleConsultationClick = () => {
    openModal({
      source: "Footer CTA",
    });
  };

  return (
    <>
      <footer className="bg-[#042C21] text-white px-6 pt-16 sm:pb-6">
        <div className="container mx-auto">
          <div className="text-center pb-4">
            <h2 className="!text-white">Ready to Get Started?</h2>
            <p className="mt-3 max-w-xl mx-auto">
              Join Over 1K+ Plus Satisfied Clients who have transformed their
              businesses with our solutions
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleConsultationClick}
                className="bluenew textcolor px-8 py-3 rounded-lg font-semibold hover:bg-[#1E8767] transition-colors  transition-transform hover:scale-104 cursor-pointer"
              >
                Schedule a Free Consultation
              </button>

              <WhiteButton
                text="Get In Touch"
                linkurl="/contact-us"
                linktarget=""
                MoveRighticon={false}
              />
            </div>
          </div>

          <hr className="my-10 border-[#323539]" />

          <div className="flex md:flex-nowrap flex-wrap gap-12 md:gap-4 sm:gap-12 pt-6 pb-6">
            <div className="md:w-[30%] sm:w-full pr-4">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/img/logzeroo.png"
                  alt="LogZero Logo"
                  width={153}
                  height={48}
                  className="w-auto"
                />
              </div>
              <p className="mt-4 subtext">
                Empowering businesses through innovative IT Solutions & Digital
                Transformation services since 2011
              </p>

              <h6 className="mt-9 !text-white">Follow us on</h6>
              <div className="flex space-x-4 mt-3 text-xl">
                <Link
                  href="https://www.google.com/search?sca_esv=c019091b52478373&rlz=1C1ONGR_en&sxsrf=AE3TifNuGL6qIljipNhKMWj9-YwwMAwJlg:1762851169715&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E08fmkHkhr3qf25clKYpHEKUVOWYYhzObx6QqdIkocQhTpncxHegMmEZA0qoZEnGltvXfWl_96NIomGxH9w3dcAcABMd9ZULuddluYtcaMreOw0cnQT0c8aGRQBkeB8GkuKQy6SQ3yA0N3umSgSfQQEJwb6J0vwVRwjT4oK-snHzs7RZ3riSG_Dw6niHgLaWw4v_mS8%3D&q=LogZero+Technologies+%7C+Web+%26+Mobile+App+Development,+Cloud+Services+%26+Data+Solutions+Reviews&sa=X&ved=2ahUKEwi35oyu3OmQAxWSyzgGHX2KAYIQ0bkNegQIJhAE&cshid=1762851205263191&biw=1366&bih=633&dpr=1"
                  className="inline-block transition-transform duration-200 hover:scale-115"
                >
                  <FaGoogle />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/logzero-technologies/"
                  className="inline-block transition-transform duration-200 hover:scale-115"
                >
                  <FaLinkedin />
                </Link>
                <Link href="https://x.com/logzerotech" className="inline-block transition-transform duration-200 hover:scale-115">
                  <FaXTwitter />
                </Link>
                <Link
                  href="https://pinterest.com/logzerotechnologies"
                  className="inline-block transition-transform duration-200 hover:scale-115"
                >
                  <FaPinterest />
                </Link>
              </div>
            </div>

            <div className="md:w-[19%] sm:w-[48%] w-full">
              <h5 className="mb-4 !text-white">About Us</h5>
              <nav aria-label="Footer Navigation">
                <ul className="space-y-2 subtext">
                  {[
                    { label: "About Company", href: "/about" },
                    { label: "Our Mission", href: "/about/mission" },
                    { label: "Clients", href: "/about/clients" },
                    { label: "Portfolio", href: "/about/portfolio" },
                    {
                      label: "Privacy Policy",
                      href: "https://www.logzerotechnologies.com/privacy-policy/",
                    },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="transition-colors duration-200 text-white hover:text-[#5BC2A7]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="md:w-[19%] sm:w-[48%] w-full">
              <h5 className="mb-4 !text-white">Quick Links</h5>
              <nav aria-label="Footer Navigation">
                <ul className="space-y-2 subtext">
                  {[
                    { label: "Our Services", href: "/services" },
                    {
                      label: "Blog",
                      href: "https://www.logzerotechnologies.com/blog/",
                    },
                    {
                      label: "Industry We Serve",
                      href: "/industry",
                    },
                    {
                      label: "Technology",
                      href: "/technology",
                    },
                    {
                      label: "Solutions",
                      href: "/solutions",
                    },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="transition-colors duration-200 text-white hover:text-[#5BC2A7]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="md:w-[30%] sm:w-full">
              <h5 className="mb-4 !text-white">Contact Info</h5>
              <p className="subtext">
                Pegasus Tower, A-10, 8th Floor, Sector-68, Gautam Buddha Nagar,
                Noida, Uttar Pradesh, 201301
              </p>
              <p className="mt-8 subtext">
                <span className="text-[#5BC2A7]">Phone:</span>{" "}
                <a href="tel:+91 11 40789940" className="text-white inline-block transition-transform duration-200 hover:scale-105">
                  +91 11 40789940
                </a>
              </p>
              <span className="text-[#5BC2A7]">Email:</span>{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@logzerotechnologies.com"
                className="text-white inline-block transition-tranform duration-200 hover:scale-105 "
              >
                sales@logzerotechnologies.com
              </a>
              {/* [Newsletter code block removed for brevity] */}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-700/70">
            <p className="subtext ">
              © 2025 LogZero Technologies All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* REMOVED: The entire local modal JSX block is removed here. 
          The modal is now controlled by the ModalContext and rendered globally by LeadFormModal.jsx.
      */}
    </>
  );
}
