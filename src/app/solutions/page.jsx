import SolutionsSection from "@/components/SolutionsSection";
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
    res?.data?.data?.find((item) => item?.customSlug === "solutions") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Solutions";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Solutions\" description here.";

    const indexValue = aboutMeta.indexValue ?? true;
    const robots = indexValue ? undefined : { index: false, follow: false };

    return robots ? { title, description, robots } : { title, description };

   } catch (error) {
         const title = "Solutions";
    const description =
      "This is our \"Solutions\" description here..";
    return { title, description };
  }
   }



export default async function WebDevelopmentPage() {
  return <SolutionsSection />;
}