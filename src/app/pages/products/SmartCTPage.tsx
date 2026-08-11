import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PRODUCT_SPECS } from "../../data/productSpecs";

const MONO = { fontFamily: "'Roboto Mono', monospace" } as React.CSSProperties;
const SLAB = { fontFamily: "'Roboto Slab', serif" } as React.CSSProperties;
const INTER = { fontFamily: "'Inter', sans-serif" } as React.CSSProperties;

const SMARTCT_SLUGS = [
  "smdfpp", "smhcp", "smmfp", "smhwp", "smfp", "smcsp", "smmsp",
  "smsmfpp", "smvcp", "smsmdwp", "smwc", "smcpp", "smsmlpp",
  "smsfp", "smtpp", "smsp", "smspp", "smp", "smph", "smhp", "smhph",
  "smw", "smwpp", "smwppls",
  "smst", "smststar", "mdt",
];

const products = SMARTCT_SLUGS.map((s) => PRODUCT_SPECS.find((p) => p.slug === s)).filter(Boolean) as typeof PRODUCT_SPECS;

import h1 from "../../../imports/SILICON_-_SMDFPP_-_DUAL_FLANGED_PULL_PLUGS.png";
import h2 from "../../../imports/SILICON_-_SMHCP_-_CONE_PLUGS.png";
import h3 from "../../../imports/SILICON_-_SMST_-_TUBING.png";
import h4 from "../../../imports/SILICON_-_SMHWP_-_HOLLOW_WASHER_PLUGS-2.png";

const heroImgs = [h1, h2, h3, h4];

const uses = [
  "Protección durante embarque y exportación",
  "Almacenamiento de piezas terminadas",
  "Protección de extremos de tubos",
  "Cobertura de roscas y orificios expuestos",
  "Mantener artículos libres de contaminantes",
  "Proteger acabados superficiales",
];

const catColors: Record<string, string> = {
  "Plugs": "#2c2c64",
  "Tubing": "#861e5c",
};

export function SmartCTPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#2c2c64] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff,#fff 1px,transparent 1px,transparent 32px)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <Link to="/productos" className="flex items-center gap-2 text-white/40 hover:text-white/70 mb-8 transition-colors" style={{ ...INTER, fontSize: "0.78rem" }}>
            ← Todos los productos
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#861e5c]" />
                <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Protección Industrial</span>
              </div>
              <h1 className="text-white leading-tight" style={{ ...SLAB, fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
                Línea<br /><span className="text-[#861e5c]">SMART CT.</span>
              </h1>
              <p className="text-white/60 mt-6 max-w-xl leading-relaxed" style={{ ...INTER, fontWeight: 300, fontSize: "1rem" }}>
                Tapones y tubing de silicón para mantener los artículos protegidos durante embarque, almacenamiento y producción. Más de 9,000 productos estándar.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {heroImgs.map((src, i) => (
                <div key={i} className="bg-white/5 border border-white/10 flex items-center justify-center p-4" style={{ height: "160px" }}>
                  <img src={src} alt="" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#861e5c]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#6e1a4d]">
          {[{ val: "9,000+", label: "Productos estándar" }, { val: "100M+", label: "Partes en inventario" }, { val: "+20", label: "Años de experiencia" }, { val: "260°C", label: "Temperatura máx." }].map((s) => (
            <div key={s.label} className="bg-[#861e5c] px-6 py-5 text-center">
              <div className="text-white" style={{ ...SLAB, fontWeight: 900, fontSize: "2rem", lineHeight: 1 }}>{s.val}</div>
              <div className="text-white/60 mt-1" style={{ ...INTER, fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Uses */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Usos Principales</span>
          </div>
          <h2 className="text-[#000000] mb-6" style={{ ...SLAB, fontWeight: 900, fontSize: "1.8rem" }}>
            Protección integral<br /><span className="text-[#861e5c]">para tu producto.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {uses.map((u) => (
              <div key={u} className="flex items-start gap-3 p-4 bg-[#EFEFEF]">
                <CheckCircle size={15} className="text-[#861e5c] shrink-0 mt-0.5" />
                <span className="text-gray-600" style={{ ...INTER, fontSize: "0.875rem" }}>{u}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="bg-[#EFEFEF] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Tapones y Tubing</span>
          </div>
          <h2 className="text-[#000000] mb-10" style={{ ...SLAB, fontWeight: 900, fontSize: "1.8rem" }}>
            {products.length} productos disponibles.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px bg-gray-300">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/catalogo/${p.slug}`}
                className="group bg-white flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-white p-4 flex items-center justify-center" style={{ height: "180px" }}>
                  <img
                    src={p.img}
                    alt={p.sku}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.15"; }}
                  />
                </div>
                <div className="p-4 border-t-2 border-transparent group-hover:border-[#861e5c] transition-colors flex flex-col flex-1 bg-white">
                  <div className="text-[0.58rem] font-semibold mb-1 uppercase tracking-widest" style={{ ...MONO, color: catColors[p.category] ?? "#2c2c64" }}>
                    {p.category}
                  </div>
                  <div className="text-[#000000] font-black leading-none mb-1" style={{ ...SLAB, fontSize: "1rem" }}>{p.sku}</div>
                  <div className="text-[#861e5c] font-semibold leading-snug mt-auto" style={{ ...INTER, fontSize: "0.74rem" }}>{p.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#000000] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white" style={{ ...SLAB, fontWeight: 900, fontSize: "1.4rem" }}>¿No encuentras la medida que necesitas?</h3>
            <p className="text-white/60 mt-1" style={{ ...INTER, fontWeight: 300, fontSize: "0.875rem" }}>Fabricamos a medida. 9,000+ estándar o completamente personalizado.</p>
          </div>
          <Link to="/servicio" className="shrink-0 flex items-center gap-2 px-8 py-4 bg-[#861e5c] text-white hover:bg-[#6e1a4d] transition-colors" style={{ ...INTER, fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.08em" }}>
            COTIZAR AHORA <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
