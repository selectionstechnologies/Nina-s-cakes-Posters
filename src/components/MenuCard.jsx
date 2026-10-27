import { FaWhatsapp } from 'react-icons/fa6'
import { img, waLink } from '../data.js'

export default function MenuCard({ item }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-cocoa/10 transition hover:shadow-xl hover:shadow-cocoa/10">
      <div className="aspect-[4/3] overflow-hidden bg-sand">
        <img src={img(item.img, 700, 525)} alt={item.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold leading-tight">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-cocoa-light">{item.desc}</p>
        <div className="mt-5 flex items-end justify-between border-t border-cocoa/10 pt-4">
          <div>
            <div className="font-semibold text-rose">{item.price}</div>
            <div className="text-xs text-cocoa-light">{item.unit}</div>
          </div>
          <a
            href={waLink(`Hi Nina Cakes! I'd like to order: ${item.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-cocoa hover:text-rose"
          >
            <FaWhatsapp className="h-4 w-4" /> Order
          </a>
        </div>
      </div>
    </article>
  )
}
