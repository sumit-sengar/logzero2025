import UxDesignSection from "@/components/UxDesignSection";
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
    res?.data?.data?.find((item) => item?.customSlug === "ux-design-services") ?? {};
    
    const title =
      aboutMeta.metaTitle || "UX Design Services";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"UX Design Services\" description here.";

    const indexValue = aboutMeta.indexValue ?? true;
    const robots = indexValue ? undefined : { index: false, follow: false };

    return robots ? { title, description, robots } : { title, description };

   } catch (error) {
         const title = "UX Design Services";
    const description =
      "This is our \"UX Design Services\" description here..";
    return { title, description };
  }
   }



export default async function WebDevelopmentPage() {
  return <UxDesignSection />;
}