import { Link } from 'react-router-dom'
import Img from './Img.jsx'
import Typewriter from './Typewriter.jsx'

export default function PageHeader({ crumb, eyebrow, title, typed, subtitle, image, position = 'center', children }) {
  return (
    <section className="relative isolate overflow-hidden bg-chocolate">
      <Img
        name={image}
        priority
        className="absolute inset-0 -z-10 h-full w-full animate-kenburns object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-chocolate/95 via-chocolate/75 to-chocolate/25" />
      <div className="container-x py-24 md:py-32">
        <nav aria-label="Breadcrumb" className="animate-fade-up text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{crumb}</span>
        </nav>
        {eyebrow && <p className="eyebrow mt-6 animate-fade-up !text-berry-soft [animation-delay:100ms]">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl animate-fade-up text-[2.6rem] font-semibold leading-[1.05] text-white [animation-delay:200ms] sm:text-6xl">
          {title}
          {typed && (
            <>
              <br />
              <Typewriter words={typed} className="italic text-berry-soft" />
            </>
          )}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-white/85 [animation-delay:300ms] md:text-lg">{subtitle}</p>
        )}
        {children && <div className="mt-9 animate-fade-up [animation-delay:400ms]">{children}</div>}
      </div>
    </section>
  )
}
