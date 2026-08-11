import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import imgMasking from "../../imports/SILICON_-_SMTM_-_THREAD_MASK.png";
import imgSmartCT from "../../imports/SILICON_-_SMDFPP_-_DUAL_FLANGED_PULL_PLUGS.png";
import imgProtection from "../../imports/SILICON_-_SMAZ_-_AZ_CAPS.png";
import imgHanging from "../../imports/MBII_-_SMC_-_C_HOOKS.png";
import imgWelding from "../../imports/SILICON_-_SMC_-_CORD.png";
import imgRubber from "../../imports/NEOPRENE_GREEN-BLACK_-_SMGN-SMBN_-_PLUGS.png";

const products = [
  { id: "masking", title: "Sistemas de Masking", subtitle: "Enmascaramiento de precisión", tag: "Alta precisión", img: imgMasking, alt: "Thread Mask SMTM", to: "/productos/sistemas-de-masking" },
  { id: "smart-ct", title: "Línea SMART CT", subtitle: "Protección de productos", tag: "9,000+ SKUs", img: imgSmartCT, alt: "Dual Flanged Pull Plugs SMDFPP", to: "/productos/smart-ct" },
  { id: "protection", title: "Protección de Superficies", subtitle: "Líderes en enmascarado", tag: "Industria líder", img: imgProtection, alt: "AZ Caps SMAZ", to: "/productos/proteccion-de-superficies" },
  { id: "hanging", title: "Sistemas de Colgado", subtitle: "Suspensión industrial", tag: "Múltiples estilos", img: imgHanging, alt: "C Hooks MBII", to: "/productos/sistemas-de-colgado" },
  { id: "welding", title: "Sistema de Soldadura", subtitle: "Soluciones especializadas", tag: "Alta temperatura", img: imgWelding, alt: "Silicon Cord SMC", to: "/productos/sistema-de-soldadura" },
  { id: "rubber", title: "Hule OEM / COM", subtitle: "Industria automotriz", tag: "Multisector", img: imgRubber, alt: "Neoprene Plugs SMGN SMBN", to: "/productos/hule-oem-com" },
];

export function ProductMenu() {
  return (
    <section id="products" className="bg-[#EFEFEF] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#861e5c]" />
              <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}>
                Línea de Productos
              </span>
            </div>
            <h2 className="text-[#000000] leading-tight" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Soluciones industriales<br /><span className="text-[#861e5c]">para cada proceso.</span>
            </h2>
          </div>
          <Link to="/catalogo" className="flex items-center gap-2 px-6 py-3 bg-[#2c2c64] text-white hover:bg-[#23235a] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.06em" }}>
            VER CATÁLOGO COMPLETO <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-300">
          {products.map((product) => (
            <Link key={product.id} to={product.to} className="group bg-white flex overflow-hidden hover:shadow-lg transition-all duration-200 relative">
              <div className="w-28 shrink-0 bg-white flex items-center justify-center p-2">
                <img src={product.img} alt={product.alt} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" style={{ maxHeight: "96px" }} />
              </div>
              <div className="flex-1 p-4 flex flex-col justify-center min-h-[100px]">
                <div className="text-[#861e5c] mb-1" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>{product.tag}</div>
                <div className="text-[#000000] group-hover:text-[#2c2c64] transition-colors leading-snug" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "0.9rem" }}>{product.title}</div>
                <div className="text-gray-500 mt-0.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.75rem" }}>{product.subtitle}</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2c2c64] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-300">
          {[{ label: "Automotriz", icon: "🚗" }, { label: "Agrícola Pesado", icon: "🌾" }, { label: "Metalmecánica", icon: "⚙️" }, { label: "Eléctrica", icon: "⚡" }].map((ind) => (
            <div key={ind.label} className="bg-[#2c2c64] px-6 py-5 flex items-center gap-3 hover:bg-[#861e5c] transition-colors duration-200 cursor-pointer">
              <span className="text-xl">{ind.icon}</span>
              <span className="text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.04em" }}>{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
