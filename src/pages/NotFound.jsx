import { Link } from 'react-router-dom'
import { LuCookie } from 'react-icons/lu'

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <LuCookie className="mx-auto h-20 w-20 text-mocha" />
      <h1 className="mt-6 font-serif text-4xl font-bold text-mocha-dark">Page not found</h1>
      <p className="mt-3 text-stone-600">Looks like this slice has already been eaten.</p>
      <Link to="/" className="mt-8 inline-block rounded-full bg-mocha px-6 py-3 font-semibold text-white hover:bg-mocha-dark">Back Home</Link>
    </section>
  )
}
