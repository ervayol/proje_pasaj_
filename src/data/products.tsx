// src/data/products.tsx
export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 14",
    category: "telefon",
    description: "Apple iPhone 14 akıllı telefon.",
    price: 35000,
  },
   {
    id: 2,
    name: "iPad Pro",
    category: "tablet",
    description: "Apple iPad Pro 11 inç tablet.",
    price: 25000,
  },
  {
    id: 3,
    name: "MacBook Air",
    category: "laptop",
    description: "Apple M1 MacBook Air.",
    price: 45000,
  },
];