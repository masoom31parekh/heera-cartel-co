import { motion } from 'framer-motion'

const PriceGuide = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Diamond Price Guide</h1>
            <p className="text-champagne text-lg no-hyphens">
              Understand wholesale pricing and how to get the best value for your diamonds.
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
          <div>
            <h2 className="font-playfair text-4xl font-bold text-gold mb-8 no-hyphens">How Wholesale Pricing Works</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Traditional Retail Market',
                  desc: 'Diamonds are marked up 100% to 300% from wholesale price. You pay premium for brand, store location, and experience.',
                },
                {
                  title: 'Heera Cartel Wholesale Model',
                  desc: 'We eliminate middlemen and pass savings directly to you. Whether you are a jeweller or individual, you get wholesale pricing. Same rates for everyone.',
                },
                {
                  title: 'Bulk Discounts',
                  desc: 'Retailers and jewellers can benefit from additional discounts on larger orders. Volume based pricing for business customers.',
                },
                {
                  title: 'Lab Grown Advantage',
                  desc: 'Lab grown diamonds are inherently more affordable than natural diamonds. Average savings of 40 to 60 percent compared to natural stones of same quality.',
                },
              ].map((item, idx) => (
                <div key={idx} className="border border-gold border-opacity-30 rounded-lg p-6">
                  <h3 className="text-gold font-bold text-lg mb-3 font-playfair no-hyphens">{item.title}</h3>
                  <p className="text-champagne">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-4xl font-bold text-gold mb-8 no-hyphens">Factors Affecting Price</h2>
            <div className="bg-black border border-gold border-opacity-30 rounded-lg p-8">
              <div className="space-y-6">
                {[
                  { factor: 'Carat Weight', impact: '40%', explanation: 'Largest price driver. Prices increase exponentially with carat weight.' },
                  { factor: 'Color Grade', impact: '20%', explanation: 'D to F (colorless) command premium. G onwards are more affordable.' },
                  { factor: 'Clarity Grade', impact: '15%', explanation: 'FL to VS1 are premium. SI1 offers excellent value with minimal visible inclusions.' },
                  { factor: 'Cut Quality', impact: '15%', explanation: 'Excellent cuts maximize light return and sparkle. Good cuts offer value.' },
                  { factor: 'Certification', impact: '5%', explanation: 'GIA certificates typically command slight premium. IGI and CGI are well accepted.' },
                  { factor: 'Market Conditions', impact: '5%', explanation: 'Supply and demand fluctuations. Lab grown prices declining, natural stable.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start pb-6 border-b border-gold border-opacity-10 last:border-0 last:pb-0">
                    <div>
                      <p className="text-gold font-bold mb-1 no-hyphens">{item.factor}</p>
                      <p className="text-champagne text-sm">{item.explanation}</p>
                    </div>
                    <p className="text-champagne font-bold text-lg ml-4">{item.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-4xl font-bold text-gold mb-8 no-hyphens">Getting the Best Deal</h2>
            <div className="bg-black border border-gold border-opacity-30 rounded-lg p-8 space-y-4">
              <ul className="space-y-3 text-champagne">
                {[
                  'Compare prices across multiple stones before purchasing',
                  'Consider lab grown diamonds for 40 to 60 percent savings',
                  'Slightly lower color or clarity grades offer excellent value',
                  'Very Good cut stones provide great performance at lower cost',
                  'Bulk orders qualify for additional discounts',
                  'Contact our team for custom pricing on your requirements',
                  'Verify certification from recognized labs (GIA, IGI, CGI)',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-gold flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default PriceGuide