import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/know-your-diamonds', element: <KnowYourDiamonds /> },
      { path: '/know-your-diamonds/buying-guide', element: <BuyingGuide /> },
      { path: '/know-your-diamonds/four-cs', element: <FourCs /> },
      { path: '/know-your-diamonds/cut-guide', element: <CutGuide /> },
      { path: '/know-your-diamonds/natural-vs-lab', element: <NaturalVsLabGrown /> },
      { path: '/know-your-diamonds/certification', element: <CertificationGuide /> },
      { path: '/know-your-diamonds/shape-guide', element: <ShapeGuide /> },
      { path: '/know-your-diamonds/price-guide', element: <PriceGuide /> },
      { path: '/for-retailers', element: <ForRetailers /> },
      { path: '/our-story', element: <OurStory /> },
      { path: '/blog', element: <Blog /> },
      { path: '/contact', element: <Contact /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/shipping', element: <Shipping /> },
      { path: '/verify-certificate', element: <VerifyCertification /> },
      { path: '/terms', element: <Terms /> },
      { path: '/privacy', element: <Privacy /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
