import { motion } from 'framer-motion';
import { Home, FolderGit2, User, Mail } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'about', label: 'About', icon: User },
  { id: 'contact', label: 'Contact', icon: Mail },
];

interface NavigationProps {
  activeTab: string;
  onTabSelect: (id: string) => void;
}

export default function Navigation({ activeTab, onTabSelect }: NavigationProps) {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <motion.nav 
      layout
      className="flex items-center gap-2 p-2 bg-[#f9f4e8]/80 backdrop-blur-xl rounded-full shadow-lg border border-black/5 pointer-events-auto shrink-0"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        const isHovered = hoveredTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabSelect(tab.id)}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            className={`relative flex items-center justify-center rounded-full transition-colors duration-300 ${
              isActive 
                ? 'bg-[#1f3c5c] text-[#f9f4e8]' 
                : 'bg-transparent text-[#1f3c5c] hover:bg-black/5'
            }`}
          >
            <div className="relative z-10 flex items-center px-4 py-3">
              <Icon size={20} className="shrink-0" />
              
              {/* Magic Expanding Label using Framer Motion */}
              <motion.div
                initial={false}
                animate={{
                  width: isActive || isHovered ? 'auto' : 0,
                  opacity: isActive || isHovered ? 1 : 0,
                  marginLeft: isActive || isHovered ? 12 : 0,
                }}
                className="overflow-hidden whitespace-nowrap font-medium tracking-wide"
              >
                {tab.label}
              </motion.div>
            </div>
          </button>
        );
      })}
    </motion.nav>
  );
}
