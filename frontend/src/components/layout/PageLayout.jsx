import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import WhatsAppButton from '../common/WhatsAppButton.jsx'

export default function PageLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
