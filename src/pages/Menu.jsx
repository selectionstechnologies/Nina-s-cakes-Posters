import { useState } from 'react'
import { LuCheck } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import PageHeader from '../components/PageHeader.jsx'
import MenuCard from '../components/MenuCard.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { addOns, business, flavours, menu, sizes, waLink } from '../data.js'

export default function Menu() {
  const [active, setActive] = useState('All')
  const categories = ['All', ...menu.map((c) => c.category)]
  const shown = active === 'All' ? menu : menu.filter((c) => c.category === active)

  return (
    <>
      <PageHeader
        crumb="Menu"
        eyebrow="Our Menu"
        title="Freshly baked"
        typed={['celebration cakes.', 'cupcakes.', 'cheesecakes.', 'macarons.', 'dessert tables.']}
        subtitle="Every item is baked to order. Prices are starting prices — final pricing depends on size, flavour and design."
        image="hero-menu"
      />

      <div className="sticky top-[73px] z-30 border-b border-chocolate/10 bg-cream/95 backdrop-blur">
        <div className="container-x flex gap-2 overflow-x-auto py-4 [scrollbar-width:none] md:justify-center" role="tablist" aria-label="Menu categories">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] transition ${
                active === c ? 'bg-berry text-white shadow-md shadow-berry/25' : 'bg-white text-chocolate ring-1 ring-chocolate/15 hover:ring-berry'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="container-x pb-8 pt-4">
        {shown.map((cat) => (
          <div key={cat.category} className="mt-14">
            <Reveal className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl font-semibold">{cat.category}</h2>
                <p className="mt-2 text-chocolate-light">{cat.intro}</p>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">{cat.items.length} items</span>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {cat.items.map((item, i) => (
                <Reveal key={item.name} delay={(i % 3) * 100}><MenuCard item={item} /></Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Sizes & flavours */}
      <section className="mt-16 bg-white py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Size Guide" title="How much cake do I need?" text="Approximate servings for standard party slices. Not sure? Tell us your guest count and we'll recommend a size." />
            <Reveal delay={100} className="mt-8 overflow-hidden rounded-2xl ring-1 ring-chocolate/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-chocolate text-white">
                  <tr><th className="px-5 py-3 font-semibold">Cake size</th><th className="px-5 py-3 font-semibold">Serves</th></tr>
                </thead>
                <tbody>
                  {sizes.map((s, i) => (
                    <tr key={s.size} className={i % 2 ? 'bg-blush/50' : 'bg-white'}>
                      <td className="px-5 py-3.5">{s.size}</td>
                      <td className="px-5 py-3.5 font-semibold text-berry">{s.serves}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
          <div>
            <SectionHeading eyebrow="Flavours" title="Build your cake" />
            <Reveal delay={100} className="mt-8 space-y-7">
              {[['Sponges', flavours.sponges], ['Fillings', flavours.fillings], ['Finishes', flavours.finishes]].map(([label, list]) => (
                <div key={label}>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">{label}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {list.map((f) => <li key={f} className="rounded-full bg-blush px-4 py-2 text-sm">{f}</li>)}
                  </ul>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="container-x py-24">
        <SectionHeading center eyebrow="Finishing Touches" title="Make it extra special" text="Add any of these to your cake — just mention them when you order." />
        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((a, i) => (
            <Reveal as="li" key={a} delay={i * 60} className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-chocolate/8">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-berry-soft text-berry"><LuCheck className="h-4 w-4" /></span>
              <span className="font-medium">{a}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-blush/70">
        <Reveal className="container-x flex flex-col items-center justify-between gap-6 py-16 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-4xl font-semibold">Have a design in mind?</h2>
            <p className="mt-2 text-chocolate-light">Send us a photo or idea and we'll create a custom cake for you.</p>
          </div>
          <a href={waLink(`Hi ${business.name}! I'd like a quote for a custom cake.`)} target="_blank" rel="noreferrer" className="btn-primary shrink-0">
            <FaWhatsapp className="h-5 w-5" /> Request a Quote
          </a>
        </Reveal>
      </section>
    </>
  )
}
