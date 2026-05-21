"use client";

import React from "react";
import { ChevronRight, Star, ShoppingCart } from "lucide-react";

import { useCart, type CartProduct } from "@/src/providers/CartProvider";

type ExploreProduct = {
  id: number;
  img: string;
  name: string;
  oldPrice: number;
  price: number;
  rating: number;
  badge?: string;
  text?: string;
};

const formatNaira = (value: number) => `₦${value}`;

const Explore: React.FC = () => {
  const { addItem } = useCart();

  const products: ExploreProduct[] = [
    {
      id: 1,
      img: "/assets/basketball.jpg",
      name: "Air Max Pro",
      oldPrice: 299,
      price: 199,
      rating: 4.9,
      badge: "Extra 10% off at checkout",
      text: "12 sizes available",
    },
    {
      id: 2,
      img: "/assets/cloud9.jpg",
      name: "Classic Leather Boots",
      oldPrice: 450,
      price: 329,
      rating: 4.8,
      badge: "Pay on Delivery",
      text: "11 sizes available",
    },
    {
      id: 3,
      img: "/assets/casual.jpg",
      name: "Urban Slip-On",
      oldPrice: 179,
      price: 129,
      rating: 4.9,
      badge: "Out of Stock",
      text: "8 sizes available",
    },
    {
      id: 4,
      img: "/assets/running.jpg",
      name: "Speed Runner 3000",
      oldPrice: 249,
      price: 189,
      rating: 5.0,
      badge: "New",
      text: "10 sizes available",
    },
    {
      id: 5,
      img: "/assets/sandals.jpg",
      name: "Summer Breeze Sandals",
      oldPrice: 89,
      price: 69,
      rating: 4.7,
      badge: "Pay on Delivery",
      text: "12 sizes available",
    },
    {
      id: 6,
      img: "/assets/sneakers.jpg",
      name: "Retro High-Tops",
      oldPrice: 219,
      price: 169,
      rating: 4.9,
      badge: "Limited",
      text: "6 sizes available",
    },
  ];

  const toCartProduct = (p: ExploreProduct): CartProduct => ({
    id: String(p.id),
    name: p.name,
    price: p.price,
    imageSrc: p.img,
  });

  return (
    <section id="new-arrivals" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header + CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-20">
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-left mb-4">
              Featured Products
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              Our most popular styles handpicked for you
            </p>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer hover:gap-4 transition-all duration-300 hover:text-orange-700">
            <span className="text-lg font-medium tracking-wide">
              View All Featured
            </span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-all duration-300" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200"
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Manual Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold shadow-lg z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white uppercase tracking-wide hover:scale-105 transition-all duration-300">
                    {product.badge}
                  </div>
                )}
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-end p-6">
                  <div className="w-full flex gap-3 translate-y-16 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <button
                      className="flex-1 bg-white/95 backdrop-blur-sm text-gray-900 py-3 px-6 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-2 text-sm border hover:border-gray-200"
                      onClick={() => addItem(toCartProduct(product), 1)}
                      type="button"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>

                    {/* <button
                      className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl hover:bg-white/40 hover:scale-105 transition-all duration-300 shadow-xl border border-white/30 flex items-center justify-center"
                      type="button"
                      aria-label={`Add ${product.name} to wishlist`}
                      // TODO: wire this to a real wishlist provider/state
                      onClick={() => {
                        // prevent accidentally adding to cart from the wishlist button
                      }}
                    >
                      <Heart className="w-6 h-6" />
                    </button> */}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                <h3 className="font-bold text-xl text-gray-900 mb-4 line-clamp-1 group-hover:text-orange-600 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900 ml-1">
                    ({product.rating})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-black text-gray-900 drop-shadow-sm">
                    {product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    {product.oldPrice}
                  </span>
                </div>

                {/* Product text */}
                {product.text && (
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    {product.text}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
