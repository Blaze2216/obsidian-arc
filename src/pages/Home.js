import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const testimonials = [
    {
      quote: "Turned my thesis into a TED Talk vibe in 5 minutes!",
      author: "Priya, Researcher"
    },
    {
      quote: "Finally, a tool that doesn't require a film degree to use.",
      author: "Marcus, Entrepreneur"
    },
    {
      quote: "My product demos went from boring to brilliant overnight.",
      author: "Sarah, Product Manager"
    }
  ]

  const stats = [
    "10K+ Videos Forged",
    "5K+ Shared on X",
    "500+ Happy Creators",
    "50+ Countries Reached",
    "24/7 Support Available"
  ]

  // Auto-scroll testimonials
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isPaused, testimonials.length])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-cosmic-gray to-black">
        {/* Starry Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmic-blue/5 to-transparent animate-pulse"></div>
          {/* Simulated stars */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        {/* Background Video Placeholder */}
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full bg-gradient-to-br from-cosmic-blue/10 via-transparent to-cosmic-gray/10 flex items-center justify-center">
            <div className="w-96 h-64 bg-cosmic-gray/30 rounded-lg border border-cosmic-blue/20 flex items-center justify-center">
              <div className="text-cosmic-blue/60 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-cosmic-blue/40 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-sm">Demo Video Placeholder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block font-['Orbitron',_monospace] bg-gradient-to-r from-white via-cosmic-blue to-white bg-clip-text text-transparent">
              Turn Your Ideas into
            </span>
            <span className="block font-['Orbitron',_monospace] text-cosmic-blue drop-shadow-lg">
              Videos That Shine
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Upload. Customize. Share. Obsidian Arc makes complex simple—fast.
          </p>

          {/* CTA Button */}
          <Link
            to="/forge"
            className="inline-block bg-cosmic-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cosmic-blue/50 focus:outline-none focus:ring-4 focus:ring-cosmic-blue/50"
            aria-label="Main navigation button - Start creating your first video for free"
          >
            <span className="flex items-center space-x-2">
              <span>Forge Your First Video Free</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-cosmic-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-cosmic-gray/30">
        {/* Stats Ticker */}
        <div className="mb-16 overflow-hidden">
          <div className="whitespace-nowrap animate-scroll">
            <div className="inline-flex space-x-8 text-cosmic-blue font-semibold text-lg">
              {[...stats, ...stats].map((stat, index) => (
                <span key={index} className="mx-8">
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-['Orbitron',_monospace]">
            What Creators Say
          </h2>
          
          <div 
            className="relative bg-cosmic-gray/50 rounded-xl p-8 backdrop-blur-sm border border-cosmic-blue/20"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="text-center">
              <blockquote className="text-xl sm:text-2xl text-gray-200 mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <cite className="text-cosmic-blue font-semibold">
                — {testimonials[currentTestimonial].author}
              </cite>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-cosmic-blue' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Quote Icon */}
            <div className="absolute top-4 left-6 text-cosmic-blue/20">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Home