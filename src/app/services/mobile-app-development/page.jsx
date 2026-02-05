import MobileAppDevSection from "@/components/MobileAppDevSection";
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
    res?.data?.data?.find((item) => item?.customSlug === "mobile-app-development") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Mobile App Development";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Mobile App Development\" description here.";

    const indexValue = aboutMeta.indexValue ?? true;
    const robots = indexValue ? undefined : { index: false, follow: false };

    return robots ? { title, description, robots } : { title, description };

   } catch (error) {
         const title = "Mobile App Development";
    const description =
      "This is our \"Mobile App Development\" description here..";
    return { title, description };
  }
   }



export default async function WebDevelopmentPage() {
  return <MobileAppDevSection />;
}