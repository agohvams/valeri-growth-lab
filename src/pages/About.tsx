import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About VALERI</h1>
            <p className="text-xl text-muted-foreground mb-12">
              We believe that everyday essentials should be both beautiful and functional.
            </p>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                VALERI began with a simple mission: to create home and kitchen products that make daily life easier without compromising on style or sustainability. We noticed a gap in the market for products that were both thoughtfully designed and built to last.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we work with skilled craftspeople and sustainable suppliers to bring you a curated collection of essentials that we ourselves use and love. Every product in our collection is chosen for its quality, functionality, and timeless design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  We rigorously test every product to ensure it meets our high standards for durability and performance.
                </p>
              </div>
              <div className="text-center p-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Thoughtful Design</h3>
                <p className="text-muted-foreground">
                  Form and function come together in products that are as beautiful as they are practical.
                </p>
              </div>
              <div className="text-center p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Customer Focused</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. We stand behind every product we sell with excellent customer service.
                </p>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Our Commitment to Sustainability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe in creating products that are good for you and good for the planet. That's why we:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use sustainable materials wherever possible</li>
                <li>Partner with suppliers who share our environmental values</li>
                <li>Design products built to last, reducing waste</li>
                <li>Use minimal, recyclable packaging</li>
                <li>Support reforestation initiatives through our partnership programs</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
