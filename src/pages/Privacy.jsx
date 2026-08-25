import { motion } from 'framer-motion'

const Privacy = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Privacy Policy</h1>
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
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4 no-hyphens">
              We collect information you provide when placing orders, including name, email, phone, and address. We also collect information about your browsing behavior through cookies and analytics.
            </p>
            <p className="leading-relaxed no-hyphens">
              This information is used to process orders, communicate with you, and improve our services.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">2. How We Use Your Data</h2>
            <ul className="space-y-2 no-hyphens">
              {[
                'Process and fulfill your orders',
                'Communicate about your purchase',
                'Send promotional emails (with your consent)',
                'Improve our website and services',
                'Comply with legal obligations',
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-gold flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">3. Data Protection</h2>
            <p className="leading-relaxed mb-4 no-hyphens">
              We implement security measures to protect your personal information. All transactions are encrypted using SSL technology. Your data is stored securely and is not shared with third parties without consent.
            </p>
            <p className="leading-relaxed no-hyphens">
              However, no internet transmission is 100% secure. We cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">4. Cookies</h2>
            <p className="leading-relaxed mb-4 no-hyphens">
              Our website uses cookies to enhance your experience. You can disable cookies in your browser settings, but this may affect site functionality.
            </p>
            <p className="leading-relaxed no-hyphens">
              Cookies are used for analytics, personalization, and remembering your preferences.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">5. Third Party Links</h2>
            <p className="leading-relaxed no-hyphens">
              Our website contains links to third party websites. We are not responsible for their privacy practices. Please review their privacy policies before providing information.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">6. Your Rights</h2>
            <p className="leading-relaxed mb-4 no-hyphens">
              You have the right to access, modify, or delete your personal information. Contact us to exercise these rights.
            </p>
            <p className="leading-relaxed no-hyphens">
              For EU residents, additional rights apply under GDPR.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-gold mb-4 no-hyphens">7. Contact Us</h2>
            <p className="leading-relaxed no-hyphens">
              If you have privacy concerns, contact us via Instagram or email.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Privacy