import { motion } from 'framer-motion'

const Shipping = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Shipping Information</h1>
            <p className="text-champagne text-lg no-hyphens">
              Safe, secure, and fast worldwide shipping.
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
            <h2 className="font-playfair text-4xl font-bold text-gold mb-8 no-hyphens">Shipping Methods</h2>
            <div className="space-y-6">
              {[
                {
                  name: 'Standard Worldwide Shipping',
                  time: '5 to 7 business days',
                  tracking: 'FedEx International',
                  insurance: 'Included - 100% insured',
                },
                {
                  name: 'Express Shipping',
                  time: '2 to 3 business days',
                  tracking: 'FedEx Express',
                  insurance: 'Included - 100% insured',
                },
                {
                  name: 'Overnight Shipping',
                  time: '1 business day',
                  tracking: 'FedEx Overnight',
                  insurance: 'Included - 100% insured',
                },
              ].map((method, idx) => (
                <div key={idx} className="border border-gold border-opacity-30 rounded-lg p-6">
                  <h3 className="font-bold text-gold text-lg mb-4 font-playfair no-hyphens">{method.name}</h3>
                  <div className="space-y-2 text-champagne">
                    <p><span className="font-bold no-hyphens">Delivery Time:</span> {method.time}</p>
                    <p><span className="font-bold no-hyphens">Carrier:</span> {method.tracking}</p>
                    <p><span className="font-bold no-hyphens">Insurance:</span> {method.insurance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-4xl font-bold text-gold mb-8 no-hyphens">Safety and Security</h2>
            <div className="space-y-4 text-champagne">
              {[
                'All shipments are insured for 100% of the diamond value',
                'Tracked via FedEx for real time updates',
                'Shipped in discrete, secure packaging',
                'Signature required on delivery',
                'Seller insurance covers loss or damage in transit',
                'Certificate of authenticity included',
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-gold flex-shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-4xl font-bold text-gold mb-8 no-hyphens">Customs and Duties</h2>
            <p className="text-champagne leading-relaxed mb-6 no-hyphens">
              Customs duties and taxes vary by country. The customer is responsible for any import duties or taxes assessed by their country of import. We provide detailed invoices to assist with customs clearance.
            </p>
            <p className="text-champagne leading-relaxed no-hyphens">
              For EU countries, VAT may apply. We will provide documentation to ensure smooth customs clearance.
            </p>
          </div>

          <div className="bg-gold bg-opacity-10 border border-gold border-opacity-30 rounded-lg p-8">
            <h3 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">Need Help</h3>
            <p className="text-champagne mb-4 no-hyphens">
              Contact us for shipping assistance or to discuss custom delivery arrangements for large orders.
            </p>
            <a href="/contact" className="text-gold font-bold hover:text-champagne transition no-hyphens">
              Get in Touch →
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Shipping