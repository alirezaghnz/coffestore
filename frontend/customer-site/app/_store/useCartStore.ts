import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Coffee {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface CartItem extends Coffee {
  quantity: number;
}

type CartState = {
  cartItems: CartItem[];
  addToCart: (coffee: Coffee) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: any;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],

      addToCart: (coffee) =>
        set((state) => {
          // if coffee still exist in cart, we need to plus quantity
          const existing = state.cartItems.find((i) => i.id === coffee.id);
          if (existing) {
            return {
              cartItems: state.cartItems.map((i) =>
                i.id === coffee.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return {
            cartItems: [...state.cartItems, { ...coffee, quantity: 1 }],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),

      clearCart: () => set({ cartItems: [] }),

      updateQuantity: (id: number, quantity: number) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),
    }),
    // save on localStorage user with persist middleWare zustand
    { name: "cart-storage" }
  )
);
