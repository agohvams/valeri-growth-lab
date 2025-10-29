import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Star, ShoppingCart, Truck, Shield, ArrowLeft } from "lucide-react";

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black mb-4">Product Not Found</h1>
            <Link to="/shop">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Generate product schema for SEO
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": `https://valerigoods.com${product.image}`,
    "description": product.description,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "VALERI"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://valerigoods.com/product/${product.id}`,
      "priceCurrency": "GBP",
      "price": product.salePrice ? product.salePrice.replace('£', '') : product.price.replace('£', ''),
      "priceValidUntil": "2025-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "VALERI"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviews,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://valerigoods.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Shop",
        "item": "https://valerigoods.com/shop"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.title,
        "item": `https://valerigoods.com/product/${product.id}`
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{product.title} | VALERI - Premium Kitchen & Home Essentials</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.title}, ${product.category}, kitchen essentials, home goods, ${product.material || 'premium quality'}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={`https://valerigoods.com${product.image}`} />
        <meta property="og:url" content={`https://valerigoods.com/product/${product.id}`} />
        <meta property="product:price:amount" content={product.salePrice ? product.salePrice.replace('£', '') : product.price.replace('£', '')} />
        <meta property="product:price:currency" content="GBP" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={`https://valerigoods.com${product.image}`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://valerigoods.com/product/${product.id}`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-8">
          {/* Breadcrumb Navigation */}
          <div className="container mx-auto px-4 mb-8">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:underline">Shop</Link>
              <span>/</span>
              <span className="text-muted-foreground">{product.category}</span>
            </nav>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="relative aspect-square bg-secondary overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div>
                <div className="mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {product.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">
                  {product.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-foreground fill-current"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-8">
                  {product.salePrice ? (
                    <>
                      <p className="text-4xl font-black">{product.salePrice}</p>
                      <p className="text-xl text-muted-foreground line-through">{product.price}</p>
                      <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-black uppercase">
                        Save {Math.round((1 - parseFloat(product.salePrice.replace('£', '')) / parseFloat(product.price.replace('£', ''))) * 100)}%
                      </span>
                    </>
                  ) : (
                    <p className="text-4xl font-black">{product.price}</p>
                  )}
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-lg font-bold uppercase tracking-wider mb-3">Description</h2>
                  <p className="text-base leading-relaxed">{product.description}</p>
                </div>

                {/* Material */}
                {product.material && (
                  <div className="mb-8">
                    <h2 className="text-lg font-bold uppercase tracking-wider mb-3">Materials</h2>
                    <p className="text-base">{product.material}</p>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="mb-8">
                  <Button size="lg" className="w-full text-base font-bold uppercase tracking-wider py-6">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="border-t pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5" />
                      <div>
                        <p className="text-sm font-bold">Free Shipping</p>
                        <p className="text-xs text-muted-foreground">Orders over £50</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5" />
                      <div>
                        <p className="text-sm font-bold">30-Day Returns</p>
                        <p className="text-xs text-muted-foreground">Easy returns policy</p>
                      </div>
                    </div>
                  </div>
                  
                  {product.amazonUrl && (
                    <div className="mt-6 pt-6 border-t text-center">
                      <p className="text-sm text-muted-foreground mb-2">Also available on</p>
                      <a 
                        href={product.amazonUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#FF9900] hover:text-[#FF9900]/80 font-semibold text-sm underline underline-offset-4"
                      >
                        Amazon.co.uk
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="mt-24">
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">You May Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {products
                  .filter(p => p.category === product.category && p.id !== product.id)
                  .slice(0, 4)
                  .map(relatedProduct => (
                    <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                      <div className="group cursor-pointer">
                        <div className="relative aspect-square bg-secondary overflow-hidden mb-4">
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <h3 className="font-bold text-sm uppercase tracking-tight mb-2">{relatedProduct.title}</h3>
                        <p className="text-lg font-black">{relatedProduct.salePrice || relatedProduct.price}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Product;