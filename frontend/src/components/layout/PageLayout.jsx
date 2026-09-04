import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import WhatsAppButton from '../common/WhatsAppButton.jsx'
import { Outlet } from 'react-router-dom'

export default function PageLayout({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[linear-gradient(180deg,#fbfaf8_0%,#f3f1eb_100%)] text-slate-700">
      <Navbar />
      <main className="relative flex-1">
        <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-10">
          {children ?? <Outlet />}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
