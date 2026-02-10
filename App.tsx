
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import AIStylist from './components/AIStylist';
import Footer from './components/Footer';
import { Product, CartItem, AIRecommendation } from './types';
import { BATIK_PRODUCTS } from './constants';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isStylistOpen, setIsStylistOpen] = useState(false);
  const [aiRecommendation, setAiRecommendation] = useState<AIRecommendation | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const filteredProducts = BATIK_PRODUCTS.filter(p => 
    selectedCategory === 'All' ? true : p.category === selectedCategory
  );

  return (
    <div className="min-h-screen batik-pattern">
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'translate-y-0' : 'translate-y-0'}`}>
         <Navbar 
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
          onCartClick={() => setIsCartOpen(true)}
          onStylistClick={() => setIsStylistOpen(true)}
          isScrolled={scrolled}
        />
      </div>
      
      <main>
        <Hero />
        
        {/* Collection Section */}
        <section id="collection" className="container mx-auto px-6 py-32 relative z-10 bg-[#fdfaf6]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[#8b5e34] font-semibold tracking-widest uppercase text-xs mb-3 block">Pilihan Arum</span>
              <h2 className="text-5xl md:text-6xl font-bold text-[#4a3a2a]">Koleksi Mahakarya</h2>
              <div className="h-1 w-20 bg-[#8b5e34] mt-6"></div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['All', 'Modern', 'Classic', 'Premium'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setAiRecommendation(null);
                  }}
                  className={`px-8 py-3 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 ${
                    selectedCategory === cat && !aiRecommendation
                      ? 'bg-[#8b5e34] text-white shadow-lg' 
                      : 'bg-white border border-[#e5e1da] text-[#6d5b4b] hover:border-[#8b5e34] hover:text-[#8b5e34]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {aiRecommendation && (
            <div className="mb-16 p-10 bg-[#8b5e34]/5 border-l-4 border-[#8b5e34] rounded-r-3xl animate-fade-in shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#8b5e34] p-2.5 rounded-full text-white shadow-md">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#4a3a2a]">Rekomendasi Stylist AI</h3>
              </div>
              <p className="text-[#6d5b4b] text-lg italic mb-10 leading-relaxed max-w-4xl">"{aiRecommendation.reasoning}"</p>
              <button 
                onClick={() => setAiRecommendation(null)}
                className="text-xs font-bold text-[#8b5e34] uppercase tracking-[0.2em] hover:text-[#4a3a2a] transition-colors border-b border-[#8b5e34]/30 pb-1"
              >
                ← Kembali ke semua koleksi
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts
              .filter(p => !aiRecommendation || aiRecommendation.productIds.includes(p.id))
              .map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart}
                  highlight={aiRecommendation?.productIds.includes(product.id)}
                />
              ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-32 bg-white/50 rounded-3xl border border-dashed border-[#d2c2b4]">
              <p className="text-[#d2c2b4] text-2xl italic font-serif">Maaf, koleksi belum tersedia untuk kategori ini.</p>
            </div>
          )}
        </section>

        {/* Brand Philosophy Section */}
        <section className="bg-[#4a3a2a] py-32 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
            <svg width="600" height="600" viewBox="0 0 100 100" fill="currentColor"><path d="M50 0 L100 50 L50 100 L0 50 Z" /></svg>
          </div>
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1590739225287-bd2ba5193952?q=80&w=800&auto=format&fit=crop" 
                className="rounded-3xl shadow-2xl z-10 relative" 
                alt="Batik Making Process" 
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border-8 border-[#c19a6b]/20 rounded-3xl -z-0"></div>
            </div>
            <div className="space-y-8">
              <span className="text-[#c19a6b] font-bold tracking-[0.3em] uppercase text-xs">Filosofi Arum</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Melestarikan Warisan, <br />Menembus Zaman.</h2>
              <p className="text-[#d2c2b4] text-lg leading-relaxed">
                Arum's Batik bukan sekadar busana. Kami adalah jembatan antara masa lalu yang agung dan masa depan yang dinamis. Setiap titik malam dan goresan canting membawa doa dan harapan bagi penggunanya.
              </p>
              <ul className="space-y-4">
                {[
                  'Batik Tulis & Cap Original',
                  'Pewarna Alam Ramah Lingkungan',
                  'Desain Kontemporer yang Adaptif',
                  'Dukungan Komunitas Perajin Lokal'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#c19a6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemove={removeFromCart}
      />

      <AIStylist 
        isOpen={isStylistOpen} 
        onClose={() => setIsStylistOpen(false)}
        onRecommendationFound={(rec) => setAiRecommendation(rec)}
      />

      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in { animation: slide-in 0.4s ease-out; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
      `}</style>
    </div>
  );
};

export default App;
