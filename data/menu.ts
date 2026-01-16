export interface MenuItem {
  id: string;
  name: string;
  price?: number;
  halfPrice?: number;
  fullPrice?: number;
  quarterPrice?: number;
  description?: string;
  spicy?: boolean;
  sizes?: {
    single?: number;
    half?: number;
    full?: number;
    quarter?: number;
  };
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
  description?: string;
}

export interface MenuData {
  categories: MenuCategory[];
}

export const menuData: MenuData = {
  categories: [
    {
      id: "appetizers",
      name: "Appetizers",
      items: [
        { id: "fattoush", name: "Fattoush", price: 549 },
        { id: "arabic-hummus", name: "Arabic Hummus", price: 649 },
        { id: "arabic-chicken-shawarma", name: "Arabic Chicken Shawarma", price: 549 },
        { id: "dynamite-chicken", name: "Dynamite Chicken", price: 799 },
        { id: "dynamite-shrimp", name: "Dynamite Shrimp", price: 1299 },
        { id: "dumpling-steam", name: "Dumpling Steam", price: 749 },
        { id: "dhaka-chicken", name: "Dhaka Chicken", price: 899 },
        { id: "honey-wings", name: "Honey Wings", price: 749 },
        { id: "loaded-chicken-cheese-fries", name: "Loaded Chicken Cheese Fries", price: 799 },
        { id: "crumbed-fried-prawn", name: "Crumbed Fried Prawn", price: 1499 },
        { id: "chicken-strips-fries", name: "Chicken Strips With Fries", price: 999 },
        { id: "finger-fish", name: "Finger Fish (6Pcs W/Fries)", price: 1299 },
        { id: "fish-katsu", name: "Fish Katsu (6Pcs)", price: 1699 },
        { id: "fish-cracker", name: "Fish Cracker", price: 399 },
        { id: "french-fries", name: "French Fries", price: 349 },
        { id: "garlic-mayo-fries", name: "Garlic Mayo Fries", price: 399 },
      ],
    },
    {
      id: "soups",
      name: "Soups",
      items: [
        {
          id: "emirates-special-soup",
          name: "Emirates Special Soup",
          sizes: { single: 349, half: 849, full: 1249 },
        },
        {
          id: "hot-sour-soup",
          name: "Hot & Sour Soup",
          sizes: { single: 349, half: 749, full: 1149 },
        },
        {
          id: "szechuan-almond-soup",
          name: "Szechuan Almond Soup",
          sizes: { single: 349, half: 799, full: 1249 },
        },
        {
          id: "chicken-corn-soup",
          name: "Chicken Corn Soup",
          sizes: { single: 349, half: 699, full: 1149 },
        },
      ],
    },
    {
      id: "chinese",
      name: "Chinese",
      items: [
        {
          id: "chicken-chilli-dry",
          name: "Chicken Chilli Dry (With Rice)",
          halfPrice: 899,
          fullPrice: 1649,
        },
        {
          id: "kong-pau-chicken",
          name: "Kong Pau Chicken (With Rice)",
          halfPrice: 899,
          fullPrice: 1599,
        },
        {
          id: "cashewnut-chicken",
          name: "Cashewnut Chicken (With Rice)",
          halfPrice: 879,
          fullPrice: 1549,
        },
        {
          id: "chicken-black-pepper",
          name: "Chicken Black Pepper (With Rice)",
          halfPrice: 849,
          fullPrice: 1499,
        },
        {
          id: "chicken-manchurian",
          name: "Chicken Manchurian (With Rice)",
          halfPrice: 849,
          fullPrice: 1499,
        },
        {
          id: "chk-shashlik",
          name: "Chk Shashlik (With Rice)",
          halfPrice: 879,
          fullPrice: 1549,
        },
        {
          id: "mongolian-chicken",
          name: "Mongolian Chicken (With Rice)",
          halfPrice: 899,
          fullPrice: 1599,
        },
        {
          id: "chinese-platter",
          name: "Chinese Platter (2/3 Person)",
          price: 1899,
          description: "Chk Chilli Dry, Veg Chowmein, Chk Shashlik, Egg Fried Rice, Wings (4 Pc)",
        },
        {
          id: "chicken-fried-rice",
          name: "Chicken Fried Rice",
          halfPrice: 529,
          fullPrice: 849,
        },
        {
          id: "egg-fried-rice",
          name: "Egg Fried Rice",
          halfPrice: 449,
          fullPrice: 799,
        },
        {
          id: "masala-rice",
          name: "Masala Rice",
          halfPrice: 520,
          fullPrice: 849,
        },
        {
          id: "vegetable-rice",
          name: "Vegetable Rice",
          halfPrice: 449,
          fullPrice: 799,
        },
      ],
    },
    {
      id: "chowmein",
      name: "Chowmein",
      items: [
        {
          id: "special-chowmein",
          name: "Special Chowmein",
          halfPrice: 799,
          fullPrice: 1299,
        },
        {
          id: "chicken-chowmein",
          name: "Chicken Chowmein",
          halfPrice: 749,
          fullPrice: 1149,
        },
        {
          id: "vegetable-chowmein",
          name: "Vegetable Chowmein",
          halfPrice: 599,
          fullPrice: 999,
        },
      ],
    },
    {
      id: "pasta",
      name: "Pasta",
      items: [
        {
          id: "emirates-sp-pasta",
          name: "Emirates Sp Pasta (Alfredo, Spinach, Roma)",
          price: 1599,
          description: "Grilled chk topped with black pepper & mushroom sauce",
        },
        {
          id: "creamy-master-alfredo-pasta",
          name: "Creamy Master Alfredo Pasta",
          price: 899,
          description: "Fettuccine Pasta Cooked in Creamy Sauce Topped With Grilled Chk",
        },
        {
          id: "pasta-la-vista",
          name: "Pasta La Vista",
          price: 799,
          spicy: true,
          description: "Penne Pasta with Red Spicy Sauce Topped With Grilled Chk",
        },
      ],
    },
    {
      id: "steaks",
      name: "Steaks",
      items: [
        {
          id: "emirates-sp-combo-steak",
          name: "Emirates Sp Combo Steak",
          price: 1699,
          description: "Grilled chk topped with black pepper & mushroom sauce",
        },
        {
          id: "white-mushroom-steak",
          name: "White Mushroom Steak",
          price: 1599,
          description: "Grilled chk topped with creamy mushroom sauce",
        },
        {
          id: "maxican-steak",
          name: "Maxican Steak",
          price: 1599,
          description: "Grilled chk prepared in red Maxican sauce",
        },
        {
          id: "tarragon-steak",
          name: "Tarragon Steak",
          price: 1699,
          description: "Grilled chk topped with creamy herb sauce",
        },
        {
          id: "black-pepper-steak",
          name: "Black Pepper Steak",
          price: 1599,
          description: "Grilled chk topped with black pepper sauce",
        },
        {
          id: "moroccan-steak",
          name: "Moroccan Steak",
          price: 1599,
          description: "Grilled chk topped with symbolic chilli sauce",
        },
        {
          id: "emirates-sp-stuffed-chk",
          name: "Emirates Sp Stuffed Chk",
          price: 1599,
          description: "Crumbed fried chicken stuffed with cheese, mushrooms, olives & topped with creamy white sauce",
        },
      ],
      description: "*All Steaks served with french fries or mashed patato & sauteed Vegitable",
    },
    {
      id: "chicken-handi",
      name: "Chicken Handi",
      items: [
        {
          id: "emirati-cheese-gatala-handi",
          name: "Emirati Cheese Gatala Handi",
          halfPrice: 1099,
          fullPrice: 1999,
        },
        {
          id: "chicken-bombay-handi",
          name: "Chicken Bombay Handi",
          halfPrice: 1049,
          fullPrice: 1899,
          spicy: true,
        },
        {
          id: "chicken-hyderabadi-handi",
          name: "Chicken Hyderabadi Handi",
          halfPrice: 1049,
          fullPrice: 1849,
          spicy: true,
        },
        {
          id: "chicken-rajastani-handi",
          name: "Chicken Rajastani Handi",
          halfPrice: 1049,
          fullPrice: 1849,
        },
        {
          id: "chicken-makhni-handi",
          name: "Chicken Makhni Handi",
          halfPrice: 1049,
          fullPrice: 1849,
        },
        {
          id: "chicken-madrasi-handi",
          name: "Chicken Madrasi Handi",
          halfPrice: 1049,
          fullPrice: 1849,
        },
        {
          id: "chicken-mughlai-handi",
          name: "Chicken Mughlai Handi",
          halfPrice: 1049,
          fullPrice: 1849,
        },
        {
          id: "chicken-achari-handi",
          name: "Chicken Achari Handi",
          halfPrice: 1049,
          fullPrice: 1849,
        },
        {
          id: "chicken-shajhani-handi",
          name: "Chicken Shajhani Handi",
          halfPrice: 1049,
          fullPrice: 1849,
        },
        {
          id: "green-chilli-lemon-handi",
          name: "Green Chili Lemon Handi",
          halfPrice: 1049,
          fullPrice: 1849,
        },
        {
          id: "chicken-jalfrezi",
          name: "Chicken Jalfrezi",
          fullPrice: 1299,
        },
        {
          id: "chicken-kabab-masala",
          name: "Chicken Kabab Masala",
          fullPrice: 1399,
        },
        {
          id: "chicken-tawa-qeema",
          name: "Chicken Tawa Qeema",
          fullPrice: 1399,
        },
      ],
    },
    {
      id: "arabic",
      name: "Arabic",
      items: [
        {
          id: "chicken-mandi",
          name: "Chicken Mandi",
          quarterPrice: 749,
          halfPrice: 1299,
          fullPrice: 2299,
        },
        {
          id: "chicken-madhbi",
          name: "Chicken Madhbi",
          quarterPrice: 749,
          halfPrice: 1299,
          fullPrice: 2399,
        },
        {
          id: "mutton-mandi",
          name: "Mutton Mandi",
          halfPrice: 1999,
          fullPrice: 3799,
        },
        {
          id: "mutton-madhbi",
          name: "Mutton Madhbi",
          halfPrice: 1999,
          fullPrice: 3799,
        },
        {
          id: "full-goat",
          name: "Full Goat (12kg / 6kg)",
          description: "On Demand",
        },
      ],
    },
    {
      id: "pakistani-rice",
      name: "Pakistani Rice",
      items: [
        { id: "chicken-biryani", name: "Chicken Biryani", price: 749 },
        { id: "chicken-matka-biryani", name: "Chicken Matka Biryani", price: 849 },
        { id: "mutton-matka-biryani", name: "Mutton Matka Biryani", price: 1399 },
        { id: "jangli-pulao", name: "Jangli Pulao", price: 899 },
      ],
    },
    {
      id: "chicken-karahi",
      name: "Chicken Karahi",
      items: [
        {
          id: "special-chicken-karahi",
          name: "Special Chicken Karahi",
          halfPrice: 1249,
          fullPrice: 2199,
        },
        {
          id: "chicken-black-pepper-karahi",
          name: "Chicken Black Pepper Karahi",
          halfPrice: 1199,
          fullPrice: 2199,
        },
        {
          id: "chicken-achari-karahi",
          name: "Chicken Achari Karahi",
          halfPrice: 1199,
          fullPrice: 2199,
        },
        {
          id: "chicken-white-karahi",
          name: "Chicken White Karahi",
          halfPrice: 1199,
          fullPrice: 2199,
        },
        {
          id: "chicken-makhni-karahi",
          name: "Chicken Makhni Karahi (Red)",
          halfPrice: 1199,
          fullPrice: 2199,
        },
      ],
    },
    {
      id: "beef-karahi",
      name: "Beef Karahi",
      items: [
        {
          id: "special-beef-karahi",
          name: "Special Beef Karahi",
          halfPrice: 1299,
          fullPrice: 2499,
        },
        {
          id: "beef-black-pepper-karahi",
          name: "Beef Black Pepper Karahi",
          halfPrice: 1299,
          fullPrice: 2499,
        },
        {
          id: "beef-white-karahi",
          name: "Beef White Karahi",
          halfPrice: 1299,
          fullPrice: 2499,
        },
      ],
    },
    {
      id: "mutton-karahi",
      name: "Mutton Karahi",
      items: [
        {
          id: "mutton-matka",
          name: "Mutton Matka",
          halfPrice: 1899,
          fullPrice: 3699,
        },
        {
          id: "special-mutton-matka",
          name: "Special Mutton Matka",
          halfPrice: 1899,
          fullPrice: 3699,
        },
        {
          id: "mutton-black-pepper-karahi",
          name: "Mutton Black Pepper Karahi",
          halfPrice: 1799,
          fullPrice: 3599,
        },
        {
          id: "mutton-achari-karahi",
          name: "Mutton Achari Karahi",
          halfPrice: 1799,
          fullPrice: 3599,
        },
        {
          id: "mutton-white-karahi",
          name: "Mutton White Karahi",
          halfPrice: 1849,
          fullPrice: 3799,
        },
        {
          id: "mutton-makhni-karahi",
          name: "Mutton Makhni Karahi (Red)",
          halfPrice: 1849,
          fullPrice: 3799,
        },
      ],
    },
    {
      id: "bbq",
      name: "BBQ",
      items: [
        {
          id: "mutton-champ",
          name: "Mutton Champ Spicy/Namkeen (4/8 Pc)",
          price: 1599,
          fullPrice: 3099,
        },
        {
          id: "chicken-tikka-piece",
          name: "Chicken Tikka Piece (C/L)",
          price: 499,
          fullPrice: 549,
        },
        {
          id: "emirates-special-cheese-boti",
          name: "Emirates Special Cheese Boti (10 Pcs Boneless)",
          price: 1199,
        },
        {
          id: "emirates-special-batair",
          name: "Emirates Special Batair (6 Pcs)",
          price: 1899,
        },
        {
          id: "chicken-tikka-boti",
          name: "Chicken Tikka Boti (10 Pcs Bone)",
          price: 949,
        },
        {
          id: "chicken-achari-boti",
          name: "Chicken Achari Boti (10 Pcs Bone)",
          price: 949,
        },
        {
          id: "chicken-afgani-boti",
          name: "Chicken Afgani Boti (10 Pcs Bone)",
          price: 949,
        },
        {
          id: "chicken-shashlik-boti",
          name: "Chicken Shashlik Boti (10 Pcs Bone)",
          price: 1049,
        },
        {
          id: "chicken-malai-boti",
          name: "Chicken Malai Boti (10 Pcs Boneless)",
          price: 1149,
        },
        {
          id: "chicken-kastoori-boti",
          name: "Chicken Kastoori Boti (10 Pcs Boneless)",
          price: 1199,
        },
        {
          id: "chicken-qalmi-tikka",
          name: "Chicken Qalmi Tikka (4 Pcs)",
          price: 999,
        },
        {
          id: "chicken-kabab",
          name: "Chicken Kabab (04 Pcs)",
          price: 999,
        },
        {
          id: "reshmi-kabab",
          name: "Reshmi Kabab (04 Pcs)",
          price: 1149,
        },
        {
          id: "turkish-kabab",
          name: "Turkish Kabab (04 Pcs)",
          price: 1149,
        },
        {
          id: "lebanese-cheese-kabab",
          name: "Lebanese Cheese Kabab (04 Pcs)",
          price: 1199,
        },
        {
          id: "beef-kabab",
          name: "Beef Kabab (04 Pcs)",
          price: 999,
        },
        {
          id: "fish-tikka",
          name: "Fish Tikka (10 Pcs)",
          price: 1799,
        },
      ],
    },
    {
      id: "platters",
      name: "Platters",
      items: [
        {
          id: "royal-platter",
          name: "Royal Platter (3 person)",
          price: 3149,
          description:
            "Leg / Chest Piece, Kalmi Tikka 2 pcs, Green Boti 3 pcs, Red Boti 3 pcs, Malai Boti 3 pcs, Chicken Reshmi Kabab 2 pcs, Beef Gola Kabab 4 pcs, Grilled Vegetable, Imli Sauce, Green Sauce, Red Sauce, Kalonji Nan, Roghni Nan, Namkeen Rice",
        },
        {
          id: "royal-family-platter",
          name: "Royal Family Platter (5-6 person)",
          price: 5699,
          description:
            "3 Kalmi Tikka, 4 Mutton Chops, Beef kabab 2 pcs, Beef Gola Kabab 5 pcs, Green Boti 5 pcs, Red Boti 5 pcs, Tikka Boti 5 pcs, Malai Boti 5 pcs, 2 Chicken Reshmi Kabab, Hummus Sauce, Imli Sauce, Tomato Sauce, Mint Sauce, 2 Kalonji Naan, 2 Garlic Naan, Grilled Vegetable, Namkeen Rice",
        },
        {
          id: "emirates-party-platter",
          name: "Emirates Party Platter",
          price: 11999,
          description:
            "Mutton Karahi 1 KG, Chicken Shah Jahani Handi Half, Mutton Chops 4 Pcs, Beef kabab 2 pcs, Turkish Kabab 3 Pcs, Reshmi kabab 3 Pcs, Gola Kabab 6 Pcs, Malali Boti 6 Pcs, Tikka Boti 6 pcs, Green Boti 6 Pcs, Tikka Chest Pc, Tikka Leg Pc, Hummus Sauce, Green Sauce, Imli Sauce, Red Sauce, Mint Raita, Grilled Veggies, Namkeen Rice",
        },
      ],
    },
    {
      id: "kids-menu",
      name: "Kids Menu",
      items: [
        {
          id: "chicken-strips-kids",
          name: "Chicken Strips W/Fries (Kids Meal)",
          price: 599,
        },
        {
          id: "zinger-burger-fries",
          name: "Zinger Burger with Fries",
          price: 599,
        },
        {
          id: "nuggets-6pc",
          name: "Nuggets 6 Pcs",
          price: 499,
        },
        {
          id: "fries-kids",
          name: "Fries",
          price: 349,
        },
        {
          id: "loaded-fries-kids",
          name: "Loaded Fries",
          price: 599,
        },
      ],
    },
    {
      id: "drinks",
      name: "Special Drinks",
      items: [
        { id: "special-lemonade", name: "Special Lemonade", price: 249 },
        { id: "mint-margarita", name: "Mint Margarita", price: 349 },
        { id: "blue-lagoon", name: "Blue Lagoon", price: 399 },
        { id: "pina-colada", name: "Pina Colada", price: 399 },
        { id: "chocolate-shake", name: "Chocolate Shake", price: 599 },
        { id: "oreo-shake", name: "Oreo Shake", price: 599 },
        { id: "kitkat-shake", name: "Kitkat Shake", price: 599 },
        { id: "cold-coffee", name: "Cold Coffee", price: 499 },
        { id: "cold-drink-regular", name: "Cold Drink Regular", price: 79 },
        { id: "cold-drink-1.5l", name: "Cold Drink 1.5L", price: 249 },
        { id: "diet-can", name: "Diet Can", price: 149 },
        { id: "mineral-water-500ml", name: "Mineral Water 500ml", price: 59 },
        { id: "mineral-water-1.5l", name: "Mineral Water 1.5L", price: 139 },
        { id: "fresh-lime", name: "Fresh Lime", price: 149 },
        { id: "fresh-lime-dite", name: "Fresh Lime Dite", price: 199 },
      ],
    },
    {
      id: "hot-bar",
      name: "Hot Bar",
      items: [
        { id: "karak-chai", name: "Karak Chai", price: 149 },
        { id: "matka-chai", name: "Matka Chai", price: 189 },
        { id: "cappuccino", name: "Cappuccino", price: 249 },
        { id: "hot-chocolate", name: "Hot Chocolate", price: 249 },
        {
          id: "peshawari-kehwa",
          name: "Peshawari Kehwa Chenak (2 Person)",
          price: 149,
        },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        {
          id: "emirati-kunaffa",
          name: "Emirati Kunaffa (Cream Cheese)",
          price: 749,
        },
        { id: "omali", name: "Omali", price: 399 },
        { id: "gajar-halwa", name: "Gajar Halwa 100gm", price: 199 },
        { id: "shahi-kheer", name: "Shahi Kheer", price: 275 },
        { id: "gulab-jamun", name: "Gulab Jamun (2pc)", price: 249 },
        { id: "ice-cream-double", name: "Ice Cream Double Scoop", price: 199 },
      ],
    },
    {
      id: "tandoor",
      name: "Tandoor",
      items: [
        { id: "chicken-cheese-naan", name: "Chicken Cheese Naan", price: 599 },
        { id: "sada-naan", name: "Sada Naan", price: 40 },
        { id: "roghni-naan", name: "Roghni Naan", price: 99 },
        { id: "garlic-naan", name: "Garlic Naan", price: 99 },
        { id: "kalwanji-naan", name: "Kalwanji Naan", price: 99 },
        {
          id: "tandoori-paratha",
          name: "Tandoori Paratha (Desi Ghee)",
          price: 109,
        },
        {
          id: "sada-roti",
          name: "Sada Roti",
          description: "As Per Gov Rates",
        },
      ],
    },
    {
      id: "salad-bar",
      name: "Salad Bar",
      items: [
        { id: "russian-salad", name: "Russian Salad", price: 799 },
        { id: "fresh-green-salad", name: "Fresh Green Salad", price: 149 },
        { id: "mint-raita", name: "Mint Raita", price: 149 },
        { id: "dagoos-sauce", name: "Dagoos Sauce (Tomato Sauce)", price: 149 },
        { id: "imli-sauce", name: "Imli Sauce", price: 199 },
        { id: "kachumar-salad", name: "Kachumar Salad", price: 249 },
      ],
    },
  ],
};
