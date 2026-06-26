import { companyInfo } from '../../data/companyInfo.js'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${companyInfo.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-red-600"
      aria-label="Contact Shree Sajha Transport on WhatsApp"
    >
      WhatsApp
    </a>
  )
}
