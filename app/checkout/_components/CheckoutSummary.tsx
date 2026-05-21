"use client";

import React from "react";
import { useCart } from "@/src/providers/CartProvider";

const WHATSAPP_PHONE = "08080881473";

export default function CheckoutSummary() {
  const { items, subtotal, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-4">
        <div className="text-sm font-semibold text-gray-700">
          No items in cart.
        </div>
      </div>
    );
  }

  const shippingFee = 0;
  const totalPrice = subtotal + shippingFee;

  const text = [
    "Hi Lamdot 👆",
    "I’d like to place an order.",
    "\nItems:",
    ...items.map(
      (it) => `- ${it.product.name} x ${it.quantity} (₦${it.product.price})`,
    ),
    `\nSubtotal: ₦${subtotal}`,
    "\nPlease confirm availability and total amount.",
  ].join("\n");

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-gray-600">
            Order Review
          </div>
          <div className="mt-1 text-xs text-gray-500">
            {totalItems} item{totalItems === 1 ? "" : "s"} in your cart
          </div>
        </div>

        <div className="rounded-xl bg-gray-50 px-3 py-2">
          <div className="text-xs font-semibold text-gray-500">Total</div>
          <div className="text-base font-bold text-orange-600">
            ₦{totalPrice}
          </div>
        </div>
      </div>

      {/* Line items */}
      <div className="mt-4 divide-y divide-gray-100 rounded-2xl border border-gray-100">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex items-start gap-3 p-3">
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-gray-900">
                {product.name}
              </div>
              <div className="mt-1 text-xs text-gray-500">
                Quantity: <span className="font-semibold">{quantity}</span>
              </div>
              <div className="mt-1 text-xs text-gray-400">
                Price: ₦{product.price} each
              </div>
            </div>
            <div className="text-sm font-bold text-gray-900">
              ₦{product.price * quantity}
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-600">Subtotal</div>
          <div className="text-sm font-bold text-orange-600">₦{subtotal}</div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-600">
            Shipping fee
          </div>
          <div className="text-sm font-bold text-gray-900">₦{shippingFee}</div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="text-sm font-semibold text-gray-600">Total</div>
          <div className="text-lg font-bold text-orange-600">₦{totalPrice}</div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-5">
        <a
          href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 disabled:opacity-60"
        >
          Place order via WhatsApp
        </a>

        <p className="mt-3 text-xs text-gray-500">
          Clicking will open WhatsApp with your order summary. Send the message
          to confirm.
        </p>
      </div>
    </div>
  );
}
