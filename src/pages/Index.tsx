import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Shield, Truck, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-image.jpg";
import tumblerPink from "@/assets/tumbler-pink.png";
import securityCamera from "@/assets/security-camera.png";
import vegetableChopper from "@/assets/vegetable-chopper.png";

const Index = () => {
  const featuredProducts = products;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Gymshark Style */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter uppercase">
              Be Limitless
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-medium">
              Premium essentials designed for those who demand more from life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg" variant="secondary" className="text-base px-10 py-6 font-bold uppercase tracking-wider">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </section>


        {/* Featured Products */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">New In</h2>
              <Link to="/shop" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:opacity-70 transition-opacity">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
                HOME ESSENTIALS & EVERYDAY MUST-HAVES
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Home essentials designed to help you become your personal best. Because when it comes to living at your max, there should be no obstacles – least of all your everyday tools. Functional and beautiful, we create products you'll use every day. Since our founding, we've designed and created the home essentials we want to use, because modern living and its people are what we know best.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter">In Action</h2>
              <p className="text-lg text-muted-foreground">See what you're missing</p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-video overflow-hidden bg-primary">
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

        {/* Products Built Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter">
                ESSENTIALS BUILT FOR REAL LIFE
              </h2>
              <p className="text-base mb-6 leading-relaxed">
                Our legacy was built in the kitchen and home. VALERI was founded with a love for quality essentials and that passion continues into all our products today. You'll find the latest innovation in drinkware, kitchen tools and home tech to help you perform at your best and live in style.
              </p>
              <p className="text-base mb-6 leading-relaxed">
                Our collection features temperature-controlled tumblers, smart home devices, and innovative kitchen gadgets. Whilst our product line is designed for a range of lifestyles and features sophisticated engineering, clever design and durable, long-lasting materials.
              </p>
              <p className="text-base leading-relaxed">
                An obsession with quality is what started this brand, and we haven't forgotten our roots. Our products feature timeless styles, with modern functionality and innovative features to help you elevate your everyday.
              </p>
            </div>
          </div>
        </section>

        {/* Lifestyle Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter">
                MORE THAN YOUR BEST HOME ESSENTIALS
              </h2>
              <p className="text-base mb-6 leading-relaxed">
                The VALERI community is devoted to unlocking potential through quality essentials and the things we do today to prepare for tomorrow. It's every moment, every routine and milestone along the way. Game-changing drinkware, innovative home tech and everyday essentials. It's not just in the designs, it's in the people who use them.
              </p>
              <p className="text-base leading-relaxed">
                We create the tools that help everyone become their personal best – no matter the goal. Our range is designed to give you the support you need to thrive, whether that's in the kitchen, at home or on the go.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Reviews</h2>
              <p className="text-lg text-muted-foreground">What our community says</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah Thompson",
                  review: "This tumbler is absolutely brilliant! It keeps my coffee hot for the entire morning and my iced drinks cold all afternoon. The leak-proof design means I can toss it in my bag without worry.",
                  rating: 5,
                  product: "40oz Travel Tumbler",
                  verified: true
                },
                {
                  name: "Alex Turner",
                  review: "These LED strips are incredible! Easy to install, vibrant colors, and the remote control works perfectly. The music sync feature is a game-changer for parties.",
                  rating: 5,
                  product: "RGB LED Strip Lights",
                  verified: true
                },
                {
                  name: "Rachel Green",
                  review: "This little blender is powerful! I use it every morning for my protein shakes and it blends everything smoothly. The USB charging is convenient and it's so easy to clean.",
                  rating: 5,
                  product: "Portable Blender",
                  verified: true
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-secondary p-8 animate-fade-in border-0" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-foreground fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 font-medium leading-relaxed">&quot;{testimonial.review}&quot;</p>
                  <div>
                    <p className="font-black text-sm uppercase tracking-wider mb-1">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.product}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-16 border-t">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto mb-3 text-foreground" />
                <h3 className="font-bold text-xs uppercase tracking-wider mb-1">Free Shipping</h3>
                <p className="text-xs text-muted-foreground">Orders £50+</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-3 text-foreground" />
                <h3 className="font-bold text-xs uppercase tracking-wider mb-1">Quality First</h3>
                <p className="text-xs text-muted-foreground">Built to Last</p>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 mx-auto mb-3 text-foreground" />
                <h3 className="font-bold text-xs uppercase tracking-wider mb-1">4.8★ Rated</h3>
                <p className="text-xs text-muted-foreground">500+ Reviews</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-3 text-foreground" />
                <h3 className="font-bold text-xs uppercase tracking-wider mb-1">10K+ Sold</h3>
                <p className="text-xs text-muted-foreground">This Month</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Join The Movement</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto font-medium">
              Get exclusive early access to new drops and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 text-foreground bg-background border-0 font-medium"
              />
              <Button size="lg" variant="secondary" className="px-8 font-bold uppercase tracking-wider">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
