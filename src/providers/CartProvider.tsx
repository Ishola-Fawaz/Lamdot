"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartProduct = {
  id: string;
  name: string;
  price: number;
  imageSrc?: string;
  categoryId?: string;
};

export type CartItem = {
  product: CartProduct;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
};

type CartContextValue = CartState & {
  addItem: (product: CartProduct, qty?: number) => void;
  setQty: (productId: string, qty: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "lamdot_cart_v1";

type StoredCart = {
  items: Array<{ product: CartProduct; quantity: number }>;
};

function safeParseStoredCart(raw: string | null): StoredCart | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as StoredCart;
    if (!parsed || !Array.isArray(parsed.items)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = safeParseStoredCart(
      window.localStorage.getItem(STORAGE_KEY),
    );
    if (stored?.items) setItems(stored.items);
  }, []);

  useEffect(() => {
    const payload: StoredCart = { items };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [items]);

  const value: CartContextValue = useMemo(() => {
    const totalItems = items.reduce((sum, it) => sum + it.quantity, 0);
    const subtotal = items.reduce(
      (sum, it) => sum + it.quantity * it.product.price,
      0,
    );

    return {
      items,
      totalItems,
      subtotal,
      addItem: (product, qty = 1) => {
        if (!product?.id) return;
        const safeQty = Math.max(1, Math.floor(qty || 1));
        setItems((prev) => {
          const idx = prev.findIndex((p) => p.product.id === product.id);
          if (idx >= 0) {
            const next = [...prev];
            next[idx] = {
              ...next[idx],
              quantity: next[idx].quantity + safeQty,
            };
            return next;
          }
          return [...prev, { product, quantity: safeQty }];
        });
      },
      setQty: (productId, qty) => {
        const safeQty = Math.max(0, Math.floor(qty));
        setItems((prev) => {
          if (safeQty === 0)
            return prev.filter((it) => it.product.id !== productId);
          return prev.map((it) =>
            it.product.id === productId ? { ...it, quantity: safeQty } : it,
          );
        });
      },
      removeItem: (productId) => {
        setItems((prev) => prev.filter((it) => it.product.id !== productId));
      },
      clearCart: () => setItems([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
