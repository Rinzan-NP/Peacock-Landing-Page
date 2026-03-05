"use client";
import { useState } from "react";
import {
    Zap, Network, Crosshair, Wrench, LayoutTemplate,
    Cpu, Box, TestTube, ChevronDown, ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";

const services = [
    {
        tag: "Power",
        icon: <Zap size={22} />,
        title: "Primary Engineering",
        subtitle: "Substation Engineering Design",
        summary:
            "Comprehensive primary design services for substations of any size and voltage level, adhering strictly to international standards and GASCO DGS requirements.",
        bullets: [
            "Substation fault / short-circuit calculation",
            "Substation earthing and earth grid calculation",
            "Substation battery, charger sizing, and UPS sizing",
            "Power and auxiliary equipment cable sizing",
            "Low-voltage AC & DC distribution systems settings, grading & coordination studies",
            "CT / VT compatibility calculations",
            "Formulation of technical specifications for substation equipment & auxiliaries",
            "Formulation of testing plans and inspection procedures",
            "Substation cable spider / termination engineering documentation",
            "Substation cable schedules and interface documentation",
            "Substation projects site survey support and documentation",
            "Power system grounding",
            "Any power system-related customised primary design services on specific request",
        ],
        r: "2rem 0.5rem 2rem 0.5rem",
        ir: "0.5rem 1.25rem 0.5rem 1.25rem",
    },
    {
        tag: "Automation",
        icon: <Network size={22} />,
        title: "Secondary Engineering",
        subtitle: "Control & Protection Panel Design",
        summary:
            "End-to-end secondary engineering for control and relay protection panels, from schematic design through internal wiring to trip matrix logic.",
        bullets: [
            "Control and relay protection panel AC & DC schematic designing",
            "Control and relay protection panel AC & DC schematic drafting",
            "Control and relay protection panel internal wiring designing",
            "Control and relay protection panel internal wiring drafting",
            "Control and relay protection panel logic designing",
            "Looping diagrams and power system protection studies",
            "Any power system-related customised secondary design services on specific request",
        ],
        r: "0.5rem 2rem 0.5rem 2rem",
        ir: "1.25rem 0.5rem 1.25rem 0.5rem",
    },
    {
        tag: "Drafting",
        icon: <Crosshair size={22} />,
        title: "Engineering Design & Drafting",
        subtitle: "AutoCAD · MicroStation · CAD Conversion",
        summary:
            "Precise CAD drafting and document conversion services using AutoCAD and MicroStation for all electrical and structural disciplines.",
        bullets: [
            "SCADA / RTU / SAS integration drawings",
            "Fiber optic engineering and cable routing drawings",
            "Power cable routing and layout drawings",
            "Structural analysis drawings for substation buildings",
            "AutoCAD and MicroStation domain services",
            "Conversion of PDF, TIFF, JPEG, GIF, BMP, and PNG documents to accurate multi-layer CAD drawings",
            "Raster (hard copy) to vector (soft copy) conversion using vectorization",
            "Architectural, civil, and structural drawings",
            "Shop drawings and project specifications",
            "Coordination between all engineering disciplines",
        ],
        r: "2rem 0.5rem 0.5rem 2rem",
        ir: "0.5rem 0.5rem 1.25rem 0.5rem",
    },
    {
        tag: "Structural",
        icon: <Wrench size={22} />,
        title: "Structural Design",
        subtitle: "International Codes · GASCO DGS",
        summary:
            "Full structural design service using British, American, and Euro codes alongside GASCO DGS — from initial calculations through to construction-ready shop drawings.",
        bullets: [
            "Structural design calculations using international codes & GASCO DGS (British, American & Euro Codes)",
            "Architectural, civil & structural drawings",
            "Shop drawings and project specifications",
            "Coordination between other disciplines",
            "Design calculations for special structures",
        ],
        r: "0.5rem 2rem 2rem 0.5rem",
        ir: "1.25rem 0.5rem 0.5rem 0.5rem",
    },
    {
        tag: "Staffing",
        icon: <Box size={22} />,
        title: "Project Support",
        subtitle: "Staff Recruitment & Deployment",
        summary:
            "Providing experienced engineering and project management personnel on a contract or secondment basis, fully embedded in your project team.",
        bullets: [
            "Site engineers and commissioning experts",
            "Project supervisors and construction managers",
            "Project planners and planning engineers",
            "Cost control and quality control engineers",
            "Document controllers and admin support staff",
            "AutoCAD and BIM operators",
            "Power system protection engineers",
            "Turnkey manpower solutions for any project phase",
        ],
        r: "1.5rem 0.5rem 1.5rem 1.5rem",
        ir: "0.5rem 1.25rem 0.5rem 0.5rem",
    },
    {
        tag: "BIM",
        icon: <Box size={22} />,
        title: "BIM Services",
        subtitle: "3D – 7D Building Information Modelling",
        summary:
            "Intelligent BIM from concept to facility management. We deliver constructability analysis, clash detection, 4D scheduling, 5D cost estimation, and 6D sustainability compliance.",
        bullets: [
            "BIM management and design coordination",
            "Design coordination and construction coordination",
            "BIM for facility management and operations",
            "Constructability analysis",
            "4D — Scheduling / phasing integration",
            "5D — Cost estimation from model quantities",
            "6D — LEED / sustainability analysis",
            "Clash detection and resolution",
            "Site analysis and logistics planning",
            "Digital twin delivery and handover",
        ],
        r: "0.5rem 1.5rem 1.5rem 0.5rem",
        ir: "0.5rem 0.5rem 0.5rem 1.25rem",
    },
    {
        tag: "Rentals",
        icon: <TestTube size={22} />,
        title: "Testing Equipment Rentals",
        subtitle: "Calibrated Test Sets · Short-Term Hire",
        summary:
            "A fleet of calibrated, ready-to-deploy testing equipment available for short or long-term hire to support commissioning and maintenance activities.",
        bullets: [
            "Primary injection test sets",
            "Secondary injection test sets",
            "Insulation resistance testers (Megger)",
            "Micro-ohm meters",
            "CT analysers",
            "Relay test sets",
            "Transformer turns ratio (TTR) meters",
        ],
        r: "2rem 0.5rem 2rem 0.5rem",
        ir: "0.5rem 1.25rem 0.5rem 1.25rem",
    },
    {
        tag: "Printing",
        icon: <LayoutTemplate size={22} />,
        title: "Printing & Copying",
        subtitle: "Large Format · Digital · Binding",
        summary:
            "High-volume, high-quality printing and document services — from large-format engineering plots to collated and bound project manuals.",
        bullets: [
            "High-speed digital copying and printing (colour and B&W)",
            "Large format plotting and document scanning (B&W and colour)",
            "Digital document archiving",
            "Manuals printing, collating, and binding",
            "Posters, signage, and graphics printing",
            "Finishing services: Comb, Wire-O, Velo binding, Laminating, Mounting",
        ],
        r: "0.5rem 2rem 0.5rem 2rem",
        ir: "1.25rem 0.5rem 1.25rem 0.5rem",
    },
    {
        tag: "Training",
        icon: <Cpu size={22} />,
        title: "Corporate Training Courses",
        subtitle: "Technical & Management Development",
        summary:
            "Accredited training courses for engineering and management professionals — covering power systems, protection, relay technology, and business leadership.",
        bullets: [
            "Instrument transformers — an overview",
            "Site conditions and testing procedures",
            "Basic HVDC training",
            "Power system protection courses",
            "Substation design & engineering courses",
            "Analysis and protection of power systems — industry level",
            "Numerical relays theory and application",
            "Management and leadership",
            "Marketing management",
            "Management information systems",
            "PMP exam preparation",
            "ISO 9001 and HSE management systems",
        ],
        r: "2rem 0.5rem 0.5rem 2rem",
        ir: "0.5rem 0.5rem 1.25rem 0.5rem",
    },
];

// ─── Expandable service row ────────────────────────────────────────────────────
function ServiceCard({ srv, idx }: { srv: (typeof services)[0]; idx: number }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
            <div
                className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                style={{ borderRadius: srv.r }}
            >
                {/* Card header — always visible */}
                <button
                    className="w-full text-left p-8 flex items-start justify-between gap-6 focus:outline-none"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                >
                    <div className="flex items-start gap-5 flex-1">
                        <div
                            className="w-11 h-11 shrink-0 bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300"
                            style={{ borderRadius: srv.ir }}
                        >
                            {srv.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                <h3
                                    className="font-display font-bold text-primary group-hover:text-accent transition-colors"
                                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", letterSpacing: "-0.02em" }}
                                >
                                    {srv.title}
                                </h3>
                                <span
                                    className="font-body text-[10px] uppercase tracking-widest font-bold text-accent border border-accent/25 px-2.5 py-0.5 shrink-0"
                                    style={{ borderRadius: idx % 2 === 0 ? "1rem 0.25rem 1rem 0.25rem" : "0.25rem 1rem 0.25rem 1rem" }}
                                >
                                    {srv.tag}
                                </span>
                            </div>
                            <p className="font-body text-slate-400 text-xs uppercase tracking-widest mb-3">{srv.subtitle}</p>
                            <p className="font-body text-slate-500 text-sm leading-relaxed">{srv.summary}</p>
                        </div>
                    </div>

                    {/* Toggle icon */}
                    <div
                        className="shrink-0 w-9 h-9 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-accent group-hover:text-accent transition-all duration-300 mt-1"
                        style={{ borderRadius: "0.375rem 1rem 0.375rem 1rem" }}
                    >
                        <motion.div
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <ChevronDown size={16} />
                        </motion.div>
                    </div>
                </button>

                {/* Expanded bullet list */}
                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="border-t border-slate-100 px-8 py-6 bg-slate-50/60">
                                <p className="font-body text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                                    What's included
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                                    {srv.bullets.map((b, i) => (
                                        <li key={i} className="flex items-start gap-3 font-body text-sm text-slate-600 leading-snug">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Services() {
    return (
        <div className="pt-32 pb-20 bg-white">
            {/* ── Hero banner ─────────────────────────────────────────────────── */}
            <section
                className="mx-4 md:mx-8 mb-20 relative overflow-hidden shadow-2xl min-h-[420px] flex items-end bg-primary"
                style={{ borderRadius: "3rem 0.75rem 3rem 0.75rem" }}
            >
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-[0.08] mix-blend-screen bg-cover bg-center" />

                {/* Tilted organic accent */}
                <div
                    className="absolute right-[-8%] top-[-20%] w-[50%] h-[140%] bg-accent/[0.07] pointer-events-none"
                    style={{ borderRadius: "30% 70% 70% 30% / 50% 60% 40% 50%", transform: "rotate(5deg)" }}
                />

                {/* SVC watermark */}
                <div
                    className="absolute right-8 top-0 bottom-0 flex items-center justify-end select-none pointer-events-none"
                    aria-hidden
                >
                    <span
                        className="font-display font-bold text-white/[0.045] leading-none"
                        style={{ fontSize: "clamp(140px, 18vw, 260px)", letterSpacing: "-0.06em" }}
                    >
                        SVC
                    </span>
                </div>

                <FadeIn className="container relative z-10 mx-auto px-8 md:px-14 py-16 md:py-20 max-w-5xl">
                    <p className="font-body text-accent text-xs font-bold uppercase tracking-[0.25em] mb-5 flex items-center gap-3">
                        <span className="w-5 h-px bg-accent" /> What We Do
                    </p>
                    <h1
                        className="font-display font-bold text-white leading-[0.92] mb-6"
                        style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.04em" }}
                    >
                        Our Core <span className="text-accent">Services.</span>
                    </h1>
                    <p className="font-body text-white/65 text-base leading-relaxed max-w-2xl">
                        From Extra High Voltage substations to digital twins and reality capture — total
                        engineering outsourcing for global leaders. Click any service to see exactly what's included.
                    </p>
                </FadeIn>
            </section>

            {/* ── Engineering projects intro strip ────────────────────────────── */}
            <FadeIn>
                <div className="container mx-auto px-6 max-w-7xl mb-12">
                    <div
                        className="bg-primary/[0.03] border border-primary/10 px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4"
                        style={{ borderRadius: "0.5rem 2rem 0.5rem 2rem" }}
                    >
                        <div className="flex-1">
                            <p className="font-display font-bold text-primary text-lg mb-1" style={{ letterSpacing: "-0.02em" }}>
                                Engineering Projects
                            </p>
                            <p className="font-body text-slate-500 text-sm leading-relaxed">
                                Power system design, installation, testing, and commissioning · Maintenance of power systems
                                and equipment · Pipe and cable laying works · Customised projects on request.
                            </p>
                        </div>
                        <a
                            href="/contact"
                            className="shrink-0 inline-flex items-center gap-2 font-body font-bold text-xs text-white bg-primary hover:bg-accent transition-colors px-5 py-2.5 uppercase tracking-widest"
                            style={{ borderRadius: "0.375rem 1rem 0.375rem 1rem" }}
                        >
                            Enquire <ArrowUpRight size={13} />
                        </a>
                    </div>
                </div>
            </FadeIn>

            {/* ── Service cards — expandable ───────────────────────────────────── */}
            <section className="container mx-auto px-6 mb-20 max-w-7xl">
                <FadeIn className="mb-10">
                    <p className="font-body text-accent text-[11px] font-bold uppercase tracking-[0.25em] flex items-center gap-3">
                        <span className="w-5 h-px bg-accent" /> Tap a service to see full details
                    </p>
                </FadeIn>

                <div className="flex flex-col gap-4">
                    {services.map((srv, idx) => (
                        <ServiceCard key={idx} srv={srv} idx={idx} />
                    ))}
                </div>
            </section>
        </div>
    );
}
