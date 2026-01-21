
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../../lib/api"
import { useRouter } from "next/navigation";


export default function Page() {
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
  const [submitting, setSubmitting] = useState(false);
  const selectRef = useRef(null);
  const router = useRouter();
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

    const submit = async () => {
      setSubmitting(true);
      try {
        const res = await api.post("/categories", {
          metaTitle: form.metaTitle,
          metaDescription: form.metaDescription,
          customSlug: form.customSlug,
          categoryId: Number(form.categoryId),
        });

        const data = res.data;
        toast.success(data?.message || "Meta created successfully");

        setForm({
          metaTitle: "",
          metaDescription: "",
          customSlug: "",
          categoryId: "",
        });
        setQuery("");
        setSubmitting(false);
      } catch (error) {
        console.error("Create meta error", error);
        const apiMessage =
          error?.response?.data?.message ||
          error?.response?.data?.error ||
          error?.message;
        const message = apiMessage || "Unable to create meta";
        toast.error(message);
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

  return (
    <div className="min-h-screen bg-black text-gray-100 flex justify-center">
      <div className="w-full max-w-5xl px-6 py-10 space-y-6">
        <header className="space-y-1">
          <h1 className="text-2xl font-semibold !text-white">Create Meta</h1>
          <p className="text-sm text-gray-400">Add SEO metadata and routing for your blog entries.</p>
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
                  className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter meta title"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-gray-200">Custom slug</label>
                <input
                  name="customSlug"
                  value={form.customSlug}
                  onChange={handleChange}
                  className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                  className="w-full rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Short summary for search engines"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm text-gray-200">Category *</label>
                <div className="relative" ref={selectRef}>
                  <button
                    type="button"
                    onClick={() => setIsOpen((o) => !o)}
                    className="w-full flex justify-between items-center rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                              className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-800"
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
              onClick={() => router.push("/admin/dashboard/blogs")}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 border border-blue-500/60 bg-blue-500/10 hover:bg-blue-500/20 text-blue-100 px-3 md:px-4 py-2 text-sm md:text-base rounded-md transition-colors hover:bg-zinc-800 whitespace-nowrap cursor-pointer"
            >
              Back
            </button>
              <button
                type="submit"
                className="px-4 py-2 cursor-pointer rounded bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition"
              >
               {submitting ? "Creating..." : "Create Meta"} 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


