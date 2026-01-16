#!/bin/bash

# Image Download Script
# Downloads food images from Unsplash for all menu items

BASE_DIR="public/images"
DELAY=0.2  # Delay between downloads to avoid rate limiting

# Function to download image
download_image() {
    local category=$1
    local item_id=$2
    local url=$3
    
    local dir="${BASE_DIR}/${category}"
    local filepath="${dir}/${item_id}.jpg"
    
    # Create directory if it doesn't exist
    mkdir -p "$dir"
    
    # Skip if file already exists
    if [ -f "$filepath" ]; then
        echo "⏭️  Skipping ${item_id} (already exists)"
        return 0
    fi
    
    # Download image
    echo "⬇️  Downloading ${item_id}..."
    if curl -L -s -f -o "$filepath" "$url" 2>/dev/null; then
        echo "✅ Downloaded ${item_id}"
        sleep $DELAY
        return 0
    else
        echo "❌ Failed to download ${item_id}"
        rm -f "$filepath" 2>/dev/null
        return 1
    fi
}

echo "🚀 Starting image downloads..."
echo ""

# Appetizers
download_image "appetizers" "fattoush" "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "arabic-hummus" "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "arabic-chicken-shawarma" "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "dynamite-chicken" "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "dynamite-shrimp" "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "dumpling-steam" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "dhaka-chicken" "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "honey-wings" "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "loaded-chicken-cheese-fries" "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "crumbed-fried-prawn" "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "chicken-strips-fries" "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "finger-fish" "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "fish-katsu" "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "fish-cracker" "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "french-fries" "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop&q=80"
download_image "appetizers" "garlic-mayo-fries" "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop&q=80"

# Soups
download_image "soups" "emirates-special-soup" "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&q=80"
download_image "soups" "hot-sour-soup" "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&q=80"
download_image "soups" "szechuan-almond-soup" "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&q=80"
download_image "soups" "chicken-corn-soup" "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&q=80"

# Chinese
download_image "chinese" "chicken-chilli-dry" "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80"
download_image "chinese" "kong-pau-chicken" "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80"
download_image "chinese" "cashewnut-chicken" "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80"
download_image "chinese" "chicken-black-pepper" "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80"
download_image "chinese" "chicken-manchurian" "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80"
download_image "chinese" "chk-shashlik" "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80"
download_image "chinese" "mongolian-chicken" "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80"
download_image "chinese" "chinese-platter" "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop&q=80"
download_image "chinese" "chicken-fried-rice" "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=80"
download_image "chinese" "egg-fried-rice" "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=80"
download_image "chinese" "masala-rice" "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=80"
download_image "chinese" "vegetable-rice" "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=80"

# Chowmein
download_image "chowmein" "special-chowmein" "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80"
download_image "chowmein" "chicken-chowmein" "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80"
download_image "chowmein" "vegetable-chowmein" "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80"

# Pasta
download_image "pasta" "emirates-sp-pasta" "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop&q=80"
download_image "pasta" "creamy-master-alfredo-pasta" "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop&q=80"
download_image "pasta" "pasta-la-vista" "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop&q=80"

# Steaks
download_image "steaks" "emirates-sp-combo-steak" "https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop&q=80"
download_image "steaks" "white-mushroom-steak" "https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop&q=80"
download_image "steaks" "maxican-steak" "https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop&q=80"
download_image "steaks" "tarragon-steak" "https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop&q=80"
download_image "steaks" "black-pepper-steak" "https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop&q=80"
download_image "steaks" "moroccan-steak" "https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop&q=80"
download_image "steaks" "emirates-sp-stuffed-chk" "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=80"

# Chicken Handi
download_image "chicken-handi" "emirati-cheese-gatala-handi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-handi" "chicken-bombay-handi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-handi" "chicken-hyderabadi-handi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-handi" "chicken-rajastani-handi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-handi" "chicken-makhni-handi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-handi" "chicken-madrasi-handi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-handi" "chicken-mughlai-handi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-handi" "chicken-achari-handi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-handi" "chicken-shajhani-handi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-handi" "green-chilli-lemon-handi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-handi" "chicken-jalfrezi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-handi" "chicken-kabab-masala" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "chicken-handi" "chicken-tawa-qeema" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"

# Arabic
download_image "arabic" "chicken-mandi" "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=80"
download_image "arabic" "chicken-madhbi" "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=80"
download_image "arabic" "mutton-mandi" "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=80"
download_image "arabic" "mutton-madhbi" "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=80"
download_image "arabic" "full-goat" "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=80"

# Pakistani Rice
download_image "pakistani-rice" "chicken-biryani" "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=80"
download_image "pakistani-rice" "chicken-matka-biryani" "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=80"
download_image "pakistani-rice" "mutton-matka-biryani" "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=80"
download_image "pakistani-rice" "jangli-pulao" "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=80"

# Chicken Karahi
download_image "chicken-karahi" "special-chicken-karahi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-karahi" "chicken-black-pepper-karahi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-karahi" "chicken-achari-karahi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-karahi" "chicken-white-karahi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "chicken-karahi" "chicken-makhni-karahi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"

# Beef Karahi
download_image "beef-karahi" "special-beef-karahi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "beef-karahi" "beef-black-pepper-karahi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "beef-karahi" "beef-white-karahi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"

# Mutton Karahi
download_image "mutton-karahi" "mutton-matka" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "mutton-karahi" "special-mutton-matka" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "mutton-karahi" "mutton-black-pepper-karahi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "mutton-karahi" "mutton-achari-karahi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "mutton-karahi" "mutton-white-karahi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"
download_image "mutton-karahi" "mutton-makhni-karahi" "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop&q=80"

# BBQ
download_image "bbq" "mutton-champ" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "chicken-tikka-piece" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "emirates-special-cheese-boti" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "emirates-special-batair" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "chicken-tikka-boti" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "chicken-achari-boti" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "chicken-afgani-boti" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "chicken-shashlik-boti" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "chicken-malai-boti" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "chicken-kastoori-boti" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "chicken-qalmi-tikka" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "chicken-kabab" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "reshmi-kabab" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "turkish-kabab" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "lebanese-cheese-kabab" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "beef-kabab" "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop&q=80"
download_image "bbq" "fish-tikka" "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop&q=80"

# Platters
download_image "platters" "royal-platter" "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop&q=80"
download_image "platters" "royal-family-platter" "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop&q=80"
download_image "platters" "emirates-party-platter" "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop&q=80"

# Kids Menu
download_image "kids-menu" "chicken-strips-kids" "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=80"
download_image "kids-menu" "zinger-burger-fries" "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop&q=80"
download_image "kids-menu" "nuggets-6pc" "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop&q=80"
download_image "kids-menu" "fries-kids" "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop&q=80"
download_image "kids-menu" "loaded-fries-kids" "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop&q=80"

# Drinks
download_image "drinks" "special-lemonade" "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=800&h=600&fit=crop&q=80"
download_image "drinks" "mint-margarita" "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop&q=80"
download_image "drinks" "blue-lagoon" "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop&q=80"
download_image "drinks" "pina-colada" "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop&q=80"
download_image "drinks" "chocolate-shake" "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=600&fit=crop&q=80"
download_image "drinks" "oreo-shake" "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=600&fit=crop&q=80"
download_image "drinks" "kitkat-shake" "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=600&fit=crop&q=80"
download_image "drinks" "cold-coffee" "https://images.unsplash.com/photo-1517487881594-2787fef5eb3f?w=800&h=600&fit=crop&q=80"
download_image "drinks" "cold-drink-regular" "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop&q=80"
download_image "drinks" "cold-drink-1.5l" "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop&q=80"
download_image "drinks" "diet-can" "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop&q=80"
download_image "drinks" "mineral-water-500ml" "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop&q=80"
download_image "drinks" "mineral-water-1.5l" "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop&q=80"
download_image "drinks" "fresh-lime" "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=800&h=600&fit=crop&q=80"
download_image "drinks" "fresh-lime-dite" "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=800&h=600&fit=crop&q=80"

# Hot Bar
download_image "hot-bar" "karak-chai" "https://images.unsplash.com/photo-1517487881594-2787fef5eb3f?w=800&h=600&fit=crop&q=80"
download_image "hot-bar" "matka-chai" "https://images.unsplash.com/photo-1517487881594-2787fef5eb3f?w=800&h=600&fit=crop&q=80"
download_image "hot-bar" "cappuccino" "https://images.unsplash.com/photo-1517487881594-2787fef5eb3f?w=800&h=600&fit=crop&q=80"
download_image "hot-bar" "hot-chocolate" "https://images.unsplash.com/photo-1517487881594-2787fef5eb3f?w=800&h=600&fit=crop&q=80"
download_image "hot-bar" "peshawari-kehwa" "https://images.unsplash.com/photo-1517487881594-2787fef5eb3f?w=800&h=600&fit=crop&q=80"

# Desserts
download_image "desserts" "emirati-kunaffa" "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=80"
download_image "desserts" "omali" "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=80"
download_image "desserts" "gajar-halwa" "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=80"
download_image "desserts" "shahi-kheer" "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=80"
download_image "desserts" "gulab-jamun" "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=80"
download_image "desserts" "ice-cream-double" "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=80"

# Tandoor
download_image "tandoor" "chicken-cheese-naan" "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=80"
download_image "tandoor" "sada-naan" "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=80"
download_image "tandoor" "roghni-naan" "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=80"
download_image "tandoor" "garlic-naan" "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=80"
download_image "tandoor" "kalwanji-naan" "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=80"
download_image "tandoor" "tandoori-paratha" "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=80"
download_image "tandoor" "sada-roti" "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=80"

# Salad Bar
download_image "salad-bar" "russian-salad" "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=80"
download_image "salad-bar" "fresh-green-salad" "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=80"
download_image "salad-bar" "mint-raita" "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=80"
download_image "salad-bar" "dagoos-sauce" "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=80"
download_image "salad-bar" "imli-sauce" "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=80"
download_image "salad-bar" "kachumar-salad" "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=80"

echo ""
echo "✅ Image download complete!"
echo "📁 Images saved to: ${BASE_DIR}/"
