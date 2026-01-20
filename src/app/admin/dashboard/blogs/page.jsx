"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../../../lib/api";
import {
  Plus,
  Filter,
  Trash2,
  Edit,
  Eye,
  Layers,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
} from "lucide-react";

// ---------------- Small UI helper: checkbox multi-select ----------------
function CheckboxGroup({
  title,
  options,
  selectedIds,
  onToggle,
  className = "",
}) {
  return (
    <div className={className}>
      <label className="text-xs text-gray-500 uppercase font-semibold">
        {title}
      </label>
      <div className="mt-2 max-h-44 overflow-auto rounded border border-zinc-800 bg-zinc-950 p-2 space-y-1">
        {options?.length === 0 ? (
          <div className="text-xs text-zinc-500 px-1 py-2">No options</div>
        ) : (
          options?.map((opt) => {
            const checked = selectedIds.includes(opt.id);
            return (
              <label
                key={opt.id}
                className="flex items-center gap-2 text-sm text-gray-300 px-2 py-1 rounded hover:bg-zinc-900 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(opt.id)}
                  className="accent-blue-600"
                />
                <span className="truncate">{opt.name}</span>
              </label>
            );
          })
        )}
      </div>
    </div>
  );
}

export default function BlogDashboard() {
  const router = useRouter();

  // ---------------- State ----------------
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState(null);

  // Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 9;

  // Filters
  const [filters, setFilters] = useState({
    status: "",
    type: "",
    blogCategory: "",
    portfolioCategoryIds: [],
    solutionIds: [],
    technologyIds: [],
    industryIds: [],
  });

  const isBlogPostType = filters.type === "blog_post";
  const isCaseStudyType = filters.type === "case_study";

  // ---------------- Fetch filter options ----------------
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const res = await api.get("/posts/filter-options");
        const payload = res.data?.data ?? res.data;
        setOptions(payload);
      } catch (err) {
        console.error("Error loading filter options", err);
      }
    };
    fetchOptions();
  }, []);

  // ---------------- Build query + fetch posts ----------------
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();

      params.append("page", String(page));
      params.append("limit", String(limit));
      params.append("sortBy", "createdAt");
      params.append("sortOrder", "DESC");

      if (filters.status) params.append("status", filters.status);
      if (filters.type) params.append("type", filters.type);

      if (isBlogPostType && filters.blogCategory) {
        params.append("blogCategory", filters.blogCategory);
      }

      if (isCaseStudyType) {
        if (filters.portfolioCategoryIds.length) {
          params.append(
            "portfolioCategoryIds",
            filters.portfolioCategoryIds.join(",")
          );
        }
        if (filters.solutionIds.length) {
          params.append("solutionIds", filters.solutionIds.join(","));
        }
        if (filters.technologyIds.length) {
          params.append("technologyIds", filters.technologyIds.join(","));
        }
        if (filters.industryIds.length) {
          params.append("industryIds", filters.industryIds.join(","));
        }
      }

      const res = await api.get(`/posts?${params.toString()}`);
      const data = res.data;
      
      if (data?.success && Array.isArray(data?.data?.rows)) {
        setPosts(data.data.rows);

        const tp =
          typeof data.pagination?.totalPages === "number"
            ? data.pagination.totalPages
            : Math.max(1, Math.ceil((data.data.count || 0) / limit));

        setTotalPages(tp);
      } else {
        setPosts([]);
        setTotalPages(1);
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
      setPosts([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  }, [page, limit, filters, isBlogPostType, isCaseStudyType]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // ---------------- Handlers ----------------
  const handleSelectChange = (e) => {
    const { name, value } = e.target;

    if (name === "type") {
      setFilters((prev) => ({
        ...prev,
        type: value,
        blogCategory: "",
        portfolioCategoryIds: [],
        solutionIds: [],
        technologyIds: [],
        industryIds: [],
      }));
      setPage(1);
      return;
    }

    setFilters((prev) => ({ ...prev, [name]: value }));
    setPage(1);
  };

  const toggleIdInArray = (arr, id) =>
    arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id];

  const togglePortfolioCategory = (id) => {
    setFilters((prev) => ({
      ...prev,
      portfolioCategoryIds: toggleIdInArray(prev.portfolioCategoryIds, id),
    }));
    setPage(1);
  };

  const toggleSolution = (id) => {
    setFilters((prev) => ({
      ...prev,
      solutionIds: toggleIdInArray(prev.solutionIds, id),
    }));
    setPage(1);
  };

  const toggleTechnology = (id) => {
    setFilters((prev) => ({
      ...prev,
      technologyIds: toggleIdInArray(prev.technologyIds, id),
    }));
    setPage(1);
  };

  const toggleIndustry = (id) => {
    setFilters((prev) => ({
      ...prev,
      industryIds: toggleIdInArray(prev.industryIds, id),
    }));
    setPage(1);
  };

  const clearFilters = () => {
    setFilters({
      status: "",
      type: "",
      blogCategory: "",
      portfolioCategoryIds: [],
      solutionIds: [],
      technologyIds: [],
      industryIds: [],
    });
    setPage(1);
  };

  const deletePost = async (id) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      await api.delete(`/posts/${id}`);
      fetchPosts();
    } catch (err) {
      alert("Failed to delete post");
    }
  };

  const selectedSummary = useMemo(() => {
    if (!isCaseStudyType) return null;
    return (
      <div className="text-xs text-zinc-500 space-y-1">
        <div>
          Portfolio categories: {filters.portfolioCategoryIds.length || 0}
        </div>
        <div>Solutions: {filters.solutionIds.length || 0}</div>
        <div>Technologies: {filters.technologyIds.length || 0}</div>
        <div>Industries: {filters.industryIds.length || 0}</div>
      </div>
    );
  }, [isCaseStudyType, filters]);

  const getPostCategoryLabel = (post) => {
    if (post.type === "blog_post") return post.blogCategory || "-";
    const names =
      post.portfolioCategories?.map((c) => c.name).filter(Boolean) || [];
    return names.length ? names.join(", ") : "-";
  };

  const formatDate = (iso) => {
    if (!iso) return "-";
    const d = new Date(iso);
    if (isNaN(d.getTime())) return "-";
    return d.toLocaleDateString();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/admin/login");
  };

  // ---------------- UI ----------------
  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col md:flex-row">
      {/* --- SIDEBAR FILTERS --- */}
      <aside className="w-full md:w-56 bg-zinc-900 border-r border-zinc-800 p-4 md:p-5 flex-shrink-0 md:h-screen md:sticky md:top-0 overflow-y-auto">
        <div className="flex items-center gap-2 mb-4 text-blue-400">

          <Filter size={18} />
          <h2 className="font-semibold text-sm md:!text-xl !text-blue-400">Filters</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-500 uppercase font-semibold">
              Status
            </label>
            <select
              name="status"
              value={filters.status}
              onChange={handleSelectChange}
              className="w-full mt-1 bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            >
              <option value="">All Statuses</option>
              {options?.statuses?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-500 uppercase font-semibold">
              Type
            </label>
            <select
              name="type"
              value={filters.type}
              onChange={handleSelectChange}
              className="w-full mt-1 bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            >
              <option value="">All Types</option>
              {options?.types?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {isBlogPostType && (
            <div className="animate-in fade-in slide-in-from-top-2">
              <label className="text-xs text-gray-500 uppercase font-semibold">
                Blog Category
              </label>
              <select
                name="blogCategory"
                value={filters.blogCategory}
                onChange={handleSelectChange}
                className="w-full mt-1 bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="">All Blog Categories</option>
                {options?.blogCategories?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {isCaseStudyType && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
              <CheckboxGroup
                title="Portfolio Categories"
                options={options?.portfolioCategories || []}
                selectedIds={filters.portfolioCategoryIds}
                onToggle={togglePortfolioCategory}
              />

              <CheckboxGroup
                title="Solutions"
                options={options?.solutions || []}
                selectedIds={filters.solutionIds}
                onToggle={toggleSolution}
              />

              <CheckboxGroup
                title="Technologies"
                options={options?.technologies || []}
                selectedIds={filters.technologyIds}
                onToggle={toggleTechnology}
              />

              <CheckboxGroup
                title="Industries"
                options={options?.industries || []}
                selectedIds={filters.industryIds}
                onToggle={toggleIndustry}
              />

              {selectedSummary}
            </div>
          )}

          <button
            onClick={clearFilters}
            className="w-full mt-4 flex items-center justify-center gap-2 py-2 text-sm text-gray-400 hover:text-white hover:bg-zinc-800 rounded transition-colors"
          >
            <RefreshCw size={14} /> Reset Filters
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-4 md:p-6 lg:p-10 flex flex-col overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-0 mb-6 md:mb-8">
          <div>
            <h1 className="!text-xl !text-white font-bold !leading-normal">Content Management</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage your blogs and case studies
            </p>
          </div>

          <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
            <button
              onClick={() => router.push("/admin/dashboard/metaList")}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 border border-blue-500/60 bg-blue-500/10 hover:bg-blue-500/20 text-blue-100 px-3 md:px-4 py-2 text-sm md:text-base rounded-md transition-colors hover:bg-zinc-800 whitespace-nowrap cursor-pointer"
            >
              <Layers size={16} /> Meta List
            </button>

            <button
              onClick={() => router.push("/admin/dashboard/createMeta")}
              className="flex-1 md:flex-none cursor-pointer flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-3 md:px-4 py-2 text-sm md:text-base rounded-md transition-colors whitespace-nowrap"
            >
              <Plus size={16} /> Create Meta
            </button>

            <button
              onClick={() => router.push("/admin/dashboard/blogs/add")}
              className="flex-1 md:flex-none cursor-pointer flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-3 md:px-4 py-2 text-sm md:text-base rounded-md transition-colors whitespace-nowrap"
            >
              <Plus size={16} /> Create New
            </button>

            <button
              onClick={handleLogout}
              className="flex-1 md:flex-none cursor-pointer flex items-center justify-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 px-3 md:px-4 py-2 text-xs md:text-sm text-gray-200 hover:bg-zinc-800 whitespace-nowrap"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-16 bg-zinc-900 rounded-lg animate-pulse border border-zinc-800"
              />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 bg-zinc-900 rounded-lg border border-zinc-800 border-dashed">
            <Layers size={48} className="mx-auto text-zinc-700 mb-4" />
            <h3 className="text-lg font-medium text-gray-300">
              No posts found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters or create a new post.
            </p>
          </div>
        ) : (
          <div className="flex-1">
            <div className="scrollable-table border border-zinc-800 rounded-lg bg-zinc-900">
              <table className="w-full table-auto text-xs md:text-sm">
                <thead className="bg-zinc-950 border-b border-zinc-800">
                  <tr className="text-left text-xs uppercase tracking-wider text-zinc-400">
                    <th className="px-2 md:px-4 py-2 md:py-3">Post</th>
                    <th className="px-2 md:px-4 py-2 md:py-3">Type</th>
                    <th className="px-2 md:px-4 py-2 md:py-3">Category</th>
                    <th className="px-2 md:px-4 py-2 md:py-3 hidden sm:table-cell">Status</th>
                    <th className="px-2 md:px-4 py-2 md:py-3 hidden md:table-cell">Created</th>
                    <th className="px-2 md:px-4 py-2 md:py-3 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-zinc-800">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-zinc-800/40 text-xs md:text-sm">
                      <td className="px-2 md:px-4 py-2 md:py-3">
                        <div className="flex items-center gap-2 md:gap-3 w-[220px] md:w-[300px]">
                          <div className="h-8 w-10 md:h-10 md:w-14 rounded overflow-hidden border border-zinc-800 bg-zinc-950 flex-shrink-0">
                            {(post.featuredImageBase64 || post.featuredImage) ? (
                              <img
                                src={post.featuredImageBase64 || post.featuredImage}
                                alt={post.metaTitle}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="h-full w-full flex items-center justify-center text-zinc-700">
                                <Layers size={14} />
                              </div>
                            )}
                          </div>

                          <div className="min-w-0 space-y-0.5">
                            <div
                              className="font-semibold text-gray-100 line-clamp-1 text-xs md:text-sm"
                              title={post.metaTitle}
                            >
                              {post.metaTitle}
                            </div>
                            <div
                              className="text-xs text-zinc-400 line-clamp-1 md:line-clamp-2 hidden md:block"
                              title={post.metaDescription}
                            >
                              {post.metaDescription || "No description"}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-2 md:px-4 py-2 md:py-3">
                        <span 
                          className="px-1.5 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] uppercase font-bold tracking-wider bg-blue-900/30 text-blue-300 border border-blue-900 whitespace-nowrap"
                          title={`Content Type: ${post.type?.replace("_", " ")}`}
                        >
                          {post.type?.replace("_", " ")}
                        </span>
                      </td>

                      <td
                        className="px-2 md:px-4 py-2 md:py-3 text-zinc-300 max-w-[80px] md:max-w-[260px] truncate text-xs md:text-sm"
                        title={getPostCategoryLabel(post)}
                      >
                        {getPostCategoryLabel(post)}
                      </td>

                      <td className="px-2 md:px-4 py-2 md:py-3 hidden sm:table-cell">
                        <span
                          className={`
                            px-1.5 md:px-2 py-0.5 text-[8px] md:text-[10px] font-bold rounded uppercase tracking-wider whitespace-nowrap
                            ${
                              post.status === "published"
                                ? "bg-green-900/90 text-green-300 border border-green-800"
                                : post.status === "archived"
                                ? "bg-red-900/90 text-red-300 border border-red-800"
                                : "bg-zinc-800/90 text-gray-300 border border-zinc-600"
                            }
                          `}
                          title={`Publication Status: ${post.status}`}
                        >
                          {post.status}
                        </span>
                      </td>

                      <td className="px-2 md:px-4 py-2 md:py-3 text-zinc-400 hidden md:table-cell text-xs md:text-sm">
                        {formatDate(post.createdAt)}
                      </td>

                      <td className="px-2 md:px-4 py-2 md:py-3">
                        <div className="flex items-center justify-end gap-1 md:gap-2">
                          <button
                            onClick={() =>
                              router.push(`/admin/dashboard/blogs/${post.id}`)
                            }
                            className="p-1.5 md:p-2 rounded bg-zinc-950 border border-zinc-800 hover:bg-zinc-800 transition-colors group relative"
                          >
                            <Eye size={14} className="md:w-4 md:h-4" />
                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">View Details</span>
                          </button>

                          <button
                            onClick={() =>
                              router.push(`/admin/dashboard/blogs/edit/${post.id}`)
                            }
                            className="p-1.5 md:p-2 rounded bg-zinc-950 border border-zinc-800 hover:bg-zinc-800 transition-colors group relative"
                          >
                            <Edit size={14} className="md:w-4 md:h-4" />
                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Edit Post</span>
                          </button>

                          <button
                            onClick={() => deletePost(post.id)}
                            className="p-1.5 md:p-2 rounded bg-red-900/20 border border-red-900/40 text-red-300 hover:bg-red-900/40 transition-colors group relative"
                          >
                            <Trash2 size={14} className="md:w-4 md:h-4" />
                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-red-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Delete Post</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 md:gap-4 py-4 border-t border-zinc-800 flex-wrap\">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="flex items-center gap-1 px-2 md:px-4 py-2 text-xs md:text-sm bg-zinc-900 border border-zinc-800 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-800 whitespace-nowrap"
                >
                  <ChevronLeft size={14} className="md:w-4 md:h-4" /> Prev
                </button>

                <span className="text-xs md:text-sm text-gray-400 whitespace-nowrap">
                  Page <span className="text-white font-bold">{page}</span> of{" "}
                  {totalPages}
                </span>

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="flex items-center gap-1 px-2 md:px-4 py-2 text-xs md:text-sm bg-zinc-900 border border-zinc-800 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-800 whitespace-nowrap"
                >
                  Next <ChevronRight size={14} className="md:w-4 md:h-4" />
                </button>
              </div>
            )}
          </div>
        )}
        </div>
      </main>
    </div>
  );
}