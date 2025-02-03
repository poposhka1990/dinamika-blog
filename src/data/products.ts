import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'BMAI Феникс Про',
    price: 12990,
    description: 'Профессиональные беговые кроссовки с улучшенной амортизацией',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    buyLink: 'https://example.com/buy/phoenix-pro'
  },
  {
    id: '2',
    name: 'BMAI Марафон Элит',
    price: 14990,
    description: 'Легкие марафонские кроссовки с карбоновой пластиной',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570',
    buyLink: 'https://example.com/buy/marathon-elite'
  },
  {
    id: '3',
    name: 'BMAI Темпо Буст',
    price: 13990,
    description: 'Универсальные кроссовки для скоростных тренировок',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2',
    buyLink: 'https://example.com/buy/tempo-boost'
  }
];