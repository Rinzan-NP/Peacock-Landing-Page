"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, filter: "blur(8px)", y: 12, scale: 0.995 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
                exit={{ opacity: 0, filter: "blur(8px)", y: -12, scale: 0.995 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1], // Custom sleek easing curve
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.7 }
                }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
