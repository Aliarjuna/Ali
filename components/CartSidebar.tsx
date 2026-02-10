
import React from 'react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm" onClick={onClose}></div>
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#fdfaf6] z-[70] shadow-2xl flex flex-col animate-slide-in">
        <div className="p-6 border-b border-[#e5e1da] flex justify-between items-center bg-white">
          <h2 className="text-2xl font-bold text-[#4a3a2a]">Shopping Bag</h2>
          <button onClick={onClose} className="p-2 hover:bg-[#fdfaf6] rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-16 h-16 mx-auto text-[#d2c2b4] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <p className="text-[#6d5b4b]">Your bag is currently empty.</p>
              <button onClick={onClose} className="mt-4 text-[#8b5e34] font-bold hover:underline">Continue Shopping</button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex space-x-4 animate-fade-in">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl shadow-sm" />
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-[#4a3a2a]">{item.name}</h3>
                    <button onClick={() => onRemove(item.id)} className="text-[#d2c2b4] hover:text-red-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                  <p className="text-sm text-[#6d5b4b] mb-2">{item.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#6d5b4b]">Qty: {item.quantity}</span>
                    <span className="font-bold text-[#2d241e]">{formatPrice(item.price)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-[#e5e1da] bg-white space-y-4">
          <div className="flex justify-between items-center text-lg">
            <span className="text-[#6d5b4b]">Subtotal</span>
            <span className="font-bold text-[#2d241e] text-2xl">{formatPrice(total)}</span>
          </div>
          <button 
            disabled={items.length === 0}
            className="w-full bg-[#8b5e34] text-white py-4 rounded-full font-bold text-lg hover:bg-[#6d4a29] transition-all disabled:bg-[#d2c2b4] disabled:cursor-not-allowed shadow-lg"
          >
            Checkout Now
          </button>
          <p className="text-center text-xs text-[#a09081]">Shipping & taxes calculated at checkout.</p>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
