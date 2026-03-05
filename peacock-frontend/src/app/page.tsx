"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Zap,
  Camera,
  ShieldCheck,
  Globe2,
  Building2,
  Workflow,
} from "lucide-react";

// ─── Animated counting number ─────────────────────────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, to, {
      duration: 2.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return ctrl.stop;
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

// ─── Continuous marquee ticker ────────────────────────────────────────────────
function Ticker({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden select-none">
      <motion.ul
        className="flex gap-0 whitespace-nowrap list-none m-0 p-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <li key={i} className="inline-flex items-center gap-0 shrink-0">
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.25em] text-white/40 px-6">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

// ─── Word-by-word animated headline ──────────────────────────────────────────
function WordReveal({
  text,
  className,
  style,
  delay = 0,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const words = text.split(" ");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <span ref={ref} className={className} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.22em] last:mr-0"
          initial={{ opacity: 0, y: "60%", skewY: 3 }}
          animate={inView ? { opacity: 1, y: "0%", skewY: 0 } : {}}
          transition={{
            duration: 0.75,
            delay: delay + i * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// ─── Shared animation variants ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
  /* Scroll-linked parallax for hero */
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroContentY = useTransform(heroScroll, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.65], [1, 0]);

  /* About section — image parallax */
  const aboutImgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutImgRef,
    offset: ["start end", "end start"],
  });
  const aboutImgY = useTransform(aboutScroll, [0, 1], ["-8%", "8%"]);

  return (
    <>
      {/* ════════════════════════════════════════════════════════ HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-end overflow-hidden bg-primary"
      >
        {/* Parallax bg image */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroBgY }}
        >
          <img
            src="/hero.png"
            alt=""
            className="w-full h-full object-cover opacity-25 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/98 via-primary/85 to-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        </motion.div>

        {/* Organic bg accent — NOT a circle */}
        <div
          className="absolute right-[-8%] top-[5%] w-[55%] h-[90%] bg-accent/[0.06] pointer-events-none z-0"
          style={{
            borderRadius: "60% 20% 40% 80% / 30% 60% 40% 70%",
            transform: "rotate(-6deg)",
          }}
        />

        {/* Large watermark */}
        <div
          className="absolute right-0 top-0 bottom-0 flex items-center justify-end pr-8 select-none pointer-events-none z-0"
          aria-hidden
        >
          <span
            className="font-display font-bold text-white/[0.035] leading-none"
            style={{ fontSize: "clamp(200px, 26vw, 380px)", letterSpacing: "-0.06em" }}
          >
            18+
          </span>
        </div>

        {/* Vertical side text */}
        <div
          className="absolute left-5 top-1/2 -translate-y-1/2 hidden xl:flex items-center z-10 pointer-events-none"
          aria-hidden
        >
          <p
            className="font-body text-white/20 text-[9px] font-bold uppercase tracking-[0.35em]"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Peacock Resources LLP · Est. 2005
          </p>
        </div>

        {/* Hero content — fades out and rises slightly as user scrolls */}
        <motion.div
          className="container relative z-10 px-6 max-w-7xl mx-auto pt-44 pb-24"
          style={{ y: heroContentY, opacity: heroOpacity }}
        >
          <motion.p
            className="font-body text-accent/80 text-[11px] font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="w-8 h-px bg-accent/60 inline-block" />
            Total Outsourcing Solutions
          </motion.p>

          {/* Word-by-word headline */}
          <h1
            className="font-display font-bold text-white leading-[0.88] mb-0 overflow-hidden"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)", letterSpacing: "-0.045em" }}
          >
            <span className="block overflow-hidden">
              <WordReveal text="Global" delay={0.3} />
            </span>
            <span className="block overflow-hidden" style={{ color: "rgb(2 132 199 / 0.85)" }}>
              <WordReveal text="Benchmark" delay={0.42} />
            </span>
            <span className="block overflow-hidden">
              <WordReveal text="for Technical" delay={0.54} />
            </span>
            <span className="block overflow-hidden">
              <WordReveal text="Excellence." delay={0.66} />
            </span>
          </h1>

          <motion.div
            className="mt-14 flex flex-col md:flex-row gap-7 md:gap-14 md:items-end"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-white/55 text-base leading-relaxed max-w-sm font-body">
              Your global partner for engineering outsourcing — specialising in
              BIM, Power Systems, Reality Capture, and Digital Construction.
            </p>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 bg-accent hover:bg-white text-white hover:text-primary font-body font-semibold py-3.5 px-7 transition-all duration-300 shadow-xl shadow-accent/30 text-sm tracking-wide"
                style={{ borderRadius: "2rem 0.5rem 2rem 0.5rem" }}
              >
                Our Services
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/60 text-white/70 hover:text-white font-body font-semibold py-3.5 px-6 transition-all duration-300 text-sm backdrop-blur-sm"
                style={{ borderRadius: "0.5rem 2rem 0.5rem 2rem" }}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* Animated scroll indicator */}
          <motion.div
            className="mt-16 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
          >
            <div className="relative w-px h-12 bg-white/10 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full bg-accent"
                animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.4,
                }}
              />
            </div>
            <span className="font-body text-white/25 text-[9px] uppercase tracking-[0.35em]">
              Scroll to explore
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════ CREDENTIAL TICKER */}
      <div className="bg-slate-950 border-y border-white/5 py-3.5 overflow-hidden">
        <Ticker
          items={[
            "Substation Engineering",
            "BIM 3D – 7D",
            "Reality Capture",
            "Power Systems",
            "Project Staffing",
            "ISO 19650 Certified",
            "500 kV Systems",
            "Digital Twin",
            "GASCO Compliant",
            "LiDAR Surveys",
          ]}
        />
      </div>

      {/* ════════════════════════════════════════════════════════ STATS */}
      <section className="bg-white overflow-hidden border-b border-slate-100">
        <motion.div
          className="container mx-auto px-6 max-w-7xl"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Deliberately unequal flex widths — not a 4-column grid */}
          <div className="flex flex-wrap">
            {[
              {
                to: 18,
                suffix: "+",
                label: "Years",
                sub: "Active since 2005",
                grow: "flex-[1.6_1_0%]",
                pt: "pt-12 pb-10",
              },
              {
                to: 500,
                suffix: "kV",
                label: "Substation",
                sub: "Highest voltage handled",
                grow: "flex-[1_1_0%]",
                pt: "pt-16 pb-8",
              },
              {
                to: 7,
                suffix: "D",
                label: "BIM",
                sub: "Full-dimension modelling",
                grow: "flex-[0.9_1_0%]",
                pt: "pt-12 pb-12",
              },
              {
                to: 10,
                suffix: "+",
                label: "Countries",
                sub: "Global project delivery",
                grow: "flex-[1.1_1_0%]",
                pt: "pt-8 pb-14",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`${s.grow} ${s.pt} min-w-[120px] px-8 border-r border-slate-100 last:border-r-0`}
              >
                <div
                  className="font-display font-bold text-primary leading-none mb-2"
                  style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)", letterSpacing: "-0.05em" }}
                >
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div className="font-body text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">
                  {s.label}
                </div>
                <div className="font-body text-slate-400 text-xs">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════ ABOUT */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Side text label */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center hidden xl:flex select-none pointer-events-none"
          aria-hidden
        >
          <p
            className="font-body text-slate-100 text-[9px] uppercase tracking-[0.45em] font-bold"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Philosophy · Client First
          </p>
        </div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left text column */}
            <motion.div
              className="lg:col-span-5"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p
                variants={fadeUp}
                className="font-body text-accent text-[11px] font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-3"
              >
                <span className="w-5 h-px bg-accent" /> Our Philosophy
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="font-display font-bold text-primary leading-[0.93] mb-8"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", letterSpacing: "-0.04em" }}
              >
                "Client First" — without ever compromising quality.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="font-body text-slate-500 text-base leading-relaxed mb-8"
              >
                We empower our customers to achieve their business objectives
                in a faster, easier, and most cost-effective way — delivering
                turnkey engineering strictly adhering to international standards.
              </motion.p>

              <motion.ul variants={stagger} className="space-y-3.5 mb-10">
                {[
                  "Zero Compromise on Safety",
                  "International Codes & GASCO DGS",
                  "ISO 19650 Certified Processes",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={fadeUp}
                    className="flex items-center gap-4 font-body font-medium text-primary text-sm"
                  >
                    <ShieldCheck className="text-accent shrink-0" size={16} />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={slideInLeft}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-body font-semibold text-primary hover:text-accent transition-colors border-b border-current pb-0.5 text-sm"
                >
                  Read more about us <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right image with scroll parallax */}
            <div className="lg:col-span-7 relative" ref={aboutImgRef}>
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden"
                style={{ borderRadius: "2.5rem 0.75rem 3rem 1.5rem" }}
              >
                {/* Image moves slightly against the scroll */}
                <motion.img
                  src="/banner.jpg"
                  alt="Engineering Drafting"
                  className="w-full object-cover block"
                  style={{ y: aboutImgY, aspectRatio: "4/3", scale: 1.12 }}
                />
              </motion.div>

              {/* Floating accent card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-primary text-white shadow-2xl hidden md:block"
                style={{ borderRadius: "0.5rem 2.5rem 0.5rem 2.5rem" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="px-8 py-6">
                  <p
                    className="font-display font-bold text-white text-4xl leading-none mb-1"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    Total
                  </p>
                  <p className="font-body text-accent text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                    Outsourcing<br />Support
                  </p>
                </div>
              </motion.div>

              {/* Small rotated accent shape */}
              <motion.div
                className="absolute -top-5 -right-3 w-20 h-20 bg-accent/15 hidden lg:block"
                style={{ borderRadius: "40% 10% 40% 60%", transform: "rotate(22deg)" }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════ SERVICES */}
      <section className="py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        {/* Background blob */}
        <div
          className="absolute -bottom-40 -right-40 w-[700px] h-[600px] bg-primary/[0.03] pointer-events-none"
          style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Section header */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="font-body text-accent text-[11px] font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-3"
              >
                <span className="w-5 h-px bg-accent" /> Core Expertise
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display font-bold text-primary leading-[0.92]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)", letterSpacing: "-0.04em" }}
              >
                End-to-End<br />Delivery.
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              className="font-body text-slate-500 text-sm max-w-xs leading-relaxed"
            >
              Complex engineering from substation design to digital twin handover.
            </motion.p>
          </motion.div>

          {/* Card grid: featured large (2/3) + two stacked (1/3) */}
          <div className="grid lg:grid-cols-3 gap-5">
            {/* Hero card */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="bg-primary p-10 md:p-14 h-full flex flex-col justify-between relative overflow-hidden group min-h-[400px]"
                style={{ borderRadius: "0.75rem 3rem 0.75rem 3rem" }}
              >
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-[0.06] bg-cover bg-center mix-blend-screen" />
                <div
                  className="absolute bottom-0 right-0 w-80 h-64 bg-accent/30 pointer-events-none"
                  style={{
                    borderRadius: "60% 40% 30% 70% / 40% 60% 40% 60%",
                    filter: "blur(72px)",
                  }}
                />
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 bg-white/10 border border-white/15 flex items-center justify-center text-white mb-8"
                    style={{ borderRadius: "0.5rem 1.5rem 0.5rem 1.5rem" }}
                  >
                    <Zap size={22} />
                  </div>
                  <h3
                    className="font-display font-bold text-white mb-4"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.03em" }}
                  >
                    Power Sector Engineering
                  </h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed max-w-xl">
                    Specialised primary and secondary engineering for AIS and GIS
                    substations up to 500kV. Extends to SAS, SCADA integration,
                    and protection relay coordination.
                  </p>
                </div>
                <div className="relative z-10 mt-10">
                  <Link
                    href="/services"
                    className="group/btn inline-flex items-center gap-2 text-white/60 font-body font-semibold text-sm border-b border-white/20 hover:border-accent hover:text-accent pb-px transition-all"
                  >
                    Explore services
                    <ArrowUpRight
                      size={15}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Two smaller cards */}
            <div className="flex flex-col gap-5">
              {[
                {
                  Icon: Box,
                  title: "BIM & Digital Twin",
                  desc: "Complete 3D–7D BIM. From concept to facility lifecycle management.",
                  href: "/bim",
                  r: "2rem 0.5rem 2rem 0.5rem",
                  ir: "0.5rem 1.25rem 0.5rem 1.25rem",
                  delay: 0.15,
                  x: 40,
                },
                {
                  Icon: Camera,
                  title: "Reality Capture",
                  desc: "LiDAR, drones, photogrammetry — precise as-built point clouds.",
                  href: "/services",
                  r: "0.5rem 2rem 0.5rem 2rem",
                  ir: "1.25rem 0.5rem 1.25rem 0.5rem",
                  delay: 0.28,
                  x: 40,
                },
              ].map(({ Icon, title, desc, href, r, ir, delay }, i) => (
                <motion.div
                  key={i}
                  className="flex-1"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col"
                    style={{ borderRadius: r }}
                  >
                    <div
                      className="w-11 h-11 bg-slate-50 border border-slate-100 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                      style={{ borderRadius: ir }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3
                      className="font-display font-bold text-primary text-xl mb-2 group-hover:text-accent transition-colors"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {title}
                    </h3>
                    <p className="font-body text-slate-500 text-sm leading-relaxed flex-1 mb-5">
                      {desc}
                    </p>
                    <Link
                      href={href}
                      className="font-body font-bold text-[10px] text-accent hover:text-primary uppercase tracking-widest flex items-center gap-2 transition-colors"
                    >
                      Learn more <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════ PARTNERS */}
      <section className="py-32 bg-white overflow-hidden relative">
        {/* bg blob */}
        <div
          className="absolute top-0 left-[-10%] w-[500px] h-[400px] bg-light/70 pointer-events-none -z-10"
          style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
        />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p
                variants={fadeUp}
                className="font-body text-accent text-[11px] font-bold uppercase tracking-[0.25em] mb-5 flex items-center gap-3"
              >
                <span className="w-5 h-px bg-accent" /> Business Ecosystem
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display font-bold text-primary leading-[0.92] mb-7"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", letterSpacing: "-0.04em" }}
              >
                Empowering the World's Leading Innovators.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-body text-slate-500 text-sm leading-relaxed mb-10"
              >
                We integrate seamlessly with global power transmission,
                infrastructure, and oil & gas authorities — streamlining
                complex engineering workflows across borderless operations.
              </motion.p>
              <motion.div variants={fadeUp} className="flex gap-10 mb-10">
                {[
                  { label: "UAE & GCC", sub: "Regional Hub" },
                  { label: "ASIA", sub: "Global Support" },
                ].map((r, i) => (
                  <div key={i}>
                    <p
                      className="font-display font-bold text-primary text-2xl"
                      style={{ letterSpacing: "-0.04em" }}
                    >
                      {r.label}
                    </p>
                    <p className="font-body text-slate-400 text-[10px] uppercase tracking-widest mt-0.5">
                      {r.sub}
                    </p>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={slideInLeft}>
                <Link
                  href="/clients"
                  className="inline-flex items-center gap-3 font-body font-semibold text-white bg-primary hover:bg-slate-900 px-7 py-3.5 transition-all text-sm shadow-lg"
                  style={{ borderRadius: "0.375rem 1.5rem 0.375rem 1.5rem" }}
                >
                  View Global Partners <Globe2 size={15} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Partner cards — offset stagger */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {[
                { name: "ABB", loc: "UAE / KSA", icon: <Building2 className="text-accent" size={24} />, offset: false, r: "1.5rem 0.375rem 1.5rem 0.375rem" },
                { name: "SIEMENS", loc: "Global", icon: <Globe2 className="text-accent" size={24} />, offset: true, r: "0.375rem 1.5rem 0.375rem 1.5rem" },
                { name: "PETROFAC", loc: "Regional", icon: <Workflow className="text-accent" size={24} />, offset: false, r: "0.75rem 2rem 0.375rem 1.5rem" },
                { name: "AREVA", loc: "Global Hub", icon: <ShieldCheck className="text-accent" size={24} />, offset: true, r: "2rem 0.375rem 1.5rem 0.75rem" },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`bg-slate-50 border border-slate-100 p-6 flex flex-col items-center text-center hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${p.offset ? "mt-6" : ""}`}
                  style={{ borderRadius: p.r }}
                >
                  <div
                    className="w-11 h-11 bg-white flex items-center justify-center mb-4 border border-slate-100 shadow-sm"
                    style={{ borderRadius: i % 2 === 0 ? "0.375rem 1rem 0.375rem 1rem" : "1rem 0.375rem 1rem 0.375rem" }}
                  >
                    {p.icon}
                  </div>
                  <span
                    className="font-display font-bold text-primary text-lg block"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {p.name}
                  </span>
                  <span className="font-body text-slate-400 text-[10px] uppercase tracking-widest mt-1">
                    {p.loc}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ CTA */}
      <section className="bg-primary py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.png')] opacity-[0.06] bg-cover bg-center" />
        {/* Organic glow */}
        <div
          className="absolute top-[-20%] right-[-5%] w-[700px] h-[600px] bg-accent/20 pointer-events-none mix-blend-screen"
          style={{
            borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%",
            filter: "blur(130px)",
            transform: "rotate(-12deg)",
          }}
        />
        {/* NOW watermark */}
        <div
          className="absolute bottom-0 right-0 select-none pointer-events-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-display font-bold text-white/[0.04] leading-none block"
            style={{ fontSize: "clamp(160px, 24vw, 360px)", letterSpacing: "-0.06em" }}
          >
            NOW.
          </span>
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — editorial CTA copy */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.p
                variants={fadeUp}
                className="font-body text-accent text-[11px] font-bold uppercase tracking-[0.25em] mb-8 flex items-center gap-3"
              >
                <span className="w-5 h-px bg-accent" /> Let's build together
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display font-bold text-white leading-[0.9] mb-10"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", letterSpacing: "-0.04em" }}
              >
                Standardise your engineering today.
              </motion.h2>
              <motion.div variants={fadeUp}>
                <Link
                  href="/contact"
                  className="group inline-flex bg-accent hover:bg-white text-white hover:text-primary font-body font-semibold py-4 px-10 transition-all duration-300 shadow-2xl shadow-accent/30 items-center gap-3 text-sm tracking-wide"
                  style={{ borderRadius: "2rem 0.5rem 2rem 0.5rem" }}
                >
                  Start Your Project
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — "contact card" hovering at a slight tilt */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotate: 0, scale: 1.01 }}
              style={{ rotate: -0.8 }}
            >
              <div
                className="bg-white/[0.07] border border-white/12 p-10 backdrop-blur-sm"
                style={{ borderRadius: "0.75rem 2.5rem 0.75rem 2.5rem" }}
              >
                <p className="font-body text-white/30 text-[10px] uppercase tracking-widest mb-7">
                  Direct Contact
                </p>
                <div className="space-y-5 mb-8">
                  {[
                    { label: "Email", val: "sales@peacockengineers.com" },
                    { label: "Phone", val: "+971 4 3547604" },
                    { label: "Hours", val: "Mon – Fri · 8:00 AM – 6:00 PM GST", small: true },
                  ].map((row, i) => (
                    <div key={i}>
                      <p className="font-body text-white/30 text-[10px] uppercase tracking-widest mb-1">
                        {row.label}
                      </p>
                      <p
                        className={`font-display font-bold text-white ${row.small ? "text-lg" : "text-xl"}`}
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {row.val}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="font-body text-white/25 text-xs">
                    Peacock Electromechanical Works LLC · Dubai, UAE
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
