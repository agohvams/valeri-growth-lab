import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, Users, TrendingUp, Heart } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
              Join The Team
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Help us create products that make everyday life better for everyone.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-12 uppercase tracking-tighter text-center">
                Why Work At VALERI?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-secondary p-8">
                  <Users className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-black mb-3 uppercase tracking-tight">Great Team</h3>
                  <p className="text-sm">
                    Work alongside passionate individuals who care about creating quality products and building a strong community.
                  </p>
                </div>

                <div className="bg-secondary p-8">
                  <TrendingUp className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-black mb-3 uppercase tracking-tight">Growth Opportunity</h3>
                  <p className="text-sm">
                    We're growing fast and we invest in our team's development with training, mentorship, and career progression.
                  </p>
                </div>

                <div className="bg-secondary p-8">
                  <Heart className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-black mb-3 uppercase tracking-tight">Benefits Package</h3>
                  <p className="text-sm">
                    Competitive salary, health insurance, generous holiday allowance, employee discount, and flexible working options.
                  </p>
                </div>

                <div className="bg-secondary p-8">
                  <Briefcase className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-black mb-3 uppercase tracking-tight">Innovation Culture</h3>
                  <p className="text-sm">
                    We encourage new ideas and creative thinking. Your voice matters and your contributions make a real impact.
                  </p>
                </div>
              </div>

              <div className="bg-secondary p-8 mb-16">
                <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">
                  Our Values
                </h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-black uppercase tracking-wider mb-2">Quality First</h4>
                    <p className="text-muted-foreground">We never compromise on quality. Every product, every interaction, every detail matters.</p>
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-wider mb-2">Customer Obsessed</h4>
                    <p className="text-muted-foreground">Our customers are at the heart of everything we do. We listen, learn, and constantly improve.</p>
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-wider mb-2">Think Different</h4>
                    <p className="text-muted-foreground">We challenge the status quo and look for better ways to solve everyday problems.</p>
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-wider mb-2">Own It</h4>
                    <p className="text-muted-foreground">We take responsibility for our work and follow through on our commitments.</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-12 text-center">
                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">
                  Current Openings
                </h2>
                <p className="mb-8">
                  We're always looking for talented people to join our team. Check back soon for new opportunities or send us your CV.
                </p>
                <a 
                  href="mailto:careers@valerigoods.com" 
                  className="inline-block bg-primary-foreground text-primary px-8 py-3 font-bold uppercase tracking-wider text-xs hover:opacity-90 transition-opacity"
                >
                  Send Your CV
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

export default Careers;
