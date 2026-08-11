import { Mail, Phone, Clock, MapPin, CheckCircle, ExternalLink } from "lucide-react";

const MONO = { fontFamily: "'Roboto Mono', monospace" } as React.CSSProperties;
const SLAB = { fontFamily: "'Roboto Slab', serif" } as React.CSSProperties;
const INTER = { fontFamily: "'Inter', sans-serif" } as React.CSSProperties;

const services = [
  { title: "Asesoría Técnica", desc: "Ingenieros especializados que analizan tu proceso y proponen la solución óptima de enmascaramiento o protección." },
  { title: "Desarrollo a la Medida", desc: "Diseño y fabricación de productos OEM/COM con tus especificaciones técnicas exactas." },
  { title: "Cotización Rápida", desc: "Respuesta en menos de 48 horas hábiles con propuesta técnica y económica detallada." },
  { title: "Inventario Disponible", desc: "Más de 100,000,000 de partes listas para entrega inmediata desde nuestro almacén." },
  { title: "Soporte Post-Venta", desc: "Seguimiento continuo para garantizar que los productos funcionen a la perfección en tu línea." },
  { title: "Visita a Planta", desc: "Nuestro equipo puede visitar tus instalaciones para un diagnóstico completo in situ." },
];

const offices = [
  {
    city: "Guadalajara",
    state: "Jalisco",
    phone: "+52 33 4737 7777",
    phoneRaw: "+523347377777",
    address: "Guadalajara, Jalisco, México",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d119770.42034!2d-103.3496!3d20.6597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1700000000000",
    mapsUrl: "https://maps.google.com/?q=Guadalajara,Jalisco,Mexico",
  },
  {
    city: "Monterrey",
    state: "Nuevo León",
    phone: "+52 81 4780 4000",
    phoneRaw: "+528147804000",
    address: "Monterrey, Nuevo León, México",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d119770.42034!2d-100.3161!3d25.6866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1700000000001",
    mapsUrl: "https://maps.google.com/?q=Monterrey,NuevoLeon,Mexico",
  },
  {
    city: "Ciudad de México",
    state: "CDMX",
    phone: "+52 33 4737 7777",
    phoneRaw: "+523347377777",
    address: "Ciudad de México, México",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d119770.42034!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1700000000002",
    mapsUrl: "https://maps.google.com/?q=Ciudad+de+Mexico,Mexico",
  },
  {
    city: "Querétaro",
    state: "Querétaro",
    phone: "+52 33 4737 7777",
    phoneRaw: "+523347377777",
    address: "Querétaro, México",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d119770.42034!2d-100.3899!3d20.5888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1700000000003",
    mapsUrl: "https://maps.google.com/?q=Queretaro,Mexico",
  },
];

export function Servicio() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#000000] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff,#fff 1px,transparent 1px,transparent 32px)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Servicio y Soporte</span>
          </div>
          <h1 className="text-white leading-tight max-w-3xl" style={{ ...SLAB, fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            Estamos contigo<br /><span className="text-[#861e5c]">en cada etapa.</span>
          </h1>
          <p className="text-white/60 mt-6 max-w-xl leading-relaxed" style={{ ...INTER, fontWeight: 300, fontSize: "1rem" }}>
            Desde la primera consulta hasta la entrega final, nuestro equipo de ingenieros está disponible para garantizar tu éxito.
          </p>

          {/* Quick contact phones */}
          <div className="flex flex-wrap gap-4 mt-10">
            {[
              { city: "Guadalajara", phone: "+52 33 4737 7777", raw: "+523347377777" },
              { city: "Monterrey", phone: "+52 81 4780 4000", raw: "+528147804000" },
            ].map((o) => (
              <a
                key={o.city}
                href={`tel:${o.raw}`}
                className="flex items-center gap-3 px-5 py-3 border border-white/20 hover:border-[#861e5c] hover:bg-[#861e5c]/10 transition-all duration-200 group"
              >
                <div className="w-8 h-8 bg-[#861e5c] flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-white" />
                </div>
                <div>
                  <div className="text-white/40 group-hover:text-white/60 transition-colors" style={{ ...MONO, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{o.city}</div>
                  <div className="text-white font-semibold" style={{ ...INTER, fontSize: "0.95rem" }}>{o.phone}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-[#EFEFEF] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Lo que ofrecemos</span>
          </div>
          <h2 className="text-[#000000] mb-12" style={{ ...SLAB, fontWeight: 900, fontSize: "2rem" }}>Servicios a tu medida.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-300">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-8 group hover:bg-[#2c2c64] transition-colors duration-200">
                <CheckCircle size={20} className="text-[#861e5c] mb-4" />
                <h3 className="text-[#000000] group-hover:text-white mb-3 transition-colors" style={{ ...SLAB, fontWeight: 700, fontSize: "1rem" }}>{s.title}</h3>
                <p className="text-gray-500 group-hover:text-white/60 leading-relaxed transition-colors" style={{ ...INTER, fontSize: "0.85rem", fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact form + info */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#861e5c]" />
                <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Solicitar Cotización</span>
              </div>
              <h2 className="text-[#000000] mb-8" style={{ ...SLAB, fontWeight: 900, fontSize: "1.8rem" }}>Cuéntanos tu proyecto.</h2>
              <form className="space-y-4">
                {[
                  { label: "Nombre completo", type: "text", placeholder: "Ing. Juan Pérez" },
                  { label: "Empresa", type: "text", placeholder: "Tu empresa" },
                  { label: "Correo electrónico", type: "email", placeholder: "contacto@empresa.com" },
                  { label: "Teléfono", type: "tel", placeholder: "+52 (33) 0000-0000" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-[#000000] mb-1.5" style={{ ...INTER, fontWeight: 500, fontSize: "0.82rem" }}>{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} className="w-full px-4 py-3 border border-gray-200 bg-[#EFEFEF] focus:outline-none focus:border-[#2c2c64] transition-colors" style={{ ...INTER, fontSize: "0.875rem" }} />
                  </div>
                ))}
                <div>
                  <label className="block text-[#000000] mb-1.5" style={{ ...INTER, fontWeight: 500, fontSize: "0.82rem" }}>Describe tu necesidad</label>
                  <textarea rows={4} placeholder="Cuéntanos sobre tu proceso y qué tipo de solución buscas..." className="w-full px-4 py-3 border border-gray-200 bg-[#EFEFEF] focus:outline-none focus:border-[#2c2c64] transition-colors resize-none" style={{ ...INTER, fontSize: "0.875rem" }} />
                </div>
                <button type="submit" className="w-full py-4 bg-[#2c2c64] text-white hover:bg-[#861e5c] transition-colors" style={{ ...INTER, fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.08em" }}>
                  ENVIAR SOLICITUD
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#861e5c]" />
                <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Contacto Directo</span>
              </div>
              <h2 className="text-[#000000] mb-8" style={{ ...SLAB, fontWeight: 900, fontSize: "1.8rem" }}>Hablemos directamente.</h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Phone size={18} />, label: "Guadalajara", value: "+52 33 4737 7777", href: "tel:+523347377777" },
                  { icon: <Phone size={18} />, label: "Monterrey", value: "+52 81 4780 4000", href: "tel:+528147804000" },
                  { icon: <Mail size={18} />, label: "Correo", value: "contacto@smartindustries.net", href: "mailto:contacto@smartindustries.net" },
                  { icon: <Clock size={18} />, label: "Horario", value: "Lun–Vie, 8:00 AM – 6:00 PM", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2c2c64] flex items-center justify-center text-white shrink-0">{item.icon}</div>
                    <div>
                      <div className="text-[#000000]" style={{ ...SLAB, fontWeight: 700, fontSize: "0.85rem" }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-[#2c2c64] hover:text-[#861e5c] transition-colors mt-0.5 block" style={{ ...INTER, fontSize: "0.95rem", fontWeight: 500 }}>{item.value}</a>
                      ) : (
                        <div className="text-gray-500 mt-0.5" style={{ ...INTER, fontSize: "0.875rem" }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#EFEFEF] p-8 border-l-4 border-[#861e5c]">
                <p className="text-gray-600 leading-relaxed" style={{ ...INTER, fontWeight: 300, fontSize: "0.9rem", fontStyle: "italic" }}>
                  "Nuestro equipo de ingenieros responderá tu solicitud en menos de 48 horas hábiles con una propuesta técnica y económica personalizada."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office locations with maps */}
      <div className="bg-[#000000] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ ...MONO, fontSize: "0.68rem", fontWeight: 500 }}>Presencia Nacional</span>
          </div>
          <h2 className="text-white mb-12" style={{ ...SLAB, fontWeight: 900, fontSize: "2rem" }}>
            Oficinas en todo México.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {offices.map((office) => (
              <div key={office.city} className="bg-[#111111] group flex flex-col overflow-hidden">
                {/* Map embed */}
                <div className="relative overflow-hidden" style={{ height: "260px" }}>
                  <iframe
                    title={`Mapa ${office.city}`}
                    src={office.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(60%) contrast(1.1)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 bg-[#2c2c64]/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                </div>

                {/* Info bar */}
                <div className="p-6 flex items-start justify-between gap-4 border-t border-white/5">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={13} className="text-[#861e5c] shrink-0" />
                      <span className="text-[#861e5c]" style={{ ...MONO, fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>{office.state}</span>
                    </div>
                    <h3 className="text-white" style={{ ...SLAB, fontWeight: 900, fontSize: "1.3rem" }}>{office.city}</h3>
                    <a
                      href={`tel:${office.phoneRaw}`}
                      className="flex items-center gap-2 mt-2 text-white/60 hover:text-[#861e5c] transition-colors"
                    >
                      <Phone size={13} />
                      <span style={{ ...INTER, fontSize: "0.9rem", fontWeight: 500 }}>{office.phone}</span>
                    </a>
                  </div>
                  <a
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 border border-white/10 hover:border-[#861e5c] hover:text-[#861e5c] text-white/40 transition-all duration-200 shrink-0"
                    style={{ ...INTER, fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.06em" }}
                  >
                    VER MAPA <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
