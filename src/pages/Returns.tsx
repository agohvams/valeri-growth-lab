import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RotateCcw, Package, CheckCircle, XCircle } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
              Returns Policy
            </h1>
            <p className="text-muted-foreground mb-16">
              We want you to love your purchase. If you're not completely satisfied, we're here to help.
            </p>

            <div className="bg-secondary p-8 mb-12">
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">
                30-Day Return Window
              </h2>
              <p className="text-sm leading-relaxed">
                We accept returns within 30 days of delivery for items in their original, unused condition with all tags attached and original packaging intact. Returns are free for UK customers. International return shipping costs are the responsibility of the customer.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="text-center p-6 bg-secondary">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-black">
                  1
                </div>
                <h3 className="font-black text-sm mb-2 uppercase tracking-wider">Initiate Return</h3>
                <p className="text-xs text-muted-foreground">Log in to your account and select the order you wish to return</p>
              </div>
              <div className="text-center p-6 bg-secondary">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-black">
                  2
                </div>
                <h3 className="font-black text-sm mb-2 uppercase tracking-wider">Pack & Ship</h3>
                <p className="text-xs text-muted-foreground">Use the prepaid label we email you and drop off at your nearest post office</p>
              </div>
              <div className="text-center p-6 bg-secondary">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-black">
                  3
                </div>
                <h3 className="font-black text-sm mb-2 uppercase tracking-wider">Get Refund</h3>
                <p className="text-xs text-muted-foreground">Receive your refund within 5-7 business days after we receive your return</p>
              </div>
            </div>

            <div className="space-y-8 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-8 w-8 text-accent" />
                  <h2 className="text-xl font-black uppercase tracking-tight">What We Accept</h2>
                </div>
                <ul className="space-y-2 text-sm pl-11">
                  <li>• Items in original, unused condition</li>
                  <li>• Products with all original tags and packaging</li>
                  <li>• Items purchased within the last 30 days</li>
                  <li>• Defective or damaged items (we'll cover return shipping)</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="h-8 w-8" />
                  <h2 className="text-xl font-black uppercase tracking-tight">What We Don't Accept</h2>
                </div>
                <ul className="space-y-2 text-sm pl-11">
                  <li>• Used or washed items</li>
                  <li>• Items without original packaging or tags</li>
                  <li>• Products returned after 30 days</li>
                  <li>• Personalized or custom-made items</li>
                  <li>• Items marked as final sale</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8">
              <div className="flex items-start gap-4">
                <RotateCcw className="h-8 w-8 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">
                    Exchanges
                  </h2>
                  <p className="text-sm mb-4">
                    We currently don't offer direct exchanges. If you'd like a different size or color, please return your original item and place a new order for the item you want. This ensures you get your new product as quickly as possible.
                  </p>
                  <a href="/contact" className="inline-block bg-primary-foreground text-primary px-8 py-3 font-bold uppercase tracking-wider text-xs hover:opacity-90 transition-opacity">
                    Start A Return
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-black mb-4 uppercase tracking-tight">Refund Processing</h2>
              <p className="text-sm leading-relaxed">
                Once we receive your return, we'll inspect it and process your refund within 3-5 business days. The refund will be issued to your original payment method. Please allow an additional 5-7 business days for the refund to appear in your account, depending on your bank or card issuer.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;
