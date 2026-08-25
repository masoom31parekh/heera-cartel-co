import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      q: 'Are lab grown diamonds real?',
      a: 'Yes, lab grown diamonds are 100% real diamonds. They are chemically, physically, and optically identical to natural diamonds. The only difference is their origin.',
    },
    {
      q: 'Are lab grown diamonds certified?',
      a: 'Yes. Lab grown diamonds receive the same certifications as natural diamonds from GIA, IGI, and CGI. The certificates clearly state whether the diamond is lab grown or natural.',
    },
    {
      q: 'Why are lab grown diamonds cheaper?',
      a: 'Lab grown diamonds are cheaper because they eliminate the need for mining. Production costs are lower, and supply is abundant. These savings are passed to the customer.',
    },
    {
      q: 'How long does shipping take?',
      a: 'We ship worldwide via FedEx. Standard shipping takes 5 to 7 business days. Expedited options available. All shipments are insured and tracked.',
    },
    {
      q: 'What is your return policy?',
      a: 'We offer a 30 day return policy for diamonds purchased from our store. Diamonds must be in original condition. Contact us for return authorization.',
    },
    {
      q: 'Do you offer bulk discounts?',
      a: 'Yes. Retailers and jewellers qualify for volume based discounts. Contact our B2B team for custom pricing on your order.',
    },
    {
      q: 'Can I verify a diamond certification?',
      a: 'Yes. Visit the certification lab website (GIA, IGI, or CGI) and enter the certificate number to verify authenticity and details.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept bank transfers, credit cards, and digital payment methods. For bulk orders, custom payment terms available.',
    },
  ]

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Frequently Asked Questions</h1>
            <p className="text-champagne text-lg no-hyphens">
              Answers to common questions about our diamonds and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="border border-gold border-opacity-30 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex justify-between items-center hover:bg-gold hover:bg-opacity-5 transition no-hyphens"
              >
                <h3 className="font-playfair text-lg font-bold text-gold text-left">{faq.q}</h3>
                <ChevronDown
                  size={24}
                  className={`text-gold transition-transform flex-shrink-0 ml-4 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIdx === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-8 py-4 border-t border-gold border-opacity-20 bg-gold bg-opacity-5"
                >
                  <p className="text-champagne leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FAQ