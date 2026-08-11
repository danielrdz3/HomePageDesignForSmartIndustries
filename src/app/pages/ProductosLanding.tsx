import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const products = [
  { title: "Sistemas de Masking", desc: "Enmascaramiento de precisión de fácil aplicación y remoción rápida sin residuos.", href: "/productos/sistemas-de-masking", img: "https://images.unsplash.com/photo-1536356915696-c6bf1c01da46?w=600&h=400&fit=crop&auto=format", tag: "Alta precisión" },
  { title: "Línea SMART CT", desc: "9,000+ productos estándar para protección durante embarque y almacenamiento.", href: "/productos/smart-ct", img: "https://images.unsplash.com/photo-1700727448558-ba9c085d38f8?w=600&h=400&fit=crop&auto=format", tag: "9,000+ SKUs" },
  { title: "Protección de Superficies", desc: "Líderes en enmascarado industrial para recubrimiento, galvanizado y pintura.", href: "/productos/proteccion-de-superficies", img: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=600&h=400&fit=crop&auto=format", tag: "Industria líder" },
  { title: "Sistemas de Colgado", desc: "Ganchos tipo V, S, C y CV para líneas de recubrimiento y pintura electrostática.", href: "/productos/sistemas-de-colgado", img: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=600&h=400&fit=crop&auto=format", tag: "Múltiples estilos" },
  { title: "Sistema de Soldadura", desc: "Equipos y accesorios especializados para procesos de soldadura industrial.", href: "/productos/sistema-de-soldadura", img: "https://images.unsplash.com/photo-1716643863806-989dd76ae093?w=600&h=400&fit=crop&auto=format", tag: "Alta tecnología" },
  { title: "Hule OEM / COM", desc: "Productos de hule para industria automotriz, metalmecánica, eléctrica y más.", href: "/productos/hule-oem-com", img: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=600&h=400&fit=crop&auto=format", tag: "Multisector" },
];

export function ProductosLanding() {
  return (
    <div className="pt-16">
      <div className="bg-[#2c2c64] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff,#fff 1px,transparent 1px,transparent 32px)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}>Catálogo</span>
          </div>
          <h1 className="text-white leading-tight max-w-3xl" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            Línea de productos<br /><span className="text-[#861e5c]">industriales.</span>
          </h1>
          <p className="text-white/60 mt-6 max-w-xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "1rem" }}>
            Soluciones de enmascaramiento, protección y manufactura para los procesos industriales más exigentes.
          </p>
        </div>
      </div>

      <div className="bg-[#EFEFEF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-300">
            {products.map((p) => (
              <Link key={p.href} to={p.href} className="group bg-white overflow-hidden flex flex-col">
                <div className="overflow-hidden" style={{ height: "220px" }}>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7 flex flex-col flex-1 border-t-2 border-transparent group-hover:border-[#861e5c] transition-colors">
                  <div className="text-[#861e5c] mb-2" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.64rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.tag}</div>
                  <h2 className="text-[#000000] mb-3" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.1rem" }}>{p.title}</h2>
                  <p className="text-gray-500 leading-relaxed flex-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 300 }}>{p.desc}</p>
                  <div className="flex items-center gap-2 mt-5 text-[#2c2c64] group-hover:text-[#861e5c] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.06em" }}>
                    VER PRODUCTO <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
