import { ArrowRight, Clock, Tag } from "lucide-react";

const posts = [
  {
    title: "Cómo elegir el sistema de masking correcto para tu línea de recubrimiento",
    excerpt: "La selección del enmascaramiento adecuado puede marcar la diferencia entre un proceso eficiente y uno costoso. Te explicamos los factores clave a considerar.",
    category: "Sistemas de Masking",
    readTime: "5 min",
    date: "Mayo 2024",
    img: "https://images.unsplash.com/photo-1536356915696-c6bf1c01da46?w=600&h=400&fit=crop&auto=format",
    alt: "Masking tape industrial coating",
    featured: true,
  },
  {
    title: "SMART CT: protección integral para procesos de embarque y almacenamiento",
    excerpt: "Descubre cómo nuestra línea de 9,000+ productos puede proteger tus componentes desde la línea de producción hasta el punto de entrega final.",
    category: "Línea SMART CT",
    readTime: "4 min",
    date: "Abril 2024",
    img: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=600&h=400&fit=crop&auto=format",
    alt: "Industrial factory machines",
    featured: false,
  },
  {
    title: "Tendencias en la industria automotriz: qué exigen los fabricantes OEM en 2024",
    excerpt: "Los estándares de calidad en hule y protección industrial siguen evolucionando. Conoce las exigencias más recientes de los principales fabricantes globales.",
    category: "Industria Automotriz",
    readTime: "6 min",
    date: "Marzo 2024",
    img: "https://images.unsplash.com/photo-1739488754789-5a2e85ee6a79?w=600&h=400&fit=crop&auto=format",
    alt: "Automotive precision parts",
    featured: false,
  },
];

export function Blog() {
  const [featured, ...rest] = posts;

  return (
    <section className="bg-[#000000] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#861e5c]" />
              <span
                className="text-[#861e5c] uppercase tracking-[0.2em]"
                style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}
              >
                Blog & Recursos
              </span>
            </div>
            <h2
              className="text-white leading-tight"
              style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Conocimiento industrial
              <br />
              <span className="text-[#861e5c]">a tu alcance.</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.06em" }}
          >
            VER TODOS LOS ARTÍCULOS <ArrowRight size={14} />
          </a>
        </div>

        {/* Grid: featured left, two cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-white/5">
          {/* Featured post */}
          <a href="#" className="lg:col-span-3 group bg-[#111111] overflow-hidden flex flex-col">
            <div className="overflow-hidden" style={{ height: "280px" }}>
              <img
                src={featured.img}
                alt={featured.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="flex items-center gap-1.5 text-[#861e5c]"
                  style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  <Tag size={11} /> {featured.category}
                </span>
                <span
                  className="flex items-center gap-1.5 text-white/30"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem" }}
                >
                  <Clock size={11} /> {featured.readTime} lectura
                </span>
              </div>
              <h3
                className="text-white group-hover:text-[#861e5c] transition-colors leading-snug mb-4 flex-1"
                style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.25rem" }}
              >
                {featured.title}
              </h3>
              <p
                className="text-gray-500 leading-relaxed mb-6"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.875rem" }}
              >
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-white/5">
                <span
                  className="text-white/30"
                  style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem" }}
                >
                  {featured.date}
                </span>
                <span
                  className="flex items-center gap-1.5 text-[#2c2c64] group-hover:text-[#861e5c] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.04em" }}
                >
                  LEER ARTÍCULO <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </a>

          {/* Two smaller posts */}
          <div className="lg:col-span-2 flex flex-col gap-px">
            {rest.map((post) => (
              <a key={post.title} href="#" className="group bg-[#111111] overflow-hidden flex flex-col flex-1">
                <div className="overflow-hidden" style={{ height: "160px" }}>
                  <img
                    src={post.img}
                    alt={post.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-[#861e5c]"
                      style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.64rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}
                    >
                      {post.category}
                    </span>
                    <span
                      className="text-white/25"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem" }}
                    >
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    className="text-white group-hover:text-[#861e5c] transition-colors leading-snug flex-1"
                    style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "0.95rem" }}
                  >
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                    <span
                      className="text-white/25"
                      style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.64rem" }}
                    >
                      {post.date}
                    </span>
                    <span
                      className="flex items-center gap-1 text-[#2c2c64] group-hover:text-[#861e5c] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.72rem" }}
                    >
                      LEER <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
