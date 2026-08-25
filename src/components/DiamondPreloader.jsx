import { useEffect, useState } from 'react'

const DiamondPreloader = () => {
  const [phase, setPhase] = useState('spark') // spark, diamond, text

  useEffect(() => {
    const sparkTimer = setTimeout(() => setPhase('diamond'), 1000)
    const diamondTimer = setTimeout(() => setPhase('text'), 2500)

    return () => {
      clearTimeout(sparkTimer)
      clearTimeout(diamondTimer)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-charcoal flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Diamond SVG */}
      <div className="relative w-64 h-64">
        <svg
          viewBox="0 0 200 200"
          className={`w-full h-full ${
            phase !== 'spark' ? 'animate-diamond-glow' : 'animate-diamond-spark'
          }`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Diamond Shape */}
          <defs>
            <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#F7E7CE', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#E8C547', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Top Facet */}
          <polygon points="100,20 140,60 100,80 60,60" fill="url(#diamondGradient)" filter="url(#glow)" />

          {/* Upper Middle Left */}
          <polygon points="60,60 40,100 80,120 100,80" fill="#F7E7CE" filter="url(#glow)" />

          {/* Upper Middle Right */}
          <polygon points="140,60 160,100 120,120 100,80" fill="#D4AF37" filter="url(#glow)" />

          {/* Lower Middle Left */}
          <polygon points="40,100 60,140 100,150 80,120" fill="#E8C547" filter="url(#glow)" />

          {/* Lower Middle Right */}
          <polygon points="160,100 140,140 100,150 120,120" fill="#F7E7CE" filter="url(#glow)" />

          {/* Bottom Left */}
          <polygon points="60,140 80,170 100,180 100,150" fill="#D4AF37" filter="url(#glow)" />

          {/* Bottom Right */}
          <polygon points="140,140 120,170 100,180 100,150" fill="#E8C547" filter="url(#glow)" />

          {/* Spark effect - small stars */}
          <circle cx="130" cy="50" r="3" fill="#F7E7CE" opacity="0.8" />
          <circle cx="70" cy="45" r="2" fill="#D4AF37" opacity="0.6" />
          <circle cx="160" cy="85" r="2.5" fill="#E8C547" opacity="0.7" />
        </svg>
      </div>

      {/* Brand Name - appears after diamond animates */}
      {phase === 'text' && (
        <div className="absolute bottom-24 text-center animate-text-reveal">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-champagne tracking-widest no-hyphens">
            HEERA CARTEL CO
          </h1>
          <p className="text-gold mt-4 text-lg tracking-wider uppercase no-hyphens">Premium Loose Diamonds</p>
        </div>
      )}

      {/* Loading dots */}
      {phase !== 'text' && (
        <div className="absolute bottom-12 flex gap-2">
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      )}
    </div>
  )
}

export default DiamondPreloader