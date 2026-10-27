import { useState } from 'react'
import { LuPhone } from 'react-icons/lu'
import PageHeader from '../components/PageHeader.jsx'
import { business } from '../data.js'

const empty = { name: '', email: '', phone: '', date: '', guests: '2', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm(empty)
  }

  const input = 'w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 outline-none focus:border-mocha focus:ring-2 focus:ring-mocha/20'

  return (
    <>
      <PageHeader title="Contact & Orders" subtitle="Order by the dozen, book catering for your event, or just say hello." />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-5">
        <form onSubmit={submit} className="space-y-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-200 lg:col-span-3">
          <h2 className="font-serif text-2xl font-bold text-mocha-dark">Send us a message</h2>
          {sent && (
            <p className="rounded-lg bg-sage/20 px-4 py-3 text-sm font-medium text-stone-700">
              Thank you! We've received your message and will get back to you shortly.
            </p>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            <input required name="name" value={form.name} onChange={update} placeholder="Your name *" className={input} />
            <input required type="email" name="email" value={form.email} onChange={update} placeholder="Email address *" className={input} />
            <input name="phone" value={form.phone} onChange={update} placeholder="Phone number" className={input} />
            <input type="date" name="date" value={form.date} onChange={update} className={input} />
          </div>
          <select name="guests" value={form.guests} onChange={update} className={input}>
            {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => <option key={n} value={n}>{n} dozen</option>)}
          </select>
          <textarea required name="message" rows="5" value={form.message} onChange={update} placeholder="Your message *" className={input} />
          <button type="submit" className="w-full rounded-full bg-mocha py-3 font-semibold text-white hover:bg-mocha-dark">Send Message</button>
        </form>

        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <h3 className="font-serif text-xl font-semibold text-mocha-dark">Call to Order</h3>
            <a href={`tel:${business.phone}`} className="mt-4 flex items-center gap-3 text-2xl font-bold text-mocha hover:text-mocha-dark">
              <LuPhone className="h-6 w-6" /> {business.phone}
            </a>
            <p className="mt-3 text-stone-600">{business.services}.</p>
            <a href={`tel:${business.phone}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-mocha px-5 py-2.5 font-semibold text-white hover:bg-mocha-dark">
              <LuPhone className="h-4 w-4" /> Call Now
            </a>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <h3 className="font-serif text-xl font-semibold text-mocha-dark">Follow Us {business.social}</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {business.socialLinks.map(({ label, url, Icon }) => (
                <li key={label}>
                  <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blush/20 px-4 py-2 text-sm font-medium text-mocha-dark hover:bg-blush/40">
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
