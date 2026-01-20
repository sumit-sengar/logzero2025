'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Pencil, RefreshCcw, Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'
import api from '@/lib/api'

const API_URL =
  'https://webapi.logzerotechnologies.com/api/categories/categoriesDetail'

const Page = () => {
  const router = useRouter()
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [refreshTick, setRefreshTick] = useState(0)
  const [pendingDelete, setPendingDelete] = useState(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    const load = async () => {
      setIsLoading(true)
      setError('')

      try {
        const response = await fetch(API_URL, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const json = await response.json()
        if (!json?.success || !Array.isArray(json?.data)) {
          throw new Error('Unexpected response shape from categories API')
        }

        setItems(json.data)
      } catch (err) {
        if (err.name === 'AbortError') return
        setError(err?.message || 'Unable to load category meta data')
      } finally {
        setIsLoading(false)
      }
    }

    load()
    return () => controller.abort()
  }, [refreshTick])

  useEffect(() => {
    setPage(1)
  }, [pageSize])

  const totalPages = useMemo(() => {
    if (!items.length) return 1
    return Math.ceil(items.length / pageSize)
  }, [items.length, pageSize])

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages)
    }
  }, [page, totalPages])

  const startIndex = (page - 1) * pageSize
  const visibleRows = items.slice(startIndex, startIndex + pageSize)

  const handleReset = () => {
    setPage(1)
    setPageSize(10)
    setRefreshTick((tick) => tick + 1)
  }

  const handleEdit = (row) => {
    if (!row?.id) return
    router.push(`/admin/dashboard/metaEdit/${row.id}`)
  }

  const handleDelete = (row) => {
    if (!row?.id) return
    setPendingDelete(row)
    setShowConfirm(true)
  }

  const cancelDelete = () => {
    setPendingDelete(null)
    setShowConfirm(false)
  }

  const confirmDelete = async () => {
    if (!pendingDelete?.id) return
    setDeleting(true)
    try {
      await api.delete(`/categories/${pendingDelete.id}`)
      toast.success('Meta deleted successfully')
      setShowConfirm(false)
      setPendingDelete(null)
      setRefreshTick((tick) => tick + 1)
    } catch (err) {
      console.error('Delete meta error', err)
      const apiMessage = err?.response?.data?.message || err?.message
      toast.error(apiMessage || 'Unable to delete meta')
      setShowConfirm(false)
      setPendingDelete(null)
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-gray-400">
              Dashboard - SEO Meta
            </p>
            <h1 className="text-2xl font-semibold !text-white">Categories Meta</h1>
            <p className="text-sm text-gray-400">
              Showing meta title, description, and custom slug with quick actions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-gray-200">
              <span className="text-gray-400">Rows</span>
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="bg-transparent text-sm text-white focus:outline-none"
              >
                {[5, 10, 20, 50].map((size) => (
                  <option key={size} value={size} className="bg-neutral-900">
                    {size}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={() => setRefreshTick((tick) => tick + 1)}
              className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm font-medium text-white transition hover:border-neutral-700 hover:bg-neutral-800 cursor-pointer disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              <RefreshCcw className="h-4 w-4" />
              <span>Reload</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200 cursor-pointer disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              Reset
            </button>
          </div>
        </header>

        <section className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-xl shadow-black/30">
          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed border-separate border-spacing-0">
              <thead className="bg-neutral-800/80 text-xs uppercase tracking-[0.08em] text-gray-300">
                <tr>
                  <th className="w-[60px] px-4 py-3 text-left">S.No</th>
                  <th className="px-4 py-3 text-left">Meta Title</th>
                  <th className="px-4 py-3 text-left">Description</th>
                  <th className="px-4 py-3 text-left">Custom Slug</th>
                  <th className="w-[120px] px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {isLoading && (
                  <tr>
                    <td colSpan={5} className="px-4 py-12 text-center text-gray-300">
                      <div className="flex items-center justify-center gap-3">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Loading meta records...</span>
                      </div>
                    </td>
                  </tr>
                )}

                {!isLoading && error && (
                  <tr>
                    <td colSpan={5} className="px-4 py-6 text-center text-red-300">
                      {error}
                    </td>
                  </tr>
                )}

                {!isLoading && !error && visibleRows.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-6 text-center text-gray-400">
                      No meta records available.
                    </td>
                  </tr>
                )}

                {!isLoading && !error &&
                  visibleRows.map((row, idx) => (
                    <tr
                      key={`${row.id}-${row.customSlug}-${idx}`}
                      className="border-b border-neutral-800/80 last:border-0 hover:bg-neutral-800/40"
                    >
                      <td className="px-4 py-3 align-top text-sm text-gray-300">
                        {startIndex + idx + 1}
                      </td>
                      <td className="px-4 py-3 align-top text-sm font-semibold text-white">
                        {row.metaTitle || '--'}
                      </td>
                      <td className="px-4 py-3 align-top text-sm text-gray-200">
                        <span className="line-clamp-2 leading-6">
                          {row.metaDescription || '--'}
                        </span>
                      </td>
                      <td className="px-4 py-3 align-top text-sm text-emerald-300">
                        {row.customSlug || '--'}
                      </td>
                      <td className="px-4 py-3 align-top text-right">
                        <div className="flex items-center justify-end gap-3">
                          <button
                            type="button"
                            onClick={() => handleEdit(row)}
                            className="rounded-full border border-emerald-400/40 bg-emerald-500/10 p-2 text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-500/20 cursor-pointer"
                            aria-label="Edit meta"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(row)}
                            className="rounded-full border border-red-400/40 bg-red-500/10 p-2 text-red-200 transition hover:border-red-300 hover:bg-red-500/20 cursor-pointer"
                            aria-label="Delete meta"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-800/80 px-4 py-4 text-sm text-gray-300">
            <div>
              {items.length > 0 ? (
                <span>
                  Showing {items.length ? startIndex + 1 : 0}-
                  {Math.min(startIndex + pageSize, items.length)} of {items.length}
                </span>
              ) : (
                <span>Awaiting data</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                disabled={page === 1}
                className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm font-medium text-white transition enabled:hover:border-neutral-700 enabled:hover:bg-neutral-800 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
              >
                Prev
              </button>
              <span className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm font-semibold text-white">
                Page {page} / {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={page >= totalPages}
                className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm font-medium text-white transition enabled:hover:border-neutral-700 enabled:hover:bg-neutral-800 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </footer>
        </section>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-xl rounded-lg border border-neutral-800 bg-neutral-900 p-6 shadow-xl shadow-black/40">
            <h2 className="text-lg font-semibold text-white">Delete this meta?</h2>
            <p className="mt-2 text-sm text-gray-300">
              Are you sure you want to delete "{pendingDelete?.metaTitle || 'this item'}"?
              This action cannot be undone.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={cancelDelete}
                disabled={deleting}
                className="rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium text-white hover:border-neutral-600 hover:bg-neutral-800 transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                disabled={deleting}
                className="rounded-lg border border-red-500/60 bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-100 hover:border-red-400 hover:bg-red-500/30 transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
              >
                {deleting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Deleting...
                  </span>
                ) : (
                  'Proceed'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page
