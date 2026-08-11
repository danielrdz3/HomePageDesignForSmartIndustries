import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const applications = [
  {
    title: "Pintura Electrostática",
    desc: "Enmascaramiento de zonas críticas antes del proceso de pintura en polvo. Remoción rápida sin residuos ni marcas.",
    icon: "🎨",
    products: ["Sistemas de Masking", "Protección de Superficies"],
  },
  {
    title: "Galvanizado y Cromado",
    desc: "Tapones y masking de alta resistencia química para proteger roscas, orificios y superficies durante baños galvánicos.",
    icon: "⚗️",
    products: ["Línea SMART CT", "Hule OEM/COM"],
  },
  {
    title: "Recubrimiento en Polvo",
    desc: "Soluciones de enmascaramiento flexibles y reutilizables diseñadas para soportar altas temperaturas en hornos de curado.",
    icon: "🔥",
    products: ["Sistemas de Masking", "Línea SMART CT"],
  },
  {
    title: "Ensamble Automotriz",
    desc: "Hule OEM/COM y componentes de protección para líneas de ensamble con estándares de fabricantes de clase mundial.",
    icon: "🚗",
    products: ["Hule OEM/COM", "Protección de Superficies"],
  },
  {
    title: "Embarque y Almacenamiento",
    desc: "Protectores de tubos, tapones y recubrimientos que mantienen las piezas libres de contaminantes durante logística.",
    icon: "📦",
    products: ["Línea SMART CT"],
  },
  {
    title: "Soldadura Industrial",
    desc: "Sistemas especializados para protección de componentes y superficies durante procesos de soldadura MIG, TIG y más.",
    icon: "⚡",
    products: ["Sistema de Soldadura", "Protección de Superficies"],
  },
  {
    title: "Manufactura Aeroespacial",
    desc: "Enmascaramiento de alta precisión para la industria aeroespacial donde los estándares de calidad son máximos.",
    icon: "✈️",
    products: ["Sistemas de Masking", "Línea SMART CT"],
  },
  {
    title: "Electrodomésticos",
    desc: "Masking y colgado para líneas de producción de electrodomésticos con acabados de alta calidad visual.",
    icon: "🏠",
    products: ["Sistemas de Colgado", "Sistemas de Masking"],
  },
];

export function Aplicaciones() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#2c2c64] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff,#fff 1px,transparent 1px,transparent 32px)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}>Aplicaciones</span>
          </div>
          <h1 className="text-white leading-tight max-w-3xl" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            Soluciones para<br /><span className="text-[#861e5c]">cada proceso.</span>
          </h1>
          <p className="text-white/60 mt-6 max-w-xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "1rem" }}>
            Desde pintura electrostática hasta ensamble aeroespacial — tenemos el producto correcto para cada aplicación industrial.
          </p>
        </div>
      </div>

      {/* Applications grid */}
      <div className="bg-[#EFEFEF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300">
            {applications.map((app) => (
              <div key={app.title} className="bg-white p-8 group hover:bg-[#000000] transition-colors duration-300 cursor-pointer">
                <div className="text-3xl mb-5">{app.icon}</div>
                <h3 className="text-[#000000] group-hover:text-white mb-3 transition-colors" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1rem" }}>{app.title}</h3>
                <p className="text-gray-500 group-hover:text-white/60 leading-relaxed mb-5 transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 300 }}>{app.desc}</p>
                <div className="space-y-1.5">
                  {app.products.map((p) => (
                    <div key={p} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#861e5c]" />
                      <span className="text-[#861e5c] group-hover:text-[#c06090] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 500 }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-[#000000] mb-3" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "1.8rem" }}>
              ¿Tienes una aplicación específica?
            </h2>
            <p className="text-gray-500 max-w-xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Nuestros ingenieros pueden desarrollar una solución a la medida para tu proceso. Sin importar la complejidad.
            </p>
          </div>
          <Link to="/servicio" className="shrink-0 flex items-center gap-2 px-8 py-4 bg-[#2c2c64] text-white hover:bg-[#861e5c] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.08em" }}>
            CONTACTAR INGENIEROS <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
