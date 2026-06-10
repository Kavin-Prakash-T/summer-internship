// app/products/page.tsx
"use client";

import { useCart } from "../context/context";

// Local static data for available items to purchase
const AVAILABLE_PRODUCTS = [
  { name: "mobile", price: 999 },
  { name: "laptop", price: 1999 },
  { name: "tablet", price: 599 }
];

export default function ProductsPage() {
  // Extract your reactive cart state and setter from your context hook
  const { cart, setCart } = useCart();

  // Helper function to append a chosen product to the array
  const handleAddToCart = (product: { name: string; price: number }) => {
    setCart((prevCart:any[]) => [...prevCart, product]);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      
      {/* Dynamic Header showing live cart array length */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <h1>Product Store</h1>
        <div style={{ padding: "10px 20px", background: "#333", color: "#fff", borderRadius: "20px" }}>
          🛒 Cart Items: <strong>{cart.length}</strong>
        </div>
      </header>

      {/* Grid of available items */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1.5rem" }}>
        {AVAILABLE_PRODUCTS.map((product, index) => (
          <div 
            key={index} 
            style={{ 
              padding: "1rem", 
              border: "1px solid #ddd", 
              borderRadius: "8px", 
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}
          >
            <h3 style={{ textTransform: "capitalize", margin: "0 0 0.5rem 0" }}>{product.name}</h3>
            <p style={{ color: "#0070f3", fontWeight: "bold", margin: "0 0 1rem 0" }}>${product.price}</p>
            
            <button 
              onClick={() => handleAddToCart(product)}
              style={{
                background: "#0070f3",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
                width: "100%"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
