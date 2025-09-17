import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-cosmic-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-xl mb-4 font-orbitron">
              Obsidian Arc
            </h3>
            <p className="text-sm">
              Transform your ideas into stunning videos with our cosmic-powered creation platform.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-3">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-cosmic-blue transition-colors">About</Link></li>
                <li><Link to="/how-it-works" className="hover:text-cosmic-blue transition-colors">How It Works</Link></li>
                <li><Link to="/pricing" className="hover:text-cosmic-blue transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><Link to="/showcase" className="hover:text-cosmic-blue transition-colors">Showcase</Link></li>
                <li><a href="#" className="hover:text-cosmic-blue transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-cosmic-blue transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cosmic-gray mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2025 Obsidian Arc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer