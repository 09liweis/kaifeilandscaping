export interface Project {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'Rosedale Garden Paradise',
    address: '45 Rosedale Valley Road, Toronto, ON',
    lat: 43.6777,
    lng: -79.3764,
    image: 'https://images.pexels.com/photos/1697932/pexels-photo-1697932.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Luxurious garden design with custom patio and water features',
  },
  {
    id: '2',
    name: 'High Park Estate',
    address: '328 High Park Avenue, Toronto, ON',
    lat: 43.6535,
    lng: -79.4633,
    image: 'https://images.pexels.com/photos/3694881/pexels-photo-3694881.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Complete landscape renovation with perennial gardens',
  },
  {
    id: '3',
    name: 'Forest Hill Residence',
    address: '156 Forest Hill Road, Toronto, ON',
    lat: 43.6915,
    lng: -79.4150,
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Modern hardscaping with stone pathways and outdoor kitchen',
  },
  {
    id: '4',
    name: 'Yorkville Modern Garden',
    address: '88 Yorkville Avenue, Toronto, ON',
    lat: 43.6708,
    lng: -79.3932,
    image: 'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Contemporary rooftop garden with deck installation',
  },
  {
    id: '5',
    name: 'Lawrence Park Property',
    address: '245 Glencairn Avenue, Toronto, ON',
    lat: 43.7111,
    lng: -79.4036,
    image: 'https://images.pexels.com/photos/1005662/pexels-photo-1005662.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Retaining walls and terraced garden design',
  },
  {
    id: '6',
    name: 'The Beaches Backyard',
    address: '1456 Queen Street East, Toronto, ON',
    lat: 43.6671,
    lng: -79.2964,
    image: 'https://images.pexels.com/photos/2132318/pexels-photo-2132318.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Coastal-inspired landscape with raised garden beds',
  },
  {
    id: '7',
    name: 'Leaside Family Home',
    address: '78 Millwood Road, Toronto, ON',
    lat: 43.7056,
    lng: -79.3645,
    image: 'https://images.pexels.com/photos/1546319/pexels-photo-1546319.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Family-friendly backyard with fire pit area',
  },
  {
    id: '8',
    name: 'Etobicoke Executive Home',
    address: '567 The Kingsway, Etobicoke, ON',
    lat: 43.6527,
    lng: -79.5174,
    image: 'https://images.pexels.com/photos/1824317/pexels-photo-1824317.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Elegant stone pathways and mature tree preservation',
  },
  {
    id: '9',
    name: 'North York Commercial',
    address: '5100 Yonge Street, North York, ON',
    lat: 43.7698,
    lng: -79.4128,
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Commercial property with landscape lighting',
  },
  {
    id: '10',
    name: 'Scarborough Heights',
    address: '234 Midland Avenue, Scarborough, ON',
    lat: 43.7730,
    lng: -79.2346,
    image: 'https://images.pexels.com/photos/2002434/pexels-photo-2002434.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Slope stabilization and native plant garden',
  },
];
