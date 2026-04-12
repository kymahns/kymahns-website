// @ts-expect-error - ReactBits components are raw JSX and lack TypeScript definitions
import ClickSpark from './ClickSpark';

export default function BrandHero() {
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
        <div className="p-32 flex flex-col items-center justify-center">
          <div className="bg-[#f9f4e8] pointer-events-auto p-1 rounded-full cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300 relative z-10 -mb-8">
            <img 
              src="/logos/logo.svg" 
              alt="Kymahns Logo" 
              className="w-24 h-24 object-contain select-none rounded-full"
              draggable={false}
            />
          </div>

          <div 
            className="bg-[#f9f4e8] px-6 py-0 pb-2 pt-1 rounded-[2.5rem] pointer-events-auto cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 relative z-0"
            draggable={false}
          >
            <h1 
              className="text-7xl md:text-8xl font-extrabold text-[#1f3c5c] select-none pointer-events-none tracking-tight leading-none"
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
