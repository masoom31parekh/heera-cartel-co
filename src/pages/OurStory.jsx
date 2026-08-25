import { motion } from 'framer-motion'

const OurStory = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Our Story</h1>
            <p className="text-champagne text-lg no-hyphens">
              How Heera Cartel Co was born from a mission to democratize diamonds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div>
            <h2 className="font-playfair text-4xl font-bold text-gold mb-6 no-hyphens">The Beginning</h2>
            <p className="text-champagne text-lg leading-relaxed mb-6 no-hyphens">
              Heera Cartel Co was founded by Masoom Parekh in Surat, India. With over 15 years of experience in the diamond industry, Masoom witnessed firsthand how the industry had artificially inflated prices and contained value.
            </p>
            <p className="text-champagne text-lg leading-relaxed no-hyphens">
              For decades, diamonds were controlled by a small group of wholesalers who profited immensely. Prices remained high, and true value was not accessible to everyone who aspired to own a diamond.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-4xl font-bold text-gold mb-6 no-hyphens">The Turning Point</h2>
            <p className="text-champagne text-lg leading-relaxed mb-6 no-hyphens">
              With the invention and discovery of lab grown diamonds, everything changed. For the first time, real diamonds became affordable. They are 100% authentic, certified, and chemically identical to natural diamonds.
            </p>
            <p className="text-champagne text-lg leading-relaxed no-hyphens">
              Yet even with lab grown diamonds, the industry still held onto old pricing models and margins. Middlemen still took their cut. The opportunity for true democratization was being missed.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-4xl font-bold text-gold mb-6 no-hyphens">Our Mission</h2>
            <p className="text-champagne text-lg leading-relaxed mb-6 no-hyphens">
              Heera Cartel Co was born with a clear mission: to make diamonds truly accessible to everyone who aspires to wear one.
            </p>
            <p className="text-champagne text-lg leading-relaxed mb-6 no-hyphens">
              We eliminated unnecessary middlemen. We offer wholesale pricing directly. Whether you are a small jeweller, a retailer, or an individual buyer, you get the same fair price. No corporate greed. No artificial markups.
            </p>
            <p className="text-champagne text-lg leading-relaxed no-hyphens">
              Our mission is simple: Real diamonds at real wholesale prices. For everyone.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-4xl font-bold text-gold mb-6 no-hyphens">Why Heera Cartel</h2>
            <p className="text-champagne text-lg leading-relaxed mb-6 no-hyphens">
              "Heera" means diamond in Hindi. "Cartel" represents a movement and a collective. Heera Cartel Co is not just a business. It is a movement to disrupt an industry that has held onto artificial scarcity and inflated values for far too long.
            </p>
            <p className="text-champagne text-lg leading-relaxed no-hyphens">
              We are here to prove that diamonds can be accessible, affordable, and authentic. All at once.
            </p>
          </div>

          <div className="border border-gold border-opacity-30 rounded-lg p-8 bg-gold bg-opacity-5">
            <h3 className="font-playfair text-2xl font-bold text-gold mb-6 no-hyphens">Founder: Masoom Parekh</h3>
            <p className="text-champagne leading-relaxed mb-4 no-hyphens">
              Masoom Parekh is a diamond industry veteran with over 15 years of experience. Based in Surat, India (the world's diamond cutting capital), Masoom has worked across the supply chain and understands every aspect of the diamond business.
            </p>
            <p className="text-champagne leading-relaxed no-hyphens">
              His vision for Heera Cartel Co is rooted in transparency, fairness, and genuine value creation. Every decision is guided by the core principle: make diamonds accessible.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default OurStory