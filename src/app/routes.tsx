import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { Nosotros } from "./pages/Nosotros";
import { Industrias } from "./pages/Industrias";
import { Aplicaciones } from "./pages/Aplicaciones";
import { Servicio } from "./pages/Servicio";
import { ProductosLanding } from "./pages/ProductosLanding";
import { MaskingPage } from "./pages/products/MaskingPage";
import { SmartCTPage } from "./pages/products/SmartCTPage";
import { ProteccionPage } from "./pages/products/ProteccionPage";
import { ColgadoPage } from "./pages/products/ColgadoPage";
import { SoldaduraPage } from "./pages/products/SoldaduraPage";
import { HulePage } from "./pages/products/HulePage";
import { Catalogo } from "./pages/Catalogo";
import { ProductDetail } from "./pages/ProductDetail";
import { Dashboard } from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "nosotros", Component: Nosotros },
      { path: "industrias", Component: Industrias },
      { path: "aplicaciones", Component: Aplicaciones },
      { path: "servicio", Component: Servicio },
      { path: "productos", Component: ProductosLanding },
      { path: "productos/sistemas-de-masking", Component: MaskingPage },
      { path: "productos/smart-ct", Component: SmartCTPage },
      { path: "productos/proteccion-de-superficies", Component: ProteccionPage },
      { path: "productos/sistemas-de-colgado", Component: ColgadoPage },
      { path: "productos/sistema-de-soldadura", Component: SoldaduraPage },
      { path: "productos/hule-oem-com", Component: HulePage },
      { path: "catalogo", Component: Catalogo },
      { path: "catalogo/:slug", Component: ProductDetail },
      { path: "dashboard", Component: Dashboard },
    ],
  },
]);
