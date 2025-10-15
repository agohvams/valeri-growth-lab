import { Heart, Target, TrendingUp, Users } from "lucide-react";

const KickstarterPitch = () => {
  return (
    <div className="print-container">
      {/* Cover Page */}
      <section className="print-page flex flex-col items-center justify-center bg-gradient-to-br from-background to-secondary">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold text-primary">VALERI</h1>
          <p className="text-2xl text-muted-foreground">Everyday Essentials. Reimagined.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">Our Story</h2>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            VALERI was born from a simple belief: everyday essentials should be beautiful, 
            functional, and sustainable. We're redefining what it means to live well through 
            thoughtfully designed products that blend elegance with purpose.
          </p>
          <p>
            From our premium 40oz tumblers to innovative home solutions, every VALERI product 
            is crafted with attention to detail and a commitment to quality that lasts.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">The Problem</h2>
        <div className="grid gap-6">
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Poor Quality</h3>
            <p className="text-lg">Most drinkware on the market is cheaply made, leaks easily, and doesn't last.</p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Toxic Materials</h3>
            <p className="text-lg">Many products contain harmful chemicals and aren't truly sustainable.</p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Boring Design</h3>
            <p className="text-lg">Functional products shouldn't sacrifice beauty and style.</p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">The VALERI Solution</h2>
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Heart className="w-12 h-12 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-lg">ISO certified, BPA-free, and built to last a lifetime.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Target className="w-12 h-12 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Beautiful Design</h3>
              <p className="text-lg">Elegant aesthetics that complement any lifestyle.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Users className="w-12 h-12 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Sustainable Choice</h3>
              <p className="text-lg">Eco-friendly materials and ethical manufacturing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress So Far */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">Our Progress</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center p-6 bg-secondary rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">✓</div>
            <p className="text-xl font-semibold">ISO Certified</p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">200+</div>
            <p className="text-xl font-semibold">Units Produced</p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">2</div>
            <p className="text-xl font-semibold">Platforms Live</p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-lg">
            <div className="text-5xl font-bold text-primary mb-2">5★</div>
            <p className="text-xl font-semibold">Customer Reviews</p>
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">Backer Rewards</h2>
        <div className="space-y-4">
          <div className="p-6 border-2 border-primary rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-2">£25 - Thank You</h3>
            <p className="text-lg">Digital thank you card + exclusive updates</p>
          </div>
          <div className="p-6 border-2 border-primary rounded-lg bg-primary/5">
            <h3 className="text-2xl font-bold text-primary mb-2">£45 - Early Bird</h3>
            <p className="text-lg">1 VALERI Premium Tumbler (Limited quantity)</p>
          </div>
          <div className="p-6 border-2 border-primary rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-2">£80 - Duo Pack</h3>
            <p className="text-lg">2 VALERI Tumblers in your choice of colors</p>
          </div>
          <div className="p-6 border-2 border-primary rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-2">£120 - Founder's Box</h3>
            <p className="text-lg">Gift box with exclusive items + founder recognition</p>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">How We'll Use £50,000</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-32 text-right font-bold text-2xl text-primary">40%</div>
            <div className="flex-1 h-16 bg-primary rounded flex items-center px-6 text-white text-xl font-semibold">
              Marketing & Ads
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-right font-bold text-2xl text-primary">30%</div>
            <div className="flex-1 h-16 bg-primary/80 rounded flex items-center px-6 text-white text-xl font-semibold">
              Inventory & Fulfilment
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-right font-bold text-2xl text-primary">20%</div>
            <div className="flex-1 h-16 bg-primary/60 rounded flex items-center px-6 text-white text-xl font-semibold">
              Team & Content
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-right font-bold text-2xl text-primary">10%</div>
            <div className="flex-1 h-16 bg-primary/40 rounded flex items-center px-6 text-foreground text-xl font-semibold">
              Platform & Fees
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 text-lg">
          <div className="p-4 bg-secondary rounded">
            <p className="font-semibold mb-2">Marketing</p>
            <p>Social media, influencers, PR campaigns</p>
          </div>
          <div className="p-4 bg-secondary rounded">
            <p className="font-semibold mb-2">Inventory</p>
            <p>Restocking 1,000-2,000 units + packaging</p>
          </div>
          <div className="p-4 bg-secondary rounded">
            <p className="font-semibold mb-2">Team</p>
            <p>Freelance support, video production</p>
          </div>
          <div className="p-4 bg-secondary rounded">
            <p className="font-semibold mb-2">Logistics</p>
            <p>Kickstarter fees, shipping, contingency</p>
          </div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="print-page flex flex-col items-center justify-center bg-gradient-to-br from-background to-secondary text-center">
        <div className="space-y-8 max-w-3xl">
          <h2 className="text-5xl font-bold text-primary">Join the VALERI Movement</h2>
          <p className="text-2xl leading-relaxed">
            Together, we're redefining what it means to live beautifully — through essentials 
            that blend design, function, and sustainability.
          </p>
          <p className="text-2xl font-semibold">
            Be part of our story. Back the campaign. Share the vision.
          </p>
          <div className="pt-8">
            <p className="text-3xl font-bold text-primary">Everyday Essentials. Reimagined.</p>
          </div>
        </div>
      </section>

      {/* Contact Page */}
      <section className="print-page flex flex-col items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-primary mb-12">VALERI</h1>
          <div className="space-y-4 text-xl">
            <p className="font-semibold">Ago M. Hvamstad — Founder & CEO</p>
            <p>ago@jagcacap.com</p>
            <p>www.valerigoods.com</p>
          </div>
          <div className="pt-12">
            <p className="text-2xl text-muted-foreground">Everyday Essentials. Reimagined.</p>
          </div>
          <div className="pt-8 text-sm text-muted-foreground">
            © 2025 Valeri Goods Ltd. All Rights Reserved.
          </div>
        </div>
      </section>

      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
        }

        .print-container {
          width: 100%;
        }

        .print-page {
          width: 210mm;
          height: 297mm;
          padding: 20mm;
          page-break-after: always;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .print-page:last-child {
          page-break-after: auto;
        }

        @media screen {
          .print-container {
            background: hsl(var(--muted));
            padding: 2rem;
          }
          
          .print-page {
            margin: 0 auto 2rem;
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
        }
      `}</style>
    </div>
  );
};

export default KickstarterPitch;
