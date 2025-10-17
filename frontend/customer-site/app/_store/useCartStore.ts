import { create } from "zustand";
interface Coffee {
  id: number;
  name: string;
  price: number;
}
type CartState = {
  cartItems: Coffee[];
  addToCart: (coffee: Coffee) => void;
  removeFromCart: (id: number) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addToCart: (coffee) =>
    set((state) => ({ cartItems: [...state.cartItems, coffee] })),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cartItems: [] }),
}));
