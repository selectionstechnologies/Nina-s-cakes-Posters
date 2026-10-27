export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-br from-blush/30 via-cream to-sage/20 py-16 text-center">
      <h1 className="font-serif text-4xl font-bold text-mocha-dark md:text-5xl">{title}</h1>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl px-4 text-lg text-stone-600">{subtitle}</p>}
    </section>
  )
}
