"use client";

import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

import { useCart } from "@/src/providers/CartProvider";

export default function CartItems() {
  const { items, setQty, removeItem } = useCart();

  if (items.length === 0) return null;

  return (
    <div className="space-y-3">
      {items.map(({ product, quantity }) => (
        <div
          key={product.id}
          className="rounded-2xl border border-gray-200 bg-white p-4"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 min-w-0">
              <div className="h-16 w-16 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                {product.imageSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="text-xs text-gray-400 font-semibold">No</div>
                )}
              </div>

              <div className="min-w-0">
                <div className="truncate text-sm font-bold text-gray-900">
                  {product.name}
                </div>
                {product.categoryId ? (
                  <div className="mt-1 text-xs text-gray-500">
                    {product.categoryId}
                  </div>
                ) : null}
                <div className="mt-2 text-sm font-bold text-orange-600">
                  ₦{product.price}
                </div>
              </div>
            </div>

            <div className="text-right">
              <button
                type="button"
                onClick={() => removeItem(product.id)}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                aria-label="Remove item"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setQty(product.id, quantity - 1)}
                className="h-10 w-10 rounded-xl border border-gray-200 text-lg font-bold text-gray-700 hover:bg-gray-50"
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="h-10 min-w-14 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center text-sm font-bold text-gray-900">
                {quantity}
              </div>
              <button
                type="button"
                onClick={() => setQty(product.id, quantity + 1)}
                className="h-10 w-10 rounded-xl border border-gray-200 text-lg font-bold text-gray-700 hover:bg-gray-50"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="text-sm font-bold text-gray-900">
              ₦{product.price * quantity}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
