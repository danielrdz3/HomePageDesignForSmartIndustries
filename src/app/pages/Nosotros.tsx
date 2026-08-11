import { Link } from "react-router";
import { CheckCircle, ArrowRight } from "lucide-react";

const timeline = [
  { year: "2002", title: "Fundación", desc: "SMART Industries nace con la misión de ofrecer soluciones industriales de precisión en México." },
  { year: "2008", title: "Expansión de Portafolio", desc: "Incorporamos la línea de hule OEM/COM para la industria automotriz y metalmecánica." },
  { year: "2014", title: "Tecnología de Punta", desc: "Inversión en maquinaria y procesos de última generación para superar las expectativas del mercado." },
  { year: "2018", title: "Lanzamiento SMART CT", desc: "Lanzamos nuestra línea SMART CT con más de 9,000 productos estándar para protección industrial." },
  { year: "2024", title: "+20 Años de Trayectoria", desc: "Consolidados como aliado estratégico de empresas líderes globales como Boeing, Honda y John Deere." },
];

const products = [
  { label: "Sistemas de Masking", href: "/productos/sistemas-de-masking" },
  { label: "Sistema de Protección de Superficies", href: "/productos/proteccion-de-superficies" },
  { label: "Líderes en Enmascarado", href: "/productos/proteccion-de-superficies" },
  { label: "Sistemas de Colgado", href: "/productos/sistemas-de-colgado" },
  { label: "Sistema de Soldadura", href: "/productos/sistema-de-soldadura" },
  { label: "Línea SMART CT", href: "/productos/smart-ct" },
];

const values = [
  { title: "Calidad", desc: "Productos con los más altos estándares industriales, validados por clientes de clase mundial." },
  { title: "Innovación", desc: "Inversión constante en tecnología de punta para mantenernos a la vanguardia del sector." },
  { title: "Confianza", desc: "Dos décadas construyendo relaciones sólidas y duraderas con cada cliente." },
  { title: "Compromiso", desc: "Equipo humano talentoso dedicado a superar las expectativas en cada proyecto." },
];

export function Nosotros() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#2c2c64] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff,#fff 1px,transparent 1px,transparent 32px)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}>
              Quiénes Somos
            </span>
          </div>
          <h1 className="text-white leading-tight max-w-3xl" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            SMART Industries:<br /><span className="text-[#861e5c]">una solución hecha a la medida.</span>
          </h1>
          <p className="text-white/60 mt-6 max-w-2xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "1rem" }}>
            Desde su fundación en 2002, enfocados en la solución de proyectos en procesos industriales con enmascaramiento de precisión, hule OEM/COM y protección de superficies.
          </p>
        </div>
      </div>

      {/* Main story */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#861e5c]" />
                <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}>Nuestra Historia</span>
              </div>
              <h2 className="text-[#000000] leading-tight mb-6" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "2rem" }}>
                Dos décadas construyendo<br /><span className="text-[#861e5c]">confianza industrial.</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.95rem" }}>
                <p>Desde su fundación en 2002, SMART Industries está enfocada en la solución de proyectos en procesos industriales, entre ellos, enmascaramiento de precisión de alta calidad para su uso en la industria del recubrimiento, productos de hule OEM y COM para su uso en la industria automotriz, metalmecánica, eléctrica, equipos agrícolas pesados, electrodomésticos, control de fluidos y tubería, entre otros.</p>
                <p>Al paso de los años, la empresa ha logrado fortalecerse al incorporar un equipo con gran talento humano y esto generó un crecimiento para inversiones en tecnología de punta, con el objetivo de superar las expectativas.</p>
                <p>En estas dos décadas la compañía generó un vínculo de confianza con cada uno de sus clientes para el desarrollo de proyectos de solución para cada uno de sus procesos industriales.</p>
                <p>SMART Industries no solo se ha consolidado como la mejor opción de las empresas, sino como un aliado estratégico sin limitaciones para seguir creciendo, con el fomento de la unión de sus colaboradores y fortaleciendo esta trayectoria.</p>
              </div>
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=700&h=420&fit=crop&auto=format" alt="Industrial manufacturing facility" className="w-full object-cover" style={{ height: "280px" }} />
              <div className="grid grid-cols-3 gap-px bg-gray-200">
                {[{ val: "2002", label: "Fundación" }, { val: "+20", label: "Años" }, { val: "100M+", label: "Partes" }].map((s) => (
                  <div key={s.label} className="bg-[#2c2c64] p-5 text-center">
                    <div className="text-white" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "1.8rem", lineHeight: 1 }}>{s.val}</div>
                    <div className="text-white/60 mt-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#EFEFEF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}>Nuestros Valores</span>
          </div>
          <h2 className="text-[#000000] mb-12" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "2rem" }}>Lo que nos define.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 group hover:bg-[#2c2c64] transition-colors duration-300">
                <div className="w-8 h-1 bg-[#861e5c] mb-5" />
                <h3 className="text-[#000000] group-hover:text-white mb-3 transition-colors" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.1rem" }}>{v.title}</h3>
                <p className="text-gray-500 group-hover:text-white/70 transition-colors leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 300 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-[#000000] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}>Trayectoria</span>
          </div>
          <h2 className="text-white mb-14" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "2rem" }}>Más de 20 años de historia.</h2>
          <div className="relative">
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="flex items-start gap-8">
                  <div className="shrink-0 w-20 text-right">
                    <span className="text-[#861e5c]" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "1.2rem" }}>{item.year}</span>
                  </div>
                  <div className="shrink-0 w-3 h-3 rounded-full bg-[#2c2c64] border-2 border-[#861e5c] mt-1.5 hidden md:block" />
                  <div className="flex-1 pb-8 border-b border-white/5">
                    <h3 className="text-white mb-1" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1rem" }}>{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 300 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product lines */}
      <div className="bg-[#EFEFEF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}>Línea de Productos</span>
          </div>
          <h2 className="text-[#000000] mb-10" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "2rem" }}>Nuestras soluciones.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-300">
            {products.map((p) => (
              <Link key={p.label} to={p.href} className="group bg-white px-7 py-6 flex items-center justify-between hover:bg-[#2c2c64] transition-colors duration-200">
                <span className="text-[#000000] group-hover:text-white transition-colors" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "0.95rem" }}>{p.label}</span>
                <ArrowRight size={16} className="text-[#861e5c] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Masking description */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#861e5c]" />
                <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}>Líderes en Enmascarado</span>
              </div>
              <h2 className="text-[#000000] mb-5 leading-tight" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "1.8rem" }}>
                Línea SMART CT<br /><span className="text-[#861e5c]">de Enmascarado.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.95rem" }}>
                La línea SMART CT de Enmascarado es utilizada en la industria de manufactura para optimizar y perfeccionar los sistemas de acabados. Su gran flexibilidad hace que pueda ser utilizada para la fabricación de una computadora hasta para la creación de un sistema aeroespacial.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.95rem" }}>
                Confía en nosotros, llámanos y sorpréndete sobre lo que podemos hacer por tu producto.
              </p>
              <Link to="/productos/proteccion-de-superficies" className="inline-flex items-center gap-2 px-7 py-3 bg-[#2c2c64] text-white hover:bg-[#861e5c] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.08em" }}>
                VER LÍNEA COMPLETA <ArrowRight size={14} />
              </Link>
            </div>
            <div>
              <p className="text-gray-500 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.95rem" }}>
                La línea SMART CT de Protección es usada en diversas industrias para mantener los artículos protegidos durante sus procesos de embarque o almacenamiento. También son utilizados para mantener artículos libres de contaminantes, proteger los acabados, los extremos de los tubos, las tuercas y los pernos expuestos.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { val: "9,000+", label: "Productos estándar" },
                  { val: "100M+", label: "Partes en inventario" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#2c2c64] p-6">
                    <div className="text-white" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "2rem", lineHeight: 1 }}>{s.val}</div>
                    <div className="text-white/60 mt-1" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
