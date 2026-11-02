export interface BagItem {
  id: string
  name: string
  roast: string
  src?: string
}

export const BAG_ITEMS: BagItem[] = [
  { id: 'item-1', name: 'Phone Charger', roast: 'Not hers. Belongs to someone who gave up asking six months ago.' },
  { id: 'item-2', name: 'Snack Stash', roast: 'Emergency rations stockpiled for a war that will never come.' },
  { id: 'item-3', name: 'Pocket Chair', roast: 'For roadside chai breaks. Deployed within three seconds flat.' },
  { id: 'item-4', name: 'Medicine Strip', roast: 'Headache, fever, heartbreak, existential dread. She has one for each.' },
  { id: 'item-5', name: 'Hair Clip', roast: 'Yours too, if you ask nicely. Or even if you do not ask.' },
  { id: 'item-6', name: 'Tissue Packet', roast: 'For your tears, and for her electric laughing tears.' },
  { id: 'item-7', name: 'Leftover Biscuit', roast: 'Crushed into crumbs. Never thrown away, even when full.' },
  { id: 'item-8', name: 'Tiny Toy', roast: 'Future mother instincts activated. Always fully prepared.' },
  { id: 'item-9', name: 'Dog Biscuit', roast: 'Reserved for every stray animal she meets on the way.' },
  { id: 'item-10', name: 'Safety Pin', roast: 'Single-handedly saved three weddings and one product demo.' }
]
