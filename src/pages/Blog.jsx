import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

const Blog = () => {
  const articles = [
    {
      title: 'Lab Grown vs Natural: The Complete Truth',
      excerpt: 'Everything you need to know about lab grown diamonds. Myth busting, price comparison, and why they are the future.',
      date: 'August 2024',
      link: 'https://www.instagram.com/heeracartel.co',
    },
    {
      title: 'How to Spot a High Quality Diamond',
      excerpt: 'Learn the signs of quality. Understanding cut, color, clarity, and how they work together.',
      date: 'July 2024',
      link: 'https://www.instagram.com/heeracartel.co',
    },
    {
      title: 'Wholesale Pricing Explained',
      excerpt: 'Why retailers should work with Heera Cartel Co. Direct pricing, no middlemen, better margins.',
      date: 'June 2024',
      link: 'https://www.instagram.com/heeracartel.co',
    },
  ]

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Blog and Articles</h1>
            <p className="text-champagne text-lg no-hyphens">
              Insights, tips, and stories about diamonds, jewelry, and the industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.a
              key={idx}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border border-gold border-opacity-30 rounded-lg p-8 hover:border-opacity-100 hover:bg-gold hover:bg-opacity-5 transition group no-hyphens"
            >
              <p className="text-gold text-sm font-lato font-bold mb-4">{article.date}</p>
              <h3 className="font-playfair text-2xl font-bold text-champagne mb-4 group-hover:text-gold transition">
                {article.title}
              </h3>
              <p className="text-champagne mb-6">{article.excerpt}</p>
              <div className="flex items-center gap-2 text-gold group-hover:text-champagne transition font-bold">
                Read on Instagram <ExternalLink size={16} />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-champagne text-lg mb-6 no-hyphens">
            More articles available on our Instagram
          </p>
          <a
            href="https://www.instagram.com/heeracartel.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-charcoal px-10 py-4 rounded-lg font-lato font-700 uppercase tracking-widest hover:bg-opacity-90 transition no-hyphens"
          >
            Follow Us <ExternalLink size={20} />
          </a>
        </motion.div>
      </section>
    </div>
  )
}

export default Blog