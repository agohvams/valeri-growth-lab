import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider">HELP</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Delivery Information</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Returns Policy</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Make A Return</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Orders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider">MY ACCOUNT</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Login</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Register</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider">PAGES</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-xs text-muted-foreground hover:text-primary transition-colors">Shop All</Link></li>
              <li><Link to="/blog" className="text-xs text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-xs text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Student Discount</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider">MORE ABOUT VALERI</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-xs text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Our Story</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider">EMAIL SIGN UP</h4>
            <p className="text-xs text-muted-foreground mb-4">
              Get exclusive offers and updates
            </p>
            <div className="flex flex-col space-y-2">
              <Input placeholder="Your email" className="text-xs" />
              <Button size="sm" className="text-xs font-bold uppercase tracking-wider">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 VALERI. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/people/Valeri-Goods/pfbid02agKjh3STTKLxwTgrwpFeT5qrSJdi36kWtzNvFQSRc8ruKaA4ZJgutSdNsvq6rVHul/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://www.instagram.com/1valerigood1/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Visit our Instagram page"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
