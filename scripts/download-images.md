# Image Download Guide

## Image Structure

Images are organized by category in `public/images/{category}/` folders.

## Naming Convention

- Format: `{item-id}.jpg`
- Example: `chicken-mandi.jpg`, `mutton-karahi.jpg`

## Categories and Folders

- `appetizers/` - Appetizers category
- `soups/` - Soups category
- `chinese/` - Chinese dishes
- `chowmein/` - Chowmein dishes
- `pasta/` - Pasta dishes
- `steaks/` - Steak dishes
- `chicken-handi/` - Chicken Handi dishes
- `arabic/` - Arabic dishes (Mandi, Madhbi)
- `pakistani-rice/` - Biryani and rice dishes
- `chicken-karahi/` - Chicken Karahi
- `beef-karahi/` - Beef Karahi
- `mutton-karahi/` - Mutton Karahi
- `bbq/` - BBQ items
- `platters/` - Platter dishes
- `kids-menu/` - Kids menu items
- `drinks/` - Beverages
- `hot-bar/` - Hot beverages
- `desserts/` - Desserts
- `tandoor/` - Tandoor items
- `salad-bar/` - Salads and sauces

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 800x600px or larger
- **Aspect Ratio**: 4:3 or 16:9
- **Quality**: High quality, well-lit food photography
- **File Size**: Optimize to under 200KB for web

## How to Add Images

1. Find or take high-quality food images
2. Name the file using the item ID from `data/menu.ts`
3. Place in the appropriate category folder
4. The website will automatically load the image

## Example

For "Chicken Mandi" (id: `chicken-mandi`):
- Category: `arabic`
- File path: `public/images/arabic/chicken-mandi.jpg`

## Current Status

The website uses placeholder images from Unsplash until you add your own images. Once you add images with the correct naming convention, they will automatically replace the placeholders.
