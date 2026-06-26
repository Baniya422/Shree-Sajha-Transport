export default function ServiceCard({ service }) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-950">{service.title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
    </article>
  )
}
