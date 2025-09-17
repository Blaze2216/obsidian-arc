import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center cosmic-gradient">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
            Welcome to{' '}
            <span className="cosmic-accent bg-gradient-to-r from-cosmic-blue to-blue-400 bg-clip-text text-transparent">
              Obsidian Arc
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Exploring the cosmic depths of modern web development with React, Vite, and Tailwind CSS
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-cosmic-gray/50 backdrop-blur-sm border cosmic-border rounded-xl p-6 hover:bg-cosmic-gray/70 transition-all duration-300">
            <div className="w-12 h-12 bg-cosmic-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-cosmic-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 cosmic-accent">Lightning Fast</h3>
            <p className="text-gray-400">Powered by Vite for instant development and blazing fast builds</p>
          </div>

          <div className="bg-cosmic-gray/50 backdrop-blur-sm border cosmic-border rounded-xl p-6 hover:bg-cosmic-gray/70 transition-all duration-300">
            <div className="w-12 h-12 bg-cosmic-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-cosmic-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 cosmic-accent">Modern Design</h3>
            <p className="text-gray-400">Sleek cosmic theme with Tailwind CSS for beautiful, responsive UI</p>
          </div>

          <div className="bg-cosmic-gray/50 backdrop-blur-sm border cosmic-border rounded-xl p-6 hover:bg-cosmic-gray/70 transition-all duration-300">
            <div className="w-12 h-12 bg-cosmic-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-cosmic-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 cosmic-accent">Ready to Scale</h3>
            <p className="text-gray-400">Built with React Router for seamless navigation and component architecture</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <button className="bg-cosmic-blue hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cosmic-blue/25">
            Get Started
          </button>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Development Server Running</span>
        </div>
      </div>
    </div>
  )
}

export default Home