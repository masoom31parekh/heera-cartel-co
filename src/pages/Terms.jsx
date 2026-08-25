import { motion } from 'framer-motion'

const Terms = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Terms of Service</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12 text-champagne"
        >
          <div>
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">1. Agreement to Terms</h2>
            <p className="leading-relaxed no-hyphens">
              By using Heera Cartel Co website and services, you agree to these terms and conditions. If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">2. Product Description</h2>
            <p className="leading-relaxed mb-4 no-hyphens">
              All diamonds are certified by recognized gemological institutes (GIA, IGI, or CGI). Certificates are provided with every purchase. Descriptions and specifications are based on certification reports.
            </p>
            <p className="leading-relaxed no-hyphens">
              Diamond images are for illustrative purposes. Actual diamonds may appear differently under various lighting conditions.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">3. Pricing and Availability</h2>
            <p className="leading-relaxed mb-4 no-hyphens">
              Prices are subject to change without notice. Diamonds are sold on a first come, first served basis. Availability is subject to stock confirmation.
            </p>
            <p className="leading-relaxed no-hyphens">
              For bulk orders, custom pricing is available. Contact our team for wholesale rates.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">4. Payment Terms</h2>
            <p className="leading-relaxed mb-4 no-hyphens">
              Payment is due in full before shipment. We accept bank transfers, credit cards, and digital payments. No partial shipments unless agreed in writing.
            </p>
            <p className="leading-relaxed no-hyphens">
              For large orders, custom payment terms may be negotiated.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">5. Return Policy</h2>
            <p className="leading-relaxed mb-4 no-hyphens">
              Diamonds may be returned within 30 days of purchase if in original condition and accompanied by original certification. Returns must be authorized in writing. Refunds are processed after receipt and inspection.
            </p>
            <p className="leading-relaxed no-hyphens">
              Damaged or altered diamonds cannot be returned. Return shipping costs are the responsibility of the buyer.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">6. Shipping and Delivery</h2>
            <p className="leading-relaxed mb-4 no-hyphens">
              All shipments are insured and tracked. The buyer assumes ownership upon delivery. We are not responsible for packages lost after delivery confirmation.
            </p>
            <p className="leading-relaxed no-hyphens">
              Delivery times are estimates and not guaranteed. Delays due to customs or external factors are not our responsibility.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">7. Limitation of Liability</h2>
            <p className="leading-relaxed no-hyphens">
              Heera Cartel Co is not liable for indirect, incidental, or consequential damages. Our liability is limited to the purchase price of the diamond.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">8. Changes to Terms</h2>
            <p className="leading-relaxed no-hyphens">
              We reserve the right to modify these terms at any time. Continued use constitutes acceptance of updated terms.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Terms