# Link Gateway - Ad Monetization Website

A 3-page ad monetization website (link locker/ad gateway) built with Next.js and Tailwind CSS. Users must complete 3 sequential steps with timed ads before accessing their final content.

## Features

- **3-Step Process**: Sequential pages with decreasing timers (20s → 15s → 10s)
- **Ad Integration Ready**: Placeholder ads ready for real ad network integration
- **Responsive Design**: Works on desktop and mobile devices
- **Progress Tracking**: Visual progress bar and step indicators
- **Customizable**: Easy configuration for timers, ads, and final destination
- **Modern UI**: Clean, professional design with smooth animations

## Page Flow

1. **Step 1** - 20-second timer + 2 ads
2. **Step 2** - 15-second timer + 4 ads (3 small + 1 banner)
3. **Step 3** - 10-second timer + 3 ads (1 large banner + 2 medium)
4. **Unlock Page** - Final content/link access

## Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### Basic Settings
Edit `app/config/site.ts` to customize:
- Timer durations for each step
- Final destination link
- Site name and description
- Placeholder ad content

### Ad Network Integration
1. Read the `AD_INTEGRATION_GUIDE.md` for detailed instructions
2. Replace placeholder ads with real ad network code
3. Update `siteConfig.ads.useRealAds` to `true`
4. Add your ad network IDs to the config

## Supported Ad Networks

- **Google AdSense** - High-quality traffic, good fill rates
- **PropellerAds** - Pop-unders, push notifications, high CPM
- **Adsterra** - High payouts, multiple ad formats
- **HilltopAds** - Good for adult/dating content
- **And more** - Easy to integrate additional networks

## File Structure

```
app/
├── page.tsx           # Step 1 (20s timer)
├── step2/page.tsx     # Step 2 (15s timer)
├── step3/page.tsx     # Step 3 (10s timer)
├── unlock/page.tsx    # Final content page
├── components/
│   └── AdContainer.tsx # Reusable ad component
├── config/
│   └── site.ts        # Site configuration
└── layout.tsx         # Root layout
```

## Customization

### Timer Settings
```typescript
// app/config/site.ts
timers: {
  step1: 20,  // seconds
  step2: 15,  // seconds
  step3: 10,  // seconds
}
```

### Final Destination
```typescript
// app/config/site.ts
finalLink: "https://your-download-link.com",
finalContent: "Your exclusive content message",
```

### Styling
- Built with Tailwind CSS
- Easily customizable colors and layouts
- Responsive design included

## Monetization Tips

1. **Quality Traffic**: Focus on organic, engaged visitors
2. **Multiple Networks**: Don't rely on just one ad provider
3. **A/B Testing**: Test different ad placements and timers
4. **Mobile Optimization**: Ensure ads work well on mobile
5. **Analytics**: Track which steps have the highest drop-off

## Legal Requirements

Before going live, ensure you have:
- Privacy Policy
- Terms of Service
- Cookie consent (if required)
- Compliance with local advertising laws

## Performance

- Fast loading times with Next.js optimization
- Minimal JavaScript for better performance
- Responsive images and efficient CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean
- AWS
- Google Cloud

## Support

For questions or issues:
1. Check the `AD_INTEGRATION_GUIDE.md`
2. Review the configuration in `app/config/site.ts`
3. Test with placeholder ads first before integrating real networks

## License

This project is for educational and commercial use. Please comply with all applicable laws and ad network terms of service.
