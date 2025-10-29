import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category.toLowerCase().replace(" ", "-") === selectedCategory);

  // Generate ItemList schema for SEO
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://valerigoods.com/product/${product.id}`
    }))
  };

  return (
    <>
      <Helmet>
        <title>Shop All Products | VALERI - Premium Kitchen & Home Essentials</title>
        <meta name="description" content="Shop premium kitchen essentials, modern drinkware, and innovative home tech. Free UK shipping on orders over £50. Quality products built to last." />
        <meta name="keywords" content="buy kitchen essentials, premium drinkware, home tech gadgets, insulated tumblers, kitchen tools, smart home devices, eco-friendly products" />
        <link rel="canonical" href="https://valerigoods.com/shop" />
        
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Shop All</h1>
            <p className="text-lg text-muted-foreground">
              Premium essentials for modern living
            </p>
          </div>
            
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
            <div className="flex gap-2 flex-wrap">
              <Button 
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className="font-bold uppercase tracking-wider text-xs"
              >
                All
              </Button>
              <Button 
                variant={selectedCategory === "drinkware" ? "default" : "outline"}
                onClick={() => setSelectedCategory("drinkware")}
                className="font-bold uppercase tracking-wider text-xs"
              >
                Drinkware
              </Button>
              <Button 
                variant={selectedCategory === "home-tech" ? "default" : "outline"}
                onClick={() => setSelectedCategory("home-tech")}
                className="font-bold uppercase tracking-wider text-xs"
              >
                Home Tech
              </Button>
              <Button 
                variant={selectedCategory === "kitchen-essentials" ? "default" : "outline"}
                onClick={() => setSelectedCategory("kitchen-essentials")}
                className="font-bold uppercase tracking-wider text-xs"
              >
                Kitchen
              </Button>
            </div>
              
            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>

        <Footer />
      </div>
    </>
  );
};

export default Shop;
