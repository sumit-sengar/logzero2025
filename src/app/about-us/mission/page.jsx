import Mission from "@/components/Mission";
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
    res?.data?.data?.find((item) => item?.customSlug === "mission") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Mission ";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Mission\"description here.";

      return { title, description };

   } catch (error) {
         const title = "Mission";
    const description =
      "This is our \"Mission\"description here..";
    return { title, description };
  }
   }



export default async function MissionPage() {
  return <Mission />;
}