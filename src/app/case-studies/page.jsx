import Portfolio from "@/components/Portfolio";
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
    res?.data?.data?.find((item) => item?.customSlug === "portfolio") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Portfolio ";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Portfolio\"description here.";

      return { title, description };

   } catch (error) {
         const title = "Portfolio";
    const description =
      "This is our \"Portfolio\"description here..";
    return { title, description };
  }
   }



export default async function PortfolioPage() {
  return <Portfolio />;
}