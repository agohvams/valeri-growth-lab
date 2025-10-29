import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are your shipping costs and delivery times?",
      answer: "We offer free UK shipping on all orders over £50. Standard delivery takes 3-5 business days. Orders under £50 incur a £3.95 shipping fee. Express delivery (1-2 business days) is available for £7.95."
    },
    {
      question: "What is your returns policy?",
      answer: "We accept returns within 30 days of delivery for unused items in original packaging. Returns are free for UK customers. Simply initiate a return through your account and we'll email you a prepaid shipping label."
    },
    {
      question: "Are your products dishwasher safe?",
      answer: "Most of our drinkware and kitchen products are dishwasher safe on the top rack. However, we recommend hand washing to preserve the finish and extend product life. Check individual product pages for specific care instructions."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location. Duties and taxes may apply depending on your country's import regulations."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay for a secure and convenient checkout experience."
    },
    {
      question: "How do I care for my tumbler to keep it in best condition?",
      answer: "Hand wash with warm soapy water and avoid abrasive cleaners. Don't microwave or freeze. Store with the lid off to prevent odors. Avoid dropping or denting as this can affect insulation performance."
    },
    {
      question: "Do you offer bulk or wholesale pricing?",
      answer: "Yes! We offer special pricing for bulk orders and corporate gifts. Please contact us at wholesale@valerigoods.com with your requirements and we'll be happy to provide a custom quote."
    },
    {
      question: "Are your products covered by warranty?",
      answer: "All VALERI products come with a 1-year manufacturer's warranty covering defects in materials and workmanship. Normal wear and tear, misuse, or accidents are not covered."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 2 hours of placement. Contact us immediately at support@valerigoods.com with your order number. After this window, we cannot guarantee changes as items may have already shipped."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
              FAQ
            </h1>
            <p className="text-muted-foreground mb-12">
              Find answers to commonly asked questions about our products, shipping, and policies.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border bg-secondary px-6">
                  <AccordionTrigger className="text-left font-bold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-16 bg-secondary p-8 text-center">
              <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 font-bold uppercase tracking-wider text-xs hover:opacity-90 transition-opacity">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
