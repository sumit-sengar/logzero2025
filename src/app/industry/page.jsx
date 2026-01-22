import IndustrySection from "@/components/IndustrySection";
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
    res?.data?.data?.find((item) => item?.customSlug === "industry") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Industry";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Industry\" description here.";

      return { title, description };

   } catch (error) {
         const title = "Industry";
    const description =
      "This is our \"Industry\" description here..";
    return { title, description };
  }
   }



export default async function WebDevelopmentPage() {
  return <IndustrySection />;
}