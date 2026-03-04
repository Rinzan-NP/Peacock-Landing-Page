import { Box, PlaySquare, Calculator, Leaf, HardHat } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const bimDimensions = [
    { title: "3D BIM | Visualization", icon: <Box size={36} />, desc: "Architectural, structural, and MEP modeling. Virtual clash detection and coordination to prevent on-site rework." },
    { title: "4D BIM | Scheduling", icon: <PlaySquare size={36} />, desc: "Integration of time-related data for project scheduling. Visualizing construction steps sequentially against the timeline." },
    { title: "5D BIM | Estimation", icon: <Calculator size={36} />, desc: "Extracting highly accurate quantities and cost estimates directly from the intelligent model for strict budget controls." },
    { title: "6D BIM | Sustainability", icon: <Leaf size={36} />, desc: "Energy analysis, lighting simulation, and overall sustainability modeling checking against Green Building standard compliances." },
    { title: "7D BIM | Facility Mgt", icon: <HardHat size={36} />, desc: "Post-construction asset lifecycle management. Integrating manuals, warranties, and maintenance schedules into the Digital Twin." },
];

export default function BIM() {
    return (
        <div className="pt-32 pb-20 bg-white">
            {/* Hero — centered with grid pattern overlay and large dimension labels */}
            <section className="bg-primary rounded-[3rem] mx-4 md:mx-8 mb-32 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-10 mix-blend-screen bg-cover bg-center" />
                {/* Grid dot pattern */}
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />
                {/* Big watermark text */}
                <div className="absolute bottom-0 right-0 text-[200px] font-black text-white/5 leading-none select-none pointer-events-none font-jakarta">
                    BIM
                </div>

                <FadeIn className="container relative z-10 mx-auto px-8 md:px-16 py-24 md:py-36 text-center max-w-4xl">
                    <span className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest mb-8 shadow-lg shadow-white/5">
                        Technical Precision
                    </span>
                    {/* Dimension pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {["3D", "4D", "5D", "6D", "7D"].map((d) => (
                            <span key={d} className="px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-bold text-sm tracking-widest">
                                {d}
                            </span>
                        ))}
                    </div>
                    <h1
                        className="font-jakarta text-5xl md:text-[5rem] font-bold leading-[1.05] tracking-tight text-white mb-8"
                        style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
                    >
                        Our Digital{" "}
                        <span className="text-accent underline decoration-4 decoration-accent/50 underline-offset-[12px]">
                            Twin.
                        </span>
                    </h1>
                    <p className="text-xl text-white/75 leading-relaxed font-light mb-12 max-w-3xl mx-auto">
                        A digital representation of physical and functional characteristics of a facility. It serves as a shared knowledge resource for information about a facility, forming a reliable basis for decisions during its life-cycle.
                    </p>
                </FadeIn>
            </section>

            <section className="container mx-auto px-6 mb-40">
                <div className="grid lg:grid-cols-12 gap-20 items-center">
                    <div className="lg:col-span-5">
                        <FadeIn>
                            <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-4">
                                <span className="w-12 h-[3px] bg-accent rounded-full"></span> Substation Modeling
                            </h2>
                            <h3 className="font-jakarta text-5xl md:text-6xl font-bold text-primary mb-10 leading-[1.05] tracking-tight">
                                Empowering Smart Buildings.
                            </h3>
                            <p className="text-slate-600 text-xl leading-relaxed mb-8 font-medium">
                                Peacock is a pioneer in implementing intelligent models for Gas Insulated Switchgear (GIS), Structural BIM, Firefighting systems, and complex MEP coordination.
                            </p>
                            <div className="bg-light p-10 rounded-[2.5rem] border border-slate-200 mt-10">
                                <p className="font-semibold text-primary italic text-2xl leading-relaxed">
                                    "Our 7D BIM solutions transform static building data into a living, manageable asset ecosystem."
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-7 grid gap-8">
                        {bimDimensions.map((dim, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="flex gap-8 bg-white p-10 md:p-12 rounded-[3rem] shadow-xl shadow-primary/5 hover:-translate-y-2 hover:shadow-2xl hover:border-accent/40 transition-all duration-500 border border-slate-100 group">
                                    <div className="w-20 h-20 shrink-0 bg-light text-primary rounded-[2rem] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                        {dim.icon}
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="font-jakarta text-3xl font-bold text-primary mb-4">{dim.title}</h4>
                                        <p className="text-slate-500 font-medium text-lg leading-relaxed">{dim.desc}</p>
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
