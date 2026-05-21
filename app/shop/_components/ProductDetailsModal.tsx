"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Minus, Plus, MessageCircle, ShoppingBag, Wallet, Truck } from "lucide-react";

import type { CartProduct } from "@/src/providers/CartProvider";
import { useCart } from "@/src/providers/CartProvider";
import { buildWhatsAppOrderMessage, buildWhatsAppLink } from "@/src/lib/whatsapp";

export default function ProductDetailsModal({
  open,
  onClose,
  product,
  initialQty = 1,
}: {
  open: boolean;
  onClose: () => void;
  product: CartProduct | null;
  initialQty?: number;
}) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(initialQty);

  useEffect(() => {
    if (open) setQty(Math.max(1, Math.floor(initialQty || 1)));
  }, [open, initialQty]);

  const whatsapp = useMemo(() => {
    if (!product) return null;

    const { message } = buildWhatsAppOrderMessage({
      phone: "08052350516",
      productName: product.name,
      price: product.price,
      quantity: qty,
    });

    return {
      message,
      url: buildWhatsAppLink({ phone: "08052350516", text: message }),
    };
  }, [product, qty]);

  if (!open || !product) return null;

  const onAddQtyToCart = () => {
    addItem(product, qty);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center">
      <div className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-xl">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold text-gray-900">{product.name}</h3>
            <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
              <span className="text-orange-600 font-extrabold">₹{product.price}</span>
              {product.categoryId ? <span className="text-gray-400">• {product.categoryId}</span> : null}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[160px_1fr]">
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-50">
            {product.imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={product.imageSrc} alt={product.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-gray-400">
                No Image
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <Truck className="w-4 h-4 text-orange-600" />
                  Delivery options
                </div>
                <div className="text-xs font-semibold text-gray-500">Fast dispatch</div>
              </div>
              <div className="mt-2 text-sm text-gray-600 flex items-start gap-2">
                <Wallet className="w-4 h-4 mt-0.5 text-orange-600" />
                <span>Choose Bank transfer or Payment on delivery at checkout.</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-900">Quantity</label>
              <div className="mt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="h-10 w-10 rounded-xl border border-gray-200 text-lg font-bold text-gray-700 hover:bg-gray-50"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="flex-1 rounded-xl border border-gray-200 bg-gray-50 py-2 text-center text-sm font-bold text-gray-900">
                  {qty}
                </div>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="h-10 w-10 rounded-xl border border-gray-200 text-lg font-bold text-gray-700 hover:bg-gray-50"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-orange-100 bg-orange-50 p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
              <ShoppingBag className="w-4 h-4 text-orange-600" />
              Add this quantity to cart
            </div>
            <div className="text-sm font-bold text-orange-700">₦{product.price * qty}</div>
          </div>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => {
                onAddQtyToCart();
                onClose();
              }}
              className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              Add to Cart
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-100"
            >
              Keep browsing
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
          <a
            href={whatsapp?.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          >
            <MessageCircle className="w-4 h-4" />
            Order via WhatsApp
          </a>
          <Link
            href="/cart"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-xl border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-50"
          >
            View Full Cart
          </Link>
          <Link
            href="/checkout"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

