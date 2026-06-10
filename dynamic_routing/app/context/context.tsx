// app/context/ProductContext.tsx
"use client";

import { createContext, useContext, ReactNode, useState } from "react";

const CartContext = createContext<any>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart,setCart]=useState([])
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

// 4. Custom hook for consumption
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
