import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("splitdog-cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const saveCart = useCallback((items) => {
    setCart(items);
    try {
      localStorage.setItem("splitdog-cart", JSON.stringify(items));
    } catch {}
  }, []);

  const addToCart = useCallback((product, quantity, observation) => {
    setCart((prev) => {
      const item = {
        id: Date.now(),
        name: product.name,
        price: product.price,
        quantity,
        observation: observation || "",
        image: product.image || "",
      };
      const next = [...prev, item];
      try {
        localStorage.setItem("splitdog-cart", JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => {
      const next = prev.filter((item) => item.id !== id);
      try {
        localStorage.setItem("splitdog-cart", JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const updateQuantity = useCallback((id, delta) => {
    setCart((prev) => {
      const next = prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      );
      try {
        localStorage.setItem("splitdog-cart", JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    try {
      localStorage.removeItem("splitdog-cart");
    } catch {}
  }, []);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart deve ser usado dentro de CartProvider");
  }
  return ctx;
}
