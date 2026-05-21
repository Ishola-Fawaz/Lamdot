"use client";

import React from "react";

import type { ShopProduct } from "./types";

type Props = {
  product: ShopProduct;
  onAddToCart: () => void;
};

export default function ShopProductCard({ product, onAddToCart }: Props) {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-50">
        {product.imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.imageSrc}
            alt={product.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-gray-400">
            No Image
          </div>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-gray-900">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Category: {product.categoryId}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <div className="text-sm font-bold text-orange-600">
            ₦{product.price}
          </div>
          <div className="mt-1 text-xs font-medium text-gray-400">In stock</div>
        </div>
      </div>

      <div className="mt-4">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}
          className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
