import { Zap, Crosshair, Network, Cpu, LayoutTemplate, Briefcase, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const primaryServices = [
    {
        icon: <Zap size={22} />,
        title: "Primary Engineering",
        desc: "Substation site surveys, physical layouts, cable/wiring schedules, AC/DC auxiliary systems, grounding & lightning protection, and relay coordination.",
        tag: "Power"
    },
    {
        icon: <Network size={22} />,
        title: "Secondary Engineering",
        desc: "Schematics and wiring diagrams for CRP/LCC/RTU, trip matrix logic, and panel internal wiring diagrams.",
        tag: "Automation"
    },
    {
        icon: <Crosshair size={22} />,
        title: "Engineering Design & Drafting",
        desc: "SCADA/RTU/SAS integration, fiber optic engineering, power cable routing, and structural analysis for substation buildings.",
        tag: "Drafting"
    },
    {
        icon: <Briefcase size={22} />,
        title: "Project Support",
        desc: "Providing site engineers, commissioning experts, supervisors, planners, and AutoCAD operators for turnkey project requirements.",
        tag: "Personnel"
    },
    {
        icon: <LayoutTemplate size={22} />,
        title: "Printing & Copying",
        desc: "High-speed digital copying, large format plotting, scanning, and binding services.",
        tag: "Printing"
    },
    {
        icon: <Cpu size={22} />,
        title: "Corporate Training Courses",
        desc: "Electricity courses (Energy Essentials, Power System Engineering) and management courses (PMP, ISO 9001, HSE).",
        tag: "Training"
    },
];

export default function Services() {
    return (
        <div className="pt-32 pb-20 bg-white">
            {/* Hero — full-width banner, text left-anchored */}
            <section className="bg-primary mx-4 md:mx-8 mb-28 relative overflow-hidden shadow-2xl rounded-2xl min-h-[420px] flex items-end">
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-[0.08] mix-blend-screen bg-cover bg-center" />
                {/* Decorative diagonal stripe */}
                <div className="absolute right-0 top-0 bottom-0 w-[38%] bg-accent/8 [clip-path:polygon(18%_0,100%_0,100%_100%,0%_100%)]" />
                {/* Large watermark */}
                <div className="absolute right-8 top-0 bottom-0 flex items-center justify-end select-none pointer-events-none" aria-hidden>
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
                        Our Core{" "}
                        <span className="text-accent">Services.</span>
                    </h1>
                    <p className="font-body text-white/65 text-lg leading-relaxed max-w-2xl">
                        From Extra High Voltage substations to digital twins and reality capture —
                        total project support for global leaders.
                    </p>
                </FadeIn>
            </section>

            {/* Services list — editorial table-style, not identical grid cards */}
            <section className="container mx-auto px-6 mb-36 max-w-7xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {primaryServices.map((srv, idx) => (
                        <FadeIn key={idx} delay={idx * 0.07}>
                            <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 hover:border-accent/20 transition-all duration-300 flex flex-col h-full group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                                        {srv.icon}
                                    </div>
                                    <span className="font-body text-[10px] uppercase tracking-widest font-bold text-accent border border-accent/20 rounded-full px-2.5 py-1">
                                        {srv.tag}
                                    </span>
                                </div>
                                <h3
                                    className="font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors"
                                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", letterSpacing: "-0.02em" }}
                                >
                                    {srv.title}
                                </h3>
                                <p className="font-body text-slate-500 text-sm leading-relaxed flex-grow mb-6">{srv.desc}</p>
                                <div className="inline-flex items-center gap-1.5 font-body font-semibold text-xs text-primary group-hover:text-accent transition-colors uppercase tracking-widest">
                                    Details <ArrowUpRight size={13} />
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </div>
    );
}
