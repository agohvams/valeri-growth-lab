# VALERI - Shopify Design Specification

This document contains all design specifications from the Lovable site to recreate the exact look on Shopify.

---

## 🎨 Color Palette

### Light Mode Colors (HSL Format)
```css
/* Primary Brand Colors */
--primary: hsl(12, 76%, 61%)           /* Coral/Terracotta - Main brand color */
--primary-foreground: hsl(0, 0%, 100%) /* White text on primary */

/* Background & Surface Colors */
--background: hsl(32, 25%, 97%)        /* Warm off-white background */
--foreground: hsl(25, 20%, 15%)        /* Dark brown text */

/* Card & Component Colors */
--card: hsl(0, 0%, 100%)               /* Pure white cards */
--card-foreground: hsl(25, 20%, 15%)   /* Dark brown text on cards */

/* Secondary Colors */
--secondary: hsl(32, 25%, 90%)         /* Light beige */
--secondary-foreground: hsl(25, 20%, 15%) /* Dark brown text */

/* Accent Colors */
--accent: hsl(145, 25%, 55%)           /* Sage green for accents */
--accent-foreground: hsl(0, 0%, 100%)  /* White text on accent */

/* Muted/Subtle Colors */
--muted: hsl(32, 20%, 92%)             /* Very light beige */
--muted-foreground: hsl(25, 10%, 45%)  /* Gray-brown text */

/* Destructive/Error Colors */
--destructive: hsl(0, 84.2%, 60.2%)    /* Red for errors/sales */
--destructive-foreground: hsl(0, 0%, 100%) /* White text */

/* Borders & Inputs */
--border: hsl(32, 20%, 88%)            /* Light border color */
--input: hsl(32, 20%, 88%)             /* Input border color */
--ring: hsl(12, 76%, 61%)              /* Focus ring color */
```

### RGB Equivalents (for Shopify)
```css
/* Primary */
--primary-rgb: rgb(230, 117, 80)

/* Background */
--background-rgb: rgb(250, 247, 244)

/* Accent */
--accent-rgb: rgb(107, 176, 138)

/* Destructive/Sale */
--destructive-rgb: rgb(237, 75, 58)
```

### Special Effects
```css
/* Gradients */
--hero-gradient: linear-gradient(135deg, hsla(12, 76%, 61%, 0.95), hsla(25, 85%, 55%, 0.9))

/* Shadows */
--card-shadow: 0 4px 20px -2px hsla(12, 76%, 61%, 0.1)
--hover-shadow: 0 8px 30px -4px hsla(12, 76%, 61%, 0.2)
```

---

## 📝 Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Font Sizes & Weights
```css
/* Headings */
h1: 48px, font-weight: 700 (bold)
h2: 36px, font-weight: 600 (semibold)
h3: 24px, font-weight: 600 (semibold)
h4: 20px, font-weight: 600 (semibold)

/* Body Text */
body: 16px, font-weight: 400 (regular)
small: 14px, font-weight: 400 (regular)
```

---

## 📐 Spacing & Layout

### Border Radius
```css
--radius-lg: 0.75rem (12px)
--radius-md: 0.5rem (8px)
--radius-sm: 0.25rem (4px)
```

### Spacing Scale
```css
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
```

### Container
```css
max-width: 1400px
padding: 2rem (32px)
margin: 0 auto
```

---

## 🎬 Animations

### Fade In Animation
```css
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
animation: fade-in 0.5s ease-out;
```

### Fade Up Animation
```css
@keyframes fade-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
animation: fade-up 0.6s ease-out;
```

### Scale In Animation
```css
@keyframes scale-in {
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
animation: scale-in 0.3s ease-out;
```

### Hover Effects
```css
/* Cards */
transition: all 0.3s ease;
hover: transform: scale(1.05);

/* Buttons */
transition: all 0.2s ease;
hover: opacity: 0.9;
```

---

## 🔲 Component Styles

### Button Styles

#### Primary Button
```css
background: hsl(12, 76%, 61%)
color: white
padding: 12px 24px
border-radius: 12px
font-weight: 600
transition: all 0.2s ease

hover:
  background: hsl(12, 76%, 55%)
  shadow: 0 4px 12px rgba(230, 117, 80, 0.3)
```

#### Secondary Button
```css
background: hsl(32, 25%, 90%)
color: hsl(25, 20%, 15%)
padding: 12px 24px
border-radius: 12px
font-weight: 600
transition: all 0.2s ease

hover:
  background: hsl(32, 25%, 85%)
```

#### Outline Button
```css
background: transparent
border: 2px solid hsl(12, 76%, 61%)
color: hsl(12, 76%, 61%)
padding: 12px 24px
border-radius: 12px
font-weight: 600

hover:
  background: hsl(12, 76%, 61%)
  color: white
```

### Card Styles
```css
background: white
border: 1px solid hsl(32, 20%, 88%)
border-radius: 12px
padding: 16px
box-shadow: 0 4px 20px -2px hsla(12, 76%, 61%, 0.1)
transition: all 0.3s ease

hover:
  box-shadow: 0 8px 30px -4px hsla(12, 76%, 61%, 0.2)
  transform: translateY(-2px)
```

### Product Card Styles
```css
/* Container */
border: 1px solid hsl(32, 20%, 88%)
border-radius: 12px
overflow: hidden
transition: all 0.3s ease

/* Image Container */
aspect-ratio: 1 / 1
overflow: hidden

/* Image Hover Effect */
img:
  transition: transform 0.3s ease
  
card:hover img:
  transform: scale(1.05)

/* Price */
font-size: 24px
font-weight: 700
color: hsl(12, 76%, 61%)

/* Sale Badge */
background: hsl(0, 84.2%, 60.2%)
color: white
padding: 4px 12px
border-radius: 9999px
font-weight: 700
font-size: 14px
```

### Input Styles
```css
border: 1px solid hsl(32, 20%, 88%)
border-radius: 12px
padding: 12px 16px
background: white
transition: all 0.2s ease

focus:
  outline: none
  border-color: hsl(12, 76%, 61%)
  box-shadow: 0 0 0 3px hsla(12, 76%, 61%, 0.1)
```

---

## 🌟 Special Components

### Hero Section
```css
background: linear-gradient(135deg, hsla(12, 76%, 61%, 0.95), hsla(25, 85%, 55%, 0.9))
padding: 120px 0
text-align: center
color: white

h1:
  font-size: 56px
  font-weight: 700
  margin-bottom: 24px

p:
  font-size: 20px
  opacity: 0.9
  max-width: 600px
  margin: 0 auto 32px
```

### Navigation Bar
```css
background: white
border-bottom: 1px solid hsl(32, 20%, 88%)
padding: 16px 0
position: sticky
top: 0
z-index: 50
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05)

links:
  color: hsl(25, 20%, 15%)
  font-weight: 500
  transition: color 0.2s ease
  
  hover:
    color: hsl(12, 76%, 61%)
```

### Footer
```css
background: hsl(25, 20%, 15%)
color: hsl(32, 25%, 95%)
padding: 64px 0 32px

links:
  color: hsl(32, 25%, 75%)
  transition: color 0.2s ease
  
  hover:
    color: hsl(12, 76%, 61%)
```

### Star Rating
```css
color: rgb(245, 158, 11) /* amber-500 */
size: 16px
fill: currentColor (for filled stars)
```

### Sale Badge
```css
position: absolute
top: 16px
left: 16px
background: hsl(0, 84.2%, 60.2%)
color: white
padding: 8px 12px
border-radius: 9999px
font-size: 14px
font-weight: 700
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1400px /* Extra large desktop */
```

### Grid Layouts
```css
/* Product Grid */
mobile (default): 1 column
sm (640px+): 2 columns
lg (1024px+): 3 columns
xl (1280px+): 4 columns

gap: 24px
```

---

## 🎯 Brand Guidelines

### Color Usage
- **Primary (Coral)**: CTAs, links, active states, sale badges
- **Accent (Sage Green)**: Secondary actions, highlights
- **Destructive (Red)**: Sale badges, error states
- **Background (Warm Off-White)**: Page backgrounds
- **Card (White)**: Product cards, content cards

### Imagery
- Product images: Square aspect ratio (1:1)
- High quality, well-lit photos
- Consistent white/neutral backgrounds
- Show products in use when possible

### Tone & Voice
- Modern, friendly, approachable
- Focus on quality and design
- Emphasize simplicity and functionality

---

## 📋 SEO Elements

### Meta Information
```html
Title: VALERI - Modern Kitchen & Home Essentials | Free UK Shipping Over £50
Description: Discover thoughtfully designed kitchen essentials, drinkware, and home tech that simplify modern living. Premium quality, built to last. Free UK shipping on orders over £50.
Keywords: kitchen essentials, modern drinkware, home tech, kitchen gadgets, sustainable kitchenware
```

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VALERI",
  "url": "https://valerigoods.com",
  "description": "Modern kitchen and home essentials designed to simplify life"
}
```

---

## 🎨 Key Visual Elements

### Amazon Buy Button
```css
background: #FF9900
color: black
font-weight: 600
padding: 8px 16px
border-radius: 8px
transition: background 0.2s ease

hover:
  background: rgba(255, 153, 0, 0.9)

/* Shows on product card hover */
opacity: 0 (default)
opacity: 1 (on hover)
```

### Product Image Overlay
```css
/* On hover, show "Buy on Amazon" button */
position: absolute
top: 16px
right: 16px
transition: opacity 0.3s ease
```

---

## 💡 Implementation Notes for Shopify Developer

1. **Color System**: Use Shopify's color settings to define these as theme colors
2. **Typography**: Can be set in theme settings > Typography
3. **Animations**: Implement using CSS animations in your theme's stylesheet
4. **Components**: Recreate using Liquid templates with matching CSS
5. **Product Cards**: Use Shopify's product object in Liquid templates
6. **Responsive**: Use Shopify's responsive image helpers and CSS media queries
7. **Forms**: Style Shopify's form elements to match input styles above

### Shopify-Specific Recommendations:
- Use `{% render 'icon-star' %}` for star ratings
- Leverage Shopify's `image_url` filter with appropriate sizing
- Use `money_with_currency` filter for prices
- Implement sale badges using `compare_at_price` logic
- Use Shopify sections for flexible content management

---

## 📞 Support

For questions about this design specification, refer back to the Lovable project or contact your developer.

**Project**: VALERI E-commerce Website
**Design System**: Modern, warm, minimalist aesthetic
**Primary Brand Color**: Coral/Terracotta (hsl(12, 76%, 61%))
