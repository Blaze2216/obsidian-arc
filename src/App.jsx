import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Showcase from './pages/Showcase'
import './App.css'

// Placeholder components for routes
const Forge = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-cosmic-blue mb-4">The Forge</h1>
      <p className="text-gray-300">Video creation workspace coming soon...</p>
    </div>
  </div>
)

const About = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-cosmic-blue mb-4">About Obsidian Arc</h1>
      <p className="text-gray-300">Learn more about our cosmic video platform...</p>
    </div>
  </div>
)

const Pricing = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-cosmic-blue mb-4">Pricing</h1>
      <p className="text-gray-300">Choose your cosmic journey...</p>
    </div>
  </div>
)

const HowItWorks = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-cosmic-blue mb-4">How It Works</h1>
      <p className="text-gray-300">Learn the cosmic video creation process...</p>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cosmic-black text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forge" element={<Forge />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App