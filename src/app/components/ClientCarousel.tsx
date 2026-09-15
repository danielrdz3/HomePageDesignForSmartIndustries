import tesla from "../../imports/ggg_tesla.png";
import polaris from "../../imports/ggg_polaris.png";
import johndeere from "../../imports/ggg_johndeere.png";
import international from "../../imports/ggg_international.png";
import honda from "../../imports/ggg_honda.png";
import boeing from "../../imports/ggg_boeing.png";

const logos = [
  { src: tesla, alt: "Tesla" },
  { src: polaris, alt: "Polaris" },
  { src: johndeere, alt: "John Deere" },
  { src: international, alt: "International" },
  { src: honda, alt: "Honda" },
  { src: boeing, alt: "Boeing" },
];

const doubled = [...logos, ...logos];

export function ClientCarousel() {
  return (
    <section className="bg-white border-t border-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h4
          style={{
            fontFamily: "'Roboto Slab', serif",
            fontWeight: 900,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "#2c2c64",
            letterSpacing: "-0.01em",
          }}
        >
          Nuestros Clientes
        </h4>
        <div className="w-12 h-0.5 bg-[#861e5c] mx-auto mt-3" />
      </div>

      {/* Scrolling track */}
      <div className="overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, white, transparent)" }} />

        <div
          className="flex items-center gap-16"
          style={{
            animation: "scroll-logos 28s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0"
              style={{ width: "200px", height: "100px" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-logos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
