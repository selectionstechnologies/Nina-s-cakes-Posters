export const business = {
  name: 'Nina Cakes',
  tagline: 'Custom cakes and desserts, baked to order',
  phone: '+1 469-328-6442',
  whatsapp: '14693283642',
}

export const waLink = (message = `Hi ${business.name}! I'd like to order a cake.`) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`

export const heroSlides = [
  { img: 'hero-birthday', alt: 'Chocolate birthday cake with fresh berries and a sparkler' },
  { img: 'hero-chocolate', alt: 'Chocolate drip cake topped with cherries' },
  { img: 'hero-wedding', alt: 'Three-tier wedding cake decorated with roses' },
  { img: 'hero-berry', alt: 'Cream cake decorated with fresh berries' },
]

export const promises = [
  { title: 'Baked from Scratch', text: 'Real butter, fresh cream and quality chocolate in every layer.' },
  { title: 'Designed for You', text: 'Your theme, colours and message — every custom cake is one of a kind.' },
  { title: 'Made to Order', text: 'Nothing sits on a shelf. Every order is baked fresh for your date.' },
  { title: 'Personal Service', text: 'Talk directly with the baker on WhatsApp, from idea to pickup.' },
]

export const occasions = [
  { title: 'Birthdays', text: 'Drip cakes, number cakes and colourful layers.', img: 'occ-birthday' },
  { title: 'Weddings', text: 'Elegant tiered cakes finished with flowers.', img: 'occ-wedding' },
  { title: 'Baby Showers', text: 'Soft pastels, cupcake towers and sweet details.', img: 'occ-baby' },
  { title: 'Celebrations', text: 'Anniversaries, graduations and every milestone.', img: 'occ-celebration' },
]

export const steps = [
  { title: 'Share your idea', text: 'Message us on WhatsApp with your date, guest count and any inspiration photos.' },
  { title: 'Design & quote', text: 'We suggest the right size, flavours and finish, then confirm your price.' },
  { title: 'Freshly baked', text: 'Your cake is baked from scratch and decorated by hand close to your date.' },
  { title: 'Celebrate', text: 'Pick up your order or arrange delivery — then enjoy every slice.' },
]

export const gallery = [
  { img: 'gal-floral', alt: 'Lavender floral celebration cake' },
  { img: 'gal-pink-drip', alt: 'Pink drip cake with sprinkles' },
  { img: 'gal-black-forest', alt: 'Layered black forest cake with cherries' },
  { img: 'gal-fraisier', alt: 'Strawberry fraisier cake' },
  { img: 'gal-rainbow', alt: 'Rainbow layer cake with sprinkles' },
  { img: 'gal-macarons', alt: 'Pastel French macarons' },
  { img: 'gal-drip', alt: 'White cake with chocolate drip' },
  { img: 'gal-raspberry', alt: 'Slice of raspberry cream cake' },
]

export const menu = [
  {
    category: 'Celebration Cakes',
    intro: 'Layer cakes for birthdays, anniversaries and every reason to celebrate.',
    items: [
      { name: 'Chocolate Fudge Cake', desc: 'Rich chocolate sponge layered with fudge frosting and finished with glossy ganache.', price: 'From $55', unit: 'Serves 10–12', img: 'm-chocolate-fudge', tag: 'Signature' },
      { name: 'Berry Chantilly Cake', desc: 'Light vanilla sponge, whipped chantilly cream and fresh seasonal berries.', price: 'From $60', unit: 'Serves 10–12', img: 'm-berry-chantilly' },
      { name: 'Red Velvet Cake', desc: 'Velvety cocoa layers with smooth cream cheese frosting.', price: 'From $58', unit: 'Serves 10–12', img: 'm-red-velvet-cake' },
      { name: 'Black Forest Cake', desc: 'Chocolate layers with cherries and fresh cream, finished with dark chocolate.', price: 'From $60', unit: 'Serves 10–12', img: 'm-black-forest' },
      { name: 'Strawberry Fraisier', desc: 'Vanilla sponge, light cream and a crown of fresh strawberries.', price: 'From $62', unit: 'Serves 8–10', img: 'm-fraisier' },
      { name: 'Birthday Drip Cake', desc: 'Tall vanilla layers with a colourful drip, sprinkles and your message.', price: 'From $65', unit: 'Serves 12–15', img: 'm-birthday-drip' },
    ],
  },
  {
    category: 'Wedding & Custom',
    intro: 'Designed around your theme, colours and guest count.',
    items: [
      { name: 'Tiered Wedding Cake', desc: 'Two or three elegant tiers finished with buttercream and fresh or sugar flowers.', price: 'Custom quote', unit: '30–100+ guests', img: 'm-wedding', tag: 'By consultation' },
      { name: 'Custom Design Cake', desc: 'Send us a photo or idea — we will design a cake that fits your celebration.', price: 'Custom quote', unit: 'Any size', img: 'm-custom' },
    ],
  },
  {
    category: 'Cupcakes',
    intro: 'Perfect for parties, offices and dessert tables. Minimum one dozen.',
    items: [
      { name: 'Red Velvet', desc: 'Classic red velvet with a silky cream cheese frosting.', price: 'From $36', unit: 'Per dozen', img: 'm-cup-red-velvet' },
      { name: 'Vanilla Sprinkle', desc: 'Fluffy vanilla cupcakes with buttercream and colourful sprinkles.', price: 'From $32', unit: 'Per dozen', img: 'm-cup-vanilla' },
      { name: 'Chocolate', desc: 'Moist chocolate cupcakes swirled with chocolate buttercream.', price: 'From $34', unit: 'Per dozen', img: 'm-cup-chocolate' },
      { name: 'Cookies & Cream', desc: 'Chocolate cupcakes with cookies and cream frosting.', price: 'From $36', unit: 'Per dozen', img: 'm-cup-oreo' },
      { name: 'Strawberry Dream', desc: 'Strawberry buttercream topped with a white-chocolate dipped berry.', price: 'From $38', unit: 'Per dozen', img: 'm-cup-strawberry', tag: 'Signature' },
      { name: 'Biscoff Caramel', desc: 'Spiced caramel cupcakes with Biscoff frosting and a cookie crown.', price: 'From $38', unit: 'Per dozen', img: 'm-cup-biscoff' },
    ],
  },
  {
    category: 'Cheesecakes & Desserts',
    intro: 'Creamy cheesecakes and dessert-table favourites.',
    items: [
      { name: 'Strawberry Cheesecake', desc: 'Smooth baked cheesecake with a glossy strawberry topping.', price: 'From $48', unit: '9-inch whole', img: 'm-cheesecake-strawberry' },
      { name: 'Blueberry Cheesecake', desc: 'Creamy baked cheesecake on a buttery crust with blueberry topping.', price: 'From $45', unit: '9-inch whole', img: 'm-cheesecake-blueberry' },
      { name: 'New York Cheesecake', desc: 'Dense, smooth and classic — baked slowly for a perfect finish.', price: 'From $42', unit: '9-inch whole', img: 'm-cheesecake-ny' },
      { name: 'Fresh Fruit Tarts', desc: 'Crisp pastry shells, vanilla custard and glazed fresh berries.', price: 'From $36', unit: 'Per dozen', img: 'm-tarts' },
      { name: 'French Macarons', desc: 'Delicate almond shells with ganache and buttercream fillings.', price: 'From $30', unit: 'Per dozen', img: 'm-macarons' },
      { name: 'Raspberry Brownies', desc: 'Thick, fudgy chocolate brownies studded with raspberries.', price: 'From $28', unit: 'Per dozen', img: 'm-brownies' },
      { name: 'Strawberry Dessert Cups', desc: 'Layers of cream and fresh strawberries — perfect for dessert tables.', price: 'From $30', unit: 'Per dozen', img: 'm-dessert-cups' },
    ],
  },
]

export const flavours = {
  sponges: ['Vanilla Bean', 'Rich Chocolate', 'Red Velvet', 'Lemon', 'Strawberry', 'Marble', 'Funfetti', 'Carrot'],
  fillings: ['Vanilla Buttercream', 'Chocolate Ganache', 'Cream Cheese', 'Fresh Strawberries', 'Raspberry Jam', 'Salted Caramel', 'Lemon Curd', 'Whipped Cream'],
  finishes: ['Smooth Buttercream', 'Semi-Naked', 'Chocolate Drip', 'Fresh Flowers', 'Fondant (on request)'],
}

export const sizes = [
  { size: '6-inch round', serves: '8–10' },
  { size: '8-inch round', serves: '12–16' },
  { size: '10-inch round', serves: '20–28' },
  { size: 'Two tiers (6" + 8")', serves: '30–40' },
  { size: 'Three tiers (6" + 8" + 10")', serves: '60–80' },
]

export const addOns = [
  'Custom cake topper',
  'Edible photo print',
  'Fresh or sugar flowers',
  'Macarons & berries',
  'Gold leaf details',
  'Personalised message',
]

export const faqs = [
  { q: 'How far in advance should I order?', a: 'We recommend at least 3 days for cakes and cupcakes. For wedding and tiered cakes, contact us as early as possible to secure your date.' },
  { q: 'Can you recreate a design from a photo?', a: 'Yes — send your inspiration photo on WhatsApp and we will suggest the best size, flavours and price for your design.' },
  { q: 'Which flavours can I choose?', a: 'Choose any sponge with any filling from our flavour list. If you have something special in mind, just ask.' },
  { q: 'Do you cater for allergies?', a: 'Please tell us about any allergies when ordering so we can advise on what is suitable for you.' },
  { q: 'Do you offer delivery?', a: 'Pickup and delivery can both be arranged. Share your address on WhatsApp and we will confirm availability and cost.' },
  { q: 'How do I confirm my order?', a: 'Once we agree on the details over WhatsApp, we confirm the final price and reserve your date.' },
]
