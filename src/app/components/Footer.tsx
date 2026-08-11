import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import logo from "../../imports/image-1.png";

const footerLinks = {
  Productos: [
    { label: "Sistemas de Masking", href: "/productos/sistemas-de-masking" },
    { label: "Línea SMART CT", href: "/productos/smart-ct" },
    { label: "Protección de Superficies", href: "/productos/proteccion-de-superficies" },
    { label: "Sistemas de Colgado", href: "/productos/sistemas-de-colgado" },
    { label: "Sistema de Soldadura", href: "/productos/sistema-de-soldadura" },
    { label: "Hule OEM/COM", href: "/productos/hule-oem-com" },
  ],
  Industrias: [
    { label: "Automotriz", href: "/industrias" },
    { label: "Agrícola Pesado", href: "/industrias" },
    { label: "Metalmecánica", href: "/industrias" },
    { label: "Eléctrica", href: "/industrias" },
    { label: "Electrodomésticos", href: "/industrias" },
    { label: "Control de Fluidos", href: "/industrias" },
  ],
  Empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Aplicaciones", href: "/aplicaciones" },
    { label: "Servicio y Soporte", href: "/servicio" },
    { label: "Productos", href: "/productos" },
    { label: "Blog", href: "/" },
    { label: "Contacto", href: "/servicio" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-white/5">
      {/* CTA strip */}
      <div className="bg-[#2c2c64]">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white leading-tight" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "1.5rem" }}>
              ¿Listo para encontrar tu solución?
            </h3>
            <p className="text-white/70 mt-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.88rem" }}>
              Nuestro equipo de ingenieros está disponible para resolver tus necesidades.
            </p>
          </div>
          <Link to="/servicio" className="shrink-0 px-8 py-3 bg-[#861e5c] text-white hover:bg-[#6e1a4d] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.08em" }}>
            SOLICITAR COTIZACIÓN
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img src={logo} alt="SMART CT" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-gray-500 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.85rem" }}>
              Expertos en enmascaramiento de precisión y protección industrial desde 2002. Tu aliado estratégico sin limitaciones.
            </p>
            <div className="space-y-3">
              {[
                { icon: <Phone size={14} />, text: "+52 (800) SMART-IND" },
                { icon: <Mail size={14} />, text: "contacto@smartindustries.net" },
                { icon: <MapPin size={14} />, text: "México" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-500">
                  <span className="text-[#861e5c]">{item.icon}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div className="text-white mb-5" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.04em" }}>
                {section.toUpperCase()}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-gray-500 hover:text-[#861e5c] transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 400 }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-gray-700" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.08em" }}>
            © 2024 SMART INDUSTRIES. TODOS LOS DERECHOS RESERVADOS.
          </span>
          <div className="flex gap-6">
            {["Privacidad", "Términos", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-gray-700 hover:text-gray-400 transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
