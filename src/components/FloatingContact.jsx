import { LuPhone } from 'react-icons/lu'
import { business } from '../data.js'

export default function FloatingContact() {
  return (
    <a
      href={`tel:${business.phone}`}
      aria-label="Call now"
      title="Call now"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-mocha text-white shadow-lg transition hover:scale-110"
    >
      <LuPhone className="h-6 w-6" />
    </a>
  )
}
