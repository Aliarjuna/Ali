
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  highlight?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, highlight }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  };

  return (
    <div className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col ${highlight ? 'ring-2 ring-[#8b5e34]' : ''}`}>
      <div className="relative overflow-hidden h-[320px]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-[#fdfaf6]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#8b5e34]">
          {product.category}
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
           <button 
            onClick={() => onAddToCart(product)}
            className="bg-white text-[#4a3a2a] p-3 rounded-full hover:bg-[#8b5e34] hover:text-white transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
           >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
           </button>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#4a3a2a]">{product.name}</h3>
          <span className="text-sm font-semibold text-[#8b5e34]">{product.patternOrigin}</span>
        </div>
        <p className="text-[#6d5b4b] text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold text-[#2d241e]">{formatPrice(product.price)}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="text-sm font-bold text-[#8b5e34] hover:text-[#6d4a29] underline decoration-dotted underline-offset-4"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
