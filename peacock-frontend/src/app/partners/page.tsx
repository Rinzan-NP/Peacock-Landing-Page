import { Zap, Hexagon, Cable, ChevronRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

const verticals = [
    {
        title: "Vertical Engineering",
        icon: <Zap size={36} />,
        desc: "Specialized collaborative primary and secondary engineering systems spanning LV, MV, and EHV projects directly backed by our global partners.",
    },
    {
        title: "BIM",
        icon: <Hexagon size={36} />,
        desc: "Integrated Building Information Modeling (3D to 7D) creating seamless digital environments for advanced equipment placement and modeling.",
    },
    {
        title: "Project Support",
        icon: <Cable size={36} />,
        desc: "End-to-end management, equipment rentals, and testing & commissioning, ensuring technology vendors perform flawlessly on-site.",
    },
];

export default function Partners() {
    return (
        <div className="pt-32 pb-20 bg-white">
            {/* Hero — two-tone split: left dark primary, right lighter accent gradient */}
            <section className="rounded-[3rem] mx-4 md:mx-8 mb-32 relative overflow-hidden shadow-2xl min-h-[400px] flex items-center">
                {/* Left side */}
                <div className="absolute inset-0 bg-primary" />
                {/* Right diagonal accent panel */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-accent/30 [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]" />
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-10 mix-blend-screen bg-cover bg-center" />
                {/* Partnership symbol */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 flex items-center gap-4 opacity-20 pointer-events-none">
                    <div className="w-32 h-32 rounded-full border-4 border-white" />
                    <div className="w-32 h-32 rounded-full border-4 border-white -ml-12" />
                </div>

                <FadeIn className="container relative z-10 mx-auto px-10 md:px-16 py-24 md:py-32">
                    <span className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest mb-8 shadow-lg shadow-white/5">
                        Business Partnerships
                    </span>
                    <h1
                        className="font-jakarta text-5xl md:text-[5rem] font-bold leading-[1.05] tracking-tight text-white mb-8 max-w-2xl"
                        style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
                    >
                        Our Official{" "}
                        <span className="text-accent underline decoration-4 decoration-accent/50 underline-offset-[12px]">
                            Partners.
                        </span>
                    </h1>
                    <p className="text-xl text-white/75 leading-relaxed font-light max-w-2xl">
                        Authorized integration and distribution partnerships with the world&apos;s most advanced power technology manufacturers.
                    </p>
                </FadeIn>
            </section>

            {/* Primary Partners Breakdown */}
            <section className="container mx-auto px-6 mb-40">
                <FadeIn className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4 flex items-center justify-center gap-4">
                        <span className="w-10 h-[3px] bg-accent rounded-full"></span> Industry Leaders <span className="w-10 h-[3px] bg-accent rounded-full"></span>
                    </h2>
                    <h3 className="font-jakarta text-5xl md:text-6xl font-bold text-primary leading-[1.05] tracking-tight">
                        Powering progress through collaboration.
                    </h3>
                </FadeIn>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* EATON */}
                    <FadeIn delay={0.1}>
                        <div className="bg-light p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-xl shadow-primary/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px] opacity-60 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                            <div className="relative z-10">
                                <div className="w-48 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-200 p-4">
                                    <span className="font-jakarta font-black text-4xl text-[#005AAA] tracking-widest">EATON</span>
                                </div>
                                <h4 className="font-jakarta text-3xl font-bold text-primary mb-6">Authorized Partner</h4>
                                <p className="text-slate-500 text-lg leading-relaxed font-medium mb-8">
                                    We are an authorized partner for the Eaton range of products, catering to every industrial segment with versatile solutions.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-4 text-primary font-bold"><CheckCircle2 className="text-accent" /> MCB, Fuse &amp; RCB</li>
                                    <li className="flex items-center gap-4 text-primary font-bold"><CheckCircle2 className="text-accent" /> UPS &amp; Drives</li>
                                    <li className="flex items-center gap-4 text-primary font-bold"><CheckCircle2 className="text-accent" /> VCB &amp; Switchgear (LV &amp; MV)</li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>

                    {/* SIEMENS */}
                    <FadeIn delay={0.2}>
                        <div className="bg-primary text-white p-10 md:p-14 rounded-[3rem] border border-primary shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] opacity-60 pointer-events-none group-hover:bg-accent/30 transition-colors duration-700" />
                            <div className="relative z-10">
                                <div className="w-64 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-white/20 p-4">
                                    <span className="font-jakarta font-black text-4xl text-white tracking-widest">SIEMENS</span>
                                </div>
                                <h4 className="font-jakarta text-3xl font-bold text-white mb-6">Authorized Partner</h4>
                                <p className="text-white/80 text-lg leading-relaxed font-medium mb-8">
                                    Authorized partner for Siemens products and services in the Middle East region. We secure high-tier engineering standards for electrification workflows and advanced power intelligence.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-4 text-white font-bold"><CheckCircle2 className="text-accent" /> Electrification Systems</li>
                                    <li className="flex items-center gap-4 text-white font-bold"><CheckCircle2 className="text-accent" /> Grid Automation</li>
                                    <li className="flex items-center gap-4 text-white font-bold"><CheckCircle2 className="text-accent" /> Sustainable Energy Integration</li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Connected Verticals */}
            <section className="bg-light py-32 border-t border-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 [mask-image:linear-gradient(to_bottom,white,transparent)] z-0" />
                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4 flex items-center justify-center gap-4">
                            <span className="w-10 h-[3px] bg-accent rounded-full"></span> Core Integrations <span className="w-10 h-[3px] bg-accent rounded-full"></span>
                        </h2>
                        <h3 className="font-jakarta text-4xl md:text-5xl font-bold text-primary leading-[1.05] tracking-tight">
                            Executing Partnerships exactly where they matter.
                        </h3>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-10">
                        {verticals.map((vert, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="bg-white p-10 h-full rounded-[3rem] shadow-xl shadow-primary/5 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-slate-100 group flex flex-col">
                                    <div className="w-20 h-20 rounded-[1.5rem] bg-light flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                        {vert.icon}
                                    </div>
                                    <h4 className="font-jakarta text-2xl font-bold text-primary mb-4">{vert.title}</h4>
                                    <p className="text-slate-500 font-medium text-lg leading-relaxed flex-grow">
                                        {vert.desc}
                                    </p>
                                    <div className="mt-8">
                                        <span className="flex items-center gap-2 text-accent font-bold group-hover:text-primary transition-colors cursor-pointer w-fit">
                                            Learn More <ChevronRight size={18} />
                                        </span>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Let's Talk */}
            <section className="bg-white pt-32 text-center">
                <FadeIn className="container mx-auto px-6">
                    <h2 className="font-jakarta text-5xl md:text-6xl font-bold text-primary mb-8 tracking-tight">Expand your ecosystem with us.</h2>
                    <Link
                        href="/contact"
                        className="inline-flex bg-accent hover:bg-black text-white px-10 py-5 rounded-full font-bold transition-all hover:scale-105 text-xl shadow-2xl shadow-accent/30 tracking-wide gap-3 items-center group"
                    >
                        Become a Partner <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </FadeIn>
            </section>

        </div>
    );
}
