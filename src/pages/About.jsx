import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa6'
import PageHeader from '../components/PageHeader.jsx'
import { business, images, img, waLink } from '../data.js'

const values = [
  { title: 'Quality First', text: 'We bake with real butter, fresh cream and quality chocolate — no shortcuts.' },
  { title: 'Personal Service', text: 'You talk directly with the baker, from the first idea to the final detail.' },
  { title: 'Made with Care', text: 'Each cake is baked, filled and decorated by hand for your celebration.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="About Nina Cakes"
        subtitle="A home of handcrafted cakes and desserts, made with care for life's sweetest moments."
        image={images.heroAbout}
      />

      <section className="container-x grid items-center gap-14 py-24 md:grid-cols-2">
        <img
          src={img(images.piping, 1000, 1150)}
          alt="Piping buttercream onto a layered cake"
          loading="lazy"
          className="aspect-[6/7] w-full rounded-xl object-cover"
        />
        <div>
          <p className="eyebrow">Baked by Hand</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">Every cake tells your story</h2>
          <p className="mt-6 leading-relaxed text-cocoa-light">
            {business.name} was built on a simple love of baking and of the people we bake for. Birthdays, weddings,
            baby showers and family gatherings all deserve a cake that feels personal — and that's exactly what we make.
          </p>
          <p className="mt-4 leading-relaxed text-cocoa-light">
            We bake every order fresh from scratch, from rich chocolate fudge cakes and fluffy cupcakes to creamy
            cheesecakes and dessert cups. Tell us your theme and we'll design something you'll remember.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/menu" className="btn-dark">Explore the Menu</Link>
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-outline">
              <FaWhatsapp className="h-4 w-4" /> Chat with Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What We Believe</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">The Nina Cakes promise</h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-cocoa/10 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title} className="bg-white p-10">
                <span className="font-serif text-5xl font-semibold text-rose-soft">0{i + 1}</span>
                <h3 className="mt-4 text-2xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-light">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
