import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { router } from "./routes";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { OrderProvider } from "./context/OrderContext";
import "../styles/fonts.css";

const GOOGLE_CLIENT_ID = "249162613748-2k7oc4quhnpt2u1ho1430dn41gl0nie8.apps.googleusercontent.com";

function useGTM(id: string) {
  useEffect(() => {
    try {
      if (window.self !== window.top) return;
      if (document.getElementById("gtm-script")) return;
      const w = window as any;
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      const script = document.createElement("script");
      script.id = "gtm-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
      document.head.insertBefore(script, document.head.firstChild);

      if (document.getElementById("gtm-noscript")) return;
      const noscript = document.createElement("noscript");
      noscript.id = "gtm-noscript";
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${id}`;
      iframe.height = "0";
      iframe.width = "0";
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";
      noscript.appendChild(iframe);
      document.body.insertBefore(noscript, document.body.firstChild);
    } catch (_) {}
  }, [id]);
}

export default function App() {
  useGTM("GTM-N74PFBJG");
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <PayPalScriptProvider options={{ clientId: "AS6z5siPuXjnbu34ON3r9WnX38OL_XE2mFU-_JfSTs0G0SA66Up8XRuvHPGoFSeJuJ03rBU8fXyConVc", currency: "USD" }}>
        <AuthProvider>
          <OrderProvider>
            <CartProvider>
              <RouterProvider router={router} />
              {/* <CartDrawer /> */}
            </CartProvider>
          </OrderProvider>
        </AuthProvider>
      </PayPalScriptProvider>
    </GoogleOAuthProvider>
  );
}
