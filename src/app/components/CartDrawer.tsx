import React, { useState } from "react";
import { X, Minus, Plus, Trash2, ShoppingCart, Truck, CheckCircle, LogIn } from "lucide-react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useCart, FREE_SHIPPING_THRESHOLD, SHIPPING_COST } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useOrders } from "../context/OrderContext";
import { GoogleSignInButton } from "./GoogleSignInButton";

const MONO: React.CSSProperties = { fontFamily: "'Roboto Mono', monospace" };
const SLAB: React.CSSProperties = { fontFamily: "'Roboto Slab', serif" };
const INTER: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };

function PayPalSection({ total, onSuccess }: { total: number; onSuccess: () => void }) {
  const [{ isPending }] = usePayPalScriptReducer();
  return (
    <div>
      {isPending && (
        <div className="flex items-center justify-center py-4">
          <div className="w-5 h-5 border-2 border-[#861e5c] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <PayPalButtons
        style={{ layout: "vertical", color: "gold", shape: "rect", label: "pay", height: 45 }}
        createOrder={(_data, actions) =>
          actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: { currency_code: "USD", value: total.toFixed(2) },
                description: "Smart Industries - Pedido",
              },
            ],
          })
        }
        onApprove={async (_data, actions) => {
          if (actions.order) {
            const details = await actions.order.capture();
            onSuccess();
          }
        }}
      />
    </div>
  );
}

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, clearCart, subtotal, shipping, total, itemCount } = useCart();
  const { user } = useAuth();
  const { addOrder } = useOrders();
  const [paid, setPaid] = useState(false);

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const pct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  function handleSuccess() {
    if (user) {
      addOrder({
        items: [...items],
        subtotal,
        shipping,
        total,
        userEmail: user.email,
      });
    }
    setPaid(true);
    clearCart();
  }

  function handleClose() {
    setPaid(false);
    closeCart();
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm" onClick={handleClose} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[70] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#2c2c64]">
          <div className="flex items-center gap-3">
            <ShoppingCart size={18} className="text-white" />
            <span style={{ ...SLAB, fontWeight: 700, fontSize: "1rem", color: "white" }}>Carrito</span>
            {itemCount > 0 && (
              <span className="bg-[#861e5c] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center" style={MONO}>
                {itemCount}
              </span>
            )}
          </div>
          <button onClick={handleClose} className="text-white/60 hover:text-white p-1">
            <X size={20} />
          </button>
        </div>

        {/* Success screen */}
        {paid ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-5 px-8 text-center">
            <CheckCircle size={52} className="text-green-500" />
            <div>
              <h3 style={{ ...SLAB, fontWeight: 900, fontSize: "1.3rem", color: "#2c2c64" }}>¡Pago exitoso!</h3>
              <p className="text-gray-500 mt-2" style={{ ...INTER, fontSize: "0.85rem" }}>
                Tu pedido fue registrado. Puedes verlo en tu dashboard.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <a
                href="/dashboard"
                className="w-full py-3 bg-[#861e5c] text-white text-center hover:bg-[#6e1a4d] transition-colors"
                style={{ ...INTER, fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.08em" }}
                onClick={handleClose}
              >
                VER MIS PEDIDOS
              </a>
              <button
                onClick={handleClose}
                className="w-full py-2.5 border border-gray-200 text-gray-500 hover:border-[#2c2c64] hover:text-[#2c2c64] transition-colors"
                style={{ ...INTER, fontSize: "0.78rem" }}
              >
                Seguir comprando
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Free shipping progress */}
            {subtotal > 0 && (
              <div className="px-6 py-4 bg-[#EFEFEF] border-b border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Truck size={13} className={shipping === 0 ? "text-green-600" : "text-[#2c2c64]"} />
                  {shipping === 0 ? (
                    <span style={{ ...INTER, fontSize: "0.75rem", fontWeight: 600, color: "#15803d" }}>
                      ¡Envío gratis aplicado!
                    </span>
                  ) : (
                    <span style={{ ...INTER, fontSize: "0.75rem", color: "#4b5563" }}>
                      Agrega{" "}
                      <strong style={{ color: "#2c2c64" }}>${remaining.toFixed(2)}</strong>
                      {" "}más para envío gratis
                    </span>
                  )}
                </div>
                <div className="h-1.5 bg-gray-300 rounded-full overflow-hidden">
                  <div className="h-full bg-[#861e5c] rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                </div>
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 px-6" style={{ color: "#9ca3af" }}>
                  <ShoppingCart size={40} strokeWidth={1} />
                  <p style={{ ...INTER, fontSize: "0.875rem" }}>Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {items.map((item) => (
                    <div key={item.slug} className="flex gap-4 p-5">
                      <div className="w-16 h-16 bg-[#EFEFEF] flex items-center justify-center shrink-0">
                        <img src={item.img} alt={item.sku} className="w-full h-full object-contain p-1" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div style={{ ...MONO, fontSize: "0.65rem", letterSpacing: "0.08em", color: "#2c2c64" }}>{item.sku}</div>
                        <div className="truncate" style={{ ...SLAB, fontWeight: 700, fontSize: "0.85rem" }}>{item.name}</div>
                        <div style={{ ...INTER, fontWeight: 600, fontSize: "0.85rem", color: "#861e5c" }}>${item.price.toFixed(2)} USD</div>
                        <div className="flex items-center gap-2 mt-2">
                          <button onClick={() => updateQty(item.slug, item.qty - 1)} className="w-6 h-6 border border-gray-200 flex items-center justify-center hover:border-[#2c2c64] transition-colors">
                            <Minus size={10} />
                          </button>
                          <span className="w-6 text-center text-sm font-semibold" style={MONO}>{item.qty}</span>
                          <button onClick={() => updateQty(item.slug, item.qty + 1)} className="w-6 h-6 border border-gray-200 flex items-center justify-center hover:border-[#2c2c64] transition-colors">
                            <Plus size={10} />
                          </button>
                          <button onClick={() => removeItem(item.slug)} className="ml-auto text-gray-300 hover:text-red-400 transition-colors">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                      <div className="shrink-0 text-right">
                        <span style={{ ...SLAB, fontWeight: 700, fontSize: "0.9rem" }}>${(item.price * item.qty).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 px-6 py-5 space-y-3 bg-white">
                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-500" style={INTER}>
                    <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm" style={INTER}>
                    <span style={{ color: shipping === 0 ? "#16a34a" : "#6b7280" }}>
                      Envío{shipping === 0 ? " (Gratis)" : ""}
                    </span>
                    <span style={{ color: shipping === 0 ? "#16a34a" : "#6b7280", fontWeight: shipping === 0 ? 600 : 400 }}>
                      {shipping === 0 ? "GRATIS" : `$${SHIPPING_COST.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-gray-400" style={INTER}>
                      Envío gratis en pedidos mayores a ${FREE_SHIPPING_THRESHOLD} USD
                    </p>
                  )}
                  <div className="flex justify-between pt-2 border-t border-gray-100">
                    <span style={{ ...SLAB, fontWeight: 700, fontSize: "1rem" }}>Total</span>
                    <span style={{ ...SLAB, fontWeight: 900, fontSize: "1.1rem", color: "#2c2c64" }}>${total.toFixed(2)} USD</span>
                  </div>
                </div>

                {/* Auth gate */}
                {!user ? (
                  <div className="bg-[#EFEFEF] p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <LogIn size={14} className="text-[#2c2c64]" />
                      <p style={{ ...INTER, fontSize: "0.78rem", fontWeight: 600, color: "#2c2c64" }}>
                        Inicia sesión para pagar
                      </p>
                    </div>
                    <p style={{ ...INTER, fontSize: "0.72rem", color: "#6b7280" }}>
                      Tu pedido quedará guardado de forma segura en tu cuenta.
                    </p>
                    <GoogleSignInButton label="Continuar con Google" />
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2 px-3 py-2 bg-[#EFEFEF]">
                      <img src={user.picture} alt={user.name} className="w-6 h-6 rounded-full" />
                      <span style={{ ...INTER, fontSize: "0.75rem", color: "#374151" }}>{user.name}</span>
                      <span className="ml-auto text-xs text-green-600 font-semibold" style={INTER}>✓ Autenticado</span>
                    </div>
                    <PayPalSection total={total} onSuccess={handleSuccess} />
                  </>
                )}

                <button
                  onClick={handleClose}
                  className="w-full py-2.5 border border-gray-200 text-gray-500 hover:border-[#2c2c64] hover:text-[#2c2c64] transition-colors"
                  style={{ ...INTER, fontSize: "0.78rem" }}
                >
                  Seguir comprando
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
