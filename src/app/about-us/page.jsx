import AboutUs from "@/components/AboutUs";
import api from "@/lib/api";
export const revalidate = 0;

export async function generateMetadata() {

  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL || "https://webapi.logzerotechnologies.com/api"}/categories/categoriesDetail`;

   try {
    const res = await api.get(apiUrl);
    const aboutMeta = 
    res?.data?.data?.find((item) => item?.customSlug === "about-us") ?? {};

    const title =
      aboutMeta.metaTitle || "About Us | LogZero Technologies";
    const description =
      aboutMeta.metaDescription ||
      "Learn about LogZero Technologies, our mission, team, and the value we deliver.";

    const indexValue = aboutMeta.indexValue ?? true;
    const robots = indexValue ? undefined : { index: false, follow: false };

    return robots ? { title, description, robots } : { title, description };

   } catch (error) {
         const title = "About Us | LogZero Technologies";
    const description =
      "Learn about LogZero Technologies, our mission, team, and the value we deliver.";
    return { title, description };
  }
   }


  



export default async function AboutUsPage() {
  return <AboutUs />;
}