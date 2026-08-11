import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PRODUCT_SPECS } from "../../data/productSpecs";
import h1 from "../../../imports/NEOPRENE_GREEN-BLACK_-_SMGN-SMBN_-_PLUGS.png";
import h2 from "../../../imports/EPDM_-_SMEPFP_-_FLANGELESS_PLUGS.png";
import h3 from "../../../imports/EPDM_-_SMPP_-_PULL_PLUGS.png";
import h4 from "../../../imports/SILICON_-_SMSS_-_SHEETING.png";

const MONO = { fontFamily: "'Roboto Mono', monospace" } as React.CSSProperties;
const SLAB = { fontFamily: "'Roboto Slab', serif" } as React.CSSProperties;
const INTER = { fontFamily: "'Inter', sans-serif" } as React.CSSProperties;

const HULE_SLUGS = ["smgnbn", "smepfp", "smpp", "smrc", "smss"];

const products = HULE_SLUGS.map((s) => PRODUCT_SPECS.find((p) => p.slug === s)).filter(Boolean) as typeof PRODUCT_SPECS;

const heroImgs = [h1, h2, h3, h4];

const specs = [
  "Hule natural y sintético (EPDM, NBR, Neoprene, Silicón)",
  "Tolerancias dimensionales de precisión OEM",
  "Certificación y validación con fabricante",
  "Resistencia química y térmica configurable",
  "Colores y durezas Shore personalizados",
  "Volúmenes desde prototipo hasta producción masiva",
];

const industries = [
  { name: "Automotriz", clients: "Honda, Tesla, Ford, General Motors" },
  { name: "Metalmecánica", clients: "Fabricantes de maquinaria y herramienta" },
  { name: "Eléctrica", clients: "Transformadores, tableros y cableado" },
  { name: "Agrícola Pesado", clients: "John Deere, Polaris, International" },
  { name: "Electrodomésticos", clients: "Líneas blanca y marrón" },
  { name: "Control de Fluidos", clients: "Válvulas, bombas y tuberías industriales" },
];

export function HulePage() {
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
                <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Manufactura de Hule</span>
              </div>
              <h1 className="text-white leading-tight" style={{ ...SLAB, fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
                Hule OEM<br /><span className="text-[#861e5c]">y COM.</span>
              </h1>
              <p className="text-white/60 mt-6 max-w-xl leading-relaxed" style={{ ...INTER, fontWeight: 300, fontSize: "1rem" }}>
                Tapones, plugs y láminas en Neoprene, EPDM y materiales especiales para la industria automotriz, metalmecánica, eléctrica y control de fluidos.
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

      {/* Specs */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#861e5c]" />
                <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Especificaciones</span>
              </div>
              <h2 className="text-[#000000] mb-5 leading-tight" style={{ ...SLAB, fontWeight: 900, fontSize: "1.8rem" }}>
                Tu idea —<br /><span className="text-[#861e5c]">la desarrollamos.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8" style={{ ...INTER, fontWeight: 300, fontSize: "0.95rem" }}>
                Fabricamos piezas de hule con las especificaciones exactas de tu proceso. Desde prototipos de ingeniería hasta producción en serie para los fabricantes más exigentes del mundo automotriz e industrial.
              </p>
              <div className="space-y-3 mb-8">
                {specs.map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-[#861e5c] shrink-0 mt-0.5" />
                    <span className="text-gray-600" style={{ ...INTER, fontSize: "0.875rem" }}>{s}</span>
                  </div>
                ))}
              </div>
              <Link to="/servicio" className="inline-flex items-center gap-2 px-7 py-3 bg-[#2c2c64] text-white hover:bg-[#861e5c] transition-colors" style={{ ...INTER, fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.08em" }}>
                INICIAR PROYECTO <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-px bg-gray-200">
              {[
                { mat: "Neoprene", prop: "Resistente a aceites, combustibles y temperatura moderada" },
                { mat: "EPDM", prop: "Resistente a UV, ozono, vapor y temperaturas extremas" },
                { mat: "Silicón", prop: "Alta temperatura, reutilizable, lámina para máscaras a medida" },
              ].map((m) => (
                <div key={m.mat} className="bg-[#EFEFEF] p-5 flex gap-4 items-start">
                  <div className="w-2 h-2 bg-[#861e5c] shrink-0 mt-2" />
                  <div>
                    <div className="text-[#2c2c64]" style={{ ...SLAB, fontWeight: 700, fontSize: "0.95rem" }}>{m.mat}</div>
                    <div className="text-gray-500 mt-1" style={{ ...INTER, fontSize: "0.82rem", fontWeight: 300 }}>{m.prop}</div>
                  </div>
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
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Productos de Hule</span>
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
                  <div className="text-[0.58rem] font-semibold mb-1 uppercase tracking-widest text-[#2c2c64]" style={MONO}>
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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Sectores que Atendemos</span>
          </div>
          <h2 className="text-[#000000] mb-10" style={{ ...SLAB, fontWeight: 900, fontSize: "1.8rem" }}>Presencia en 6 industrias.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-300">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-[#EFEFEF] p-6 group hover:bg-[#2c2c64] transition-colors duration-200">
                <h3 className="text-[#000000] group-hover:text-white mb-2 transition-colors" style={{ ...SLAB, fontWeight: 700, fontSize: "1rem" }}>{ind.name}</h3>
                <p className="text-gray-500 group-hover:text-white/60 leading-relaxed transition-colors" style={{ ...INTER, fontSize: "0.82rem", fontWeight: 300 }}>{ind.clients}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#000000] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white" style={{ ...SLAB, fontWeight: 900, fontSize: "1.4rem" }}>¿Tienes un dibujo o especificación técnica?</h3>
            <p className="text-white/60 mt-1" style={{ ...INTER, fontWeight: 300, fontSize: "0.875rem" }}>Envíanos tu plano y desarrollamos el prototipo en tiempo récord.</p>
          </div>
          <Link to="/servicio" className="shrink-0 flex items-center gap-2 px-8 py-4 bg-[#861e5c] text-white hover:bg-[#6e1a4d] transition-colors" style={{ ...INTER, fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.08em" }}>
            ENVIAR ESPECIFICACIÓN <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
