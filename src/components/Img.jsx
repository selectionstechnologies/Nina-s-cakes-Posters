import manifest from '../imageManifest.json'

// Self-hosted responsive WebP with a blurred placeholder painted behind it.
export default function Img({ name, alt = '', sizes = '100vw', priority = false, className = '', style, ...rest }) {
  const meta = manifest[name]
  if (!meta) throw new Error(`Unknown image: ${name}`)
  const largest = meta.w[meta.w.length - 1]

  return (
    <img
      src={`/images/${name}-${largest}.webp`}
      srcSet={meta.w.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', ')}
      sizes={sizes}
      width={largest}
      height={Math.round(largest / meta.ar)}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      className={className}
      style={{ backgroundImage: `url(${meta.lqip})`, backgroundSize: 'cover', backgroundPosition: 'center', ...style }}
      {...rest}
    />
  )
}
