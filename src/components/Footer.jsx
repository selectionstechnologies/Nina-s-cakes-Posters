import { Link } from 'react-router-dom'
import { LuPhone } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import Logo from './Logo.jsx'
import { business, waLink } from '../data.js'

const pages = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Order a Cake' },
]

export default function Footer() {
  return (
    <footer className="bg-cocoa text-white/75">
      <div className="container-x grid gap-12 py-16 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {business.tagline}. Every order is baked fresh and finished by hand.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {pages.map((p) => (
              <li key={p.to}><Link to={p.to} className="hover:text-white">{p.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Get in Touch</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-white">
                <FaWhatsapp className="h-4 w-4 text-whatsapp" /> WhatsApp {business.phone}
              </a>
            </li>
            <li>
              <a href={`tel:${business.phone}`} className="inline-flex items-center gap-3 hover:text-white">
                <LuPhone className="h-4 w-4" /> Call {business.phone}
              </a>
            </li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-white/55">All orders are made to order. Please let us know about any allergies when ordering.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-x py-5 text-xs text-white/55">© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
