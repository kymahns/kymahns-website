import { motion, AnimatePresence } from 'framer-motion';
// @ts-expect-error - ReactBits components are raw JSX and lack TypeScript definitions
import ClickSpark from './ClickSpark';

interface BrandHeroProps {
  isHome?: boolean;
}

export default function BrandHero({ isHome = true }: BrandHeroProps) {
  return (
    <div 
      className="relative pointer-events-none group rounded-[3rem] shrink-0"
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      style={{ WebkitUserDrag: 'none' } as React.CSSProperties}
    >
      <ClickSpark
        sparkColor="#1f3c5c"
        sparkSize={10}
        sparkRadius={60}
        sparkCount={8}
        duration={600}
        easing="ease-out"
      >
        <div className={`flex flex-col items-center justify-center ${
          isHome ? 'pt-8 pb-6 px-16' : 'pt-1 pb-0 px-8'
        }`}>
          <AnimatePresence mode="popLayout">
            {isHome && (
              <motion.div 
                key="logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.3 } // Removed delay
                }}
                exit={{ 
                  opacity: 0, 
                  transition: { duration: 0 } // Instant vanish
                }}
                className="bg-[#f9f4e8] pointer-events-auto p-1 rounded-full cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300 relative z-10 -mb-8"
              >
                <img 
                  src="/logos/logo.svg" 
                  alt="Kymahns Logo" 
                  className="w-32 h-32 object-contain select-none rounded-full"
                  draggable={false}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div 
            className="bg-[#f9f4e8] px-6 py-0 pb-2 pt-1 rounded-[2.5rem] pointer-events-auto cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 relative z-0"
            draggable={false}
          >
            <h1 
              className="text-8xl md:text-9xl font-extrabold text-[#1f3c5c] select-none pointer-events-none tracking-tight leading-none"
              draggable={false}
            >
              Kymahns
            </h1>
          </div>
        </div>
      </ClickSpark>
    </div>
  );
}
