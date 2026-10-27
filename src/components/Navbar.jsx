import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { LuMenu, LuX } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import Logo from './Logo.jsx'
import { waLink } from '../data.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Order' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold uppercase tracking-[0.14em] transition-colors ${isActive ? 'text-rose' : 'text-cocoa hover:text-rose'}`

  return (
    <header className="sticky top-0 z-50 border-b border-cocoa/10 bg-cream/95 backdrop-blur">
      <nav className="container-x flex items-center justify-between py-4">
        <Logo />

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end className={linkClass}>{l.label}</NavLink>
            </li>
          ))}
          <li>
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary !px-5 !py-2.5">
              <FaWhatsapp className="h-4 w-4" /> Order on WhatsApp
            </a>
          </li>
        </ul>

        <button
          className="rounded p-2 text-cocoa md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cocoa/10 md:hidden">
          <ul className="container-x flex flex-col gap-5 py-6">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end className={linkClass}>{l.label}</NavLink>
              </li>
            ))}
            <li>
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary w-full">
                <FaWhatsapp className="h-4 w-4" /> Order on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
