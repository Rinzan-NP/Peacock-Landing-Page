"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const PeacockLogo = () => (
    <div className="flex flex-col items-center justify-center text-primary group transition-transform duration-300 hover:scale-105">
        <svg width="32" height="22" viewBox="0 0 40 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="mb-0.5">
            <polyline points="9,4 20,15 31,4" />
            <polyline points="9,10 20,21 31,10" />
            <polyline points="9,16 20,27 31,16" />
        </svg>
        <div className="w-[110px] border-t-[1.5px] border-b-[1.5px] border-current py-[1px] text-center shadow-sm">
            <span className="font-bold tracking-[0.3em] ml-[0.2em] text-[13px] uppercase font-serif block leading-none">
                Peacock
            </span>
        </div>
    </div>
);

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    // Track if this is the very first mount so we only animate in once
    const hasAnimatedIn = useRef(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Mark that we've already animated in after the first render
    useEffect(() => {
        hasAnimatedIn.current = true;
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "BIM", path: "/bim" },
        { name: "Clients", path: "/clients" },
        { name: "Partners", path: "/partners" },
    ];

    return (
        <div className="fixed top-6 left-0 w-full z-[100] flex justify-center px-4 md:px-6 pointer-events-none">
            <motion.header
                initial={hasAnimatedIn.current ? false : { y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`pointer-events-auto rounded-[2.5rem] transition-all duration-500 w-full flex items-center justify-between px-6 md:px-8 py-3 
          ${isScrolled
                        ? "liquid-nav max-w-5xl"
                        : "bg-white/95 backdrop-blur-xl shadow-2xl max-w-6xl border border-white/50"
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
                    <PeacockLogo />
                </Link>

                {/* Desktop Nav */}
                <LayoutGroup>
                    <nav className="hidden lg:flex items-center bg-slate-50/50 p-1.5 rounded-full border border-slate-200/50 shadow-inner">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`relative font-bold text-[13px] uppercase tracking-wider transition-colors px-6 py-2.5 rounded-full z-10 ${isActive ? "text-white" : "text-primary hover:text-accent"
                                        }`}
                                >
                                    <span className="relative z-20">{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavBackground"
                                            className="absolute inset-0 bg-accent rounded-full shadow-md shadow-accent/20 z-10"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </LayoutGroup>

                {/* Contact CTA */}
                <div className="hidden lg:block flex-shrink-0">
                    <Link
                        href="/contact"
                        className="bg-primary hover:bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl shadow-primary/20 hover:-translate-y-1 block"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-primary p-3 bg-slate-50 rounded-full border border-slate-200 transition-colors hover:bg-primary hover:text-white shadow-sm"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.div>
                </button>

                {/* Mobile Nav Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:hidden absolute top-[120%] left-0 w-full min-w-[300px] origin-top bg-white border border-slate-100 shadow-2xl rounded-[2.5rem] p-6 flex flex-col gap-4 overflow-hidden"
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
                                    return (
                                        <Link
                                            key={link.path}
                                            href={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`font-bold text-lg px-6 py-4 rounded-[1.5rem] transition-colors flex items-center ${isActive ? "bg-accent/10 text-accent border border-accent/20" : "text-primary hover:bg-slate-50 border border-transparent"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                })}
                            </div>
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="bg-primary hover:bg-black text-white px-6 py-5 rounded-[1.5rem] font-bold text-center mt-2 shadow-xl shadow-primary/20 transition-all text-lg"
                            >
                                Contact Us
                            </Link>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </motion.header>
        </div>
    );
}
