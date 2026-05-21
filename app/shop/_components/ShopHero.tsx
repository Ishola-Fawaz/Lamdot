'use client'

import React from 'react'

export default function ShopHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Shop
            </h1>
            <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-200">
              New arrivals • Built for runners
            </span>
          </div>
          <p className="max-w-2xl text-base text-gray-600">
            Browse categories, filter by price, and place a quick order in seconds.
          </p>
        </div>
      </div>
    </section>
  )
}

