import { useEffect, useState } from 'react'
import Img from './Img.jsx'

// Crossfading hero. Only the first slide loads up front; the rest mount once the page is idle.
export default function HeroSlider({ slides, interval = 6000 }) {
  const [active, setActive] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!ready || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(t)
  }, [ready, slides.length, interval])

  return (
    <>
      <div className="absolute inset-0 -z-10">
        {slides.map((s, i) =>
          i === 0 || ready ? (
            <div key={s.img} className={`absolute inset-0 transition-opacity duration-[1500ms] ${i === active ? 'opacity-100' : 'opacity-0'}`}>
              <Img
                name={s.img}
                alt={s.alt}
                priority={i === 0}
                className={`h-full w-full object-cover ${i === active ? 'animate-kenburns' : ''}`}
              />
            </div>
          ) : null,
        )}
      </div>
      <div className="absolute bottom-8 right-5 z-10 flex gap-2 md:right-8">
        {slides.map((s, i) => (
          <button
            key={s.img}
            onClick={() => { setReady(true); setActive(i) }}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? 'w-8 bg-white' : 'w-3 bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </>
  )
}
