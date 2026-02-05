import HomePageHydrator from "@/components/HomePageHydrator";
import api from "@/lib/api";

export const revalidate = 0;

export async function generateMetadata() {
  const apiUrl = `${
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://webapi.logzerotechnologies.com/api"
  }/categories/categoriesDetail`;

  try {
    const res = await api.get(apiUrl);
    const homeMeta =
      res?.data?.data?.find((item) => item?.customSlug === "home") ?? {};

    const title = homeMeta.metaTitle || "Home | LogZero Technologies";
    const description =
      homeMeta.metaDescription ||
      "Welcome to LogZero – delivering scalable digital solutions.";
    const indexValue = homeMeta.indexValue ?? true;
    const robots = indexValue ? undefined : { index: false, follow: false };

    return robots ? { title, description, robots } : { title, description };
  } catch (error) {
    const title = "Home | LogZero Technologies";
    const description =
      "Welcome to LogZero – delivering scalable digital solutions.";
    return { title, description };
  }
}
export default function Page() {
  return <HomePageHydrator />;
}
