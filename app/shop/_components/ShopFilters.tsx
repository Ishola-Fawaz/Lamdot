'use client'

import React, { useEffect, useMemo, useState } from 'react'

type Category = {
  id: string
  name: string
}

const CATEGORIES: Category[] = [
  { id: 'sneakers', name: 'Sneakers' },
  { id: 'boots', name: 'Boots' },
  { id: 'sandals', name: 'Sandals' },
  { id: 'casual', name: 'Casual' },
]

export type ShopFiltersState = {
  query: string
  categoryId: string | null
  priceMin: number
  priceMax: number
}

type Props = {
  value: ShopFiltersState
  onChange: (next: ShopFiltersState) => void
}

export default function ShopFilters({ value, onChange }: Props) {
  const [localQuery, setLocalQuery] = useState(value.query)

  useEffect(() => {
    const t = window.setTimeout(() => {
      onChange({ ...value, query: localQuery })
    }, 350)
    return () => window.clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localQuery])

  useEffect(() => {
    setLocalQuery(value.query)
  }, [value.query])

  const activeRangeLabel = useMemo(() => {
    const min = value.priceMin
    const max = value.priceMax
    return `₦${min} - ₦${max}`
  }, [value.priceMin, value.priceMax])

  return (
    <aside className="w-full lg:sticky lg:top-24 lg:h-fit">
      <div className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-gray-900">Filters</h2>
            <p className="mt-1 text-sm text-gray-500">Find your perfect pair</p>
          </div>
          <button
            type="button"
            onClick={() =>
              onChange({ query: '', categoryId: null, priceMin: 0, priceMax: 5000 })
            }
            className="rounded-lg border border-orange-200 px-3 py-2 text-sm font-medium text-orange-600 hover:bg-orange-50"
          >
            Clear
          </button>
        </div>

        <div className="space-y-5">
          {/* Search */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">Search</label>
            <input
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              placeholder="Try: running, sneakers..."
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Categories */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-900">Category</label>
              {value.categoryId ? (
                <span className="text-xs font-medium text-orange-600">Selected</span>
              ) : (
                <span className="text-xs font-medium text-gray-400">All</span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((c) => {
                const selected = value.categoryId === c.id
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => onChange({ ...value, categoryId: selected ? null : c.id })}
                    className={
                      selected
                        ? 'rounded-xl border border-orange-500 bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-700 ring-1 ring-orange-200'
                        : 'rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:border-orange-300 hover:bg-orange-50'
                    }
                  >
                    {c.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Price */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-900">Price</label>
              <span className="text-xs font-semibold text-orange-600">{activeRangeLabel}</span>
            </div>
            <div className="space-y-4">
              <div>
                <input
                  type="range"
                  min={0}
                  max={5000}
                  step={100}
                  value={value.priceMin}
                  onChange={(e) => {
                    const nextMin = Number(e.target.value)
                    const nextMax = Math.max(nextMin, value.priceMax)
                    onChange({ ...value, priceMin: nextMin, priceMax: nextMax })
                  }}
                  className="w-full accent-orange-500"
                />
                <div className="mt-1 flex justify-between text-xs text-gray-500">
                  <span>₦0</span>
                  <span>₦{value.priceMax}</span>
                </div>
              </div>

              <div>
                <input
                  type="range"
                  min={0}
                  max={5000}
                  step={100}
                  value={value.priceMax}
                  onChange={(e) => {
                    const nextMax = Number(e.target.value)
                    const nextMin = Math.min(value.priceMin, nextMax)
                    onChange({ ...value, priceMin: nextMin, priceMax: nextMax })
                  }}
                  className="w-full accent-orange-500"
                />
                <div className="mt-1 flex justify-between text-xs text-gray-500">
                  <span>₦{value.priceMin}</span>
                  <span>₦5000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onChange({ ...value })}
              className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={() =>
                onChange({ query: '', categoryId: null, priceMin: 0, priceMax: 5000 })
              }
              className="rounded-xl border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-50"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

