export default function ServiceCard({ service }) {
  return (
    <article className="group rounded-[1.5rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.45)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-34px_rgba(15,23,42,0.55)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white transition group-hover:bg-amber-600">
        0{service.index || 1}
      </div>
      <h2 className="mt-4 text-lg font-semibold text-slate-950">{service.title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
    </article>
  )
}
