"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Send } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const offices = [
    {
        country: "UAE",
        city: "Dubai",
        label: "Headquarters",
        name: "Peacock Electromechanical Works LLC",
        lines: ["Mohd. Ibrahim Siddiqi Building,", "Community 318, Street 2B", "Al Karama, Dubai, UAE.", "P.O. Box 17 18 73"],
    },
    {
        country: "IND",
        city: "Kerala",
        label: "India Operations",
        name: "Peacock Resources LLP",
        lines: ["Smart Trade City,", "Kottakkal, Malappuram,", "Kerala, India."],
    },
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="pt-28 bg-white">

            {/* ── Page Header — left-anchored, editorial ───────────────────── */}
            <section className="container mx-auto px-6 max-w-7xl pt-10 pb-20">
                <FadeIn>
                    <p className="font-body text-accent text-xs font-bold uppercase tracking-[0.25em] mb-5 flex items-center gap-3">
                        <span className="w-5 h-px bg-accent" /> Reach Out
                    </p>
                    <h1
                        className="font-display font-bold text-primary leading-[0.9] mb-6"
                        style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.04em" }}
                    >
                        Let's build<br />
                        <span className="text-accent">something</span><br />
                        together.
                    </h1>
                    <p className="font-body text-slate-500 text-lg leading-relaxed max-w-lg mt-6">
                        Ready to integrate global engineering standards into your next project?
                        Reach our offices in Dubai or Kerala.
                    </p>
                </FadeIn>
            </section>

            {/* ── Main content — two column ────────────────────────────────── */}
            <section className="container mx-auto px-6 max-w-7xl pb-32">
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left — info column */}
                    <div className="lg:col-span-5 flex flex-col gap-8">

                        {/* Office cards — stripped back, typographic */}
                        {offices.map((office, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="group border border-slate-100 rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300 bg-white">
                                    <div className="flex items-start justify-between mb-5">
                                        <div>
                                            <span
                                                className="font-display font-bold text-primary block leading-none mb-1"
                                                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", letterSpacing: "-0.04em" }}
                                            >
                                                {office.country}
                                            </span>
                                            <span className="font-body text-xs text-slate-400 uppercase tracking-widest font-bold">{office.label}</span>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:border-accent group-hover:text-accent transition-all duration-300">
                                            <MapPin size={16} />
                                        </div>
                                    </div>
                                    <p className="font-body font-semibold text-primary text-sm mb-2">{office.name}</p>
                                    <address className="not-italic font-body text-slate-400 text-sm leading-relaxed space-y-0.5">
                                        {office.lines.map((l, j) => <p key={j}>{l}</p>)}
                                    </address>
                                </div>
                            </FadeIn>
                        ))}

                        {/* Contact details */}
                        <FadeIn delay={0.3}>
                            <div className="border-t border-slate-100 pt-8 flex flex-col gap-5">
                                <a
                                    href="tel:+97143547604"
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                                        <Phone size={15} />
                                    </div>
                                    <div>
                                        <p className="font-body text-xs text-slate-400 uppercase tracking-widest font-bold mb-0.5">Phone</p>
                                        <p className="font-body font-semibold text-primary text-sm group-hover:text-accent transition-colors">+971 4 3547604</p>
                                    </div>
                                </a>
                                <a
                                    href="mailto:sales@peacockengineers.com"
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                                        <Mail size={15} />
                                    </div>
                                    <div>
                                        <p className="font-body text-xs text-slate-400 uppercase tracking-widest font-bold mb-0.5">Email</p>
                                        <p className="font-body font-semibold text-primary text-sm group-hover:text-accent transition-colors">sales@peacockengineers.com</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-accent">
                                        <Clock size={15} />
                                    </div>
                                    <div>
                                        <p className="font-body text-xs text-slate-400 uppercase tracking-widest font-bold mb-0.5">Hours</p>
                                        <p className="font-body font-semibold text-primary text-sm">Mon – Fri · 8:00 AM – 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right — contact form */}
                    <div className="lg:col-span-7">
                        <FadeIn delay={0.2}>
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center min-h-[500px] text-center px-10">
                                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
                                        <Send className="text-accent" size={28} />
                                    </div>
                                    <h2
                                        className="font-display font-bold text-primary mb-4"
                                        style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
                                    >
                                        Message received.
                                    </h2>
                                    <p className="font-body text-slate-500 text-base leading-relaxed max-w-md">
                                        Thank you for reaching out. Our team will get back to you within one business day.
                                    </p>
                                </div>
                            ) : (
                                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 md:p-12">
                                    <div className="flex items-center justify-between mb-10">
                                        <h2
                                            className="font-display font-bold text-primary"
                                            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.03em" }}
                                        >
                                            Send an Enquiry
                                        </h2>
                                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                                            <ArrowUpRight size={15} className="text-white" />
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name row */}
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block font-body text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="John"
                                                    className="w-full bg-white border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/10 rounded-xl px-4 py-3.5 font-body text-sm text-primary outline-none transition-all duration-200 placeholder:text-slate-300"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-body text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Doe"
                                                    className="w-full bg-white border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/10 rounded-xl px-4 py-3.5 font-body text-sm text-primary outline-none transition-all duration-200 placeholder:text-slate-300"
                                                />
                                            </div>
                                        </div>

                                        {/* Email & Company */}
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block font-body text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="john@company.com"
                                                    className="w-full bg-white border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/10 rounded-xl px-4 py-3.5 font-body text-sm text-primary outline-none transition-all duration-200 placeholder:text-slate-300"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-body text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Acme Corp"
                                                    className="w-full bg-white border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/10 rounded-xl px-4 py-3.5 font-body text-sm text-primary outline-none transition-all duration-200 placeholder:text-slate-300"
                                                />
                                            </div>
                                        </div>

                                        {/* Service */}
                                        <div>
                                            <label className="block font-body text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                                                Service Required
                                            </label>
                                            <select className="w-full bg-white border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/10 rounded-xl px-4 py-3.5 font-body text-sm text-primary outline-none transition-all duration-200 cursor-pointer appearance-none">
                                                <option value="">Select a service...</option>
                                                <option>Primary & Secondary Engineering</option>
                                                <option>BIM Specialisation (3D – 7D)</option>
                                                <option>Reality Capture</option>
                                                <option>Equipment Rentals</option>
                                                <option>Project Support / Staffing</option>
                                                <option>Corporate Training</option>
                                                <option>Other Services</option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block font-body text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                                                Project Brief
                                            </label>
                                            <textarea
                                                rows={5}
                                                required
                                                placeholder="Tell us about your project, timeline, and key requirements..."
                                                className="w-full bg-white border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/10 rounded-xl px-4 py-3.5 font-body text-sm text-primary outline-none transition-all duration-200 resize-none placeholder:text-slate-300"
                                            />
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            className="group w-full bg-primary hover:bg-slate-900 text-white font-body font-semibold text-sm uppercase tracking-widest py-4 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3"
                                        >
                                            Submit Enquiry
                                            <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </button>

                                        <p className="font-body text-slate-400 text-xs text-center">
                                            We respond within 1 business day · Confidential & secure
                                        </p>
                                    </form>
                                </div>
                            )}
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ── Map/CTA strip ────────────────────────────────────────────── */}
            <section className="bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-[0.07] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />

                <div className="container relative z-10 mx-auto px-6 max-w-7xl py-20">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                            <div>
                                <p className="font-body text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3 flex items-center gap-3">
                                    <span className="w-4 h-px bg-accent" /> Global Reach
                                </p>
                                <h2
                                    className="font-display font-bold text-white leading-[0.95]"
                                    style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.04em" }}
                                >
                                    Operating across the<br />
                                    <span className="text-accent">Middle East & Asia.</span>
                                </h2>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                                <a
                                    href="mailto:sales@peacockengineers.com"
                                    className="group inline-flex items-center gap-2 bg-accent hover:bg-white text-white hover:text-primary font-body font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg"
                                >
                                    Email Us Directly
                                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                                <a
                                    href="tel:+97143547604"
                                    className="inline-flex items-center gap-2 border border-white/25 hover:border-white text-white font-body font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300"
                                >
                                    <Phone size={14} />
                                    +971 4 3547604
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

        </div>
    );
}
