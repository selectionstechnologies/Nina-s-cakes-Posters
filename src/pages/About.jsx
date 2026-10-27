import { Link } from 'react-router-dom'
import { LuCookie, LuHeart, LuTag, LuTruck } from 'react-icons/lu'
import PageHeader from '../components/PageHeader.jsx'

const stats = [
  { Icon: LuCookie, value: '5', label: 'Flavours' },
  { Icon: LuTag, value: '$10', label: 'Per Dozen' },
  { Icon: LuTruck, value: 'Ship', label: 'Deliver & Cater' },
  { Icon: LuHeart, value: '100%', label: 'Homemade' },
]

const values = [
  { title: 'Quality Ingredients', text: 'Free-range eggs, real butter and locally milled flour in everything we bake.' },
  { title: 'Community First', text: 'We partner with local farms and host monthly community tea mornings.' },
  { title: 'Made With Love', text: 'Family recipes passed down through generations, baked with care.' },
]

export default function About() {
  return (
    <>
      <PageHeader title="Our Story" subtitle="From a small family kitchen to your favourite homemade tea cakes." />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1000&q=70"
          alt="Baker preparing cakes"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
        />
        <div>
          <h2 className="font-serif text-3xl font-bold text-mocha-dark">Baked with tradition</h2>
          <p className="mt-4 leading-relaxed text-stone-600">
            Teacake Chef began with a simple dream: to share our grandmother's beloved cake recipes with the world.
            What started as weekend bake sales grew into a business baking old-fashioned tea cakes by the dozen.
          </p>
          <p className="mt-4 leading-relaxed text-stone-600">
            Today we bake classic lemon, almond, pecan, chocolate chip and peanut butter tea cakes — and we cater,
            deliver and ship them so you can share them with the people you love.
          </p>
          <Link to="/menu" className="mt-6 inline-block rounded-full bg-mocha px-6 py-3 font-semibold text-white hover:bg-mocha-dark">Explore Our Menu</Link>
        </div>
      </section>

      <section className="bg-mocha py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <s.Icon className="mx-auto mb-2 h-7 w-7 text-blush" />
              <div className="font-serif text-4xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-stone-200">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center font-serif text-3xl font-bold text-mocha-dark">What We Believe In</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border-t-4 border-blush bg-white p-8 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-mocha-dark">{v.title}</h3>
              <p className="mt-3 text-stone-600">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
