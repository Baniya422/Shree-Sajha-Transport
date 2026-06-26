import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'
import Home from './pages/public/Home.jsx'
import About from './pages/public/About.jsx'
import Services from './pages/public/Services.jsx'
import RoutesPage from './pages/public/Routes.jsx'
import Booking from './pages/public/Booking.jsx'
import Estimate from './pages/public/Estimate.jsx'
import Tracking from './pages/public/Tracking.jsx'
import Contact from './pages/public/Contact.jsx'
import NotFound from './pages/public/NotFound.jsx'
import Login from './pages/auth/Login.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'

export default function App() {
  return (
    <PageLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-right" toastOptions={{ duration: 3500 }} />
    </PageLayout>
  )
}
