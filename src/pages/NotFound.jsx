import { Link } from 'react-router-dom'
import { LuCakeSlice } from 'react-icons/lu'

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <LuCakeSlice className="mx-auto h-16 w-16 animate-fade-up text-berry" strokeWidth={1.25} />
      <p className="eyebrow mt-6">Error 404</p>
      <h1 className="mt-3 text-5xl font-semibold">Page not found</h1>
      <p className="mt-4 text-chocolate-light">Looks like this slice has already been eaten.</p>
      <Link to="/" className="btn-dark mt-10">Back to Home</Link>
    </section>
  )
}
