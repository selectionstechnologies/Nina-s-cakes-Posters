import { Link } from 'react-router-dom'
import { LuCake, LuCakeSlice, LuCookie, LuDessert, LuFlower2, LuHeart } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import Img from '../components/Img.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { business, steps, waLink } from '../data.js'

const values = [
  { title: 'Quality First', text: 'Real butter, fresh cream, quality chocolate and seasonal fruit — no shortcuts, ever.' },
  { title: 'Personal Service', text: 'You talk directly with the baker, from the first idea to the final detail.' },
  { title: 'Made with Care', text: 'Each cake is baked, filled and decorated by hand for your celebration.' },
]

const bakes = [
  { Icon: LuCake, label: 'Celebration Cakes' },
  { Icon: LuFlower2, label: 'Wedding Cakes' },
  { Icon: LuDessert, label: 'Cupcakes' },
  { Icon: LuCakeSlice, label: 'Cheesecakes' },
  { Icon: LuCookie, label: 'Macarons & Treats' },
  { Icon: LuHeart, label: 'Custom Designs' },
]

export default function About() {
  return (
    <>
      <PageHeader
        crumb="About"
        eyebrow="Our Story"
        title="Baked with love for"
        typed={['your celebrations.', 'your family.', 'sweet moments.', 'happy guests.']}
        subtitle="A home of handcrafted cakes and desserts, made with care for life's sweetest moments."
        image="hero-about"
      />

      <section className="container-x grid items-center gap-14 py-24 lg:grid-cols-2">
        <Reveal className="relative">
          <Img name="story" alt="Raspberry cream cake" sizes="(min-width: 1024px) 540px, 100vw" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl sm:w-4/5" />
          <div className="absolute -bottom-8 right-0 hidden w-2/5 overflow-hidden rounded-2xl border-8 border-cream shadow-xl sm:block">
            <Img name="story-2" alt="Strawberry cupcakes" sizes="220px" className="aspect-[3/4] w-full object-cover" />
          </div>
        </Reveal>
        <div>
          <SectionHeading eyebrow="Baked by Hand" title="Every cake tells your story" />
          <Reveal delay={100}>
            <p className="mt-6 leading-relaxed text-chocolate-light">
              {business.name} was built on a simple love of baking — and of the people we bake for. Birthdays, weddings,
              baby showers and family gatherings all deserve a cake that feels personal, and that's exactly what we make.
            </p>
            <p className="mt-4 leading-relaxed text-chocolate-light">
              Every order is baked fresh from scratch: rich chocolate fudge cakes, fluffy cupcakes, creamy cheesecakes,
              delicate macarons and more. Tell us your theme and we'll design something you and your guests will remember.
            </p>
            <blockquote className="mt-8 border-l-2 border-gold pl-5 font-serif text-2xl italic leading-snug text-chocolate">
              "A cake isn't just dessert — it's the centrepiece of a memory."
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/menu" className="btn-dark">Explore the Menu</Link>
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-outline">
                <FaWhatsapp className="h-4 w-4" /> Chat with Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-x">
          <SectionHeading center eyebrow="What We Believe" title="The Nina Cakes promise" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120} className="group rounded-2xl bg-blush/60 p-10 transition duration-500 hover:-translate-y-1 hover:bg-chocolate hover:shadow-2xl">
                <span className="font-serif text-5xl font-semibold text-berry/40 transition group-hover:text-gold">0{i + 1}</span>
                <h3 className="mt-4 text-2xl font-semibold transition group-hover:text-white">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-chocolate-light transition group-hover:text-white/75">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading center eyebrow="What We Bake" title="Something sweet for everyone" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {bakes.map(({ Icon, label }, i) => (
            <Reveal key={label} delay={i * 70}>
              <Link to="/menu" className="group flex h-full flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-chocolate/8 transition hover:-translate-y-1 hover:shadow-lg hover:ring-berry-soft">
                <Icon className="h-9 w-9 text-berry transition group-hover:scale-110" strokeWidth={1.4} />
                <span className="text-sm font-semibold">{label}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-chocolate py-24 text-white">
        <div className="container-x">
          <SectionHeading center light eyebrow="Our Process" title="From your idea to your table" />
          <ol className="mx-auto mt-14 max-w-3xl space-y-0">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 100} className="relative flex gap-6 pb-10 last:pb-0">
                {i < steps.length - 1 && <span aria-hidden className="absolute left-6 top-12 h-[calc(100%-3rem)] w-px bg-white/15" />}
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-berry font-serif text-xl font-semibold">{i + 1}</span>
                <div className="pt-1.5">
                  <h3 className="text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-14 text-center">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary">
              <FaWhatsapp className="h-5 w-5" /> Start Your Order
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
