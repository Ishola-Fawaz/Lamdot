"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-8 bg-orange-500/10 rounded-2xl">
          <Mail className="w-8 h-8 text-orange-500" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Stay in the Loop
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Subscribe to get exclusive drops, early access to sales, and style
          tips delivered to your inbox.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-orange-500">
            <CheckCircle className="w-6 h-6" />
            <span className="text-lg font-medium">Thanks for subscribing!</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="group bg-orange-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Subscribe
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        )}

        <p className="text-sm text-gray-500 mt-6">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

export default Subscribe;

