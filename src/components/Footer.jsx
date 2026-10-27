import { Link } from 'react-router-dom'
import { LuChefHat, LuMapPin, LuPhone } from 'react-icons/lu'
import { business } from '../data.js'

export default function Footer() {
  return (
    <footer className="bg-mocha-dark text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="flex items-center gap-2 font-serif text-2xl font-bold text-white">
            <LuChefHat aria-hidden className="h-7 w-7" /> {business.name}
          </h3>
          <p className="mt-3 text-sm">{business.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['Home', 'Menu', 'About', 'Contact'].map((p) => (
              <li key={p}>
                <Link to={p === 'Home' ? '/' : `/${p.toLowerCase()}`} className="hover:text-blush">{p}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Order</h4>
          <p className="text-sm">{business.services}</p>
          <a href={`tel:${business.phone}`} className="mt-2 flex items-center gap-2 text-sm hover:text-blush">
            <LuPhone className="h-4 w-4" /> {business.phone}
          </a>
          <div className="mt-4 flex gap-3">
            {business.socialLinks.map(({ label, url, Icon }) => (
              <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-blush hover:text-mocha-dark">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Find Us</h4>
          <iframe
            title={`${business.name} on Google Maps`}
            src={business.mapEmbed}
            className="h-44 w-full rounded-lg border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a href={business.mapLink} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-2 text-sm hover:text-blush">
            <LuMapPin className="h-4 w-4" /> Get Directions
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  )
}
