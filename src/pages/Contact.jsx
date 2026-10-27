import { useState } from 'react'
import { LuCheck, LuChevronDown, LuPhone } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { business, faqs, menu, waLink } from '../data.js'

const LEAD_DAYS = 3
const minDate = () => {
  const d = new Date()
  d.setDate(d.getDate() + LEAD_DAYS)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const occasions = ['Birthday', 'Wedding', 'Baby Shower', 'Anniversary', 'Graduation', 'Corporate Event', 'Other']
const products = [...menu.flatMap((c) => c.items.map((i) => i.name)), 'Something else']
const empty = { name: '', phone: '', occasion: '', product: '', size: '', flavour: '', date: '', fulfilment: 'Pickup', notes: '' }
const checklist = ['Event date & time', 'Number of guests', 'Flavour & filling', 'Inspiration photo', 'Message on the cake', 'Any allergies']

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

  const field = 'w-full rounded-lg border border-chocolate/15 bg-cream/60 px-4 py-3 text-sm outline-none transition focus:border-berry focus:bg-white focus:ring-2 focus:ring-berry/20'
  const label = 'mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-chocolate'

  return (
    <>
      <PageHeader
        crumb="Order"
        eyebrow="Order a Cake"
        title="Let's bake your"
        typed={['birthday cake.', 'wedding cake.', 'cupcakes.', 'dream dessert.']}
        subtitle="Fill in the order form and it opens straight in WhatsApp — or message us directly."
        image="hero-contact"
      />

      <section className="container-x grid gap-10 py-20 lg:grid-cols-5">
        <Reveal as="form" onSubmit={submit} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-chocolate/8 sm:p-10 lg:col-span-3">
          <h2 className="text-4xl font-semibold">Order request</h2>
          <p className="mt-2 text-sm text-chocolate-light">Fields marked * are required. We'll reply on WhatsApp to confirm details and price.</p>

          {sent && (
            <p role="status" className="mt-6 rounded-lg bg-whatsapp/10 px-4 py-3 text-sm font-medium">
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
                  <label key={f} className={`flex flex-1 cursor-pointer items-center justify-center rounded-lg border px-4 py-3 text-sm font-semibold transition ${form.fulfilment === f ? 'border-berry bg-berry-soft/50 text-berry-dark' : 'border-chocolate/15 text-chocolate-light hover:border-berry/50'}`}>
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
          <button type="submit" className="btn mt-8 w-full bg-whatsapp text-white shadow-lg shadow-whatsapp/25 hover:brightness-95">
            <FaWhatsapp className="h-5 w-5" /> Send Order on WhatsApp
          </button>
        </Reveal>

        <aside className="space-y-6 lg:col-span-2">
          <Reveal delay={100} className="rounded-2xl bg-chocolate p-8 text-white">
            <p className="eyebrow !text-berry-soft">Quickest Way</p>
            <h3 className="mt-3 text-3xl font-semibold">Chat on WhatsApp</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75">Send photos of your dream cake and get a quick reply from the baker.</p>
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn mt-6 w-full bg-whatsapp text-white hover:brightness-95">
              <FaWhatsapp className="h-5 w-5" /> {business.phone}
            </a>
            <a href={`tel:${business.phone}`} className="mt-4 flex items-center justify-center gap-2 text-sm text-white/75 hover:text-white">
              <LuPhone className="h-4 w-4" /> Or call {business.phone}
            </a>
          </Reveal>

          <Reveal delay={200} className="rounded-2xl bg-blush p-8">
            <h3 className="text-2xl font-semibold">What to include</h3>
            <p className="mt-2 text-sm text-chocolate-light">Sharing these details helps us quote faster.</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {checklist.map((c) => (
                <li key={c} className="flex items-start gap-2"><LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-berry" />{c}</li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </section>

      <section className="bg-white py-24">
        <div className="container-x max-w-3xl">
          <SectionHeading center eyebrow="FAQ" title="Good to know" />
          <Reveal className="mt-12 divide-y divide-chocolate/10 rounded-2xl ring-1 ring-chocolate/10">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blush text-berry transition group-open:rotate-180 group-open:bg-berry group-open:text-white">
                    <LuChevronDown className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-3 pr-10 text-sm leading-relaxed text-chocolate-light">{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
