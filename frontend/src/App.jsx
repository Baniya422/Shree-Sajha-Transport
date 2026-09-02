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
import ForgotPassword from './pages/auth/ForgotPassword.jsx'
import ResetPassword from './pages/auth/ResetPassword.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import Bookings from './pages/admin/Bookings.jsx'
import BookingDetails from './pages/admin/BookingDetails.jsx'
import Contacts from './pages/admin/Contacts.jsx'
import Estimates from './pages/admin/Estimates.jsx'
import AdminTracking from './pages/admin/Tracking.jsx'
import Branches from './pages/admin/Branches.jsx'
import Reports from './pages/admin/Reports.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/bookings" element={<Bookings />} />
        <Route path="/admin/bookings/:id" element={<BookingDetails />} />
        <Route path="/admin/contacts" element={<Contacts />} />
        <Route path="/admin/estimates" element={<Estimates />} />
        <Route path="/admin/tracking" element={<AdminTracking />} />
        <Route path="/admin/branches" element={<Branches />} />
        <Route path="/admin/reports" element={<Reports />} />
      </Routes>
      <Toaster position="top-right" toastOptions={{ duration: 3500 }} />
    </>
  )
}
