# Project Planning

## 🎯 Project Goals

- Create a modern, professional event planning website
- Showcase services and past work effectively
- Generate leads through contact forms
- Establish thought leadership through blog content
- Provide excellent user experience across all devices

## 🚀 Development Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Project setup with Next.js
- [ ] Install and configure Tailwind CSS
- [ ] Create basic layout components (Header, Footer)
- [ ] Set up routing structure
- [ ] Implement responsive navigation

### Phase 2: Core Pages (Week 3-4)
- [ ] Home page with all sections
- [ ] About page
- [ ] Services page
- [ ] Contact page with form
- [ ] Legal pages (Terms, Privacy)

### Phase 3: Dynamic Content (Week 5-6)
- [ ] Portfolio system
  - [ ] Portfolio listing page
  - [ ] Single case study template
  - [ ] Filtering functionality
- [ ] Blog system
  - [ ] Blog listing page
  - [ ] Single post template
  - [ ] Search and categories

### Phase 4: Enhancements (Week 7-8)
- [ ] Contact form integration
- [ ] Newsletter signup
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Analytics integration

### Phase 5: Testing & Launch (Week 9-10)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Accessibility audit
- [ ] Content population
- [ ] Production deployment

## 🎨 Design Specifications

### Premium Luxury Design System

#### 🏛️ Design Philosophy
The design achieves a premium luxury tone through:
- **Restraint**: Minimal, purposeful use of elements
- **Contrast**: Clear visual hierarchy through typography and color
- **Space**: Generous whitespace that allows content to breathe
- **Quality**: Professional, high-resolution imagery throughout

#### 🎨 Color Palette (Earthy & Elegant)

```css
--elegant-taupe: #9a8f86;    /* Main background */
--warm-cream: #f4f1ed;        /* Contrasting background for text sections */
--dark-charcoal: #36312f;     /* Main text color */
--soft-white: #f9f9f9;        /* Headline text, often over images */
```

**Color Usage Guidelines:**
- **Elegant Taupe (#9a8f86)**: Primary background color for hero sections and alternating content blocks
- **Warm Cream (#f4f1ed)**: Secondary background for text-heavy sections to create visual rhythm
- **Dark Charcoal (#36312f)**: All body text, navigation, and decorative elements
- **Soft White (#f9f9f9)**: Text overlays on images, contrasting headlines

#### ✒️ Typography System (The Three-Font Hierarchy)

##### 1. The "Statement" Font (Elegant Serif)
**Font:** Playfair Display
- **Weight:** 400 (Regular), 700 (Bold)
- **Usage:** Major headlines and page titles
- **Examples:** 
  - "EVENT PLANNING & DESIGN"
  - "ELEVATE YOUR EVENTS"
  - "SPECTACULAR CELEBRATIONS"
- **Styling:**
  ```css
  font-family: 'Playfair Display', serif;
  font-size: 48px - 72px; /* Responsive */
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
  ```

##### 2. The "Accent" Font (Elegant Script)
**Font:** Pinyon Script (or Great Vibes as alternative)
- **Weight:** 400 (Regular only)
- **Usage:** Decorative sub-headings and section introductions
- **Examples:**
  - "About Us"
  - "Our Services"
  - "Portfolio"
- **Styling:**
  ```css
  font-family: 'Pinyon Script', cursive;
  font-size: 32px - 48px;
  font-weight: 400;
  line-height: 1.4;
  color: #36312f;
  ```
- **Note:** Use sparingly for maximum impact

##### 3. The "Workhorse" Font (Clean Sans-Serif)
**Font:** Montserrat (or Lato as alternative)
- **Weights:** 300 (Light), 400 (Regular), 600 (Semi-Bold)
- **Usage:** Body text, navigation, buttons, captions
- **Styling:**

**For Body Text:**
```css
font-family: 'Montserrat', sans-serif;
font-size: 16px - 18px;
font-weight: 300 or 400;
line-height: 1.6 - 1.8; /* Generous spacing */
color: #36312f;
```

**For Navigation & Buttons:**
```css
font-family: 'Montserrat', sans-serif;
font-size: 12px - 14px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1.5px - 2px; /* Essential for luxury feel */
color: #36312f;
```

#### 📐 Spacing System
Follow a consistent spacing scale for premium feel:

```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 32px;
--space-lg: 64px;
--space-xl: 96px;
--space-2xl: 128px;
```

**Whitespace Guidelines:**
- Section padding: `space-xl` to `space-2xl` (96px - 128px)
- Between heading and body text: `space-md` (32px)
- Between paragraphs: `space-sm` (16px)
- Component margins: `space-lg` (64px)

#### 🖼️ Image Guidelines
- **Quality:** Professional, high-resolution (minimum 1920px wide)
- **Style:** Warm, well-lit, aspirational
- **Aspect Ratios:** 
  - Hero: 16:9
  - Portfolio Grid: 4:3 or 1:1
  - Blog Featured: 16:9
- **Treatment:** Subtle overlays (rgba(54, 49, 47, 0.3)) for text readability

#### 🎯 Component Styling

##### Premium Section Formula
```html
<!-- Section Structure -->
<section style="background: #f4f1ed; padding: 96px 0;">
  <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
    
    <!-- Step 1: Accent Script -->
    <p style="font-family: 'Pinyon Script'; font-size: 36px; color: #36312f; margin-bottom: 16px;">
      Our Portfolio
    </p>
    
    <!-- Step 2: Statement Serif -->
    <h2 style="font-family: 'Playfair Display'; font-size: 56px; font-weight: 700; color: #36312f; margin-bottom: 32px;">
      SPECTACULAR EVENTS
    </h2>
    
    <!-- Step 3: Body Sans-Serif -->
    <p style="font-family: 'Montserrat'; font-size: 18px; font-weight: 300; line-height: 1.8; color: #36312f; max-width: 700px; margin: 0 auto 48px;">
      We create unforgettable experiences that exceed expectations and leave lasting impressions.
    </p>
    
    <!-- Step 4: CTA Button -->
    <button style="font-family: 'Montserrat'; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; padding: 16px 48px; background: #36312f; color: #f9f9f9; border: none;">
      View Portfolio
    </button>
    
  </div>
</section>
```

##### Button Styles
```css
/* Primary Button */
.btn-primary {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 16px 48px;
  background: #36312f;
  color: #f9f9f9;
  border: 2px solid #36312f;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: transparent;
  color: #36312f;
}

/* Secondary Button */
.btn-secondary {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 16px 48px;
  background: transparent;
  color: #36312f;
  border: 2px solid #36312f;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #36312f;
  color: #f9f9f9;
}
```

##### Card Components
```css
.card {
  background: #f9f9f9;
  padding: 48px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
}

.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: #36312f;
  margin-bottom: 16px;
}

.card-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8;
  color: #36312f;
}
```

### Components Library
- Buttons (Primary, Secondary, Ghost)
- Cards (with hover effects)
- Forms (elegant, minimal styling)
- Navigation (uppercase, letter-spaced)
- Testimonial sliders (centered, large quotes)
- Image galleries (consistent spacing, subtle transitions)

## 📊 Content Requirements

### Pages
- 1 Home page
- 1 About page
- 1 Services page
- 1 Contact page
- 2 Legal pages

### Portfolio Items
- Minimum 12 case studies
- High-quality images (3-5 per case study)
- Client testimonials

### Blog Posts
- Minimum 10 initial articles
- Regular publishing schedule
- SEO-optimized content

## 🔧 Technical Requirements

### Performance
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Optimize web fonts (use font-display: swap)
- Lazy load images below the fold

### SEO
- Meta tags for all pages
- Open Graph tags
- Structured data markup
- XML sitemap
- Robots.txt

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Alt text for all images
- Sufficient color contrast (check with tools)

## 📈 Success Metrics

- Page load time
- Bounce rate
- Contact form submissions
- Blog engagement
- Portfolio views
- Newsletter signups

## 🔄 Future Enhancements

- Client portal
- Online booking system
- Payment integration
- Live chat support
- Multi-language support
- Advanced analytics dashboard
