import React, { createContext, useContext, useState, ReactNode } from "react";
import type { CartItem } from "./CartContext";

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: "Completado" | "En proceso" | "Enviado";
  paypalOrderId?: string;
  userEmail: string;
}

interface OrderContextValue {
  orders: Order[];
  addOrder: (order: Omit<Order, "id" | "date" | "status">) => Order;
  getOrdersByUser: (email: string) => Order[];
}

const OrderContext = createContext<OrderContextValue>({
  orders: [],
  addOrder: () => ({ id: "", date: "", items: [], subtotal: 0, shipping: 0, total: 0, status: "Completado", userEmail: "" }),
  getOrdersByUser: () => [],
});

function loadOrders(): Order[] {
  try {
    const stored = localStorage.getItem("si_orders");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveOrders(orders: Order[]) {
  localStorage.setItem("si_orders", JSON.stringify(orders));
}

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(loadOrders);

  function addOrder(data: Omit<Order, "id" | "date" | "status">): Order {
    const newOrder: Order = {
      ...data,
      id: `SI-${Date.now().toString(36).toUpperCase()}`,
      date: new Date().toISOString(),
      status: "Completado",
    };
    setOrders((prev) => {
      const updated = [newOrder, ...prev];
      saveOrders(updated);
      return updated;
    });
    return newOrder;
  }

  function getOrdersByUser(email: string) {
    return orders.filter((o) => o.userEmail === email);
  }

  return (
    <OrderContext.Provider value={{ orders, addOrder, getOrdersByUser }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrderContext);
}
