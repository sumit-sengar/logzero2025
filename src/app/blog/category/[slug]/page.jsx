import React from "react";
import {
	Code,
	Bolt,
	Server,
	Diamond,
	FileText,
	CalendarDays,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InlineGreenButton } from "@/components/InlineGreenButton";
import CategoryPostsClient from "@/components/CategoryPostsClient";

const devImg = "/assets/img/devImage.webp";

const SearchOfCategory = [
	{ id: 1, title: "Dev", color: "#FFEDEC", iconBg: "#F9E4E3", icon: Code, iconColor: "#7D2F2B" },
	{ id: 2, title: "Digital Solutions", color: "#F7EBFF", icon: Bolt, iconBg: "#ECDDF6", iconColor: "#60387A" },
	{ id: 3, title: "DevOps &Server Management", color: "#ECF1FF", icon: Server, iconBg: "#E0E7FB", iconColor: "#354571" },
	{ id: 4, title: "Design", color: "#D8F9F3", icon: Diamond, iconBg: "#BBE4DD", iconColor: "#256D5B" },
	{ id: 5, title: "Docs", color: "#FFF3CB", icon: FileText, iconBg: "#F9E4E3", iconColor: "#9F8A47" },
];

async function fetchCategoryRows(slug, page = 1) {
	try {
		const base = (process.env.NEXT_PUBLIC_API_BASE_URL || "https://webapi.logzerotechnologies.com/api").replace(/\/$/, "");
		const url = `${base}/posts?type=blog_post&blogCategory=${encodeURIComponent(slug)}${page && page > 1 ? `&page=${page}` : ""}`;
		const res = await fetch(url, { cache: "no-store" });
		const json = await res.json();
		const rows = json?.data?.rows ?? json?.rows ?? [];
		rows.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		return rows;
	} catch (e) {
		console.error("fetchCategoryRows error:", e);
		return [];
	}
}

export default async function CategoryPage(props) {
	const { params } = props;
	// `searchParams` may be an async object in Next.js App Router; await it before reading properties.
	const searchParams = await props.searchParams;
	const slug = params?.slug || "";
	const page = Number(searchParams?.page ?? 1);
	const displaySlug = slug ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "This Category";

	const rows = await fetchCategoryRows(slug, page);

	const featured = rows[0] ?? null;
	const listRows = rows.slice(0, 9);

	return (
		<div className="bg-white font-sans">
			<section className="mt-16 ">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
					<div className="gap-6 pt-[30px] pb-[30px] pl-6 xl:pl-[80px] lg:pl-[50px] md:pl-8 pr-6 lg:pr-[30px] md:pr-[0px]">
						<h2 className=" lg:!text-[48px] md:!leading-[2rem] lg:!leading-[3rem] font-semibold text-[#1F1F1F]">
							{slug ? `${slug.charAt(0).toUpperCase() + slug.slice(1)} Insights & Best Practices` : "Category"}
						</h2>
						<p className="lg:text-xl text-[#111827] mt-2">{`Latest posts for ${slug || "this category"}.`}</p>
						<div className="inline-block">
							<InlineGreenButton text="Schedule Consultation" linkurl="/contact-us" linktarget="_self" MoveRighticon services={[]} />
						</div>
					</div>

					<Image src={devImg} alt="Category image" width={1200} height={800} className="object-cover w-full" />
				</div>
			</section>

			<div className="container mx-auto px-4 lg:px-0 pb-10">
				{/* search by category start */}
				<div className="mt-16">
					<h2 className="text-2xl font-semibold mb-4 text-[#2B2D2F]">Find Blogs by Your Interest</h2>
					<div className=" border-b border-[#E5E5E7] mb-8" />

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
						{SearchOfCategory.map((category) => {
							const IconComponent = category.icon;
							const slugLink = category.title.toLowerCase().replace(/\s+/g, "-");
							const isActive = slug === slugLink;
							return (
								<Link
									key={category.id}
									href={`/blog/category/${slugLink}`}
									aria-current={isActive ? "page" : undefined}
									className={`flex flex-col items-center p-4 rounded-lg transition ${
										isActive
											? "category-glow ring-2 ring-[#1E8767] shadow-[0_0_25px_rgba(30,135,103,0.35)]"
											: "hover:shadow-lg"
									}`}
									style={{ backgroundColor: category?.color }}
								>
									<div className=" w-16 h-16 rounded rounded-full flex items-center justify-center" style={{ backgroundColor: category?.iconBg }}>
										<IconComponent className="w-8 h-8" style={{ color: category?.iconColor }} />
									</div>

									<p className="lg:!text-[20px] text-center font-bold mt-4" style={{ color: category.iconColor }}>{category.title}</p>
								</Link>
							);
						})}
						{SearchOfCategory.length === 0 && <p>No categories available.</p>}
					</div>
				</div>
				{/* search by category end */}

				{/* Featured + posts */}
				<section className="mt-16">
					{rows.length === 0 ? (
						<div className="flex flex-col items-center text-center py-20">
							<h3 className="text-3xl font-bold mb-4">No posts yet in {displaySlug}</h3>
							<p className="text-gray-600 max-w-2xl mb-6">
								We're gathering thoughtful, practical articles for this category. Subscribe or schedule a consultation and we'll let you know when new posts go live.
							</p>
							<div className="flex gap-4">
								<InlineGreenButton text="Schedule Consultation" linkurl="/contact-us" linktarget="_self" MoveRighticon={false} services={[]} />
								<a href="/blog" className="inline-flex items-center justify-center px-6 py-3 border rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Browse all posts</a>
							</div>
              
						</div>
					) : (
						<>
							<h2 className="text-2xl font-semibold mb-4 text-[#2B2D2F]">Latest Posts</h2>
							<div className="border-b border-[#E5E5E7] mb-8" />
							<CategoryPostsClient initialPosts={listRows} morePosts={rows.slice(9)} />
						</>
					)}
				</section>
			</div>
		</div>
	);
}
