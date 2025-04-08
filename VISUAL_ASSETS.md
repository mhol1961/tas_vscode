# TAS Website Visual Assets Guide

This guide provides instructions for gathering and implementing visual assets for the TAS website.

## Asset Directory Structure

```
/public
  /videos           # For video backgrounds and promotional videos
  /images
    /illustrations  # For vector illustrations and icons
    /photos         # For photographs and image assets
  /3d               # For 3D models and Spline scenes
```

## Required Assets

### Hero Section
- **Video Background**: A professional video showing business/technology themes
  - Recommended size: 1920x1080px, MP4 format
  - Placement: `/public/videos/hero-background.mp4`
  - Uncomment the VideoBackground component in `src/app/page.tsx` once added

- **Hero Image** (Alternative to video):
  - High-quality business image showing team collaboration or technology
  - Recommended size: 1920x1080px
  - Placement: `/public/images/photos/hero.jpg`
  - Uncomment the Image component in `src/app/page.tsx` once added

- **3D Element** (Optional enhancement):
  - Create a 3D scene using Spline (https://spline.design)
  - Export and host on Spline's server
  - Copy the scene URL and update the SplineModel component in `src/app/page.tsx`

### Features Section
- **Icons**: Already implemented using react-icons
- **Feature Illustrations** (Optional enhancement):
  - Add illustrations for each feature
  - Recommended size: 600x400px, SVG or PNG with transparency
  - Placement: `/public/images/illustrations/feature-1.svg`, etc.

### Testimonials Section
- **Client Photos**:
  - Professional headshots of clients
  - Recommended size: 200x200px, square aspect ratio
  - Placement: `/public/images/photos/client-1.jpg`, `/public/images/photos/client-2.jpg`
  - Uncomment the Image components in the testimonials section once added

## Resources for Finding Assets

### Stock Photos
- [Unsplash](https://unsplash.com) (Free)
- [Pexels](https://pexels.com) (Free)
- [Pixabay](https://pixabay.com) (Free)
- [Shutterstock](https://shutterstock.com) (Premium)
- [Adobe Stock](https://stock.adobe.com) (Premium)

### Stock Videos
- [Mixkit](https://mixkit.co) (Free)
- [Pexels Videos](https://pexels.com/videos) (Free)
- [Coverr](https://coverr.co) (Free)
- [Envato Elements](https://elements.envato.com) (Premium)

### Illustrations
- [unDraw](https://undraw.co) (Free)
- [DrawKit](https://drawkit.com) (Free & Premium)
- [Humaaans](https://humaaans.com) (Free)
- [Storyset](https://storyset.com) (Free)
- [Blush](https://blush.design) (Free & Premium)

### 3D Elements
- [Spline](https://spline.design) (Free & Premium)
- [LottieFiles](https://lottiefiles.com) (Free & Premium)
- [Rive](https://rive.app) (Free & Premium)
- [Sketchfab](https://sketchfab.com) (Free & Premium)

## Implementation Steps

1. **Gather Assets**: Download or create assets from the resources above
2. **Optimize Assets**: Compress images and videos for web performance
   - For images: Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
   - For videos: Use [Handbrake](https://handbrake.fr) or online services
3. **Place in Directory**: Add files to the appropriate directories
4. **Update Code**: Uncomment the relevant sections in the code
5. **Test**: Verify that assets load correctly and look good on all screen sizes

## Dark Mode Considerations

Ensure that your visual assets work well in both light and dark modes:
- Use transparent backgrounds for illustrations when possible
- For photos, choose images that have good contrast in both modes
- Consider adding dark mode variants for critical visual elements
