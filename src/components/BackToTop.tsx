import { motion, AnimatePresence } from "framer-motion";

interface BackToTopProps {
  visible: boolean;
}

export default function BackToTop({ visible }: BackToTopProps) {
  function scrollToTop() {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="back-to-top back-to-top--visible"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          whileHover={{ y: -3 }}
        >
          ↑
        </motion.a>
      )}
    </AnimatePresence>
  );
}
