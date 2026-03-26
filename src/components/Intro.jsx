import { motion, AnimatePresence } from "framer-motion";
import "./intro.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Intro({ step, setStep }) {
  return (
    <AnimatePresence>
      {step < 2 && (
        <motion.div
          className="intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: step === 1 ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0 }}
          style={{}}
        >
          <DotLottieReact
            src="/Loading_car (1).json"
            autoplay
            loop
            style={{
              width: "200px",
            }}
            className="pattle"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
