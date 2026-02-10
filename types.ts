
export interface Product {
  id: string;
  name: string;
  category: 'Classic' | 'Modern' | 'Premium';
  price: number;
  description: string;
  image: string;
  patternOrigin: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AIRecommendation {
  productIds: string[];
  reasoning: string;
}
