import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Roadmap from './components/Roadmap'
import Architecture from './components/Architecture'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  return (
    <div className="noise relative min-h-screen">
      {/* Live animated particle background — fixed, behind everything */}
      <ParticleBackground />

      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <HowItWorks />
        <About />
        <Roadmap />
        <Architecture />
      </main>
      <Footer />
    </div>
  )
}
