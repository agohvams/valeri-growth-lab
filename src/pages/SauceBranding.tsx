import { Sparkles, Award, Star } from "lucide-react";

const SauceBranding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-amber-950/20 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.1),transparent_70%)]" />
        
        <div className="relative max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600/20 to-red-600/20 rounded-full border border-amber-500/30 mb-4">
              <span className="text-amber-400 font-semibold text-sm tracking-wider">LUXURY CONDIMENTS</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 mb-6">
              Mama Nicky's
            </h1>
            
            <p className="text-2xl md:text-3xl text-amber-100/80 font-light tracking-wide">
              Nicky's Kitchen
            </p>
            
            <div className="flex items-center justify-center gap-2 text-amber-300/60">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
          </div>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Artisanal sauces crafted for the discerning palate. 
            Where tradition meets uncompromising quality.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-amber-400 mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-widest uppercase">Our Philosophy</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-serif text-amber-100 mb-6">
            Heritage. Quality. Excellence.
          </h2>
          
          <p className="text-lg text-slate-300 leading-relaxed">
            Each bottle of Mama Nicky's sauce represents generations of culinary mastery, 
            refined for the modern epicurean. Crafted in small batches using only the finest 
            ingredients sourced from premium suppliers, our sauces transform every meal into 
            an extraordinary experience.
          </p>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif text-amber-100 mb-4">The Collection</h2>
            <p className="text-slate-400">Two exceptional sauces. Infinite possibilities.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Chili Sauce */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
              
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 rounded-3xl p-12 border border-red-900/30 hover:border-red-700/50 transition-all duration-500 backdrop-blur-sm">
                {/* Bottle Mockup */}
                <div className="aspect-[3/4] mb-8 rounded-2xl bg-gradient-to-br from-red-950 via-red-900 to-slate-900 relative overflow-hidden border-4 border-amber-600/30 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Label Design */}
                  <div className="absolute inset-x-0 top-1/4 px-8 py-12 bg-gradient-to-br from-amber-50 to-amber-100 mx-6 rounded-lg border-4 border-amber-600 shadow-xl">
                    <div className="text-center space-y-3">
                      <div className="text-xs font-bold tracking-widest text-red-900 opacity-60">PREMIUM</div>
                      <div className="font-serif text-4xl text-slate-900 leading-none">Mama Nicky's</div>
                      <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent my-2" />
                      <div className="font-light text-lg text-slate-800 tracking-wide">Artisan Chili</div>
                      <div className="text-xs text-slate-600 italic">Nicky's Kitchen</div>
                      <div className="pt-2">
                        <div className="inline-block px-3 py-1 bg-red-900 text-amber-50 text-xs font-semibold rounded-full">
                          EXTRA HOT
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 bg-amber-600 text-slate-900 text-xs font-bold tracking-wider">
                      250ML
                    </div>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-serif text-red-400">Artisan Chili Sauce</h3>
                  <p className="text-slate-400 leading-relaxed">
                    A bold symphony of fire-roasted chilies, aged for perfect complexity. 
                    Intense heat balanced with subtle sweet notes.
                  </p>
                  
                  <div className="pt-6 flex items-center justify-center gap-6 text-sm text-amber-500/80">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>Small Batch</span>
                    </div>
                    <span>•</span>
                    <div>No Preservatives</div>
                  </div>
                </div>
              </div>
            </div>

            {/* BBQ Sauce */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
              
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 rounded-3xl p-12 border border-amber-900/30 hover:border-amber-700/50 transition-all duration-500 backdrop-blur-sm">
                {/* Bottle Mockup */}
                <div className="aspect-[3/4] mb-8 rounded-2xl bg-gradient-to-br from-amber-950 via-amber-900 to-slate-900 relative overflow-hidden border-4 border-amber-600/30 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Label Design */}
                  <div className="absolute inset-x-0 top-1/4 px-8 py-12 bg-gradient-to-br from-amber-50 to-amber-100 mx-6 rounded-lg border-4 border-amber-600 shadow-xl">
                    <div className="text-center space-y-3">
                      <div className="text-xs font-bold tracking-widest text-amber-900 opacity-60">PREMIUM</div>
                      <div className="font-serif text-4xl text-slate-900 leading-none">Mama Nicky's</div>
                      <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent my-2" />
                      <div className="font-light text-lg text-slate-800 tracking-wide">Smokehouse BBQ</div>
                      <div className="text-xs text-slate-600 italic">Nicky's Kitchen</div>
                      <div className="pt-2">
                        <div className="inline-block px-3 py-1 bg-amber-900 text-amber-50 text-xs font-semibold rounded-full">
                          SLOW SMOKED
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 bg-amber-600 text-slate-900 text-xs font-bold tracking-wider">
                      250ML
                    </div>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-serif text-amber-400">Smokehouse BBQ Sauce</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Rich, smoky depth with hints of molasses and premium spices. 
                    Slow-crafted to perfection for the ultimate barbecue experience.
                  </p>
                  
                  <div className="pt-6 flex items-center justify-center gap-6 text-sm text-amber-500/80">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>Small Batch</span>
                    </div>
                    <span>•</span>
                    <div>No Preservatives</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent via-slate-950 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 border border-amber-600/30 mb-4">
                <Award className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-serif text-amber-100">Artisan Crafted</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every batch is handcrafted in small quantities, ensuring exceptional quality and attention to detail
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 border border-amber-600/30 mb-4">
                <Sparkles className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-serif text-amber-100">Premium Ingredients</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sourced from the finest suppliers worldwide, with no artificial preservatives or additives
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 border border-amber-600/30 mb-4">
                <Star className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-serif text-amber-100">Luxury Experience</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Designed for those who appreciate the finer things, perfect for upscale retailers like Harrods
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="font-serif text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
            Mama Nicky's
          </div>
          <p className="text-slate-500 text-sm">
            Elevating everyday meals to extraordinary experiences
          </p>
          <p className="text-slate-600 text-xs">
            © 2025 Nicky's Kitchen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SauceBranding;