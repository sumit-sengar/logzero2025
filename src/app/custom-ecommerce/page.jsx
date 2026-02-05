 import React from 'react';
import CustomEcommerceSection from '../../components/CustomEcommerceSection';
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
    res?.data?.data?.find((item) => item?.customSlug === "custom-ecommerce") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Custom Ecommerce ";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Custom Ecommerce\"description here.";

    const indexValue = aboutMeta.indexValue ?? true;
    const robots = indexValue ? undefined : { index: false, follow: false };

    return robots ? { title, description, robots } : { title, description };

   } catch (error) {
         const title = "Custom Ecommerce";
    const description =
      "This is our \"Custom Ecommerce\"description here..";
    return { title, description };
  }
   }

    const CustomEcommercePage = () => {
        return (
            <CustomEcommerceSection />
        );
    }

    export default CustomEcommercePage;