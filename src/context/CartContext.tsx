import { createContext, useState } from "react";
import { CartItem, CartType, Product } from "../types/DummyJsonServiceTypes";

export type CartContextType = {
  cart: CartType;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  isProductInCart: (productId: number) => boolean;
  getCartItem: (productId: number) => CartItem | null;
};

export const CartContext = createContext<CartContextType>({
  cart: {
    items: {},
    totalAmount: 0,
    totalItems: 0,
  },
  addToCart: () => {},
  removeFromCart: () => {},
  isProductInCart: () => false,
  getCartItem: () => {
    return {} as CartItem;
  },
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartType>({
    items: {},
    totalAmount: 0,
    totalItems: 0,
  });
  const addToCart = (product: Product) => {
    if (product) {
      setCart((prev) => ({
        ...prev,
        items: {
          ...prev.items,
          [product.id]: {
            product,
            quantity: prev.items[product.id]
              ? prev.items[product.id].quantity + 1
              : 1,
          },
        },
        totalAmount: prev.totalAmount + product.price,
        totalItems: prev.totalItems + 1,
      }));
    }
  };

  const removeFromCart = (product: Product) => {
    if (!isProductInCart(product.id)) {
      return;
    }
    setCart((prev) => ({
      ...prev,
      items: {
        ...prev.items,
        [product.id]: {
          product,
          quantity: prev.items[product.id].quantity - 1,
        },
      },
      totalAmount: prev.totalAmount - product.price,
      totalItems: prev.totalItems - 1,
    }));
    if (cart.items[product.id].quantity === 0) {
      // cart[product.id] = null;
    }
  };

  const isProductInCart = (productId: number) => {
    return cart.items[productId] && cart.items[productId].quantity > 0
      ? true
      : false;
  };

  const getCartItem = (productId: number) => {
    if (isProductInCart(productId)) {
      return cart.items[productId];
    }
    return null;
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, isProductInCart, getCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
