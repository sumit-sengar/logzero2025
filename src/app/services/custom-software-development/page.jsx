import SoftwareDevelopmentSection from "@/components/SoftwareDevelopmentSection";
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
    res?.data?.data?.find((item) => item?.customSlug === "custom-software-development") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Custom Software Development";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Custom Software Development\" description here.";

      return { title, description };

   } catch (error) {
         const title = "Custom Software Development";
    const description =
      "This is our \"Custom Software Development\" description here..";
    return { title, description };
  }
   }



export default async function SoftwareDevelopmentPage() {
  return <SoftwareDevelopmentSection />;
}