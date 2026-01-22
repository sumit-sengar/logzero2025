import Services from "@/components/Services";
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
    res?.data?.data?.find((item) => item?.customSlug === "services") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Services ";
    const description =
      aboutMeta.metaDescription ||
      "Services here.";

      return { title, description };

   } catch (error) {
         const title = "Services";
    const description =
      "Services here.";
    return { title, description };
  }
   }



export default async function ServicesPage() {
  return <Services />;
}