export interface ItineraryPerson {
  id: number;
  name: string;
  role: string;
  image: string;
  note?: string;
}

export const ITINERARIES: ItineraryPerson[] = [
  {
    id: 1,
    name: 'Ana Popescu',
    role: 'Coordonator itinerar',
    image: 'https://picsum.photos/seed/person1/600/420',
    note: 'Lucrează cu familii din zone rurale'
  },
  {
    id: 2,
    name: 'Mihai Ionescu',
    role: 'Voluntar educație',
    image: 'https://picsum.photos/seed/person2/600/420',
    note: 'Facilitator ateliere' 
  },
  {
    id: 3,
    name: 'Elena Dumitru',
    role: 'Responsabil logistică',
    image: 'https://picsum.photos/seed/person3/600/420',
    note: 'Coordonează livrări și pachete'
  },
  {
    id: 4,
    name: 'Vlad Radu',
    role: 'Mentor',
    image: 'https://picsum.photos/seed/person4/600/420',
    note: 'Suport educațional pentru elevi'
  },
  {
    id: 5,
    name: 'Ioana Marin',
    role: 'Asistent social',
    image: 'https://picsum.photos/seed/person5/600/420',
    note: 'Lucrează direct cu comunitățile'
  },
  {
    id: 6,
    name: 'Radu Petrescu',
    role: 'Voluntar teren',
    image: 'https://picsum.photos/seed/person6/600/420',
    note: 'Implicat în proiecte locale'
  }
];
