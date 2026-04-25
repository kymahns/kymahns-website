// @ts-expect-error - ReactBits components are raw JSX and lack TypeScript definitions
import Antigravity from './components/Antigravity'
import BrandHero from './components/BrandHero'
import Navigation from './components/Navigation'
import LoadingScreen from './components/LoadingScreen'

import { useState, useLayoutEffect, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Refs to measure real rendered heights before the first paint
  const brandHeroRef = useRef<HTMLDivElement>(null);
  const navRef       = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ vh: 800, heroH: 180, navH: 60 });

  useEffect(() => {
    // Artificial delay to show off the premium loader and ensure 3D is ready
    document.body.classList.add('loading');
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('loading');
    }, 2500);
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading');
    };
  }, []);

  useLayoutEffect(() => {
    const measure = () => setDims({
      vh:    window.innerHeight,
      heroH: brandHeroRef.current?.offsetHeight ?? 180,
      navH:  navRef.current?.offsetHeight       ?? 60,
    });
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [activeTab]);

  const isHome = activeTab === 'home';
  const spring = { type: 'spring' as const, bounce: 0, duration: 0.6 };
  const { vh, heroH, navH } = dims;

  // ── Home state ──────────────────────────────────────────────
  // Slightly above vertical centre (~44% of vh) — proportional on all screens
  const heroHomeY = (vh - heroH) / 2 - vh * 0.06;
  const navHomeY  = heroHomeY + heroH - 16; // pulled up to overlap padding

  // ── Tab state ───────────────────────────────────────────────
  const heroTabY = 4;                   // hero tucked closer to top
  const navTabY  = vh - navH - 16;      // nav 16 px from bottom

  // Content area sits between the two fixed elements in tab state
  const contentTop    = heroTabY + heroH + 4;   // 4 px below hero bottom
  const contentBottom = navH + 24;              // 8 px above nav top

  return (
    <div className="relative w-full h-[100dvh] bg-[#f9f4e8] overflow-hidden text-[#1f3c5c] font-sans">
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" heroY={heroHomeY} />}
      </AnimatePresence>

      {/* ── Background canvas ────────────────────────────────── */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <Antigravity
          count={150}
          magnetRadius={5}
          ringRadius={5}
          waveSpeed={0.2}
          waveAmplitude={0.5}
          particleSize={1}
          lerpSpeed={0.1}
          color="#1f3c5c"
          autoAnimate={true}
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* ── Brand Hero ───────────────────────────────────────── */}
      {/* Fixed + y-transform: springs between centred (home) and near-top (tab).
          Never participates in flex flow, so nothing can displace it. */}
      <motion.div
        ref={brandHeroRef}
        className="fixed top-0 left-0 right-0 z-10 flex justify-center pointer-events-none"
        animate={{ 
          y: isHome ? heroHomeY : heroTabY,
          opacity: 1 
        }}
        transition={spring}
      >
        <BrandHero isHome={isHome} />
      </motion.div>

      {/* ── Content Area ─────────────────────────────────────── */}
      {/* Also fixed, geometry derived from the measured hero/nav heights.
          Opacity/blur fade avoids any positional animation that could clash. */}
      <AnimatePresence>
        {!isHome && !isLoading && (
          <motion.div
            key={activeTab}
            className="fixed z-10 w-[calc(100vw-2rem)] max-w-5xl overflow-y-auto custom-scrollbar pointer-events-auto bg-[#f9f4e8]/90 backdrop-blur-3xl border border-white/50 rounded-[3rem] shadow-2xl"
            style={{ top: contentTop, bottom: contentBottom, left: '50%', x: '-50%' }}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{    opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: 'easeOut' }} // Removed delay
          >
            <div className="p-8 md:p-16">
              <h2 className="text-5xl font-extrabold text-[#1f3c5c] capitalize tracking-tight mb-6">
                {activeTab}
              </h2>
              <div className="h-[4px] w-24 bg-[#1f3c5c] rounded-full mb-12" />
              <div className="space-y-6">
                <div className="w-full h-32 bg-black/5 rounded-2xl animate-pulse" />
                <div className="flex gap-6 w-full">
                  <div className="w-1/3 h-48 bg-black/5 rounded-2xl animate-pulse delay-75" />
                  <div className="w-2/3 h-48 bg-black/5 rounded-2xl animate-pulse delay-150" />
                </div>
                <div className="w-full h-24 bg-black/5 rounded-2xl animate-pulse delay-200" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Navigation ───────────────────────────────────────── */}
      {/* Fixed + y-transform: springs between just-below-hero (home) and near-bottom (tab).
          Because it's fixed, content area mounting/unmounting cannot affect its position. */}
      <motion.div
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-20 flex justify-center pointer-events-none"
        animate={{ 
          y: isHome ? navHomeY : navTabY,
          opacity: 1 
        }}
        transition={spring}
      >
        <Navigation activeTab={activeTab} onTabSelect={setActiveTab} />
      </motion.div>

    </div>
  )
}


export default App
