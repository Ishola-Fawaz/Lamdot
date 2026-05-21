"use client";

import React from "react";
import { ArrowRight, MoveDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 md:px-8"
      style={{
        backgroundImage: `url(/assets/hero-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>

      {/* Content */}
      <div className="mx-auto text-left relative z-10 w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-display lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 md:mb-8 drop-shadow-2xl tracking-tight">
          Step Into Your
          <span className="block text-transparent font-sans bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-2xl">
            Best Style
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-10 md:mb-12 leading-relaxed max-w-xl drop-shadow-lg">
          Premium footwear designed for every step. Built for performance,
          styled for comfort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-lg">
          <a
            href="/shop"
            className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg flex items-center gap-2 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-[1.02] backdrop-blur-sm font-inter border border-orange-400/30"
          >
            Shop Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="/#categories"
            className="border-2 border-white/30 hover:border-white/50 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg hover:bg-white/10 backdrop-blur-md transition-all duration-400 hover:shadow-xl hover:shadow-white/10 font-inter"
          >
            Browse Categories
          </a>
        </div>

        {/* Explore CTA */}
        <div className="flex items-center justify-center gap-2 mt-20 pb-12">
          <span className="text-white/70 text-lg md:text-xl uppercase font-medium tracking-wide drop-shadow-md">
            Explore
          </span>
          <MoveDown className="w-6 h-6 text-white/70 animate-bounce drop-shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
