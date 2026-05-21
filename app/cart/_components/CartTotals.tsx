"use client";

import React, { useMemo } from "react";
import {
  buildWhatsAppOrderMessage,
  buildWhatsAppLink,
} from "@/src/lib/whatsapp";
import { useCart } from "@/src/providers/CartProvider";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const WHATSAPP_PHONE = "08052350516";

export default function CartTotals() {
  const { items, subtotal, totalItems } = useCart();

  const cartWhatsApp = useMemo(() => {
    if (items.length === 0) return null;

    const lines: string[] = [];
    lines.push(`Hi Lamdot 👤`);
    lines.push(`I’d like to order:`);

    for (const it of items) {
      lines.push(
        `- ${it.product.name} (₹${it.product.price}) x ${it.quantity}`,
      );
    }

    lines.push(`Subtotal: ₹${subtotal}`);
    lines.push(`Total items: ${totalItems}`);
    lines.push(`\nPlease confirm availability and total amount.`);

    const message = lines.join("\n");
    return {
      message,
      url: buildWhatsAppLink({ phone: WHATSAPP_PHONE, text: message }),
    };
  }, [items, subtotal, totalItems]);

  if (items.length === 0) return null;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-gray-600">Items</div>
        <div className="text-sm font-bold text-gray-900">{totalItems}</div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm font-semibold text-gray-600">Subtotal</div>
        <div className="text-sm font-bold text-orange-600">₦{subtotal}</div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2">
        <Link
          href="/checkout"
          className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-95"
        >
          Proceed to Checkout
        </Link>

        <a
          href={cartWhatsApp?.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-orange-200 px-4 py-3 text-center text-sm font-semibold text-orange-700 hover:bg-orange-50 inline-flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Order via WhatsApp
        </a>
      </div>
    </div>
  );
}
