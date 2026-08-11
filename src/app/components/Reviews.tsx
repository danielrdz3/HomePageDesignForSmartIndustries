import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ing. Carlos Ramírez",
    role: "Gerente de Manufactura",
    company: "Honda de México",
    rating: 5,
    text: "SMART Industries ha sido un socio clave en nuestra línea de recubrimiento. Sus sistemas de masking redujeron nuestros tiempos de proceso en un 30% y prácticamente eliminamos los rechazos por contaminación. Calidad y servicio de primer nivel.",
    initials: "CR",
  },
  {
    name: "Lic. María Fernández",
    role: "Directora de Compras",
    company: "John Deere México",
    rating: 5,
    text: "La Línea SMART CT resolvió nuestros problemas de protección durante embarques de exportación. La disponibilidad de inventario es impresionante — siempre tienen lo que necesitamos, cuando lo necesitamos. Un aliado de confianza desde hace más de 8 años.",
    initials: "MF",
  },
  {
    name: "Ing. Roberto Torres",
    role: "Jefe de Ingeniería",
    company: "Polaris Industries",
    rating: 5,
    text: "Desarrollamos con SMART Industries un sistema de hule OEM completamente a la medida para nuestra línea de vehículos todo terreno. El proceso fue fluido, el equipo muy profesional y el resultado superó nuestras expectativas técnicas.",
    initials: "RT",
  },
  {
    name: "Arq. Sofía Mendoza",
    role: "Coordinadora de Proyectos",
    company: "International Harvester",
    rating: 5,
    text: "Trabajar con SMART Industries es diferente al resto. No solo venden productos — entienden tu proceso industrial y proponen soluciones reales. Su equipo de ingenieros visitó nuestra planta y diseñaron un sistema de colgado completamente personalizado.",
    initials: "SM",
  },
  {
    name: "Ing. Luis Herrera",
    role: "Director de Operaciones",
    company: "Boeing México",
    rating: 5,
    text: "Los estándares de calidad en aeronáutica son altísimos y SMART Industries los cumple con consistencia. Sus soluciones de enmascaramiento de alta temperatura han sido fundamentales en nuestros procesos de pintura. Confiables al 100%.",
    initials: "LH",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "text-[#861e5c] fill-[#861e5c]" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? reviews.length - 1 : a - 1));
  const next = () => setActive((a) => (a === reviews.length - 1 ? 0 : a + 1));

  const review = reviews[active];

  return (
    <section className="bg-[#2c2c64] py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,#fff,#fff 1px,transparent 1px,transparent 40px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#861e5c]" />
              <span
                className="text-[#861e5c] uppercase tracking-[0.2em]"
                style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}
              >
                Testimonios
              </span>
            </div>
            <h2
              className="text-white leading-tight"
              style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Lo que dicen
              <br />
              nuestros clientes.
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-[#2c2c64] transition-colors duration-150"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-[#2c2c64] transition-colors duration-150"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Main review card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10">
          {/* Featured review */}
          <div className="lg:col-span-2 bg-white p-10 relative">
            <Quote size={40} className="text-[#EFEFEF] absolute top-8 right-8" />
            <Stars count={review.rating} />
            <p
              className="text-[#000000] leading-relaxed my-6"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1.05rem", fontStyle: "italic" }}
            >
              "{review.text}"
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <div className="w-12 h-12 bg-[#2c2c64] flex items-center justify-center shrink-0">
                <span
                  className="text-white"
                  style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "0.85rem" }}
                >
                  {review.initials}
                </span>
              </div>
              <div>
                <div
                  className="text-[#000000]"
                  style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "0.92rem" }}
                >
                  {review.name}
                </div>
                <div
                  className="text-gray-500 mt-0.5"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem" }}
                >
                  {review.role} · {review.company}
                </div>
              </div>
            </div>
          </div>

          {/* Side list */}
          <div className="flex flex-col gap-px">
            {reviews
              .filter((_, i) => i !== active)
              .slice(0, 3)
              .map((r, i) => (
                <button
                  key={i}
                  onClick={() => setActive(reviews.indexOf(r))}
                  className="bg-white/10 hover:bg-white/20 transition-colors p-6 text-left group"
                >
                  <Stars count={r.rating} />
                  <p
                    className="text-white/80 mt-3 leading-relaxed line-clamp-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 300, fontStyle: "italic" }}
                  >
                    "{r.text}"
                  </p>
                  <div
                    className="text-white mt-3"
                    style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "0.8rem" }}
                  >
                    {r.name}
                  </div>
                  <div
                    className="text-white/50 mt-0.5"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem" }}
                  >
                    {r.company}
                  </div>
                </button>
              ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 transition-all duration-200 ${i === active ? "w-8 bg-[#861e5c]" : "w-3 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
