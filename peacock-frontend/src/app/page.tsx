"use client";
import Link from "next/link";
import { ArrowRight, Box, Zap, Camera, ShieldCheck, Globe2, Building2, Workflow } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[105vh] flex items-center justify-center overflow-hidden pt-32 bg-primary">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.png"
            alt="Engineering Background"
            className="w-full h-full object-cover mix-blend-soft-light opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40" />
        </div>

        <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center md:text-left pt-20 pb-32 flex flex-col justify-center">
          <div className="max-w-4xl">
            <FadeIn delay={0.1}>
              <span className="inline-block bg-accent/20 border border-accent/40 text-accent px-5 py-2 rounded-full font-bold text-sm uppercase tracking-widest mb-8 backdrop-blur-md shadow-sm">
                Total Outsourcing Solutions
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] text-white font-jakarta font-bold leading-[1.05] tracking-tight mb-8">
                Global Benchmark <br className="hidden md:block" /> for Technical <span className="gradient-text">Excellence.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-12 leading-relaxed font-light">
                Your global partner for engineering outsourcing, specializing in BIM, Power Systems, Reality Capture, and Digital Construction Solutions.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                <Link
                  href="/services"
                  className="bg-accent hover:bg-white hover:text-primary text-white font-bold py-5 px-10 rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-accent/30 text-lg group w-fit mx-auto md:mx-0"
                >
                  Explore Our Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Floating gradient orb */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0" />
      </section>

      {/* Stats - Floating Box */}
      <section className="relative z-20 w-full -mt-24 px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <FadeIn delay={0.5}>
            <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-primary/10 grid grid-cols-2 lg:grid-cols-4 gap-10 divide-x divide-slate-100 border border-slate-100">
              <div className="text-center px-2">
                <span className="block text-4xl md:text-6xl font-jakarta font-bold text-accent mb-2">18<span className="text-primary">+</span></span>
                <span className="uppercase tracking-widest text-xs font-bold text-slate-400">Years Active</span>
              </div>
              <div className="text-center px-2">
                <span className="block text-4xl md:text-6xl font-jakarta font-bold text-primary mb-2">500<span className="text-2xl md:text-3xl text-accent">kV</span></span>
                <span className="uppercase tracking-widest text-xs font-bold text-slate-400">Substation Range</span>
              </div>
              <div className="text-center px-2">
                <span className="block text-4xl md:text-6xl font-jakarta font-bold text-accent mb-2">7D</span>
                <span className="uppercase tracking-widest text-xs font-bold text-slate-400">BIM Precision</span>
              </div>
              <div className="text-center px-2">
                <span className="block text-4xl md:text-6xl font-jakarta font-bold text-primary mb-2">ISO</span>
                <span className="uppercase tracking-widest text-xs font-bold text-slate-400">19650 Certified</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-light rounded-full blur-[120px] -z-10 translate-y-[-50%] -translate-x-1/2" />
        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <div className="relative group">
              <img src="/banner.jpg" alt="Engineering Drafting" className="rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/5] object-center transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl hidden md:block border-[6px] border-white transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4">
                <p className="font-jakarta font-extrabold text-4xl mb-2">Total</p>
                <p className="font-bold text-sm text-accent uppercase tracking-widest">Outsourcing Support</p>
              </div>
            </div>
          </FadeIn>

          <div className="flex flex-col justify-center">
            <FadeIn delay={0.2}>
              <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4 flex items-center gap-4">
                <span className="w-10 h-[3px] bg-accent rounded-full"></span> Our Philosophy
              </h2>
              <h3 className="font-jakarta text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary mb-8 leading-[1.1] tracking-tight">
                A "Client First" approach without quality compromise.
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                We empower our customers to achieve their business objectives in a faster, easier, and most cost-effective way by delivering turnkey engineering strictly adhering to international standards.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  "Zero Compromise on Safety",
                  "International Codes & GASCO DGS",
                  "Proven Track Record in Middle East",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-6 font-bold text-primary text-xl bg-light/50 p-4 pr-8 rounded-[1.5rem] shadow-sm border border-slate-100 w-full md:w-fit">
                    <div className="w-12 h-12 rounded-[1rem] bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                      <ShieldCheck className="text-accent" size={24} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-3 font-bold text-primary hover:text-accent transition-colors text-lg border-b-2 border-primary hover:border-accent pb-1 w-fit">
                Read More About Us <ArrowRight size={20} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid (Brentor Style Cards) */}
      <section className="py-32 bg-light border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-[3px] bg-accent rounded-full"></span> Core Expertise <span className="w-8 h-[3px] bg-accent rounded-full"></span>
            </h2>
            <h3 className="font-jakarta text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.05] tracking-tight mb-6">End-to-End Delivery.</h3>
            <p className="text-xl text-slate-500 font-medium">Delivering complex solutions built on precise, intelligent data.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="h-full">
              <div className="bg-white p-10 lg:p-12 rounded-[3.5rem] shadow-xl shadow-primary/5 hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 group border border-slate-100 h-full flex flex-col relative overflow-hidden z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-light rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700" />
                <div className="w-20 h-20 bg-light rounded-[1.5rem] flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <Zap size={36} />
                </div>
                <h4 className="font-jakarta text-3xl font-bold text-primary mb-6">Power Sector</h4>
                <p className="text-slate-500 mb-10 text-lg leading-relaxed flex-grow font-medium">
                  Specialized primary and secondary engineering for AIS and GIS Substations. Extends to Substation Automation Systems (SAS).
                </p>
                <Link href="/services" className="mt-auto text-primary font-extrabold flex items-center gap-3 group-hover:text-accent transition-all text-xl w-fit">
                  Learn more <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="h-full">
              <div className="bg-primary text-white p-10 lg:p-12 rounded-[3.5rem] shadow-xl hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 group h-full flex flex-col relative overflow-hidden z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent blur-[140px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-full" />
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-[1.5rem] flex items-center justify-center text-white mb-8 group-hover:bg-accent transition-colors duration-500 relative z-10">
                  <Box size={36} />
                </div>
                <h4 className="font-jakarta text-3xl font-bold text-white mb-6 relative z-10">BIM & Digital Twin</h4>
                <p className="text-white/80 mb-10 text-lg leading-relaxed flex-grow font-medium relative z-10">
                  Complete 3D Visualization, 4D Scheduling, 5D Estimation, to 7D Facility Management. State-of-the-art intelligent modeling.
                </p>
                <Link href="/bim" className="mt-auto text-white font-extrabold flex items-center gap-3 transition-all text-xl w-fit relative z-10">
                  Learn more <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform text-accent" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="h-full">
              <div className="bg-white p-10 lg:p-12 rounded-[3.5rem] shadow-xl shadow-primary/5 hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 group border border-slate-100 h-full flex flex-col relative overflow-hidden z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-light rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700" />
                <div className="w-20 h-20 bg-light rounded-[1.5rem] flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <Camera size={36} />
                </div>
                <h4 className="font-jakarta text-3xl font-bold text-primary mb-6">Reality Capture</h4>
                <p className="text-slate-500 mb-10 text-lg leading-relaxed flex-grow font-medium">
                  High-precision LiDAR scanning, drones, and photogrammetry transformed into highly accurate As-Built point cloud data.
                </p>
                <Link href="/services" className="mt-auto text-primary font-extrabold flex items-center gap-3 group-hover:text-accent transition-all text-xl w-fit">
                  Learn more <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Business Platform & Ecosystem Section */}
      <section className="py-32 bg-white relative z-10 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-light rounded-full blur-[150px] -z-10 translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4 flex items-center gap-4">
                <span className="w-10 h-[3px] bg-accent rounded-full"></span> Business Ecosystem
              </h2>
              <h3 className="font-jakarta text-4xl md:text-[3.5rem] font-bold text-primary mb-8 leading-[1.1] tracking-tight">
                Empowering the World's Leading Innovators.
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                Our business platform integrates seamlessly with global power transmission, infrastructure, and oil & gas authorities to streamline complex engineering workflows, providing unmatched reliability across borderless operations.
              </p>

              <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-10">
                <div className="flex flex-col gap-2 border-l-4 border-light pl-4 hover:border-accent transition-colors">
                  <h4 className="font-jakarta text-4xl font-bold text-primary">UAE & GCC</h4>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Regional Hub</span>
                </div>
                <div className="flex flex-col gap-2 border-l-4 border-light pl-4 hover:border-accent transition-colors">
                  <h4 className="font-jakarta text-4xl font-bold text-primary">ASIA</h4>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Global Support</span>
                </div>
              </div>
              <Link href="/clients" className="inline-flex items-center gap-3 font-bold text-white bg-primary hover:bg-black px-8 py-4 rounded-full transition-all text-lg shadow-xl hover:-translate-y-1">
                View Global Partners <Globe2 size={20} />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { name: "ABB", loc: "UAE / KSA", icon: <Building2 className="text-accent" size={32} /> },
                  { name: "SIEMENS", loc: "Global", icon: <Globe2 className="text-accent" size={32} /> },
                  { name: "PETROFAC", loc: "Regional", icon: <Workflow className="text-accent" size={32} /> },
                  { name: "AREVA", loc: "Global Hub", icon: <ShieldCheck className="text-accent" size={32} /> },
                ].map((ptnr, idx) => (
                  <div key={idx} className={`bg-light p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${idx === 1 || idx === 3 ? 'md:mt-12' : ''}`}>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                      {ptnr.icon}
                    </div>
                    <span className="font-jakarta text-2xl font-bold text-primary mb-2 block">{ptnr.name}</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 font-bold block">{ptnr.loc}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to action (Brentor Style Big Banner) */}
      <section className="bg-primary py-32 md:py-48 text-center relative overflow-hidden rounded-t-[4rem] md:rounded-t-[6rem] shadow-2xl mt-[-2rem] z-20">
        <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-accent/30 rounded-full blur-[180px] opacity-50 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

        <FadeIn className="container relative z-10 mx-auto px-6 max-w-5xl">
          <span className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest mb-10 shadow-lg shadow-white/5">
            Let's build the future together
          </span>
          <h2 className="font-jakarta text-6xl md:text-[5.5rem] font-bold text-white mb-14 leading-[1.05] tracking-tight">
            Standardize your <br className="hidden md:block" /> engineering today.
          </h2>
          <Link
            href="/contact"
            className="inline-flex bg-accent hover:bg-white text-white hover:text-primary font-bold py-6 px-14 rounded-full transition-all hover:-translate-y-2 text-xl shadow-2xl shadow-accent/40 items-center justify-center gap-4 group"
          >
            Start Your Project <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
