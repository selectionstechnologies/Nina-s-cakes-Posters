import { Link } from 'react-router-dom'
import { business } from '../data.js'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="group inline-flex flex-col leading-none" aria-label={`${business.name} home`}>
      <span className={`font-serif text-[1.8rem] font-semibold tracking-tight transition-colors ${light ? 'text-white' : 'text-chocolate group-hover:text-berry'}`}>
        Nina <span className={`italic ${light ? 'text-berry-soft' : 'text-berry'}`}>Cakes</span>
      </span>
      <span className={`mt-1 text-[0.6rem] font-bold uppercase tracking-[0.35em] ${light ? 'text-gold' : 'text-gold-dark'}`}>
        Cakes &amp; Desserts
      </span>
    </Link>
  )
}
