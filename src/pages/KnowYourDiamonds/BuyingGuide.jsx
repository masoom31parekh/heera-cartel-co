import { motion } from 'framer-motion'

const BuyingGuide = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Diamond Buying Guide</h1>
            <p className="text-champagne text-lg no-hyphens">
              Essential steps and considerations before purchasing your diamond.
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
              title: 'Step 1: Understand Your Budget',
              content: 'Determine what you are willing to spend. Diamond prices vary dramatically based on the 4Cs. Know your range before shopping.',
            },
            {
              title: 'Step 2: Learn the 4Cs',
              content: 'Carat (weight), Color (D to Z scale), Clarity (FL to I3), and Cut (quality of cutting). These are the foundation of diamond quality.',
            },
            {
              title: 'Step 3: Choose Lab Grown or Natural',
              content: 'Lab grown diamonds are chemically identical to natural diamonds but more affordable. Natural diamonds offer historical rarity.',
            },
            {
              title: 'Step 4: Verify Certification',
              content: 'Always buy certified diamonds from recognized labs like GIA, IGI, or CGI. Certification guarantees authenticity and quality.',
            },
            {
              title: 'Step 5: Compare Options',
              content: 'Use our filtering tools to compare diamonds across price, weight, cut, and shape. Find the perfect stone for your needs.',
            },
            {
              title: 'Step 6: Get a Quote',
              content: 'Contact us for wholesale pricing. We offer bulk discounts for jewellers and retailers, and fair prices for individual buyers.',
            },
          ].map((step, idx) => (
            <div key={idx}>
              <h3 className="font-playfair text-3xl font-bold text-gold mb-4 no-hyphens">{step.title}</h3>
              <p className="text-champagne text-lg leading-relaxed">{step.content}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default BuyingGuide