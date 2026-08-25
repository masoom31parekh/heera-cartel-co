import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const ForRetailers = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">For Retailers and Jewellers</h1>
            <p className="text-champagne text-lg no-hyphens">
              Wholesale pricing, bulk discounts, and expert guidance for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          <div>
            <h2 className="font-playfair text-4xl font-bold text-gold mb-12 no-hyphens">Why Choose Heera Cartel Co</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Wholesale Pricing',
                  desc: 'Direct wholesale rates without retail markup. Same pricing for all retailers regardless of volume at entry level.',
                },
                {
                  title: 'Expert Guidance',
                  desc: 'Our team guides you through every purchase. Understand the 4Cs, certifications, and market trends.',
                },
                {
                  title: 'Bulk Discounts',
                  desc: 'Volume based pricing for larger orders. Tiered discounts as your order quantity increases.',
                },
                {
                  title: 'Certified Inventory',
                  desc: 'All diamonds certified by GIA, IGI, or CGI. Quality guarantee on every stone.',
                },
                {
                  title: 'Lab Grown Specialization',
                  desc: 'Deep expertise in lab grown diamonds. Educate your customers with confidence.',
                },
                {
                  title: 'Inventory Support',
                  desc: 'Help sourcing the exact specifications you need. Custom orders available.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle className="text-gold flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gold mb-2 font-playfair no-hyphens">{item.title}</h3>
                    <p className="text-champagne">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Process */}
      <section className="py-24 bg-black border-y border-gold border-opacity-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-gold mb-16 text-center no-hyphens">4 Step Ordering Process</h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Browse and Shortlist',
                desc: 'Browse our diamond collection or specify your requirements. Filter by shape, cut, carat, and certification.',
              },
              {
                step: '02',
                title: 'Get Custom Quote',
                desc: 'Contact our team with your specifications. Receive detailed pricing and wholesale rates for your order.',
              },
              {
                step: '03',
                title: 'Verify and Confirm',
                desc: 'Review certification details and specifications. Confirm your order and payment terms.',
              },
              {
                step: '04',
                title: 'Receive and Resell',
                desc: 'Secure worldwide shipping via FedEx. Receive your certified diamonds and start selling to your customers.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border border-gold border-opacity-30 rounded-lg p-8 flex gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold text-charcoal rounded-full flex items-center justify-center font-playfair font-bold text-2xl">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gold mb-2 no-hyphens">{item.title}</h3>
                  <p className="text-champagne">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl font-bold text-champagne mb-8 no-hyphens">
            Ready to Grow Your Business
          </h2>
          <p className="text-champagne text-lg mb-12 max-w-2xl mx-auto no-hyphens">
            Partner with Heera Cartel Co for wholesale pricing and expert guidance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-charcoal px-10 py-4 rounded-lg font-lato font-700 uppercase tracking-widest hover:bg-opacity-90 transition no-hyphens"
          >
            Contact Our B2B Team <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default ForRetailers