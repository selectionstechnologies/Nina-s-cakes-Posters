export default function MenuCard({ item }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden bg-stone-100">
        <img src={item.img} alt={item.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-lg font-semibold text-mocha-dark">{item.name}</h3>
          <span className="shrink-0 text-right font-semibold text-mocha">
            ${item.price.toFixed(2)}
            <span className="block text-xs font-normal text-stone-500">per dozen</span>
          </span>
        </div>
        <p className="mt-2 text-sm text-stone-600">{item.desc}</p>
      </div>
    </div>
  )
}
