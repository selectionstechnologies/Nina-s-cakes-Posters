import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import MenuCard from '../components/MenuCard.jsx'
import { menu } from '../data.js'

export default function Menu() {
  const [active, setActive] = useState('All')
  const categories = ['All', ...menu.map((c) => c.category)]
  const shown = active === 'All' ? menu : menu.filter((c) => c.category === active)

  return (
    <>
      <PageHeader title="Our Menu" subtitle="Freshly baked treats and carefully brewed teas, made with love every day." />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 font-medium transition ${
                active === c ? 'bg-mocha text-white' : 'bg-white text-stone-700 ring-1 ring-stone-300 hover:ring-mocha'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {shown.map((cat) => (
          <div key={cat.category} className="mt-14">
            <h2 className="font-serif text-3xl font-bold text-mocha-dark">{cat.category}</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {cat.items.map((item) => <MenuCard key={item.name} item={item} />)}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
