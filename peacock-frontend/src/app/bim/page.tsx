import { Box, PlaySquare, Calculator, Leaf, HardHat } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function BIM() {
    const bimDimensions = [
        { title: "3D BIM | Visualization", icon: <Box size={36} />, desc: "Architectural, structural, and MEP modeling. Virtual clash detection and coordination to prevent on-site rework." },
        { title: "4D BIM | Scheduling", icon: <PlaySquare size={36} />, desc: "Integration of time-related data for project scheduling. Visualizing construction steps sequentially against the timeline." },
        { title: "5D BIM | Estimation", icon: <Calculator size={36} />, desc: "Extracting highly accurate quantities and cost estimates directly from the intelligent model for strict budget controls." },
        { title: "6D BIM | Sustainability", icon: <Leaf size={36} />, desc: "Energy analysis, lighting simulation, and overall sustainability modeling checking against Green Building standard compliances." },
        { title: "7D BIM | Facility Mgt", icon: <HardHat size={36} />, desc: "Post-construction asset lifecycle management. Integrating manuals, warranties, and maintenance schedules into the Digital Twin." },
    ];

    return (
        <div className="pt-32 pb-20 bg-white">
            <section className="bg-primary rounded-[3rem] mx-4 md:mx-8 text-white py-32 md:py-48 mb-32 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-10 mix-blend-screen bg-cover bg-center" />
                <FadeIn className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
                    <span className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest mb-10 shadow-lg shadow-white/5">
                        Technical Precision
                    </span>
                    <h1 className="font-jakarta text-6xl md:text-[5.5rem] font-bold mb-10 leading-[1.05] tracking-tight">
                        Our Digital <span className="text-accent underline decoration-4 decoration-accent/50 underline-offset-[16px]">Twin.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-12 max-w-3xl mx-auto">
                        Leading the Middle East in Building Information Modeling (BIM). We provide comprehensive 3D to 7D services in compliance with ISO 19650 standards.
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
                                Peacock is a pioneer in implementing intelligent models for Heavy Electrical Substations (AIS/GIS) and complex MEP projects.
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
