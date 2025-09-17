import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Showcase = () => {
  const [sortBy, setSortBy] = useState('Latest')
  const [arcOfMonthVoted, setArcOfMonthVoted] = useState(false)

  // Hardcoded video data for now
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Quantum Physics Simplified",
      creator: "@PhysicsGuru",
      claps: 234,
      shares: 45,
      thumbnail: "quantum-physics",
      topic: "Research"
    },
    {
      id: 2,
      title: "Startup Pitch Perfect",
      creator: "@EntrepreneurLife",
      claps: 189,
      shares: 67,
      thumbnail: "startup-pitch",
      topic: "Business"
    },
    {
      id: 3,
      title: "Climate Change Explained",
      creator: "@EcoWarrior",
      claps: 456,
      shares: 123,
      thumbnail: "climate-change",
      topic: "Research"
    },
    {
      id: 4,
      title: "Marketing Mastery 101",
      creator: "@MarketingPro",
      claps: 178,
      shares: 34,
      thumbnail: "marketing-mastery",
      topic: "Business"
    },
    {
      id: 5,
      title: "AI Revolution Timeline",
      creator: "@TechVisionary",
      claps: 367,
      shares: 89,
      thumbnail: "ai-revolution",
      topic: "Research"
    },
    {
      id: 6,
      title: "Product Demo Excellence",
      creator: "@ProductMaven",
      claps: 145,
      shares: 56,
      thumbnail: "product-demo",
      topic: "Business"
    },
    {
      id: 7,
      title: "Space Exploration 2025",
      creator: "@CosmicExplorer",
      claps: 289,
      shares: 78,
      thumbnail: "space-exploration",
      topic: "Research"
    },
    {
      id: 8,
      title: "Leadership Decoded",
      creator: "@LeadershipGuru",
      claps: 156,
      shares: 23,
      thumbnail: "leadership",
      topic: "Business"
    },
    {
      id: 9,
      title: "Future of Energy",
      creator: "@EnergyInnovator",
      claps: 312,
      shares: 91,
      thumbnail: "future-energy",
      topic: "Research"
    }
  ])

  const arcOfMonth = {
    id: 'arc-winner',
    title: "The Science of Happiness",
    creator: "@MindfulResearcher",
    claps: 1247,
    shares: 356,
    description: "A stunning visualization of how small daily habits compound into life-changing transformations.",
    thumbnail: "happiness-science"
  }

  const handleClap = (videoId) => {
    setVideos(prevVideos =>
      prevVideos.map(video =>
        video.id === videoId
          ? { ...video, claps: video.claps + 1 }
          : video
      )
    )
  }

  const getSortedVideos = () => {
    let sortedVideos = [...videos]
    
    switch (sortBy) {
      case 'Top Claps':
        return sortedVideos.sort((a, b) => b.claps - a.claps)
      case 'Topic':
        return sortedVideos.sort((a, b) => a.topic.localeCompare(b.topic))
      default: // Latest
        return sortedVideos
    }
  }

  const VideoCard = ({ video, isLarge = false }) => (
    <div className={`bg-cosmic-gray/50 backdrop-blur-sm border border-cosmic-blue/20 rounded-xl overflow-hidden hover:border-cosmic-blue/40 transition-all duration-300 group ${isLarge ? 'md:col-span-2' : ''}`}>
      {/* Thumbnail */}
      <div className={`relative overflow-hidden ${isLarge ? 'h-64' : 'h-48'}`}>
        <div className="w-full h-full bg-gradient-to-br from-cosmic-blue/20 via-cosmic-gray to-cosmic-blue/10 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-cosmic-blue/40 flex items-center justify-center group-hover:border-cosmic-blue transition-colors">
              <svg className="w-8 h-8 text-cosmic-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p className="text-cosmic-blue/60 text-sm">{video.thumbnail}</p>
          </div>
        </div>
        {isLarge && (
          <div className="absolute top-4 right-4 bg-cosmic-blue text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>Arc Winner</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`font-bold text-white mb-2 group-hover:text-cosmic-blue transition-colors ${isLarge ? 'text-xl' : 'text-lg'}`}>
          {video.title}
        </h3>
        
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-cosmic-blue rounded-full flex items-center justify-center mr-3">
            <span className="text-black text-sm font-bold">
              {video.creator.charAt(1).toUpperCase()}
            </span>
          </div>
          <span className="text-gray-300 text-sm">{video.creator}</span>
        </div>

        {isLarge && video.description && (
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            {video.description}
          </p>
        )}

        {/* Stats and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>{video.claps}</span>
            </span>
            <span className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92S19.61 16.08 18 16.08z"/>
              </svg>
              <span>{video.shares}</span>
            </span>
          </div>

          <button
            onClick={() => handleClap(video.id)}
            className="bg-cosmic-blue/20 hover:bg-cosmic-blue hover:text-black text-cosmic-blue px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            aria-label={`Clap for ${video.title}`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.5 2L13.5 6L18 6.5L14.5 10L15.5 15L11.5 12.5L7.5 15L8.5 10L5 6.5L9.5 6L11.5 2Z"/>
            </svg>
            <span className="font-semibold">Clap</span>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-black via-cosmic-gray to-black py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cosmic-blue rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-white via-cosmic-blue to-white bg-clip-text text-transparent">
              The Creator's Gallery
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover videos forged by our community. Clap for your favorites and inspire the next Arc.
          </p>

          <Link
            to="/forge"
            className="inline-block bg-cosmic-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cosmic-blue/50 focus:outline-none focus:ring-4 focus:ring-cosmic-blue/50"
            aria-label="Submit your video to the gallery"
          >
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Submit Your Video</span>
            </span>
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Options */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 sm:mb-0">
              Community Showcase
            </h2>
            
            <div className="flex items-center space-x-4">
              <label htmlFor="sort-select" className="text-gray-300 text-sm">
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-cosmic-gray border border-cosmic-blue/20 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cosmic-blue/50 focus:border-cosmic-blue"
                aria-label="Sort videos by criteria"
              >
                <option value="Latest">Latest</option>
                <option value="Top Claps">Top Claps</option>
                <option value="Topic">Topic</option>
              </select>
            </div>
          </div>

          {/* Video Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            role="grid"
            aria-label="Video gallery grid"
          >
            {getSortedVideos().map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Contest Spotlight */}
      <section className="py-16 bg-cosmic-gray/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-orbitron">
              Arc of the Month
            </h2>
            <p className="text-gray-300 text-lg">
              Vote for this month's best—winner gets extra Forge Credits!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VideoCard video={arcOfMonth} isLarge={true} />
            
            <div className="text-center mt-8">
              <button
                onClick={() => setArcOfMonthVoted(!arcOfMonthVoted)}
                className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  arcOfMonthVoted
                    ? 'bg-green-600 text-white cursor-default'
                    : 'bg-cosmic-blue hover:bg-blue-600 text-white hover:shadow-2xl hover:shadow-cosmic-blue/50'
                }`}
                aria-label={arcOfMonthVoted ? 'You have voted for this video' : 'Vote for Arc of the Month'}
              >
                {arcOfMonthVoted ? (
                  <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Voted!</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>Vote Now</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Showcase