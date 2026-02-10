
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-[#1a1410]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1582533089852-02402220bad7?q=80&w=2000&auto=format&fit=crop" 
          alt="Arum's Signature Collection Background" 
          className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom"
        />
        {/* Artistic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1410] via-[#1a1410]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-transparent to-transparent opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="h-[1px] w-12 bg-[#c19a6b]"></span>
            <span className="text-[#c19a6b] font-semibold tracking-[0.4em] uppercase text-xs">Arum's Exclusive</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Jiwa Tradisi, <br />
            <span className="italic font-serif text-[#c19a6b]">Nafas Modern.</span>
          </h2>
          
          <p className="text-[#d2c2b4] text-xl mb-10 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Setiap helai kain di Arum's Batik adalah narasi tentang ketekunan perajin dan keanggunan budaya yang abadi. Temukan koleksi mahakarya kami.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button className="group bg-[#8b5e34] text-white px-10 py-5 rounded-full font-bold hover:bg-[#a67c52] transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(139,94,52,0.3)] flex items-center justify-center">
              Eksplorasi Koleksi
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
            <button className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all">
              Kisah Kami
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#c19a6b] to-transparent"></div>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite alternate ease-in-out;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s forwards cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;
