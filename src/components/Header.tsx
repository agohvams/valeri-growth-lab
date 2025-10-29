import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import valeriLogo from "@/assets/valeri-logo.png";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop All", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className="bg-primary text-primary-foreground py-3 text-center text-xs font-bold tracking-wider uppercase">
        ⚡ Free Shipping on Orders Over £50 • 50% Off Selected Items
      </div>
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center py-4">
            {/* Logo - Top Center */}
            <Link to="/" className="mb-4">
              <img src={valeriLogo} alt="VALERI" className="h-10 md:h-12" />
            </Link>
            
            <div className="flex items-center justify-between w-full">

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8 mx-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-xs font-bold uppercase tracking-wider text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Action Icons */}
              <div className="flex items-center space-x-2 ml-auto">
              <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-secondary">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary">
                <ShoppingCart className="h-5 w-5" />
              </Button>

              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" className="hover:bg-secondary">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-6 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="text-sm font-bold uppercase tracking-wider text-foreground hover:text-muted-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
