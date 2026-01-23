import UiDesignSection from "@/components/UiDesignSection";
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
    res?.data?.data?.find((item) => item?.customSlug === "ui-design-services") ?? {};
    
    const title =
      aboutMeta.metaTitle || "UI Design";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"UI Design\" description here.";

      return { title, description };

   } catch (error) {
         const title = "UI Design";
    const description =
      "This is our \"UI Design\" description here..";
    return { title, description };
  }
   }



export default async function WebDevelopmentPage() {
  return <UiDesignSection />;
}