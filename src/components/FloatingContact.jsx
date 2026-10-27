import { LuPhone } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import { business, waLink } from '../data.js'

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      <a
        href={`tel:${business.phone}`}
        aria-label={`Call ${business.phone}`}
        title={`Call ${business.phone}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-berry text-white shadow-lg shadow-black/20 transition hover:scale-110 hover:bg-berry-dark"
      >
        <LuPhone className="h-5 w-5" />
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition hover:scale-110"
      >
        <span aria-hidden className="absolute inset-0 animate-ping-slow rounded-full bg-whatsapp/60" />
        <FaWhatsapp className="relative h-7 w-7" />
      </a>
    </div>
  )
}
