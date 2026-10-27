import { Link } from 'react-router-dom'
import { img } from '../data.js'

export default function PageHeader({ eyebrow, title, subtitle, image, position = 'center' }) {
  return (
    <section className="relative isolate overflow-hidden bg-cocoa">
      <img
        src={img(image, 2000, 900)}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cocoa/90 via-cocoa/70 to-cocoa/30" />
      <div className="container-x py-24 md:py-32">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{title}</span>
        </nav>
        {eyebrow && <p className="eyebrow !text-rose-soft">{eyebrow}</p>}
        <h1 className="mt-3 max-w-2xl text-5xl font-semibold leading-[1.05] text-white md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">{subtitle}</p>}
      </div>
    </section>
  )
}
