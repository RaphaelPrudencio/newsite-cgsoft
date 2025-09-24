import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -40, opacity: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    >
    {children}
    </motion.div>
  );
}
