import { Zap, Crosshair, Network, Cpu, LayoutTemplate, Briefcase } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function Services() {
    const primaryServices = [
        {
            icon: <Zap size={36} />,
            title: "Primary Engineering",
            desc: "Substation Fault & Short Circuit calculations, earthing grid designs, battery/charger and UPS sizing, CT/VT compatibility, and equipment technical specifications."
        },
        {
            icon: <Network size={36} />,
            title: "Secondary Engineering",
            desc: "Comprehensive protection relay settings (PSCAD / ETAP), selectivity studies, control/protection logic diagrams, and Substation Automation System (SAS) interfaces."
        },
        {
            icon: <Cpu size={36} />,
            title: "Digital Construction",
            desc: "Implementation of 4D Construction Sequencing and 5D Cost Model Simulations to integrate digital assets with physical schedules."
        },
        {
            icon: <LayoutTemplate size={36} />,
            title: "Reality Capture",
            desc: "Advanced LiDAR, Photogrammetry, Aerial Surveys transforming physical sites into highly accurate As-Built models and point cloud data."
        },
        {
            icon: <Crosshair size={36} />,
            title: "Engineering Drafting",
            desc: "AutoCAD & MicroStation drafting, structural design following GASCO DGS/International Codes, and scanning/vectorization."
        },
        {
            icon: <Briefcase size={36} />,
            title: "Equipment & HR Rentals",
            desc: "Rental of Omicron CMC 356, CT Analyzers. Providing highly trained technical manpower for Site, Testing, and Commissioning tasks."
        },
    ];

    return (
        <div className="pt-32 pb-20 bg-white">
            <section className="bg-primary rounded-[3rem] mx-4 md:mx-8 text-white py-32 md:py-48 mb-32 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-10 mix-blend-screen bg-cover bg-center" />
                <FadeIn className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
                    <span className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest mb-10 shadow-lg shadow-white/5">
                        What We Do
                    </span>
                    <h1 className="font-jakarta text-6xl md:text-[5.5rem] font-bold mb-10 leading-[1.05] tracking-tight">
                        Our Core <span className="text-accent underline decoration-4 decoration-accent/50 underline-offset-[16px]">Services.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-12 max-w-3xl mx-auto">
                        From heavy infrastructure and Extra High Voltage substations to digital twins and reality capture, we offer total project support for global leaders.
                    </p>
                </FadeIn>
            </section>

            <section className="container mx-auto px-6 mb-40">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {primaryServices.map((srv, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="bg-white p-12 lg:p-14 rounded-[3rem] shadow-xl shadow-primary/5 hover:-translate-y-4 hover:shadow-2xl hover:border-accent/40 transition-all duration-500 border border-slate-100 flex flex-col h-full group">
                                <div className="w-24 h-24 rounded-[2rem] bg-light flex items-center justify-center text-primary mb-10 group-hover:bg-accent group-hover:text-white transition-colors duration-500 shadow-inner">
                                    {srv.icon}
                                </div>
                                <h3 className="font-jakarta font-bold text-3xl text-primary mb-6 group-hover:text-accent transition-colors">{srv.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed mb-10 flex-grow text-lg">{srv.desc}</p>
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-primary group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 cursor-pointer">
                                    <span className="font-bold">&rarr;</span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </div>
    );
}
