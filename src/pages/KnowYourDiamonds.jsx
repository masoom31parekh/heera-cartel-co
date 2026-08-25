import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const KnowYourDiamonds = () => {
  const sections = [
    {
      title: 'Diamond Buying Guide',
      desc: 'Learn the essential steps before purchasing a diamond. From certification to quality checks.',
      link: '/know-your-diamonds/buying-guide',
    },
    {
      title: 'The Four Cs',
      desc: 'Understand Carat, Color, Clarity, and Cut. The foundation of diamond grading.',
      link: '/know-your-diamonds/four-cs',
    },
    {
      title: 'Cut Grades Explained',
      desc: 'Excellent, Ideal, Very Good, Good. What each cut grade means for your diamond.',
      link: '/know-your-diamonds/cut-guide',
    },
    {
      title: 'Natural vs Lab Grown',
      desc: 'The complete comparison. Myth vs reality. Quality, pricing, and sustainability.',
      link: '/know-your-diamonds/natural-vs-lab',
    },
    {
      title: 'Understanding Certifications',
      desc: 'GIA, IGI, and CGI explained. What certifications mean and how to verify them.',
      link: '/know-your-diamonds/certification',
    },
    {
      title: 'Cut and Shape Guide',
      desc: 'Round, Oval, Princess, Emerald, Cushion, Heart. Which shape is right for you',
      link: '/know-your-diamonds/shape-guide',
    },
    {
      title: 'Diamond Price Guide',
      desc: 'How wholesale pricing works. Understand the market and get the best value.',
      link: '/know-your-diamonds/price-guide',
    },
  ]

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Know Your Diamonds</h1>
            <p className="text-champagne text-lg no-hyphens">
              Everything you need to know about diamonds. From the 4Cs to certifications to cutting edge lab grown technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={section.link}
                className="group border border-gold border-opacity-30 rounded-lg p-8 hover:border-opacity-100 hover:bg-gold hover:bg-opacity-5 transition h-full flex flex-col justify-between no-hyphens"
              >
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gold mb-4 group-hover:text-champagne transition">
                    {section.title}
                  </h3>
                  <p className="text-champagne leading-relaxed">{section.desc}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-gold group-hover:text-champagne group-hover:gap-3 transition font-bold">
                  Learn More <ArrowRight size={20} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default KnowYourDiamonds