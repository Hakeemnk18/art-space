// src/data/products.ts

export interface IProduct {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  price: number;
  showPrice: string
  url: string;
}

// Your product data now lives here
export const products: IProduct[] = [
  {
    id: 1,
    imageUrl: '/images/hero-bg-2.jpg',
    category: 'Tot Bag',
    title: 'Zceanic Octopus Tote',
    price: 2499,
    showPrice: '₹2499',
    url: '/products/oceanic-octopus-tote',
  },
  {
    id: 2,
    imageUrl: '/images/hero-bg-1.jpg',
    category: 'Embroidery',
    title: 'Floral Meadow Hoop',
    price: 3199,
    showPrice: '₹3199',
    url: '/products/floral-meadow-hoop',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2874',
    category: 'Bouquets',
    title: 'Aunset Peony Burst',
    price: 6899,
    showPrice: '₹6899',
    url: '/products/sunset-peony-burst',
  },
  {
    id: 4,
    imageUrl: '/images/hero-bg-2.jpg',
    category: 'Tot Bag',
    title: 'Zceanic Octopus Tote',
    price: 7799,
    showPrice: '₹7799',
    url: '/products/oceanic-octopus-tote',
  },
  {
    id: 5,
    imageUrl: '/images/hero-bg-1.jpg',
    category: 'Embroidery',
    title: 'Floral Meadow Hoop',
    price: 6199,
    showPrice: '₹6199',
    url: '/products/floral-meadow-hoop',
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2874',
    category: 'bouquets',
    title: 'Aunset Peony Burst',
    price: 1899,
    showPrice: '₹1899',
    url: '/products/sunset-peony-burst',
  },
  
  
  // ... add the rest of your products here
];