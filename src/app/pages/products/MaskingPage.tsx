import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PRODUCT_SPECS } from "../../data/productSpecs";
import h1 from "../../../imports/SILICON_-_SMTM_-_THREAD_MASK.png";
import h2 from "../../../imports/POLYESTER_-_SMPC023_-_TAPE.png";
import h3 from "../../../imports/POLYESTER_-_PB_-_DIE-CUT_DISCS.png";
import h4 from "../../../imports/SILICON_-_SMC_-_CORD-2.png";

const MONO = { fontFamily: "'Roboto Mono', monospace" } as React.CSSProperties;
const SLAB = { fontFamily: "'Roboto Slab', serif" } as React.CSSProperties;
const INTER = { fontFamily: "'Inter', sans-serif" } as React.CSSProperties;

const MASKING_SLUGS = [
  "smtm", "smsmpmt", "smsmwm",
  "ez", "pb", "af", "pr", "kp1", "pc", "smpcd",
  "smpc023", "smpc021", "smpc025", "smpc090",
  "smpc031", "smpc032", "smpc040", "smpc050",
  "smcord", "smss",
];

const products = MASKING_SLUGS.map((s) => PRODUCT_SPECS.find((p) => p.slug === s)).filter(Boolean) as typeof PRODUCT_SPECS;

const heroImgs = [h1, h2, h3, h4];

const features = [
  "Fácil aplicación y posicionamiento preciso",
  "Remoción rápida sin dejar residuos",
  "Resistencia a altas temperaturas hasta 300°C",
  "Eliminan cuellos de botella en producción",
  "Disponibles en Silicón, Polyester, Polymide y Crepe",
  "Compatibles con pintura, galvanizado y polvo",
];

const catColors: Record<string, string> = {
  "Thread Mask": "#2c2c64",
  "Die-Cut Discs": "#861e5c",
  "Tape": "#2c2c64",
  "Cord": "#861e5c",
  "Sheeting": "#2c2c64",
};

export function MaskingPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#000000] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff,#fff 1px,transparent 1px,transparent 32px)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <Link to="/productos" className="flex items-center gap-2 text-white/40 hover:text-white/70 mb-8 transition-colors" style={{ ...INTER, fontSize: "0.78rem" }}>
            ← Todos los productos
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#861e5c]" />
                <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Línea de Masking</span>
              </div>
              <h1 className="text-white leading-tight" style={{ ...SLAB, fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
                Sistemas de<br /><span className="text-[#861e5c]">Masking.</span>
              </h1>
              <p className="text-white/60 mt-6 max-w-xl leading-relaxed" style={{ ...INTER, fontWeight: 300, fontSize: "1rem" }}>
                Nuestro equipo de ingenieros te ayudará a resolver de manera sencilla tus necesidades de enmascaramiento, con productos de fácil aplicación, remoción rápida y sin residuos.
              </p>
            </div>
            {/* Hero product collage */}
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

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#861e5c]" />
                <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Beneficios</span>
              </div>
              <h2 className="text-[#000000] mb-6" style={{ ...SLAB, fontWeight: 900, fontSize: "1.8rem" }}>
                Resuelve los cuellos de botella<br /><span className="text-[#861e5c]">en tu manufactura.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8" style={{ ...INTER, fontWeight: 300, fontSize: "0.95rem" }}>
                Podrás optimizar tus procesos de acabado con productos diseñados para alta velocidad de producción, temperatura extrema y remoción sin residuos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[#861e5c] shrink-0 mt-0.5" />
                    <span className="text-gray-600" style={{ ...INTER, fontSize: "0.82rem" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-gray-200">
              {[
                { label: "Temp. máx.", value: "300°C" },
                { label: "Materiales", value: "7 tipos" },
                { label: "SKUs disponibles", value: "9,000+" },
                { label: "Aplicaciones", value: "Pintura, galvanizado, soldadura" },
              ].map((s) => (
                <div key={s.label} className="bg-[#EFEFEF] p-6">
                  <div className="text-[#2c2c64]" style={{ ...SLAB, fontWeight: 900, fontSize: "1.6rem" }}>{s.value}</div>
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
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Productos de Masking</span>
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
      <div className="bg-[#2c2c64] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white" style={{ ...SLAB, fontWeight: 900, fontSize: "1.4rem" }}>¿Necesitas masking a la medida?</h3>
            <p className="text-white/60 mt-1" style={{ ...INTER, fontWeight: 300, fontSize: "0.875rem" }}>Cuéntanos tu geometría y volumen — lo desarrollamos para ti.</p>
          </div>
          <Link to="/servicio" className="shrink-0 flex items-center gap-2 px-8 py-4 bg-[#861e5c] text-white hover:bg-[#6e1a4d] transition-colors" style={{ ...INTER, fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.08em" }}>
            SOLICITAR COTIZACIÓN <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
