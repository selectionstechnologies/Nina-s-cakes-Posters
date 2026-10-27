export const business = {
  name: 'Nina Cakes',
  tagline: 'Custom cakes and desserts, baked to order',
  phone: '+1 469-328-6442',
  whatsapp: '14693283642',
}

export const waLink = (message = `Hi ${business.name}! I'd like to order a cake.`) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`

export const img = (id, w = 800, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=75`

export const images = {
  heroHome: '1535141192574-5d4897c12636',
  heroMenu: '1571115177098-24ec42ed204d',
  heroAbout: '1505976378723-9726b54e9bb9',
  heroContact: '1559620192-032c4bc4674e',
  piping: '1586985289688-ca3cf47d3e6e',
  ctaBand: '1578985545062-69928b1d9587',
}

export const gallery = [
  { id: '1562777717-dc6984f65a63', alt: 'Lavender floral celebration cake' },
  { id: '1621303837174-89787a7d4729', alt: 'Pink drip cake with sprinkles' },
  { id: '1606890737304-57a1ca8a5b62', alt: 'Layered black forest cake with cherries' },
  { id: '1464349095431-e9a21285b5f3', alt: 'Rainbow layer cake with sprinkles' },
  { id: '1627834377411-8da5f4f09de8', alt: 'Chocolate drip cake topped with macarons' },
  { id: '1565958011703-44f9829ba187', alt: 'Slice of raspberry cream cake' },
]

export const menu = [
  {
    category: 'Celebration Cakes',
    items: [
      { name: 'Chocolate Fudge Cake', desc: 'Rich chocolate sponge layered with fudge frosting and finished with chocolate ganache.', price: 'From $55', unit: 'Serves 10–12', img: '1578985545062-69928b1d9587' },
      { name: 'Berry Chantilly Cake', desc: 'Light vanilla sponge, whipped chantilly cream and fresh seasonal berries.', price: 'From $60', unit: 'Serves 10–12', img: '1559620192-032c4bc4674e' },
      { name: 'Black Forest Cake', desc: 'Chocolate layers with cherries and fresh cream, finished with dark chocolate.', price: 'From $60', unit: 'Serves 10–12', img: '1606890737304-57a1ca8a5b62' },
      { name: 'Custom Design Cake', desc: 'Birthdays, weddings, baby showers and more — designed around your theme and colours.', price: 'Custom quote', unit: 'Any size', img: '1562777717-dc6984f65a63' },
    ],
  },
  {
    category: 'Cupcakes',
    items: [
      { name: 'Red Velvet', desc: 'Classic red velvet with a silky cream cheese frosting.', price: 'From $36', unit: 'Per dozen', img: '1614707267537-b85aaf00c4b7' },
      { name: 'Vanilla Sprinkle', desc: 'Fluffy vanilla cupcakes with buttercream and colourful sprinkles.', price: 'From $32', unit: 'Per dozen', img: '1519869325930-281384150729' },
      { name: 'Chocolate', desc: 'Moist chocolate cupcakes swirled with chocolate buttercream.', price: 'From $34', unit: 'Per dozen', img: '1550617931-e17a7b70dce2' },
      { name: 'Cookies & Cream', desc: 'Chocolate cupcakes with cookies and cream frosting.', price: 'From $36', unit: 'Per dozen', img: '1612203985729-70726954388c' },
    ],
  },
  {
    category: 'Cheesecakes & Desserts',
    items: [
      { name: 'Blueberry Cheesecake', desc: 'Creamy baked cheesecake on a buttery crust with blueberry topping.', price: 'From $45', unit: '9-inch whole', img: '1567171466295-4afa63d45416' },
      { name: 'New York Cheesecake', desc: 'Dense, smooth and classic — baked slowly for a perfect finish.', price: 'From $42', unit: '9-inch whole', img: '1524351199678-941a58a3df50' },
      { name: 'Chocolate Fudge Brownies', desc: 'Thick, fudgy brownies with a crackly top.', price: 'From $24', unit: 'Per dozen', img: '1606313564200-e75d5e30476c' },
      { name: 'Strawberry Dessert Cups', desc: 'Layers of cream and fresh strawberries — perfect for dessert tables.', price: 'From $30', unit: 'Per dozen', img: '1488477181946-6428a0291777' },
    ],
  },
]
