export interface BagItem {
  id: string
  name: string
  roast: string
  src?: string
}

export const BAG_ITEMS: BagItem[] = [
  {
    id: 'item-1',
    name: 'Pocket Chair',
    roast: 'For roadside chai breaks. Deployed within three seconds flat.',
    src: './images/bag/pocket-chair.png'
  },
  {
    id: 'item-2',
    name: 'Hand Cream',
    roast: 'Applied every twelve minutes without fail. Leaves the entire floor smelling like a luxury spa.',
    src: './images/bag/hand-cream.png'
  },
  {
    id: 'item-3',
    name: 'Hajmola',
    roast: 'Digestive candy for post-meal survival. Generously distributed to anyone who makes eye contact.',
    src: './images/bag/hajmola.png'
  },
  {
    id: 'item-4',
    name: 'Jhandu Balm',
    roast: 'Her single-point solution for headaches, office stress, and questionable life decisions.',
    src: './images/bag/zandu-balm.png'
  },
  {
    id: 'item-5',
    name: 'Perfume',
    roast: 'Two spritzes for freshness, six more for dramatic presence. You smell her arrival two hallways away.',
    src: './images/bag/perfume.png'
  },
  {
    id: 'item-6',
    name: 'Dog Biscuit',
    roast: 'Reserved for every stray puppy and kitten she meets on her travels.',
    src: './images/bag/biscuit.png'
  }
]
