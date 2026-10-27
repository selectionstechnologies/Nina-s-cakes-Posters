import { FaWhatsapp } from 'react-icons/fa6'
import Img from './Img.jsx'
import { business, waLink } from '../data.js'

export default function MenuCard({ item }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-chocolate/8 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-chocolate/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Img
          name={item.img}
          alt={item.name}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        {item.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-berry shadow-sm">
            {item.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold leading-tight">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-chocolate-light">{item.desc}</p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-chocolate/10 pt-4">
          <div>
            <div className="font-serif text-xl font-semibold text-berry">{item.price}</div>
            <div className="text-xs text-chocolate-light">{item.unit}</div>
          </div>
          <a
            href={waLink(`Hi ${business.name}! I'd like to order: ${item.name}.`)}
            target="_blank"
            rel="noreferrer"
            aria-label={`Order ${item.name} on WhatsApp`}
            className="inline-flex items-center gap-1.5 rounded-full bg-berry-soft/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-berry-dark transition hover:bg-berry hover:text-white"
          >
            <FaWhatsapp className="h-4 w-4" /> Order
          </a>
        </div>
      </div>
    </article>
  )
}
