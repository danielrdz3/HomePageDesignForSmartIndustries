import { Link, useParams } from "react-router";
import { ArrowRight, ArrowLeft, CheckCircle, Package, Thermometer, Layers, Wrench, ShoppingCart } from "lucide-react";
import { PRODUCT_SPECS, getProduct } from "../data/productSpecs";
import { useCart, PRODUCT_PRICE } from "../context/CartContext";

const MONO: React.CSSProperties = { fontFamily: "'Roboto Mono', monospace" };
const SLAB: React.CSSProperties = { fontFamily: "'Roboto Slab', serif" };
const INTER: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProduct(slug ?? "");
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="pt-16 min-h-screen bg-[#EFEFEF] flex flex-col items-center justify-center gap-6">
        <p className="text-gray-500" style={INTER}>Producto no encontrado.</p>
        <Link to="/catalogo" className="px-6 py-3 bg-[#2c2c64] text-white text-sm" style={INTER}>
          ← Volver al catálogo
        </Link>
      </div>
    );
  }

  const relatedProducts = product.related
    .map((r) => PRODUCT_SPECS.find((p) => p.slug === r))
    .filter(Boolean) as typeof PRODUCT_SPECS;

  const tempSpec = product.specs.find((s) => s.label.toLowerCase().includes("temp"));
  const materialSpec = product.specs.find((s) => s.label === "Material");

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-[#2c2c64] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff,#fff 1px,transparent 1px,transparent 32px)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8" style={{ ...INTER, fontSize: "0.75rem" }}>
            <Link to="/catalogo" className="text-white/40 hover:text-white/70 transition-colors flex items-center gap-1">
              <ArrowLeft size={12} /> Catálogo
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/40">{product.category}</span>
            <span className="text-white/20">/</span>
            <span className="text-[#861e5c]">{product.sku}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#861e5c]" />
                <span
                  className="text-[#861e5c] uppercase tracking-[0.2em]"
                  style={{ ...MONO, fontSize: "0.62rem", fontWeight: 500 }}
                >
                  {product.material} · {product.category}
                </span>
              </div>
              <h1
                className="text-white leading-tight mb-2"
                style={{ ...SLAB, fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                {product.sku}
              </h1>
              <h2 className="text-[#861e5c] mb-5" style={{ ...SLAB, fontWeight: 700, fontSize: "1.3rem" }}>
                {product.name}
              </h2>
              <p className="text-white/50 leading-relaxed mb-6" style={{ ...INTER, fontWeight: 300, fontSize: "0.9rem" }}>
                {product.tagline}
              </p>

              {/* Quick pills */}
              <div className="flex flex-wrap gap-2">
                {materialSpec && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 border border-white/15 bg-white/5">
                    <Layers size={11} className="text-[#861e5c]" />
                    <span className="text-white/70" style={{ ...MONO, fontSize: "0.6rem", letterSpacing: "0.08em" }}>
                      {materialSpec.value}
                    </span>
                  </div>
                )}
                {tempSpec && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 border border-white/15 bg-white/5">
                    <Thermometer size={11} className="text-[#861e5c]" />
                    <span className="text-white/70" style={{ ...MONO, fontSize: "0.6rem", letterSpacing: "0.08em" }}>
                      {tempSpec.value}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Product image */}
            <div
              className="flex items-center justify-center bg-white/5 border border-white/10 p-8 lg:p-12"
              style={{ minHeight: "300px" }}
            >
              <img
                src={product.img}
                alt={`${product.sku} - ${product.name}`}
                className="w-full object-contain"
                style={{ maxHeight: "260px" }}
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.2"; }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: description, features, applications */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-[#861e5c]" />
                <span className="text-[#861e5c] uppercase tracking-[0.15em]" style={{ ...MONO, fontSize: "0.62rem", fontWeight: 500 }}>
                  Descripción
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed" style={{ ...INTER, fontWeight: 300, fontSize: "0.95rem" }}>
                {product.description}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-[#861e5c]" />
                <span className="text-[#861e5c] uppercase tracking-[0.15em]" style={{ ...MONO, fontSize: "0.62rem", fontWeight: 500 }}>
                  Características Principales
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 p-4 bg-[#EFEFEF]">
                    <CheckCircle size={14} className="text-[#861e5c] shrink-0 mt-0.5" />
                    <span className="text-gray-700" style={{ ...INTER, fontSize: "0.85rem" }}>{f}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-[#861e5c]" />
                <span className="text-[#861e5c] uppercase tracking-[0.15em]" style={{ ...MONO, fontSize: "0.62rem", fontWeight: 500 }}>
                  Aplicaciones
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span
                    key={a}
                    className="px-4 py-2 border border-[#2c2c64]/20 text-[#2c2c64]"
                    style={{ ...INTER, fontSize: "0.78rem", fontWeight: 500 }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right: specs + CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-[#861e5c]" />
                <span className="text-[#861e5c] uppercase tracking-[0.15em]" style={{ ...MONO, fontSize: "0.62rem", fontWeight: 500 }}>
                  Especificaciones
                </span>
              </div>

              <div className="bg-[#2c2c64] overflow-hidden">
                <div className="px-5 py-3 bg-[#861e5c] flex items-center gap-2">
                  <Wrench size={12} className="text-white/80" />
                  <span className="text-white text-xs font-semibold tracking-widest uppercase" style={MONO}>
                    {product.sku}
                  </span>
                </div>
                <div className="divide-y divide-white/10">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="px-5 py-3.5 flex justify-between items-start gap-4">
                      <span className="text-white/50 shrink-0" style={{ ...INTER, fontSize: "0.72rem" }}>
                        {spec.label}
                      </span>
                      <span className="text-white text-right" style={{ ...INTER, fontSize: "0.78rem", fontWeight: 500 }}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {/* Add to cart — hidden until prices are confirmed
                <button
                  onClick={() => addItem({ slug: product.slug, sku: product.sku, name: product.name, img: product.img })}
                  className="w-full flex items-center justify-between px-6 py-4 bg-[#861e5c] text-white hover:bg-[#6e1a4d] transition-colors group"
                  style={{ ...INTER, fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.08em" }}
                >
                  <span className="flex items-center gap-2">
                    <ShoppingCart size={14} />
                    AGREGAR AL CARRITO
                  </span>
                  <span className="text-white/70">${PRODUCT_PRICE.toFixed(2)} USD</span>
                </button>
                */}
                <Link
                  to="/servicio"
                  className="flex items-center justify-between px-6 py-4 border border-[#2c2c64] text-[#2c2c64] hover:bg-[#2c2c64] hover:text-white transition-colors"
                  style={{ ...INTER, fontWeight: 500, fontSize: "0.78rem", letterSpacing: "0.08em" }}
                >
                  SOLICITAR COTIZACIÓN
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/servicio"
                  className="flex items-center justify-between px-6 py-4 border border-gray-200 text-gray-400 hover:border-[#2c2c64] hover:text-[#2c2c64] transition-colors"
                  style={{ ...INTER, fontWeight: 500, fontSize: "0.78rem", letterSpacing: "0.08em" }}
                >
                  SOLICITAR MUESTRA
                  <Package size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="bg-[#EFEFEF] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#861e5c]" />
              <span className="text-[#861e5c] uppercase tracking-[0.15em]" style={{ ...MONO, fontSize: "0.62rem", fontWeight: 500 }}>
                Productos Relacionados
              </span>
            </div>
            <h3 className="text-[#000000] mb-10" style={{ ...SLAB, fontWeight: 900, fontSize: "1.5rem" }}>
              También te puede interesar.
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-300">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/catalogo/${rel.slug}`}
                  className="group bg-white flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-white p-6 flex items-center justify-center" style={{ height: "180px" }}>
                    <img
                      src={rel.img}
                      alt={rel.sku}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.2"; }}
                    />
                  </div>
                  <div className="p-4 border-t-2 border-transparent group-hover:border-[#861e5c] transition-colors flex-1">
                    <div className="text-[0.58rem] font-semibold mb-1 uppercase tracking-widest text-[#2c2c64]" style={MONO}>
                      {rel.category}
                    </div>
                    <div className="text-[#000000] font-black leading-none mb-1" style={{ ...SLAB, fontSize: "1rem" }}>
                      {rel.sku}
                    </div>
                    <div className="text-[#861e5c] font-semibold leading-snug" style={{ ...INTER, fontSize: "0.74rem" }}>
                      {rel.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="bg-[#000000] py-14">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white" style={{ ...SLAB, fontWeight: 900, fontSize: "1.3rem" }}>
              ¿Necesitas una medida especial?
            </h3>
            <p className="text-white/50 mt-1" style={{ ...INTER, fontWeight: 300, fontSize: "0.85rem" }}>
              Fabricamos a la medida con los mismos materiales y estándares de calidad.
            </p>
          </div>
          <Link
            to="/servicio"
            className="shrink-0 flex items-center gap-2 px-8 py-4 bg-[#861e5c] text-white hover:bg-[#6e1a4d] transition-colors"
            style={{ ...INTER, fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.08em" }}
          >
            CONTACTAR AHORA <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
