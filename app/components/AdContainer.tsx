'use client';

import { useEffect, useRef } from 'react';

interface AdContainerProps {
  adId: string;
  adType: 'banner' | 'square' | 'large';
  onClick: () => void;
  placeholder?: {
    title: string;
    description: string;
    buttonText: string;
    gradient: string;
  };
}

export default function AdContainer({ adId, adType, onClick, placeholder }: AdContainerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is where you would initialize real ad network code
    // For now, we'll use the placeholder
    if (adRef.current && !placeholder) {
      // Example: Initialize AdSense
      // (window.adsbygoogle = window.adsbygoogle || []).push({});
      
      // Example: Initialize PropellerAds
      // loadPropellerAd(adId);
      
      // Example: Initialize Adsterra
      // loadAdsterraAd(adId);
    }
  }, [adId, placeholder]);

  const getAdSize = () => {
    switch (adType) {
      case 'banner':
        return 'h-24 md:h-32';
      case 'square':
        return 'h-64';
      case 'large':
        return 'h-32 md:h-40';
      default:
        return 'h-32';
    }
  };

  if (placeholder) {
    return (
      <div 
        ref={adRef}
        className={`${placeholder.gradient} rounded-lg p-6 text-white text-center cursor-pointer hover:opacity-90 transition-all ${getAdSize()}`}
        onClick={onClick}
      >
        <div className="text-xl font-bold mb-2">{placeholder.title}</div>
        <p className="mb-4 text-sm">{placeholder.description}</p>
        <div className="bg-white text-gray-800 px-4 py-2 rounded-full inline-block font-semibold text-sm">
          {placeholder.buttonText}
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={adRef}
      className={`bg-gray-100 rounded-lg flex items-center justify-center ${getAdSize()}`}
      onClick={onClick}
    >
      {/* Real ad network code will be inserted here */}
      <div className="text-gray-500 text-center">
        <div className="text-sm font-medium">Advertisement</div>
        <div className="text-xs">Ad ID: {adId}</div>
      </div>
    </div>
  );
}