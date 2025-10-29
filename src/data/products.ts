import shoeDryer from "@/assets/shoe-dryer.png";
import cleaningMop from "@/assets/cleaning-mop.png";
import securityCamera from "@/assets/security-camera.png";
import vegetableChopper from "@/assets/vegetable-chopper.png";
import tumblerPink from "@/assets/valeri-tumbler-product.jpg";
import portableBlender from "@/assets/portable-blender.jpg";
import wineOpener from "@/assets/wine-opener.jpg";
import siliconeBags from "@/assets/silicone-bags.jpg";

export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  material?: string;
  salePrice?: string;
  amazonUrl?: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "VALERI 40oz All-Day Tumbler - Rose Quartz",
    price: "£38.00",
    image: tumblerPink,
    rating: 5.0,
    reviews: 6,
    category: "Drinkware",
    description: "Stay stylish and hydrated with a tumbler designed for the modern woman on the go. 100% leak-proof locking lid, 24-hour cold retention, 8-hour hot retention. Ergonomic handle & tapered base fits standard cup holders. Dishwasher safe with premium matte finish.",
    material: "Food-Grade Stainless Steel, Double-Wall Vacuum Insulation",
    amazonUrl: "https://www.amazon.co.uk/VALERI-Leakproof-Travel-Tumbler-Handle/dp/B0FDR886BL"
  },
  {
    id: "7",
    title: "Self-Squeezing Multifunctional Mini Cleaning Mop",
    price: "£13.99",
    image: cleaningMop,
    rating: 4.6,
    reviews: 567,
    category: "Kitchen Essentials",
    description: "Innovative self-squeezing mini mop perfect for quick cleanups. Features a built-in wringer mechanism and microfiber head. Ideal for kitchens, bathrooms, and small spaces.",
    material: "Microfiber Mop Head, PP Plastic Handle, Stainless Steel Mechanism"
  },
  {
    id: "8",
    title: "Smart Security Indoor Camera - 1080P HD",
    price: "£54.99",
    salePrice: "£39.99",
    image: securityCamera,
    rating: 4.8,
    reviews: 1876,
    category: "Home Tech",
    description: "HD indoor security camera with night vision, two-way audio, and motion detection. Connect via Wi-Fi for 24/7 home monitoring through your smartphone.",
    material: "ABS Plastic Housing, Glass Lens, Metal Base"
  },
  {
    id: "6",
    title: "Quick-Dry Deodorizing Portable Shoe Dryer",
    price: "£32.99",
    image: shoeDryer,
    rating: 4.7,
    reviews: 428,
    category: "Home Tech",
    description: "Portable electric shoe dryer that quickly dries and deodorizes shoes, boots, and gloves. Perfect for wet weather and sports equipment. Compact and energy-efficient design.",
    material: "ABS Plastic Housing, PTC Ceramic Heating Elements"
  },
  {
    id: "3",
    title: "Portable USB Rechargeable Blender Cup - 380ml",
    price: "£24.99",
    image: portableBlender,
    rating: 4.7,
    reviews: 1653,
    category: "Kitchen Essentials",
    description: "Make fresh smoothies anywhere with this portable USB rechargeable blender. 6-blade system, BPA-free, perfect for gym, office, or travel. One-button operation and easy to clean.",
    material: "BPA-Free Tritan Plastic, Stainless Steel Blades"
  },
  {
    id: "4",
    title: "Electric Automatic Wine Bottle Opener",
    price: "£29.99",
    salePrice: "£19.99",
    image: wineOpener,
    rating: 4.6,
    reviews: 892,
    category: "Kitchen Essentials",
    description: "Open wine bottles effortlessly with this premium electric corkscrew. Opens up to 30 bottles on a single charge. Includes foil cutter, elegant design perfect for wine lovers.",
    material: "Stainless Steel Corkscrew, ABS Plastic Body"
  },
  {
    id: "5",
    title: "Reusable Silicone Food Storage Bags - 6 Pack",
    price: "£16.99",
    image: siliconeBags,
    rating: 4.8,
    reviews: 1234,
    category: "Kitchen Essentials",
    description: "Eco-friendly alternative to plastic bags. Leak-proof, airtight seal, dishwasher and freezer safe. Set includes 2 large, 2 medium, and 2 small bags in vibrant colors.",
    material: "100% Food-Grade Platinum Silicone, BPA-Free"
  },
  {
    id: "9",
    title: "Versatile Vegetable Chopper & Dicer - 8 in 1",
    price: "£14.99",
    image: vegetableChopper,
    rating: 4.5,
    reviews: 743,
    category: "Kitchen Essentials",
    description: "Multi-functional vegetable chopper with multiple blade options for dicing, slicing, and julienne cuts. Makes meal prep faster and easier with uniform cuts every time.",
    material: "BPA-Free ABS Plastic, 420 Stainless Steel Blades"
  }
];
