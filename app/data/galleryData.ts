export interface GalleryPhoto {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  photos: GalleryPhoto[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'patios-decks',
    name: 'Patios & Decks',
    description: 'Beautiful outdoor living spaces and deck installations',
    photos: [
      {
        id: 'patio-1',
        title: 'Modern Patio Design',
        imageUrl: 'https://images.pexels.com/photos/1697932/pexels-photo-1697932.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Contemporary patio with comfortable seating',
      },
      {
        id: 'patio-2',
        title: 'Stone Patio with Pergola',
        imageUrl: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Elegant stone patio with overhead pergola',
      },
      {
        id: 'patio-3',
        title: 'Backyard Deck Installation',
        imageUrl: 'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Spacious wooden deck for entertaining',
      },
      {
        id: 'patio-4',
        title: 'Composite Deck Platform',
        imageUrl: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Low-maintenance composite deck design',
      },
    ],
  },
  {
    id: 'hardscaping',
    name: 'Hardscaping',
    description: 'Retaining walls, walkways, and stone features',
    photos: [
      {
        id: 'hard-1',
        title: 'Retaining Wall',
        imageUrl: 'https://images.pexels.com/photos/1005662/pexels-photo-1005662.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Stone retaining wall with landscape integration',
      },
      {
        id: 'hard-2',
        title: 'Brick Walkway',
        imageUrl: 'https://images.pexels.com/photos/1454496/pexels-photo-1454496.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Traditional brick pathway through garden',
      },
      {
        id: 'hard-3',
        title: 'Stone Pathway',
        imageUrl: 'https://images.pexels.com/photos/1824317/pexels-photo-1824317.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Curved stone walkway in landscaped yard',
      },
      {
        id: 'hard-4',
        title: 'Concrete Driveway',
        imageUrl: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Professional concrete driveway installation',
      },
    ],
  },
  {
    id: 'gardens-planting',
    name: 'Gardens & Planting',
    description: 'Flower beds, shrub arrangements, and garden design',
    photos: [
      {
        id: 'garden-1',
        title: 'Flower Garden',
        imageUrl: 'https://images.pexels.com/photos/3694881/pexels-photo-3694881.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Colorful flower garden arrangement',
      },
      {
        id: 'garden-2',
        title: 'Perennial Garden',
        imageUrl: 'https://images.pexels.com/photos/2002434/pexels-photo-2002434.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Seasonal perennial garden design',
      },
      {
        id: 'garden-3',
        title: 'Raised Garden Beds',
        imageUrl: 'https://images.pexels.com/photos/2132318/pexels-photo-2132318.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Modern raised garden bed system',
      },
      {
        id: 'garden-4',
        title: 'Landscape Planting',
        imageUrl: 'https://images.pexels.com/photos/1836763/pexels-photo-1836763.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Professional landscape planting design',
      },
    ],
  },
  {
    id: 'outdoor-features',
    name: 'Outdoor Features',
    description: 'Fire pits, water features, and outdoor installations',
    photos: [
      {
        id: 'feature-1',
        title: 'Fire Pit Area',
        imageUrl: 'https://images.pexels.com/photos/1546319/pexels-photo-1546319.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Cozy fire pit gathering space',
      },
      {
        id: 'feature-2',
        title: 'Water Fountain Feature',
        imageUrl: 'https://images.pexels.com/photos/3467564/pexels-photo-3467564.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Decorative water fountain installation',
      },
      {
        id: 'feature-3',
        title: 'Outdoor Lighting',
        imageUrl: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Ambient outdoor lighting design',
      },
      {
        id: 'feature-4',
        title: 'Garden Arbor',
        imageUrl: 'https://images.pexels.com/photos/1670827/pexels-photo-1670827.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Elegant garden arbor with climbing vines',
      },
    ],
  },
  {
    id: 'outdoor-kitchens',
    name: 'Outdoor Kitchens',
    description: 'BBQ areas, outdoor dining, and kitchen installations',
    photos: [
      {
        id: 'kitchen-1',
        title: 'Built-in BBQ Station',
        imageUrl: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Professional outdoor BBQ installation',
      },
      {
        id: 'kitchen-2',
        title: 'Outdoor Dining Area',
        imageUrl: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Spacious outdoor dining setup',
      },
      {
        id: 'kitchen-3',
        title: 'Kitchen Island Outdoor',
        imageUrl: 'https://images.pexels.com/photos/1697932/pexels-photo-1697932.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Full-service outdoor kitchen island',
      },
      {
        id: 'kitchen-4',
        title: 'Pizza Oven Installation',
        imageUrl: 'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Traditional outdoor pizza oven',
      },
    ],
  },
  {
    id: 'landscape-lighting',
    name: 'Landscape Lighting',
    description: 'Professional lighting for outdoor ambiance and safety',
    photos: [
      {
        id: 'light-1',
        title: 'Pathway Lighting',
        imageUrl: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'LED pathway lighting system',
      },
      {
        id: 'light-2',
        title: 'Accent Tree Lighting',
        imageUrl: 'https://images.pexels.com/photos/1909387/pexels-photo-1909387.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Uplighting on landscape trees',
      },
      {
        id: 'light-3',
        title: 'Deck Railing Lights',
        imageUrl: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Modern deck railing LED lights',
      },
      {
        id: 'light-4',
        title: 'Garden Spotlights',
        imageUrl: 'https://images.pexels.com/photos/1436127/pexels-photo-1436127.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Strategic garden spotlight placement',
      },
    ],
  },
];
