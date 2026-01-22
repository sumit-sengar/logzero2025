import DeveloperForHireSection from "@/components/DeveloperForHireSection";
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
    res?.data?.data?.find((item) => item?.customSlug === "developer-for-hire") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Developer For Hire";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Developer For Hire\" description here.";

      return { title, description };

   } catch (error) {
         const title = "Developer For Hire";
    const description =
      "This is our \"Developer For Hire\" description here..";
    return { title, description };
  }
   }



export default async function DeveloperForHirePage() {
  return <DeveloperForHireSection />;
}