import Clients from "@/components/Clients";
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
    res?.data?.data?.find((item) => item?.customSlug === "clients") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Clients ";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Clients\"description here.";

      return { title, description };

   } catch (error) {
         const title = "Clients";
    const description =
      "This is our \"Clients\"description here..";
    return { title, description };
  }
   }



export default async function ClientsPage() {
  return <Clients />;
}