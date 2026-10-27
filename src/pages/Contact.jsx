import { useState } from 'react'
import { LuChevronDown, LuPhone } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import PageHeader from '../components/PageHeader.jsx'
import { business, images, menu, waLink } from '../data.js'

const LEAD_DAYS = 3
const minDate = () => {
  const d = new Date()
  d.setDate(d.getDate() + LEAD_DAYS)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const occasions = ['Birthday', 'Wedding', 'Baby Shower', 'Anniversary', 'Graduation', 'Corporate Event', 'Other']
const products = [...menu.flatMap((c) => c.items.map((i) => i.name)), 'Something else']
const empty = { name: '', phone: '', occasion: '', product: '', size: '', flavour: '', date: '', fulfilment: 'Pickup', notes: '' }

const faqs = [
  { q: 'How far in advance should I order?', a: `Please order at least ${LEAD_DAYS} days ahead. For wedding and tiered cakes, contact us as early as possible to secure your date.` },
  { q: 'Can you recreate a design from a photo?', a: 'Yes — send us your inspiration photo on WhatsApp and we will suggest the best size, flavours and price.' },
  { q: 'Do you cater for allergies?', a: 'Please tell us about any allergies when ordering so we can advise on what is suitable for you.' },
  { q: 'How do I confirm my order?', a: 'Once we agree on the details over WhatsApp, we will confirm the final price and your order date.' },
]

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const lines = [
      `Hi ${business.name}! I'd like to place an order.`,
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Occasion: ${form.occasion}`,
      `Cake / item: ${form.product}`,
      form.size && `Size / servings: ${form.size}`,
      form.flavour && `Flavour: ${form.flavour}`,
      `Date needed: ${form.date}`,
      `Pickup or delivery: ${form.fulfilment}`,
      form.notes && `Design notes: ${form.notes}`,
    ].filter((l) => l !== false && l !== '')
    window.open(waLink(lines.join('\n')), '_blank', 'noopener')
    setSent(true)
  }

  const field = 'w-full rounded-lg border border-cocoa/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-rose focus:ring-2 focus:ring-rose/20'
  const label = 'mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-cocoa'

  return (
    <>
      <PageHeader
        eyebrow="Order a Cake"
        title="Let's Bake Something Special"
        subtitle="Fill in the order form and it opens straight in WhatsApp — or message us directly."
        image={images.heroContact}
      />

      <section className="container-x grid gap-12 py-20 lg:grid-cols-5">
        <form onSubmit={submit} className="rounded-xl bg-white p-6 ring-1 ring-cocoa/10 sm:p-10 lg:col-span-3">
          <h2 className="text-3xl font-semibold md:text-4xl">Order request</h2>
          <p className="mt-2 text-sm text-cocoa-light">Fields marked * are required. We'll reply on WhatsApp to confirm details and price.</p>

          {sent && (
            <p role="status" className="mt-6 rounded-lg bg-whatsapp/10 px-4 py-3 text-sm font-medium text-cocoa">
              WhatsApp has opened with your order details — just press send. If it didn't open, message us at {business.phone}.
            </p>
          )}

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={label}>Your name *</label>
              <input id="name" required name="name" value={form.name} onChange={update} autoComplete="name" className={field} />
            </div>
            <div>
              <label htmlFor="phone" className={label}>Phone *</label>
              <input id="phone" required type="tel" name="phone" value={form.phone} onChange={update} autoComplete="tel" className={field} />
            </div>
            <div>
              <label htmlFor="occasion" className={label}>Occasion *</label>
              <select id="occasion" required name="occasion" value={form.occasion} onChange={update} className={field}>
                <option value="" disabled>Select occasion</option>
                {occasions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="product" className={label}>Cake / item *</label>
              <select id="product" required name="product" value={form.product} onChange={update} className={field}>
                <option value="" disabled>Select an item</option>
                {products.map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="size" className={label}>Size / servings</label>
              <input id="size" name="size" value={form.size} onChange={update} placeholder="e.g. 20 guests or 2 dozen" className={field} />
            </div>
            <div>
              <label htmlFor="flavour" className={label}>Flavour</label>
              <input id="flavour" name="flavour" value={form.flavour} onChange={update} placeholder="e.g. Vanilla with strawberry" className={field} />
            </div>
            <div>
              <label htmlFor="date" className={label}>Date needed *</label>
              <input id="date" required type="date" min={minDate()} name="date" value={form.date} onChange={update} className={field} />
            </div>
            <fieldset>
              <legend className={label}>Pickup or delivery *</legend>
              <div className="flex gap-3">
                {['Pickup', 'Delivery'].map((f) => (
                  <label key={f} className={`flex flex-1 cursor-pointer items-center justify-center rounded-lg border px-4 py-3 text-sm font-medium transition ${form.fulfilment === f ? 'border-rose bg-rose-soft/50 text-cocoa' : 'border-cocoa/15 text-cocoa-light'}`}>
                    <input type="radio" name="fulfilment" value={f} checked={form.fulfilment === f} onChange={update} className="sr-only" />
                    {f}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="mt-5">
            <label htmlFor="notes" className={label}>Design notes</label>
            <textarea id="notes" name="notes" rows="4" value={form.notes} onChange={update} placeholder="Theme, colours, message on the cake, allergies…" className={field} />
          </div>
          <button type="submit" className="btn mt-8 w-full bg-whatsapp text-white hover:brightness-95">
            <FaWhatsapp className="h-5 w-5" /> Send Order on WhatsApp
          </button>
        </form>

        <aside className="space-y-6 lg:col-span-2">
          <div className="rounded-xl bg-cocoa p-8 text-white">
            <p className="eyebrow !text-rose-soft">Quickest Way</p>
            <h3 className="mt-3 text-3xl font-semibold">Chat on WhatsApp</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75">Send photos of your dream cake and get a quick reply from the baker.</p>
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn mt-6 w-full bg-whatsapp text-white hover:brightness-95">
              <FaWhatsapp className="h-5 w-5" /> {business.phone}
            </a>
            <a href={`tel:${business.phone}`} className="mt-4 flex items-center justify-center gap-2 text-sm text-white/75 hover:text-white">
              <LuPhone className="h-4 w-4" /> Or call {business.phone}
            </a>
          </div>

          <div className="rounded-xl bg-white p-8 ring-1 ring-cocoa/10">
            <h3 className="text-2xl font-semibold">Good to know</h3>
            <div className="mt-4 divide-y divide-cocoa/10">
              {faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                    {f.q}
                    <LuChevronDown className="h-4 w-4 shrink-0 text-rose transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-cocoa-light">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}
