import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'inquiry',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert('Thank you! We will get back to you soon.')
        setFormData({ name: '', email: '', phone: '', message: '', type: 'inquiry' })
      }
    } catch (error) {
      alert('Error submitting form. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Get in Touch</h1>
            <p className="text-champagne text-lg no-hyphens">
              Have questions? Need a custom quote? We are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-playfair text-4xl font-bold text-gold mb-12 no-hyphens">Contact Us</h2>
            </div>

            <div className="space-y-4">
              <p className="text-champagne font-bold text-lg no-hyphens">Direct Message</p>
              <p className="text-champagne text-lg leading-relaxed no-hyphens">
                Quick response via Instagram Direct Message
              </p>
              <a
                href="https://www.instagram.com/heeracartel.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gold hover:text-champagne transition font-bold font-lato"
              >
                @heeracartel.co on Instagram
              </a>
            </div>

            <div className="space-y-4">
              <p className="text-champagne font-bold text-lg no-hyphens">Facebook</p>
              <p className="text-champagne text-lg leading-relaxed no-hyphens">
                Send us a message on Facebook
              </p>
              <a
                href="https://www.facebook.com/share/1FSYBwxPTV/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gold hover:text-champagne transition font-bold font-lato no-hyphens"
              >
                Heera Cartel Co Facebook
              </a>
            </div>

            <div className="space-y-4">
              <p className="text-champagne font-bold text-lg no-hyphens">Business Hours</p>
              <p className="text-champagne no-hyphens">Monday to Saturday: 10 AM to 6 PM IST</p>
              <p className="text-champagne no-hyphens">Sunday: By appointment</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form
              onSubmit={handleSubmit}
              className="border border-gold border-opacity-30 rounded-lg p-8 space-y-6"
            >
              <div>
                <label className="block text-champagne font-bold mb-2 no-hyphens">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-champagne font-bold mb-2 no-hyphens">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-champagne font-bold mb-2 no-hyphens">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="+1 (555) 123 4567"
                />
              </div>

              <div>
                <label className="block text-champagne font-bold mb-2 no-hyphens">Inquiry Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full"
                >
                  <option value="inquiry">General Inquiry</option>
                  <option value="wholesale">Wholesale Quote</option>
                  <option value="retail">Retail Purchase</option>
                  <option value="custom">Custom Order</option>
                </select>
              </div>

              <div>
                <label className="block text-champagne font-bold mb-2 no-hyphens">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full resize-none"
                  placeholder="Tell us about your diamond needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-charcoal py-3 rounded-lg font-lato font-bold uppercase tracking-widest hover:bg-opacity-90 transition flex items-center justify-center gap-2 no-hyphens"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact