import { Star, Trophy, Target, Award } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function Clients() {
    const clients = [
        { name: "ABB", location: "UAE / KSA" },
        { name: "Siemens", location: "Global" },
        { name: "Petrofac", location: "Regional" },
        { name: "Mitsubishi Co.", location: "UAE / Japan" },
        { name: "Marubeni", location: "Global" },
        { name: "Schneider", location: "Global" },
        { name: "Dubai Petroleum Co", location: "UAE" },
        { name: "Khatib & Alami", location: "Sharjah / Dubai" },
        { name: "Cegelec", location: "Abu Dhabi" },
        { name: "GASCO", location: "UAE" },
    ];

    return (
        <div className="pt-32 pb-20 bg-white">
            <section className="bg-primary rounded-[3rem] mx-4 md:mx-8 text-white py-32 md:py-48 mb-32 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-10 mix-blend-screen bg-cover bg-center" />
                <FadeIn className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
                    <span className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest mb-10 shadow-lg shadow-white/5">
                        Our Ecosystem
                    </span>
                    <h1 className="font-jakarta text-6xl md:text-[5.5rem] font-bold mb-10 leading-[1.05] tracking-tight">
                        Trusted by the <span className="text-accent underline decoration-4 decoration-accent/50 underline-offset-[16px]">World.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-12 max-w-3xl mx-auto">
                        Collaborating with the world's leading multinational companies in Power Transmission, Infrastructure, and Oil & Gas.
                    </p>
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
