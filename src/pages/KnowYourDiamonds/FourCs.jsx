import { motion } from 'framer-motion'

const FourCs = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">The Four Cs of Diamonds</h1>
            <p className="text-champagne text-lg no-hyphens">
              Carat, Color, Clarity, and Cut. The international standard for diamond grading.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          {[
            {
              title: 'Carat Weight',
              description: 'Measures the weight of the diamond. One carat equals 200 milligrams. Higher carat weight generally means higher price, but is not the only factor.',
              details: 'Carat weight affects price exponentially. A 2 carat diamond is significantly more expensive than a 1 carat diamond of similar quality. Weight alone does not determine quality.',
            },
            {
              title: 'Color',
              description: 'Grades the presence or absence of color in a diamond. The scale ranges from D (colorless) to Z (light color).',
              details: 'D, E, F are colorless. G, H, I, J are near colorless but offer good value. K onwards show noticeable color. Colorless diamonds (D F) command premium prices.',
            },
            {
              title: 'Clarity',
              description: 'Measures the presence or absence of internal and external flaws called inclusions and blemishes.',
              details: 'FL (Flawless) and IF (Internally Flawless) are rare and expensive. VS1, VS2 (Very Slightly Included) offer excellent value with minimal visible inclusions. SI1, SI2 (Slightly Included) are affordable but may show inclusions.',
            },
            {
              title: 'Cut',
              description: 'Refers to the quality of the cutting and polishing of the diamond. The most important of the 4Cs as it directly affects brilliance and sparkle.',
              details: 'Excellent and Ideal cuts maximize light return and sparkle. Very Good cuts offer great value. The cut grade depends on proportions, symmetry, and polish.',
            },
          ].map((c, idx) => (
            <div key={idx} className="border border-gold border-opacity-30 rounded-lg p-8">
              <h3 className="font-playfair text-3xl font-bold text-gold mb-4 no-hyphens">{c.title}</h3>
              <p className="text-champagne text-lg mb-6">{c.description}</p>
              <p className="text-champagne leading-relaxed">{c.details}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default FourCs