import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="bg-charcoal">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-darkBlue rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-gold text-sm uppercase tracking-widest mb-6 no-hyphens">
            Endless Possibilities
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-champagne mb-8 leading-tight no-hyphens"
          >
            Premium Loose Diamonds
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-champagne text-xl md:text-2xl mb-12 leading-relaxed no-hyphens"
          >
            Real diamonds at truly accessible prices. Lab grown or natural, certified or loose. Your vision, our passion.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              to="/shop"
              className="bg-gold text-charcoal px-10 py-4 rounded-lg font-lato font-700 uppercase tracking-widest hover:bg-opacity-90 transition flex items-center justify-center gap-2 no-hyphens"
            >
              Browse Diamonds <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gold text-gold px-10 py-4 rounded-lg font-lato font-700 uppercase tracking-widest hover:bg-gold hover:text-charcoal transition no-hyphens"
            >
              Get Custom Quote
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-black border-y border-gold border-opacity-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-gold mb-2">100%</p>
              <p className="text-champagne text-sm uppercase tracking-widest no-hyphens">Certified Authentic</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold mb-2">Worldwide</p>
              <p className="text-champagne text-sm uppercase tracking-widest no-hyphens">Fast Shipping</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold mb-2">15 Years</p>
              <p className="text-champagne text-sm uppercase tracking-widest no-hyphens">Industry Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold mb-2">GIA IGI CGI</p>
              <p className="text-champagne text-sm uppercase tracking-widest no-hyphens">All Certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Heera Cartel */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl font-bold text-champagne mb-6 no-hyphens">Why Heera Cartel Co</h2>
          <p className="text-champagne text-lg max-w-2xl mx-auto no-hyphens">
            For too long, the diamond industry held prices artificially high. Lab grown diamonds changed that. We changed what comes next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Real Diamonds, Real Prices',
              desc: 'Lab grown and natural diamonds at wholesale rates. No middleman markup. No corporate greed.',
            },
            {
              title: 'Transparent Guidance',
              desc: 'We counsel jewellers and retailers. You get expert advice on every stone. Complete 4Cs transparency.',
            },
            {
              title: 'Wholesale Accessibility',
              desc: 'Bulk orders or single stones. The same wholesale advantage for everyone. Scalable pricing.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="border border-gold border-opacity-30 rounded-lg p-8 hover:border-opacity-100 transition no-hyphens"
            >
              <div className="flex gap-3 mb-4">
                <Star className="text-gold flex-shrink-0" size={24} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gold mb-4">{item.title}</h3>
              <p className="text-champagne leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-black border-y border-gold border-opacity-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-playfair text-5xl font-bold text-champagne mb-16 text-center no-hyphens"
          >
            Shop Collections
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Lab Grown Diamonds',
                desc: 'Real, certified diamonds created in laboratories. Identical to natural stones.',
                link: '/shop?type=lab-grown',
                color: 'from-blue-500 to-blue-700',
              },
              {
                title: 'Natural Diamonds',
                desc: 'Mined from the earth. Timeless beauty with natural rarity and certification.',
                link: '/shop?type=natural',
                color: 'from-amber-500 to-amber-700',
              },
              {
                title: 'Coloured Diamonds',
                desc: 'Rare, vibrant hues. Yellow, pink, blue, and beyond. Collector worthy.',
                link: '/shop?type=coloured',
                color: 'from-pink-500 to-pink-700',
              },
            ].map((collection, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  to={collection.link}
                  className={`bg-gradient-to-br ${collection.color} p-12 rounded-lg h-64 flex flex-col justify-between hover:shadow-2xl transition no-hyphens group`}
                >
                  <div>
                    <h3 className="font-playfair text-3xl font-bold text-white mb-2">{collection.title}</h3>
                    <p className="text-white text-opacity-90">{collection.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold group-hover:gap-3 transition">
                    Explore <ArrowRight size={20} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-5xl font-bold text-champagne mb-8 no-hyphens">
            Ready to Find Your Diamond
          </h2>
          <p className="text-champagne text-xl mb-12 max-w-2xl mx-auto no-hyphens">
            Whether you are a jeweller, retailer, or individual buyer, we have the perfect stone for you.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              to="/shop"
              className="bg-gold text-charcoal px-10 py-4 rounded-lg font-lato font-700 uppercase tracking-widest hover:bg-opacity-90 transition no-hyphens"
            >
              Start Shopping
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gold text-gold px-10 py-4 rounded-lg font-lato font-700 uppercase tracking-widest hover:bg-gold hover:text-charcoal transition no-hyphens"
            >
              Contact Our Team
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home