import BlogSection from "@/components/BlogSection";
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
    res?.data?.data?.find((item) => item?.customSlug === "blog") ?? {};
    
    const title =
      aboutMeta.metaTitle || "Blog";
    const description =
      aboutMeta.metaDescription ||
      "This is our \"Blog\" description here.";

      return { title, description };

   } catch (error) {
         const title = "Blog";
    const description =
      "This is our \"Blog\" description here..";
    return { title, description };
  }
   }



export default async function BlogPage() {
  return <BlogSection />;
}