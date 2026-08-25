import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gold border-opacity-20 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-gold mb-4 no-hyphens">HEERA CARTEL</h3>
            <p className="text-champagne text-sm leading-relaxed no-hyphens">Premium loose diamonds for every aspiration. Real diamonds, affordable prices, worldwide delivery.</p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/heeracartel.co" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-champagne transition">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/share/1FSYBwxPTV/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-champagne transition">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@heeracartel.co" className="text-gold hover:text-champagne transition">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-gold mb-4 no-hyphens">SHOP</h4>
            <ul className="space-y-3 text-sm text-champagne">
              <li><Link to="/shop" className="hover:text-gold transition no-hyphens">All Diamonds</Link></li>
              <li><Link to="/shop?type=lab-grown" className="hover:text-gold transition no-hyphens">Lab Grown</Link></li>
              <li><Link to="/shop?type=natural" className="hover:text-gold transition no-hyphens">Natural</Link></li>
              <li><Link to="/shop?type=coloured" className="hover:text-gold transition no-hyphens">Coloured</Link></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-gold mb-4 no-hyphens">LEARN</h4>
            <ul className="space-y-3 text-sm text-champagne">
              <li><Link to="/know-your-diamonds" className="hover:text-gold transition no-hyphens">Know Your Diamonds</Link></li>
              <li><Link to="/know-your-diamonds/four-cs" className="hover:text-gold transition no-hyphens">Four Cs</Link></li>
              <li><Link to="/know-your-diamonds/natural-vs-lab" className="hover:text-gold transition no-hyphens">Natural vs Lab</Link></li>
              <li><Link to="/verify-certification" className="hover:text-gold transition no-hyphens">Verify Certificate</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-gold mb-4 no-hyphens">SUPPORT</h4>
            <ul className="space-y-3 text-sm text-champagne">
              <li><Link to="/faq" className="hover:text-gold transition">FAQs</Link></li>
              <li><Link to="/shipping" className="hover:text-gold transition no-hyphens">Shipping Info</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition no-hyphens">Contact Us</Link></li>
              <li><Link to="/for-retailers" className="hover:text-gold transition no-hyphens">For Retailers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gold border-opacity-20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <p className="text-champagne text-sm text-center md:text-left no-hyphens">
              © 2024 Heera Cartel Co. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <Link to="/terms" className="text-champagne hover:text-gold transition no-hyphens">Terms</Link>
              <Link to="/privacy" className="text-champagne hover:text-gold transition no-hyphens">Privacy</Link>
            </div>
            <div className="text-champagne text-sm text-center md:text-right no-hyphens">
              Surat, India | Worldwide Shipping
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer