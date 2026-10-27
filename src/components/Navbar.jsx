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
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative py-1 text-sm font-bold uppercase tracking-[0.14em] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-berry after:transition-transform after:duration-300 ${
      isActive ? 'text-berry after:scale-x-100' : 'text-chocolate after:scale-x-0 hover:text-berry hover:after:scale-x-100'
    }`

  return (
    <header className={`sticky top-0 z-50 border-b bg-cream/95 backdrop-blur transition-shadow duration-300 ${scrolled ? 'border-transparent shadow-lg shadow-chocolate/5' : 'border-chocolate/10'}`}>
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
          className="rounded p-2 text-chocolate md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
        </button>
      </nav>

      <div className={`grid border-t border-chocolate/10 transition-[grid-template-rows] duration-300 md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] border-transparent'}`}>
        <div className="overflow-hidden">
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
      </div>
    </header>
  )
}
