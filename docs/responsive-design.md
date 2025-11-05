# World-Class Responsive Design: The Complete Guide

> **Philosophy**: A world-class site isn't just responsive—it's an adaptive experience that feels native to every device, in every context, at every pixel of width. This is not about stacking blocks on mobile; it's about context, performance, and craft.

---

## I. The Philosophy: Context & Fluidity

### 1. Think "Context-First," Not Just "Mobile-First"
A user on a phone isn't just on a small screen; they're likely on the go, distracted, and need information (like a "Call" button) prioritized.

**Mobile User Context:**
- On the move, possibly one-handed
- Limited attention span
- Needs quick actions (call, book, directions)
- May have slow network connection
- Small screen, thumb-based navigation

**Desktop User Context:**
- Comfortable environment, focused
- Can consume detailed content
- Mouse/keyboard precision
- Faster connection
- Large screen, mouse-based navigation

**Application:**
```css
/* Mobile: Quick action prioritized */
.cta-phone {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 100;
}

/* Desktop: Part of header */
@media (min-width: 1024px) {
  .cta-phone {
    position: static;
  }
}
```

### 2. Design "Content-Out"
Don't pick arbitrary breakpoints (e.g., 320px, 768px). Start with your design at its smallest width, slowly expand the viewport, and add a breakpoint only when the content or layout "breaks" or looks awkward.

**Process:**
1. Start at 320px (smallest common phone)
2. Slowly expand browser width
3. Add breakpoint when layout feels uncomfortable
4. Repeat until you reach 1920px+

**Our Content-Based Breakpoints:**
```css
/* Natural breakpoints based on content needs */
:root {
  --bp-xs: 375px;   /* Small phones landscape */
  --bp-sm: 640px;   /* Large phones, small tablets */
  --bp-md: 896px;   /* Tablets landscape, small laptops */
  --bp-lg: 1200px;  /* Desktop */
  --bp-xl: 1440px;  /* Large desktop */
  --bp-2xl: 1920px; /* Extra large screens */
}
```

### 3. Master "Intrinsic Design"
Use modern CSS (like Grid, `clamp()`, `minmax()`) to build components that are naturally responsive. Your layout should be decided by the content, not by the viewport.

**Intrinsic Grid Example:**
```css
/* Zero media queries - fully responsive */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

**Fluid Typography:**
```css
h1 {
  /* Scales from 32px to 72px based on viewport */
  font-size: clamp(2rem, 5vw, 4.5rem);
}
```

**Fluid Spacing:**
```css
.section {
  /* Scales from 48px to 128px */
  padding: clamp(3rem, 8vw, 8rem) clamp(1rem, 3vw, 3rem);
}
```

### 4. Embrace the "In-Between"
Amateurs test at 3-4 device widths. Masters test by slowly resizing the browser window. Your design must be flawless at 480px, 845px, and 1120px, not just at your main breakpoints.

**Testing Method:**
1. Open browser DevTools
2. Enable responsive mode
3. Slowly drag from 320px to 1920px
4. Watch for any awkward moments
5. Add micro-adjustments as needed

### 5. Stop Thinking in "Pages." Start Thinking in "Systems"
Design robust components that can be placed in any container and will adapt. A card, a headline, a form—they should all be responsive in their own right.

**Component-Based Approach:**
```css
/* Card component - works anywhere */
.card {
  container-type: inline-size;
  container-name: card;
}

/* Card adapts based on its own width, not viewport */
@container card (min-width: 400px) {
  .card__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
```

### 6. Progressive Disclosure is Your Mobile Superpower
A mobile screen is not a place to dump your entire desktop site. It's a place to show the most critical information first, and "progressively disclose" secondary info inside accordions, drawers, or tabs.

**Mobile Strategy:**
- Show: Essential info, primary CTA, hero image
- Hide (but accessible): Secondary info in accordions, full description in "Read More"
- Remove: Decorative elements, tertiary content

**Example:**
```html
<!-- Mobile: Collapsed -->
<details class="info-drawer">
  <summary>View Full Details</summary>
  <div class="expanded-content">
    <!-- Full description, gallery, etc -->
  </div>
</details>

<!-- Desktop: Always visible -->
@media (min-width: 1024px) {
  .info-drawer summary { display: none; }
  .expanded-content { display: block; }
}
```

### 7. The Smallest Viewport is Your Foundation
By starting at 320px (the smallest common phone), you are forced to prioritize. This "constraint" is a gift that leads to a cleaner, more focused design for all viewports.

**Mobile-First CSS:**
```css
/* Base: Mobile (320px+) */
.hero {
  padding: 2rem 1rem;
}

.hero__title {
  font-size: 2rem;
}

/* Enhance for larger screens */
@media (min-width: 768px) {
  .hero {
    padding: 4rem 2rem;
  }
  
  .hero__title {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .hero {
    padding: 6rem 3rem;
  }
  
  .hero__title {
    font-size: 4.5rem;
  }
}
```

### 8. The Largest Viewport is Your "Art Direction" Moment
On a 4K monitor, don't just let your website stretch. Use the extra space for stunning images, beautiful negative space, or multi-column layouts.

**4K Strategy:**
```css
@media (min-width: 1920px) {
  .container {
    max-width: 1600px; /* Cap width for readability */
    margin: 0 auto;
  }
  
  .hero {
    background-size: cover;
    background-position: center;
    min-height: 100vh; /* Full-screen experience */
  }
  
  .content-grid {
    grid-template-columns: repeat(4, 1fr); /* 4 columns instead of 3 */
  }
}
```

### 9. Abandon Pixel-Perfect Mocks
The design file is a guide, not a specification. The browser is your one true source of truth. A "pixel-perfect" design must be perfect in code, not in Figma.

**Workflow:**
1. Use Figma for initial concepts
2. Build components in browser immediately
3. Refine in browser, not design tool
4. Test across devices
5. Document final implementation

### 10. A World-Class Site Feels Native
The ultimate goal: it shouldn't feel like a website forced onto a phone. It should feel like an app, with thumb-friendly navigation and effortless performance.

**Native-Feel Checklist:**
- [ ] Bottom navigation on mobile
- [ ] Instant feedback on interactions
- [ ] Smooth scrolling
- [ ] No horizontal scrolling
- [ ] Appropriate input types for keyboards
- [ ] Respects system preferences (dark mode, reduced motion)

---

## II. The Craft: Typography & Spacing

### 11. Implement True Fluid Typography
Use the CSS `clamp(min, preferred, max)` function to make your font-size scale smoothly with the viewport.

```css
/* Typography System - Fluid Sizing */
:root {
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.4vw, 1rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.5vw, 1.5rem);
  --text-xl: clamp(1.5rem, 1.3rem + 1vw, 2.25rem);
  --text-2xl: clamp(2rem, 1.7rem + 1.5vw, 3rem);
  --text-3xl: clamp(2.5rem, 2rem + 2.5vw, 4rem);
  --text-4xl: clamp(3rem, 2.5rem + 3vw, 5rem);
  --text-5xl: clamp(3.5rem, 2.5rem + 5vw, 7rem);
}

h1 { font-size: var(--text-4xl); }
h2 { font-size: var(--text-3xl); }
h3 { font-size: var(--text-2xl); }
p { font-size: var(--text-base); }
```

### 12. Maintain a Readable "Measure"
The "measure" is the length of a line of text. It should be 45-75 characters on all screen sizes.

```css
.content-text {
  max-width: 65ch; /* 65 characters */
  margin-left: auto;
  margin-right: auto;
}

/* For narrow content */
.lead-text {
  max-width: 45ch;
}

/* For wide content */
.caption-text {
  max-width: 75ch;
}
```

### 13. Adjust line-height Responsively
Large headlines need a tighter line height than body text.

```css
h1, h2, h3 {
  line-height: 1.1; /* Tight for headlines */
}

h4, h5, h6 {
  line-height: 1.3; /* Medium for subheadings */
}

p, li {
  line-height: 1.6; /* Generous for body text */
}

/* Even more generous on mobile for easier reading */
@media (max-width: 640px) {
  p, li {
    line-height: 1.75;
  }
}
```

### 14. Master text-wrap: balance;
This new CSS property automatically prevents typographic "widows" (a single word on the last line) in your headlines.

```css
h1, h2, h3, h4 {
  text-wrap: balance; /* Prevents orphaned words */
}

/* Fallback for older browsers */
@supports not (text-wrap: balance) {
  h1, h2, h3, h4 {
    /* Use &nbsp; manually in HTML */
  }
}
```

### 15. Use rem for Global Spacing, em for Local Spacing
- `rem` scales with root font size (global consistency)
- `em` scales with element's font size (local consistency)

```css
/* Global spacing - uses rem */
.section {
  padding: 3rem 1.5rem;
  margin-bottom: 4rem;
}

/* Local spacing - uses em */
.button {
  padding: 0.75em 2em; /* Scales with button's font-size */
  font-size: 1rem;
}

.button-large {
  font-size: 1.25rem; /* Padding automatically scales */
}
```

### 16. Implement a Modular Spacing Scale
Use a strict scale for all padding and margins.

```css
:root {
  /* 8-point grid system */
  --space-1: 0.5rem;   /* 8px */
  --space-2: 1rem;     /* 16px */
  --space-3: 1.5rem;   /* 24px */
  --space-4: 2rem;     /* 32px */
  --space-5: 2.5rem;   /* 40px */
  --space-6: 3rem;     /* 48px */
  --space-8: 4rem;     /* 64px */
  --space-10: 5rem;    /* 80px */
  --space-12: 6rem;    /* 96px */
  --space-16: 8rem;    /* 128px */
  --space-20: 10rem;   /* 160px */
}

/* Usage - always use variables */
.card {
  padding: var(--space-4);
  margin-bottom: var(--space-6);
}
```

### 17. Use Fluid Spacing
Your margins and padding should also scale with the viewport.

```css
:root {
  /* Fluid spacing */
  --space-fluid-xs: clamp(1rem, 2vw, 1.5rem);
  --space-fluid-sm: clamp(1.5rem, 3vw, 2.5rem);
  --space-fluid-md: clamp(2rem, 5vw, 4rem);
  --space-fluid-lg: clamp(3rem, 8vw, 6rem);
  --space-fluid-xl: clamp(4rem, 10vw, 8rem);
}

.section {
  padding: var(--space-fluid-lg) var(--space-fluid-sm);
}
```

### 18. Tweak Letter-Spacing (Tracking)
Adjust letter-spacing based on font size and style.

```css
/* Large headlines - tighter */
h1 {
  letter-spacing: -0.02em;
}

/* Uppercase navigation - wider */
.nav-link {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Body text - slight increase */
p {
  letter-spacing: 0.01em;
}

/* Script fonts - no adjustment */
.script-font {
  letter-spacing: 0;
}
```

### 19. Obsess Over "Vertical Rhythm"
Use your spacing scale to ensure vertical rhythm is consistent and balanced.

```css
/* Establish rhythm */
.content > * + * {
  margin-top: var(--space-4);
}

.content h2 {
  margin-top: var(--space-8); /* More space before headings */
  margin-bottom: var(--space-3);
}

.content p {
  margin-bottom: var(--space-4);
}
```

### 20. Use ch and max-width for Text Blocks
A div of text should almost never be 100% width.

```css
.text-block {
  max-width: 65ch; /* Optimal readability */
  margin-inline: auto;
}

.narrow-text {
  max-width: 45ch; /* For emphasis */
}

.wide-text {
  max-width: 85ch; /* For dense content */
}
```

---

## III. The Engine: Layout & CSS

### 21. Master CSS Grid minmax() and auto-fit
Create a fully responsive, wrapping grid with zero media queries.

```css
/* Auto-responsive grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* For different card sizes */
.portfolio-grid {
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

.blog-grid {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
```

### 22. Use aspect-ratio for All Media
Reserve space before content loads to prevent layout shift (CLS).

```css
/* Hero image */
.hero-image {
  aspect-ratio: 16 / 9;
}

/* Portfolio images */
.portfolio-image {
  aspect-ratio: 4 / 3;
}

/* Square images */
.avatar {
  aspect-ratio: 1;
}

/* With object-fit */
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

### 23. Use flex-wrap: wrap; Generously
Natural responsiveness for inline elements.

```css
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.nav-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
```

### 24. Use gap Instead of margin
Cleaner spacing for Grid and Flexbox.

```css
/* ✅ Modern approach */
.grid {
  display: grid;
  gap: 2rem; /* Consistent spacing everywhere */
}

/* ❌ Old approach */
.grid-item {
  margin: 1rem; /* Inconsistent, needs :last-child fix */
}
```

### 25. Use CSS Logical Properties
Future-proof for RTL languages.

```css
/* ✅ Logical properties */
.card {
  margin-inline-start: 1rem; /* margin-left in LTR, margin-right in RTL */
  padding-inline: 2rem;      /* padding-left + padding-right */
  padding-block: 3rem;       /* padding-top + padding-bottom */
}

/* ❌ Physical properties */
.card {
  margin-left: 1rem;
  padding: 3rem 2rem;
}
```

### 26. Use Container Queries
Components change based on their container width, not viewport.

```css
/* Define container */
.sidebar {
  container-type: inline-size;
  container-name: sidebar;
}

/* Card adapts to sidebar width */
@container sidebar (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}

/* Same card in main content */
.main {
  container-type: inline-size;
  container-name: main;
}

@container main (min-width: 600px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
```

### 27. Never Let Horizontal Scrolling Happen
The cardinal sin of responsive design.

```css
/* Prevent overflow */
html, body {
  overflow-x: hidden;
  max-width: 100%;
}

/* Safe images */
img, video {
  max-width: 100%;
  height: auto;
}

/* Safe text */
* {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Safe containers */
.container {
  max-width: 100%;
  padding-inline: clamp(1rem, 3vw, 3rem);
}
```

### 28. Use max-width: 100% on All img and video Tags
Non-negotiable baseline.

```css
img, video, iframe {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### 29. Use Relative Units for Widths
Let elements be fluid.

```css
/* ✅ Fluid */
.container {
  width: 90%;
  max-width: 1200px;
}

.sidebar {
  width: clamp(250px, 30%, 400px);
}

/* ❌ Fixed */
.container {
  width: 1200px;
}
```

### 30. Use min-height: 100vh; with Fallback
Handle mobile browser URL bars.

```css
/* CSS */
.hero {
  min-height: 100vh;
  min-height: 100dvh; /* Dynamic viewport height - accounts for URL bar */
}

/* Alternative: JavaScript solution */
```javascript
// Set custom property for mobile viewport
const setVH = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

setVH();
window.addEventListener('resize', setVH);
```

```css
.hero {
  min-height: calc(var(--vh, 1vh) * 100);
}
```

---

## IV. The Experience: Interaction & Touch

### 31. Design Generous Touch Targets
All interactive elements must be at least 44x44px (Apple) or 48x48px (Android).

```css
/* Buttons */
.btn {
  min-height: 48px;
  min-width: 48px;
  padding: 12px 24px;
}

/* Links in text - increase tap area */
a {
  display: inline-block;
  padding: 8px 4px;
  margin: -8px -4px; /* Negative margin to maintain visual alignment */
}

/* Icon buttons */
.icon-btn {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 32. Make Navigation "Thumb-Friendly"
On mobile, important actions should be at the bottom within thumb reach.

```css
/* Mobile: Bottom navigation */
@media (max-width: 768px) {
  .mobile-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    padding: 12px;
    background: var(--color-white);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .primary-cta {
    position: fixed;
    bottom: 80px; /* Above bottom nav */
    right: 16px;
    z-index: 100;
  }
}

/* Desktop: Top navigation */
@media (min-width: 769px) {
  .mobile-nav {
    display: none;
  }
  
  .desktop-nav {
    display: flex;
  }
}
```

### 33. Master @media (hover: hover)
Prevent "sticky hover" states on touch devices.

```css
/* Base styles (touch-friendly) */
.card {
  background: var(--color-cream);
  transition: transform 300ms ease;
}

/* Hover styles only on hover-capable devices */
@media (hover: hover) and (pointer: fine) {
  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
  }
}

/* Touch-specific active state */
@media (hover: none) {
  .card:active {
    transform: scale(0.98);
  }
}
```

### 34. Design for the "Fat Finger"
The tap target should be invisibly larger than the visible button.

```css
.small-button {
  /* Visible button */
  font-size: 14px;
  padding: 8px 16px;
  
  /* Invisible tap area */
  position: relative;
}

.small-button::before {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  /* Now tap target is 48x48px minimum */
}
```

### 35. Optimize Forms for Mobile
Use correct input types for appropriate keyboards.

```html
<!-- Show numeric keyboard -->
<input type="tel" inputmode="numeric" pattern="[0-9]*">

<!-- Show email keyboard -->
<input type="email" inputmode="email">

<!-- Show URL keyboard -->
<input type="url" inputmode="url">

<!-- Show decimal keyboard -->
<input type="number" inputmode="decimal">
```

```css
/* Mobile-optimized forms */
@media (max-width: 768px) {
  .form-group {
    margin-bottom: var(--space-4);
  }
  
  input, select, textarea {
    font-size: 16px; /* Prevents zoom on iOS */
    padding: 16px;
    width: 100%;
  }
  
  /* Single column layout */
  .form-row {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
}
```

### 36. Respect User Preferences: Reduced Motion
Disable non-essential animations for users who get motion sickness.

```css
/* Default: Full animations */
.card {
  transition: transform 300ms ease, opacity 200ms ease;
}

.card:hover {
  transform: translateY(-8px);
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .card:hover {
    transform: none; /* No movement */
    opacity: 0.9; /* Subtle feedback instead */
  }
}
```

### 37. Respect User Preferences: Reduced Data
Don't load heavy assets for users on metered data.

```css
/* Default: Full quality */
.hero {
  background-image: url('hero-4k.jpg');
}

/* Reduced data: Lower quality */
@media (prefers-reduced-data: reduce) {
  .hero {
    background-image: url('hero-720p.jpg');
  }
  
  /* Don't autoplay videos */
  video[autoplay] {
    autoplay: none;
  }
}
```

### 38. Microinteractions Must Be Instant
Animations must feel fast on mobile.

```css
/* Mobile: Faster animations */
@media (max-width: 768px) {
  .btn {
    transition: all 150ms ease; /* 150ms instead of 300ms */
  }
  
  .modal {
    animation-duration: 200ms; /* Quick entrance */
  }
}

/* Desktop: Slightly slower for elegance */
@media (min-width: 769px) {
  .btn {
    transition: all 250ms ease;
  }
  
  .modal {
    animation-duration: 300ms;
  }
}
```

### 39. Don't Over-Rely on Gestures
Keep primary actions obvious and tap-based.

```html
<!-- ✅ Clear, tappable controls -->
<div class="gallery">
  <button class="prev">Previous</button>
  <img src="..." alt="...">
  <button class="next">Next</button>
  <div class="dots">
    <button class="dot active"></button>
    <button class="dot"></button>
    <button class="dot"></button>
  </div>
</div>

<!-- ❌ Relies only on swipe gesture -->
<div class="gallery-swipe-only">
  <img src="..." alt="...">
</div>
```

### 40. Test with "One Hand, One Eye"
Can a user navigate with one hand while holding coffee, with only half their attention?

**Checklist:**
- [ ] All important buttons within thumb reach
- [ ] Text is large enough to read while distracted
- [ ] Actions have clear labels (not just icons)
- [ ] Primary CTA is obvious
- [ ] Error messages are prominent

---

## V. The Speed: Performance & Assets

### 41. Master the <picture> Element for "Art Direction"
Serve different crops for different viewports.

```html
<picture>
  <!-- Mobile: Portrait crop focusing on subject -->
  <source 
    media="(max-width: 768px)"
    srcset="hero-mobile-400.webp 400w,
            hero-mobile-800.webp 800w"
    sizes="100vw"
  >
  
  <!-- Tablet: Balanced crop -->
  <source 
    media="(max-width: 1024px)"
    srcset="hero-tablet-800.webp 800w,
            hero-tablet-1200.webp 1200w"
    sizes="100vw"
  >
  
  <!-- Desktop: Landscape crop with full scene -->
  <source 
    srcset="hero-desktop-1200.webp 1200w,
            hero-desktop-1920.webp 1920w,
            hero-desktop-2560.webp 2560w"
    sizes="100vw"
  >
  
  <!-- Fallback -->
  <img 
    src="hero-desktop-1200.jpg" 
    alt="Elegant wedding reception with candlelit tables and floral centerpieces"
    loading="eager"
    width="1920"
    height="1080"
  >
</picture>
```

### 42. Use srcset and sizes on Every <img> Tag
Let the browser choose the most efficient image.

```html
<img 
  src="image-800.jpg"
  srcset="image-400.jpg 400w,
          image-800.jpg 800w,
          image-1200.jpg 1200w,
          image-1920.jpg 1920w"
  sizes="(max-width: 768px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  alt="Corporate event setup with branded stage backdrop"
  loading="lazy"
  width="800"
  height="600"
>
```

**sizes Explanation:**
- Mobile (≤768px): Image is 100% of viewport width
- Tablet (≤1024px): Image is 50% of viewport width
- Desktop: Image is 33% of viewport width

### 43. Serve Next-Gen Formats (WebP, AVIF)
Higher quality at smaller file size.

```html
<picture>
  <!-- Modern browsers: AVIF (best compression) -->
  <source 
    srcset="image-400.avif 400w, image-800.avif 800w"
    type="image/avif"
  >
  
  <!-- Modern browsers: WebP (good compression) -->
  <source 
    srcset="image-400.webp 400w, image-800.webp 800w"
    type="image/webp"
  >
  
  <!-- Fallback: JPEG -->
  <img 
    src="image-800.jpg"
    srcset="image-400.jpg 400w, image-800.jpg 800w"
    alt="..."
  >
</picture>
```

### 44. Implement loading="lazy" on All Off-Screen Images
Don't load images until they're about to be visible.

```html
<!-- Hero image: Load immediately -->
<img src="hero.jpg" alt="..." loading="eager">

<!-- Below fold: Lazy load -->
<img src="service-1.jpg" alt="..." loading="lazy">
<img src="service-2.jpg" alt="..." loading="lazy">
<img src="portfolio-1.jpg" alt="..." loading="lazy">
```

### 45. Specify Image width and height Attributes
Prevent layout shift (CLS).

```html
<!-- ✅ Reserves space, prevents CLS -->
<img 
  src="event.jpg" 
  alt="..." 
  width="1920" 
  height="1080"
  loading="lazy"
>

<!-- ❌ Causes layout shift when image loads -->
<img src="event.jpg" alt="...">
```

```css
/* Make it responsive while maintaining ratio */
img {
  max-width: 100%;
  height: auto;
}
```

### 46. Conditionally Load Assets
Don't load desktop-only features on mobile.

```javascript
// Only load gallery library on desktop
if (window.innerWidth >= 1024) {
  import('./gallery.js').then(module => {
    module.initGallery();
  });
}

// Only load map on large screens
if (window.matchMedia('(min-width: 768px)').matches) {
  loadGoogleMaps();
}
```

```html
<!-- Conditionally load heavy scripts -->
<script>
  if (window.innerWidth >= 1024) {
    const script = document.createElement('script');
    script.src = 'desktop-features.js';
    document.body.appendChild(script);
  }
</script>
```

### 47. Prioritize "Above-the-Fold" Content
Inline critical CSS, defer everything else.

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Inline critical CSS -->
  <style>
    /* Above-fold styles only */
    .hero { /* ... */ }
    .nav { /* ... */ }
  </style>
  
  <!-- Preload important assets -->
  <link rel="preload" href="hero.webp" as="image">
  <link rel="preload" href="fonts/montserrat.woff2" as="font" crossorigin>
  
  <!-- Defer non-critical CSS -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
<body>
  <!-- Content -->
  
  <!-- Defer JavaScript -->
  <script src="main.js" defer></script>
</body>
</html>
```

### 48. Optimize Background Images with image-set()
CSS equivalent of srcset.

```css
.hero {
  background-image: image-set(
    url('hero-1x.webp') 1x,
    url('hero-2x.webp') 2x,
    url('hero-3x.webp') 3x
  );
  
  /* Fallback */
  background-image: url('hero-2x.webp');
}

/* Responsive background images */
@media (max-width: 768px) {
  .hero {
    background-image: image-set(
      url('hero-mobile-1x.webp') 1x,
      url('hero-mobile-2x.webp') 2x
    );
  }
}
```

### 49. Test on Real Devices
Emulators are for quick checks. Real devices reveal the truth.

**Testing Device Roster:**
- iPhone SE (small screen, older hardware)
- iPhone 14 Pro (modern, high-res)
- Samsung Galaxy S21 (Android, mid-range)
- iPad Air (tablet)
- Budget Android phone (performance testing)

**What to Test:**
- Touch target sizes
- Font rendering
- Animation performance
- Form interactions
- Network performance

### 50. Test on Slow Networks
Throttle your network to find bottlenecks.

**Chrome DevTools Network Throttling:**
- Slow 3G: 400ms RTT, 400kbps down, 400kbps up
- Fast 3G: 150ms RTT, 1.6Mbps down, 750kbps up
- Slow 4G: 20ms RTT, 4Mbps down, 3Mbps up

**Testing Checklist:**
- [ ] Page loads in < 3s on Slow 3G
- [ ] Critical content visible in < 1s
- [ ] Images load progressively
- [ ] Skeleton screens for slow content
- [ ] Offline fallback page

---

## VI. Implementation Checklist

### Before Launch

#### Mobile (320px - 768px)
- [ ] All touch targets ≥ 48x48px
- [ ] Text size ≥ 16px (no zoom)
- [ ] Navigation within thumb reach
- [ ] Forms are single-column
- [ ] No horizontal scrolling
- [ ] Images are optimized and lazy-loaded
- [ ] Animations are fast (< 200ms)

#### Tablet (768px - 1024px)
- [ ] Layout adapts naturally
- [ ] Touch and mouse interactions work
- [ ] Content isn't stretched or cramped
- [ ] Images use appropriate sizes

#### Desktop (1024px+)
- [ ] Hover states work correctly
- [ ] Content is readable (max 75ch)
- [ ] Layout utilizes available space
- [ ] Large screens don't stretch content infinitely

#### Performance
- [ ] Lighthouse score > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] All images have width/height
- [ ] Critical CSS is inlined
- [ ] JavaScript is deferred
- [ ] Fonts are optimized

#### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators are visible
- [ ] Color contrast passes WCAG AA
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] Respects prefers-reduced-motion

#### Cross-Browser
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (Mac/iOS)
- [ ] Samsung Internet (Android)

---

## VII. Quick Reference: Responsive Patterns

### Navigation Patterns

```css
/* Mobile: Hamburger menu */
@media (max-width: 768px) {
  .main-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    height: 100vh;
    background: var(--color-white);
    transition: right 300ms ease;
  }
  
  .main-nav.is-open {
    right: 0;
  }
}

/* Desktop: Horizontal menu */
@media (min-width: 769px) {
  .main-nav {
    display: flex;
    gap: 2rem;
  }
  
  .menu-toggle {
    display: none;
  }
}
```

### Content Patterns

```css
/* Sidebar layout */
.layout {
  display: grid;
  gap: 2rem;
}

/* Mobile: Stack */
@media (max-width: 1024px) {
  .layout {
    grid-template-columns: 1fr;
  }
}

/* Desktop: Sidebar */
@media (min-width: 1025px) {
  .layout {
    grid-template-columns: 250px 1fr;
  }
}
```

### Image Patterns

```css
/* Full-width on mobile, constrained on desktop */
.image-container {
  width: 100%;
}

@media (min-width: 768px) {
  .image-container {
    max-width: 800px;
    margin-inline: auto;
  }
}
```

---

**Remember**: A world-class responsive site isn't built with breakpoints—it's built with systems that adapt naturally to any context. Test obsessively. Iterate relentlessly. Honor every user, on every device, at every connection speed.
