import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const CertificationGuide = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Understanding Diamond Certifications</h1>
            <p className="text-champagne text-lg no-hyphens">
              Learn about GIA, IGI, and CGI certifications. Why they matter and how to verify them.
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
          {[
            {
              name: 'GIA (Gemological Institute of America)',
              founded: 'Founded 1931',
              reputation: 'Most reputable and widely recognized certification worldwide.',
              grading: 'Strict grading standards. GIA Diamond Grading Report includes the 4Cs and detailed measurements.',
              link: 'www.gia.edu',
            },
            {
              name: 'IGI (International Gemological Institute)',
              founded: 'Founded 1975',
              reputation: 'Second largest independent gemological lab. Globally accepted.',
              grading: 'Detailed grading reports. Slightly more lenient grading than GIA in some cases.',
              link: 'www.igiworldwide.com',
            },
            {
              name: 'CGI (Competitive Gems Inc)',
              founded: 'Founded 2000s',
              reputation: 'Reliable certification, more common in lab grown diamonds.',
              grading: 'Comparable standards to IGI. Specialized in lab grown diamond certification.',
              link: 'www.cgigems.com',
            },
          ].map((cert, idx) => (
            <div key={idx} className="border border-gold border-opacity-30 rounded-lg p-8">
              <h3 className="font-playfair text-3xl font-bold text-gold mb-2 no-hyphens">{cert.name}</h3>
              <p className="text-gold text-sm font-lato font-bold mb-6">{cert.founded}</p>
              <div className="space-y-4">
                <div>
                  <p className="text-champagne font-bold mb-2 no-hyphens">Reputation</p>
                  <p className="text-champagne">{cert.reputation}</p>
                </div>
                <div>
                  <p className="text-champagne font-bold mb-2 no-hyphens">Grading Standards</p>
                  <p className="text-champagne">{cert.grading}</p>
                </div>
                <a
                  href={`https://${cert.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-champagne transition font-bold no-hyphens"
                >
                  Visit {cert.name} <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}

          <div>
            <h2 className="font-playfair text-4xl font-bold text-gold mb-8 no-hyphens">What To Look For In A Certificate</h2>
            <div className="bg-black border border-gold border-opacity-30 rounded-lg p-8 space-y-4">
              <ul className="space-y-3 text-champagne">
                {[
                  'Diamond measurements (length x width x depth)',
                  'Carat weight',
                  'Color grade (D to Z)',
                  'Clarity grade (FL to I3)',
                  'Cut grade (Excellent, Very Good, Good, Fair, Poor)',
                  'Polish and symmetry grades',
                  'Fluorescence information',
                  'Unique certificate number for verification',
                  'Laser inscription on the diamond (optional)',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-gold flex-shrink-0">✓</span>
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

export default CertificationGuide