import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  salePrice?: string;
}

const ProductCard = ({ id, image, title, price, rating, reviews, category, description, salePrice }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          size="icon"
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-current" : ""}`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">({reviews})</span>
        </div>
        <div className="flex items-center gap-2">
          {salePrice ? (
            <>
              <p className="text-2xl font-bold text-primary">{salePrice}</p>
              <p className="text-lg text-muted-foreground line-through">{price}</p>
            </>
          ) : (
            <p className="text-2xl font-bold text-primary">{price}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
