import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function Contact() {
    return (
        <div className="pt-32 pb-20 bg-white">
            <section className="bg-primary rounded-[3rem] mx-4 md:mx-8 text-white py-32 md:py-48 mb-32 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('/hero.png')] opacity-10 mix-blend-screen bg-cover bg-center" />
                <FadeIn className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
                    <span className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest mb-10 shadow-lg shadow-white/5">
                        Reach Out
                    </span>
                    <h1 className="font-jakarta text-6xl md:text-[5.5rem] font-bold mb-10 leading-[1.05] tracking-tight">
                        Connect with <span className="text-accent underline decoration-4 decoration-accent/50 underline-offset-[16px]">Us.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-12 max-w-3xl mx-auto">
                        Ready to integrate global engineering standards into your next project? Get in touch with our global offices.
                    </p>
                </FadeIn>
            </section>

            <section className="container mx-auto px-6 mb-40">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <FadeIn>
                            <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4 flex items-center gap-4">
                                <span className="w-12 h-[3px] bg-accent rounded-full"></span> Our Offices
                            </h2>
                            <h3 className="font-jakarta text-5xl md:text-6xl font-bold text-primary mb-12 leading-[1.05] tracking-tight">
                                Global Presence, Local Expertise.
                            </h3>
                        </FadeIn>

                        <div className="space-y-12">
                            <FadeIn delay={0.1}>
                                <div className="flex gap-8 items-start bg-light p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-transform duration-500">
                                    <div className="w-20 h-20 shrink-0 bg-white rounded-[1.5rem] flex items-center justify-center text-accent shadow-sm border border-slate-200">
                                        <MapPin size={32} />
                                    </div>
                                    <div>
                                        <h4 className="font-jakarta text-2xl font-bold text-primary mb-4">Dubai Headquarters</h4>
                                        <address className="not-italic text-slate-500 font-medium leading-relaxed space-y-2 text-lg">
                                            <p className="font-bold text-primary">Peacock Electromechanical Works LLC</p>
                                            <p>Mohd. Ibrahim Siddiqi Building,</p>
                                            <p>Community 318, Street 2B</p>
                                            <p>Al Karama, Dubai, UAE.</p>
                                            <p>P.O. Box 17 18 73</p>
                                        </address>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="flex gap-8 items-start bg-light p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-transform duration-500">
                                    <div className="w-20 h-20 shrink-0 bg-white rounded-[1.5rem] flex items-center justify-center text-accent shadow-sm border border-slate-200">
                                        <MapPin size={32} />
                                    </div>
                                    <div>
                                        <h4 className="font-jakarta text-2xl font-bold text-primary mb-4">India Operation</h4>
                                        <address className="not-italic text-slate-500 font-medium leading-relaxed space-y-2 text-lg">
                                            <p className="font-bold text-primary">Peacock Resources LLP</p>
                                            <p>Smart Trade City,</p>
                                            <p>Kottakkal, Malappuram,</p>
                                            <p>Kerala, India.</p>
                                        </address>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <div className="flex flex-col gap-6 pt-10 border-t border-slate-200">
                                    <p className="flex items-center gap-6 text-slate-600 font-medium text-xl"><span className="w-14 h-14 bg-light rounded-2xl flex items-center justify-center"><Phone className="text-accent" /></span> +971 4 3547604</p>
                                    <p className="flex items-center gap-6 text-slate-600 font-medium text-xl"><span className="w-14 h-14 bg-light rounded-2xl flex items-center justify-center"><Mail className="text-accent" /></span> sales@peacockengineers.com</p>
                                    <p className="flex items-center gap-6 text-slate-600 font-medium text-xl"><span className="w-14 h-14 bg-light rounded-2xl flex items-center justify-center"><Clock className="text-accent" /></span> Mon - Fri: 8:00 AM - 6:00 PM</p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    <div className="lg:mt-4">
                        <FadeIn delay={0.1}>
                            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl shadow-primary/5 hover:shadow-2xl transition-shadow duration-500 border border-slate-100 border-t-8 border-t-accent">
                                <h4 className="font-jakarta text-4xl font-bold text-primary mb-12">Send a Message</h4>
                                <form className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-sm font-bold text-primary mb-3 uppercase tracking-wider">First Name</label>
                                            <input type="text" className="w-full bg-light border-2 border-transparent focus:border-accent/40 focus:bg-white rounded-2xl p-5 font-medium text-primary outline-none transition-all duration-300" placeholder="John" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-primary mb-3 uppercase tracking-wider">Last Name</label>
                                            <input type="text" className="w-full bg-light border-2 border-transparent focus:border-accent/40 focus:bg-white rounded-2xl p-5 font-medium text-primary outline-none transition-all duration-300" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-primary mb-3 uppercase tracking-wider">Email Address</label>
                                        <input type="email" className="w-full bg-light border-2 border-transparent focus:border-accent/40 focus:bg-white rounded-2xl p-5 font-medium text-primary outline-none transition-all duration-300" placeholder="john@company.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-primary mb-3 uppercase tracking-wider">Service Requirement</label>
                                        <select className="w-full bg-light border-2 border-transparent hover:cursor-pointer focus:border-accent/40 focus:bg-white rounded-2xl p-5 font-medium text-primary outline-none transition-all duration-300">
                                            <option>Primary & Secondary Engineering</option>
                                            <option>BIM Specialization (3D - 7D)</option>
                                            <option>Reality Capture</option>
                                            <option>Equipment Rentals</option>
                                            <option>Other Services</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-primary mb-3 uppercase tracking-wider">Message</label>
                                        <textarea rows={6} className="w-full bg-light border-2 border-transparent focus:border-accent/40 focus:bg-white rounded-2xl p-5 font-medium text-primary outline-none transition-all duration-300 resize-none" placeholder="Tell us about your project..."></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-primary hover:bg-black text-white font-bold text-xl py-6 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-1">
                                        Submit Enquiry
                                    </button>
                                </form>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
}
