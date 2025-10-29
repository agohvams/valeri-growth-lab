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
    description: "Premium 40oz insulated tumbler with handle - perfect travel water bottle for women. This large stainless steel tumbler keeps drinks cold for 24 hours and hot for 8 hours with double wall vacuum insulation. Features 100% leak-proof lid, fits car cup holders, dishwasher safe. Ideal reusable water bottle for gym, office, outdoor activities. BPA-free insulated cup with ergonomic handle and stylish rose quartz finish.",
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
    description: "Innovative self-wringing squeeze mop with microfiber head - compact floor cleaning mop for kitchen, bathroom, and small spaces. This mini flat mop features hands-free squeeze wringer mechanism for easy cleaning without bending. Reusable microfiber pad is machine washable and perfect for hardwood, tile, laminate floors. Space-saving design ideal for apartments, RVs, and quick spill cleanups. Lightweight wet dry mop with ergonomic handle.",
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
    description: "1080P WiFi security camera for home with night vision, two-way audio, and motion detection alerts. Smart indoor camera compatible with Alexa, works with iOS and Android app for 24/7 surveillance. Perfect baby monitor camera, pet camera, or nanny cam with real-time notifications. Features infrared night vision, cloud storage option, pan-tilt function, and easy wireless setup. Ideal CCTV camera for bedroom, living room, office monitoring.",
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
    description: "Electric boot dryer and shoe warmer - portable footwear dryer with heating technology for fast drying. Eliminates moisture and odors from shoes, boots, trainers, gloves, and socks in 1-2 hours. PTC ceramic heating provides safe, energy-efficient drying without damage. Perfect shoe dehumidifier for wet weather, sports equipment, ski boots, work boots. Compact design ideal for home, gym, travel. Prevents mold and bacteria growth while extending shoe life.",
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
    description: "Personal portable blender for smoothies and shakes - mini blender with USB rechargeable battery for travel, gym, office. This small cordless blender features powerful 6-blade system that crushes ice and frozen fruit. BPA-free 380ml bottle blender with one-touch operation, leak-proof lid. Perfect protein shake blender, juice maker, baby food blender on the go. Easy to clean single serve blender with 15+ blends per charge.",
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
    description: "Automatic electric wine opener with rechargeable battery - cordless wine bottle opener that removes corks in seconds. This electric corkscrew opens up to 30 bottles on single charge with push-button operation. Includes foil cutter for complete wine opening set. Stainless steel spiral works with all cork types. Perfect wine accessories gift for wine lovers, sommeliers, home bar. Elegant design with LED indicator, ideal for parties and entertaining.",
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
    description: "Reusable food storage bags set - eco-friendly silicone bags alternative to plastic ziplock bags. 6 pack includes 2 large sandwich bags, 2 medium snack bags, 2 small bags with airtight leak-proof seal. These reusable freezer bags are dishwasher safe, microwave safe, freezer safe. BPA-free food grade platinum silicone perfect for meal prep, lunch bags, sous vide cooking. Sustainable zero waste kitchen storage bags for fruits, vegetables, leftovers.",
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
    description: "8-in-1 vegetable chopper and food dicer - multifunctional veggie chopper with interchangeable blades for dicing, slicing, julienne, grating. This manual food chopper makes meal prep easy with uniform cuts for onions, tomatoes, carrots, salads. Includes container to catch chopped vegetables. BPA-free onion chopper with sharp stainless steel blades, non-slip base. Perfect kitchen gadget for salad maker, cheese grater, veggie slicer. Easy to clean and dishwasher safe.",
    material: "BPA-Free ABS Plastic, 420 Stainless Steel Blades"
  }
];
