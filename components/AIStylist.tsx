
import React, { useState } from 'react';
import { getBatikRecommendation } from '../services/geminiService';
import { AIRecommendation } from '../types';

interface AIStylistProps {
  isOpen: boolean;
  onClose: () => void;
  onRecommendationFound: (rec: AIRecommendation) => void;
}

const AIStylist: React.FC<AIStylistProps> = ({ isOpen, onClose, onRecommendationFound }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError('');
    
    try {
      const result = await getBatikRecommendation(query);
      if (result && result.productIds) {
        onRecommendationFound(result);
        onClose();
      } else {
        setError('Could not find recommendations. Try different keywords!');
      }
    } catch (e) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose}></div>
      <div className="bg-[#fdfaf6] w-full max-w-lg rounded-3xl shadow-2xl relative z-10 overflow-hidden">
        <div className="bg-[#8b5e34] p-8 text-white">
          <h2 className="text-3xl font-serif font-bold mb-2">Personal AI Stylist</h2>
          <p className="text-[#d2c2b4]">Tell me what you're looking for, and I'll find the perfect batik for your occasion.</p>
        </div>
        
        <div className="p-8">
          <div className="space-y-4">
            <textarea
              className="w-full h-32 bg-white border border-[#e5e1da] rounded-2xl p-4 focus:ring-2 focus:ring-[#8b5e34] outline-none text-[#4a3a2a] placeholder-[#d2c2b4] transition-all resize-none"
              placeholder="E.g., 'I need a batik for a formal wedding in Bali' or 'I want something modern for my first day at work'..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            
            {error && <p className="text-red-500 text-sm">{error}</p>}
            
            <button
              onClick={handleAsk}
              disabled={loading || !query.trim()}
              className="w-full bg-[#8b5e34] text-white py-4 rounded-full font-bold hover:bg-[#6d4a29] transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Styling your look...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <span>Get Recommendations</span>
                </>
              )}
            </button>
            
            <div className="pt-4 border-t border-[#e5e1da]">
              <p className="text-xs text-[#6d5b4b] font-semibold uppercase tracking-widest mb-2">Popular Inquiries</p>
              <div className="flex flex-wrap gap-2">
                {['Wedding Formal', 'Modern Casual', 'Office Attire', 'Evening Gala'].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setQuery(`I need batik for ${tag.toLowerCase()}`)}
                    className="text-[10px] px-3 py-1 rounded-full border border-[#d2c2b4] text-[#6d5b4b] hover:bg-[#8b5e34] hover:text-white transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStylist;
