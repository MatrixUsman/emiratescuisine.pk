# UI Optimization - Visual & Design Guide

## Theme & Color System

### Primary Color Palette
- **Primary Gold**: #D4AF37
  - Dark: #B8941F
  - Light: #E5C866
  - 50 (lightest): #FFF9E6
  - 900 (darkest): #312808

### Dark Mode Background
- **Background**: #0A0A0A (almost pure black with slight warmth)
- **Surface**: #1A1A1A (elevated surfaces)
- **Card**: #1F1F1F (card backgrounds)
- **Border**: #2A2A2A (subtle borders)
- **Muted Text**: #A0A0A0 (secondary text)

### Accent Colors
- **Error**: #EF4444 (red for alerts)
- **Success**: #10B981 (green for confirmations)
- **Warning**: #F59E0B (amber for warnings)

---

## Typography System

### Font Families
- **Display**: Poppins (headings, emphasis)
- **Body**: Inter (paragraphs, descriptions)

### Responsive Font Sizes

| Element | Mobile | Tablet | Desktop | Large |
|---------|--------|--------|---------|-------|
| h1 | 2.25rem (36px) | 3rem (48px) | 3.75rem (60px) | 4.5rem (72px) |
| h2 | 1.875rem (30px) | 2.25rem (36px) | 3rem (48px) | 3.75rem (60px) |
| h3 | 1.5rem (24px) | 1.875rem (30px) | 2.25rem (36px) | 2.5rem (40px) |
| h4 | 1.25rem (20px) | 1.5rem (24px) | 1.75rem (28px) | 2rem (32px) |
| Body | 1rem (16px) | 1.125rem (18px) | 1.25rem (20px) | 1.5rem (24px) |

---

## Spacing System

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| xs | 0.5rem (2px) | Tight spacing |
| sm | 0.75rem (3px) | Small gaps |
| md | 1rem (4px) | Standard spacing |
| lg | 1.5rem (6px) | Medium gaps |
| xl | 2rem (8px) | Large spacing |
| 2xl | 2.5rem (10px) | Extra large |
| 3xl | 3rem (12px) | Huge spacing |

### Responsive Padding

```
Horizontal (px-safe):
Mobile:  px-4   (16px)
Tablet:  px-6   (24px)
Desktop: px-8   (32px)

Vertical (py-safe):
Mobile:  py-6   (24px)
Tablet:  py-8   (32px)
Desktop: py-12  (48px)
```

### Section Spacing

```
Standard Section (section-spacing):
Mobile:  py-12  (48px)
Tablet:  py-16  (64px)
Desktop: py-20  (80px)
Large:   py-24  (96px)

Large Section (section-spacing-lg):
Mobile:  py-16  (64px)
Tablet:  py-24  (96px)
Desktop: py-32  (128px)
Large:   py-40  (160px)
```

---

## Responsive Grid System

### Breakpoints

```
xs: 320px   (Small phones)
sm: 640px   (Large phones)
md: 768px   (Tablets)
lg: 1024px  (Small desktop)
xl: 1280px  (Desktop)
2xl: 1536px (Large desktop)
```

### Grid Columns

```
Menu Cards Grid:
Mobile:  1 column    (grid-cols-1)
Tablet:  2 columns   (sm:grid-cols-2)
Desktop: 3 columns   (lg:grid-cols-3)
Large:   4 columns   (xl:grid-cols-4)
```

### Gap Scaling

```
Standard Gap (gap-safe):
Mobile:  gap-4  (16px)
Tablet:  gap-5  (20px)
Desktop: gap-6  (24px)
Large:   gap-8  (32px)

Tight Gap (gap-tight):
Mobile:  gap-2  (8px)
Tablet:  gap-3  (12px)
Desktop: gap-4  (16px)
```

---

## Component Sizing

### Header

```
Mobile (xs):
- Height: 64px (h-16)
- Logo: 40px × 40px
- Padding: 16px (px-4)

Tablet (sm+):
- Height: 80px (h-20)
- Logo: 48px × 48px
- Padding: 16px (px-4)

Desktop (md+):
- Height: 80px (h-20)
- Logo: 48px × 48px
- Padding: 16px (px-4)
```

### Hero Section

```
Vertical Padding:
Mobile:  py-20  (80px)
Tablet:  py-28  (112px)
Desktop: py-32  (128px)
Large:   py-40  (160px)

Button Width:
Mobile:  w-full
Tablet+: w-auto

Spacing Between Elements:
Mobile:  gap-4   (16px)
Tablet:  gap-6   (24px)
Desktop: gap-8   (32px)
```

### Menu Cards

```
Image Height:
Mobile:  h-40  (160px)
Tablet:  h-48  (192px)
Desktop: h-52  (208px)

Card Padding:
Mobile:  p-3   (12px)
Tablet:  p-4   (16px)
Desktop: p-5   (20px)

Grid:
Mobile:  1 col
Tablet:  2 cols
Desktop: 3 cols
Large:   4 cols
```

### Footer

```
Grid Layout:
Mobile:  1 column
Tablet:  2 columns
Desktop: 4 columns

Icon Size:
Mobile:  h-9 w-9   (36px × 36px)
Tablet+: h-10 w-10 (40px × 40px)

Padding:
Mobile:  py-12
Tablet:  py-14
Desktop: py-16
```

---

## Interactive States

### Hover Effects
- **Scale**: 1.05 (5% increase)
- **Translate Y**: -8px (move up slightly)
- **Duration**: 500ms cubic-bezier

### Focus States
- **Ring**: 2px primary color
- **Ring Offset**: 2px dark background
- **Visibility**: All interactive elements

### Transition Durations
- **Fast**: 300ms (color transitions)
- **Normal**: 500ms (scale, translate)
- **Slow**: 800ms (complex animations)

---

## Mobile-Specific Optimizations

### Touch Targets
- **Minimum size**: 44px × 44px
- **Spacing between**: 16px minimum
- **All buttons**: >= 44px on mobile

### Button Behavior
- **Mobile**: Full width (w-full)
- **Desktop**: Auto width (w-auto)
- **Height**: py-3 (12px) on mobile, py-4 (16px) on desktop

### Navigation
- **Mobile**: Hamburger menu, vertical stack
- **Desktop**: Horizontal menu, full navigation
- **Menu animation**: 300ms slide and fade

### Images
- **Mobile**: 100% width, constrained height
- **Responsive**: Sizes attribute for browser optimization
- **Lazy loading**: Enabled for below-fold images

---

## Animation Specifications

### Page Load
```
Initial: opacity: 0, translateY: 30px
Animate: opacity: 1, translateY: 0
Duration: 800ms
Easing: easeOut
```

### Hover Effects
```
Card Hover:
- Scale: 1.02
- TranslateY: -8px
- Shadow: rgba(212, 175, 55, 0.4)
Duration: 500ms
```

### Button Hover
```
Color Transitions:
- Text color to gold
- Background shade adjustment
Duration: 300-500ms
```

### Category Filter
```
Active State:
- Background gradient
- Box shadow glow
- Scale: 1.05
- Spring animation for smoothness
```

---

## Accessibility Features

### Focus States
- **Visible ring**: 2px primary color
- **Ring offset**: 2px for clarity
- **All interactive elements**: Have visible focus

### Color Contrast
- **Text on background**: >= 7:1 WCAG AAA
- **UI components**: >= 4.5:1 WCAG AA
- **Link text**: Underlined or distinct color

### Touch-Friendly
- **Target sizes**: 44px minimum
- **Spacing**: 16px between targets
- **Proper padding**: Around clickable areas

### Responsive Typography
- **Readable**: 16px base on mobile
- **Scales**: With screen size
- **Line height**: 1.5-1.75 for readability

---

## CSS Variables & Utilities

### Container Utilities
```css
.container-xs  /* max-width: 320px */
.container-sm  /* max-width: 384px */
.container-md  /* max-width: 896px (4xl) */
.container-lg  /* max-width: 1344px (7xl) */
```

### Responsive Padding
```css
.px-safe  /* 16px → 24px → 32px */
.py-safe  /* 24px → 32px → 48px */
.p-safe   /* 16px → 24px → 32px */
```

### Gap Utilities
```css
.gap-safe  /* 16px → 20px → 24px → 32px */
.gap-tight /* 8px → 12px → 16px */
```

### Section Spacing
```css
.section-spacing    /* 48px → 64px → 80px → 96px */
.section-spacing-lg /* 64px → 96px → 128px → 160px */
```

---

## Design Hierarchy

### Visual Weight
1. **Headings** (h1-h3): Largest, boldest, primary color
2. **Body text**: Standard size, white on dark
3. **Secondary text**: Smaller, muted color (#A0A0A0)
4. **Captions**: Smallest, uppercase, muted

### Emphasis
- **Gold accents**: Primary action, highlights
- **Gradient backgrounds**: Featured sections
- **Glow effects**: Interactive hover states
- **Icons**: Visual indicators for actions

---

## Best Practices Implemented

✅ **Mobile-First**: Start mobile, enhance for larger screens
✅ **Responsive Typography**: Scale with viewport
✅ **Touch-Friendly**: 44px+ targets on mobile
✅ **Consistent Spacing**: Uses defined scale
✅ **Accessible**: WCAG AA compliance
✅ **Performance**: Optimized images, smooth animations
✅ **Maintainable**: Utility classes, semantic HTML
✅ **Modern**: CSS Grid, Flexbox, advanced animations

---

## Quick Reference

### Most Used Classes
```css
px-safe         /* Responsive horizontal padding */
py-safe         /* Responsive vertical padding */
section-spacing /* Standard section spacing */
gap-safe        /* Responsive grid gaps */
btn-primary     /* Gold button style */
card            /* Card with border and shadow */
text-balance    /* Better text wrapping */
hide-mobile     /* Hide on mobile screens */
show-mobile     /* Show only on mobile */
```

### Common Responsive Patterns
```css
/* Full width mobile, fixed on desktop */
w-full md:w-auto

/* Responsive columns */
grid-cols-1 sm:grid-cols-2 md:grid-cols-3

/* Responsive text size */
text-sm md:text-base lg:text-lg

/* Responsive padding */
p-4 md:p-6 lg:p-8

/* Responsive gap */
gap-4 md:gap-6 lg:gap-8
```

---

This design system ensures **consistent, responsive, and accessible** user experience across all devices while maintaining the premium aesthetic of Emirates Cuisine.
