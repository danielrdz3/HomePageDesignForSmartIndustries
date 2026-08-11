import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { PRODUCT_SPECS } from "../../data/productSpecs";
import h1 from "../../../imports/MBII_-_SMC_-_C_HOOKS.png";
import h2 from "../../../imports/MBII_-_SMSQV_-_SQUARE_V_HOOKS.png";
import h3 from "../../../imports/MBII_-_SMS_-_S_HOOKS.png";
import h4 from "../../../imports/MBII_-_SMV_-_V_HOOKS.png";

const MONO = { fontFamily: "'Roboto Mono', monospace" } as React.CSSProperties;
const SLAB = { fontFamily: "'Roboto Slab', serif" } as React.CSSProperties;
const INTER = { fontFamily: "'Inter', sans-serif" } as React.CSSProperties;

const HOOKS_SLUGS = ["smchooks", "smsqv", "smshooks", "smvhooks", "smcvhooks"];

const products = HOOKS_SLUGS.map((s) => PRODUCT_SPECS.find((p) => p.slug === s)).filter(Boolean) as typeof PRODUCT_SPECS;

const heroImgs = [h1, h2, h3, h4];

export function ColgadoPage() {
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
                <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Suspensión Industrial</span>
              </div>
              <h1 className="text-white leading-tight" style={{ ...SLAB, fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
                Sistemas de<br /><span className="text-[#861e5c]">Colgado.</span>
              </h1>
              <p className="text-white/60 mt-6 max-w-xl leading-relaxed" style={{ ...INTER, fontWeight: 300, fontSize: "1rem" }}>
                Ganchos tipo C, S, V, Square V y CV en alambre MBII de alta resistencia. Diseñados para líneas de recubrimiento, pintura electrostática y procesos de acabado industrial.
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

      {/* About */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#861e5c]" />
                <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Para líneas de acabado</span>
              </div>
              <h2 className="text-[#000000] mb-5 leading-tight" style={{ ...SLAB, fontWeight: 900, fontSize: "1.8rem" }}>
                El gancho correcto para<br /><span className="text-[#861e5c]">cada pieza.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6" style={{ ...INTER, fontWeight: 300, fontSize: "0.95rem" }}>
                Nuestros ganchos están diseñados para maximizar la capacidad de tu línea de recubrimiento, asegurando cobertura uniforme y mínimas marcas de contacto en las piezas terminadas.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8" style={{ ...INTER, fontWeight: 300, fontSize: "0.95rem" }}>
                Fabricados en alambre MBII de alta resistencia para soportar ciclos repetitivos de horno, baño químico y manipulación en líneas de producción continua.
              </p>
              <Link to="/servicio" className="inline-flex items-center gap-2 px-7 py-3 bg-[#2c2c64] text-white hover:bg-[#861e5c] transition-colors" style={{ ...INTER, fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.08em" }}>
                COTIZAR SISTEMA <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px bg-gray-200">
              {[
                { val: "80 kg", label: "Carga máx." },
                { val: "5", label: "Tipos de gancho" },
                { val: "MBII", label: "Material" },
                { val: "100%", label: "Personalizable" },
              ].map((s) => (
                <div key={s.label} className="bg-[#EFEFEF] p-6">
                  <div className="text-[#2c2c64]" style={{ ...SLAB, fontWeight: 900, fontSize: "1.6rem" }}>{s.val}</div>
                  <div className="text-gray-500 mt-1" style={{ ...MONO, fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="bg-[#EFEFEF] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Ganchos MBII</span>
          </div>
          <h2 className="text-[#000000] mb-10" style={{ ...SLAB, fontWeight: 900, fontSize: "1.8rem" }}>V, S, C y CV — y más.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-300">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/catalogo/${p.slug}`}
                className="group bg-white flex gap-5 p-6 overflow-hidden hover:shadow-lg hover:bg-[#2c2c64] transition-all duration-200"
              >
                <div className="bg-[#EFEFEF] group-hover:bg-white/10 flex items-center justify-center shrink-0 transition-colors" style={{ width: "100px", height: "100px" }}>
                  <img
                    src={p.img}
                    alt={p.sku}
                    className="w-full h-full object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.15"; }}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-[#861e5c] group-hover:text-[#861e5c] mb-1" style={{ ...SLAB, fontWeight: 900, fontSize: "1.1rem" }}>
                    {p.sku}
                  </div>
                  <div className="text-[#000000] group-hover:text-white font-semibold mb-2 transition-colors" style={{ ...INTER, fontSize: "0.85rem" }}>
                    {p.name}
                  </div>
                  <p className="text-gray-400 group-hover:text-white/60 leading-relaxed transition-colors" style={{ ...INTER, fontSize: "0.78rem", fontWeight: 300 }}>
                    {p.specs.find((s) => s.label === "Carga máx.")?.value ?? p.material}
                  </p>
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
            <h3 className="text-white" style={{ ...SLAB, fontWeight: 900, fontSize: "1.4rem" }}>¿Necesitas una geometría especial?</h3>
            <p className="text-white/60 mt-1" style={{ ...INTER, fontWeight: 300, fontSize: "0.875rem" }}>Fabricamos ganchos a la medida para cualquier forma de pieza o sistema de conveyor.</p>
          </div>
          <Link to="/servicio" className="shrink-0 flex items-center gap-2 px-8 py-4 bg-[#861e5c] text-white hover:bg-[#6e1a4d] transition-colors" style={{ ...INTER, fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.08em" }}>
            COTIZAR GANCHOS <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
