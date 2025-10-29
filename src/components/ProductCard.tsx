import { Link } from "react-router-dom";
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
  material?: string;
  salePrice?: string;
  amazonUrl?: string;
}

const ProductCard = ({ id, image, title, price, rating, reviews, category, description, material, salePrice, amazonUrl }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden border-0 hover:shadow-xl transition-all duration-300 animate-fade-in bg-card cursor-pointer">
        <div className="relative overflow-hidden aspect-square bg-secondary">
          <img
            src={image}
            alt={`${title} - ${category} - Premium quality ${material || 'product'}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        {salePrice && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 text-xs font-black uppercase tracking-wider">
            -{Math.round((1 - parseFloat(salePrice.replace('£', '')) / parseFloat(price.replace('£', ''))) * 100)}%
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <h3 className="font-bold text-sm mb-3 line-clamp-2 uppercase tracking-tight">{title}</h3>
        <div className="flex items-center gap-3">
          {salePrice ? (
            <>
              <p className="text-lg font-black text-foreground">{salePrice}</p>
              <p className="text-xs text-muted-foreground line-through font-medium">{price}</p>
            </>
          ) : (
            <p className="text-lg font-black text-foreground">{price}</p>
          )}
        </div>
        <Button className="w-full mt-4 font-bold uppercase tracking-wider text-xs" size="lg">
          View Details
        </Button>
      </CardContent>
    </Card>
    </Link>
  );
};

export default ProductCard;
