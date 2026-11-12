export interface MenuItem {
  id: string
  name: string
  tag?: string
  description: string
  price: string
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'dish-1',
    name: 'Royal Afghani Chicken',
    tag: 'Chef’s Real Masterpiece',
    description: 'Her true culinary crowning glory. Marinated with secret spices and pure perfection. The real reason friends show up at her door unannounced.',
    price: 'Free, because heart'
  },
  {
    id: 'dish-2',
    name: 'Signature Dum Biryani',
    tag: 'Crowd Favorite',
    description: 'Slow-cooked aromatic masterpiece. One whiff summons the entire crew to the dining table. Diet resolutions are instantly canceled.',
    price: 'Free, because heart'
  },
  {
    id: 'dish-3',
    name: 'Masterclass Chocolate Cake',
    tag: 'Secret Specialty',
    description: 'Decadent, rich, and dangerously soft. Baked with love and guaranteed to vanish completely within sixty seconds of leaving the oven.',
    price: 'Free, because heart'
  },
  {
    id: 'dish-4',
    name: 'Chai With A Chair Combo',
    tag: 'Comfort Special',
    description: 'Steaming ginger tea paired with the comfiest armchair in the establishment.',
    price: 'Free, because heart'
  },
  {
    id: 'dish-5',
    name: 'Never-Throw Thali',
    tag: 'Host Special',
    description: 'A full royal platter plus whatever half-eaten roti is left on your plate.',
    price: 'Free, because heart'
  },
  {
    id: 'dish-6',
    name: 'Jagatmata Feast',
    tag: 'Heart of Gold',
    description: 'An endless buffet open to humans, birds, puppies, and weary travelers alike.',
    price: 'Free, because heart'
  }
]
