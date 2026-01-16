# Image Setup Guide

## Overview

The website now includes a beautiful product card UI with image support. Images are organized by category and automatically loaded when available.

## Image Structure

All images are stored in `public/images/` organized by category:

```
public/images/
├── appetizers/
├── soups/
├── chinese/
├── chowmein/
├── pasta/
├── steaks/
├── chicken-handi/
├── arabic/
├── pakistani-rice/
├── chicken-karahi/
├── beef-karahi/
├── mutton-karahi/
├── bbq/
├── platters/
├── kids-menu/
├── drinks/
├── hot-bar/
├── desserts/
├── tandoor/
└── salad-bar/
```

## Naming Convention

**Format**: `{item-id}.jpg`

**Example**:
- `chicken-mandi.jpg` → Goes in `arabic/` folder
- `mutton-karahi.jpg` → Goes in `mutton-karahi/` folder
- `chicken-tikka-boti.jpg` → Goes in `bbq/` folder

## How It Works

1. **Automatic Loading**: The system tries to load images from `public/images/{category}/{item-id}.jpg`
2. **Fallback**: If image doesn't exist, it uses a category-specific placeholder from Unsplash
3. **Error Handling**: Images gracefully fall back to placeholders if loading fails

## Adding Your Images

### Step 1: Find Your Item ID

Check `data/menu.ts` for the item ID. For example:
- Item: "Chicken Mandi" → ID: `chicken-mandi`
- Item: "Mutton Karahi" → ID: `mutton-karahi`

### Step 2: Find the Category

Check which category the item belongs to in `data/menu.ts`.

### Step 3: Add the Image

1. Get or take a high-quality food photo
2. Name it: `{item-id}.jpg` (e.g., `chicken-mandi.jpg`)
3. Place it in the correct category folder
4. The website will automatically use it!

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 800x600px or larger
- **Aspect Ratio**: 4:3 or 16:9 works best
- **File Size**: Optimize to under 200KB for fast loading
- **Quality**: High-quality, well-lit food photography

## Example Workflow

1. You have "Chicken Mandi" photo
2. Check `data/menu.ts` → ID is `chicken-mandi`, category is `arabic`
3. Save as: `public/images/arabic/chicken-mandi.jpg`
4. Done! Image will appear automatically

## Current Status

- ✅ Image folder structure created
- ✅ Category-based organization
- ✅ Automatic fallback to placeholders
- ✅ Beautiful card UI with images
- ⏳ Waiting for you to add your images

## Tips

- Use consistent lighting and style for all images
- Crop images to focus on the food
- Optimize images before uploading (use tools like TinyPNG)
- Keep file names lowercase with hyphens (matching item IDs)

## Testing

After adding images:
1. Restart dev server: `npm run dev`
2. Check the menu page
3. Images should load automatically
4. If image doesn't load, check:
   - File name matches item ID exactly
   - File is in correct category folder
   - File extension is .jpg, .png, or .webp
