import { companyInfo } from '../../data/companyInfo.js'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${companyInfo.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_-16px_rgba(15,23,42,0.95)] transition hover:bg-amber-600"
      aria-label="Contact Shree Sajha Transport on WhatsApp"
    >
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      WhatsApp
    </a>
  )
}
