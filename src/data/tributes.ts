import { ASSETS } from './assets'

export interface TributeItem {
  id: string
  title: string
  quote: string
  text: string
  badge: string
  photoLabel: string
  src: string
  scale?: number
}

export const TRIBUTES_DATA: TributeItem[] = [
  {
    id: 'tribute-1',
    title: 'Boundless Heart & Empathy',
    quote: 'You make everyone feel like family.',
    text: 'We joke about you being Jagatmata, but the truth is you have an extraordinary gift of caring. Whether it is a friend having a bad day, an exhausted colleague, or a stray animal on the road, your warmth and genuine empathy never run out.',
    badge: 'Heart of Gold',
    photoLabel: 'Empathy & Warmth',
    src: ASSETS.penguHeart,
    scale: 1.22
  },
  {
    id: 'tribute-2',
    title: 'Culinary Magic With Love',
    quote: 'Food cooked from the soul.',
    text: 'Your royal Afghani chicken, aromatic dum biryani, and heavenly chocolate cakes are your signature love language. You never let anyone leave your presence hungry or uncared for. Every dish is a warm hug on a plate.',
    badge: 'Master Chef',
    photoLabel: 'Cooking with Love',
    src: ASSETS.penguFood,
    scale: 1.12
  },
  {
    id: 'tribute-3',
    title: 'The Laugh That Brightens Any Room',
    quote: 'High voltage, pure sunshine.',
    text: 'Yes, your laugh operates at full 220V voltage and takes a 45-minute tubelight buffer to kick in, but once it starts, the entire room lights up. Your joy is infectious, unpretentious, and impossible not to smile at.',
    badge: 'Pure Joy',
    photoLabel: 'Electric Smile',
    src: ASSETS.penguSmile,
    scale: 0.86
  },
  {
    id: 'tribute-4',
    title: 'The Friend Who Always Shows Up',
    quote: 'Unwavering loyalty and presence.',
    text: 'Whenever anyone needed a listening ear, heartfelt advice, a quiet shoulder, or a comforting cup of tea, you were always right there. You never make anyone feel alone. Having you in our lives is one of our greatest blessings.',
    badge: 'Forever Loyal',
    photoLabel: 'Always in Our Corner',
    src: ASSETS.penguFriend,
    scale: 0.86
  },
  {
    id: 'tribute-5',
    title: 'A Gentle, Playful Spirit',
    quote: 'Zero malice, infinite grace.',
    text: 'In a world that can often feel loud, complicated, and rushed, you choose peace. You never hold grudges, you avoid petty drama, and you forgive easily. Your calm presence makes every chaotic day feel manageable.',
    badge: 'Pure Grace',
    photoLabel: 'Gentle Soul',
    src: ASSETS.penguPari,
    scale: 1.15
  },
  {
    id: 'tribute-6',
    title: 'Simply Irreplaceable Hippo',
    quote: 'There is truly nobody else like you.',
    text: 'Pranjal is the luckiest guy on earth, but we are the lucky crew who get to celebrate you today. Thank you for the chai breaks, the laughter, the endless love, and for being the brightest star in our galaxy.',
    badge: 'Our Star',
    photoLabel: 'Irreplaceable Hippo',
    src: ASSETS.penguCute,
    scale: 0.86
  }
]
