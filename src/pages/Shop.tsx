import { useState } from "react";
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Shop All Products</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Discover our complete collection of thoughtfully designed essentials
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                <Button 
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("all")}
                >
                  All Products
                </Button>
                <Button 
                  variant={selectedCategory === "drinkware" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("drinkware")}
                >
                  Drinkware
                </Button>
                <Button 
                  variant={selectedCategory === "home-tech" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("home-tech")}
                >
                  Home Tech
                </Button>
                <Button 
                  variant={selectedCategory === "kitchen-essentials" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("kitchen-essentials")}
                >
                  Kitchen Essentials
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
  );
};

export default Shop;
