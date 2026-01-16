#!/usr/bin/env python3
"""
Fallback Image Downloader - Alternative URLs for Failed Items
"""

import os
import urllib.request
import time
from pathlib import Path

# Fallback URLs for items that failed
FALLBACK_URLS = {
    # Steaks - Using alternative steak image URLs
    "steaks/emirates-sp-combo-steak": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&h=600&fit=crop&q=85",
    "steaks/white-mushroom-steak": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&h=600&fit=crop&q=85",
    "steaks/maxican-steak": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&h=600&fit=crop&q=85",
    "steaks/tarragon-steak": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&h=600&fit=crop&q=85",
    "steaks/black-pepper-steak": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&h=600&fit=crop&q=85",
    "steaks/moroccan-steak": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&h=600&fit=crop&q=85",
    
    # Hot bar - Tea/Coffee alternatives
    "hot-bar/matka-chai": "https://images.unsplash.com/photo-1559056199-641a0ac8b8d5?w=800&h=600&fit=crop&q=85",
    "hot-bar/peshawari-kehwa": "https://images.unsplash.com/photo-1559056199-641a0ac8b8d5?w=800&h=600&fit=crop&q=85",
    
    # Drinks
    "drinks/cold-coffee": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop&q=85",
}

def download_image(file_path: str, url: str) -> bool:
    """Download image from URL and save locally"""
    try:
        # Check if already exists
        if os.path.exists(file_path):
            file_size = os.path.getsize(file_path)
            if file_size > 5000:  # Skip if already downloaded
                return True
        
        # Download with timeout and user agent
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        request = urllib.request.Request(url, headers=headers)
        
        with urllib.request.urlopen(request, timeout=15) as response:
            with open(file_path, 'wb') as out_file:
                out_file.write(response.read())
        
        return True
        
    except Exception as e:
        print(f"    Error: {str(e)[:50]}")
        return False

def main():
    """Main function"""
    print("=" * 70)
    print("EMIRATES CUISINE - FALLBACK IMAGE DOWNLOADER")
    print("=" * 70)
    print()
    
    print("📥 Downloading fallback images for failed items...")
    success = 0
    failed = 0
    
    total = len(FALLBACK_URLS)
    for idx, (image_path, url) in enumerate(FALLBACK_URLS.items(), 1):
        file_path = f"public/images/{image_path}.jpg"
        
        if download_image(file_path, url):
            success += 1
            status = "✓"
        else:
            failed += 1
            status = "✗"
        
        # Progress
        percent = (idx / total) * 100
        print(f"  {status} [{idx:2d}/{total}] {image_path:40s} {percent:5.1f}%")
        
        # Rate limiting
        time.sleep(0.2)
    
    print()
    print("=" * 70)
    print(f"FALLBACK RESULTS:")
    print(f"  ✓ Downloaded:  {success}")
    print(f"  ✗ Failed:      {failed}")
    print(f"  ═ Total:       {success + failed}")
    print("=" * 70)
    print()
    
    if failed == 0:
        print("✅ All fallback images downloaded successfully!")
    else:
        print(f"⚠️  {failed} images still failed.")
    
    print()

if __name__ == "__main__":
    main()
