import { Product } from '../types';

export const bmaiProducts: Product[] = [
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

export const antaProducts: Product[] = [
  {
    id: '4',
    name: 'Anta Скайуокер',
    price: 11990,
    description: 'Легкие кроссовки для ежедневных пробежек',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa',
    buyLink: 'https://example.com/buy/skywalker'
  },
  {
    id: '5',
    name: 'Anta Марафон Про',
    price: 13990,
    description: 'Профессиональные марафонские кроссовки',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
    buyLink: 'https://example.com/buy/marathon-pro'
  },
  {
    id: '6',
    name: 'Anta Спринт X',
    price: 12990,
    description: 'Кроссовки для скоростных тренировок',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
    buyLink: 'https://example.com/buy/sprint-x'
  }
];

export const products = [...bmaiProducts, ...antaProducts];