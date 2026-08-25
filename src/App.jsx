import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import DiamondPreloader from './components/DiamondPreloader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Shop from './pages/Shop'
import KnowYourDiamonds from './pages/KnowYourDiamonds'
import BuyingGuide from './pages/KnowYourDiamonds/BuyingGuide'
import FourCs from './pages/KnowYourDiamonds/FourCs'
import CutGuide from './pages/KnowYourDiamonds/CutGuide'
import NaturalVsLabGrown from './pages/KnowYourDiamonds/NaturalVsLabGrown'
import CertificationGuide from './pages/KnowYourDiamonds/CertificationGuide'
import ShapeGuide from './pages/KnowYourDiamonds/ShapeGuide'
import PriceGuide from './pages/KnowYourDiamonds/PriceGuide'
import ForRetailers from './pages/ForRetailers'
import OurStory from './pages/OurStory'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Shipping from './pages/Shipping'
import VerifyCertification from './pages/VerifyCertification'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Preloader runs for 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <DiamondPreloader />
  }

  return (
    <Router>
      <div className="min-h-screen bg-charcoal text-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/know-your-diamonds" element={<KnowYourDiamonds />} />
            <Route path="/know-your-diamonds/buying-guide" element={<BuyingGuide />} />
            <Route path="/know-your-diamonds/four-cs" element={<FourCs />} />
            <Route path="/know-your-diamonds/cut-guide" element={<CutGuide />} />
            <Route path="/know-your-diamonds/natural-vs-lab" element={<NaturalVsLabGrown />} />
            <Route path="/know-your-diamonds/certification" element={<CertificationGuide />} />
            <Route path="/know-your-diamonds/shape-guide" element={<ShapeGuide />} />
            <Route path="/know-your-diamonds/price-guide" element={<PriceGuide />} />
            <Route path="/for-retailers" element={<ForRetailers />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/verify-certification" element={<VerifyCertification />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App