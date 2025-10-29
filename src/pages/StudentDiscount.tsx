import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Check } from "lucide-react";

const StudentDiscount = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <GraduationCap className="h-20 w-20 mx-auto mb-6" />
            <h1 className="text-6xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
              15% Off
            </h1>
            <p className="text-2xl mb-4 font-bold uppercase tracking-wider">
              Student Discount
            </p>
            <p className="text-lg max-w-2xl mx-auto">
              We're here to support students with an exclusive 15% discount on all products.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-secondary p-8 mb-12">
                <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">
                  How It Works
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-black uppercase tracking-wider text-sm mb-2">Verify Your Status</h3>
                      <p className="text-sm text-muted-foreground">
                        Register with Student Beans or UNiDAYS using your university email address to verify your student status.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-black uppercase tracking-wider text-sm mb-2">Get Your Code</h3>
                      <p className="text-sm text-muted-foreground">
                        Once verified, you'll receive a unique discount code that gives you 15% off your entire order.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-black uppercase tracking-wider text-sm mb-2">Shop & Save</h3>
                      <p className="text-sm text-muted-foreground">
                        Enter your code at checkout and enjoy 15% off all VALERI products. Use it as many times as you like!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">
                  Who Qualifies?
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                    <p>Full-time and part-time university students</p>
                  </div>
                  <div className="flex gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                    <p>College and sixth form students (16+)</p>
                  </div>
                  <div className="flex gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                    <p>Postgraduate and PhD students</p>
                  </div>
                  <div className="flex gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                    <p>Online and distance learning students</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-8 mb-12">
                <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">
                  Terms & Conditions
                </h2>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Valid student verification required through Student Beans or UNiDAYS</li>
                  <li>• 15% discount applies to full-price items only</li>
                  <li>• Cannot be combined with other promotional codes or offers</li>
                  <li>• Valid for online purchases only</li>
                  <li>• Must re-verify student status annually to maintain discount eligibility</li>
                  <li>• VALERI reserves the right to modify or cancel this offer at any time</li>
                </ul>
              </div>

              <div className="text-center bg-primary text-primary-foreground p-12">
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">
                  Ready To Save?
                </h2>
                <p className="mb-8 text-sm">
                  Verify your student status now and start enjoying 15% off all orders.
                </p>
                <a 
                  href="https://www.studentbeans.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-foreground text-primary px-8 py-3 font-bold uppercase tracking-wider text-xs hover:opacity-90 transition-opacity mr-4"
                >
                  Verify With Student Beans
                </a>
                <a 
                  href="https://www.myunidays.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-foreground text-primary px-8 py-3 font-bold uppercase tracking-wider text-xs hover:opacity-90 transition-opacity"
                >
                  Verify With UNiDAYS
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StudentDiscount;
