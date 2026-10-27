import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import PageHeader from '../components/PageHeader.jsx'
import MenuCard from '../components/MenuCard.jsx'
import { images, menu, waLink } from '../data.js'

export default function Menu() {
  const [active, setActive] = useState('All')
  const categories = ['All', ...menu.map((c) => c.category)]
  const shown = active === 'All' ? menu : menu.filter((c) => c.category === active)

  return (
    <>
      <PageHeader
        eyebrow="Our Menu"
        title="Cakes & Desserts"
        subtitle="Celebration cakes, cupcakes, cheesecakes and dessert-table favourites — all baked fresh to order."
        image={images.heroMenu}
      />

      <section className="container-x py-16">
        <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Menu categories">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                active === c ? 'bg-cocoa text-white' : 'bg-white text-cocoa ring-1 ring-cocoa/15 hover:ring-cocoa'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {shown.map((cat) => (
          <div key={cat.category} className="mt-16">
            <div className="flex items-center gap-6">
              <h2 className="shrink-0 text-3xl font-semibold md:text-4xl">{cat.category}</h2>
              <span className="h-px flex-1 bg-cocoa/15" />
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {cat.items.map((item) => <MenuCard key={item.name} item={item} />)}
            </div>
          </div>
        ))}

        <p className="mt-14 text-center text-sm text-cocoa-light">
          Prices shown are starting prices. Final pricing depends on size, flavour and design.
        </p>
      </section>

      <section className="bg-sand/60">
        <div className="container-x flex flex-col items-center justify-between gap-6 py-14 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Have a design in mind?</h2>
            <p className="mt-2 text-cocoa-light">Send us a photo or idea and we'll create a custom cake for you.</p>
          </div>
          <a href={waLink("Hi Nina Cakes! I'd like a quote for a custom cake.")} target="_blank" rel="noreferrer" className="btn-primary">
            <FaWhatsapp className="h-5 w-5" /> Request a Quote
          </a>
        </div>
      </section>
    </>
  )
}
