import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-7xl tracking-tighter leading-tight max-w-5xl font-semibold"
      >
        In a digital age, data is the{" "}
        <span className="serif-italic font-semibold">ultimate</span>{" "}
        <span className="font-bold uppercase">POWER</span>.
      </motion.h1>
    </section>
  );
};

export default Hero;
