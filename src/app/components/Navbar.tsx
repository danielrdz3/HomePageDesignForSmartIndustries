import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { Menu, X, ChevronDown, ShoppingCart, LogOut, LayoutDashboard, LogIn } from "lucide-react";
import logo from "../../imports/image-1.png";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { GoogleSignInButton } from "./GoogleSignInButton";

const navItems = [
  {
    label: "Productos",
    href: "/productos",
    children: [
      { label: "Sistemas de Masking", desc: "Enmascaramiento de precisión", href: "/productos/sistemas-de-masking" },
      { label: "Línea SMART CT", desc: "Protección 9,000+ productos", href: "/productos/smart-ct" },
      { label: "Protección de Superficies", desc: "Líderes en enmascarado", href: "/productos/proteccion-de-superficies" },
      { label: "Sistemas de Colgado", desc: "Soluciones de suspensión", href: "/productos/sistemas-de-colgado" },
      { label: "Sistema de Soldadura", desc: "Equipos especializados", href: "/productos/sistema-de-soldadura" },
      { label: "Hule OEM / COM", desc: "Industria automotriz", href: "/productos/hule-oem-com" },
    ],
  },
  { label: "Industrias", href: "/industrias" },
  { label: "Aplicaciones", href: "/aplicaciones" },
  { label: "Servicio y Soporte", href: "/servicio" },
  { label: "Nosotros", href: "/nosotros" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { itemCount, openCart } = useCart();
  const { user, login, logout } = useAuth();
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
        setShowLoginPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? "shadow-md" : "border-b border-gray-100"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="SMART CT" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-[#861e5c] hover:text-[#6e1a4d] transition-colors duration-150"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.05em" }}
                >
                  {item.label.toUpperCase()}
                  {item.children && <ChevronDown size={12} className="opacity-60" />}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[580px]">
                    <div className="bg-white shadow-2xl border-t-2 border-[#861e5c]">
                      <div className="grid grid-cols-2 gap-0">
                        {item.children.map((child, i) => (
                          <Link
                            key={i}
                            to={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 px-5 py-4 hover:bg-[#EFEFEF] transition-colors border-b border-gray-100 group"
                          >
                            <div className="w-0.5 h-full bg-[#861e5c] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                            <div>
                              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.82rem" }} className="text-[#000000] group-hover:text-[#861e5c] transition-colors">
                                {child.label}
                              </div>
                              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.74rem" }} className="text-gray-500 mt-0.5">
                                {child.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="px-5 py-3 bg-[#EFEFEF] border-t border-gray-100 flex items-center justify-between">
                        <Link to="/productos" onClick={() => setActiveDropdown(null)} className="text-[#2c2c64] hover:text-[#861e5c] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem" }}>
                          Ver todos los productos →
                        </Link>
                        <Link to="/catalogo" onClick={() => setActiveDropdown(null)} className="text-[#861e5c] hover:text-[#6e1a4d] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem" }}>
                          Catálogo completo →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Cart — hidden until prices are loaded
            <button
              onClick={openCart}
              className="relative flex items-center justify-center w-10 h-10 hover:bg-[#EFEFEF] transition-colors"
              aria-label="Carrito"
            >
              <ShoppingCart size={20} className="text-[#2c2c64]" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#861e5c] text-white text-[0.6rem] font-bold rounded-full w-5 h-5 flex items-center justify-center" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </button>
            */}

            {/* User menu */}
            <div className="relative" ref={userMenuRef}>
              {user ? (
                <>
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 hover:bg-[#EFEFEF] transition-colors"
                  >
                    <img src={user.picture} alt={user.name} className="w-7 h-7 rounded-full border border-[#861e5c]" />
                    <ChevronDown size={12} className="text-[#861e5c]" />
                  </button>
                  {userMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-52 bg-white shadow-xl border-t-2 border-[#861e5c] z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "0.85rem", color: "#2c2c64" }}>{user.name}</p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#6b7280" }}>{user.email}</p>
                      </div>
                      <Link
                        to="/dashboard"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 hover:bg-[#EFEFEF] transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#374151" }}
                      >
                        <LayoutDashboard size={14} className="text-[#2c2c64]" /> Mis pedidos
                      </Link>
                      <button
                        onClick={() => { logout(); setUserMenuOpen(false); }}
                        className="w-full flex items-center gap-2 px-4 py-3 hover:bg-[#EFEFEF] transition-colors border-t border-gray-100"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#6b7280" }}
                      >
                        <LogOut size={14} /> Cerrar sesión
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setShowLoginPopup(!showLoginPopup)}
                    className="flex items-center gap-2 px-4 py-2 border border-[#2c2c64] text-[#2c2c64] hover:bg-[#2c2c64] hover:text-white transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.06em" }}
                  >
                    <LogIn size={14} /> INGRESAR
                  </button>
                  {showLoginPopup && (
                    <div className="absolute right-0 top-full mt-2 bg-white shadow-xl border-t-2 border-[#861e5c] p-5 z-50 w-72">
                      <p style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "0.9rem", color: "#2c2c64", marginBottom: "4px" }}>
                        Iniciar sesión
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "#6b7280", marginBottom: "16px" }}>
                        Accede a tu cuenta para ver tus pedidos y pagar de forma segura.
                      </p>
                      <GoogleSignInButton onSuccess={() => setShowLoginPopup(false)} />
                    </div>
                  )}
                </div>
              )}
            </div>

            <button className="px-5 py-2 bg-[#2c2c64] text-white hover:bg-[#861e5c] transition-colors duration-150" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.06em" }}>
              COTIZAR
            </button>
          </div>

          {/* Mobile right */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Cart icon hidden until prices are loaded
            <button onClick={openCart} className="relative p-2" aria-label="Carrito">
              <ShoppingCart size={20} className="text-[#2c2c64]" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#861e5c] text-white text-[0.55rem] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            */}
            {user && (
              <Link to="/dashboard">
                <img src={user.picture} alt={user.name} className="w-7 h-7 rounded-full border border-[#861e5c]" />
              </Link>
            )}
            <button className="text-[#861e5c]" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between border-b border-gray-100">
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 text-[#861e5c] flex-1"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.85rem", letterSpacing: "0.04em" }}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                  {item.children && (
                    <button onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)} className="p-2 text-[#861e5c]">
                      <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && activeDropdown === item.label && (
                  <div className="pl-4 py-2 space-y-1">
                    {item.children.map((child, i) => (
                      <Link key={i} to={child.href} onClick={() => { setMobileOpen(false); setActiveDropdown(null); }} className="block py-2 text-gray-500 hover:text-[#861e5c]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem" }}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {!user ? (
              <div className="pt-3 space-y-3">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#6b7280" }}>Inicia sesión con Google:</p>
                <GoogleSignInButton onSuccess={() => setMobileOpen(false)} />
              </div>
            ) : (
              <div className="pt-3 space-y-2">
                <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 py-2 text-[#2c2c64]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
                  <LayoutDashboard size={14} /> Mis pedidos
                </Link>
                <button onClick={() => { logout(); setMobileOpen(false); }} className="flex items-center gap-2 py-2 text-gray-400" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
                  <LogOut size={14} /> Cerrar sesión
                </button>
              </div>
            )}
            <div className="pt-2">
              <button className="w-full py-3 bg-[#2c2c64] text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.06em" }}>
                COTIZAR
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
