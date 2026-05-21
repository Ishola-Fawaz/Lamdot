"use client";

import React, { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";

import { useCart } from "@/src/providers/CartProvider";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

const WHATSAPP_PHONE = "08052350516";


type PaymentMethod = "bank_transfer" | "cod";

type WhatsAppPayload = {
  message: string;
  url: string;
};

export default function CheckoutForm() {
  const { items, subtotal } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [addressLine1, setAddressLine1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cod");
  const [submitted, setSubmitted] = useState(false);

  const paymentLabel =
    paymentMethod === "bank_transfer" ? "Bank transfer" : "Payment on delivery";

  const whatsapp = useMemo<WhatsAppPayload | null>(() => {
    if (items.length === 0) return null;

    const lines: string[] = [];
    lines.push(`Hi Lamdot 👤`);
    lines.push(`Order details:`);

    for (const it of items) {
      lines.push(
        `- ${it.product.name} x ${it.quantity} (₹${it.product.price})`,
      );
    }

    lines.push(`Subtotal: ₹${subtotal}`);
    lines.push(`\nCustomer:`);
    lines.push(`Name: ${name || "-"}`);
    lines.push(`Phone: ${phone || "-"}`);
    if (email) lines.push(`Email: ${email}`);

    lines.push(`\nDelivery address:`);
    lines.push(`${addressLine1 || "-"}`);
    lines.push(`${city || "-"}, ${state || "-"}`);
    lines.push(`${pincode || "-"}`);
    if (landmark) lines.push(`Landmark: ${landmark}`);

    lines.push(`\nPayment method: ${paymentLabel}`);
    lines.push(`\nPlease confirm availability and total amount.`);

    const message = lines.join("\n");

    return {
      message,
      url: buildWhatsAppLink({ phone: WHATSAPP_PHONE, text: message }),
    };
  }, [
    items,
    subtotal,
    name,
    phone,
    email,
    addressLine1,
    city,
    state,
    pincode,
    landmark,
    paymentLabel,
  ]);

  const isValid =
    name.trim().length >= 2 &&
    phone.trim().length >= 7 &&
    addressLine1.trim().length >= 5;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      {/* <h2 className="text-xl font-bold text-gray-900">Checkout</h2> */}
      {/* <p className="mt-2 text-sm text-gray-600">
        Fill your details and place the order.
      </p> */}

      {submitted ? (
        <div className="mt-6 rounded-2xl bg-orange-50 border border-orange-100 p-5">
          <div className="text-lg font-bold text-orange-700">
            Order request prepared
          </div>
          <div className="mt-2 text-sm text-gray-700">
            Use the WhatsApp button to send your order to our team.
          </div>

          {whatsapp ? (
            <div className="mt-5">
              <a
                href={whatsapp.url}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                <MessageCircle className="w-4 h-4" />
                Order via WhatsApp
              </a>
            </div>
          ) : null}
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 space-y-5">
          <section>
            <h3 className="text-xl font-bold text-gray-900">
              Contact information
            </h3>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 uppercase">
              <div>
                <label className="text-xs font-semibold text-gray-700">
                  Full name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-700">
                  Phone
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
                  placeholder="e.g. 0805..."
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-gray-700">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900">
              Delivery address
            </h3>
            <div className="mt-3 space-y-3 uppercase">
              <div>
                <label className="text-xs font-semibold text-gray-700">
                  Street Address 
                </label>
                <input
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
                  placeholder="House no, street, area"
                />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700">
                    City
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700">
                    State
                  </label>
                  <input
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-200"
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900">Mode of payment</h3>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setPaymentMethod("bank_transfer")}
                className={`rounded-2xl border px-4 py-4 text-left transition-colors ${
                  paymentMethod === "bank_transfer"
                    ? "border-orange-300 bg-orange-50"
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
              >
                <div className="text-sm font-bold text-gray-900">
                  Bank transfer
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  Pay after we confirm availability.
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("cod")}
                className={`rounded-2xl border px-4 py-4 text-left transition-colors ${
                  paymentMethod === "cod"
                    ? "border-orange-300 bg-orange-50"
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
              >
                <div className="text-sm font-bold text-gray-900">
                  Payment on delivery
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  Pay when your order arrives.
                </div>
              </button>
            </div>
          </section>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={!isValid}
              className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 disabled:opacity-50"
            >
              Confirm order
            </button>

            {whatsapp ? (
              <a
                href={whatsapp.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-orange-200 px-6 py-3 text-sm font-semibold text-orange-700 hover:bg-orange-50 text-center"
              >
                Order via WhatsApp
              </a>
            ) : null}
          </div>

          {/* {!isValid ? (
            <div className="text-xs text-gray-500">
              Please enter at least <span className="font-semibold">name</span>,{" "}
              <span className="font-semibold">phone</span>, and{" "}
              <span className="font-semibold">address</span>.
            </div>
          ) : null} */}
        </form>
      )}
    </div>
  );
}
