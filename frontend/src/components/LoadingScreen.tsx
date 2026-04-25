import { motion } from 'framer-motion';

interface LoadingScreenProps {
  heroY?: number;
}

const LoadingScreen = ({ heroY = 0 }: LoadingScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center bg-[#f9f4e8]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Kymahns Text - Positioned to match BrandHero */}
      <motion.div
        className="fixed top-0 left-0 right-0 flex justify-center pointer-events-none"
        initial={{ y: heroY }}
        animate={{ y: heroY }}
      >
        <div className="flex flex-col items-center justify-center pt-8 pb-6 px-16">
          {/* Spacer to match BrandHero logo height (128px - 32px negative margin) */}
          <div className="h-24 w-32 mb-1" /> 
          
          <div className="bg-[#f9f4e8] px-6 py-0 pb-2 pt-1 rounded-[2.5rem]">
            <h1 className="text-8xl md:text-9xl font-extrabold text-[#1f3c5c] tracking-tight leading-none select-none">
              Kymahns
            </h1>
          </div>
        </div>
      </motion.div>

      {/* Progress Elements - Centered or bottom-aligned */}
      <div className="mt-auto mb-24 flex flex-col items-center">
        <div className="w-48 h-[2px] bg-[#1f3c5c]/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#1f3c5c]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
          />
        </div>
        <motion.p
          className="mt-4 text-[11px] uppercase tracking-[0.3em] text-[#1f3c5c]/80 font-mono font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Initializing Experience
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-12 text-[11px] text-[#1f3c5c]/60 tracking-widest uppercase font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        © 2026 / Portfolio
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
