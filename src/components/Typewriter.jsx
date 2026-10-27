import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Types and deletes each word in turn. The longest word reserves the space so nothing jumps.
export default function Typewriter({ words, className = '', typeSpeed = 80, deleteSpeed = 45, pause = 1800 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const word = words[index % words.length]
    let delay = deleting ? deleteSpeed : typeSpeed
    if (!deleting && text === word) delay = pause

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => i + 1)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), '')

  return (
    <span className={`inline-grid ${className}`}>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden className="invisible col-start-1 row-start-1 whitespace-nowrap">{longest}</span>
      <span aria-hidden className="col-start-1 row-start-1 whitespace-nowrap">
        {text}
        <span className="ml-0.5 inline-block w-[3px] animate-blink self-stretch bg-current align-[-0.1em]" style={{ height: '0.9em' }} />
      </span>
    </span>
  )
}
