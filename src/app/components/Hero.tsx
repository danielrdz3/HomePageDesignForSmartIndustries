import { ArrowRight } from "lucide-react";
import productImage from "../../imports/image-2.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,#e0e0e0,#e0e0e0 1px,transparent 1px,transparent 32px)",
        }}
      />


<div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">

          {/* Left: text */}
          <div className="flex flex-col justify-center py-12">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-[#861e5c]" />
              <span
                className="text-[#861e5c] tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.72rem", fontWeight: 500 }}
              >
                Desde 2002 · México
              </span>
            </div>

            {/* Headline */}
            <h1
              className="leading-none mb-6"
              style={{ color: "rgb(41,42,98)", fontFamily: "'Roboto Slab', serif", fontSize: "clamp(2.6rem, 5vw, 5rem)", fontWeight: 900, letterSpacing: "-0.01em" }}
            >
              Expertos en 
              <br />
              <span className="text-[#861e5c]">protección de </span>
              <br />
              productos.
            </h1>

            {/* Body */}
            <p
              className="text-gray-500 max-w-lg mb-10 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fontWeight: 300 }}
            >
              Expertos en enmascaramiento de precisión, hule OEM/COM y sistemas de protección industrial para los sectores automotriz, agrícola, metalmecánica, eléctrica, etc.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8 mb-12 pb-10 border-b border-gray-200">
              {[
                { value: "+20", label: "Años de experiencia" },
                { value: "9K+", label: "Productos SMART CT" },
                { value: "100M+", label: "Partes en inventario" },
              ].map((stat, i) => (
                <div key={i}>
                  <div
                    className="text-[#2c2c64]"
                    style={{ fontFamily: "'Roboto Slab', serif", fontSize: "1.8rem", fontWeight: 700, lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-gray-400 mt-1.5"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#products"
                className="flex items-center gap-2 px-8 py-4 bg-[#861e5c] text-white hover:bg-[#6e1a4d] transition-all duration-200 group"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.08em" }}
              >
                VER PRODUCTOS
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 px-8 py-4 border border-gray-300 text-[#2c2c64] hover:border-[#2c2c64] hover:bg-gray-50 transition-all duration-200"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.82rem", letterSpacing: "0.08em" }}
              >
                CONOCER MÁS
              </a>
            </div>

          </div>

          {/* Right: product image */}
          <div className="flex items-center justify-center py-12 relative">
            {/* Glow ring behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[480px] h-[480px] rounded-full bg-[#861e5c]/10 blur-3xl" />
            </div>
            <img
              src={productImage}
              alt="SMART CT product line — caps, plugs, masking, hooks and protection components"
              className="relative z-10 w-full max-w-[540px] object-contain drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.4))" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
