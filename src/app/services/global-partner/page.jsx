import GlobalPartnerSection from "@/components/GlobalPartnerSection";
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
    res?.data?.data?.find((item) => item?.customSlug === "global-partner") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Global Partner";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Global Partner\" description here.";

      return { title, description };

   } catch (error) {
         const title = "Global Partner";
    const description =
      "This is our \"Global Partner\" description here..";
    return { title, description };
  }
   }



export default async function GlobalParnterPage() {
  return <GlobalPartnerSection />;
}