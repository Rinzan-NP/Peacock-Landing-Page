import { Box, PlaySquare, Calculator, Leaf, HardHat } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const bimDimensions = [
    { title: "3D BIM", sub: "Visualisation", icon: <Box size={22} />, desc: "Architectural, structural, and MEP modelling. Virtual clash detection and coordination to prevent on-site rework." },
    { title: "4D BIM", sub: "Scheduling", icon: <PlaySquare size={22} />, desc: "Integration of time-related data for project scheduling. Visualising construction steps sequentially against the timeline." },
    { title: "5D BIM", sub: "Estimation", icon: <Calculator size={22} />, desc: "Extracting highly accurate quantities and cost estimates directly from the intelligent model for strict budget controls." },
    { title: "6D BIM", sub: "Sustainability", icon: <Leaf size={22} />, desc: "Energy analysis, lighting simulation, and sustainability modelling checking against Green Building standard compliances." },
    { title: "7D BIM", sub: "Facility Mgt", icon: <HardHat size={22} />, desc: "Post-construction asset lifecycle management. Integrating manuals, warranties, and maintenance schedules into the Digital Twin." },
];

// Asymmetric radius cycle for dimension rows
const rowRadii = [
    "1.5rem 0.375rem 1.5rem 0.375rem",
    "0.375rem 1.5rem 0.375rem 1.5rem",
    "1rem 0.375rem 2rem 0.375rem",
    "0.375rem 2rem 0.375rem 1rem",
    "1.5rem 0.75rem 0.375rem 1.5rem",
];

export default function BIM() {
    return (
        <div className="pt-32 pb-20 bg-white">
            {/* Hero — asymmetric rounded banner */}
            <section
                className="mx-4 md:mx-8 mb-28 relative overflow-hidden shadow-2xl min-h-[480px] flex items-end bg-primary"
                style={{ borderRadius: "0.75rem 3rem 0.75rem 3rem" }}
            >
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-[0.08] mix-blend-screen bg-cover bg-center" />

                {/* Organic tilted background accent */}
                <div
                    className="absolute right-[-5%] top-[-10%] w-[55%] h-[130%] bg-accent/[0.06] pointer-events-none"
                    style={{ borderRadius: "40% 60% 60% 40% / 50% 40% 60% 50%", transform: "rotate(-6deg)" }}
                />

                {/* BIM watermark — stays as large text */}
                <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end pr-12 select-none pointer-events-none" aria-hidden>
                    <span className="font-display font-bold text-white/[0.05] leading-none" style={{ fontSize: "clamp(160px, 22vw, 300px)", letterSpacing: "-0.06em" }}>
                        BIM
                    </span>
                </div>

                {/* Dimension pills — top right */}
                <div className="absolute top-8 right-8 flex gap-2 z-10">
                    {["3D", "4D", "5D", "6D", "7D"].map((d, i) => (
                        <span
                            key={d}
                            className="px-3 py-1 bg-accent/20 border border-accent/30 text-accent font-body font-bold text-xs tracking-widest"
                            style={{ borderRadius: i % 2 === 0 ? "1rem 0.25rem 1rem 0.25rem" : "0.25rem 1rem 0.25rem 1rem" }}
                        >
                            {d}
                        </span>
                    ))}
                </div>

                <FadeIn className="container relative z-10 mx-auto px-8 md:px-16 py-16 md:py-20 max-w-5xl">
                    <p className="font-body text-accent text-xs font-bold uppercase tracking-[0.25em] mb-5 flex items-center gap-3">
                        <span className="w-5 h-px bg-accent" /> Technical Precision
                    </p>
                    <h1 className="font-display font-bold text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.04em" }}>
                        Our Digital <span className="text-accent">Twin.</span>
                    </h1>
                    <p className="font-body text-white/65 text-lg leading-relaxed max-w-2xl">
                        A digital representation of the physical and functional characteristics of a facility — forming a reliable knowledge resource for decisions across its entire life-cycle.
                    </p>
                </FadeIn>
            </section>

            {/* Content */}
            <section className="container mx-auto px-6 mb-36">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* Sticky left */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32">
                        <FadeIn>
                            <p className="font-body text-accent text-xs font-bold uppercase tracking-[0.25em] mb-5 flex items-center gap-3">
                                <span className="w-5 h-px bg-accent" /> Substation Modelling
                            </p>
                            <h2 className="font-display font-bold text-primary leading-[0.95] mb-8" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.04em" }}>
                                Empowering Smart Buildings.
                            </h2>
                            <p className="font-body text-slate-500 text-base leading-relaxed mb-8">
                                Peacock is a pioneer in implementing intelligent models for Gas Insulated Switchgear (GIS), Structural BIM, Firefighting systems, and complex MEP coordination.
                            </p>
                            {/* Asymmetric blockquote accent */}
                            <div
                                className="border-l-4 border-accent pl-6 py-2 bg-slate-50"
                                style={{ borderRadius: "0 1.5rem 1.5rem 0" }}
                            >
                                <p className="font-display font-bold text-primary italic text-xl leading-snug" style={{ letterSpacing: "-0.02em" }}>
                                    "Our 7D BIM solutions transform static building data into a living, manageable asset ecosystem."
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right: dimension rows — each has a unique asymmetric shape */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        {bimDimensions.map((dim, idx) => (
                            <FadeIn key={idx} delay={idx * 0.08}>
                                <div
                                    className="flex gap-6 bg-white p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-accent/30 transition-all duration-300 group"
                                    style={{ borderRadius: rowRadii[idx] }}
                                >
                                    <div
                                        className="w-11 h-11 shrink-0 bg-slate-50 border border-slate-100 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                                        style={{ borderRadius: idx % 2 === 0 ? "0.375rem 1rem 0.375rem 1rem" : "1rem 0.375rem 1rem 0.375rem" }}
                                    >
                                        {dim.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <h3 className="font-display font-bold text-primary text-xl" style={{ letterSpacing: "-0.02em" }}>{dim.title}</h3>
                                            <span className="font-body text-accent text-xs font-bold uppercase tracking-widest">{dim.sub}</span>
                                        </div>
                                        <p className="font-body text-slate-500 text-sm leading-relaxed">{dim.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
