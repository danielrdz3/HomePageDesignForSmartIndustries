import { createContext, useContext, useState, ReactNode } from "react";

export const PRODUCT_PRICE = 5;
export const FREE_SHIPPING_THRESHOLD = 150;
export const SHIPPING_COST = 25;

export interface CartItem {
  slug: string;
  sku: string;
  name: string;
  img: string;
  price: number;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "qty" | "price">) => void;
  removeItem: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  clearCart: () => void;
  subtotal: number;
  shipping: number;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextValue>({
  items: [], isOpen: false,
  openCart: () => {}, closeCart: () => {},
  addItem: () => {}, removeItem: () => {}, updateQty: () => {}, clearCart: () => {},
  subtotal: 0, shipping: 0, total: 0, itemCount: 0,
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product: Omit<CartItem, "qty" | "price">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === product.slug);
      if (existing) {
        return prev.map((i) => i.slug === product.slug ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, price: PRODUCT_PRICE, qty: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (slug: string) => setItems((prev) => prev.filter((i) => i.slug !== slug));

  const updateQty = (slug: string, qty: number) => {
    if (qty < 1) { removeItem(slug); return; }
    setItems((prev) => prev.map((i) => i.slug === slug ? { ...i, qty } : i));
  };

  const clearCart = () => setItems([]);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = subtotal === 0 ? 0 : subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;
  const itemCount = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{
      items, isOpen, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false),
      addItem, removeItem, updateQty, clearCart,
      subtotal, shipping, total, itemCount,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
