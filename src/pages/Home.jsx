import { Link } from 'react-router-dom'
import { LuArrowRight, LuCake, LuMessageCircle, LuPalette, LuSparkles, LuWheat, LuHeartHandshake } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import MenuCard from '../components/MenuCard.jsx'
import { business, gallery, images, img, menu, waLink } from '../data.js'

const promises = [
  { Icon: LuWheat, title: 'Baked from Scratch', text: 'Real butter, fresh cream and quality ingredients in every layer.' },
  { Icon: LuPalette, title: 'Designed for You', text: 'Your theme, colours and message — every custom cake is one of a kind.' },
  { Icon: LuHeartHandshake, title: 'Made to Order', text: 'Nothing sits on a shelf. Your order is baked fresh for your date.' },
]

const occasions = [
  { title: 'Birthdays', img: '1621303837174-89787a7d4729' },
  { title: 'Weddings', img: '1562777717-dc6984f65a63' },
  { title: 'Baby Showers', img: '1519869325930-281384150729' },
  { title: 'Celebrations', img: '1627834377411-8da5f4f09de8' },
]

const steps = [
  { Icon: LuCake, title: 'Choose your cake', text: 'Browse the menu or tell us about the custom design you have in mind.' },
  { Icon: LuMessageCircle, title: 'Message us on WhatsApp', text: 'Share your date, size and flavour. We confirm the details and price.' },
  { Icon: LuSparkles, title: 'Enjoy the moment', text: 'Your cake is baked fresh and ready for your celebration.' },
]

export default function Home() {
  const featured = menu.map((c) => c.items[0])

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-cocoa">
        <img
          src={img(images.heroHome, 2200, 1300)}
          alt="Tiered cream cake decorated with fresh berries"
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cocoa/95 via-cocoa/75 to-cocoa/10" />
        <div className="container-x flex min-h-[78vh] flex-col justify-center py-24">
          <p className="eyebrow !text-rose-soft">Custom Cakes &amp; Desserts</p>
          <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl md:text-7xl">
            Cakes made for the moments that matter.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
            Birthday cakes, wedding cakes, cupcakes and desserts — baked fresh to order and finished by hand at {business.name}.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary">
              <FaWhatsapp className="h-5 w-5" /> Order on WhatsApp
            </a>
            <Link to="/menu" className="btn-outline-light">View Menu</Link>
          </div>
          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            <li>Made to Order</li>
            <li aria-hidden>·</li>
            <li>Custom Designs</li>
            <li aria-hidden>·</li>
            <li>Fresh Ingredients</li>
          </ul>
        </div>
      </section>

      {/* Promises */}
      <section className="border-b border-cocoa/10 bg-white">
        <div className="container-x grid gap-10 py-16 md:grid-cols-3">
          {promises.map((p) => (
            <div key={p.title} className="flex gap-5">
              <p.Icon className="h-8 w-8 shrink-0 text-rose" strokeWidth={1.5} />
              <div>
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa-light">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Occasions */}
      <section className="container-x py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Every Occasion</p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl">A cake for every celebration</h2>
          <p className="mt-4 text-cocoa-light">From intimate birthdays to wedding receptions, we bake cakes that look as good as they taste.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {occasions.map((o) => (
            <Link key={o.title} to="/contact" className="group relative block aspect-[3/4] overflow-hidden rounded-xl bg-sand">
              <img src={img(o.img, 600, 800)} alt={`${o.title} cake`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-cocoa/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-2xl font-semibold text-white md:text-3xl">{o.title}</h3>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/80 group-hover:text-white">
                  Enquire <LuArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-sand/60 py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">From Our Menu</p>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Customer favourites</h2>
            </div>
            <Link to="/menu" className="btn-outline">
              Full Menu <LuArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => <MenuCard key={item.name} item={item} />)}
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="container-x py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Ordering is simple</h2>
        </div>
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-soft text-rose">
                <s.Icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Step {i + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-cocoa-light">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Gallery */}
      <section className="bg-white py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Fresh from our kitchen</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {gallery.map((g) => (
              <div key={g.id} className="aspect-square overflow-hidden rounded-xl bg-sand">
                <img src={img(g.id, 600, 600)} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-cocoa">
        <img src={img(images.ctaBand, 2000, 800)} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-cocoa/80" />
        <div className="container-x py-24 text-center">
          <p className="eyebrow !text-rose-soft">Planning a Celebration?</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold text-white md:text-5xl">Let's create your perfect cake</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">Send us your date and ideas on WhatsApp and we'll take care of the rest.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary">
              <FaWhatsapp className="h-5 w-5" /> {business.phone}
            </a>
            <Link to="/contact" className="btn-outline-light">Order Form</Link>
          </div>
        </div>
      </section>
    </>
  )
}
