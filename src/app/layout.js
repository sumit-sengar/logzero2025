import "./globals.css";
import Providers from "./providers";
import Script from "next/script";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  metadataBase: new URL("https://logzerotechnologies.com"),
  title: {
    default: "LogZero Technologies",
    template: "%s | LogZero Technologies",
  },
  description: "Welcome to LogZero – delivering scalable digital solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LogZero Technologies",
    description: "Welcome to LogZero – delivering scalable digital solutions.",
    url: "https://logzerotechnologies.com",
    siteName: "LogZero Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/img/Image_tags.webp",
        width: 1200,
        height: 600,
        alt: "LogZero Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LogZero Technologies",
    description: "Welcome to LogZero – delivering scalable digital solutions.",
    images: ["/assets/img/Image_tags.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.logzerotechnologies.com/#organization",
      name: "LogZero Technologies",
      url: "https://www.logzerotechnologies.com/",
      logo: "https://www.logzerotechnologies.com/assets/img/logzero.svg",
      image: "https://www.logzerotechnologies.com/assets/hero-image.jpg",
      description:
        "LogZero Technologies is a leading digital transformation and IT services company delivering custom web development, mobile app development, cloud and DevOps solutions, data engineering, and user-centric UI/UX design for startups and enterprises worldwide.",
      foundingDate: "2011",
      telephone: "+91 11 40789940",
      email: "sales@logzerotechnologies.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Pegasus Tower, A-10, 8th Floor, Sector-68",
        addressLocality: "Gautam Buddha Nagar, Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 11 40789940",
        contactType: "customer support",
        email: "sales@logzerotechnologies.com",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [
        "https://www.facebook.com/logzerotechnologies",
        "https://twitter.com/logzerotechnologies",
        "https://www.instagram.com/logzerotechnologies",
      ],
    }),
  }}
/>

       <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NNJVT93X');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NNJVT93X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}