import { useState } from "react";
import { Link } from "react-router";
import { useMeta } from "../hooks/useMeta";

const SKU_SLUG: Record<string, string> = {
  // Thread Mask
  "SMTM": "smtm", "SMSMPMT": "smsmpmt", "SMSMWM": "smsmwm",
  // Plugs — silicon
  "SMDFPP": "smdfpp", "SMHCP": "smhcp", "SMGN / SMBN": "smgnbn",
  "SMMFP": "smmfp", "SMCSP": "smcsp", "SMHWP": "smhwp",
  "SMFP": "smfp", "SMMSP": "smmsp", "SMSMFPP": "smsmfpp",
  "SMVCP": "smvcp", "SMSMDWP": "smsmdwp", "SMWC": "smwc",
  "SMCPP": "smcpp", "SMSMLPP": "smsmlpp", "SMSFP": "smsfp",
  "SMTPP": "smtpp", "SMSP": "smsp", "SMSPP": "smspp",
  "SMP": "smp", "SMP-H": "smph", "SMHP": "smhp",
  "SMHP-H": "smhph", "SMW": "smw", "SMWPP": "smwpp",
  "SMWPP-LS": "smwppls",
  // EPDM plugs/caps
  "SMEPFP": "smepfp", "SMPP": "smpp", "SMRC": "smrc",
  // Caps
  "SMAZ": "smaz", "SMPS": "smps", "SMZC": "smzc", "SMSC": "smsc",
  // Die-Cut Discs
  "EZ": "ez", "PB": "pb", "AF": "af", "PR": "pr", "KP1": "kp1",
  "SMPCD": "smpcd", "PC": "pc",
  // Tape
  "SMPC023": "smpc023", "SMPC032": "smpc032", "SMPC031": "smpc031",
  "SMPC090": "smpc090", "SMPC021": "smpc021", "SMPC025": "smpc025",
  "SMPC040": "smpc040", "SMPC050": "smpc050",
  // Hooks
  "SMC (Hooks)": "smchooks", "SMSQV": "smsqv",
  "SMS": "smshooks", "SMV": "smvhooks", "SMCV": "smcvhooks",
  // Cord
  "SMC (Cord)": "smcord",
  // Tubing
  "SMST": "smst", "SMST-STAR": "smststar", "MDT": "mdt",
  // Sheeting
  "SMSS": "smss",
};

// Thread Mask
import imgSMTM from "../../imports/SILICON_-_SMTM_-_THREAD_MASK.png";
import imgSMSMPMT from "../../imports/SILICON_-_SMSMPMT_-_PIPE_THREAD_MASK.png";
import imgSMSMWM from "../../imports/SILICON_-_SMSMWM_-_WASHER_MASK.png";

// Plugs — silicon (existing)
import imgSMDFPP from "../../imports/SILICON_-_SMDFPP_-_DUAL_FLANGED_PULL_PLUGS.png";
import imgSMHCP from "../../imports/SILICON_-_SMHCP_-_CONE_PLUGS.png";
import imgSMGNBN from "../../imports/NEOPRENE_GREEN-BLACK_-_SMGN-SMBN_-_PLUGS.png";
import imgSMMFP from "../../imports/SILICON_-_SMMFP_-_MULTI-FLANGED_PLUG.png";
import imgSMCSP from "../../imports/SILICON_-_SMCSP_-_COUNTERSINK_HOLE_PLUG-2.png";
import imgSMHWP from "../../imports/SILICON_-_SMHWP_-_HOLLOW_WASHER_PLUGS-2.png";
import imgSMFP from "../../imports/SILICON_-_SMFP_-_FLANGELESS_PLUGS-2.png";
import imgSMMSP from "../../imports/SILICON_-_SMMSP_-_MICELLANEOUS_PLUGS-2.png";
import imgSMSMFPP from "../../imports/SILICON_-_SMSMFPP_-_FLANGE_PULL_PLUGS-2.png";
import imgSMVCP from "../../imports/SILICON_-_SMVCP_-_VENTING_CAPS-2.png";

// Plugs — silicon (new)
import imgSMSMDWP from "../../imports/SILICON_-_SMSMDWP_-_DUAL_WASHER_PULL_PLUGS.png";
import imgSMWC from "../../imports/SILICON_-_SMWC_-_WASHER_PULL_PLUS.png";
import imgSMCPP from "../../imports/SILICON_-_SMCPP_-_CHAMFER_PULL_PLUG.png";
import imgSMSMLPP from "../../imports/SILICON_-_SMSMLPP_-_LEADING_PULL_PLUGS.png";
import imgSMSFP from "../../imports/SILICON_-_SMSFP_-_FLANGED_PLUGS.png";
import imgSMTPP from "../../imports/SILICON_-_SMTPP_-_LEADING_THREAD_PLUG.png";
import imgSMSP from "../../imports/SILICON_-_SMSP_-_STEP_PLUGS.png";
import imgSMSPP from "../../imports/SILICON_-_SMSPP_-_PULL_PLUGS.png";
import imgSMP from "../../imports/SILICON_-_SMP_-_SILICON_PLUGS.png";
import imgSMPH from "../../imports/SILICON_-_SMP_-_PLUGS_WITH_HANDLES.png";
import imgSMHP from "../../imports/SILICON_-_SMHP_-_SILICON_HOLLOW_PLUGS.png";
import imgSMHPH from "../../imports/SILICON_-_SMHP_-_HOLLOW_PLUGS_WITH_HANDLES.png";
import imgSMW from "../../imports/SILICON_-_SMW_-_WASHER_PLUGS.png";
import imgSMWPP from "../../imports/SILICON_-_SMWPP_-_WASHER_PULL_PLUGS.png";
import imgSMWPPLS from "../../imports/SILICON_-_SMWPP-LS_-_PULL_PLUGS_LS_AND_WASHERS.png";

// Plugs — EPDM (new)
import imgSMEPFP from "../../imports/EPDM_-_SMEPFP_-_FLANGELESS_PLUGS.png";
import imgSMPP from "../../imports/EPDM_-_SMPP_-_PULL_PLUGS.png";
import imgSMRC from "../../imports/EPDM_-_SMRC_-_CAPS.png";

// Caps
import imgSMAZ from "../../imports/SILICON_-_SMAZ_-_AZ_CAPS.png";
import imgSMPS from "../../imports/VYNIL_-_SMPS_-_CAPS-2.png";
import imgSMZC from "../../imports/SILICON_-_SMZC_-_ZARK_CAPS-2.png";
import imgSMSC from "../../imports/SILICON_-_SMSC_-_SILICON_CAPS.png";

// Die-Cut Discs
import imgEZ from "../../imports/CREPE_PAPER_-_EZ_-_DIE-CUT_DISCS.png";
import imgPB from "../../imports/POLYESTER_-_PB_-_DIE-CUT_DISCS.png";
import imgAF from "../../imports/ALUMINUM_FOIL_-_AF_-_DIE-CUT_DISCS.png";
import imgPR from "../../imports/POLYESTER_-_PR_-_DIE-CUT_DISCS-2.png";
import imgKP1 from "../../imports/POLYMIDE_-_KP1_-_DIE-CUT_DISCS-2.png";
import imgSMPCD from "../../imports/POLYESTER_-_SMPCD_-_DONUTS.png";
import imgPC from "../../imports/POLYESTER_-_PC_-_DIE-CUT_DISCS.png";

// Tape
import imgSMPC023 from "../../imports/POLYESTER_-_SMPC023_-_TAPE.png";
import imgSMPC032 from "../../imports/POLYAMIDE_-_SMPC032_-_TAPE-2.png";
import imgSMPC031 from "../../imports/POLYAMIDE_-_SMPC031_-_TAPE-2.png";
import imgSMPC090 from "../../imports/POLYESTER_-_SMPC090_-_TAPE.png";
import imgSMPC021 from "../../imports/POLYESTER_-_SMPC021_-_TAPE.png";
import imgSMPC025 from "../../imports/POLYESTER_-_SMPC025_-_TAPE.png";
import imgSMPC040 from "../../imports/CREPE_PAPER_-_SMPC040_-_TAPE.png";
import imgSMPC050 from "../../imports/GLASS_CLOTH_-_SMPC050_-_TAPE.png";

// Hooks
import imgCHooks from "../../imports/MBII_-_SMC_-_C_HOOKS-2.png";
import imgSMSQV from "../../imports/MBII_-_SMSQV_-_SQUARE_V_HOOKS-2.png";
import imgSMS from "../../imports/MBII_-_SMS_-_S_HOOKS.png";
import imgSMV from "../../imports/MBII_-_SMV_-_V_HOOKS.png";
import imgSMCV from "../../imports/MBII_-_SMCV_-_CV_HOOKS.png";

// Cord
import imgSMCCord from "../../imports/SILICON_-_SMC_-_CORD-2.png";

// Tubing / Sheeting
import imgSMST from "../../imports/SILICON_-_SMST_-_TUBING.png";
import imgSMSTSTAR from "../../imports/SILICON_-_SMST_-_STAR_TUBING.png";
import imgMDT from "../../imports/SILICON_-_MDT_-_MULTI-DIAMETER_TUBING.png";
import imgSMSS from "../../imports/SILICON_-_SMSS_-_SHEETING.png";

type Category = "Todos" | "Thread Mask" | "Plugs" | "Caps" | "Die-Cut Discs" | "Donuts" | "Tape" | "Hooks" | "Cord" | "Tubing" | "Sheeting";

interface Product {
  sku: string;
  name: string;
  material: string;
  category: Category;
  img: string;
  slug?: string;
}

const products: Product[] = [
  // Thread Mask
  { sku: "SMTM", name: "Thread Mask", material: "Silicon", category: "Thread Mask", img: imgSMTM },
  { sku: "SMSMPMT", name: "Pipe Thread Mask", material: "Silicon", category: "Thread Mask", img: imgSMSMPMT },
  { sku: "SMSMWM", name: "Washer Mask", material: "Silicon", category: "Thread Mask", img: imgSMSMWM },

  // Plugs — silicon
  { sku: "SMDFPP", name: "Dual Flanged Pull Plugs", material: "Silicon", category: "Plugs", img: imgSMDFPP },
  { sku: "SMHCP", name: "Cone Plugs", material: "Silicon", category: "Plugs", img: imgSMHCP },
  { sku: "SMGN / SMBN", name: "Plugs Verde/Negro", material: "Neoprene", category: "Plugs", img: imgSMGNBN },
  { sku: "SMMFP", name: "Multi-Flanged Plug", material: "Silicon", category: "Plugs", img: imgSMMFP },
  { sku: "SMCSP", name: "Countersink Hole Plug", material: "Silicon", category: "Plugs", img: imgSMCSP },
  { sku: "SMHWP", name: "Hollow Washer Plugs", material: "Silicon", category: "Plugs", img: imgSMHWP },
  { sku: "SMFP", name: "Flangeless Plugs", material: "Silicon", category: "Plugs", img: imgSMFP },
  { sku: "SMMSP", name: "Miscellaneous Plugs", material: "Silicon", category: "Plugs", img: imgSMMSP },
  { sku: "SMSMFPP", name: "Flange Pull Plugs", material: "Silicon", category: "Plugs", img: imgSMSMFPP },
  { sku: "SMVCP", name: "Venting Caps", material: "Silicon", category: "Plugs", img: imgSMVCP },
  { sku: "SMSMDWP", name: "Dual Washer Pull Plugs", material: "Silicon", category: "Plugs", img: imgSMSMDWP },
  { sku: "SMWC", name: "Washer Pull Plus", material: "Silicon", category: "Plugs", img: imgSMWC },
  { sku: "SMCPP", name: "Chamfer Pull Plug", material: "Silicon", category: "Plugs", img: imgSMCPP },
  { sku: "SMSMLPP", name: "Leading Pull Plugs", material: "Silicon", category: "Plugs", img: imgSMSMLPP },
  { sku: "SMSFP", name: "Flanged Plugs", material: "Silicon", category: "Plugs", img: imgSMSFP },
  { sku: "SMTPP", name: "Leading Thread Plug", material: "Silicon", category: "Plugs", img: imgSMTPP },
  { sku: "SMSP", name: "Step Plugs", material: "Silicon", category: "Plugs", img: imgSMSP },
  { sku: "SMSPP", name: "Pull Plugs", material: "Silicon", category: "Plugs", img: imgSMSPP },
  { sku: "SMP", name: "Silicon Plugs", material: "Silicon", category: "Plugs", img: imgSMP },
  { sku: "SMP-H", name: "Plugs with Handles", material: "Silicon", category: "Plugs", img: imgSMPH, slug: "smph" },
  { sku: "SMHP", name: "Silicon Hollow Plugs", material: "Silicon", category: "Plugs", img: imgSMHP },
  { sku: "SMHP-H", name: "Hollow Plugs with Handles", material: "Silicon", category: "Plugs", img: imgSMHPH, slug: "smhph" },
  { sku: "SMW", name: "Washer Plugs", material: "Silicon", category: "Plugs", img: imgSMW },
  { sku: "SMWPP", name: "Washer Pull Plugs", material: "Silicon", category: "Plugs", img: imgSMWPP },
  { sku: "SMWPP-LS", name: "Pull Plugs LS & Washers", material: "Silicon", category: "Plugs", img: imgSMWPPLS, slug: "smwppls" },

  // EPDM plugs
  { sku: "SMEPFP", name: "Flangeless Plugs", material: "EPDM", category: "Plugs", img: imgSMEPFP },
  { sku: "SMPP", name: "Pull Plugs", material: "EPDM", category: "Plugs", img: imgSMPP },

  // Caps
  { sku: "SMAZ", name: "AZ Caps", material: "Silicon", category: "Caps", img: imgSMAZ },
  { sku: "SMPS", name: "Caps", material: "Vinyl", category: "Caps", img: imgSMPS },
  { sku: "SMZC", name: "Zark Caps", material: "Silicon", category: "Caps", img: imgSMZC },
  { sku: "SMSC", name: "Silicon Caps", material: "Silicon", category: "Caps", img: imgSMSC },
  { sku: "SMRC", name: "Caps", material: "EPDM", category: "Caps", img: imgSMRC },

  // Die-Cut Discs
  { sku: "EZ", name: "Die-Cut Discs", material: "Crepe Paper", category: "Die-Cut Discs", img: imgEZ },
  { sku: "PB", name: "Die-Cut Discs", material: "Polyester", category: "Die-Cut Discs", img: imgPB },
  { sku: "AF", name: "Die-Cut Discs", material: "Aluminum Foil", category: "Die-Cut Discs", img: imgAF },
  { sku: "PR", name: "Die-Cut Discs", material: "Polyester", category: "Die-Cut Discs", img: imgPR },
  { sku: "KP1", name: "Die-Cut Discs", material: "Polymide", category: "Die-Cut Discs", img: imgKP1 },
  { sku: "PC", name: "Die-Cut Discs", material: "Polyester", category: "Die-Cut Discs", img: imgPC },

  // Donuts
  { sku: "SMPCD", name: "Donuts", material: "Polyester", category: "Donuts", img: imgSMPCD },

  // Tape
  { sku: "SMPC023", name: "Tape", material: "Polyester", category: "Tape", img: imgSMPC023 },
  { sku: "SMPC090", name: "Tape", material: "Polyester", category: "Tape", img: imgSMPC090 },
  { sku: "SMPC021", name: "Tape", material: "Polyester", category: "Tape", img: imgSMPC021 },
  { sku: "SMPC025", name: "Tape", material: "Polyester", category: "Tape", img: imgSMPC025 },
  { sku: "SMPC031", name: "Tape", material: "Polyamide", category: "Tape", img: imgSMPC031 },
  { sku: "SMPC032", name: "Tape", material: "Polyamide", category: "Tape", img: imgSMPC032 },
  { sku: "SMPC040", name: "Tape", material: "Crepe Paper", category: "Tape", img: imgSMPC040 },
  { sku: "SMPC050", name: "Tape", material: "Glass Cloth", category: "Tape", img: imgSMPC050 },

  // Hooks
  { sku: "SMC (Hooks)", name: "C Hooks", material: "MBII", category: "Hooks", img: imgCHooks, slug: "smchooks" },
  { sku: "SMSQV", name: "Square V Hooks", material: "MBII", category: "Hooks", img: imgSMSQV },
  { sku: "SMS", name: "S Hooks", material: "MBII", category: "Hooks", img: imgSMS, slug: "smshooks" },
  { sku: "SMV", name: "V Hooks", material: "MBII", category: "Hooks", img: imgSMV, slug: "smvhooks" },
  { sku: "SMCV", name: "CV Hooks", material: "MBII", category: "Hooks", img: imgSMCV, slug: "smcvhooks" },

  // Cord
  { sku: "SMC (Cord)", name: "Cord", material: "Silicon", category: "Cord", img: imgSMCCord, slug: "smcord" },

  // Tubing
  { sku: "SMST", name: "Tubing", material: "Silicon", category: "Tubing", img: imgSMST },
  { sku: "SMST-STAR", name: "Star Tubing", material: "Silicon", category: "Tubing", img: imgSMSTSTAR, slug: "smststar" },
  { sku: "MDT", name: "Multi-Diameter Tubing", material: "Silicon", category: "Tubing", img: imgMDT },

  // Sheeting
  { sku: "SMSS", name: "Sheeting", material: "Silicon", category: "Sheeting", img: imgSMSS },
];

const categories: Category[] = [
  "Todos", "Thread Mask", "Plugs", "Caps", "Die-Cut Discs", "Donuts",
  "Tape", "Hooks", "Cord", "Tubing", "Sheeting",
];

const categoryColors: Record<Category, string> = {
  "Todos": "#2c2c64",
  "Thread Mask": "#861e5c",
  "Plugs": "#2c2c64",
  "Caps": "#861e5c",
  "Die-Cut Discs": "#2c2c64",
  "Donuts": "#861e5c",
  "Tape": "#2c2c64",
  "Hooks": "#861e5c",
  "Cord": "#2c2c64",
  "Tubing": "#861e5c",
  "Sheeting": "#2c2c64",
};

export function Catalogo() {
  useMeta({ title: "Catálogo de Productos | Smart Industries", description: "Explora nuestro catálogo completo de plugs, tapas, cintas, ganchos y soluciones de masking industrial." });
  const [active, setActive] = useState<Category>("Todos");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = active === "Todos" || p.category === active;
    const matchSearch = search === "" ||
      p.sku.toLowerCase().includes(search.toLowerCase()) ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.material.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const counts: Record<string, number> = { Todos: products.length };
  categories.slice(1).forEach((c) => {
    counts[c] = products.filter((p) => p.category === c).length;
  });

  function getSlug(p: Product): string {
    if (p.slug) return p.slug;
    return SKU_SLUG[p.sku] ?? "";
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-[#2c2c64] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff,#fff 1px,transparent 1px,transparent 32px)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#861e5c]" />
            <span className="text-[#861e5c] uppercase tracking-[0.2em]" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.68rem", fontWeight: 500 }}>
              Catálogo SMART CT
            </span>
          </div>
          <h1 className="text-white leading-tight" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Catálogo de<br /><span className="text-[#861e5c]">Productos.</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.95rem" }}>
            Plugs, caps, discos, tapas, ganchos y más — todos fabricados con los más altos estándares industriales.
          </p>
        </div>
      </div>

      {/* Filter + Search bar */}
      <div className="bg-[#000000] sticky top-16 z-40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-center gap-2 flex-wrap flex-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 text-xs font-semibold transition-all duration-150 ${
                  active === cat
                    ? "bg-[#861e5c] text-white"
                    : "text-white/40 hover:text-white border border-white/10 hover:border-white/30"
                }`}
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em" }}
              >
                {cat.toUpperCase()}
                <span className={`ml-1.5 text-[0.65rem] ${active === cat ? "text-white/70" : "text-white/25"}`}>
                  {counts[cat] || 0}
                </span>
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Buscar SKU o nombre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-2 focus:outline-none focus:border-[#861e5c] transition-colors md:w-56"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem" }}
          />
        </div>
      </div>

      {/* Product grid */}
      <div className="bg-[#EFEFEF] py-12">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
              No se encontraron productos.
            </div>
          ) : (
            <>
              <p className="text-gray-500 mb-6" style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                {filtered.length} PRODUCTO{filtered.length !== 1 ? "S" : ""}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px bg-gray-300">
                {filtered.map((product, i) => {
                  const slug = getSlug(product);
                  return (
                    <Link
                      key={`${product.sku}-${i}`}
                      to={slug ? `/catalogo/${slug}` : "/catalogo"}
                      className="group bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
                    >
                      <div className="bg-white p-4 flex items-center justify-center" style={{ height: "200px" }}>
                        <img
                          src={product.img}
                          alt={`${product.sku} - ${product.name}`}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 border-t-2 border-transparent group-hover:border-[#861e5c] transition-colors flex flex-col flex-1 bg-white">
                        <div
                          className="text-[0.6rem] font-semibold mb-1.5 uppercase tracking-widest"
                          style={{ fontFamily: "'Roboto Mono', monospace", color: categoryColors[product.category] }}
                        >
                          {product.category}
                        </div>
                        <div
                          className="text-[#000000] font-black leading-none mb-1"
                          style={{ fontFamily: "'Roboto Slab', serif", fontSize: "1.1rem" }}
                        >
                          {product.sku}
                        </div>
                        <div
                          className="text-[#861e5c] font-semibold leading-snug mb-2"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem" }}
                        >
                          {product.name}
                        </div>
                        <div
                          className="text-gray-400 mt-auto"
                          style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
                        >
                          {product.material}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#000000] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white" style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 900, fontSize: "1.4rem" }}>
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-white/50 mt-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.875rem" }}>
              Tenemos más de 9,000 productos estándar. Contáctanos con tu especificación.
            </p>
          </div>
          <Link
            to="/servicio"
            className="shrink-0 px-8 py-4 bg-[#861e5c] text-white hover:bg-[#6e1a4d] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.08em" }}
          >
            SOLICITAR COTIZACIÓN
          </Link>
        </div>
      </div>
    </div>
  );
}
