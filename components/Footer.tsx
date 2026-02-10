
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d241e] text-[#d2c2b4] py-20 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-[#8b5e34] rounded-full flex items-center justify-center text-[#fdfaf6] font-serif text-lg">A</div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Arum's Batik</h1>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Authenticity in every stitch. Arum's Batik is dedicated to preserving the rich heritage of Indonesian textile arts while embracing contemporary designs for the global stage.
          </p>
          <div className="flex space-x-4">
            {['IG', 'FB', 'TW'].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#8b5e34] hover:border-[#8b5e34] transition-all">{social}</a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Shop</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Men's Batik</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Women's Batik</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Premium Silk</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Experience</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Visit Our Gallery</a></li>
            <li><a href="#" className="hover:text-white transition-colors">AI Stylist Guide</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pattern Encyclopedia</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Workshop</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Join Our Newsletter</h4>
          <p className="text-sm mb-4">Be the first to hear about new collections and exclusive offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/20 rounded-l-full px-4 py-3 flex-grow focus:outline-none focus:border-[#8b5e34] transition-all text-white"
            />
            <button className="bg-[#8b5e34] text-white px-6 py-3 rounded-r-full hover:bg-[#6d4a29] transition-all">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
        <p>&copy; 2024 Arum's Batik. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
