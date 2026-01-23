"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import BlogEditor  from "../../../../../admin/components/BlogSimpleEditor"
import MultiSelect from "../../../../../admin/components/MultiSelect";
import api from "../../../../../../lib/api";

const formatCreatedAtValue = (value) => {
  if (!value) return null;

  let normalized = value;
  if (!normalized.includes("T") && normalized.includes(" ")) {
    normalized = normalized.replace(" ", "T");
  }

  if (!/\d{2}:\d{2}:\d{2}$/.test(normalized)) {
    normalized = `${normalized}:00`;
  }

  const parsed = new Date(normalized);
  if (Number.isNaN(parsed.getTime())) return null;

  return parsed.toISOString();
};

const getLocalDatetimeNow = () => {
  const now = new Date();
  const pad = (num) => num.toString().padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
};

const adaptCreatedAtForInput = (value) => {
  if (!value) return "";

  const normalized = value.replace("T", " ").trim();
  const [date, time] = normalized.split(" ");
  if (!date || !time) return "";
  const [hours, minutes] = time.split(":");
  if (!hours || !minutes) return "";
  return `${date}T${hours}:${minutes}`;
};

export default function EditPostPage() {
  const params = useParams();
  const router = useRouter();

  const id = params?.id;

  const [filters, setFilters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initialPost, setInitialPost] = useState(null);
  const createdAtInputRef = useRef(null);

  const [form, setForm] = useState({
    metaTitle: "",
    metaDescription: "",
    author: "",
    popular: false,
    type: "blog_post",
    status: "draft",
    blogCategory: "",
    portfolioCategoryIds: [],
    solutionIds: [],
    technologyIds: [],
    industryIds: [],
    challenges: "",
    solution: "",
    result: "",
    editorHtml: "",
    featuredImageFile: null,
    featuredImageBase64: "",
  });

  // ----------------------------
  // Featured image processing
  // ----------------------------
  const MAX_BYTES = 2 * 1024 * 1024; // 2MB
  const OUT_W = 1200;
  const OUT_H = 700;

  const blobToBase64 = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (ev) => resolve(ev.target?.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

  const loadImageFromFile = (file) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);

      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      img.onerror = (err) => {
        URL.revokeObjectURL(url);
        reject(err);
      };

      img.src = url;
    });

  const canvasToBlob = (canvas, type, quality) =>
    new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error("toBlob failed"))),
        type,
        quality
      );
    });

  const resizeFeaturedImageToStandard = async (file) => {
    const img = await loadImageFromFile(file);

    const canvas = document.createElement("canvas");
    canvas.width = OUT_W;
    canvas.height = OUT_H;

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas not supported");

    const scale = Math.max(OUT_W / img.width, OUT_H / img.height);
    const drawW = img.width * scale;
    const drawH = img.height * scale;
    const dx = (OUT_W - drawW) / 2;
    const dy = (OUT_H - drawH) / 2;

    ctx.drawImage(img, dx, dy, drawW, drawH);

    const blob = await canvasToBlob(canvas, "image/jpeg", 0.9);

    const resizedFile = new File([blob], "featured-1200x700.jpg", {
      type: "image/jpeg",
    });

    const base64 = await blobToBase64(blob);

    return { resizedFile, base64 };
  };

  const handleFeaturedImageChange = async (e) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) {
      setForm((prev) => ({ ...prev, featuredImageFile: null, featuredImageBase64: "" }));
      return;
    }

    if (file.size > MAX_BYTES) {
      alert("Featured image is too large. Max size is 2 MB.");
      return;
    }

    try {
      const { resizedFile, base64 } = await resizeFeaturedImageToStandard(file);

      if (resizedFile.size > MAX_BYTES) {
        alert("Resized featured image is still above 2MB. Try another image.");
        return;
      }

      setForm((prev) => ({
        ...prev,
        featuredImageFile: resizedFile,
        featuredImageBase64: base64,
      }));
    } catch (err) {
      console.error("Featured image resize failed:", err);
      alert("Failed to process featured image.");
    }
  };

  // ----------------------------
  // Data Loading
  // ----------------------------
  useEffect(() => {
    const loadData = async () => {
      try {
        const [filtersRes, postRes] = await Promise.all([
          api.get("/posts/filter-options"),
          api.get(`/posts/${id}`),
        ]);

        const f = filtersRes.data.data || filtersRes.data;
        const p = postRes.data.data;

        setFilters(f);
        setInitialPost(p);

        const htmlContent = p.content?.blocks?.[0]?.data?.text ?? "<p></p>";

        const createdAtRaw = p.created_at ?? p.createdAt ?? "";
        setForm({
          metaTitle: p.metaTitle ?? "",
          metaDescription: p.metaDescription ?? "",
          author: p.author ?? "",
          popular: p.popular ?? false,
          created_at: adaptCreatedAtForInput(createdAtRaw),
          type: p.type,
          status: p.status,
          blogCategory: p.blogCategory ?? "",
          portfolioCategoryIds: p.portfolioCategories?.map((c) => c.id) ?? [],
          solutionIds: p.solutions?.map((s) => s.id) ?? [],
          technologyIds: p.technologies?.map((t) => t.id) ?? [],
          industryIds: p.industries?.map((i) => i.id) ?? [],
          challenges: p.challenges ?? "",
          solution: p.solution ?? "",
          result: p.result ?? "",
          editorHtml: htmlContent,
          featuredImageFile: null,
          featuredImageBase64: p.featuredImageBase64 || "",
        });
      } catch (error) {
        console.error("Failed to load post data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) loadData();
  }, [id]);

  const handleBasicChange = (e) => {
    const { name, value } = e.target;

    if (name === "type") {
      const nextType = value;
      setForm((prev) => ({
        ...prev,
        type: nextType,
        blogCategory: nextType === "blog_post" ? prev.blogCategory : "",
        portfolioCategoryIds: nextType === "case_study" ? prev.portfolioCategoryIds : [],
        technologyIds: nextType === "case_study" ? prev.technologyIds : [],
        industryIds: nextType === "case_study" ? prev.industryIds : [],
        challenges: nextType === "case_study" ? prev.challenges : "",
        solution: nextType === "case_study" ? prev.solution : "",
        result: nextType === "case_study" ? prev.result : "",
      }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTogglePopular = () => {
    setForm((prev) => ({ ...prev, popular: !prev.popular }));
  };

  const handleSetCreatedAtNow = () => {
    const nowValue = getLocalDatetimeNow();
    setForm((prev) => ({ ...prev, created_at: nowValue }));
  };

  const handleOpenCreatedAtPicker = () => {
    try {
      createdAtInputRef.current?.showPicker?.();
    } catch (err) {
      // ignore unsupported
    }
  };

  const handleClearCreatedAt = () => {
    setForm((prev) => ({ ...prev, created_at: "" }));
    createdAtInputRef.current?.focus?.();
  };

  const handleEditorChange = (html) => {
    setForm((prev) => ({ ...prev, editorHtml: html }));
  };

  const toggleIdInArray = (key, id) => {
    setForm((prev) => {
      const arr = prev[key];
      const exists = arr.includes(id);
      return { ...prev, [key]: exists ? arr.filter((x) => x !== id) : [...arr, id] };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contentBlocks = {
      blocks: [
        {
          type: "paragraph",
          data: { text: form.editorHtml, alignment: "left", fontSize: "16px" },
        },
      ],
    };

    const payload = {
      metaTitle: form.metaTitle,
      metaDescription: form.metaDescription,
      author: form.author,
      popular: form.popular,
      type: form.type,
      status: form.status,
      content: contentBlocks,
      solutionIds: form.solutionIds,
      featuredImageBase64: form.featuredImageBase64 || null,
    };

    const formattedCreatedAt = formatCreatedAtValue(form.created_at);
    if (formattedCreatedAt) {
      payload.created_at = formattedCreatedAt;
      payload.createdAt = formattedCreatedAt; // some endpoints expect camelCase
    }

    if (form.type === "blog_post") {
      payload.blogCategory = form.blogCategory || null;
      payload.portfolioCategoryIds = [];
      payload.technologyIds = [];
      payload.industryIds = [];
      payload.challenges = null;
      payload.solution = null;
      payload.result = null;
    }

    if (form.type === "case_study") {
      payload.portfolioCategoryIds = form.portfolioCategoryIds;
      payload.challenges = form.challenges;
      payload.solution = form.solution;
      payload.result = form.result;
      payload.technologyIds = form.technologyIds;
      payload.industryIds = form.industryIds;
    }

 

    try {
      const res = await api.put(`/posts/${id}`, payload);
      if (res.status >= 200 && res.status < 300) {
        router.push("/admin/dashboard/blogs");
      }
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update post.");
    }
  };

  if (loading || !filters || !initialPost) return <div className="p-8 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-gray-100 flex justify-center">
      <div className="w-full max-w-5xl px-6 py-10 space-y-6">
        <h1 className="text-2xl font-semibold !text-white">Edit content</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-5 p-5 bg-zinc-900/50 rounded-lg border border-zinc-800">
            <div>
              <label className="block text-sm mb-1">Meta title</label>
              <input
                name="metaTitle"
                value={form.metaTitle}
                onChange={handleBasicChange}
                className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Meta description</label>
              <textarea
                name="metaDescription"
                value={form.metaDescription}
                onChange={handleBasicChange}
                rows={2}
                className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm"
              />
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-end gap-4">
                <div className="flex-1 min-w-[210px]">
                  <label className="block text-sm mb-1">Author *</label>
                  <input
                    name="author"
                    value={form.author}
                    onChange={handleBasicChange}
                    required
                    className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1r">Popular</label>
                  <button
                    type="button"
                    onClick={handleTogglePopular}
                    aria-pressed={form.popular}
                    className={`px-4 py-2 text-sm cursor-pointer font-semibold rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      form.popular
                        ? "bg-emerald-500 text-black"
                        : "bg-zinc-800 text-gray-200"
                    }`}
                  >
                    {form.popular ? "Popular" : "Mark popular"}
                  </button>
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <label className="block text-sm mb-1">Created at (optional)</label>
                <div className="flex flex-wrap gap-3">
                  <input
                    type="datetime-local"
                    name="created_at"
                    value={form.created_at}
                    onChange={handleBasicChange}
                    onFocus={handleOpenCreatedAtPicker}
                    onClick={handleOpenCreatedAtPicker}
                    ref={createdAtInputRef}
                    step="60"
                    className="flex-1 rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm"
                  />
                  <button
                    type="button"
                    onClick={handleSetCreatedAtNow}
                    className="rounded border border-zinc-700 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-300 transition hover:border-zinc-500 cursor-pointer"
                  >
                    Use current time
                  </button>
                  <button
                    type="button"
                    onClick={handleClearCreatedAt}
                    aria-label="Clear created at"
                    className="rounded border border-zinc-700 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-300 transition hover:border-zinc-500 cursor-pointer"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm mb-1">Type</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleBasicChange}
                  className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm"
                >
                  {filters.types.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-sm mb-1">Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleBasicChange}
                  className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm"
                >
                  {filters.statuses.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {form.type === "blog_post" && (
              <div>
                <label className="block text-sm mb-1">Blog category</label>
                <select
                  name="blogCategory"
                  value={form.blogCategory}
                  onChange={handleBasicChange}
                  className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm"
                >
                  <option value="">Select category</option>
                  {filters.blogCategories.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {form.type === "case_study" && (
              <>
                <div>
                  <MultiSelect
                    label="Portfolio categories"
                    options={filters.portfolioCategories}
                    selectedIds={form.portfolioCategoryIds}
                    onChange={(catId) => toggleIdInArray("portfolioCategoryIds", catId)}
                  />
                </div>

                <div>
                  <MultiSelect
                    label="Technologies"
                    options={filters.technologies}
                    selectedIds={form.technologyIds}
                    onChange={(techId) => toggleIdInArray("technologyIds", techId)}
                  />
                </div>

                <div>
                  <MultiSelect
                    label="Industries"
                    options={filters.industries}
                    selectedIds={form.industryIds}
                    onChange={(industryId) => toggleIdInArray("industryIds", industryId)}
                  />
                </div>
              </>
            )}

            <div>
              <MultiSelect
                label="Solutions"
                options={filters.solutions}
                selectedIds={form.solutionIds}
                onChange={(solutionId) => toggleIdInArray("solutionIds", solutionId)}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Current featured image</label>
              {(form.featuredImageBase64 || initialPost.featuredImage) ? (
                <img
                  src={form.featuredImageBase64 || initialPost.featuredImage}
                  alt="Featured"
                  className="mt-2 max-h-48 rounded border border-zinc-800 object-cover"
                />
              ) : (
                <p className="text-xs text-gray-500 mt-1">No image uploaded.</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1">New featured image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFeaturedImageChange}
                className="text-sm"
              />
            </div>
          </div>

          <div className="text-gray-900 dark:text-gray-100">
            <label className="block text-sm mb-2 text-gray-100">Content</label>
            <BlogEditor initialContent={form.editorHtml} onChange={handleEditorChange} />
          </div>

          {form.type === "case_study" && (
            <div className="space-y-5 p-5 bg-zinc-900/50 rounded-lg border border-zinc-800">
              <h2 className="text-lg font-medium !text-white border-b border-zinc-800 pb-2">
                Case Study Specifics
              </h2>

              <div>
                <label className="block text-sm mb-1">Challenges</label>
                <textarea
                  name="challenges"
                  value={form.challenges}
                  onChange={handleBasicChange}
                  rows={4}
                  className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Solution</label>
                <textarea
                  name="solution"
                  value={form.solution}
                  onChange={handleBasicChange}
                  rows={4}
                  className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Result</label>
                <textarea
                  name="result"
                  value={form.result}
                  onChange={handleBasicChange}
                  rows={4}
                  className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm"
                />
              </div>
            </div>
          )}

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="rounded cursor-pointer bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-500"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}