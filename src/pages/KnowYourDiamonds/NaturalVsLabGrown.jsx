import { motion } from 'framer-motion'

const NaturalVsLabGrown = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Natural vs Lab Grown Diamonds</h1>
            <p className="text-champagne text-lg no-hyphens">
              Complete comparison: Quality, price, sustainability, and the truth behind the myths.
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
            <h2 className="font-playfair text-4xl font-bold text-gold mb-8 no-hyphens">The Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gold border-opacity-30">
                    <th className="text-champagne font-bold py-4 px-4 no-hyphens">Property</th>
                    <th className="text-champagne font-bold py-4 px-4 no-hyphens">Natural Diamonds</th>
                    <th className="text-champagne font-bold py-4 px-4 no-hyphens">Lab Grown Diamonds</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Chemical Composition', 'Carbon (C)', 'Carbon (C)'],
                    ['Physical Properties', 'Identical to lab grown', 'Identical to natural'],
                    ['Optical Properties', 'Identical to lab grown', 'Identical to natural'],
                    ['Age', 'Billions of years', 'Weeks to months'],
                    ['Formation', 'Underground pressure', 'Controlled laboratory'],
                    ['Price', '2x to 3x more expensive', 'More affordable'],
                    ['Certification', 'GIA, IGI, CGI', 'GIA, IGI, CGI'],
                    ['Resale Value', 'Good', 'Growing but lower'],
                    ['Environmental Impact', 'Mining concerns', 'Minimal energy use'],
                    ['Rarity', 'Rare and limited', 'Abundant and scalable'],
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-gold border-opacity-10">
                      <td className="text-gold font-bold py-4 px-4 no-hyphens">{row[0]}</td>
                      <td className="text-champagne py-4 px-4">{row[1]}</td>
                      <td className="text-champagne py-4 px-4">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-4xl font-bold text-gold mb-8 no-hyphens">Myth Busting</h2>
            <div className="space-y-6">
              {[
                {
                  myth: 'Lab grown diamonds are fake',
                  truth: 'False. Lab grown diamonds are 100% real diamonds. They have identical chemical, physical, and optical properties to natural diamonds. They are certified by the same labs (GIA, IGI, CGI).',
                },
                {
                  myth: 'Lab grown diamonds are less durable',
                  truth: 'False. Lab grown diamonds have the same hardness (10 on Mohs scale) as natural diamonds. They are equally durable and suitable for engagement rings.',
                },
                {
                  myth: 'Lab grown diamonds lose value quickly',
                  truth: 'Partially true. Like any diamond, lab grown diamonds depreciate in the secondary market. However, lab grown prices continue to drop as production scales, making them better long term value.',
                },
                {
                  myth: 'Lab grown diamonds have no resale value',
                  truth: 'False. Lab grown diamonds can be resold, though prices may be lower than purchase price. This applies to all diamonds. If you are buying for investment, the difference matters.',
                },
                {
                  myth: 'Natural diamonds are an investment',
                  truth: 'Partially true. While diamonds hold value, they are not liquid assets. Most diamonds depreciate by 20 to 40 percent at resale. They are better viewed as heirloom pieces than financial investments.',
                },
              ].map((item, idx) => (
                <div key={idx} className="border border-gold border-opacity-30 rounded-lg p-6">
                  <p className="text-gold font-bold mb-3 font-playfair text-lg">{item.myth}</p>
                  <p className="text-champagne leading-relaxed">{item.truth}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default NaturalVsLabGrown