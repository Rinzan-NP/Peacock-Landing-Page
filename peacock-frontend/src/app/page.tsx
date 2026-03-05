"use client";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Box, Zap, Camera, ShieldCheck, Globe2, Building2, Workflow } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[110vh] flex items-end overflow-hidden bg-primary pb-0">
        {/* Full-bleed image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.png"
            alt="Engineering Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/98 via-primary/80 to-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        </div>

        {/* Decorative large number — editorial asymmetry */}
        <div
          className="absolute right-0 top-0 bottom-0 flex items-center justify-end pr-12 select-none pointer-events-none z-0"
          aria-hidden="true"
        >
          <span
            className="text-white/[0.04] font-display font-bold leading-none"
            style={{ fontSize: "clamp(220px, 28vw, 420px)", letterSpacing: "-0.06em" }}
          >
            18+
          </span>
        </div>

        <div className="container relative z-10 px-6 max-w-7xl mx-auto pt-40 pb-24">
          <FadeIn delay={0.1}>
            <p className="font-body text-accent/90 text-sm font-semibold uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-accent/70 inline-block" />
              Total Outsourcing Solutions
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1
              className="font-display font-bold text-white mb-0 leading-[0.92]"
              style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)", letterSpacing: "-0.04em" }}
            >
              Global Benchmark<br />
              <em className="not-italic" style={{ color: "rgb(2 132 199 / 0.9)" }}>for Technical</em><br />
              Excellence.
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="mt-12 flex flex-col md:flex-row gap-8 md:gap-16 md:items-end">
              <p className="text-white/65 text-lg leading-relaxed max-w-md font-body font-light">
                Your global partner for engineering outsourcing — specialising in BIM, Power Systems,
                Reality Capture, and Digital Construction.
              </p>
              <div className="flex gap-4 shrink-0">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-3 bg-accent hover:bg-white text-white hover:text-primary font-body font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-xl shadow-accent/30 text-base"
                >
                  Our Services
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-white/30 hover:border-white text-white font-body font-semibold py-4 px-8 rounded-full transition-all duration-300 text-base backdrop-blur-sm"
                >
                  Contact
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Horizontal rule at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-10" />
      </section>

      {/* ── Stats — editorial stacked list, not a uniform grid ─────────── */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-start gap-0 divide-x divide-slate-100">
              {[
                { value: "18", unit: "+", label: "Years", sub: "Active in the industry" },
                { value: "500", unit: "kV", label: "Substation", sub: "Highest voltage capacity" },
                { value: "7D", unit: "", label: "BIM", sub: "Full-dimension modelling" },
                { value: "ISO", unit: "", label: "19650", sub: "Internationally certified" },
              ].map((s, i) => (
                <div key={i} className="px-8 py-6 group">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span
                      className="font-display font-bold text-primary leading-none"
                      style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.04em" }}
                    >
                      {s.value}
                    </span>
                    {s.unit && (
                      <span className="font-display font-bold text-accent" style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}>
                        {s.unit}
                      </span>
                    )}
                  </div>
                  <p className="font-body font-semibold text-primary text-sm uppercase tracking-widest mb-0.5">{s.label}</p>
                  <p className="font-body text-slate-400 text-xs">{s.sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── About — asymmetric layout, image on right overlapping ──────── */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left text column — wider */}
            <div className="lg:col-span-6 xl:col-span-5">
              <FadeIn>
                <p className="font-body text-accent text-xs font-bold uppercase tracking-[0.25em] mb-5 flex items-center gap-3">
                  <span className="w-5 h-px bg-accent" /> Our Philosophy
                </p>
                <h2
                  className="font-display font-bold text-primary leading-[0.95] mb-8"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.04em" }}
                >
                  "Client First" — without ever compromising quality.
                </h2>
                <p className="font-body text-slate-500 text-lg leading-relaxed mb-8">
                  We empower our customers to achieve their business objectives in a faster, easier,
                  and most cost-effective way by delivering turnkey engineering strictly adhering to
                  international standards.
                </p>

                <ul className="space-y-3 mb-10">
                  {[
                    "Zero Compromise on Safety",
                    "International Codes & GASCO DGS",
                    "Proven Track Record in the Middle East",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 font-body font-medium text-primary text-base">
                      <ShieldCheck className="text-accent shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-body font-semibold text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent pb-0.5 text-sm"
                >
                  Read more about us <ArrowRight size={16} />
                </Link>
              </FadeIn>
            </div>

            {/* Right — image with floating accent card, offset */}
            <div className="lg:col-span-6 xl:col-span-7 relative">
              <FadeIn delay={0.2}>
                <div className="relative ml-0 lg:ml-8">
                  <img
                    src="/banner.jpg"
                    alt="Engineering Drafting"
                    className="w-full object-cover rounded-2xl shadow-2xl aspect-[4/3]"
                  />
                  {/* Floating accent panel */}
                  <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-2xl shadow-2xl hidden md:block max-w-[220px]">
                    <p className="font-display font-bold text-5xl text-white mb-1" style={{ letterSpacing: "-0.04em" }}>Total</p>
                    <p className="font-body text-accent text-xs font-bold uppercase tracking-widest">Outsourcing Support</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services — one large feature + two smaller, asymmetric ──────── */}
      <section className="py-28 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="font-body text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
                  <span className="w-5 h-px bg-accent" /> Core Expertise
                </p>
                <h2
                  className="font-display font-bold text-primary leading-[0.95]"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
                >
                  End-to-End<br />Delivery.
                </h2>
              </div>
              <p className="font-body text-slate-500 text-base max-w-sm leading-relaxed md:text-right">
                Delivering complex engineering solutions built on precise, intelligent data — from substation to digital twin.
              </p>
            </div>
          </FadeIn>

          {/* Asymmetric cards layout */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Large feature card */}
            <FadeIn delay={0.1} className="lg:col-span-2">
              <div className="bg-primary rounded-2xl p-10 md:p-14 h-full flex flex-col justify-between relative overflow-hidden group min-h-[360px]">
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-[0.06] bg-cover bg-center mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white mb-8">
                    <Zap size={26} />
                  </div>
                  <h3
                    className="font-display font-bold text-white mb-4"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-0.03em" }}
                  >
                    Power Sector Engineering
                  </h3>
                  <p className="font-body text-white/70 text-base leading-relaxed max-w-xl">
                    Specialised primary and secondary engineering for AIS and GIS substations. Extends
                    to Substation Automation Systems (SAS), SCADA integration, and protection relay coordination.
                  </p>
                </div>
                <div className="relative z-10 mt-10">
                  <Link
                    href="/services"
                    className="group/btn inline-flex items-center gap-2 text-white font-body font-semibold text-sm border-b border-white/40 hover:border-accent hover:text-accent pb-0.5 transition-all"
                  >
                    Explore services <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Smaller card stack */}
            <div className="flex flex-col gap-6">
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex-1">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Box size={22} />
                  </div>
                  <h3 className="font-display font-bold text-primary text-2xl mb-3" style={{ letterSpacing: "-0.03em" }}>
                    BIM & Digital Twin
                  </h3>
                  <p className="font-body text-slate-500 text-sm leading-relaxed mb-6">
                    Complete 3D–7D BIM. Intelligent modelling from concept to facility lifecycle management.
                  </p>
                  <Link href="/bim" className="font-body font-semibold text-xs text-accent hover:text-primary uppercase tracking-widest flex items-center gap-2 transition-colors">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex-1">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Camera size={22} />
                  </div>
                  <h3 className="font-display font-bold text-primary text-2xl mb-3" style={{ letterSpacing: "-0.03em" }}>
                    Reality Capture
                  </h3>
                  <p className="font-body text-slate-500 text-sm leading-relaxed mb-6">
                    High-precision LiDAR, drone surveys, and photogrammetry transformed into accurate as-built point clouds.
                  </p>
                  <Link href="/services" className="font-body font-semibold text-xs text-accent hover:text-primary uppercase tracking-widest flex items-center gap-2 transition-colors">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners — horizontal scrolling brand strip + text column ───── */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="font-body text-accent text-xs font-bold uppercase tracking-[0.25em] mb-5 flex items-center gap-3">
                <span className="w-5 h-px bg-accent" /> Business Ecosystem
              </p>
              <h2
                className="font-display font-bold text-primary leading-[0.95] mb-7"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}
              >
                Empowering the World's Leading Innovators.
              </h2>
              <p className="font-body text-slate-500 text-base leading-relaxed mb-8">
                Our platform integrates seamlessly with global power transmission, infrastructure, and oil & gas authorities —
                streamlining complex engineering workflows across borderless operations.
              </p>

              <div className="flex gap-12 mb-10">
                <div>
                  <p className="font-display font-bold text-primary text-3xl" style={{ letterSpacing: "-0.04em" }}>UAE & GCC</p>
                  <p className="font-body text-slate-400 text-xs uppercase tracking-widest mt-1">Regional Hub</p>
                </div>
                <div>
                  <p className="font-display font-bold text-primary text-3xl" style={{ letterSpacing: "-0.04em" }}>ASIA</p>
                  <p className="font-body text-slate-400 text-xs uppercase tracking-widest mt-1">Global Support</p>
                </div>
              </div>

              <Link
                href="/clients"
                className="inline-flex items-center gap-3 font-body font-semibold text-white bg-primary hover:bg-slate-900 px-7 py-3.5 rounded-full transition-all text-sm shadow-lg"
              >
                View Global Partners <Globe2 size={16} />
              </Link>
            </FadeIn>

            {/* Partners — 2x2 with offset stagger */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "ABB", loc: "UAE / KSA", icon: <Building2 className="text-accent" size={28} />, offset: false },
                  { name: "SIEMENS", loc: "Global", icon: <Globe2 className="text-accent" size={28} />, offset: true },
                  { name: "PETROFAC", loc: "Regional", icon: <Workflow className="text-accent" size={28} />, offset: false },
                  { name: "AREVA", loc: "Global Hub", icon: <ShieldCheck className="text-accent" size={28} />, offset: true },
                ].map((p, i) => (
                  <div
                    key={i}
                    className={`bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${p.offset ? "mt-6" : ""}`}
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 border border-slate-100 shadow-sm">
                      {p.icon}
                    </div>
                    <span className="font-display font-bold text-primary text-xl block" style={{ letterSpacing: "-0.02em" }}>{p.name}</span>
                    <span className="font-body text-slate-400 text-xs uppercase tracking-widest mt-1">{p.loc}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA — editorial, left-aligned, not centred ──────────────────── */}
      <section className="bg-primary py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.png')] opacity-[0.06] bg-cover bg-center" />
        <div className="absolute top-0 right-[-5%] w-[500px] h-[500px] bg-accent/25 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

        {/* Large background text */}
        <div className="absolute bottom-0 right-0 select-none pointer-events-none overflow-hidden" aria-hidden>
          <span
            className="font-display font-bold text-white/[0.04] leading-none block"
            style={{ fontSize: "clamp(150px, 22vw, 320px)", letterSpacing: "-0.06em" }}
          >
            NOW.
          </span>
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <FadeIn>
            <p className="font-body text-accent text-xs font-bold uppercase tracking-[0.25em] mb-8 flex items-center gap-3">
              <span className="w-5 h-px bg-accent" /> Let's build together
            </p>
            <h2
              className="font-display font-bold text-white leading-[0.92] mb-12 max-w-3xl"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", letterSpacing: "-0.04em" }}
            >
              Standardise your engineering today.
            </h2>
            <Link
              href="/contact"
              className="group inline-flex bg-accent hover:bg-white text-white hover:text-primary font-body font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-2xl shadow-accent/30 items-center gap-3 text-base"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
