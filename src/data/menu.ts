export interface MenuItem {
  id: string
  name: string
  description: string
  price: string
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'dish-1',
    name: 'Never-Throw Thali',
    description: 'A full royal platter plus whatever half-eaten roti is left on your plate.',
    price: 'Free, because heart'
  },
  {
    id: 'dish-2',
    name: 'Munch Mix Special',
    description: 'Whatever assorted edible treasures are currently floating in the Doraemon bag.',
    price: 'Free, because heart'
  },
  {
    id: 'dish-3',
    name: 'Chai With A Chair Combo',
    description: 'Steaming ginger tea paired with the comfiest armchair in the establishment.',
    price: 'Free, because heart'
  },
  {
    id: 'dish-4',
    name: 'Work Bestie’s Midnight Maggi',
    description: 'Cooked with extra love and seasoned with the week’s juicy gossip.',
    price: 'Free, because heart'
  },
  {
    id: 'dish-5',
    name: 'Jagatmata Feast',
    description: 'An endless buffet open to humans, birds, puppies, and weary travelers alike.',
    price: 'Free, because heart'
  }
]
