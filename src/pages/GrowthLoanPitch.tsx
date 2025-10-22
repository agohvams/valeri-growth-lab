const GrowthLoanPitch = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
          
          .page {
            page-break-after: always;
            page-break-inside: avoid;
            width: 210mm;
            height: 297mm;
            padding: 20mm;
            box-sizing: border-box;
          }
          
          .no-print {
            display: none !important;
          }
          
          .print-text-black {
            color: #000 !important;
          }
        }
        
        @media screen {
          .page {
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            margin: 20px auto;
            padding: 40px;
            max-width: 210mm;
            min-height: 297mm;
          }
        }
      `}</style>

      <div className="min-h-screen bg-background">
        <button
          onClick={handlePrint}
          className="no-print fixed top-4 right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors z-50 shadow-lg"
        >
          Download PDF
        </button>

        {/* Cover Page */}
        <section className="page flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold mb-6 print-text-black">VALERI</h1>
          <h2 className="text-3xl font-semibold mb-4 print-text-black">Growth Loan Application</h2>
          <div className="w-32 h-1 bg-primary mb-8"></div>
          <p className="text-xl mb-8 print-text-black">Scaling a Proven E-Commerce Business</p>
          <p className="text-lg print-text-black">Marketing Investment for Accelerated Growth</p>
        </section>

        {/* Executive Summary */}
        <section className="page">
          <h2 className="text-3xl font-bold mb-6 print-text-black">Executive Summary</h2>
          <div className="space-y-4">
            <p className="text-lg print-text-black">
              VALERI is an established e-commerce business specializing in premium home essentials and drinkware, 
              with proven product-market fit and multi-channel distribution.
            </p>
            
            <div className="bg-muted p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold mb-4 print-text-black">Current Status</h3>
              <ul className="space-y-2 print-text-black">
                <li>✓ 20 units sold on Amazon (validated demand)</li>
                <li>✓ 200 units in stock (ready to scale)</li>
                <li>✓ Listed on Amazon, Etsy, and Shopify</li>
                <li>✓ Quality products with positive customer feedback</li>
                <li>✓ Established multi-channel presence</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3 print-text-black">Loan Purpose</h3>
            <p className="print-text-black">
              This growth loan will fund a comprehensive marketing campaign to drive sales velocity, 
              establish brand presence, and prepare for retail expansion.
            </p>
          </div>
        </section>

        {/* Business Overview */}
        <section className="page">
          <h2 className="text-3xl font-bold mb-6 print-text-black">Business Overview</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 print-text-black">Product Line</h3>
              <p className="print-text-black mb-4">
                VALERI offers thoughtfully designed home essentials focusing on quality, functionality, and sustainability:
              </p>
              <ul className="list-disc list-inside space-y-2 print-text-black ml-4">
                <li><strong>Signature Valeri Tumbler</strong> - 40oz insulated drinkware with premium features</li>
                <li><strong>Kitchen Essentials</strong> - Innovative tools and gadgets</li>
                <li><strong>Home Tech</strong> - Smart home solutions</li>
                <li><strong>Eco-Friendly Products</strong> - Sustainable alternatives</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 print-text-black">Current Distribution Channels</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="border p-4 rounded">
                  <h4 className="font-semibold mb-2 print-text-black">Amazon</h4>
                  <p className="text-sm print-text-black">Primary sales channel with 20 units sold</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-semibold mb-2 print-text-black">Shopify Store</h4>
                  <p className="text-sm print-text-black">Direct-to-consumer platform</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-semibold mb-2 print-text-black">Etsy</h4>
                  <p className="text-sm print-text-black">Expanding reach to craft/design market</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 print-text-black">Competitive Advantages</h3>
              <ul className="list-disc list-inside space-y-2 print-text-black ml-4">
                <li>Premium quality at competitive prices</li>
                <li>Multi-channel distribution strategy</li>
                <li>Stock ready for immediate fulfillment</li>
                <li>Proven sales on major platform (Amazon)</li>
                <li>Strong product design and branding</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Traction & Validation */}
        <section className="page">
          <h2 className="text-3xl font-bold mb-6 print-text-black">Traction & Validation</h2>
          
          <div className="space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 print-text-black">Proven Market Demand</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">20</p>
                  <p className="print-text-black">Units sold on Amazon</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">200</p>
                  <p className="print-text-black">Units in stock</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">3</p>
                  <p className="print-text-black">Active sales channels</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-2">100%</p>
                  <p className="print-text-black">Product-market fit validated</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 print-text-black">Current Challenge</h3>
              <p className="print-text-black mb-4">
                While we have proven product demand and sufficient inventory, our growth is currently 
                limited by lack of marketing budget. Sales are organic and word-of-mouth, but we need 
                strategic marketing investment to:
              </p>
              <ul className="list-disc list-inside space-y-2 print-text-black ml-4">
                <li>Increase product visibility across all platforms</li>
                <li>Drive targeted traffic to our sales channels</li>
                <li>Build brand awareness and customer base</li>
                <li>Optimize conversion rates through data-driven campaigns</li>
                <li>Prepare for retail expansion with strong online presence</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 print-text-black">Growth Potential</h3>
              <p className="print-text-black">
                With 200 units in stock and proven sales capability, strategic marketing investment 
                can unlock significant revenue growth. The home essentials and drinkware market continues 
                to expand, with consumers actively seeking quality, sustainable alternatives.
              </p>
            </div>
          </div>
        </section>

        {/* Use of Funds */}
        <section className="page">
          <h2 className="text-3xl font-bold mb-6 print-text-black">Use of Funds</h2>
          
          <div className="space-y-6">
            <p className="text-lg print-text-black">
              The growth loan will be strategically allocated across high-impact marketing initiatives 
              to drive sales and scale the business:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold mb-2 print-text-black">1. SEO & Content Marketing (30%)</h3>
                <ul className="list-disc list-inside space-y-1 print-text-black ml-4 text-sm">
                  <li>Professional SEO optimization across all platforms</li>
                  <li>Content creation (blog posts, product guides, videos)</li>
                  <li>Keyword research and implementation</li>
                  <li>Backlink building and domain authority growth</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold mb-2 print-text-black">2. Digital Advertising (40%)</h3>
                <ul className="list-disc list-inside space-y-1 print-text-black ml-4 text-sm">
                  <li>Amazon PPC campaigns for product visibility</li>
                  <li>Google Ads for direct-to-consumer traffic</li>
                  <li>Social media advertising (Instagram, Facebook, TikTok)</li>
                  <li>Retargeting campaigns to convert interested visitors</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold mb-2 print-text-black">3. Social Media Marketing (15%)</h3>
                <ul className="list-disc list-inside space-y-1 print-text-black ml-4 text-sm">
                  <li>Influencer partnerships and collaborations</li>
                  <li>User-generated content campaigns</li>
                  <li>Community building and engagement</li>
                  <li>Brand storytelling and product showcases</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold mb-2 print-text-black">4. Email Marketing & CRM (10%)</h3>
                <ul className="list-disc list-inside space-y-1 print-text-black ml-4 text-sm">
                  <li>Email marketing platform and automation</li>
                  <li>Customer segmentation and targeting</li>
                  <li>Newsletter campaigns and promotions</li>
                  <li>Customer retention programs</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold mb-2 print-text-black">5. Analytics & Optimization (5%)</h3>
                <ul className="list-disc list-inside space-y-1 print-text-black ml-4 text-sm">
                  <li>Marketing analytics tools and tracking</li>
                  <li>A/B testing and conversion optimization</li>
                  <li>Data analysis and performance reporting</li>
                  <li>Campaign optimization and refinement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Strategy */}
        <section className="page">
          <h2 className="text-3xl font-bold mb-6 print-text-black">Marketing Strategy & Timeline</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 print-text-black">Phase 1: Foundation (Month 1-2)</h3>
              <ul className="list-disc list-inside space-y-2 print-text-black ml-4">
                <li>Complete SEO audit and optimization across all platforms</li>
                <li>Set up tracking and analytics infrastructure</li>
                <li>Launch initial PPC campaigns on Amazon and Google</li>
                <li>Begin content creation and social media presence building</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 print-text-black">Phase 2: Acceleration (Month 3-4)</h3>
              <ul className="list-disc list-inside space-y-2 print-text-black ml-4">
                <li>Scale successful ad campaigns based on data</li>
                <li>Launch influencer partnerships</li>
                <li>Implement email marketing automation</li>
                <li>Expand social media advertising</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 print-text-black">Phase 3: Optimization (Month 5-6)</h3>
              <ul className="list-disc list-inside space-y-2 print-text-black ml-4">
                <li>Refine campaigns based on performance data</li>
                <li>Launch seasonal promotions</li>
                <li>Build customer retention programs</li>
                <li>Prepare for retail expansion with strong brand presence</li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold mb-3 print-text-black">Key Performance Indicators</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold print-text-black">Sales Volume</p>
                  <p className="text-sm print-text-black">Target: 150+ units in 6 months</p>
                </div>
                <div>
                  <p className="font-semibold print-text-black">Customer Acquisition</p>
                  <p className="text-sm print-text-black">Target: 200+ new customers</p>
                </div>
                <div>
                  <p className="font-semibold print-text-black">Website Traffic</p>
                  <p className="text-sm print-text-black">Target: 5,000+ monthly visitors</p>
                </div>
                <div>
                  <p className="font-semibold print-text-black">ROAS</p>
                  <p className="text-sm print-text-black">Target: 3:1 return on ad spend</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Projections */}
        <section className="page">
          <h2 className="text-3xl font-bold mb-6 print-text-black">Financial Projections</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 print-text-black">Revenue Projections (6 Months)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border p-2 text-left print-text-black">Month</th>
                      <th className="border p-2 text-right print-text-black">Units Sold</th>
                      <th className="border p-2 text-right print-text-black">Revenue</th>
                      <th className="border p-2 text-right print-text-black">Marketing Spend</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2 print-text-black">Month 1</td>
                      <td className="border p-2 text-right print-text-black">15</td>
                      <td className="border p-2 text-right print-text-black">$450</td>
                      <td className="border p-2 text-right print-text-black">$300</td>
                    </tr>
                    <tr>
                      <td className="border p-2 print-text-black">Month 2</td>
                      <td className="border p-2 text-right print-text-black">20</td>
                      <td className="border p-2 text-right print-text-black">$600</td>
                      <td className="border p-2 text-right print-text-black">$350</td>
                    </tr>
                    <tr>
                      <td className="border p-2 print-text-black">Month 3</td>
                      <td className="border p-2 text-right print-text-black">30</td>
                      <td className="border p-2 text-right print-text-black">$900</td>
                      <td className="border p-2 text-right print-text-black">$400</td>
                    </tr>
                    <tr>
                      <td className="border p-2 print-text-black">Month 4</td>
                      <td className="border p-2 text-right print-text-black">35</td>
                      <td className="border p-2 text-right print-text-black">$1,050</td>
                      <td className="border p-2 text-right print-text-black">$400</td>
                    </tr>
                    <tr>
                      <td className="border p-2 print-text-black">Month 5</td>
                      <td className="border p-2 text-right print-text-black">40</td>
                      <td className="border p-2 text-right print-text-black">$1,200</td>
                      <td className="border p-2 text-right print-text-black">$350</td>
                    </tr>
                    <tr>
                      <td className="border p-2 print-text-black">Month 6</td>
                      <td className="border p-2 text-right print-text-black">50</td>
                      <td className="border p-2 text-right print-text-black">$1,500</td>
                      <td className="border p-2 text-right print-text-black">$400</td>
                    </tr>
                    <tr className="bg-muted font-semibold">
                      <td className="border p-2 print-text-black">Total</td>
                      <td className="border p-2 text-right print-text-black">190</td>
                      <td className="border p-2 text-right print-text-black">$5,700</td>
                      <td className="border p-2 text-right print-text-black">$2,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 print-text-black">Return on Investment</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="print-text-black">Projected 6-Month Revenue:</span>
                  <span className="font-semibold print-text-black">$5,700</span>
                </div>
                <div className="flex justify-between">
                  <span className="print-text-black">Marketing Investment:</span>
                  <span className="font-semibold print-text-black">$2,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="print-text-black">Cost of Goods (190 units):</span>
                  <span className="font-semibold print-text-black">$1,900</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-lg">
                  <span className="font-semibold print-text-black">Net Profit:</span>
                  <span className="font-bold text-primary">$1,600</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="font-semibold print-text-black">ROI:</span>
                  <span className="font-bold text-primary">73%</span>
                </div>
              </div>
            </div>

            <p className="text-sm print-text-black italic">
              * Conservative estimates based on current market conditions and organic sales performance. 
              Actual results may vary based on market conditions and campaign effectiveness.
            </p>
          </div>
        </section>

        {/* Retail Expansion Plan */}
        <section className="page">
          <h2 className="text-3xl font-bold mb-6 print-text-black">Retail Expansion Readiness</h2>
          
          <div className="space-y-6">
            <p className="text-lg print-text-black">
              Strong online sales and brand presence are critical for successful retail partnerships. 
              This marketing investment positions VALERI for retail expansion:
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-4 print-text-black">Why Retail Stores Need Strong Online Presence</h3>
              <ul className="list-disc list-inside space-y-2 print-text-black ml-4">
                <li><strong>Proof of Demand:</strong> Retailers want to see validated sales data before stocking products</li>
                <li><strong>Brand Recognition:</strong> Customers are more likely to purchase familiar brands in stores</li>
                <li><strong>Marketing Support:</strong> Retailers prefer brands with active marketing driving customer interest</li>
                <li><strong>Negotiating Power:</strong> Strong online performance strengthens wholesale negotiations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 print-text-black">Target Retail Partners</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="border p-4 rounded">
                  <h4 className="font-semibold mb-2 print-text-black">Specialty Stores</h4>
                  <p className="text-sm print-text-black">Home goods and lifestyle boutiques</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-semibold mb-2 print-text-black">Gift Shops</h4>
                  <p className="text-sm print-text-black">Local and tourist destination shops</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-semibold mb-2 print-text-black">Department Stores</h4>
                  <p className="text-sm print-text-black">Regional chains and boutique departments</p>
                </div>
                <div className="border p-4 rounded">
                  <h4 className="font-semibold mb-2 print-text-black">Fitness Centers</h4>
                  <p className="text-sm print-text-black">Gyms and wellness centers (for drinkware)</p>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 print-text-black">Retail Timeline</h3>
              <div className="space-y-2 print-text-black">
                <p><strong>Months 1-3:</strong> Build online presence and sales velocity</p>
                <p><strong>Months 4-6:</strong> Compile sales data and marketing materials for retail pitches</p>
                <p><strong>Month 7+:</strong> Begin retail partnership outreach with proven track record</p>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Mitigation */}
        <section className="page">
          <h2 className="text-3xl font-bold mb-6 print-text-black">Risk Mitigation & Repayment</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 print-text-black">Risk Management Strategy</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 print-text-black">Inventory Risk</h4>
                  <p className="text-sm print-text-black mb-2">
                    <strong>Risk:</strong> Unsold inventory
                  </p>
                  <p className="text-sm print-text-black">
                    <strong>Mitigation:</strong> 200 units already in stock with proven Amazon sales. 
                    Multi-channel distribution (Amazon, Shopify, Etsy) reduces dependency on single platform.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 print-text-black">Marketing Performance Risk</h4>
                  <p className="text-sm print-text-black mb-2">
                    <strong>Risk:</strong> Marketing campaigns underperform
                  </p>
                  <p className="text-sm print-text-black">
                    <strong>Mitigation:</strong> Data-driven approach with continuous optimization. Budget allocated 
                    across multiple channels to test and scale what works. Conservative revenue projections.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 print-text-black">Competition Risk</h4>
                  <p className="text-sm print-text-black mb-2">
                    <strong>Risk:</strong> Market competition
                  </p>
                  <p className="text-sm print-text-black">
                    <strong>Mitigation:</strong> Premium quality positioning, strong brand identity, and multi-channel 
                    presence differentiate VALERI from competitors.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 print-text-black">Repayment Plan</h3>
              <div className="bg-muted p-6 rounded-lg">
                <p className="print-text-black mb-4">
                  Loan repayment will be funded through increased sales revenue generated by marketing activities:
                </p>
                <ul className="space-y-2 print-text-black">
                  <li>• <strong>Month 1-3:</strong> Reinvest revenue to maximize growth</li>
                  <li>• <strong>Month 4-6:</strong> Begin repayment from accelerated sales</li>
                  <li>• <strong>Month 7-12:</strong> Full repayment from sustained revenue growth</li>
                </ul>
                <p className="mt-4 print-text-black">
                  With 200 units in stock and proven product demand, marketing investment directly translates 
                  to sales and revenue for timely repayment.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 print-text-black">Cash Flow Management</h3>
              <p className="print-text-black">
                Existing inventory eliminates upfront production costs. All loan funds will be directed to 
                revenue-generating marketing activities with measurable ROI tracking to ensure efficient capital deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Why Now */}
        <section className="page">
          <h2 className="text-3xl font-bold mb-6 print-text-black">Why Now?</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 print-text-black">Market Timing</h3>
              <ul className="list-disc list-inside space-y-2 print-text-black ml-4">
                <li>Home essentials and sustainable products continue strong growth trajectory</li>
                <li>E-commerce adoption remains high with consumers comfortable buying online</li>
                <li>Multi-channel retail approach is now expected by consumers</li>
                <li>Digital marketing tools and platforms more effective than ever</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 print-text-black">Business Readiness</h3>
              <ul className="list-disc list-inside space-y-2 print-text-black ml-4">
                <li><strong>Proven Product:</strong> 20 Amazon sales validate market demand</li>
                <li><strong>Inventory Ready:</strong> 200 units in stock for immediate fulfillment</li>
                <li><strong>Infrastructure Built:</strong> Multi-channel presence established</li>
                <li><strong>Clear Path:</strong> Marketing is the identified growth bottleneck</li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 print-text-black">The Missing Piece: Marketing Budget</h3>
              <p className="print-text-black mb-4">
                VALERI has everything needed for success except marketing capital:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-green-600 mb-1">✓ Quality Products</p>
                  <p className="font-semibold text-green-600 mb-1">✓ Inventory in Stock</p>
                  <p className="font-semibold text-green-600 mb-1">✓ Multi-Channel Distribution</p>
                  <p className="font-semibold text-green-600 mb-1">✓ Proven Sales</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">→ Marketing Budget</p>
                  <p className="text-sm print-text-black">The catalyst for accelerated growth</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 print-text-black">Competitive Advantage Window</h3>
              <p className="print-text-black">
                Acting now allows VALERI to establish market position before increased competition. 
                Building brand presence and customer base early provides sustainable competitive advantages 
                and strengthens position for retail expansion.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Next Steps */}
        <section className="page">
          <h2 className="text-3xl font-bold mb-6 print-text-black">Next Steps</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 print-text-black">What We're Looking For</h3>
              <p className="print-text-black mb-4">
                VALERI is seeking a growth loan to fund strategic marketing initiatives that will:
              </p>
              <ul className="list-disc list-inside space-y-2 print-text-black ml-4">
                <li>Accelerate sales velocity across multiple channels</li>
                <li>Build brand awareness and customer base</li>
                <li>Optimize marketing ROI through data-driven campaigns</li>
                <li>Establish strong online presence for retail partnerships</li>
                <li>Position business for sustainable long-term growth</li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 print-text-black">Supporting Documentation Available</h3>
              <ul className="space-y-2 print-text-black">
                <li>✓ Amazon sales records and customer reviews</li>
                <li>✓ Inventory documentation (200 units)</li>
                <li>✓ Multi-channel platform listings (Amazon, Shopify, Etsy)</li>
                <li>✓ Product specifications and images</li>
                <li>✓ Marketing plan details and budget breakdown</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 print-text-black">Contact Information</h3>
              <div className="space-y-2 print-text-black">
                <p><strong>Business Name:</strong> VALERI</p>
                <p><strong>Email:</strong> hello@valeri.com</p>
                <p><strong>Website:</strong> valeri.lovable.app</p>
                <p><strong>Platforms:</strong> Amazon | Shopify | Etsy</p>
              </div>
            </div>

            <div className="border-t pt-6 mt-6">
              <p className="text-lg print-text-black text-center">
                Thank you for considering VALERI's growth loan application. We're ready to scale 
                a proven business with strategic marketing investment and are excited about the opportunity 
                to discuss this further.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GrowthLoanPitch;