
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'shake' | 'block';
  benefits: string[];
  rating: number;
  reviews: number;
  description: string;
  longDescription: string;
  ingredients: string[];
  nutritionalInfo: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
    sugar: string;
  };
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Berry Immunity Boost Shake',
    price: 34.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
    category: 'shake',
    benefits: ['Immunity', 'Antioxidants', 'Energy'],
    rating: 4.8,
    reviews: 127,
    description: 'Powerful berry blend packed with vitamin C and antioxidants to boost your immune system naturally.',
    longDescription: 'Our Berry Immunity Boost Shake combines the finest organic berries with immune-supporting nutrients. Each serving delivers powerful antioxidants, vitamin C, and natural compounds that help strengthen your body\'s defenses while providing sustained energy throughout the day.',
    ingredients: ['Organic Blueberries', 'Acai Berry', 'Elderberry', 'Vitamin C', 'Zinc', 'Natural Berry Flavoring'],
    nutritionalInfo: {
      calories: 120,
      protein: '5g',
      carbs: '22g',
      fat: '2g',
      fiber: '8g',
      sugar: '14g'
    },
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Green Detox Power Block',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400',
    category: 'block',
    benefits: ['Detox', 'Gut Health', 'Cleanse'],
    rating: 4.6,
    reviews: 89,
    description: 'Concentrated green superfood block designed to support natural detoxification and digestive health.',
    longDescription: 'Our Green Detox Power Block is a concentrated superfood blend that supports your body\'s natural detoxification processes. Packed with chlorophyll-rich greens, digestive enzymes, and fiber to cleanse and nourish from within.',
    ingredients: ['Spirulina', 'Chlorella', 'Wheat Grass', 'Digestive Enzymes', 'Prebiotics', 'Natural Mint'],
    nutritionalInfo: {
      calories: 90,
      protein: '8g',
      carbs: '12g',
      fat: '1g',
      fiber: '6g',
      sugar: '3g'
    },
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Tropical Energy Shake',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400',
    category: 'shake',
    benefits: ['Energy', 'Focus', 'Hydration'],
    rating: 4.7,
    reviews: 156,
    description: 'Refreshing tropical blend with natural caffeine and electrolytes for sustained energy and focus.',
    longDescription: 'Transport yourself to paradise with our Tropical Energy Shake. This refreshing blend combines exotic fruits with natural energy boosters and electrolytes to keep you energized and focused throughout your busy day.',
    ingredients: ['Mango', 'Pineapple', 'Coconut Water', 'Natural Caffeine', 'B-Vitamins', 'Electrolytes'],
    nutritionalInfo: {
      calories: 110,
      protein: '4g',
      carbs: '24g',
      fat: '1g',
      fiber: '5g',
      sugar: '18g'
    },
    inStock: true
  },
  {
    id: '4',
    name: 'Gut Health Probiotic Block',
    price: 36.99,
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400',
    category: 'block',
    benefits: ['Gut Health', 'Digestion', 'Immunity'],
    rating: 4.9,
    reviews: 203,
    description: 'Advanced probiotic blend to support digestive health and strengthen your gut microbiome.',
    longDescription: 'Our Gut Health Probiotic Block contains 10 billion CFU of beneficial bacteria strains specifically chosen to support digestive health, boost immunity, and improve overall gut function. Each block is carefully crafted to survive stomach acid and deliver probiotics where they\'re needed most.',
    ingredients: ['Lactobacillus', 'Bifidobacterium', 'Prebiotic Fiber', 'Digestive Enzymes', 'Ginger Root', 'Turmeric'],
    nutritionalInfo: {
      calories: 80,
      protein: '6g',
      carbs: '10g',
      fat: '2g',
      fiber: '7g',
      sugar: '2g'
    },
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Citrus Vitamin C Shake',
    price: 31.99,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
    category: 'shake',
    benefits: ['Immunity', 'Skin Health', 'Energy'],
    rating: 4.5,
    reviews: 94,
    description: 'Zesty citrus blend loaded with vitamin C to support immune function and glowing skin.',
    longDescription: 'Start your day with a burst of sunshine! Our Citrus Vitamin C Shake combines fresh citrus fruits with additional vitamin C and skin-supporting nutrients to boost your immune system while promoting healthy, glowing skin.',
    ingredients: ['Orange', 'Lemon', 'Grapefruit', 'Vitamin C', 'Collagen Peptides', 'Natural Citrus Oils'],
    nutritionalInfo: {
      calories: 100,
      protein: '6g',
      carbs: '20g',
      fat: '1g',
      fiber: '4g',
      sugar: '16g'
    },
    inStock: true
  },
  {
    id: '6',
    name: 'Adaptogen Stress Relief Block',
    price: 38.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
    category: 'block',
    benefits: ['Stress Relief', 'Focus', 'Balance'],
    rating: 4.8,
    reviews: 167,
    description: 'Powerful adaptogenic herbs to help your body manage stress and maintain natural balance.',
    longDescription: 'Combat daily stress with our Adaptogen Stress Relief Block. This powerful blend of adaptogenic herbs helps your body naturally manage stress, improve mental clarity, and maintain optimal balance throughout challenging days.',
    ingredients: ['Ashwagandha', 'Rhodiola', 'Holy Basil', 'Lion\'s Mane', 'Reishi Mushroom', 'L-Theanine'],
    nutritionalInfo: {
      calories: 70,
      protein: '4g',
      carbs: '8g',
      fat: '3g',
      fiber: '5g',
      sugar: '1g'
    },
    inStock: true,
    featured: true
  }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (category: 'shake' | 'block') => 
  products.filter(p => p.category === category);
export const getProductById = (id: string) => products.find(p => p.id === id);
