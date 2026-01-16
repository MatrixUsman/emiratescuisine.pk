# Error Pages Documentation

## Overview
The website now includes comprehensive, fully-themed error pages that match the restaurant's gold and dark theme. All error pages feature consistent styling, animations, and navigation options.

## Error Pages Created/Enhanced

### 1. **Main Error Page** (`/app/error.tsx`)
- **Purpose**: Catches runtime errors in the application
- **Triggers**: Any unhandled JavaScript error in page or component
- **Features**:
  - Animated gold icon with pulsing glow effect
  - Error message display
  - "Try Again" button with refresh icon animation
  - "Go Home" button
  - Quick links to Menu and Branches
  - Error ID display for debugging
  - Fully responsive (mobile to desktop)

**Theme Colors Used:**
- Primary gold: #D4AF37
- Primary dark: #B8941F
- Primary light: #E5C866
- Dark background: #0A0A0A
- Dark surface: #1A1A1A

### 2. **404 Not Found Page** (`/app/not-found.tsx`)
- **Purpose**: Displayed when user navigates to non-existent routes
- **Triggers**: Route doesn't exist in application
- **Features**:
  - Large animated 404 number with gradient effect
  - Animated glow effect behind the number
  - Friendly error message
  - Primary call-to-action: "Go Home"
  - Secondary call-to-action: "View Menu"
  - Quick links to: Branches, Terms, Privacy
  - Smooth staggered animations
  - Fully responsive grid layout

**Animation Details:**
- 404 number scales up with spring physics
- Glow effect pulses continuously
- Text and buttons fade in with cascading delays
- Hover effects on interactive elements

### 3. **Global Error Page** (`/app/global-error.tsx`)
- **Purpose**: Last resort error boundary for root layout errors
- **Triggers**: Errors that crash the root layout.tsx
- **Features**:
  - Full HTML document structure (includes html/body tags)
  - Critical error messaging
  - Triangle alert icon with pulsing glow
  - Gradient text for main heading
  - Retry and Return Home buttons
  - Error message and ID display
  - Styled with complete theme colors
  - Professional error communication

### 4. **Access Denied Page** (`/app/access-denied/page.tsx`)
- **Purpose**: Handles 403 Forbidden and unauthorized access
- **Route**: `/access-denied`
- **Features**:
  - Lock icon with rotation animation
  - 403 error code display
  - Detailed explanation message
  - "Go Home" button
  - "Go Back" button
  - Permission denied messaging
  - Can be manually linked to from protected areas

### 5. **Server Error Page** (`/app/server-error/page.tsx`)
- **Purpose**: Handles 500 Internal Server Error
- **Route**: `/server-error`
- **Features**:
  - Server icon with pulsing glow
  - 500 error code display
  - Service restoration messaging
  - Refresh button with rotation animation
  - Go Home button
  - Status information box
  - WhatsApp contact link for support
  - Can be manually linked to from error handlers

## Theme Consistency

### Color Palette Used
```css
Primary Gold: #D4AF37
Primary Dark: #B8941F
Primary Light: #E5C866
Dark Background: #0A0A0A
Dark Surface: #1A1A1A
Dark Border: #2A2A2A
Dark Muted: #A0A0A0
```

### Animation Patterns
- **Icon Scale**: Spring physics with stiffness: 100, damping: 15
- **Glow Effect**: 3-second infinite animation with varying opacity
- **Text Fade**: Staggered delays (0.3s, 0.4s, 0.5s, etc.)
- **Button Hover**: Shadow glow with primary color
- **Gradient Text**: Smooth transition from primary to light to primary

### Responsive Design
- **sm** (640px): Mobile/tablet adjustments
- **md** (768px): Tablet/small desktop
- **lg** (1024px): Desktop
- **xl** (1280px): Large desktop

Text sizes scale across all breakpoints:
- Mobile: Smaller font sizes and padding
- Desktop: Larger, more prominent displays

## Integration Guide

### How Errors Are Handled

1. **Runtime Errors in Pages/Components**
   → Caught by `/app/error.tsx`

2. **Missing Routes**
   → Automatically caught by `/app/not-found.tsx`

3. **Layout-Level Errors**
   → Caught by `/app/global-error.tsx`

4. **Protected Areas/Missing Permissions**
   → Link manually to `/access-denied`

5. **Server Processing Errors**
   → Link manually to `/server-error` or use global error handler

### Manual Navigation Examples

```typescript
// In a component or API route
if (!userHasPermission) {
  redirect('/access-denied');
}

// For custom error handling
try {
  // operation
} catch (error) {
  redirect('/server-error');
}
```

## Visual Features

### Icon Animations
- **AlertCircle** (error.tsx): Smooth scale and glow
- **AlertTriangle** (global-error.tsx): Pulse effect
- **Lock** (access-denied): Rotation + scale + glow
- **Server** (server-error): Smooth scale + glow
- **Home, Menu, ArrowLeft, RefreshCw**: Hover animations

### Button Styling
All buttons feature:
- Gradient backgrounds (primary → dark)
- Smooth color transitions on hover
- Gold shadow glow effects on hover
- Icon animations (scale, rotate, translate)
- Border styling for secondary buttons
- Responsive padding and sizing

### Text Effects
- Gradient backgrounds for main headings
- Smooth color transitions on hover
- Responsive font sizes
- Proper contrast for accessibility

## Testing Error Pages

### Local Testing
1. Navigate to `/unknown-page` → Shows 404 page
2. Navigate to `/access-denied` → Shows access denied page
3. Navigate to `/server-error` → Shows server error page
4. Trigger an error in a component to see error.tsx in development

### Production Testing
- Error pages are pre-rendered during build
- Navigate to non-existent routes to test 404
- Use error handling patterns to redirect to error pages

## Best Practices

1. **Use Consistent Theming**: All error pages match the restaurant's gold/dark theme
2. **Provide Clear Actions**: Each error page has at least 2 action buttons
3. **Responsive Design**: All pages work on mobile, tablet, and desktop
4. **Accessibility**: Proper contrast, semantic HTML, icon + text labels
5. **Brand Consistency**: Uses the same animations and styling as main pages
6. **Contact Option**: Server error page includes WhatsApp contact link
7. **Error Tracking**: Error digests are displayed for debugging

## Future Enhancements

Consider implementing:
1. Error logging service (Sentry, LogRocket, etc.)
2. Custom error codes for different scenarios
3. Automated error recovery suggestions
4. Error tracking analytics
5. Custom error messages based on error type
6. Internationalization (multiple languages)
7. Error rate notifications to admin
8. User feedback form on error pages
