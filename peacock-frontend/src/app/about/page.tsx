import { CheckCircle2, Diamond, ArrowRight, Clock, Users, Globe } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

export default function About() {
    return (
        <div className="pt-32 pb-20 bg-white">
            {/* Hero — left large / right stat grid, asymmetric container */}
            <section
                className="mx-4 md:mx-8 mb-28 relative overflow-hidden shadow-2xl bg-primary"
                style={{ borderRadius: "0.75rem 3rem 0.75rem 3rem" }}
            >
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-[0.08] mix-blend-overlay bg-cover bg-center" />

                {/* Organic blob accent */}
                <div
                    className="absolute -right-20 -top-20 w-[500px] h-[400px] bg-accent/20 pointer-events-none"
                    style={{ borderRadius: "60% 40% 30% 70% / 40% 50% 50% 60%", filter: "blur(80px)" }}
                />

                <div className="container relative z-10 mx-auto px-8 md:px-14 py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-end">
                    <FadeIn className="lg:col-span-7">
                        <p className="font-body text-accent text-xs font-bold uppercase tracking-[0.25em] mb-5 flex items-center gap-3">
                            <span className="w-5 h-px bg-accent" /> Who We Are
                        </p>
                        <h1 className="font-display font-bold text-white leading-[0.92] mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.04em" }}>
                            Engineering the <span className="text-accent">Future.</span>
                        </h1>
                        <p className="font-body text-white/65 text-base leading-relaxed max-w-lg">
                            Peacock is a leading outsourcing services provider in the Middle East with a proven track record — offering engineering, training, CAD outsourcing, equipment rentals, printing, project support, and HR recruitment.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2} className="lg:col-span-5">
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { icon: <Clock size={22} />, stat: "18+", label: "Years of Mastery" },
                                { icon: <Users size={22} />, stat: "500+", label: "Engineers Deployed" },
                                { icon: <Globe size={22} />, stat: "10+", label: "Countries Served" },
                                { icon: <CheckCircle2 size={22} />, stat: "ISO", label: "19650 Certified" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white/10 border border-white/15 p-5 flex flex-col text-center hover:bg-white/15 transition-colors"
                                    style={{ borderRadius: i % 2 === 0 ? "1.5rem 0.375rem 1.5rem 0.375rem" : "0.375rem 1.5rem 0.375rem 1.5rem" }}
                                >
                                    <span className="text-accent mb-2 flex justify-center">{item.icon}</span>
                                    <span className="font-display font-bold text-white text-3xl mb-0.5" style={{ letterSpacing: "-0.04em" }}>{item.stat}</span>
                                    <span className="font-body text-white/50 text-xs uppercase tracking-widest">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Philosophy */}
            <section className="container mx-auto px-6 mb-32 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <FadeIn>
                        <p className="font-body text-accent text-xs font-bold uppercase tracking-[0.25em] mb-5 flex items-center gap-3">
                            <span className="w-5 h-px bg-accent" /> Vision & Mission
                        </p>
                        <h2 className="font-display font-bold text-primary leading-[0.95] mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                            Global Benchmark for Technical Outsourcing.
                        </h2>
                        <p className="font-body text-slate-500 text-base leading-relaxed mb-5">
                            We are committed to provide quality services to our customers thereby helping them achieve their business objectives in a faster, easier and cost-effective way.
                        </p>
                        <p className="font-body text-slate-500 text-base leading-relaxed">
                            Well trained, well experienced and well motivated, our human resource team will complete tasks on a turnkey basis — no compromise on quality under any circumstances. Specialists in Oil & Gas, Power Transmission & Distribution, and MEP engineering.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h3 className="font-display font-bold text-primary text-2xl mb-6" style={{ letterSpacing: "-0.02em" }}>Our Core Values</h3>
                        <ul className="divide-y divide-slate-100">
                            {["Uncompromising Quality", "Safety First Policy", "Technical Precision", "Integrated Integrity", "Global Innovation"].map((val, idx) => (
                                <li key={idx} className="flex items-center gap-5 py-5 font-body text-primary font-medium text-base hover:text-accent transition-colors group">
                                    <CheckCircle2 className="text-accent shrink-0 group-hover:scale-110 transition-transform" size={18} />
                                    {val}
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                </div>
            </section>

            {/* Legacy — milestone cards with asymmetric shapes */}
            <section className="bg-slate-50 border-y border-slate-100 py-24 relative overflow-hidden">
                {/* Background blob */}
                <div
                    className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[350px] bg-primary/[0.04] pointer-events-none"
                    style={{ borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%" }}
                />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <FadeIn className="mb-16">
                        <p className="font-body text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
                            <span className="w-5 h-px bg-accent" /> Our Legacy
                        </p>
                        <h2 className="font-display font-bold text-primary leading-[0.92]" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.04em" }}>
                            18+ Years of Mastery.
                        </h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { year: "2005", title: "Founded", desc: "Started as a dedicated MEP and Power Transmission specialist serving the Middle East.", r: "2rem 0.5rem 2rem 0.5rem", dark: false },
                            { year: "→", title: "Expanding Horizons", desc: "Established Peacock Resources LLP to bring global expertise in Digital Construction to India.", r: "0.5rem 2rem 0.5rem 2rem", dark: true },
                            { year: "Now", title: "Global Standards", desc: "ISO 19650 certified and internationally recognised by power and infrastructure giants.", r: "2rem 0.5rem 0.5rem 2rem", dark: false },
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div
                                    className={`p-8 h-full ${item.dark ? "bg-primary text-white border-primary" : "bg-white border-slate-100 shadow-sm"} border`}
                                    style={{ borderRadius: item.r }}
                                >
                                    <p className={`font-display font-bold text-5xl mb-4 ${item.dark ? "text-accent" : "text-primary"}`} style={{ letterSpacing: "-0.05em" }}>
                                        {item.year}
                                    </p>
                                    <h3 className={`font-display font-bold text-xl mb-3 ${item.dark ? "text-white" : "text-primary"}`} style={{ letterSpacing: "-0.02em" }}>
                                        {item.title}
                                    </h3>
                                    <p className={`font-body text-sm leading-relaxed ${item.dark ? "text-white/65" : "text-slate-500"}`}>
                                        {item.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white py-28 text-center">
                <FadeIn className="container mx-auto px-6 max-w-3xl">
                    <h2 className="font-display font-bold text-primary leading-[0.95] mb-10" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.04em" }}>
                        Want to work with us?
                    </h2>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 bg-accent hover:bg-primary text-white font-body font-semibold px-10 py-4 transition-all shadow-xl shadow-accent/30 text-base"
                        style={{ borderRadius: "0.5rem 2rem 0.5rem 2rem" }}
                    >
                        Start a project today <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </FadeIn>
            </section>
        </div>
    );
}
