import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-warm-50 tracking-tight leading-tight">
        {title}
      </h2>

      <div className={`mt-4 mb-4 flex items-center gap-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-gold-500" />
        <span className="w-2 h-2 rotate-45 bg-gold-500" />
        <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-gold-500" />
      </div>

      {subtitle && (
        <p className="text-warm-300 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
