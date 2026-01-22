import WebDevelopmentSection from "@/components/WebDevelopmentSection";
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
    res?.data?.data?.find((item) => item?.customSlug === "web-development") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Web Development";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Web Development\" description here.";

      return { title, description };

   } catch (error) {
         const title = "Web Development";
    const description =
      "This is our \"Web Development\" description here..";
    return { title, description };
  }
   }



export default async function WebDevelopmentPage() {
  return <WebDevelopmentSection />;
}