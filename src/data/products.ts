import shoeDryer from "@/assets/shoe-dryer.png";
import cleaningMop from "@/assets/cleaning-mop.png";
import securityCamera from "@/assets/security-camera.png";
import vegetableChopper from "@/assets/vegetable-chopper.png";
import tumblerPink from "@/assets/tumbler-pink.png";

export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  salePrice?: string;
  amazonUrl?: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "VALERI 40oz Leakproof Travel Tumbler with Straw & Handle",
    price: "£69.99",
    salePrice: "£34.99",
    image: tumblerPink,
    rating: 4.9,
    reviews: 0,
    category: "Drinkware",
    description: "Premium 40oz stainless steel travel tumbler with leak-proof lid, straw, and convenient handle. Keeps drinks cold for 24 hours or hot for 12 hours. Available in Rose Quartz Pink.",
    amazonUrl: "https://www.amazon.co.uk/VALERI-Leakproof-Travel-Tumbler-Handle/dp/B0FDR886BL"
  },
  {
    id: "2",
    title: "Quick-Dry Deodorizing Portable Shoe Dryer",
    price: "£32.99",
    image: shoeDryer,
    rating: 4.7,
    reviews: 0,
    category: "Home Tech",
    description: "Portable electric shoe dryer that quickly dries and deodorizes shoes, boots, and gloves. Perfect for wet weather and sports equipment. Compact and energy-efficient design."
  },
  {
    id: "3",
    title: "Self-Squeezing Multifunctional Mini Cleaning Mop",
    price: "£13.99",
    image: cleaningMop,
    rating: 4.6,
    reviews: 0,
    category: "Kitchen Essentials",
    description: "Innovative self-squeezing mini mop perfect for quick cleanups. Features a built-in wringer mechanism and microfiber head. Ideal for kitchens, bathrooms, and small spaces."
  },
  {
    id: "4",
    title: "Smart Security Indoor Camera",
    price: "£54.99",
    image: securityCamera,
    rating: 4.8,
    reviews: 0,
    category: "Home Tech",
    description: "HD indoor security camera with night vision, two-way audio, and motion detection. Connect via Wi-Fi for 24/7 home monitoring through your smartphone."
  },
  {
    id: "5",
    title: "Versatile Vegetable Chopper & Dicer",
    price: "£14.99",
    image: vegetableChopper,
    rating: 4.5,
    reviews: 0,
    category: "Kitchen Essentials",
    description: "Multi-functional vegetable chopper with multiple blade options for dicing, slicing, and julienne cuts. Makes meal prep faster and easier with uniform cuts every time."
  }
];
