import { FaWhatsapp } from 'react-icons/fa6'
import { waLink } from '../data.js'

export default function FloatingContact() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition hover:scale-110"
    >
      <span aria-hidden className="absolute inset-0 animate-ping-slow rounded-full bg-whatsapp/60" />
      <FaWhatsapp className="relative h-7 w-7" />
    </a>
  )
}
