import productDrinkware from "@/assets/product-drinkware.jpg";
import productHometech from "@/assets/product-hometech.jpg";
import productKitchen from "@/assets/product-kitchen.jpg";

export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Premium Insulated Water Bottle",
    price: "£34.99",
    image: productDrinkware,
    rating: 4.8,
    reviews: 156,
    category: "Drinkware",
    description: "Keep beverages hot for 12 hours or cold for 24 hours with our premium stainless steel insulated bottle. BPA-free and leak-proof design."
  },
  {
    id: "2",
    title: "Smart Kitchen Scale",
    price: "£49.99",
    image: productHometech,
    rating: 4.6,
    reviews: 89,
    category: "Home Tech",
    description: "Precision digital scale with nutritional calculator and Bluetooth connectivity. Perfect for meal prep and healthy cooking."
  },
  {
    id: "3",
    title: "Professional Knife Set",
    price: "£129.99",
    image: productKitchen,
    rating: 4.9,
    reviews: 234,
    category: "Kitchen Essentials",
    description: "Handcrafted German steel knives with ergonomic wooden handles. Includes chef's knife, paring knife, and bread knife with premium block."
  },
  {
    id: "4",
    title: "Bamboo Cutting Board Set",
    price: "£39.99",
    image: productKitchen,
    rating: 4.7,
    reviews: 142,
    category: "Kitchen Essentials",
    description: "Eco-friendly bamboo cutting boards in three sizes. Naturally antimicrobial and gentle on knife blades."
  },
  {
    id: "5",
    title: "Ceramic Travel Mug",
    price: "£24.99",
    image: productDrinkware,
    rating: 4.5,
    reviews: 98,
    category: "Drinkware",
    description: "Double-walled ceramic travel mug with silicone lid. Keeps coffee hot without plastic taste. Dishwasher safe."
  },
  {
    id: "6",
    title: "Electric Milk Frother",
    price: "£29.99",
    image: productHometech,
    rating: 4.4,
    reviews: 67,
    category: "Home Tech",
    description: "Create café-quality foam at home. Four settings for hot/cold foam and hot chocolate. USB rechargeable."
  }
];
