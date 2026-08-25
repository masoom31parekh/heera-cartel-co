import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

const VerifyCertification = () => {
  const [certNumber, setCertNumber] = useState('')
  const [verified, setVerified] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleVerify = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch(`/api/certificates/${certNumber}`)
      if (response.ok) {
        const data = await response.json()
        setVerified(data)
      } else {
        setVerified({ error: 'Certificate not found' })
      }
    } catch (error) {
      setVerified({ error: 'Error verifying certificate' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Verify Your Certificate</h1>
            <p className="text-champagne text-lg no-hyphens">
              Enter your GIA, IGI, or CGI certificate number to verify authenticity and view details.
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
          {/* Form */}
          <form onSubmit={handleVerify} className="border border-gold border-opacity-30 rounded-lg p-8 space-y-6">
            <div>
              <label className="block text-champagne font-bold mb-4 no-hyphens">Certificate Number</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={certNumber}
                  onChange={(e) => setCertNumber(e.target.value)}
                  placeholder="e.g., 1234567890"
                  className="flex-1"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gold text-charcoal px-8 py-3 rounded-lg font-lato font-bold uppercase tracking-widest hover:bg-opacity-90 transition flex items-center gap-2 disabled:opacity-50 no-hyphens"
                >
                  <Search size={20} />
                  Verify
                </button>
              </div>
            </div>
          </form>

          {/* Results */}
          {verified && !verified.error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gold border-opacity-30 rounded-lg p-8 space-y-6"
            >
              <div className="text-center mb-6">
                <div className="inline-block bg-gold text-charcoal rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-4">
                  ✓
                </div>
                <p className="text-gold font-bold text-lg font-playfair no-hyphens">Certificate Verified</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Carat Weight', value: verified.carat },
                  { label: 'Color Grade', value: verified.color },
                  { label: 'Clarity Grade', value: verified.clarity },
                  { label: 'Cut Grade', value: verified.cut },
                  { label: 'Shape', value: verified.shape },
                  { label: 'Certification Lab', value: verified.lab },
                ].map((item, idx) => (
                  <div key={idx}>
                    <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2 no-hyphens">{item.label}</p>
                    <p className="text-champagne text-lg font-bold">{item.value}</p>
                  </div>
                ))}
              </div>

              <p className="text-champagne text-sm text-center pt-6 border-t border-gold border-opacity-20 no-hyphens">
                For official verification, visit the certification lab website directly.
              </p>
            </motion.div>
          )}

          {verified?.error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-red-500 border-opacity-50 rounded-lg p-8 text-center"
            >
              <p className="text-red-500 font-bold text-lg">{verified.error}</p>
              <p className="text-champagne mt-4 text-sm no-hyphens">
                Please check the certificate number and try again. For help, contact us.
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>
    </div>
  )
}

export default VerifyCertification