import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Shield, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-image.jpg";
import tumblerPink from "@/assets/tumbler-pink.png";
import securityCamera from "@/assets/security-camera.png";
import vegetableChopper from "@/assets/vegetable-chopper.png";

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Thoughtful Essentials<br />
              <span className="text-primary">for Modern Living</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
              Designed to simplify life with durable, beautiful products for your home and kitchen. Now available on Amazon UK with Prime delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg" className="text-lg px-8">
                  Shop All Products
                </Button>
              </Link>
              <Link to="/blog">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-background/10 backdrop-blur">
                  Read Our Blog
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex items-center justify-center space-x-4">
                <Truck className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Free UK Shipping</h3>
                  <p className="text-sm text-muted-foreground">Orders over £50</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Quality Guarantee</h3>
                  <p className="text-sm text-muted-foreground">Built to last</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Star className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">4.8★ Rating</h3>
                  <p className="text-sm text-muted-foreground">500+ reviews</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">10,000+ Sold</h3>
                  <p className="text-sm text-muted-foreground">This month</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">See VALERI in Action</h2>
              <p className="text-xl text-muted-foreground">Discover how our products elevate everyday living</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster={heroImage}
                >
                  <source src="/videos/valeri-promo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Best Sellers</h2>
              <p className="text-xl text-muted-foreground">Our most loved products - available now on Amazon</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            <div className="text-center">
              <Link to="/shop">
                <Button size="lg" variant="outline">View All Products</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
              <p className="text-xl text-muted-foreground">Find exactly what you need</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/shop?category=drinkware" className="group">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <img 
                    src={tumblerPink} 
                    alt="Drinkware Collection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-primary-foreground">Drinkware</h3>
                  </div>
                </div>
              </Link>
              <Link to="/shop?category=home-tech" className="group">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <img 
                    src={securityCamera} 
                    alt="Home Tech Collection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-primary-foreground">Home Tech</h3>
                  </div>
                </div>
              </Link>
              <Link to="/shop?category=kitchen-essentials" className="group">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <img 
                    src={vegetableChopper} 
                    alt="Kitchen Essentials Collection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-primary-foreground">Kitchen Essentials</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-xl text-muted-foreground">Real reviews from real people</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sophie Williams",
                  review: "The quality is outstanding! My kitchen feels so much more organized and stylish now.",
                  rating: 5
                },
                {
                  name: "David Chen",
                  review: "Best water bottle I've ever owned. Keeps drinks cold all day, and the design is beautiful.",
                  rating: 5
                },
                {
                  name: "Lucy Anderson",
                  review: "Fast shipping and excellent customer service. The knife set is absolutely worth the investment.",
                  rating: 5
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-card p-6 rounded-lg border animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.review}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Join 10,000+ Happy Customers</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get 10% off your first order when you sign up for our newsletter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button size="lg" variant="secondary">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
