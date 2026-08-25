import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Grid, List } from 'lucide-react'

const Shop = () => {
  const [viewType, setViewType] = useState('grid')
  const [selectedFilters, setSelectedFilters] = useState({})
  const [expandedFilter, setExpandedFilter] = useState(null)

  // Mock diamond data - replace with API call
  const diamonds = [
    {
      id: 1,
      name: 'CVD Lab Grown Round',
      type: 'Lab Grown - CVD',
      carat: 1.5,
      cut: 'Excellent',
      shape: 'Round',
      certification: 'GIA',
      price: null,
      image: 'placeholder',
    },
    {
      id: 2,
      name: 'HPHT Lab Grown Oval',
      type: 'Lab Grown - HPHT',
      carat: 2.0,
      cut: 'Ideal',
      shape: 'Oval',
      certification: 'IGI',
      price: null,
      image: 'placeholder',
    },
    {
      id: 3,
      name: 'Natural Princess Cut',
      type: 'Natural',
      carat: 1.2,
      cut: 'Excellent',
      shape: 'Princess',
      certification: 'GIA',
      price: null,
      image: 'placeholder',
    },
    {
      id: 4,
      name: 'Coloured Pink Diamond',
      type: 'Coloured',
      carat: 0.8,
      cut: 'Excellent',
      shape: 'Cushion',
      certification: 'CGI',
      price: null,
      image: 'placeholder',
    },
  ]

  const filterOptions = {
    type: ['Lab Grown - CVD', 'Lab Grown - HPHT', 'Natural', 'Coloured'],
    shape: ['Round', 'Oval', 'Princess', 'Emerald', 'Cushion', 'Heart'],
    cut: ['Excellent', 'Ideal', 'Very Good', 'Good'],
    carat: ['0 to 1', '1 to 2', '2 to 3', '3 to 5', '5+'],
    certification: ['GIA', 'IGI', 'CGI', 'Non Certified'],
    budget: ['Under 50k', '50k to 100k', '100k to 250k', '250k+'],
  }

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters((prev) => {
      const current = prev[filterName] || []
      if (current.includes(value)) {
        return { ...prev, [filterName]: current.filter((v) => v !== value) }
      } else {
        return { ...prev, [filterName]: [...current, value] }
      }
    })
  }

  const filteredDiamonds = useMemo(() => {
    return diamonds.filter((diamond) => {
      for (const [filterName, values] of Object.entries(selectedFilters)) {
        if (values.length === 0) continue
        if (filterName === 'type' && !values.includes(diamond.type)) return false
        if (filterName === 'shape' && !values.includes(diamond.shape)) return false
        if (filterName === 'cut' && !values.includes(diamond.cut)) return false
        if (filterName === 'certification' && !values.includes(diamond.certification)) return false
      }
      return true
    })
  }, [selectedFilters])

  const FilterSection = ({ title, filterName, options }) => (
    <div className="border-b border-gold border-opacity-20 py-4">
      <button
        onClick={() => setExpandedFilter(expandedFilter === filterName ? null : filterName)}
        className="flex justify-between items-center w-full text-champagne hover:text-gold transition font-lato font-600 no-hyphens"
      >
        {title}
        <ChevronDown
          size={20}
          className={`transition-transform ${expandedFilter === filterName ? 'rotate-180' : ''}`}
        />
      </button>
      {expandedFilter === filterName && (
        <div className="mt-4 space-y-3">
          {options.map((option) => (
            <label key={option} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={(selectedFilters[filterName] || []).includes(option)}
                onChange={() => handleFilterChange(filterName, option)}
                className="w-4 h-4 accent-gold rounded"
              />
              <span className="text-champagne text-sm hover:text-gold transition no-hyphens">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <section className="bg-black border-b border-gold border-opacity-20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-playfair text-5xl font-bold text-champagne mb-4 no-hyphens">Shop Diamonds</h1>
            <p className="text-champagne text-lg no-hyphens">
              Browse our collection of lab grown, natural, and coloured diamonds. Filter by type, shape, cut, and more.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-64 flex-shrink-0"
          >
            <div className="bg-black border border-gold border-opacity-30 rounded-lg p-6 sticky top-24">
              <h3 className="font-playfair text-xl font-bold text-gold mb-6 uppercase tracking-widest no-hyphens">
                Filters
              </h3>

              <FilterSection title="Type" filterName="type" options={filterOptions.type} />
              <FilterSection title="Shape" filterName="shape" options={filterOptions.shape} />
              <FilterSection title="Cut" filterName="cut" options={filterOptions.cut} />
              <FilterSection title="Carat" filterName="carat" options={filterOptions.carat} />
              <FilterSection title="Certification" filterName="certification" options={filterOptions.certification} />
              <FilterSection title="Budget" filterName="budget" options={filterOptions.budget} />

              <button
                onClick={() => setSelectedFilters({})}
                className="w-full mt-6 border border-gold text-gold px-4 py-2 rounded-lg hover:bg-gold hover:text-charcoal transition font-lato font-600 uppercase tracking-widest no-hyphens"
              >
                Clear Filters
              </button>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
            {/* View Toggle */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-champagne font-lato no-hyphens">
                Showing {filteredDiamonds.length} diamonds
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewType('grid')}
                  className={`p-2 rounded-lg transition ${
                    viewType === 'grid'
                      ? 'bg-gold text-charcoal'
                      : 'border border-gold text-gold hover:bg-gold hover:text-charcoal'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewType('list')}
                  className={`p-2 rounded-lg transition ${
                    viewType === 'list'
                      ? 'bg-gold text-charcoal'
                      : 'border border-gold text-gold hover:bg-gold hover:text-charcoal'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            {/* Diamond Grid/List */}
            <div
              className={`${
                viewType === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
              }`}
            >
              {filteredDiamonds.map((diamond, idx) => (
                <motion.div
                  key={diamond.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="border border-gold border-opacity-30 rounded-lg overflow-hidden hover:border-opacity-100 transition group cursor-pointer no-hyphens"
                >
                  {/* Image Placeholder */}
                  <div className="bg-gradient-to-br from-gold to-champagne h-48 md:h-64 flex items-center justify-center text-charcoal text-center p-6 group-hover:from-champagne group-hover:to-gold transition">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 border-2 border-charcoal rounded-full" />
                      <p className="font-lato font-bold text-sm uppercase tracking-widest">Diamond Image</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold text-gold mb-2">{diamond.name}</h3>
                    <p className="text-champagne text-sm mb-4 no-hyphens">{diamond.type}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-widest no-hyphens">Carat</p>
                        <p className="text-champagne font-bold">{diamond.carat}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-widest no-hyphens">Cut</p>
                        <p className="text-champagne font-bold no-hyphens">{diamond.cut}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-widest no-hyphens">Shape</p>
                        <p className="text-champagne font-bold">{diamond.shape}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-widest no-hyphens">Cert</p>
                        <p className="text-champagne font-bold no-hyphens">{diamond.certification}</p>
                      </div>
                    </div>

                    <button className="w-full bg-gold text-charcoal py-3 rounded-lg font-lato font-bold uppercase tracking-widest hover:bg-opacity-90 transition no-hyphens">
                      Get Quote
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredDiamonds.length === 0 && (
              <div className="text-center py-16">
                <p className="text-champagne text-xl mb-6 no-hyphens">No diamonds match your filters.</p>
                <button
                  onClick={() => setSelectedFilters({})}
                  className="border border-gold text-gold px-8 py-3 rounded-lg hover:bg-gold hover:text-charcoal transition font-lato font-bold uppercase tracking-widest no-hyphens"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Shop