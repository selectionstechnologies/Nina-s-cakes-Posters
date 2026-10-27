import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'

export const business = {
  name: 'Teacake Chef',
  tagline: 'Homemade tea cakes, baked fresh by the dozen',
  services: 'We Cater, Deliver, and Ship',
  phone: '+1 832-282-2889',
  mapLink: 'https://maps.app.goo.gl/kiAEFkHdGcxrNKTb6',
  mapEmbed: 'https://maps.google.com/maps?q=Teacake%20Chef%2029.8382382,-95.3034389&z=16&output=embed',
  social: '@teacakechef',
  socialLinks: [
    { label: 'Instagram', url: 'https://instagram.com/teacakechef', Icon: FaInstagram },
    { label: 'Facebook', url: 'https://facebook.com/teacakechef', Icon: FaFacebookF },
    { label: 'X (Twitter)', url: 'https://twitter.com/teacakechef', Icon: FaXTwitter },
  ],
}

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`

export const menu = [
  {
    category: 'Lemon Tea Cakes',
    items: [
      { name: 'Classic', desc: 'Our signature soft lemon tea cake — buttery, light and lightly sweet.', price: 10, img: img('photo-1621236378699-8597faf6a176') },
      { name: 'Almonds', desc: 'Lemon tea cakes loaded with toasted almonds.', price: 12, img: img('photo-1618923850107-d1a234d7a73a') },
      { name: 'Pecans', desc: 'Lemon tea cakes with crunchy, buttery pecans.', price: 12, img: img('photo-1499636136210-6f4ee915583e') },
      { name: 'Chocolate Chip', desc: 'Lemon tea cakes studded with chocolate chips.', price: 12, img: img('photo-1558961363-fa8fdf82db35') },
    ],
  },
  {
    category: 'Peanut Butter Tea Cakes',
    items: [
      { name: 'Peanut Butter', desc: 'Rich, nutty peanut butter tea cakes, soft in the middle.', price: 12, img: img('photo-1597733153203-a54d0fbc47de') },
    ],
  },
]

export const testimonials = [
  { name: 'Sarah M.', text: 'These taste just like my grandmother used to make. The classic lemon is perfect!' },
  { name: 'James L.', text: 'Ordered a few dozen for our office event — gone in minutes. Will order again.' },
  { name: 'Aisha K.', text: 'The pecan tea cakes are out of this world. Shipping was fast too!' },
]
