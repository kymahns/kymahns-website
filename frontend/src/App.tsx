import Antigravity from './components/Antigravity'

function App() {
  return (
    <div className="w-full h-full bg-[#f9f4e8] overflow-hidden m-0 p-0">
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
  )
}

export default App
