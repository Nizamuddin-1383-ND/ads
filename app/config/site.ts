export const siteConfig = {
  // Site Information
  name: "Link Gateway",
  description: "Unlock your content by completing simple steps",
  
  // Timer Settings (in seconds)
  timers: {
    step1: 20,
    step2: 15,
    step3: 10,
  },
  
  // Final Destination
  finalLink: "https://example.com/your-download-link",
  finalContent: "Your exclusive content is now available!",
  
  // Ad Network Configuration
  ads: {
    // Set to true when you have real ads configured
    useRealAds: false,
    
    // Ad Network IDs (replace with your actual IDs)
    adSense: {
      publisherId: "ca-pub-XXXXXXXXX",
      adSlots: {
        step1_ad1: "XXXXXXXXX",
        step1_ad2: "XXXXXXXXX",
        step2_ad1: "XXXXXXXXX",
        step2_ad2: "XXXXXXXXX",
        step2_ad3: "XXXXXXXXX",
        step2_banner: "XXXXXXXXX",
        step3_banner: "XXXXXXXXX",
        step3_ad1: "XXXXXXXXX",
        step3_ad2: "XXXXXXXXX",
      }
    },
    
    propellerAds: {
      siteId: "XXXXXXX",
      zones: {
        banner: "XXXXXXX",
        square: "XXXXXXX",
        large: "XXXXXXX",
      }
    },
    
    adsterra: {
      keys: {
        banner: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        square: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        large: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      }
    }
  },
  
  // Placeholder Ad Content
  placeholderAds: {
    step1: [
      {
        title: "🎯 Special Offer!",
        description: "Click here for amazing deals",
        buttonText: "Click Me!",
        gradient: "bg-gradient-to-r from-purple-400 to-pink-400"
      },
      {
        title: "💰 Earn Money!",
        description: "Start earning today",
        buttonText: "Learn More",
        gradient: "bg-gradient-to-r from-green-400 to-blue-400"
      }
    ],
    step2: [
      {
        title: "🔥 Hot Deal!",
        description: "Limited time offer",
        buttonText: "Get Now",
        gradient: "bg-gradient-to-r from-red-400 to-orange-400"
      },
      {
        title: "💎 Premium",
        description: "Upgrade your experience",
        buttonText: "Try Free",
        gradient: "bg-gradient-to-r from-blue-400 to-cyan-400"
      },
      {
        title: "🚀 Launch",
        description: "Start your journey",
        buttonText: "Begin",
        gradient: "bg-gradient-to-r from-purple-400 to-indigo-400"
      }
    ],
    step3: [
      {
        title: "💰 Make Money Online",
        description: "Start earning from home today",
        buttonText: "Start Now",
        gradient: "bg-gradient-to-r from-teal-400 to-blue-500"
      },
      {
        title: "🎯 Best Deals",
        description: "Save up to 80% on everything",
        buttonText: "Shop Now",
        gradient: "bg-gradient-to-r from-orange-400 to-red-500"
      }
    ],
    banners: {
      step2: {
        title: "🎉 Special Promotion!",
        description: "Don't miss out on this exclusive opportunity",
        buttonText: "Click Here Now!",
        gradient: "bg-gradient-to-r from-yellow-400 to-orange-400"
      },
      step3: {
        title: "🌟 EXCLUSIVE OFFER 🌟",
        description: "Get premium access to amazing content and services",
        buttonText: "CLAIM NOW - LIMITED TIME!",
        gradient: "bg-gradient-to-r from-pink-500 to-purple-600"
      }
    }
  },
  
  // Analytics
  analytics: {
    googleAnalytics: "G-XXXXXXXXXX", // Replace with your GA4 ID
    trackAdClicks: true,
    trackPageViews: true,
  },
  
  // SEO
  seo: {
    keywords: "link locker, ad gateway, unlock content, download link",
    ogImage: "/og-image.jpg", // Add your OG image
  }
};

export type SiteConfig = typeof siteConfig;