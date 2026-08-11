import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Qué tipos de industrias atiende SMART Industries?",
    a: "Atendemos a las industrias automotriz, metalmecánica, eléctrica, equipos agrícolas pesados, electrodomésticos, control de fluidos y tubería, entre otras. Contamos con más de 20 años de experiencia desarrollando soluciones personalizadas para cada sector.",
  },
  {
    q: "¿Pueden desarrollar productos a la medida (OEM/COM)?",
    a: "Sí. Somos especialistas en el desarrollo de productos de hule OEM y COM. Nuestro equipo de ingenieros trabaja directamente contigo desde la conceptualización hasta la entrega final, asegurando que cada pieza cumpla con tus especificaciones técnicas.",
  },
  {
    q: "¿Qué diferencia a la Línea SMART CT de otras soluciones de protección?",
    a: "La Línea SMART CT cuenta con más de 9,000 productos estándar y 100,000,000 de partes en inventario disponibles de inmediato. Esto nos permite responder con tiempos de entrega competitivos sin comprometer la calidad ni la disponibilidad.",
  },
  {
    q: "¿Cómo funciona el proceso de cotización?",
    a: "Es muy sencillo: comparte con nosotros las especificaciones de tu proyecto (material, dimensiones, volumen y aplicación) y nuestro equipo te enviará una propuesta personalizada en menos de 48 horas hábiles.",
  },
  {
    q: "¿Los sistemas de masking son reutilizables?",
    a: "Dependiendo del tipo de sistema. Nuestros productos de enmascaramiento están diseñados para fácil aplicación y remoción rápida sin residuos. Algunos modelos admiten múltiples ciclos de uso, lo que reduce costos operativos y genera un proceso más eficiente.",
  },
  {
    q: "¿Tienen cobertura a nivel nacional e internacional?",
    a: "Sí. Desde México, servimos tanto al mercado nacional como a clientes internacionales. Contamos con logística preparada para cumplir los tiempos de entrega en distintas regiones.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#EFEFEF] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left label col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#861e5c]" />
              <span
                className="text-[#861e5c] uppercase tracking-[0.2em]"
                style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}
              >
                Preguntas Frecuentes
              </span>
            </div>
            <h2
              className="text-[#000000] leading-tight mb-6"
              style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
            >
              Resolvemos
              <br />
              tus dudas
              <br />
              <span className="text-[#861e5c]">al instante.</span>
            </h2>
            <p
              className="text-gray-500 leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.9rem" }}
            >
              ¿No encontraste lo que buscabas? Nuestro equipo de ingenieros está disponible para atenderte.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#2c2c64] text-white hover:bg-[#861e5c] transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.08em" }}
            >
              CONTACTAR ASESOR
            </a>
          </div>

          {/* Right accordion col */}
          <div className="lg:col-span-3 space-y-px">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    className={`transition-colors duration-150 ${open === i ? "text-[#2c2c64]" : "text-[#000000] group-hover:text-[#2c2c64]"}`}
                    style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "0.92rem" }}
                  >
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-6 h-6 flex items-center justify-center transition-colors duration-150 ${open === i ? "text-white bg-[#861e5c]" : "text-[#2c2c64] bg-[#EFEFEF] group-hover:bg-[#2c2c64] group-hover:text-white"}`}>
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <p
                      className="text-gray-500 leading-relaxed pt-4"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.875rem" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
