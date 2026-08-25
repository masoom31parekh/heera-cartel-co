import { motion } from 'framer-motion'

const CutGuide = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Cut Grades Explained</h1>
            <p className="text-champagne text-lg no-hyphens">
              Understanding the quality grades of diamond cuts and their impact on brilliance.
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
              grade: 'Excellent',
              percentage: '3% to 8%',
              description: 'Maximum sparkle and brilliance. Nearly perfect proportions and polish. Reflects maximum light.',
              priceImpact: 'Premium pricing due to superior light performance.',
            },
            {
              grade: 'Ideal',
              percentage: '8% to 15%',
              description: 'Superior brilliance and light return. Excellent proportions with minimal light loss.',
              priceImpact: 'High value for exceptional sparkle.',
            },
            {
              grade: 'Very Good',
              percentage: '15% to 25%',
              description: 'Good proportions and light return. Excellent value for money. Very minimal light loss.',
              priceImpact: 'Best price to performance ratio for most buyers.',
            },
            {
              grade: 'Good',
              percentage: '25% to 35%',
              description: 'Adequate proportions but noticeable light loss. Still attractive to the eye but not optimal.',
              priceImpact: 'Most affordable option. Suitable for budget conscious buyers.',
            },
            {
              grade: 'Fair',
              percentage: '35% to 50%',
              description: 'Significant light loss. Noticeably less brilliant. Poor proportions and symmetry.',
              priceImpact: 'Budget option but compromises on sparkle significantly.',
            },
            {
              grade: 'Poor',
              percentage: '50%+',
              description: 'Maximum light loss. Dull appearance. Very poor proportions and polish.',
              priceImpact: 'Not recommended unless extremely budget constrained.',
            },
          ].map((item, idx) => (
            <div key={idx} className="border border-gold border-opacity-30 rounded-lg p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-playfair text-3xl font-bold text-gold no-hyphens">{item.grade}</h3>
                <span className="text-champagne text-sm font-lato font-bold">{item.percentage} of diamonds</span>
              </div>
              <p className="text-champagne mb-4">{item.description}</p>
              <p className="text-gold text-sm font-lato font-bold no-hyphens">{item.priceImpact}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default CutGuide