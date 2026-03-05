import Link from "next/link";
import { MoveRight, Linkedin, Twitter, Instagram } from "lucide-react";

const PeacockLogoWhite = () => (
    <div className="flex flex-col items-start justify-center text-white">
        <svg width="48" height="32" viewBox="0 0 40 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="mb-2">
            <polyline points="9,4 20,15 31,4" />
            <polyline points="9,10 20,21 31,10" />
            <polyline points="9,16 20,27 31,16" />
        </svg>
        <div className="w-[140px] border-t-2 border-b-2 border-white/80 py-[2px] -mt-[4px] text-left">
            <span className="font-display font-bold tracking-[0.28em] uppercase block leading-none ml-[0.1em] text-[18px]">
                Peacock
            </span>
        </div>
    </div>
);

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden">
            <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-white/10 pb-20">

                {/* Brand & Socials */}
                <div className="md:col-span-1">
                    <Link href="/" className="inline-block mb-10 hover:opacity-80 transition-opacity">
                        <PeacockLogoWhite />
                    </Link>
                    <p className="font-body text-white/60 text-sm leading-relaxed mb-10">
                        Total Outsourcing Solutions provider specialising in Engineering, BIM, Reality Capture, and Power Sector excellence since 2005.
                    </p>
                    <div className="flex gap-3">
                        <a href="https://linkedin.com/company/peacock-resources-llp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                            <Linkedin size={17} fill="currentColor" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                            <Twitter size={17} fill="currentColor" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                            <Instagram size={17} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="md:col-span-1">
                    <h4 className="font-display font-bold text-lg mb-8 tracking-tight">Quick Links</h4>
                    <ul className="space-y-4 text-white/70 text-sm font-body">
                        <li><Link href="/about" className="hover:text-accent flex items-center gap-3 transition-colors"><MoveRight size={14} /> About Us</Link></li>
                        <li><Link href="/services" className="hover:text-accent flex items-center gap-3 transition-colors"><MoveRight size={14} /> Core Services</Link></li>
                        <li><Link href="/bim" className="hover:text-accent flex items-center gap-3 transition-colors"><MoveRight size={14} /> BIM Specialisation</Link></li>
                        <li><Link href="/clients" className="hover:text-accent flex items-center gap-3 transition-colors"><MoveRight size={14} /> Global Partners</Link></li>
                    </ul>
                </div>

                {/* HQ Address */}
                <div className="md:col-span-1">
                    <h4 className="font-display font-bold text-lg mb-8 tracking-tight">Dubai HQ</h4>
                    <address className="not-italic text-sm text-white/60 space-y-2 font-body leading-relaxed">
                        <p className="text-white font-semibold">Peacock Electromechanical</p>
                        <p>Mohd. Ibrahim Siddiqi Bldg,</p>
                        <p>Al Karama, Dubai, UAE.</p>
                        <p>P.O. Box 17 18 73</p>
                    </address>
                </div>

                {/* Contact */}
                <div className="md:col-span-1">
                    <h4 className="font-display font-bold text-lg mb-8 tracking-tight">Contact</h4>
                    <div className="text-sm text-white/60 space-y-2 font-body">
                        <p><a href="mailto:sales@peacockengineers.com" className="hover:text-accent transition-colors">sales@peacockengineers.com</a></p>
                        <p>+971 4 3547604</p>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex mt-8 bg-white/10 border border-white/20 text-white hover:bg-accent hover:border-accent px-6 py-2.5 rounded-full font-body font-semibold text-xs uppercase tracking-widest transition-all hover:-translate-y-0.5"
                    >
                        Get In Touch
                    </Link>
                </div>

            </div>

            <div className="container mx-auto px-6 max-w-7xl mt-10 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 font-body">
                <p>&copy; {new Date().getFullYear()} Peacock Resources LLP. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span className="hover:text-white/60 transition-colors">ISO 19650 Certified</span>
                    <span className="hover:text-white/60 transition-colors">Quality Management</span>
                </div>
            </div>
        </footer>
    );
}
