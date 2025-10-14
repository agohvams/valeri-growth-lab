import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface BlogCardProps {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const BlogCard = ({ slug, image, title, excerpt, date, category }: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 animate-fade-in">
      <Link to={`/blog/${slug}`}>
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </div>
        </div>
      </Link>
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          {date}
        </div>
        <Link to={`/blog/${slug}`}>
          <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        <Link to={`/blog/${slug}`}>
          <Button variant="ghost" className="p-0 h-auto font-semibold group/btn">
            Read More
            <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
