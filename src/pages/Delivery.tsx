import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, Package, MapPin, Clock } from "lucide-react";

const Delivery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
              Delivery Information
            </h1>
            <p className="text-muted-foreground mb-16">
              Everything you need to know about shipping and delivery.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-secondary p-8">
                <Truck className="h-12 w-12 mb-4" />
                <h2 className="text-xl font-black mb-4 uppercase tracking-tight">
                  UK Shipping
                </h2>
                <div className="space-y-3 text-sm">
                  <p><strong>Free Standard Delivery</strong> - Orders over £50 (3-5 business days)</p>
                  <p><strong>Standard Delivery</strong> - £3.95 (3-5 business days)</p>
                  <p><strong>Express Delivery</strong> - £7.95 (1-2 business days)</p>
                  <p><strong>Next Day Delivery</strong> - £9.95 (Order before 3pm for next day delivery)</p>
                </div>
              </div>

              <div className="bg-secondary p-8">
                <MapPin className="h-12 w-12 mb-4" />
                <h2 className="text-xl font-black mb-4 uppercase tracking-tight">
                  International Shipping
                </h2>
                <div className="space-y-3 text-sm">
                  <p><strong>Europe</strong> - £12.95 (5-7 business days)</p>
                  <p><strong>USA & Canada</strong> - £15.95 (7-10 business days)</p>
                  <p><strong>Rest of World</strong> - £19.95 (10-15 business days)</p>
                  <p className="text-muted-foreground text-xs">*Customs duties and taxes may apply</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Package className="h-8 w-8" />
                  <h2 className="text-2xl font-black uppercase tracking-tight">Order Processing</h2>
                </div>
                <p className="text-sm leading-relaxed">
                  All orders are processed within 1-2 business days (Monday-Friday, excluding bank holidays). Orders placed after 3pm on Friday will be processed the following Monday. You will receive an email confirmation with tracking information once your order has been dispatched.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-8 w-8" />
                  <h2 className="text-2xl font-black uppercase tracking-tight">Delivery Times</h2>
                </div>
                <p className="text-sm leading-relaxed mb-4">
                  Delivery times are estimates and begin from the date of dispatch, not the order date. We cannot guarantee delivery times, but we will always do our best to meet them. Delays may occur during peak seasons (Black Friday, Christmas, etc.).
                </p>
                <p className="text-sm leading-relaxed">
                  If you haven't received your order within the estimated delivery time, please check your tracking information or contact our customer service team at support@valerigoods.com.
                </p>
              </div>

              <div className="bg-secondary p-8">
                <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">
                  Track Your Order
                </h2>
                <p className="text-sm mb-6">
                  Keep an eye on your package every step of the way. Log in to your account to view real-time tracking updates.
                </p>
                <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wider text-xs hover:opacity-90 transition-opacity">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Delivery;
