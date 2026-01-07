"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import BlogEditor from "../../../../admin/components/BlogSimpleEditor";
import MultiSelect from "../../../../admin/components/MultiSelect";
import { useRouter } from "next/navigation";
import api from "../../../../../lib/api";

const formatCreatedAtValue = (value) => {
  if (!value) return null;

  let formatted = value;
  if (formatted.includes("T")) {
    formatted = formatted.replace("T", " ");
  }

  if (!/\d{2}:\d{2}:\d{2}$/.test(formatted)) {
    formatted = `${formatted}:00`;
  }

  return formatted;
};

const getLocalDatetimeNow = () => {
  const now = new Date();
  const pad = (num) => num.toString().padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
};

export default function AddPostPage() {
  const router = useRouter();
  const [filters, setFilters] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [draftId, setDraftId] = useState(null);
  const [dirty, setDirty] = useState(false);
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const autosaveTimerRef = useRef(null);

  // ✅ Use ref to avoid stale closures
  const formRef = useRef({
    metaTitle: "",
    metaDescription: "",
    author: "",
    popular: false,
    created_at: "",
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
    editorHtml: "<p></p>",
    featuredImageFile: null,
    featuredImageBase64: "",
  });

  const [form, setForm] = useState(formRef.current);

  // ✅ Update ref whenever form state changes
  useEffect(() => {
    formRef.current = form;
  }, [form]);

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const res = await api.get("/posts/filter-options");
        if (res.status >= 200 && res.status < 300) {
          const responseData = res.data.data || res.data;
          setFilters(responseData);
        }
      } catch (error) {
        console.error("Failed to load filters:", error);
      }
    };
    loadFilters();
  }, []);

  const handleBasicChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setDirty(true);
  };

  const MAX_BYTES = 2 * 1024 * 1024;
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
      setForm((prev) => ({
        ...prev,
        featuredImageFile: null,
        featuredImageBase64: "",
      }));
      setDirty(true);
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
      setDirty(true);
    } catch (err) {
      console.error("Featured image resize failed:", err);
      alert("Failed to process featured image.");
    }
  };

  const handleEditorChange = (html) => {
    setForm((prev) => ({ ...prev, editorHtml: html }));
    setDirty(true);
  };

  const toggleIdInArray = (key, id) => {
    setForm((prev) => {
      const arr = prev[key];
      const exists = arr.includes(id);
      return {
        ...prev,
        [key]: exists ? arr.filter((x) => x !== id) : [...arr, id],
      };
    });
    setDirty(true);
  };

  const handleTogglePopular = () => {
    setForm((prev) => ({ ...prev, popular: !prev.popular }));
    setDirty(true);
  };

  const handleSetCreatedAtNow = () => {
    const nowValue = getLocalDatetimeNow();
    setForm((prev) => ({ ...prev, created_at: nowValue }));
    setDirty(true);
  };

  const buildPayload = useCallback((statusOverride) => {
    const currentForm = formRef.current;

    const contentBlocks = {
      blocks: [
        {
          type: "paragraph",
          data: {
            text: currentForm.editorHtml,
            alignment: "left",
            fontSize: "16px",
          },
        },
      ],
    };

    const payload = {
      metaTitle: currentForm.metaTitle,
      metaDescription: currentForm.metaDescription,
      author: currentForm.author,
      type: currentForm.type,
      status: statusOverride ?? currentForm.status,
      content: contentBlocks,
      solutionIds: currentForm.solutionIds,
      popular: currentForm.popular,
      featuredImageBase64: currentForm.featuredImageBase64 || undefined,
    };

    const formattedCreatedAt = formatCreatedAtValue(currentForm.created_at);
    if (formattedCreatedAt) {
      payload.created_at = formattedCreatedAt;
    }

    if (currentForm.type === "blog_post") {
      payload.blogCategory = currentForm.blogCategory;
    }

    if (currentForm.type === "case_study") {
      payload.portfolioCategoryIds = currentForm.portfolioCategoryIds;
      payload.challenges = currentForm.challenges;
      payload.solution = currentForm.solution;
      payload.result = currentForm.result;
      payload.technologyIds = currentForm.technologyIds;
      payload.industryIds = currentForm.industryIds;
    }

    return payload;
  }, []);

  const autosave = useCallback(async () => {
    if (isSubmitting) return;

    setIsAutoSaving(true);
    try {
      const payload = buildPayload("draft");

      if (!draftId) {
        const res = await api.post("/posts", payload);
        const createdId = res.data?.data?.id;
        if (createdId) {
          setDraftId(createdId);
          // console.log("✅ Draft created:", createdId);
        }
      } else {
        await api.put(`/posts/${draftId}`, payload);
        // console.log("✅ Draft updated:", draftId);
      }

      setDirty(false);
    } catch (err) {
      console.error("❌ Autosave failed:", err);
    } finally {
      setIsAutoSaving(false);
    }
  }, [draftId, isSubmitting, buildPayload]);

  useEffect(() => {
    if (!dirty) return;

    if (autosaveTimerRef.current) {
      window.clearTimeout(autosaveTimerRef.current);
    }

    autosaveTimerRef.current = window.setTimeout(() => {
      autosave();
    }, 15000);

    return () => {
      if (autosaveTimerRef.current) {
        window.clearTimeout(autosaveTimerRef.current);
      }
    };
  }, [dirty, autosave]);

  useEffect(() => {
    const flushOnExit = () => {
      const currentDirty = dirty;
      const currentDraftId = draftId;

      if (!currentDirty || !currentDraftId) return;

      const payload = buildPayload("draft");

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${currentDraftId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        flushOnExit();
      }
    };

    window.addEventListener("pagehide", flushOnExit);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener("pagehide", flushOnExit);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [dirty, draftId, buildPayload]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (autosaveTimerRef.current) {
      window.clearTimeout(autosaveTimerRef.current);
    }

    try {
      const payload = buildPayload();
       
      let res;
      if (draftId) {
        res = await api.put(`/posts/${draftId}`, payload);
      } else {
        res = await api.post("/posts", payload);
        const createdId = res.data?.data?.id;
        if (createdId) setDraftId(createdId);
      }

      if (res.status >= 200 && res.status < 300) {
        alert("Post saved successfully!");
        setDirty(false);
        router.push("/admin/dashboard/blogs");
      } else {
        alert("Failed to save post");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error saving post");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!filters) return <div className="p-8 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-gray-100 flex justify-center">
      <div className="w-full max-w-5xl px-6 py-10 space-y-6">
        <h1 className="text-2xl font-semibold !text-white">Create content</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-5 p-5 bg-zinc-900/50 rounded-lg border border-zinc-800">
            <div>
              <label className="block text-sm mb-1">Meta title *</label>
              <input
                name="metaTitle"
                value={form.metaTitle}
                onChange={handleBasicChange}
                required
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
                  <label className="block text-sm mb-1">Popular</label>
                  <button
                    type="button"
                    onClick={handleTogglePopular}
                    aria-pressed={form.popular}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
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
                    className="flex-1 rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm"
                  />
                  <button
                    type="button"
                    onClick={handleSetCreatedAtNow}
                    className="rounded border border-zinc-700 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-300 transition hover:border-zinc-500"
                  >
                    Use current time
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
                    onChange={(id) =>
                      toggleIdInArray("portfolioCategoryIds", id)
                    }
                  />
                </div>

                <div>
                  <MultiSelect
                    label="Technologies"
                    options={filters.technologies}
                    selectedIds={form.technologyIds}
                    onChange={(id) => toggleIdInArray("technologyIds", id)}
                  />
                </div>

                <div>
                  <MultiSelect
                    label="Industries"
                    options={filters.industries}
                    selectedIds={form.industryIds}
                    onChange={(id) => toggleIdInArray("industryIds", id)}
                  />
                </div>
              </>
            )}

            <div>
              <MultiSelect
                label="Solutions"
                options={filters.solutions}
                selectedIds={form.solutionIds}
                onChange={(id) => toggleIdInArray("solutionIds", id)}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Featured image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFeaturedImageChange}
                className="text-sm text-gray-400"
              />
              {form.featuredImageFile && (
                <p className="text-xs text-gray-400 mt-1">
                  Selected: {form.featuredImageFile.name}
                </p>
              )}
              {form.featuredImageBase64 && (
                <p className="text-xs text-gray-500 mt-1">
                  Saved as 1200×700 (JPEG) with 2MB max.
                </p>
              )}
              {(isAutoSaving || dirty || draftId) && (
                <p className="text-xs text-gray-500 mt-2">
                  {isAutoSaving
                    ? "Autosaving draft..."
                    : dirty
                    ? "Unsaved changes (will autosave in 15s)"
                    : draftId
                    ? `Draft saved (ID: ${draftId})`
                    : null}
                </p>
              )}
            </div>
          </div>

          <div className="text-gray-900 dark:text-gray-100">
            <label className="block text-sm mb-2 text-gray-100 font-medium">
              Content *
            </label>
            <BlogEditor
              initialContent={form.editorHtml}
              onChange={handleEditorChange}
            />
          </div>

          {form.type === "case_study" && (
            <div className="space-y-5 p-5 bg-zinc-900/50 rounded-lg border border-zinc-800">
              <h2 className="text-lg font-medium text-gray-300 border-b border-zinc-800 pb-2">
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
              disabled={isSubmitting}
              className="rounded bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-500 disabled:bg-gray-600"
            >
              {isSubmitting
                ? "Saving..."
                : draftId
                ? "Update Post"
                : "Save Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}