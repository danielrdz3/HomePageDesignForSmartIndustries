import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useMeta } from "../hooks/useMeta";

const industries = [
  {
    name: "Automotriz",
    desc: "Soluciones de hule OEM/COM, masking y protección para líneas de ensamble, pintura y recubrimiento de fabricantes líderes globales como Honda, Tesla y más.",
    img: "https://images.unsplash.com/photo-1739488754789-5a2e85ee6a79?w=700&h=450&fit=crop&auto=format",
    products: ["Hule OEM/COM", "Sistemas de Masking", "Protección de Superficies"],
  },
  {
    name: "Equipos Agrícolas Pesados",
    desc: "Protección y enmascaramiento para maquinaria agrícola de alto rendimiento. Productos resistentes a condiciones extremas de campo y manufactura.",
    img: "https://images.unsplash.com/photo-1610891015188-5369212db097?w=700&h=450&fit=crop&auto=format",
    products: ["Línea SMART CT", "Sistemas de Colgado", "Hule OEM/COM"],
  },
  {
    name: "Metalmecánica",
    desc: "Sistemas de colgado, masking y protección de superficies adaptados para líneas de manufactura metálica, galvanizado y pintura electrostática.",
    img: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=700&h=450&fit=crop&auto=format",
    products: ["Sistemas de Colgado", "Sistemas de Masking", "Sistema de Soldadura"],
  },
  {
    name: "Eléctrica",
    desc: "Componentes de protección y enmascaramiento para procesos de recubrimiento de piezas eléctricas y electrónicas con alta exigencia de precisión.",
    img: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=700&h=450&fit=crop&auto=format",
    products: ["Sistemas de Masking", "Línea SMART CT", "Protección de Superficies"],
  },
  {
    name: "Electrodomésticos",
    desc: "Protección de acabados, enmascaramiento de alta precisión y sistemas de colgado para líneas de producción de electrodomésticos.",
    img: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=700&h=450&fit=crop&auto=format",
    products: ["Sistemas de Masking", "Sistemas de Colgado", "Línea SMART CT"],
  },
  {
    name: "Control de Fluidos y Tubería",
    desc: "Tapones, protectores de roscas y tubos, y soluciones de enmascaramiento para la industria de fluidos, válvulas y tubería industrial.",
    img: "https://images.unsplash.com/photo-1716643863806-989dd76ae093?w=700&h=450&fit=crop&auto=format",
    products: ["Línea SMART CT", "Hule OEM/COM", "Protección de Superficies"],
  },
];

export function Industrias() {
  useMeta({ title: "Industrias | Smart Industries", description: "Soluciones de masking y protección para automotriz, aeroespacial, electrónica, soldadura y más industrias en México." });
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#000000] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff,#fff 1px,transparent 1px,transparent 32px)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}>Sectores</span>
          </div>
          <h1 className="text-white leading-tight max-w-3xl" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            Industrias que<br /><span className="text-[#861e5c]">servimos.</span>
          </h1>
          <p className="text-white/60 mt-6 max-w-xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "1rem" }}>
            Más de 20 años de experiencia desarrollando soluciones a la medida para los sectores industriales más exigentes de México y el mundo.
          </p>
        </div>
      </div>

      {/* Industries grid */}
      <div className="bg-[#EFEFEF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-px bg-gray-300">
            {industries.map((ind, i) => (
              <div key={ind.name} className={`bg-white grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={`overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`} style={{ height: "320px" }}>
                  <img src={ind.img} alt={ind.name} className="w-full h-full object-cover" />
                </div>
                <div className={`p-12 flex flex-col justify-center ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <h2 className="text-[#000000] mb-4" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "1.5rem" }}>{ind.name}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.9rem" }}>{ind.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ind.products.map((p) => (
                      <span key={p} className="px-3 py-1 bg-[#EFEFEF] text-[#2c2c64] text-xs font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{p}</span>
                    ))}
                  </div>
                  <Link to="/productos" className="inline-flex items-center gap-2 text-[#861e5c] hover:gap-3 transition-all" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.06em" }}>
                    VER SOLUCIONES <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#2c2c64] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-white mb-4" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "2rem" }}>¿Tu industria no está en la lista?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>Desarrollamos soluciones a la medida para cualquier proceso industrial. Contáctanos y encontremos juntos la respuesta.</p>
          <Link to="/servicio" className="inline-flex items-center gap-2 px-8 py-4 bg-[#861e5c] text-white hover:bg-[#6e1a4d] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.08em" }}>
            HABLAR CON UN ASESOR <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
