import React from "react";
import { Link } from "react-router";
import { Package, LogOut, ShoppingBag, ChevronRight, Clock, CheckCircle, Truck } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useOrders } from "../context/OrderContext";

const MONO: React.CSSProperties = { fontFamily: "'Roboto Mono', monospace" };
const SLAB: React.CSSProperties = { fontFamily: "'Roboto Slab', serif" };
const INTER: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };

const STATUS_CONFIG = {
  "Completado": { icon: CheckCircle, color: "#16a34a", bg: "#dcfce7" },
  "En proceso": { icon: Clock, color: "#d97706", bg: "#fef9c3" },
  "Enviado":    { icon: Truck,         color: "#2c2c64", bg: "#e0e7ff" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-MX", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export function Dashboard() {
  const { user, logout } = useAuth();
  const { getOrdersByUser } = useOrders();

  if (!user) {
    return (
      <div className="pt-16 min-h-screen bg-[#EFEFEF] flex flex-col items-center justify-center gap-6 px-6">
        <Package size={48} strokeWidth={1} className="text-gray-400" />
        <p style={{ ...SLAB, fontWeight: 900, fontSize: "1.4rem", color: "#2c2c64" }}>
          Inicia sesión para ver tus pedidos
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-[#2c2c64] text-white hover:bg-[#861e5c] transition-colors"
          style={{ ...INTER, fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.08em" }}
        >
          IR AL INICIO
        </Link>
      </div>
    );
  }

  const orders = getOrdersByUser(user.email);

  return (
    <div className="pt-16 min-h-screen bg-[#EFEFEF]">
      {/* Header */}
      <div className="bg-[#2c2c64] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff,#fff 1px,transparent 1px,transparent 32px)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <img
                src={user.picture}
                alt={user.name}
                className="w-14 h-14 rounded-full border-2 border-[#861e5c]"
              />
              <div>
                <p style={{ ...MONO, fontSize: "0.65rem", letterSpacing: "0.12em", color: "#861e5c" }}>
                  MI CUENTA
                </p>
                <h1 style={{ ...SLAB, fontWeight: 900, fontSize: "1.6rem", color: "white" }}>
                  {user.name}
                </h1>
                <p style={{ ...INTER, fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
                  {user.email}
                </p>
              </div>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors"
              style={{ ...INTER, fontSize: "0.78rem", letterSpacing: "0.06em" }}
            >
              <LogOut size={14} /> CERRAR SESIÓN
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { label: "Total pedidos", value: orders.length },
              { label: "Completados", value: orders.filter(o => o.status === "Completado").length },
              { label: "Total gastado", value: `$${orders.reduce((s, o) => s + o.total, 0).toFixed(2)}` },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 px-5 py-4">
                <p style={{ ...MONO, fontSize: "0.6rem", letterSpacing: "0.1em", color: "#861e5c" }}>
                  {stat.label.toUpperCase()}
                </p>
                <p style={{ ...SLAB, fontWeight: 900, fontSize: "1.5rem", color: "white" }}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Orders list */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-6 h-px bg-[#861e5c]" />
          <span style={{ ...MONO, fontSize: "0.65rem", letterSpacing: "0.12em", color: "#861e5c" }}>
            HISTORIAL DE PEDIDOS
          </span>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white flex flex-col items-center justify-center py-20 gap-5">
            <ShoppingBag size={48} strokeWidth={1} className="text-gray-300" />
            <p style={{ ...SLAB, fontWeight: 700, fontSize: "1.2rem", color: "#9ca3af" }}>
              Aún no tienes pedidos
            </p>
            <Link
              to="/catalogo"
              className="px-8 py-3 bg-[#861e5c] text-white hover:bg-[#6e1a4d] transition-colors"
              style={{ ...INTER, fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.08em" }}
            >
              VER CATÁLOGO
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const cfg = STATUS_CONFIG[order.status];
              const Icon = cfg.icon;
              return (
                <div key={order.id} className="bg-white overflow-hidden">
                  {/* Order header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-wrap gap-3">
                    <div className="flex items-center gap-6">
                      <div>
                        <p style={{ ...MONO, fontSize: "0.6rem", letterSpacing: "0.1em", color: "#9ca3af" }}>
                          PEDIDO
                        </p>
                        <p style={{ ...MONO, fontWeight: 700, fontSize: "0.85rem", color: "#2c2c64" }}>
                          {order.id}
                        </p>
                      </div>
                      <div>
                        <p style={{ ...MONO, fontSize: "0.6rem", letterSpacing: "0.1em", color: "#9ca3af" }}>
                          FECHA
                        </p>
                        <p style={{ ...INTER, fontSize: "0.82rem", color: "#374151" }}>
                          {formatDate(order.date)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                        style={{ background: cfg.bg, color: cfg.color }}
                      >
                        <Icon size={12} />
                        <span style={{ ...INTER, fontSize: "0.72rem", fontWeight: 600 }}>
                          {order.status}
                        </span>
                      </div>
                      <span style={{ ...SLAB, fontWeight: 900, fontSize: "1.1rem", color: "#2c2c64" }}>
                        ${order.total.toFixed(2)} USD
                      </span>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="px-6 py-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {order.items.map((item) => (
                        <div key={item.slug} className="flex items-center gap-3 p-3 bg-[#EFEFEF]">
                          <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0">
                            <img src={item.img} alt={item.sku} className="w-full h-full object-contain p-1" />
                          </div>
                          <div className="min-w-0">
                            <p style={{ ...MONO, fontSize: "0.58rem", letterSpacing: "0.08em", color: "#2c2c64" }}>
                              {item.sku}
                            </p>
                            <p className="truncate" style={{ ...INTER, fontWeight: 600, fontSize: "0.78rem" }}>
                              {item.name}
                            </p>
                            <p style={{ ...INTER, fontSize: "0.72rem", color: "#6b7280" }}>
                              Cant: {item.qty} · ${(item.price * item.qty).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order totals */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                      <div className="space-y-1 text-right">
                        <p style={{ ...INTER, fontSize: "0.78rem", color: "#6b7280" }}>
                          Subtotal: ${order.subtotal.toFixed(2)}
                        </p>
                        <p style={{ ...INTER, fontSize: "0.78rem", color: order.shipping === 0 ? "#16a34a" : "#6b7280" }}>
                          Envío: {order.shipping === 0 ? "Gratis" : `$${order.shipping.toFixed(2)}`}
                        </p>
                        <p style={{ ...SLAB, fontWeight: 900, fontSize: "1rem", color: "#2c2c64" }}>
                          Total: ${order.total.toFixed(2)} USD
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
