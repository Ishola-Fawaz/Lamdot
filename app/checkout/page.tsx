"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import CheckoutForm from "./_components/CheckoutForm";
import CheckoutSummary from "./_components/CheckoutSummary";
import { useCart } from "@/src/providers/CartProvider";
import Link from "next/link";

export default function CheckoutPage() {
  const { items } = useCart();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const showEmpty = hydrated && items.length === 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="mt-2 text-sm text-gray-600">
            Contact details, delivery address, and payment mode.
          </p>
        </div>

        {showEmpty ? (
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 text-center">
            <div className="text-lg font-bold text-gray-900">
              Your cart is empty
            </div>
            <div className="mt-2 text-sm text-gray-600">
              Add products before proceeding to checkout.
            </div>
            <div className="mt-6">
              <Link
                href="/shop"
                className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                Browse Shop
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
            <CheckoutForm />
            <CheckoutSummary />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
