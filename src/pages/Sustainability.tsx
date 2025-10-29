import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Recycle, Package, Heart } from "lucide-react";

const Sustainability = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
              Sustainability
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
              Building a better future, one product at a time.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter">
                  Our Commitment
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  At VALERI, we believe that quality products and environmental responsibility go hand in hand. We're committed to minimizing our environmental impact while creating essentials that last. This means thoughtful design, responsible sourcing, and continuous improvement in everything we do.
                </p>
                <p className="text-base leading-relaxed">
                  Sustainability isn't just a buzzword for us—it's built into our DNA. From the materials we choose to the partners we work with, every decision considers its impact on our planet.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-secondary p-8">
                  <Leaf className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-black mb-3 uppercase tracking-tight">Sustainable Materials</h3>
                  <p className="text-sm">
                    We prioritize eco-friendly materials like recycled stainless steel, BPA-free plastics, and sustainably sourced components. Our goal is to use 100% recycled or renewable materials by 2025.
                  </p>
                </div>

                <div className="bg-secondary p-8">
                  <Package className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-black mb-3 uppercase tracking-tight">Minimal Packaging</h3>
                  <p className="text-sm">
                    Our packaging is 100% recyclable and uses minimal materials. We've eliminated plastic where possible and use recycled cardboard for all shipments.
                  </p>
                </div>

                <div className="bg-secondary p-8">
                  <Recycle className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-black mb-3 uppercase tracking-tight">Built To Last</h3>
                  <p className="text-sm">
                    We design products that last for years, not months. Durability is sustainability—the longer a product lasts, the less waste we create.
                  </p>
                </div>

                <div className="bg-secondary p-8">
                  <Heart className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-black mb-3 uppercase tracking-tight">Ethical Production</h3>
                  <p className="text-sm">
                    We partner only with factories that meet strict ethical and environmental standards. Fair wages, safe working conditions, and minimal environmental impact are non-negotiable.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-8 mb-16">
                <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">
                  Our 2025 Goals
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <div className="text-4xl font-black mb-2">100%</div>
                    <p>Recyclable or compostable packaging</p>
                  </div>
                  <div>
                    <div className="text-4xl font-black mb-2">50%</div>
                    <p>Reduction in carbon emissions from shipping</p>
                  </div>
                  <div>
                    <div className="text-4xl font-black mb-2">0</div>
                    <p>Single-use plastics in our supply chain</p>
                  </div>
                  <div>
                    <div className="text-4xl font-black mb-2">100%</div>
                    <p>Renewable energy in our operations</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">
                  What You Can Do
                </h2>
                <div className="space-y-4 text-sm">
                  <p>
                    <strong className="font-black uppercase tracking-wider">Choose Quality:</strong> Invest in products built to last rather than disposable alternatives.
                  </p>
                  <p>
                    <strong className="font-black uppercase tracking-wider">Recycle:</strong> All our packaging can be recycled. Please dispose of it responsibly.
                  </p>
                  <p>
                    <strong className="font-black uppercase tracking-wider">Repair Don't Replace:</strong> Contact us if something breaks. We'll help you repair it when possible.
                  </p>
                  <p>
                    <strong className="font-black uppercase tracking-wider">Spread The Word:</strong> Share your sustainable choices and inspire others to do the same.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sustainability;
