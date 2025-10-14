import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

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
      <div className="bg-destructive text-destructive-foreground py-2.5 text-center text-sm font-bold animate-pulse">
        ⚡ LIMITED TIME: FREE UK SHIPPING ON ALL ORDERS OVER £50 + 50% OFF SELECTED ITEMS
      </div>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center py-6">
            {/* Logo - Bigger and centered */}
            <Link to="/" className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              VALERI
            </Link>

            {/* Navigation and Actions Row */}
            <div className="flex items-center justify-between w-full">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8 mx-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Action Icons */}
              <div className="flex items-center space-x-4 ml-auto">
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>

                <Sheet>
                  <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <nav className="flex flex-col space-y-4 mt-8">
                      {navLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="text-lg font-medium text-foreground hover:text-primary transition-colors"
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
