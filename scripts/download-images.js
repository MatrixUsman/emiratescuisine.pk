/**
 * Image Download Script
 * Downloads food images from Unsplash for all menu items
 * 
 * Usage: node scripts/download-images.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const { menuData } = require('../data/menu.ts');

// Unsplash image mappings - curated food images
const imageMappings = {
  // Appetizers
  'fattoush': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
  'arabic-hummus': 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
  'arabic-chicken-shawarma': 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&h=600&fit=crop',
  'dynamite-chicken': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop',
  'dynamite-shrimp': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
  'dumpling-steam': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'dhaka-chicken': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop',
  'honey-wings': 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=600&fit=crop',
  'loaded-chicken-cheese-fries': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop',
  'crumbed-fried-prawn': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
  'chicken-strips-fries': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop',
  'finger-fish': 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop',
  'fish-katsu': 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop',
  'fish-cracker': 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop',
  'french-fries': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop',
  'garlic-mayo-fries': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop',
  
  // Soups
  'emirates-special-soup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop',
  'hot-sour-soup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop',
  'szechuan-almond-soup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop',
  'chicken-corn-soup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop',
  
  // Chinese
  'chicken-chilli-dry': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
  'kong-pau-chicken': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
  'cashewnut-chicken': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
  'chicken-black-pepper': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
  'chicken-manchurian': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
  'chk-shashlik': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
  'mongolian-chicken': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
  'chinese-platter': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop',
  'chicken-fried-rice': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
  'egg-fried-rice': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
  'masala-rice': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
  'vegetable-rice': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
  
  // Chowmein
  'special-chowmein': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
  'chicken-chowmein': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
  'vegetable-chowmein': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
  
  // Pasta
  'emirates-sp-pasta': 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop',
  'creamy-master-alfredo-pasta': 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop',
  'pasta-la-vista': 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop',
  
  // Steaks
  'emirates-sp-combo-steak': 'https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop',
  'white-mushroom-steak': 'https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop',
  'maxican-steak': 'https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop',
  'tarragon-steak': 'https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop',
  'black-pepper-steak': 'https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop',
  'moroccan-steak': 'https://images.unsplash.com/photo-1546833369-9c9ae5d1e616?w=800&h=600&fit=crop',
  'emirates-sp-stuffed-chk': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop',
  
  // Chicken Handi
  'emirati-cheese-gatala-handi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'chicken-bombay-handi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'chicken-hyderabadi-handi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'chicken-rajastani-handi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'chicken-makhni-handi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'chicken-madrasi-handi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'chicken-mughlai-handi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'chicken-achari-handi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'chicken-shajhani-handi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'green-chilli-lemon-handi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'chicken-jalfrezi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'chicken-kabab-masala': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'chicken-tawa-qeema': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  
  // Arabic
  'chicken-mandi': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop',
  'chicken-madhbi': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop',
  'mutton-mandi': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop',
  'mutton-madhbi': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop',
  'full-goat': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop',
  
  // Pakistani Rice
  'chicken-biryani': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
  'chicken-matka-biryani': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
  'mutton-matka-biryani': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
  'jangli-pulao': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
  
  // Chicken Karahi
  'special-chicken-karahi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'chicken-black-pepper-karahi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'chicken-achari-karahi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'chicken-white-karahi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'chicken-makhni-karahi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  
  // Beef Karahi
  'special-beef-karahi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'beef-black-pepper-karahi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'beef-white-karahi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  
  // Mutton Karahi
  'mutton-matka': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'special-mutton-matka': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'mutton-black-pepper-karahi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'mutton-achari-karahi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'mutton-white-karahi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  'mutton-makhni-karahi': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  
  // BBQ
  'mutton-champ': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'chicken-tikka-piece': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'emirates-special-cheese-boti': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'emirates-special-batair': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'chicken-tikka-boti': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'chicken-achari-boti': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'chicken-afgani-boti': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'chicken-shashlik-boti': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'chicken-malai-boti': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'chicken-kastoori-boti': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'chicken-qalmi-tikka': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'chicken-kabab': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'reshmi-kabab': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'turkish-kabab': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'lebanese-cheese-kabab': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'beef-kabab': 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  'fish-tikka': 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop',
  
  // Platters
  'royal-platter': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop',
  'royal-family-platter': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop',
  'emirates-party-platter': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop',
  
  // Kids Menu
  'chicken-strips-kids': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop',
  'zinger-burger-fries': 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop',
  'nuggets-6pc': 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&h=600&fit=crop',
  'fries-kids': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop',
  'loaded-fries-kids': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop',
  
  // Drinks
  'special-lemonade': 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=800&h=600&fit=crop',
  'mint-margarita': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop',
  'blue-lagoon': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop',
  'pina-colada': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop',
  'chocolate-shake': 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=600&fit=crop',
  'oreo-shake': 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=600&fit=crop',
  'kitkat-shake': 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=600&fit=crop',
  'cold-coffee': 'https://images.unsplash.com/photo-1517487881594-2787fef5eb3f?w=800&h=600&fit=crop',
  'cold-drink-regular': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop',
  'cold-drink-1.5l': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop',
  'diet-can': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop',
  'mineral-water-500ml': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop',
  'mineral-water-1.5l': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop',
  'fresh-lime': 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=800&h=600&fit=crop',
  'fresh-lime-dite': 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=800&h=600&fit=crop',
  
  // Hot Bar
  'karak-chai': 'https://images.unsplash.com/photo-1517487881594-2787fef5eb3f?w=800&h=600&fit=crop',
  'matka-chai': 'https://images.unsplash.com/photo-1517487881594-2787fef5eb3f?w=800&h=600&fit=crop',
  'cappuccino': 'https://images.unsplash.com/photo-1517487881594-2787fef5eb3f?w=800&h=600&fit=crop',
  'hot-chocolate': 'https://images.unsplash.com/photo-1517487881594-2787fef5eb3f?w=800&h=600&fit=crop',
  'peshawari-kehwa': 'https://images.unsplash.com/photo-1517487881594-2787fef5eb3f?w=800&h=600&fit=crop',
  
  // Desserts
  'emirati-kunaffa': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop',
  'omali': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop',
  'gajar-halwa': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop',
  'shahi-kheer': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop',
  'gulab-jamun': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop',
  'ice-cream-double': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop',
  
  // Tandoor
  'chicken-cheese-naan': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
  'sada-naan': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
  'roghni-naan': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
  'garlic-naan': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
  'kalwanji-naan': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
  'tandoori-paratha': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
  'sada-roti': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
  
  // Salad Bar
  'russian-salad': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
  'fresh-green-salad': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
  'mint-raita': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
  'dagoos-sauce': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
  'imli-sauce': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
  'kachumar-salad': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirects
        file.close();
        fs.unlinkSync(filepath);
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

async function downloadAllImages() {
  const baseDir = path.join(__dirname, '..', 'public', 'images');
  let downloaded = 0;
  let failed = 0;

  for (const category of menuData.categories) {
    const categoryDir = path.join(baseDir, category.id);
    
    // Ensure category directory exists
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    for (const item of category.items) {
      const imageUrl = imageMappings[item.id];
      if (!imageUrl) {
        console.log(`⚠️  No image URL found for: ${item.name} (${item.id})`);
        failed++;
        continue;
      }

      const filepath = path.join(categoryDir, `${item.id}.jpg`);
      
      // Skip if already exists
      if (fs.existsSync(filepath)) {
        console.log(`⏭️  Skipping ${item.name} (already exists)`);
        continue;
      }

      try {
        console.log(`⬇️  Downloading ${item.name}...`);
        await downloadImage(imageUrl, filepath);
        downloaded++;
        console.log(`✅ Downloaded ${item.name}`);
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 200));
      } catch (error) {
        console.error(`❌ Failed to download ${item.name}:`, error.message);
        failed++;
      }
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`✅ Downloaded: ${downloaded}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📁 Total: ${downloaded + failed}`);
}

// Run the script
downloadAllImages().catch(console.error);
