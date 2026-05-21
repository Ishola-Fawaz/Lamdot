"use client";

import React, { useMemo, useState } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ShopFilters, { ShopFiltersState } from "./_components/ShopFilters";
import ShopHero from "./_components/ShopHero";
import ShopPagination from "./_components/ShopPagination";
import ShopProductCard from "./_components/ShopProductCard";
import ShopQuickOrderModal from "./_components/ShopQuickOrderModal";
import type { ShopProduct } from "./_components/types";
import ProductDetailsModal from "./_components/ProductDetailsModal";

const PRODUCTS: ShopProduct[] = [
  {
    id: "p1",
    name: "Cloud Runner Sneakers",
    categoryId: "sneakers",
    price: 3999,
    imageSrc: "/assets/sneakers.jpg",
  },
  {
    id: "p2",
    name: "Marathon Street Sneakers",
    categoryId: "sneakers",
    price: 4499,
    imageSrc: "/assets/sneakers.jpg",
  },
  {
    id: "p3",
    name: "Trail Flex Boots",
    categoryId: "boots",
    price: 5999,
    imageSrc: "/assets/boots.jpg",
  },
  {
    id: "p4",
    name: "City Grip Boots",
    categoryId: "boots",
    price: 5299,
    imageSrc: "/assets/boots.jpg",
  },
  {
    id: "p5",
    name: "Summer Sprint Sandals",
    categoryId: "sandals",
    price: 2199,
    imageSrc: "/assets/sandals.jpg",
  },
  {
    id: "p6",
    name: "Coast Walk Sandals",
    categoryId: "sandals",
    price: 2499,
    imageSrc: "/assets/sandals.jpg",
  },
  {
    id: "p7",
    name: "Daily Comfort Casual",
    categoryId: "casual",
    price: 2799,
    imageSrc: "/assets/casual.jpg",
  },
  {
    id: "p8",
    name: "Everyday Ease Casual",
    categoryId: "casual",
    price: 3199,
    imageSrc: "/assets/casual.jpg",
  },
  {
    id: "p9",
    name: "Speedline Sneakers",
    categoryId: "sneakers",
    price: 4799,
    imageSrc: "/assets/sneakers.jpg",
  },
  {
    id: "p10",
    name: "Roadstar Boots",
    categoryId: "boots",
    price: 6199,
    imageSrc: "/assets/boots.jpg",
  },
  {
    id: "p11",
    name: "Wave Glide Sandals",
    categoryId: "sandals",
    price: 2399,
    imageSrc: "/assets/sandals.jpg",
  },
  {
    id: "p12",
    name: "Chill Step Casual",
    categoryId: "casual",
    price: 2999,
    imageSrc: "/assets/casual.jpg",
  },
];

type QuickOrderState = {
  open: boolean;
  productName: string;
};

export default function ShopPage() {
  const [filters, setFilters] = useState<ShopFiltersState>({
    query: "",
    categoryId: null,
    priceMin: 0,
    priceMax: 5000,
  });

  const [page, setPage] = useState(1);
  const pageSize = 8;

  const [quickOrder, setQuickOrder] = useState<QuickOrderState>({
    open: false,
    productName: "",
  });

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [detailsProduct, setDetailsProduct] = useState<ShopProduct | null>(
    null,
  );
  const [detailsQty, setDetailsQty] = useState(1);

  const filtered = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesQuery = q.length === 0 || p.name.toLowerCase().includes(q);
      const matchesCategory =
        !filters.categoryId || p.categoryId === filters.categoryId;
      const matchesPrice =
        p.price >= filters.priceMin && p.price <= filters.priceMax;
      return matchesQuery && matchesCategory && matchesPrice;
    });
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const openQuickOrder = (productName: string) => {
    setQuickOrder({ open: true, productName });
  };

  const openProductDetails = (product: ShopProduct) => {
    setDetailsProduct(product);
    setDetailsQty(1);
    setDetailsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24">
        <ShopHero />

        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
            <div className="lg:block">
              <ShopFilters
                value={filters}
                onChange={(next) => {
                  setFilters(next);
                  setPage(1);
                }}
              />
            </div>

            <div>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-base font-semibold text-gray-900">
                    Products
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">
                    {filtered.length} item(s) found
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {paged.map((p) => (
                  <div key={p.id} className="cursor-pointer">
                    <ShopProductCard
                      product={p}
                      onAddToCart={() => openProductDetails(p)}
                    />
                  </div>
                ))}
              </div>

              <ShopPagination
                page={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          </div>
        </div>

        <ProductDetailsModal
          open={detailsOpen}
          onClose={() => {
            setDetailsOpen(false);
            setDetailsProduct(null);
          }}
          product={detailsProduct}
          initialQty={detailsQty}
        />

        <ShopQuickOrderModal
          open={quickOrder.open}
          productName={quickOrder.productName}
          onClose={() => setQuickOrder({ open: false, productName: "" })}
        />
      </div>
      <Footer />
    </div>
  );
}
