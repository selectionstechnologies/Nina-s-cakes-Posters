import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, text, center = false, light = false }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className={`eyebrow ${light ? '!text-berry-soft' : ''}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-4xl font-semibold leading-tight md:text-5xl ${light ? 'text-white' : ''}`}>{title}</h2>
      {center && <span className="mx-auto mt-5 block h-px w-16 bg-gold" />}
      {text && <p className={`mt-5 leading-relaxed ${light ? 'text-white/80' : 'text-chocolate-light'}`}>{text}</p>}
    </Reveal>
  )
}
