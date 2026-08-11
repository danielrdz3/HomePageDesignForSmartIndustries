import { RouterProvider } from "react-router";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { router } from "./routes";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { OrderProvider } from "./context/OrderContext";
import { CartDrawer } from "./components/CartDrawer";
import "../styles/fonts.css";

// Replace with your Google OAuth Client ID from console.cloud.google.com
const GOOGLE_CLIENT_ID = "249162613748-2k7oc4quhnpt2u1ho1430dn41gl0nie8.apps.googleusercontent.com";

export default function App() {
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
