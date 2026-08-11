const industries = [
  {
    name: "Automotriz",
    desc: "Hule OEM/COM para Honda, Tesla, Ford y más fabricantes líderes globales.",
    img: "https://images.unsplash.com/photo-1739488754789-5a2e85ee6a79?w=500&h=320&fit=crop&auto=format",
    alt: "Automotive precision engine parts",
  },
  {
    name: "Agrícola Pesado",
    desc: "Soluciones de protección y enmascaramiento para maquinaria agrícola de alto rendimiento.",
    img: "https://images.unsplash.com/photo-1610891015188-5369212db097?w=500&h=320&fit=crop&auto=format",
    alt: "Heavy agricultural industrial machinery",
  },
  {
    name: "Metalmecánica",
    desc: "Sistemas de colgado, masking y protección de superficies para líneas de manufactura.",
    img: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=500&h=320&fit=crop&auto=format",
    alt: "Metal mechanics factory floor",
  },
];

export function Industries() {
  return (
    <section className="bg-[#EFEFEF] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-[#861e5c]" />
          <span
            className="text-[#861e5c] uppercase tracking-[0.2em]"
            style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}
          >
            Industrias que Servimos
          </span>
        </div>

        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2
            className="text-[#000000] leading-tight"
            style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
          >
            Experiencia comprobada
            <br />
            en múltiples sectores.
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Electrodomésticos", "Control de Fluidos", "Tubería", "Eléctrica"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 border border-[#2c2c64]/30 text-[#2c2c64]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.04em" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-300">
          {industries.map((ind) => (
            <div key={ind.name} className="group bg-white overflow-hidden cursor-pointer">
              <div className="overflow-hidden" style={{ height: "220px" }}>
                <img
                  src={ind.img}
                  alt={ind.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 border-t-2 border-transparent group-hover:border-[#2c2c64] transition-colors">
                <h3
                  className="text-[#000000] mb-2"
                  style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.1rem" }}
                >
                  {ind.name}
                </h3>
                <p
                  className="text-gray-500 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.83rem" }}
                >
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SMART CT callout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-3 bg-[#000000] p-10">
            <div
              className="text-[#861e5c] mb-4 tracking-[0.15em] uppercase"
              style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}
            >
              Línea SMART CT
            </div>
            <h3
              className="text-white mb-4 leading-tight"
              style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "1.8rem" }}
            >
              Protección para embarque,<br />almacenamiento y más.
            </h3>
            <p
              className="text-gray-400 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.9rem" }}
            >
              Utilizada en diversas industrias para mantener artículos protegidos durante embarque o almacenamiento. Protege acabados, extremos de tubos, tuercas y pernos expuestos.
            </p>
          </div>
          <div className="lg:col-span-2 bg-[#2c2c64] p-10 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "9,000+", label: "Productos estándar" },
                { val: "100M+", label: "Partes en inventario" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-white"
                    style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "2.2rem", lineHeight: 1 }}
                  >
                    {s.val}
                  </div>
                  <div
                    className="text-white/60 mt-1"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
