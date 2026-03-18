'use client';

import { useEffect, useRef } from 'react';

interface GoogleAdProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  adLayout?: string;
  adLayoutKey?: string;
  style?: React.CSSProperties;
  className?: string;
  fullWidthResponsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function GoogleAd({
  adSlot,
  adFormat = 'auto',
  adLayout,
  adLayoutKey,
  style = { display: 'block' },
  className = '',
  fullWidthResponsive = true
}: GoogleAdProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`google-ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-6122051785566009"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-ad-layout-key={adLayoutKey}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
}