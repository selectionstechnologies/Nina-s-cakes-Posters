import { Link } from 'react-router-dom'
import { business } from '../data.js'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="group inline-flex flex-col leading-none" aria-label={`${business.name} home`}>
      <span className={`font-serif text-[1.75rem] font-semibold tracking-tight ${light ? 'text-white' : 'text-cocoa'}`}>
        {business.name}
      </span>
      <span className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.35em] ${light ? 'text-rose-soft' : 'text-rose'}`}>
        Cakes &amp; Desserts
      </span>
    </Link>
  )
}
