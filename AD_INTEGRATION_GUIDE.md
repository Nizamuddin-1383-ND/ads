# Ad Network Integration Guide

This guide explains how to replace the placeholder ads with real ad networks for monetization.

## Supported Ad Networks

### 1. Google AdSense
**Best for:** High-quality traffic, good fill rates
**Setup:**
1. Apply for AdSense account at https://www.google.com/adsense/
2. Add your site and get approved
3. Replace placeholder ads with AdSense code

```html
<!-- Example AdSense Banner Ad -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXX"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXX"
     data-ad-slot="XXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

### 2. PropellerAds
**Best for:** Pop-unders, push notifications, high CPM
**Setup:**
1. Sign up at https://propellerads.com/
2. Create ad zones for your site
3. Implement their ad codes

```html
<!-- PropellerAds Banner -->
<script type="text/javascript">
    var propellerads_site_id = 'XXXXXXX';
    var propellerads_ad_client = 'XXXXXXX';
</script>
<script type="text/javascript" src="//go.propellerads.com/apu.php"></script>
```

### 3. Adsterra
**Best for:** High payouts, multiple ad formats
**Setup:**
1. Register at https://adsterra.com/
2. Add your website
3. Create ad placements

```html
<!-- Adsterra Banner -->
<script type="text/javascript">
    atOptions = {
        'key' : 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
    };
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.displaycontentnetwork.com/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/invoke.js"></scr' + 'ipt>');
</script>
```

### 4. HilltopAds
**Best for:** Good for adult/dating content, high CPM
**Setup:**
1. Sign up at https://hilltopads.com/
2. Create ad zones
3. Implement ad codes

## Implementation Steps

### Step 1: Replace Placeholder Ads
In each page (`app/page.tsx`, `app/step2/page.tsx`, `app/step3/page.tsx`), find the placeholder ad divs and replace them with actual ad network code.

### Step 2: Add Ad Network Scripts
Add the required scripts to `app/layout.tsx`:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add ad network scripts here */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXX" crossOrigin="anonymous"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

### Step 3: Track Ad Clicks
Modify the `handleAdClick` function to track real ad interactions:

```tsx
const handleAdClick = () => {
  setAdClicked(true);
  
  // Optional: Track with analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'ad_click', {
      'event_category': 'monetization',
      'event_label': 'step1_ad_click'
    });
  }
};
```

### Step 4: Configure Ad Placement
Replace the placeholder ad containers with actual ad network containers:

```tsx
// Before (Placeholder)
<div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg p-8 text-white text-center cursor-pointer">
  <div className="text-2xl font-bold mb-2">🎯 Special Offer!</div>
  <p className="mb-4">Click here for amazing deals</p>
</div>

// After (Real Ad)
<div className="ad-container" onClick={handleAdClick}>
  {/* Insert your ad network code here */}
  <script type="text/javascript">
    // Ad network code
  </script>
</div>
```

## Best Practices

### 1. Ad Placement Strategy
- **Page 1:** 2 medium banner ads (300x250)
- **Page 2:** 3 smaller ads + 1 large banner (728x90)
- **Page 3:** 1 large banner + 2 medium ads
- **Unlock Page:** Bonus offer ads for additional revenue

### 2. Click Detection
Ensure ad clicks are properly detected by:
- Wrapping ad containers with click handlers
- Using event delegation for dynamically loaded ads
- Implementing fallback timers if click detection fails

### 3. Revenue Optimization
- Test different ad networks and placements
- Use A/B testing for ad positions
- Monitor click-through rates and adjust accordingly
- Consider implementing header bidding for higher CPMs

### 4. User Experience
- Keep timer durations reasonable (20s, 15s, 10s)
- Provide clear instructions
- Make ads visually distinct but not intrusive
- Ensure mobile responsiveness

## Security Considerations

1. **Content Security Policy:** Update CSP headers to allow ad network domains
2. **HTTPS:** Ensure all ad networks support HTTPS
3. **Privacy:** Implement GDPR/CCPA compliance if needed
4. **Ad Blockers:** Consider fallback content for users with ad blockers

## Testing

Before going live:
1. Test all ad placements on different devices
2. Verify click detection works correctly
3. Check page load times with ads
4. Test the complete user flow
5. Ensure ads display properly in different browsers

## Monetization Tips

1. **Traffic Quality:** Focus on organic, engaged traffic
2. **Geo-Targeting:** Some networks pay more for specific countries
3. **Niche Content:** Specialized content often has higher CPMs
4. **Multiple Networks:** Don't rely on just one ad network
5. **Analytics:** Track which pages/ads perform best

## Legal Requirements

- Add Privacy Policy
- Include Terms of Service
- Implement cookie consent if required
- Comply with local advertising regulations
- Disclose affiliate relationships if applicable

Remember to always follow each ad network's terms of service and guidelines for proper implementation.