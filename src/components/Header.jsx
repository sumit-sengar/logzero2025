// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";

// const navItems = [
//   {
//     title: "About",
//     link: "about",
//     children: [
//       // { title: "About Company", link: "/About/AboutCompany" },
//       { title: "Clients", link: "/about/clients" },
//       { title: "Mission", link: "/about/mission" },
//       { title: "Portfolio", link: "/portfolio" },
//       {
//         title: "Privacy  Policy",
//         link: "https://www.logzerotechnologies.com/privacy-policy/",
//       },
//     ],
//   },
//   {
//     title: "Services",
//     link: "/services",
//     children: [
//       { title: "Software-Development", link: "/services/software-development" },
//       { title: "Web Development", link: "/services/web-development" },
//       {
//         title: "Mobile App Development",
//         link: "/services/mobile-app-development",
//       },
//       { title: "Global Partner", link: "/services/global-partner" },
//       { title: "UI Design Services", link: "/services/ui-design" },
//       { title: "UX Design Services", link: "/services/ux-design" },
//       { title: "Cloud Services", link: "/services/cloud-services" },
//       { title: "Testing QA Service", link: "/services/testing-service" },
//     ],
//   },
//   {
//     title: "Solutions",
//     link: "/solutions",
//     children: [
//       { title: "Data Management", link: "/solutions/data-management" },
//     ],
//   },
// ];

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const pathname = usePathname();
//   const router = useRouter();

//   const isActive = (link) => pathname === link;
//   const isParentActive = (children) =>
//     children?.some((child) => pathname.startsWith(child.link));

//   useEffect(() => {
//     const handleRouteChange = () => setIsMenuOpen(false);
//     router.events?.on("routeChangeStart", handleRouteChange);
//     return () => router.events?.off("routeChangeStart", handleRouteChange);
//   }, [router]);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/assets/img/logzero.svg"
//             alt="LogZero Logo"
//             width={219}
//             height={40}
//             priority
//           />
//         </Link>

//         {/* Mobile Toggle */}
//         <button
//           className="lg:hidden text-gray-700"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? (
//             <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>

//         {/* Navigation */}
//         {/* <nav
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } subtext lg:flex lg:items-center lg:space-x-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none px-6 lg:px-0 transition-all duration-300`}
//         > */}
//         <nav
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } subtext lg:flex lg:items-center lg:space-x-6
//               absolute lg:static top-full right-0 w-[300px] pb-10 lg:pb-0 lg:w-auto
//               bg-white lg:bg-transparent shadow-md lg:shadow-none
//               px-6 lg:px-0 transition-all duration-300`}
//         >
//           {/* Home */}
//           <Link
//             href="/"
//             className={`block py-2 border-b-2 border-transparent ${
//               isActive("/")
//                 ? "text-[#1E8767] border-[#1E8767]"
//                 : "hover:text-[#1E8767] hover:border-[#1E8767]"
//             }`}
//           >
//             Home
//           </Link>

//           {/* Dropdowns with parent link */}
//           {navItems.map((item) => (
//             <div key={item.title} className="relative group lg:static">
//               <Link
//                 href={item.link}
//                 className="peer flex items-center gap-1 py-2 border-b-2 border-transparent hover:text-[#5BC2A7] hover:border-[#5BC2A7]"
//               >
//                 {item.title}
//                 <span className="ml-1">
//                   <button
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setActiveDropdown(
//                         activeDropdown === item.title ? null : item.title
//                       );
//                     }}
//                     className="focus:outline-none"
//                     aria-label="Toggle submenu"
//                   >
//                     <svg
//                       className={`w-4 h-4 transform transition-transform duration-200 ${
//                         activeDropdown === item.title ? "rotate-180" : ""
//                       }`}
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </button>
//                 </span>
//               </Link>

//               {/* Mobile Dropdown */}
//               <div
//                 className={`${
//                   activeDropdown === item.title ? "block" : "hidden"
//                 } lg:hidden`}
//               >
//                 {item.children.map((child) => (
//                   <Link
//                     key={child.title}
//                     href={child.link}
//                     className="block px-4 py-2 text-sm hover:bluenew hover:text-[#1E8767]"
//                   >
//                     {child.title}
//                   </Link>
//                 ))}
//               </div>

//               {/* Desktop Dropdown */}
//               <div
//                 className="hidden lg:block lg:absolute lg:min-w-[250px] bg-white shadow-lg
//                           opacity-0 invisible group-hover:opacity-100 group-hover:visible
//                           transform group-hover:translate-y-2 transition-all duration-200 z-50"
//               >
//                 {item.children.map((child) => (
//                   <Link
//                     key={child.title}
//                     href={child.link}
//                     className="block px-4 py-2 text-sm hover:bluenew hover:text-[#1E8767]"
//                   >
//                     {child.title}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}

//           {/* Other Links */}
//           {[
//             {
//               title: "Industry",
//               link: "/industry",
//               children: [],
//             },
//             {
//               title: "Developer for Hire",
//               link: "/developer-for-hire",
//               children: [],
//             },

//             {
//               title: "Technology",
//               link: "/technology",
//             },
//             {
//               title: "Blog",
//               link: "/blogs",
//             },
//           ].map((item) => (
//             <Link
//               key={item.title}
//               href={item.link}
//               className={`block py-2 border-b-2 border-transparent ${
//                 isActive(item.link)
//                   ? "text-[#1E8767] border-[#1E8767]"
//                   : "hover:text-[#1E8767] hover:border-[#1E8767]"
//               }`}
//             >
//               {item.title}
//             </Link>
//           ))}

//           {/* Contact Button */}
//           <Link
//             href="/contact-us"
//             className="mt-3 lg:mt-0 lg:ml-4 px-6 py-2 bg-[#1E8767] text-white rounded-md font-medium hover:bluenew  transition-transform hover:scale-104 "
//           >
//             Contact Us
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  {
    title: "About",
    link: "/about",
    children: [
      // { title: "About Company", link: "/About/AboutCompany" },
      { title: "Clients", link: "/about/clients" },
      { title: "Mission", link: "/about/mission" },
      { title: "Portfolio", link: "/portfolio" },
      {
        title: "Privacy  Policy",
        link: "https://www.logzerotechnologies.com/privacy-policy/",
      },
    ],
  },
  {
    title: "Services",
    link: "/services",
    children: [
      { title: "Software-Development", link: "/services/software-development" },
      { title: "Web Development", link: "/services/web-development" },
      {
        title: "Mobile App Development",
        link: "/services/mobile-app-development",
      },
      { title: "Global Partner", link: "/services/global-partner" },
      { title: "UI Design Services", link: "/services/ui-design" },
      { title: "UX Design Services", link: "/services/ux-design" },
      { title: "Cloud Services", link: "/services/cloud-services" },
      { title: "Testing QA Service", link: "/services/testing-service" },
    ],
  },
  {
    title: "Solutions",
    link: "/solutions",
    children: [
      { title: "Data Management", link: "/solutions/data-management" },
    ],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimerRef = useRef(null);

  // --- Sticky Header State ---
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const pathname = usePathname();
  const router = useRouter();

  const isActive = (link) => pathname === link;
  const isParentActive = (children) =>
    children?.some((child) => pathname.startsWith(child.link));

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleToggleDropdown = (title) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  const handleOpenDropdown = (title) => {
    clearCloseTimer();
    setActiveDropdown(title);
  };

  const scheduleCloseDropdown = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      closeTimerRef.current = null;
    }, 120);
  };

  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    if (router?.events) {
      router.events.on("routeChangeStart", handleRouteChange);
      return () => router.events.off("routeChangeStart", handleRouteChange);
    } else {
      setIsMenuOpen(false);
    }
  }, [router, pathname]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/img/logzero.svg"
            alt="LogZero Logo"
            width={219}
            height={40}
            priority
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } subtext lg:flex lg:items-center lg:space-x-6 
              absolute lg:static top-full right-0 w-[300px] pb-10 lg:pb-0 lg:w-auto 
              bg-white lg:bg-transparent shadow-md lg:shadow-none 
              px-6 lg:px-0 transition-all duration-300`}
        >
          {/* Home */}
          <Link
            href="/"
            className={`block py-2 border-b-2 border-transparent ${
              isActive("/")
                ? "text-[#1E8767] border-[#1E8767]"
                : "hover:text-[#1E8767] hover:border-[#1E8767]"
            }`}
          >
            Home
          </Link>

          {/* Dropdowns with parent link */}
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => handleOpenDropdown(item.title)}
              onMouseLeave={scheduleCloseDropdown}
            >
              <Link
                href={item.link}
                className="peer flex items-center gap-1 py-2 border-b-2 border-transparent hover:text-[#5BC2A7] hover:border-[#5BC2A7]"
              >
                {item.title}
                <span className="ml-1">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggleDropdown(item.title);
                    }}
                    className="focus:outline-none"
                    aria-label="Toggle submenu"
                  >
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-200 ${
                        activeDropdown === item.title ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </span>
              </Link>

              {/* Mobile Dropdown */}
              <div
                className={`${
                  activeDropdown === item.title ? "block" : "hidden"
                } lg:hidden`}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.title}
                    href={child.link}
                    className="block px-4 py-2 text-sm hover:bluenew hover:text-[#1E8767]"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>

              {/* Desktop Dropdown */}
              <div
                className={`hidden lg:block lg:absolute lg:top-full lg:left-0 lg:min-w-[250px] bg-white shadow-lg z-50 transition-all duration-200
                          ${
                            activeDropdown === item.title
                              ? "opacity-100 visible translate-y-2"
                              : "opacity-0 invisible translate-y-0 pointer-events-none"
                          }`}
                onMouseEnter={() => handleOpenDropdown(item.title)}
                onMouseLeave={scheduleCloseDropdown}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.title}
                    href={child.link}
                    className="block px-4 py-2 text-sm hover:bluenew hover:text-[#1E8767]"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Other Links */}
          {[
            {
              title: "Industry",
              link: "/industry",
              children: [],
            },
            {
              title: "Developer for Hire",
              link: "/developer-for-hire",
              children: [],
            },

            {
              title: "Technology",
              link: "/technology",
              children: [],
            },
            {
              title: "Blog",
              link: "/blog",
              children: [],
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className={`block py-2 border-b-2 border-transparent ${
                isActive(item.link)
                  ? "text-[#1E8767] border-[#1E8767]"
                  : "hover:text-[#1E8767] hover:border-[#1E8767]"
              }`}
            >
              {item.title}
            </Link>
          ))}

          {/* Contact Button */}
          <Link
            href="/contact-us"
            className="mt-3 md:mt-0 md:ml-4 px-4 md:px-6 py-2 bg-[#1E8767] text-white rounded-md font-medium whitespace-nowrap hover:bluenew transition-transform hover:scale-105"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
