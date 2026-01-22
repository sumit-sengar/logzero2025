import TestingQaSection from "@/components/TestingQaSection";
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
    res?.data?.data?.find((item) => item?.customSlug === "testing-qa-services") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Testing & QA Services";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Testing & QA Services\" description here.";

      return { title, description };

   } catch (error) {
         const title = "Testing & QA Services";
    const description =
      "This is our \"Testing & QA Services\" description here..";
    return { title, description };
  }
   }



export default async function WebDevelopmentPage() {
  return <TestingQaSection />;
}