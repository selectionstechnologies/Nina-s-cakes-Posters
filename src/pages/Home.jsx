import { Link } from 'react-router-dom'
import { LuArrowRight, LuHeartHandshake, LuMessageCircle, LuPalette, LuWheat } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import HeroSlider from '../components/HeroSlider.jsx'
import Img from '../components/Img.jsx'
import MenuCard from '../components/MenuCard.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Typewriter from '../components/Typewriter.jsx'
import { business, flavours, gallery, heroSlides, menu, occasions, promises, steps, waLink } from '../data.js'

const promiseIcons = [LuWheat, LuPalette, LuHeartHandshake, LuMessageCircle]
const featuredNames = ['Chocolate Fudge Cake', 'Strawberry Fraisier', 'Birthday Drip Cake', 'Strawberry Dream', 'Strawberry Cheesecake', 'French Macarons']

export default function Home() {
  const all = menu.flatMap((c) => c.items)
  const featured = featuredNames.map((n) => all.find((i) => i.name === n))

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-chocolate">
        <HeroSlider slides={heroSlides} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-chocolate/95 via-chocolate/70 to-chocolate/10" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-chocolate/60 to-transparent" />
        <div className="container-x flex min-h-[640px] flex-col justify-center py-28 md:min-h-[86vh]">
          <p className="eyebrow animate-fade-up !text-berry-soft">Handcrafted Cakes &amp; Desserts</p>
          <h1 className="mt-5 max-w-3xl animate-fade-up text-[2.75rem] font-semibold leading-[1.02] text-white [animation-delay:120ms] sm:text-6xl md:text-7xl">
            Beautiful cakes for
            <br />
            <Typewriter words={['birthdays.', 'weddings.', 'baby showers.', 'anniversaries.', 'every celebration.']} className="italic text-berry-soft" />
          </h1>
          <p className="mt-7 max-w-lg animate-fade-up text-base leading-relaxed text-white/85 [animation-delay:240ms] md:text-lg">
            Custom celebration cakes, cupcakes, cheesecakes and desserts — baked fresh to order and finished by hand at {business.name}.
          </p>
          <div className="mt-10 flex animate-fade-up flex-wrap gap-4 [animation-delay:360ms]">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary">
              <FaWhatsapp className="h-5 w-5" /> Order on WhatsApp
            </a>
            <Link to="/menu" className="btn-outline-light">Explore the Menu</Link>
          </div>
          <ul className="mt-14 flex animate-fade-up flex-wrap gap-x-6 gap-y-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/70 [animation-delay:480ms]">
            {['Made to Order', 'Custom Designs', 'Fresh Ingredients'].map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-gold" />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Promises */}
      <section className="relative z-10 -mt-px bg-white">
        <div className="container-x grid gap-px overflow-hidden py-0 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => {
            const Icon = promiseIcons[i]
            return (
              <Reveal key={p.title} delay={i * 100} className="group px-2 py-10 sm:px-6">
                <Icon className="h-9 w-9 text-berry transition duration-500 group-hover:-translate-y-1 group-hover:text-gold" strokeWidth={1.4} />
                <h3 className="mt-4 text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-chocolate-light">{p.text}</p>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Intro */}
      <section className="bg-blush/60 py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <Img name="story" alt="Raspberry cream cake" sizes="(min-width: 1024px) 270px, 45vw" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl" />
              <Img name="story-2" alt="Strawberry cupcakes" sizes="(min-width: 1024px) 270px, 45vw" className="mt-12 aspect-[3/4] w-full rounded-2xl object-cover shadow-xl" />
            </div>
            <div className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 rounded-full bg-white px-6 py-3 text-sm font-semibold shadow-lg">
              <span className="text-berry">♥</span> Baked fresh for every order
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Welcome to Nina Cakes"
              title="Where every cake is made just for you"
              text="We believe a cake should feel as special as the moment it celebrates. That's why every order at Nina Cakes is baked from scratch, filled with care and decorated by hand — never mass-produced, never sitting on a shelf."
            />
            <Reveal delay={150}>
              <p className="mt-4 leading-relaxed text-chocolate-light">
                Whether it's a simple birthday cake, a dozen cupcakes for the office or a three-tier wedding cake, you'll work directly with the baker to get every detail right.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/about" className="btn-dark">Our Story</Link>
                <Link to="/contact" className="btn-outline">Start Your Order</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="container-x py-24">
        <SectionHeading eyebrow="Every Occasion" title="A cake for every celebration" text="From intimate birthdays to wedding receptions, we bake cakes that look as good as they taste." />
        <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {occasions.map((o, i) => (
            <Reveal key={o.title} delay={i * 100}>
              <Link to="/contact" className="group relative block aspect-[3/4] overflow-hidden rounded-2xl">
                <Img name={o.img} alt={`${o.title} cake`} sizes="(min-width: 1024px) 270px, 50vw" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/90 via-chocolate/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">{o.title}</h3>
                  <p className="mt-1 hidden text-sm text-white/80 sm:block">{o.text}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-berry-soft transition group-hover:gap-2">
                    Enquire <LuArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-white py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Signature Menu" title="Customer favourites" />
            <Reveal><Link to="/menu" className="btn-outline">Full Menu <LuArrowRight className="h-4 w-4" /></Link></Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featured.map((item, i) => (
              <Reveal key={item.name} delay={(i % 3) * 100}><MenuCard item={item} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flavours */}
      <section className="relative isolate overflow-hidden bg-chocolate py-24 text-white">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <SectionHeading light eyebrow="Mix & Match" title="Your flavours, your way" text="Pick any sponge and pair it with your favourite filling. Not sure? We'll happily recommend a combination." />
          <Reveal delay={150} className="space-y-8">
            {[['Sponges', flavours.sponges], ['Fillings', flavours.fillings]].map(([label, list]) => (
              <div key={label}>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {list.map((f) => (
                    <li key={f} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm transition hover:border-berry-soft hover:bg-berry/30">{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* How to order */}
      <section className="container-x py-24">
        <SectionHeading center eyebrow="How It Works" title="Ordering is simple" />
        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <span aria-hidden className="absolute left-[12%] right-[12%] top-8 hidden h-px border-t border-dashed border-gold/60 lg:block" />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white font-serif text-2xl font-semibold text-berry shadow-md ring-1 ring-berry-soft">
                {i + 1}
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-chocolate-light">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Gallery */}
      <section className="bg-blush/60 py-24">
        <div className="container-x">
          <SectionHeading center eyebrow="Gallery" title="Fresh from our kitchen" />
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {gallery.map((g, i) => (
              <Reveal key={g.img} delay={(i % 4) * 80}>
                <div className="group overflow-hidden rounded-2xl">
                  <Img name={g.img} alt={g.alt} sizes="(min-width: 768px) 25vw, 50vw" className="aspect-square h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-chocolate">
        <Img name="cta-tarts" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-chocolate/80" />
        <Reveal className="container-x py-28 text-center">
          <p className="eyebrow !text-berry-soft">Planning a Celebration?</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold text-white md:text-6xl">Let's create your perfect cake</h2>
          <p className="mx-auto mt-5 max-w-lg text-white/80">Send us your date and ideas on WhatsApp and we'll take care of the rest.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-primary">
              <FaWhatsapp className="h-5 w-5" /> {business.phone}
            </a>
            <Link to="/contact" className="btn-outline-light">Use the Order Form</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
