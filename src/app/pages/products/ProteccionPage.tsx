import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PRODUCT_SPECS } from "../../data/productSpecs";
import h1 from "../../../imports/SILICON_-_SMAZ_-_AZ_CAPS.png";
import h2 from "../../../imports/SILICON_-_SMZC_-_ZARK_CAPS-2.png";
import h3 from "../../../imports/EPDM_-_SMRC_-_CAPS.png";
import h4 from "../../../imports/VYNIL_-_SMPS_-_CAPS-2.png";

const MONO = { fontFamily: "'Roboto Mono', monospace" } as React.CSSProperties;
const SLAB = { fontFamily: "'Roboto Slab', serif" } as React.CSSProperties;
const INTER = { fontFamily: "'Inter', sans-serif" } as React.CSSProperties;

const CAPS_SLUGS = ["smaz", "smzc", "smsc", "smrc", "smps"];

const products = CAPS_SLUGS.map((s) => PRODUCT_SPECS.find((p) => p.slug === s)).filter(Boolean) as typeof PRODUCT_SPECS;

const heroImgs = [h1, h2, h3, h4];

const features = [
  "Sistemas para pintura electrostática y polvo",
  "Compatibles con hornos de curado a alta temperatura",
  "Protección de extremos y orificios críticos",
  "Remoción limpia sin marcas ni residuos",
  "Disponibles en Silicón, EPDM y Vinilo",
  "Desde temperatura ambiente hasta 260°C",
];

const catColors: Record<string, string> = {
  "Caps": "#2c2c64",
};

export function ProteccionPage() {
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
                <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Caps y Protectores</span>
              </div>
              <h1 className="text-white leading-tight" style={{ ...SLAB, fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
                Protección de<br /><span className="text-[#861e5c]">Superficies.</span>
              </h1>
              <p className="text-white/60 mt-6 max-w-xl leading-relaxed" style={{ ...INTER, fontWeight: 300, fontSize: "1rem" }}>
                Caps de silicón, EPDM y vinilo para proteger extremos de tubos, varillas y perfiles durante recubrimiento, almacenaje y transporte.
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

      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#861e5c]" />
                <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Versatilidad Total</span>
              </div>
              <h2 className="text-[#000000] mb-5 leading-tight" style={{ ...SLAB, fontWeight: 900, fontSize: "1.8rem" }}>
                Confía en nosotros —<br /><span className="text-[#861e5c]">sorpréndete.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8" style={{ ...INTER, fontWeight: 300, fontSize: "0.95rem" }}>
                Nuestra línea de caps se adapta a cualquier industria y proceso. Desde protección básica a temperatura ambiente hasta caps de alta temperatura para hornos industriales.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[#861e5c] shrink-0 mt-0.5" />
                    <span className="text-gray-600" style={{ ...INTER, fontSize: "0.82rem" }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/servicio" className="inline-flex items-center gap-2 px-7 py-3 bg-[#2c2c64] text-white hover:bg-[#861e5c] transition-colors" style={{ ...INTER, fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.08em" }}>
                SOLICITAR ASESORÍA <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px bg-gray-200">
              {[
                { label: "Silicón", sublabel: "Hasta 260°C" },
                { label: "EPDM", sublabel: "Resistencia a UV y ozono" },
                { label: "Vinilo", sublabel: "Económico, temperatura ambiente" },
                { label: "A la medida", sublabel: "Cualquier diámetro o forma" },
              ].map((s) => (
                <div key={s.label} className="bg-[#EFEFEF] p-6">
                  <div className="text-[#2c2c64]" style={{ ...SLAB, fontWeight: 900, fontSize: "1.1rem" }}>{s.label}</div>
                  <div className="text-gray-500 mt-1" style={{ ...INTER, fontSize: "0.75rem", fontWeight: 300 }}>{s.sublabel}</div>
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
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Caps y Protectores de Extremo</span>
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
                  <div className="text-[0.58rem] font-semibold mb-1 uppercase tracking-widest" style={{ ...MONO, color: catColors[p.category] ?? "#861e5c" }}>
                    {p.material}
                  </div>
                  <div className="text-[#000000] font-black leading-none mb-1" style={{ ...SLAB, fontSize: "1rem" }}>{p.sku}</div>
                  <div className="text-[#861e5c] font-semibold leading-snug mt-auto" style={{ ...INTER, fontSize: "0.74rem" }}>{p.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Industries */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-[#000000] mb-6" style={{ ...SLAB, fontWeight: 900, fontSize: "1.2rem" }}>Industrias que confían en nosotros.</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-300">
            {["Aeroespacial", "Automotriz", "Electrónica", "Manufactura General", "Equipos Agrícolas", "Metalmecánica", "Eléctrica", "Electrodomésticos"].map((ind) => (
              <div key={ind} className="bg-[#EFEFEF] px-6 py-5 text-center">
                <span className="text-[#000000]" style={{ ...INTER, fontWeight: 600, fontSize: "0.82rem" }}>{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
