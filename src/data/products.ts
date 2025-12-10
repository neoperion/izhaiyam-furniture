export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  specs: {
    dimensions: string;
    material: string;
    finish: string;
    weight?: string;
    assembly?: string;
  };
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: 'new' | 'bestseller' | 'sale';
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Cot',
    slug: 'cot',
    image: '/src/assets/category-cot.jpg',
    description: 'Beautiful wooden cots and beds for peaceful sleep',
    productCount: 24,
  },
  {
    id: '2',
    name: 'Sofa',
    slug: 'sofa',
    image: '/src/assets/category-sofa.jpg',
    description: 'Comfortable sofas for your living room',
    productCount: 36,
  },
  {
    id: '3',
    name: 'Diwan',
    slug: 'diwan',
    image: '/src/assets/category-diwan.jpg',
    description: 'Traditional diwans with modern comfort',
    productCount: 18,
  },
  {
    id: '4',
    name: 'Chair',
    slug: 'chair',
    image: '/src/assets/category-chair.jpg',
    description: 'Elegant chairs for dining and relaxing',
    productCount: 42,
  },
  {
    id: '5',
    name: 'Balcony',
    slug: 'balcony',
    image: '/src/assets/category-balcony.jpg',
    description: 'Outdoor furniture for your balcony',
    productCount: 15,
  },
  {
    id: '6',
    name: 'Swing',
    slug: 'swing',
    image: '/src/assets/category-swing.jpg',
    description: 'Indoor and outdoor swings for relaxation',
    productCount: 12,
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Oslo Premium King Bed',
    category: 'cot',
    price: 45999,
    originalPrice: 52999,
    image: '/src/assets/product-bed-1.jpg',
    description: 'Experience ultimate comfort with our Oslo Premium King Bed. Crafted from solid sheesham wood with a natural oak finish, this bed combines elegance with durability.',
    specs: {
      dimensions: 'L 210 x W 185 x H 100 cm',
      material: 'Solid Sheesham Wood',
      finish: 'Natural Oak',
      weight: '85 kg',
      assembly: 'Professional assembly included',
    },
    rating: 4.8,
    reviews: 124,
    inStock: true,
    badge: 'bestseller',
  },
  {
    id: '2',
    name: 'Vienna L-Shape Sofa',
    category: 'sofa',
    price: 68999,
    originalPrice: 79999,
    image: '/src/assets/product-sofa-1.jpg',
    description: 'The Vienna L-Shape Sofa is perfect for modern living rooms. Features high-density foam cushions and premium fabric upholstery.',
    specs: {
      dimensions: 'L 280 x W 180 x H 85 cm',
      material: 'Solid Wood Frame, Premium Fabric',
      finish: 'Cream Beige',
      weight: '95 kg',
      assembly: 'Easy self-assembly',
    },
    rating: 4.7,
    reviews: 89,
    inStock: true,
    badge: 'new',
  },
  {
    id: '3',
    name: 'Maharaja Wooden Diwan',
    category: 'diwan',
    price: 32999,
    image: '/src/assets/category-diwan.jpg',
    description: 'Traditional Maharaja Diwan with intricate woodwork. Perfect blend of heritage design and modern comfort.',
    specs: {
      dimensions: 'L 200 x W 90 x H 75 cm',
      material: 'Teak Wood',
      finish: 'Honey Brown',
      weight: '65 kg',
      assembly: 'Pre-assembled',
    },
    rating: 4.9,
    reviews: 156,
    inStock: true,
    badge: 'bestseller',
  },
  {
    id: '4',
    name: 'Copenhagen Dining Chair',
    category: 'chair',
    price: 8999,
    originalPrice: 10999,
    image: '/src/assets/category-chair.jpg',
    description: 'Scandinavian-inspired dining chair with woven rattan seat. Lightweight yet sturdy construction.',
    specs: {
      dimensions: 'L 45 x W 50 x H 80 cm',
      material: 'Beech Wood, Natural Rattan',
      finish: 'Light Oak',
      weight: '5 kg',
      assembly: 'Pre-assembled',
    },
    rating: 4.6,
    reviews: 78,
    inStock: true,
    badge: 'sale',
  },
  {
    id: '5',
    name: 'Sunset Balcony Set',
    category: 'balcony',
    price: 28999,
    image: '/src/assets/category-balcony.jpg',
    description: 'Complete balcony furniture set including 2 chairs, lounger, and side table. Weather-resistant teak wood.',
    specs: {
      dimensions: 'Various sizes',
      material: 'Teak Wood',
      finish: 'Natural Teak',
      weight: '45 kg (total)',
      assembly: 'Minimal assembly required',
    },
    rating: 4.5,
    reviews: 45,
    inStock: true,
    badge: 'new',
  },
  {
    id: '6',
    name: 'Serenity Indoor Swing',
    category: 'swing',
    price: 24999,
    originalPrice: 29999,
    image: '/src/assets/category-swing.jpg',
    description: 'Beautiful indoor swing with cushioned seat. Perfect for reading corners and relaxation spaces.',
    specs: {
      dimensions: 'L 140 x W 70 x H 180 cm',
      material: 'Mango Wood, Cotton Rope',
      finish: 'Natural Light',
      weight: '35 kg',
      assembly: 'Professional installation recommended',
    },
    rating: 4.8,
    reviews: 67,
    inStock: true,
  },
  {
    id: '7',
    name: 'Aurora Queen Bed',
    category: 'cot',
    price: 38999,
    image: '/src/assets/category-cot.jpg',
    description: 'Modern queen bed with clean lines and warm wood tones. Features under-bed storage.',
    specs: {
      dimensions: 'L 200 x W 160 x H 95 cm',
      material: 'Solid Pine Wood',
      finish: 'Light Walnut',
      weight: '70 kg',
      assembly: 'Professional assembly included',
    },
    rating: 4.7,
    reviews: 92,
    inStock: true,
  },
  {
    id: '8',
    name: 'Milano 3-Seater Sofa',
    category: 'sofa',
    price: 42999,
    image: '/src/assets/category-sofa.jpg',
    description: 'Classic 3-seater sofa with premium leather upholstery. Timeless design for any living space.',
    specs: {
      dimensions: 'L 200 x W 90 x H 85 cm',
      material: 'Solid Wood Frame, Genuine Leather',
      finish: 'Tan Brown',
      weight: '65 kg',
      assembly: 'Pre-assembled',
    },
    rating: 4.6,
    reviews: 134,
    inStock: true,
    badge: 'bestseller',
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    comment: 'Absolutely love my new sofa! The quality is exceptional and delivery was right on time. The team was very professional.',
    avatar: 'PS',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    comment: 'Best furniture shopping experience. The wooden bed we ordered is sturdy and beautiful. Worth every rupee!',
    avatar: 'RK',
  },
  {
    id: '3',
    name: 'Anita Desai',
    location: 'Bangalore',
    rating: 5,
    comment: 'The diwan we purchased is a masterpiece. Traditional craftsmanship with modern comfort. Highly recommended!',
    avatar: 'AD',
  },
];
