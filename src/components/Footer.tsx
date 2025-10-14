import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VALERI</h3>
            <p className="text-sm text-muted-foreground">
              Thoughtful essentials for modern living. Quality products designed to simplify your daily routines.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shop All</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Track Order</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for exclusive offers and kitchen tips.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" className="flex-1" />
              <Button>Join</Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 VALERI. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
