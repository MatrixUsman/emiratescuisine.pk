#!/usr/bin/env python3
"""
Menu Image Downloader - Direct URL Version
Downloads food images directly from curated URLs and stores them in public/images folders
"""

import os
import urllib.request
import time
from pathlib import Path
from typing import Dict

# Direct image URLs mapping - curated from Unsplash
IMAGE_URLS = {
    # Steaks (PRIORITY - missing!)
    "steaks/emirates-sp-combo-steak": "https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop&q=85",
    "steaks/white-mushroom-steak": "https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop&q=85",
    "steaks/maxican-steak": "https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop&q=85",
    "steaks/tarragon-steak": "https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop&q=85",
    "steaks/black-pepper-steak": "https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop&q=85",
    "steaks/moroccan-steak": "https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop&q=85",
    
    # Hot Bar - TEA & COFFEE (PRIORITY - missing!)
    "hot-bar/karak-chai": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop&q=85",
    "hot-bar/matka-chai": "https://images.unsplash.com/photo-1597318057278-8f5f5b2a4c0b?w=800&h=600&fit=crop&q=85",
    "hot-bar/cappuccino": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop&q=85",
    "hot-bar/hot-chocolate": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&q=85",
    "hot-bar/peshawari-kehwa": "https://images.unsplash.com/photo-1599599810694-f3ae0ef7a98a?w=800&h=600&fit=crop&q=85",
    
    # Drinks (PRIORITY - missing cold-coffee)
    "drinks/cold-coffee": "https://images.unsplash.com/photo-1517487881594-2787fef5eb3f?w=800&h=600&fit=crop&q=85",
    
    # Appetizers
    "appetizers/fattoush": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop&q=85",
    "appetizers/arabic-hummus": "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop&q=85",
    "appetizers/arabic-chicken-shawarma": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&h=600&fit=crop&q=85",
    "appetizers/dynamite-chicken": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=85",
    "appetizers/dynamite-shrimp": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop&q=85",
    "appetizers/dumpling-steam": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "appetizers/dhaka-chicken": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=85",
    "appetizers/honey-wings": "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=600&fit=crop&q=85",
    "appetizers/loaded-chicken-cheese-fries": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop&q=85",
    "appetizers/crumbed-fried-prawn": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop&q=85",
    "appetizers/chicken-strips-fries": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=85",
    "appetizers/finger-fish": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop&q=85",
    "appetizers/fish-katsu": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop&q=85",
    "appetizers/fish-cracker": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop&q=85",
    "appetizers/french-fries": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop&q=85",
    "appetizers/garlic-mayo-fries": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop&q=85",
    
    # Soups
    "soups/emirates-special-soup": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&q=85",
    "soups/hot-sour-soup": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&q=85",
    "soups/szechuan-almond-soup": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&q=85",
    "soups/chicken-corn-soup": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&q=85",
    
    # Chinese
    "chinese/chicken-chilli-dry": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=85",
    "chinese/kong-pau-chicken": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=85",
    "chinese/cashewnut-chicken": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=85",
    "chinese/chicken-black-pepper": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=85",
    "chinese/chicken-manchurian": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=85",
    "chinese/chk-shashlik": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=85",
    "chinese/mongolian-chicken": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=85",
    "chinese/chinese-platter": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop&q=85",
    "chinese/chicken-fried-rice": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=85",
    "chinese/egg-fried-rice": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=85",
    "chinese/masala-rice": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=85",
    "chinese/vegetable-rice": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=85",
    
    # Chowmein
    "chowmein/special-chowmein": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=85",
    "chowmein/chicken-chowmein": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=85",
    "chowmein/vegetable-chowmein": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=85",
    
    # Pasta
    "pasta/emirates-sp-pasta": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop&q=85",
    "pasta/creamy-master-alfredo-pasta": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop&q=85",
    "pasta/pasta-la-vista": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop&q=85",
    
    # Chicken Handi
    "chicken-handi/emirati-cheese-gatala-handi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-handi/chicken-bombay-handi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-handi/chicken-hyderabadi-handi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-handi/chicken-rajastani-handi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-handi/chicken-makhni-handi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-handi/chicken-madrasi-handi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-handi/chicken-mughlai-handi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-handi/chicken-achari-handi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-handi/chicken-shajhani-handi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-handi/green-chilli-lemon-handi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-handi/chicken-jalfrezi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-handi/chicken-kabab-masala": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "chicken-handi/chicken-tawa-qeema": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    
    # Arabic
    "arabic/chicken-mandi": "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=85",
    "arabic/chicken-madhbi": "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=85",
    "arabic/mutton-mandi": "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=85",
    "arabic/mutton-madhbi": "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=85",
    "arabic/full-goat": "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=85",
    
    # Pakistani Rice
    "pakistani-rice/chicken-biryani": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=85",
    "pakistani-rice/chicken-matka-biryani": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=85",
    "pakistani-rice/mutton-matka-biryani": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=85",
    "pakistani-rice/jangli-pulao": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=85",
    
    # Chicken Karahi
    "chicken-karahi/special-chicken-karahi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-karahi/chicken-black-pepper-karahi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-karahi/chicken-achari-karahi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-karahi/chicken-white-karahi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "chicken-karahi/chicken-makhni-karahi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    
    # Beef Karahi
    "beef-karahi/special-beef-karahi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "beef-karahi/beef-black-pepper-karahi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "beef-karahi/beef-white-karahi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    
    # Mutton Karahi
    "mutton-karahi/mutton-matka": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "mutton-karahi/special-mutton-matka": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "mutton-karahi/mutton-black-pepper-karahi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "mutton-karahi/mutton-achari-karahi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "mutton-karahi/mutton-white-karahi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    "mutton-karahi/mutton-makhni-karahi": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=85",
    
    # BBQ
    "bbq/mutton-champ": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/chicken-tikka-piece": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/emirates-special-cheese-boti": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/emirates-special-batair": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/chicken-tikka-boti": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/chicken-achari-boti": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/chicken-afgani-boti": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/chicken-shashlik-boti": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/chicken-malai-boti": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/chicken-kastoori-boti": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/chicken-qalmi-tikka": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/chicken-kabab": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/reshmi-kabab": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/turkish-kabab": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/lebanese-cheese-kabab": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/beef-kabab": "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=85",
    "bbq/fish-tikka": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop&q=85",
    
    # Platters
    "platters/royal-platter": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop&q=85",
    "platters/royal-family-platter": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop&q=85",
    "platters/emirates-party-platter": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop&q=85",
    
    # Kids Menu
    "kids-menu/chicken-strips-kids": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=85",
    "kids-menu/zinger-burger-fries": "https://images.unsplash.com/photo-1550547660-d9450f859429?w=800&h=600&fit=crop&q=85",
    "kids-menu/nuggets-6pc": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=85",
    "kids-menu/fries-kids": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop&q=85",
    "kids-menu/loaded-fries-kids": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop&q=85",
    
    # Desserts
    "desserts/emirati-kunaffa": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=85",
    "desserts/omali": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=85",
    "desserts/gajar-halwa": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=85",
    "desserts/shahi-kheer": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=85",
    "desserts/gulab-jamun": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=85",
    "desserts/ice-cream-double": "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=85",
    
    # Tandoor
    "tandoor/chicken-cheese-naan": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=85",
    "tandoor/sada-naan": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=85",
    "tandoor/roghni-naan": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=85",
    "tandoor/garlic-naan": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=85",
    "tandoor/kalwanji-naan": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=85",
    "tandoor/tandoori-paratha": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=85",
    "tandoor/sada-roti": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=85",
    "tandoor/chicken-cheese-paratha": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=85",
    
    # Salad Bar
    "salad-bar/russian-salad": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=85",
    "salad-bar/fresh-green-salad": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=85",
    "salad-bar/mint-raita": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=85",
    "salad-bar/dagoos-sauce": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=85",
    "salad-bar/imli-sauce": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=85",
    "salad-bar/kachumar-salad": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=85",
}

def ensure_directories():
    """Create necessary directories for images"""
    categories = set(path.split('/')[0] for path in IMAGE_URLS.keys())
    for category in categories:
        dir_path = f"public/images/{category}"
        Path(dir_path).mkdir(parents=True, exist_ok=True)

def download_image(file_path: str, url: str) -> bool:
    """Download image from URL and save locally"""
    try:
        # Check if already exists
        if os.path.exists(file_path):
            return True
        
        # Download with timeout and user agent
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        request = urllib.request.Request(url, headers=headers)
        
        with urllib.request.urlopen(request, timeout=10) as response:
            with open(file_path, 'wb') as out_file:
                out_file.write(response.read())
        
        return True
        
    except Exception as e:
        return False

def main():
    """Main function"""
    print("=" * 70)
    print("EMIRATES CUISINE - IMAGE DOWNLOADER")
    print("=" * 70)
    print()
    
    print("📁 Step 1: Creating directories...")
    ensure_directories()
    print("✓ Directories ready")
    print()
    
    print("📥 Step 2: Downloading images...")
    success = 0
    failed = 0
    skipped = 0
    
    total = len(IMAGE_URLS)
    for idx, (image_path, url) in enumerate(IMAGE_URLS.items(), 1):
        file_path = f"public/images/{image_path}.jpg"
        
        if os.path.exists(file_path):
            skipped += 1
            status = "✓"
        else:
            if download_image(file_path, url):
                success += 1
                status = "✓"
            else:
                failed += 1
                status = "✗"
        
        # Progress
        percent = (idx / total) * 100
        print(f"  {status} [{idx:3d}/{total}] {image_path:50s} {percent:5.1f}%")
        
        # Rate limiting
        time.sleep(0.1)
    
    print()
    print("=" * 70)
    print(f"RESULTS:")
    print(f"  ✓ Downloaded:  {success}")
    print(f"  ~ Skipped:     {skipped}")
    print(f"  ✗ Failed:      {failed}")
    print(f"  ═ Total:       {success + skipped + failed}")
    print("=" * 70)
    print()
    
    if failed == 0:
        print("✅ All images ready! Your app is set to go.")
    else:
        print(f"⚠️  {failed} images failed. Check your internet connection.")
    
    print()

if __name__ == "__main__":
    main()
