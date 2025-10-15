import { TrendingUp, Users, Target, Briefcase, DollarSign, Award, Printer } from "lucide-react";

const InvestorPitch = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-container">
      {/* Print Button - Hidden when printing */}
      <button
        onClick={handlePrint}
        className="fixed top-4 right-4 z-50 print:hidden bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2 font-semibold"
      >
        <Printer className="w-5 h-5" />
        Download PDF
      </button>
      {/* Cover Page */}
      <section className="print-page flex flex-col items-center justify-center bg-gradient-to-br from-foreground to-foreground/90">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold text-primary">VALERI</h1>
          <p className="text-2xl text-background/80">Pre-Seed Investment Opportunity</p>
          <p className="text-3xl font-bold text-primary">£200,000</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">Vision & Mission</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Vision</h3>
            <p className="text-xl leading-relaxed">
              To become the leading premium lifestyle brand that redefines everyday essentials 
              through sustainable elegance and functional beauty.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Mission</h3>
            <p className="text-xl leading-relaxed">
              VALERI creates thoughtfully designed products that blend sustainability, quality, 
              and aesthetic appeal — transforming ordinary moments into extraordinary experiences.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="font-semibold text-lg">Premium Quality</p>
            </div>
            <div className="text-center">
              <Target className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="font-semibold text-lg">Design Excellence</p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="font-semibold text-lg">Sustainability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">Market Opportunity</h2>
        <div className="space-y-6">
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Global Drinkware Market</h3>
            <p className="text-5xl font-bold text-primary mb-2">£6B+</p>
            <p className="text-lg">Growing at 8.2% CAGR through 2028</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-secondary rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Sustainable Products</h4>
              <p className="text-3xl font-bold text-primary mb-2">73%</p>
              <p>of consumers willing to pay more for sustainable goods</p>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Premium Segment</h4>
              <p className="text-3xl font-bold text-primary mb-2">35%</p>
              <p>market share growth in luxury everyday essentials</p>
            </div>
          </div>
          <div className="p-6 border-2 border-primary rounded-lg">
            <h4 className="text-xl font-semibold mb-3 text-primary">VALERI's Position</h4>
            <p className="text-lg">
              We bridge the gap between affordable basics and luxury brands, offering 
              premium quality at accessible prices for eco-conscious professionals aged 20-45.
            </p>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">Product Range</h2>
        <div className="space-y-6">
          <div className="p-6 bg-primary text-white rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Current: VALERI 40oz Tumbler</h3>
            <p className="text-lg mb-4">Premium leakproof travel tumbler with straw & handle</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm opacity-80">Price</p>
                <p className="text-2xl font-bold">£34.99</p>
              </div>
              <div>
                <p className="text-sm opacity-80">Margin</p>
                <p className="text-2xl font-bold">65%</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Roadmap (12-18 Months)</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <p className="text-lg">Insulated Flask & Water Bottle Collection</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <p className="text-lg">Eco-Friendly Straw & Accessory Sets</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <p className="text-lg">Home & Gym Tech Essentials</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <p className="text-lg">Seasonal Limited Edition Collections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">Traction & Validation</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-secondary rounded-lg text-center">
            <div className="text-5xl font-bold text-primary mb-3">✓</div>
            <h3 className="text-xl font-semibold mb-2">ISO Certified</h3>
            <p>Full compliance and quality assurance</p>
          </div>
          <div className="p-6 bg-secondary rounded-lg text-center">
            <div className="text-5xl font-bold text-primary mb-3">200+</div>
            <h3 className="text-xl font-semibold mb-2">Units Produced</h3>
            <p>Proven manufacturing capability</p>
          </div>
          <div className="p-6 bg-secondary rounded-lg text-center">
            <div className="text-5xl font-bold text-primary mb-3">2</div>
            <h3 className="text-xl font-semibold mb-2">Sales Channels</h3>
            <p>Amazon UK & Shopify store live</p>
          </div>
          <div className="p-6 bg-secondary rounded-lg text-center">
            <div className="text-5xl font-bold text-primary mb-3">5★</div>
            <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
            <p>Strong early customer validation</p>
          </div>
        </div>
        <div className="mt-6 p-6 border-2 border-primary rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-primary">Business Model</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-2">Revenue Streams</p>
              <ul className="space-y-1 text-sm">
                <li>• Direct-to-Consumer (Shopify)</li>
                <li>• Amazon Marketplace</li>
                <li>• Retail Partnerships</li>
                <li>• Corporate Gifting</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Customer Profile</p>
              <ul className="space-y-1 text-sm">
                <li>• Age: 20-45 years</li>
                <li>• Eco-conscious professionals</li>
                <li>• Wellness enthusiasts</li>
                <li>• Premium quality seekers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Snapshot */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">Financial Snapshot</h2>
        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg border-2 border-primary">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-4 text-left text-lg">Metric</th>
                  <th className="p-4 text-right text-lg">Year 1 (2025)</th>
                  <th className="p-4 text-right text-lg">Year 2 (2026)</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                <tr className="border-b">
                  <td className="p-4 font-semibold">Revenue</td>
                  <td className="p-4 text-right">£350,000</td>
                  <td className="p-4 text-right font-bold text-primary">£850,000</td>
                </tr>
                <tr className="border-b bg-secondary/50">
                  <td className="p-4 font-semibold">Gross Margin</td>
                  <td className="p-4 text-right">65%</td>
                  <td className="p-4 text-right font-bold text-primary">70%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Operating Expenses</td>
                  <td className="p-4 text-right">£200,000</td>
                  <td className="p-4 text-right">£400,000</td>
                </tr>
                <tr className="border-b bg-secondary/50">
                  <td className="p-4 font-semibold">EBITDA</td>
                  <td className="p-4 text-right">Break-even</td>
                  <td className="p-4 text-right font-bold text-primary">£120,000</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Units Sold</td>
                  <td className="p-4 text-right">4,000</td>
                  <td className="p-4 text-right font-bold text-primary">9,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-secondary rounded text-sm">
            <p>Forecast based on £34.99 average RRP and 60% contribution margin after COGS and platform fees</p>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">Use of Funds - £200,000</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-32 text-right">
              <p className="text-3xl font-bold text-primary">30%</p>
              <p className="text-sm">£60K</p>
            </div>
            <div className="flex-1 h-20 bg-primary rounded flex items-center px-6 text-white">
              <p className="text-xl font-semibold">Marketing & Influencers</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-right">
              <p className="text-3xl font-bold text-primary">25%</p>
              <p className="text-sm">£50K</p>
            </div>
            <div className="flex-1 h-20 bg-primary/80 rounded flex items-center px-6 text-white">
              <p className="text-xl font-semibold">Inventory Expansion</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-right">
              <p className="text-3xl font-bold text-primary">20%</p>
              <p className="text-sm">£40K</p>
            </div>
            <div className="flex-1 h-20 bg-primary/60 rounded flex items-center px-6 text-white">
              <p className="text-xl font-semibold">Hiring & Operations</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-right">
              <p className="text-3xl font-bold text-primary">7.5%</p>
              <p className="text-sm">£15K</p>
            </div>
            <div className="flex-1 h-20 bg-primary/40 rounded flex items-center px-6 text-foreground">
              <p className="text-xl font-semibold">Product Development</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-right">
              <p className="text-3xl font-bold text-primary">17.5%</p>
              <p className="text-sm">£35K</p>
            </div>
            <div className="flex-1 h-20 bg-primary/20 rounded flex items-center px-6 text-foreground">
              <p className="text-xl font-semibold">Working Capital</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Projection */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">ROI Projection</h2>
        <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-primary mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-primary">How £200K Accelerates Growth</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg mb-1">Marketing & Influencers (£60K)</p>
                <p className="text-base">Generates ~£300K revenue from digital campaigns and brand ambassadors</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Briefcase className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg mb-1">Inventory Expansion (£50K)</p>
                <p className="text-base">Enables 1,500-2,000 new units, supporting revenue scale-up</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg mb-1">Hiring & Operations (£40K)</p>
                <p className="text-base">Strengthens customer acquisition, retention, and fulfilment efficiency</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg mb-1">Product Development (£15K)</p>
                <p className="text-base">Adds 1-2 new SKUs to increase average order value</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-secondary rounded-lg">
            <DollarSign className="w-12 h-12 text-primary mb-3" />
            <p className="text-3xl font-bold text-primary mb-2">2.4x</p>
            <p className="text-lg font-semibold">Revenue Growth in 12 Months</p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <Users className="w-12 h-12 text-primary mb-3" />
            <p className="text-3xl font-bold text-primary mb-2">6,000+</p>
            <p className="text-lg font-semibold">Active Customers</p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <TrendingUp className="w-12 h-12 text-primary mb-3" />
            <p className="text-3xl font-bold text-primary mb-2">Year 2</p>
            <p className="text-lg font-semibold">Positive EBITDA</p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <Award className="w-12 h-12 text-primary mb-3" />
            <p className="text-3xl font-bold text-primary mb-2">Retail</p>
            <p className="text-lg font-semibold">Strategic Partnerships Ready</p>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">Strategic Partnerships</h2>
        <div className="space-y-6">
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Retail Opportunities</h3>
            <p className="text-lg mb-4">
              Approaching premium UK retailers with high sell-through potential:
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p>John Lewis</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p>Selfridges</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p>Oliver Bonas</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p>Not On The High Street</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Wholesale & Corporate</h3>
            <p className="text-lg">
              Hotel, spa, and corporate gifting channels. Branded VALERI tumblers for 
              companies and events with high margins and repeat business potential.
            </p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Collaborations</h3>
            <p className="text-lg mb-3">
              Influencer and lifestyle partnerships with wellness and sustainability advocates:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p>Co-branded capsule collections (seasonal colors, eco-gift sets)</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p>Ambassador programs with lifestyle influencers</p>
              </li>
            </ul>
          </div>
          <div className="p-6 border-2 border-primary rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Distribution Goals</h3>
            <div className="space-y-3">
              <p className="text-lg"><span className="font-semibold">6-12 months:</span> UK market dominance</p>
              <p className="text-lg"><span className="font-semibold">12-18 months:</span> EU expansion</p>
              <p className="text-lg"><span className="font-semibold">18-24 months:</span> US market entry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="print-page">
        <h2 className="text-4xl font-bold text-primary mb-8">Team</h2>
        <div className="space-y-6">
          <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary rounded-lg border-2 border-primary">
            <h3 className="text-3xl font-bold mb-2">Ago M. Hvamstad</h3>
            <p className="text-xl text-primary font-semibold mb-6">Founder & CEO</p>
            <p className="text-lg leading-relaxed mb-4">
              Visionary entrepreneur with a passion for sustainable luxury. Led the creation 
              of VALERI from concept to market, securing ISO certification and establishing 
              sales channels across multiple platforms.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-background rounded">
                <p className="font-semibold mb-1">Expertise</p>
                <p className="text-sm">Brand Building, Product Design, E-commerce</p>
              </div>
              <div className="p-4 bg-background rounded">
                <p className="font-semibold mb-1">Track Record</p>
                <p className="text-sm">ISO Certification, Multi-channel Launch</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Future Key Hires</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <p className="text-lg">Marketing Manager (Digital & Social)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <p className="text-lg">Operations & Fulfilment Specialist</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <p className="text-lg">Product Development Lead</p>
              </div>
            </div>
          </div>
          <div className="p-6 border-2 border-primary rounded-lg">
            <h3 className="text-2xl font-semibold mb-3 text-primary">Exit Strategy</h3>
            <p className="text-lg">
              Scale through strategic acquisition similar to successful brands like Corkcicle 
              and HydroFlask, or secure lifestyle fund investment for continued growth and 
              international expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Page */}
      <section className="print-page flex flex-col items-center justify-center bg-gradient-to-br from-foreground to-foreground/90">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-primary mb-12">VALERI</h1>
          <div className="space-y-4 text-xl text-background/90">
            <p className="font-semibold text-2xl text-background">Ago M. Hvamstad — Founder & CEO</p>
            <p>ago@jagcacap.com</p>
            <p>www.valerigoods.com</p>
          </div>
          <div className="pt-12">
            <p className="text-2xl text-primary">Everyday Essentials. Reimagined.</p>
          </div>
          <div className="pt-8 text-sm text-background/70">
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

export default InvestorPitch;
