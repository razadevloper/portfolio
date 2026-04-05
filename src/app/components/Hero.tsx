import { motion } from "motion/react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import "./Hero.css";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const texts = [
    "Creative Web Designer",
    "Frontend Developer",
    "UI/UX Enthusiast"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 dark:from-black dark:via-purple-950 dark:to-violet-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          style={{ top: "20%", left: "10%" }}
        />
        <motion.div
          className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-pink-500/30 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          style={{ bottom: "20%", right: "10%" }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-28 responsive-top-gap">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex mx-auto mb-6 items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mobile-grpoup"
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-white text-xs sm:text-sm">
            Available for Freelance Work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight break-words mobile-top"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  {displayText}
  <span className="border-r-2 border-white ml-1 animate-pulse"></span>
  <br />
  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
    & Frontend Developer
  </span>
</motion.h1>

        {/* Name */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hi, I'm <span className="font-semibold text-white">Sohail Raja</span>
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Crafting stunning digital experiences that blend aesthetics with functionality.
          Specialized in modern web technologies and user-centered design.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pb-10 responsive-pb"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="w-full sm:w-auto justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-purple-500/50 btn-cursor"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#portfolio")}
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="w-full sm:w-auto justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold flex items-center gap-2 border border-white/20 hover:bg-white/20 btn-cursor btn-margin"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#contact")}
          >
            <Download className="w-5 h-5" />
            Hire Me
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="hidden cursor-pointer mb-4.5 sm:block absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity } }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
