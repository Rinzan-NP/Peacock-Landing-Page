import { Zap, Crosshair, Network, Cpu, LayoutTemplate, Briefcase, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const primaryServices = [
    {
        icon: <Zap size={36} />,
        title: "Primary Engineering",
        desc: "Substation site surveys, physical layouts, cable/wiring schedules, AC/DC auxiliary systems, grounding & lightning protection, and relay coordination.",
        tag: "Power"
    },
    {
        icon: <Network size={36} />,
        title: "Secondary Engineering",
        desc: "Schematics and wiring diagrams for CRP/LCC/RTU, trip matrix logic, and panel internal wiring diagrams.",
        tag: "Automation"
    },
    {
        icon: <Crosshair size={36} />,
        title: "Engineering Design & Drafting",
        desc: "SCADA/RTU/SAS integration, fiber optic engineering, power cable routing, and structural analysis for substation buildings.",
        tag: "Drafting"
    },
    {
        icon: <Briefcase size={36} />,
        title: "Project Support",
        desc: "Providing site engineers, commissioning experts, supervisors, planners, and AutoCAD operators for turnkey project requirements.",
        tag: "Personnel"
    },
    {
        icon: <LayoutTemplate size={36} />,
        title: "Printing & Copying",
        desc: "High-speed digital copying, large format plotting, scanning, and binding services.",
        tag: "Printing"
    },
    {
        icon: <Cpu size={36} />,
        title: "Corporate Training Courses",
        desc: "Electricity courses (Energy Essentials, Power System Engineering) and management courses (PMP, ISO 9001, HSE).",
        tag: "Training"
    },
];

export default function Services() {
    return (
        <div className="pt-32 pb-20 bg-white">
            {/* Hero — dark diagonal split, headline left-aligned */}
            <section className="bg-primary rounded-[3rem] mx-4 md:mx-8 mb-32 relative overflow-hidden shadow-2xl min-h-[420px] flex items-center">
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-10 mix-blend-screen bg-cover bg-center" />
                {/* Angled overlay stripe */}
                <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-accent/10 [clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)]" />
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-white/10 opacity-40" />
                <div className="absolute right-24 top-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border border-white/10 opacity-60" />

                <FadeIn className="container relative z-10 mx-auto px-10 md:px-16 py-24 md:py-32 max-w-5xl">
                    <span className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest mb-8 shadow-lg shadow-white/5">
                        What We Do
                    </span>
                    <h1
                        className="font-jakarta text-5xl md:text-[5rem] font-bold leading-[1.05] tracking-tight text-white mb-8 max-w-2xl"
                        style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
                    >
                        Our Core{" "}
                        <span className="text-accent underline decoration-4 decoration-accent/50 underline-offset-[12px]">
                            Services.
                        </span>
                    </h1>
                    <p className="text-xl text-white/75 leading-relaxed font-light max-w-2xl">
                        From heavy infrastructure and Extra High Voltage substations to digital twins and reality capture, we offer total project support for global leaders.
                    </p>
                </FadeIn>
            </section>

            <section className="container mx-auto px-6 mb-40">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {primaryServices.map((srv, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="bg-white p-12 lg:p-14 rounded-[3rem] shadow-xl shadow-primary/5 hover:-translate-y-4 hover:shadow-2xl hover:border-accent/40 transition-all duration-500 border border-slate-100 flex flex-col h-full group">
                                <div className="flex items-start justify-between mb-10">
                                    <div className="w-24 h-24 rounded-[2rem] bg-light flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-500 shadow-inner">
                                        {srv.icon}
                                    </div>
                                    <span className="text-xs uppercase tracking-widest font-bold text-accent/60 border border-accent/20 rounded-full px-3 py-1 mt-2">
                                        {srv.tag}
                                    </span>
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
