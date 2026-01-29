 import React from 'react';
import WebApps from '../../components/WebApps';
import api from "@/lib/api";
export const revalidate = 0;

export async function generateMetadata() {

  const apiUrl = `${
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://webapi.logzerotechnologies.com/api"
  }/categories/categoriesDetail`;

   try {
    const res = await api.get(apiUrl);
    const aboutMeta = 
    res?.data?.data?.find((item) => item?.customSlug === "web-apps") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Custom Ecommerce ";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Custom Ecommerce\"description here.";

      return { title, description };

   } catch (error) {
         const title = "Custom Ecommerce";
    const description =
      "This is our \"Custom Ecommerce\"description here..";
    return { title, description };
  }
   }

    const WebAppsPage = () => {
        return (
            <WebApps />
        );
    }

    export default WebAppsPage;