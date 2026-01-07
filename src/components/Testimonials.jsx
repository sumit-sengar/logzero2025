"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const WIDGET_UUID = "19a2fd76-6705-4c00-a9e4-4fe48d678406";
const SCRIPT_SRC = "https://featurable.com/assets/bundle.js";

export default function FeaturableEmbed({
  title = "Our Testimonials",
  subtitle = "See what our clients are saying about us.",
}) {
  const [loaded, setLoaded] = useState(false);
  const [uniqueId] = useState(`featurable-${WIDGET_UUID}`);

  useEffect(() => {
    let script = document.querySelector(`script[src="${SCRIPT_SRC}"]`);

    const initWidget = () => {
      // console.log("Featurable: Attempting to init...");
      try {
        if (window.Featurable && typeof window.Featurable.init === "function") {
          window.Featurable.init();
          setLoaded(true);
        } else if (typeof window.dispatchEvent === "function") {
          window.dispatchEvent(new Event("featurable:load"));
          setTimeout(() => setLoaded(true), 500);
        }
      } catch (err) {
        console.warn("Featurable init error:", err);
      }
    };

    if (script) {
      // console.log("Featurable: Cleaning stale script to force reload");
      script.remove();
    }

    const newScript = document.createElement("script");
    newScript.src = SCRIPT_SRC;
    newScript.defer = true;
    newScript.async = true;

    newScript.onload = () => {
      // console.log("Featurable: Script loaded from source");
      setTimeout(initWidget, 200);
    };

    newScript.onerror = (e) => console.error("Featurable failed to load", e);

    document.body.appendChild(newScript);

    return () => {
      const currentScript = document.querySelector(
        `script[src="${SCRIPT_SRC}"]`
      );
      if (currentScript) {
        currentScript.remove();
      }
    };
  }, []);

  return (
    <section className="py-10">
      <div className="headingbox pb-2 text-center mb-5">
        <span className="inline-block bluenew text-white px-[15px] py-[4px] rounded-full text-[14px] tracking-[2px] mb-4 bg-blue-600">
          TESTIMONIAL
        </span>
        <h2 className="mb-4 !text-[40px] !font-normal !leading-[117%]">
          {title}
        </h2>
        {subtitle && (
          <p className="mb-12 max-w-full md:max-w-[60%] mx-auto text-gray-600">
            {subtitle}
          </p>
        )}
      </div>

      <div id="testimonials" className="relative">
        <Swiper
          modules={[Autoplay]}
          // navigation={{
          //   nextEl: ".custom-next",
          //   prevEl: ".custom-prev",
          // }}
          // Keep loop false to avoid Duplicate ID errors
          loop={false}
          autoHeight={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          speed={1000}
          spaceBetween={30}
          slidesPerView={1}
          className=""
        >
          <SwiperSlide>
            {/* The Widget Container */}
            <div
              id={uniqueId}
              data-featurable-async
              data-featurable-id={WIDGET_UUID}
              style={{ minHeight: "140px" }}
              className="w-full"
            />

            {/* Loading State */}
            {!loaded && (
              <div className="flex justify-center items-center py-10">
                <div className="text-gray-400 text-sm animate-pulse">
                  Loading reviews...
                </div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>

        {/* Nav Buttons */}
        {/* <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 custom-prev cursor-pointer p-2 bg-white shadow-md rounded-full hover:bg-gray-100">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div> */}
        {/* <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 custom-next cursor-pointer p-2 bg-white shadow-md rounded-full hover:bg-gray-100">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div> */}
      </div>
    </section>
  );
}
