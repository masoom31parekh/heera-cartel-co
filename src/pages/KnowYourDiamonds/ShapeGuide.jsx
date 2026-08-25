import { motion } from 'framer-motion'

const ShapeGuide = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Diamond Shapes and Cuts</h1>
            <p className="text-champagne text-lg no-hyphens">
              Explore different diamond shapes and find the one that suits your style and preferences.
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
          {[
            {
              shape: 'Round Brilliant',
              description: 'The most popular diamond shape. Maximum sparkle and brilliance. Ideal for engagement rings.',
              characteristics: 'Excellent light return, versatile, timeless. Approximately 60% of all diamonds sold are round brilliant.',
              pricePoint: 'Premium pricing due to popularity and optimal cutting.',
            },
            {
              shape: 'Oval',
              description: 'Elongated round shape. Offers excellent brilliance with an elongated appearance.',
              characteristics: 'Flatters the hand, makes the stone appear larger. Good light return with elegant proportions.',
              pricePoint: 'Slightly lower than round brilliant for same carat weight.',
            },
            {
              shape: 'Princess',
              description: 'Square modern shape with pointed corners. Contemporary and elegant.',
              characteristics: 'Good sparkle, modern appeal. Requires protective setting. Popular for engagement rings.',
              pricePoint: 'Slightly lower than round brilliant.',
            },
            {
              shape: 'Emerald',
              description: 'Rectangular step cut shape. Emphasizes clarity over sparkle.',
              characteristics: 'Large open table shows internal characteristics. Requires higher clarity grades. Elegant and sophisticated.',
              pricePoint: 'More affordable than round for same carat weight due to less light loss.',
            },
            {
              shape: 'Cushion',
              description: 'Square or slightly rectangular shape with rounded corners. Vintage inspired.',
              characteristics: 'Good light return with soft corners. Romantic and nostalgic appeal. Works well in vintage settings.',
              pricePoint: 'Comparable to oval or princess cuts.',
            },
            {
              shape: 'Heart',
              description: 'Heart shaped romantic stone. Unique and symbolic.',
              characteristics: 'Requires quality cutting for symmetrical appearance. Unique and distinctive. Popular for special occasions.',
              pricePoint: 'Premium due to complex cutting requirements.',
            },
          ].map((item, idx) => (
            <div key={idx} className="border border-gold border-opacity-30 rounded-lg p-8">
              <h3 className="font-playfair text-3xl font-bold text-gold mb-4 no-hyphens">{item.shape}</h3>
              <p className="text-champagne mb-4">{item.description}</p>
              <div className="space-y-3 text-champagne text-sm">
                <div>
                  <p className="font-bold text-gold no-hyphens">Characteristics</p>
                  <p>{item.characteristics}</p>
                </div>
                <div>
                  <p className="font-bold text-gold no-hyphens">Price Point</p>
                  <p>{item.pricePoint}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default ShapeGuide