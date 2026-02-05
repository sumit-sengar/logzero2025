import DataManagementSection from "@/components/DataManagementSection";
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
    res?.data?.data?.find((item) => item?.customSlug === "data-management") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Data Management";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Data Management\" description here.";

    const indexValue = aboutMeta.indexValue ?? true;
    const robots = indexValue ? undefined : { index: false, follow: false };

    return robots ? { title, description, robots } : { title, description };

   } catch (error) {
         const title = "Data Management";
    const description =
      "This is our \"Data Management\" description here..";
    return { title, description };
  }
   }



export default async function WebDevelopmentPage() {
  return <DataManagementSection />;
}