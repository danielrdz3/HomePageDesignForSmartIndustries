import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ClientCarousel } from "./components/ClientCarousel";

export function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="min-h-screen bg-[#EFEFEF] text-foreground overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <ClientCarousel />
      <Footer />
    </div>
  );
}
