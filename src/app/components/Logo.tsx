import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Logo Icon */}
      <div className="relative">
        {/* Outer Ring */}
        <motion.div
          className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 p-0.5 shadow-lg shadow-purple-500/50"
          animate={{
            boxShadow: [
              "0 10px 30px rgba(168, 85, 247, 0.3)",
              "0 10px 40px rgba(236, 72, 153, 0.4)",
              "0 10px 30px rgba(168, 85, 247, 0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-full h-full bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center">
            <span className="text-lg font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SR
            </span>
          </div>
        </motion.div>

        {/* Accent Dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full shadow-lg"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-none">
            SR
          </span>
          <span className="text-[10px] text-gray-500 dark:text-gray-400 tracking-wider leading-none">
            CREATIVE
          </span>
        </div>
      )}
    </motion.div>
  );
}
