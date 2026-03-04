import { CheckCircle2, Diamond, ArrowRight, Clock, Users, Globe } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

export default function About() {
    return (
        <div className="pt-32 pb-20 bg-white">
            {/* Hero — split layout: left text, right stats grid */}
            <section className="bg-primary rounded-[3rem] mx-4 md:mx-8 mb-32 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-10 mix-blend-overlay bg-cover bg-center" />
                {/* Decorative circle */}
                <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />
                <div className="absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-white/5 blur-2xl pointer-events-none" />

                <div className="container relative z-10 mx-auto px-8 md:px-16 py-24 md:py-36 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: text */}
                    <FadeIn>
                        <span className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest mb-8 shadow-lg shadow-white/5">
                            Who We Are
                        </span>
                        <h1
                            className="font-jakarta text-5xl md:text-[4.5rem] font-bold leading-[1.05] tracking-tight text-white mb-8"
                            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
                        >
                            Engineering the{" "}
                            <span className="text-accent underline decoration-4 decoration-accent/50 underline-offset-[12px]">
                                Future.
                            </span>
                        </h1>
                        <p className="text-xl text-white/75 leading-relaxed font-light max-w-lg">
                            Peacock is a leading outsourcing services provider in the Middle East with a proven track record. We offer engineering, training courses, CAD outsourcing, testing equipment rentals, printing and copying, project support, and HR recruitment.
                        </p>
                    </FadeIn>

                    {/* Right: stat cards */}
                    <FadeIn delay={0.2}>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: <Clock size={28} />, stat: "18+", label: "Years of Mastery" },
                                { icon: <Users size={28} />, stat: "500+", label: "Engineers Deployed" },
                                { icon: <Globe size={28} />, stat: "10+", label: "Countries Served" },
                                { icon: <CheckCircle2 size={28} />, stat: "ISO", label: "19650 Certified" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-8 flex flex-col items-center text-center hover:bg-white/15 transition-colors"
                                >
                                    <span className="text-accent mb-3">{item.icon}</span>
                                    <span className="font-jakarta text-4xl font-bold text-white mb-1">{item.stat}</span>
                                    <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Philosophy */}
            <section className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center mb-40">
                <FadeIn>
                    <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-4">
                        <span className="w-12 h-[3px] bg-accent rounded-full"></span> Vision &amp; Mission
                    </h2>
                    <h3 className="font-jakarta text-5xl md:text-6xl font-bold text-primary mb-10 leading-[1.05] tracking-tight">
                        Global Benchmark for Technical Outsourcing.
                    </h3>
                    <p className="text-slate-600 text-xl leading-relaxed mb-8 font-medium">
                        We are committed to provide quality services to our customers thereby helping them achieve their business objectives in a faster, easier and cost-effective way.
                    </p>
                    <p className="text-slate-500 text-lg leading-relaxed mb-8">
                        Well trained, well experienced and well motivated, our human resource team will complete tasks on a turnkey basis. No compromise will be made on quality under any circumstances. Specialists in Oil & Gas engineering, Power Transmission Distribution, and MEP (Mechanical, Electrical, and Plumbing).
                    </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="bg-light p-10 md:p-14 rounded-[3rem] border-4 border-white shadow-xl">
                        <h4 className="font-jakarta text-4xl font-bold text-primary mb-10">Our Core Values</h4>
                        <ul className="space-y-6">
                            {["Uncompromising Quality", "Safety First Policy", "Technical Precision", "Integrated Integrity", "Global Innovation"].map((val, idx) => (
                                <li key={idx} className="flex items-center gap-6 font-bold text-primary text-xl md:text-2xl bg-white p-5 rounded-[1.5rem] shadow-sm border border-slate-100 hover:border-accent/30 transition-colors">
                                    <span className="w-12 h-12 rounded-[1rem] bg-accent/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="text-accent" size={24} />
                                    </span>
                                    {val}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeIn>
            </section>

            {/* History timeline or info */}
            <section className="bg-light py-32 border-t border-slate-100 relative">
                <div className="absolute inset-0 z-0 bg-primary/5 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4 flex items-center justify-center gap-4">
                            <span className="w-10 h-[3px] bg-accent rounded-full"></span> Our Legacy <span className="w-10 h-[3px] bg-accent rounded-full"></span>
                        </h2>
                        <h3 className="font-jakarta text-5xl md:text-7xl font-bold text-primary leading-[1.05] tracking-tight">18+ Years of Mastery.</h3>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-10">
                        <FadeIn delay={0.1}>
                            <div className="bg-white px-10 py-16 rounded-[3rem] shadow-xl shadow-primary/5 hover:-translate-y-4 transition-transform duration-500 flex flex-col items-center text-center h-full border border-slate-100 group">
                                <div className="w-24 h-24 bg-light rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                                    <Diamond className="text-current" size={40} />
                                </div>
                                <h4 className="font-jakarta text-3xl font-bold text-primary mb-6">Founded in 2005</h4>
                                <p className="text-slate-500 text-lg leading-relaxed font-medium">Started as a dedicated MEP and Power Transmission specialist in the Middle East.</p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-primary px-10 py-16 rounded-[3rem] shadow-xl shadow-primary/5 hover:-translate-y-4 transition-transform duration-500 flex flex-col items-center text-center h-full border border-primary text-white group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-[2rem] flex items-center justify-center mb-10 text-accent group-hover:text-white transition-colors duration-500 border border-white/20">
                                    <Diamond className="text-current" size={40} />
                                </div>
                                <h4 className="font-jakarta text-3xl font-bold text-white mb-6">Expanding Horizons</h4>
                                <p className="text-white/80 text-lg leading-relaxed font-medium">Established Peacock Resources LLP to bring our global expertise in Digital Construction to India.</p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="bg-white px-10 py-16 rounded-[3rem] shadow-xl shadow-primary/5 hover:-translate-y-4 transition-transform duration-500 flex flex-col items-center text-center h-full border border-slate-100 group">
                                <div className="w-24 h-24 bg-light rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                                    <Diamond className="text-current" size={40} />
                                </div>
                                <h4 className="font-jakarta text-3xl font-bold text-primary mb-6">Global Standards</h4>
                                <p className="text-slate-500 text-lg leading-relaxed font-medium">Adhering strictly to ISO 19650 standards and recognized internationally by power giants.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Let's Talk */}
            <section className="bg-white py-32 text-center">
                <FadeIn className="container mx-auto px-6">
                    <h2 className="font-jakarta text-5xl md:text-7xl font-bold text-primary mb-12">Want to work with us?</h2>
                    <Link
                        href="/contact"
                        className="inline-flex bg-accent hover:bg-black text-white px-12 py-6 rounded-full font-bold transition-all hover:scale-105 text-xl shadow-2xl shadow-accent/30 tracking-wide"
                    >
                        Start a project today
                    </Link>
                </FadeIn>
            </section>

        </div>
    );
}
