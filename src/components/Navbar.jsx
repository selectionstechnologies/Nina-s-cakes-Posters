import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LuChefHat, LuMenu, LuPhone, LuX } from 'react-icons/lu'
import { business } from '../data.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `font-medium transition-colors ${isActive ? 'text-mocha' : 'text-stone-600 hover:text-mocha'}`

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 font-serif text-2xl font-bold text-mocha-dark">
          <LuChefHat aria-hidden className="h-7 w-7" /> {business.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end className={linkClass}>{l.label}</NavLink>
            </li>
          ))}
          <li>
            <a href={`tel:${business.phone}`} className="inline-flex items-center gap-2 rounded-full bg-mocha px-5 py-2 font-medium text-white hover:bg-mocha-dark">
              <LuPhone className="h-4 w-4" /> Call Now
            </a>
          </li>
        </ul>

        <button
          className="rounded p-2 text-mocha-dark md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-stone-200 px-4 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end className={linkClass} onClick={() => setOpen(false)}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
