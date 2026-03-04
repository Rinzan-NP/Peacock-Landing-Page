import { Star, Trophy, Target, Award, Building2, Globe2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const clients = [
    { name: "ABB", location: "Dubai / Riyadh" },
    { name: "Alcatel Lucent", location: "Global" },
    { name: "Areva", location: "Global" },
    { name: "Cegelec", location: "Abu Dhabi" },
    { name: "Dubai Petroleum Co", location: "UAE" },
    { name: "Mitsubishi Co.", location: "UAE / Japan" },
    { name: "Petrofac Inter.", location: "Regional" },
    { name: "Siemens Dematic", location: "Global" },
    { name: "Thermo LLC", location: "UAE" },
];

export default function Clients() {
    return (
        <div className="pt-32 pb-20 bg-white">
            {/* Hero — horizontal logo ticker style with rising arcs decoration */}
            <section className="bg-primary rounded-[3rem] mx-4 md:mx-8 mb-32 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-10 mix-blend-screen bg-cover bg-center" />
                {/* Concentric arc decorations */}
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full border border-white/10 pointer-events-none" />
                <div className="absolute -bottom-56 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full border border-white/5 pointer-events-none" />
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-white/15 pointer-events-none" />

                <FadeIn className="container relative z-10 mx-auto px-8 md:px-16 py-24 md:py-36 text-center max-w-4xl">
                    <span className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest mb-8 shadow-lg shadow-white/5">
                        Our Ecosystem
                    </span>
                    <h1
                        className="font-jakarta text-5xl md:text-[5rem] font-bold leading-[1.05] tracking-tight text-white mb-8"
                        style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
                    >
                        Trusted by the{" "}
                        <span className="text-accent underline decoration-4 decoration-accent/50 underline-offset-[12px]">
                            World.
                        </span>
                    </h1>
                    <p className="text-xl text-white/75 leading-relaxed font-light max-w-3xl mx-auto mb-12">
                        Collaborating with the world&apos;s leading multinational companies in Power Transmission, Infrastructure, and Oil &amp; Gas.
                    </p>
                    {/* Mini client name strip */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {clients.slice(0, 6).map((c, i) => (
                            <span key={i} className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-sm font-semibold tracking-wide backdrop-blur-md">
                                {c.name}
                            </span>
                        ))}
                        <span className="px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold tracking-wide">
                            +{clients.length - 6} more
                        </span>
                    </div>
                </FadeIn>
            </section>

            <section className="container mx-auto px-6 mb-40 text-center">
                <FadeIn>
                    <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4 flex items-center justify-center gap-4">
                        <span className="w-10 h-[3px] bg-accent rounded-full"></span> Partners in Excellence <span className="w-10 h-[3px] bg-accent rounded-full"></span>
                    </h2>
                    <h3 className="font-jakarta text-5xl md:text-7xl font-bold text-primary mb-20 leading-[1.05] tracking-tight">
                        Collaborating with Global Titans
                    </h3>
                </FadeIn>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                    {clients.map((client, idx) => (
                        <FadeIn key={idx} delay={idx * 0.05}>
                            <div className="bg-light p-10 rounded-[2.5rem] border border-primary/5 shadow-sm flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-2xl hover:-translate-y-4 hover:border-accent/30 transition-all duration-500 min-h-[220px]">
                                <span className="font-jakarta text-2xl font-bold text-primary mb-4">{client.name}</span>
                                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">{client.location}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            <section className="bg-light py-40 border-t border-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 [mask-image:linear-gradient(to_bottom,white,transparent)] z-0" />
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
                    <FadeIn>
                        <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-4">
                            <span className="w-12 h-[3px] bg-accent rounded-full"></span> The Advantage
                        </h2>
                        <h3 className="font-jakarta text-5xl md:text-6xl font-bold text-primary mb-10 leading-[1.05] tracking-tight">
                            Why do industry leaders choose Peacock?
                        </h3>
                        <p className="text-slate-600 text-xl leading-relaxed mb-6 font-medium">
                            For nearly two decades, Peacock has demonstrated an unwavering commitment to engineering quality and timeline precision. Multinational corporations rely on our technical expertise to manage critical infrastructure workflows.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 gap-8">
                        {[
                            { title: "Proven Track Record", icon: <Trophy size={40} /> },
                            { title: "ISO 19650 Quality", icon: <Target size={40} /> },
                            { title: "Expert Engineers", icon: <Award size={40} /> },
                            { title: "Turnkey Delivery", icon: <Star size={40} /> },
                        ].map((adv, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="bg-white p-10 h-full rounded-[2.5rem] shadow-xl shadow-primary/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 text-center border border-slate-100 flex flex-col items-center justify-center min-h-[240px]">
                                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-light text-accent mb-6">
                                        {adv.icon}
                                    </div>
                                    <h4 className="font-bold text-primary text-xl font-jakarta">{adv.title}</h4>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
