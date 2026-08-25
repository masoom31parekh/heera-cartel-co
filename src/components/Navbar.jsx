import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const shopSubmenu = [
    { label: 'Lab Grown Diamonds', href: '/shop?type=lab-grown' },
    { label: 'CVD', href: '/shop?type=cvd' },
    { label: 'HPHT', href: '/shop?type=hpht' },
    { label: 'Natural Diamonds', href: '/shop?type=natural' },
    { label: 'Coloured Diamonds', href: '/shop?type=coloured' },
    { label: 'Shop by Carat', href: '/shop?filter=carat' },
    { label: 'Shop by Cut', href: '/shop?filter=cut' },
    { label: 'Shop by Certification', href: '/shop?filter=certification' },
    { label: 'Shop by Shape', href: '/shop?filter=shape' },
    { label: 'Shop by Budget', href: '/shop?filter=budget' },
  ]

  return (
    <nav className="sticky top-0 z-40 bg-charcoal border-b border-gold border-opacity-20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-playfair text-2xl md:text-3xl font-bold text-champagne hover:text-gold transition no-hyphens">
            HEERA CARTEL
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-lato text-sm uppercase tracking-wider transition ${
                isActive('/') ? 'text-gold' : 'text-champagne hover:text-gold'
              }`}
            >
              Home
            </Link>

            {/* Shop Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="font-lato text-sm uppercase tracking-wider text-champagne hover:text-gold transition flex items-center gap-2 no-hyphens">
                Shop Diamonds
                <ChevronDown size={16} />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-0 w-56 bg-charcoal border border-gold border-opacity-30 rounded-lg shadow-lg py-2">
                  {shopSubmenu.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2 text-champagne hover:text-gold hover:bg-opacity-10 hover:bg-gold transition text-sm no-hyphens"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/know-your-diamonds"
              className={`font-lato text-sm uppercase tracking-wider transition ${
                isActive('/know-your-diamonds') ? 'text-gold' : 'text-champagne hover:text-gold'
              } no-hyphens`}
            >
              Know Your Diamonds
            </Link>

            <Link
              to="/for-retailers"
              className={`font-lato text-sm uppercase tracking-wider transition ${
                isActive('/for-retailers') ? 'text-gold' : 'text-champagne hover:text-gold'
              } no-hyphens`}
            >
              For Retailers
            </Link>

            <Link
              to="/our-story"
              className={`font-lato text-sm uppercase tracking-wider transition ${
                isActive('/our-story') ? 'text-gold' : 'text-champagne hover:text-gold'
              } no-hyphens`}
            >
              Our Story
            </Link>

            <Link
              to="/blog"
              className={`font-lato text-sm uppercase tracking-wider transition ${
                isActive('/blog') ? 'text-gold' : 'text-champagne hover:text-gold'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="bg-gold text-charcoal px-6 py-2 rounded-lg font-lato font-700 uppercase tracking-wider hover:bg-opacity-90 transition no-hyphens"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gold border-opacity-20 pt-6">
            <div className="space-y-4">
              <Link
                to="/"
                className="block font-lato text-sm uppercase tracking-wider text-champagne hover:text-gold transition no-hyphens"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <p className="font-lato text-sm uppercase tracking-wider text-champagne no-hyphens">Shop Diamonds</p>
                {shopSubmenu.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block pl-4 font-lato text-sm uppercase tracking-wider text-gray-400 hover:text-gold transition no-hyphens"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/know-your-diamonds"
                className="block font-lato text-sm uppercase tracking-wider text-champagne hover:text-gold transition no-hyphens"
                onClick={() => setIsOpen(false)}
              >
                Know Your Diamonds
              </Link>
              <Link
                to="/for-retailers"
                className="block font-lato text-sm uppercase tracking-wider text-champagne hover:text-gold transition no-hyphens"
                onClick={() => setIsOpen(false)}
              >
                For Retailers
              </Link>
              <Link
                to="/our-story"
                className="block font-lato text-sm uppercase tracking-wider text-champagne hover:text-gold transition no-hyphens"
                onClick={() => setIsOpen(false)}
              >
                Our Story
              </Link>
              <Link
                to="/blog"
                className="block font-lato text-sm uppercase tracking-wider text-champagne hover:text-gold transition no-hyphens"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block bg-gold text-charcoal px-6 py-2 rounded-lg font-lato font-700 uppercase tracking-wider hover:bg-opacity-90 transition no-hyphens text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar