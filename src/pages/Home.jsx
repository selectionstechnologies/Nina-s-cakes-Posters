import { Link } from 'react-router-dom'
import MenuCard from '../components/MenuCard.jsx'
import { LuArrowRight, LuCookie, LuPartyPopper, LuPhone, LuTruck } from 'react-icons/lu'
import { FaStar } from 'react-icons/fa6'
import { business, menu, testimonials } from '../data.js'

const features = [
  { Icon: LuCookie, title: 'Baked Fresh', text: 'Every batch of tea cakes is made from scratch with real butter and lemon.' },
  { Icon: LuPartyPopper, title: 'We Cater', text: 'Parties, offices, church events and celebrations — order by the dozen.' },
  { Icon: LuTruck, title: 'Deliver & Ship', text: 'Local delivery available, and we ship our tea cakes to your door.' },
]

export default function Home() {
  const featured = menu.flatMap((c) => c.items).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1800&q=70"
          alt="Teacake Chef"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mocha-dark/90 to-mocha-dark/40" />
        <div className="relative mx-auto max-w-6xl px-4 py-28 md:py-40">
          <p className="font-medium uppercase tracking-widest text-blush">Welcome to</p>
          <h1 className="mt-3 max-w-2xl font-serif text-5xl font-bold leading-tight text-white md:text-6xl">
            {business.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-stone-200">{business.tagline}. {business.services}.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/menu" className="rounded-full bg-blush px-7 py-3 font-semibold text-mocha-dark hover:bg-white">View Menu</Link>
            <a href={`tel:${business.phone}`} className="inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3 font-semibold text-white hover:bg-white hover:text-mocha-dark">
              <LuPhone className="h-5 w-5" /> Call Now
            </a>          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-20 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-stone-200">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blush/20 text-mocha">
              <f.Icon className="h-8 w-8" />
            </div>
            <h3 className="mt-4 font-serif text-xl font-semibold text-mocha-dark">{f.title}</h3>
            <p className="mt-2 text-stone-600">{f.text}</p>
          </div>
        ))}
      </section>

      {/* Featured */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-mocha-dark">Customer Favourites</h2>
            <p className="mt-3 text-stone-600">A taste of what's waiting for you.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => <MenuCard key={item.name} item={item} />)}
          </div>
          <div className="mt-12 text-center">
            <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-mocha px-7 py-3 font-semibold text-white hover:bg-mocha-dark">
              See Full Menu <LuArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center font-serif text-4xl font-bold text-mocha-dark">What Our Guests Say</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-blush/15 p-8">
              <div className="flex gap-1 text-amber-500" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="h-4 w-4" />)}
              </div>
              <blockquote className="mt-4 italic text-stone-700">“{t.text}”</blockquote>
              <figcaption className="mt-4 font-semibold text-mocha-dark">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mocha py-16 text-center text-white">
        <h2 className="font-serif text-3xl font-bold md:text-4xl">Planning an event?</h2>
        <p className="mx-auto mt-3 max-w-xl px-4 text-stone-200">{business.services}. Call us to place your order.</p>
        <a href={`tel:${business.phone}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-mocha-dark hover:bg-blush">
          <LuPhone className="h-5 w-5" /> Call {business.phone}
        </a>
      </section>
    </>
  )
}
