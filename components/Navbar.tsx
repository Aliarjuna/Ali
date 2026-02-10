
import React from 'react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onStylistClick: () => void;
  isScrolled?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onStylistClick, isScrolled }) => {
  return (
    <nav className={`w-full px-6 py-5 flex justify-between items-center transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#fdfaf6]/95 backdrop-blur-md border-b border-[#e5e1da] py-4' 
        : 'bg-transparent py-8'
    }`}>
      <div className="flex items-center space-x-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-serif text-2xl font-bold shadow-md transform rotate-3 transition-colors duration-500 ${
          isScrolled ? 'bg-[#4a3a2a] text-[#c19a6b]' : 'bg-white/10 backdrop-blur-md text-white border border-white/20'
        }`}>
          A
        </div>
        <h1 className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${
          isScrolled ? 'text-[#4a3a2a]' : 'text-white'
        }`}>
          Arum's <span className={`${isScrolled ? 'text-[#8b5e34]' : 'text-[#c19a6b]'}`}>Batik</span>
        </h1>
      </div>
      
      <div className={`hidden lg:flex space-x-12 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${
        isScrolled ? 'text-[#6d5b4b]' : 'text-white/80'
      }`}>
        <a href="#collection" className="hover:text-[#8b5e34] transition-colors relative group">
          Koleksi
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all group-hover:w-full"></span>
        </a>
        <a href="#" className="hover:text-[#8b5e34] transition-colors relative group">
          Filosofi
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all group-hover:w-full"></span>
        </a>
        <a href="#" className="hover:text-[#8b5e34] transition-colors relative group">
          Butik
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all group-hover:w-full"></span>
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <button 
          onClick={onStylistClick}
          className={`hidden sm:flex items-center space-x-2 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg border ${
            isScrolled 
              ? 'bg-[#4a3a2a] text-[#c19a6b] border-[#c19a6b]/20 hover:bg-[#2d241e]' 
              : 'bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20'
          }`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
          <span>AI Stylist</span>
        </button>
        
        <button 
          onClick={onCartClick}
          className={`relative p-3 rounded-full transition-all ${
            isScrolled ? 'text-[#4a3a2a] hover:bg-[#f3f0ea]' : 'text-white hover:bg-white/10'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute top-1 right-1 bg-[#8b5e34] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-current shadow-md">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
