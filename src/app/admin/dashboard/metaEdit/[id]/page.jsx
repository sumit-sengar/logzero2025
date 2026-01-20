"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../../../lib/api";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    metaTitle: "",
    metaDescription: "",
    customSlug: "",
    categoryId: "",
  });
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [optionsLoading, setOptionsLoading] = useState(false);
  const [detailLoading, setDetailLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const selectRef = useRef(null);

  const filteredOptions = useMemo(() => {
    const q = query.toLowerCase();
    return options.filter((opt) => opt.label.toLowerCase().includes(q));
  }, [query, options]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (value) => {
    setForm((prev) => ({ ...prev, categoryId: value }));
    setIsOpen(false);
    setQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.metaTitle || !form.metaDescription || !form.categoryId) {
      toast.error("Meta title, description, and category are required.");
      return;
    }
    if (!id) {
      toast.error("Missing category id in route.");
      return;
    }

    const submit = async () => {
      setSubmitting(true);
      const payload = {
        metaTitle: form.metaTitle,
        metaDescription: form.metaDescription,
        customSlug: form.customSlug,
        categoryId: Number(form.categoryId),
      };

      try {
        const res = await api.put(`/categories/${id}`, payload);
        const message = res?.data?.message || "Meta updated successfully";
        toast.success(message);

        setForm({
          metaTitle: "",
          metaDescription: "",
          customSlug: "",
          categoryId: "",
        });
        setQuery("");
        setIsOpen(false);

        router.push("/admin/dashboard/metaList");
      } catch (error) {
        console.error("Update meta error", error);
        const apiMessage =
          error?.response?.data?.message ||
          error?.response?.data?.error ||
          error?.message;
        toast.error(apiMessage || "Unable to update meta");
      } finally {
        setSubmitting(false);
      }
    };

    submit();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isOpen) return;
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const fetchCategories = async () => {
      setOptionsLoading(true);
      try {
        const res = await api.get("/categories");
        const rows = Array.isArray(res.data?.data) ? res.data.data : [];
        const mapped = rows.map((row) => ({ value: row.id, label: row.name }));
        setOptions(mapped);
      } catch (error) {
        console.error("Error fetching categories", error);
        setOptions([]);
      } finally {
        setOptionsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!id) return;

    const fetchDetail = async () => {
      setDetailLoading(true);
      try {
        const res = await api.get(`/categories/category-detail/${id}`);
        const row = res.data?.data;
        if (!row) throw new Error("No detail found");
        setForm({
          metaTitle: row.metaTitle || "",
          metaDescription: row.metaDescription || "",
          customSlug: row.customSlug || "",
          categoryId: row.categoryId ? String(row.categoryId) : "",
        });
      } catch (error) {
        console.error("Error fetching category detail", error);
        const message =
          error?.response?.data?.message || error?.message || "Unable to load detail";
        toast.error(message);
        router.back();
      } finally {
        setDetailLoading(false);
      }
    };

    fetchDetail();
  }, [id, router]);

  return (
    <div className="min-h-screen bg-black text-gray-100 flex justify-center">
      <div className="w-full max-w-5xl px-6 py-10 space-y-6">
        <header className="space-y-1">
          <p className="text-xs uppercase tracking-[0.12em] text-gray-500">Editing ID #{id}</p>
          <h1 className="text-2xl font-semibold !text-white">Edit Meta</h1>
          <p className="text-sm text-gray-400">Update SEO metadata and routing for your blog entries.</p>
        </header>
        <div className="border border-gray-800 rounded-lg p-5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm text-gray-200">Meta title *</label>
                <input
                  name="metaTitle"
                  value={form.metaTitle}
                  onChange={handleChange}
                  required
                  disabled={detailLoading}
                  className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-60"
                  placeholder="Enter meta title"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-gray-200">Custom slug</label>
                <input
                  name="customSlug"
                  value={form.customSlug}
                  onChange={handleChange}
                  disabled={detailLoading}
                  className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-60"
                  placeholder="example-custom-slug"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm text-gray-200">Meta description *</label>
                <textarea
                  name="metaDescription"
                  value={form.metaDescription}
                  onChange={handleChange}
                  rows={2}
                  required
                  disabled={detailLoading}
                  className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-60"
                  placeholder="Short summary for search engines"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm text-gray-200">Category *</label>
                <div className="relative" ref={selectRef}>
                  <button
                    type="button"
                    onClick={() => setIsOpen((o) => !o)}
                    disabled={detailLoading || optionsLoading}
                    className="w-full flex justify-between items-center rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span>
                      {options.find((o) => String(o.value) === String(form.categoryId))?.label ||
                        (optionsLoading ? "Loading..." : "Select category")}
                    </span>
                    <span className="text-gray-500">{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
                  </button>

                  {isOpen && (
                    <div className="absolute left-0 right-0 top-full mt-2 w-full rounded border border-zinc-800 bg-zinc-950 shadow-xl z-20 overflow-hidden">
                      {!optionsLoading && (
                        <input
                          placeholder="Search..."
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          className="w-full border-b border-zinc-800 bg-zinc-950 px-3 py-2 text-sm focus:outline-none"
                        />
                      )}
                      <div className="max-h-64 overflow-y-auto divide-y divide-zinc-800">
                        {optionsLoading && (
                          <div className="px-3 py-2 text-sm text-gray-500">Loading categories...</div>
                        )}
                        {!optionsLoading && filteredOptions.length === 0 && (
                          <div className="px-3 py-2 text-sm text-gray-500">No matches</div>
                        )}
                        {!optionsLoading &&
                          filteredOptions.map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => handleSelect(opt.value)}
                              className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-800 cursor-pointer"
                            >
                              {opt.label}
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 ">
               <button
               type="button"
              onClick={() => router.push("/admin/dashboard/metaList")}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 border border-blue-500/60 bg-blue-500/10 hover:bg-blue-500/20 text-blue-100 px-3 md:px-4 py-2 text-sm md:text-base rounded-md transition-colors hover:bg-zinc-800 whitespace-nowrap cursor-pointer"
            >
              Meta List
            </button>
              <button
                type="submit"
                disabled={submitting || detailLoading}
                className="px-4 py-2 rounded bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Updating...
                  </span>
                ) : (
                  "Update Meta"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
