import { motion } from 'framer-motion';

interface ContentAreaProps {
  activeTab: string;
}

export default function ContentArea({ activeTab }: ContentAreaProps) {
  if (activeTab === 'home') return null;

  return (
    <motion.div
      layout
      key={activeTab}
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      className="w-full max-w-5xl mx-auto p-8 md:p-16 bg-[#f9f4e8]/90 backdrop-blur-3xl border border-white/50 rounded-[3rem] shadow-2xl pointer-events-auto flex-1 overflow-y-auto custom-scrollbar"
    >
      <motion.h2 
        layout="position"
        className="text-5xl font-extrabold text-[#1f3c5c] capitalize tracking-tight mb-6"
      >
        {activeTab}
      </motion.h2>
      
      <motion.div layout="position" className="h-[4px] w-24 bg-[#1f3c5c] rounded-full mb-12" />
      <div className="space-y-6 flex-1">
        <div className="w-full h-32 bg-black/5 rounded-2xl animate-pulse" />
        <div className="flex gap-6 w-full">
          <div className="w-1/3 h-48 bg-black/5 rounded-2xl animate-pulse delay-75" />
          <div className="w-2/3 h-48 bg-black/5 rounded-2xl animate-pulse delay-150" />
        </div>
        <div className="w-full h-24 bg-black/5 rounded-2xl animate-pulse delay-200" />
      </div>
    </motion.div>
  );
}
