import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

export default function ImageWithFallback({ src, alt, className = '', ...props }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const fallbackSrc = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-charcoal-900 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-gold-500/30 border-t-gold-500 animate-spin" />
        </div>
      )}
      
      {error ? (
        <div className="w-full h-full min-h-[160px] bg-charcoal-850 flex flex-col items-center justify-center text-charcoal-500 p-4">
          <ImageOff className="w-8 h-8 mb-2 text-gold-500/60" />
          <span className="text-xs tracking-wider text-warm-300">MNL Architecture Visual</span>
        </div>
      ) : (
        <img
          src={src || fallbackSrc}
          alt={alt || "MNL GROUP"}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
}
