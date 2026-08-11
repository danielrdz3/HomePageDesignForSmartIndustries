import { CheckCircle } from "lucide-react";

const pillars = [
  "Más de 20 años de experiencia comprobada",
  "Equipo de ingenieros calificados",
  "Tecnología de punta en nuestros procesos",
  "Aliado estratégico sin limitaciones",
  "Vínculo de confianza con cada cliente",
  "Crecimiento constante e innovación",
];

export function About() {
  return (
    <section id="about" className="bg-[#000000] py-24 relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,#fff 39px,#fff 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,#fff 39px,#fff 40px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: image + founding year card */}
          <div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1739488754789-5a2e85ee6a79?w=700&h=500&fit=crop&auto=format"
                alt="Close up of precision automotive industrial components"
                className="w-full object-cover"
                style={{ height: "420px" }}
              />
              <div className="absolute inset-0 border-l-4 border-t-4 border-[#861e5c] -translate-x-3 -translate-y-3" />
            </div>

          </div>

          {/* Right: text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#861e5c]" />
              <span
                className="text-[#861e5c] uppercase tracking-[0.2em]"
                style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}
              >
                Quiénes somos
              </span>
            </div>

            <h2
              className="text-white leading-tight mb-6"
              style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
            >
              SMART Industries:
              <br />
              <span className="text-[#861e5c]">Tu aliado estratégico</span>
              <br />
              sin limitaciones.
            </h2>

            <p
              className="text-gray-400 leading-relaxed mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.95rem" }}
            >
              Desde su fundación en 2002, SMART Industries está enfocada en la solución de proyectos en procesos industriales. A lo largo de estas dos décadas, la compañía generó un vínculo de confianza con cada uno de sus clientes para el desarrollo de proyectos de solución para cada uno de sus procesos industriales.
            </p>

            <p
              className="text-gray-400 leading-relaxed mb-10"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.95rem" }}
            >
              SMART Industries no solo se ha consolidado como la mejor opción de las empresas, sino como un aliado estratégico sin limitaciones para seguir creciendo, con el fomento de la unión de sus colaboradores.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#861e5c] shrink-0 mt-0.5" />
                  <span
                    className="text-gray-300"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 400 }}
                  >
                    {p}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2c2c64] text-white hover:bg-[#861e5c] transition-all duration-200"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.08em" }}
              >
                CONOCER NUESTRA HISTORIA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
