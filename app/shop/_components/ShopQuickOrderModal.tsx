'use client'

import React, { useEffect, useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  productName: string
}

export default function ShopQuickOrderModal({ open, onClose, productName }: Props) {
  const [qty, setQty] = useState(1)

  useEffect(() => {
    if (open) setQty(1)
  }, [open])

  if (!open) return null

  const message = encodeURIComponent(
    `Hi! I want to order ${qty} x ${productName} from Lamdot (Shop).`
  )
  const whatsappUrl = `https://wa.me/0000000000?text=${message}`

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center">
      <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Quick Order</h3>
            <p className="mt-1 text-sm text-gray-600">{productName}</p>
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

        <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_140px] sm:items-center">
          <div>
            <label className="text-sm font-semibold text-gray-900">Quantity</label>
            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="h-10 w-10 rounded-xl border border-gray-200 text-lg font-bold text-gray-700 hover:bg-gray-50"
              >
                -
              </button>
              <div className="flex-1 rounded-xl border border-gray-200 bg-gray-50 py-2 text-center text-sm font-bold text-gray-900">
                {qty}
              </div>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="h-10 w-10 rounded-xl border border-gray-200 text-lg font-bold text-gray-700 hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Total</div>
            <div className="mt-1 text-sm font-bold text-orange-600">₹—</div>
          </div>
        </div>

        <div className="mt-5 flex gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:opacity-95"
          >
            Order on WhatsApp
          </a>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-50"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

