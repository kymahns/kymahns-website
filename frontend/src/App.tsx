// @ts-expect-error - ReactBits components are raw JSX and lack TypeScript definitions
import Antigravity from './components/Antigravity'
// @ts-expect-error - ReactBits components are raw JSX and lack TypeScript definitions
import ClickSpark from './components/ClickSpark'

function App() {
  return (
    <div className="relative w-full min-h-dvh bg-[#f9f4e8]">
      <div className="fixed inset-0 z-0 w-full h-full">
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
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[100dvh] pointer-events-none">
        <div className="relative pointer-events-none group">
          <ClickSpark
            sparkColor="#1f3c5c"
            sparkSize={10}
            sparkRadius={60}
            sparkCount={8}
            duration={600}
            easing="ease-out"
          >
            <div className="p-32 flex items-center justify-center">
              <div className="bg-[#f9f4e8] px-10 py-4 rounded-full pointer-events-auto cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300">
                <h1 className="text-7xl font-extrabold text-[#1f3c5c] select-none pointer-events-none tracking-tight">
                  Kymahns
                </h1>
              </div>

            </div>
          </ClickSpark>
        </div>

      </div>
    </div>
  )
}

export default App
