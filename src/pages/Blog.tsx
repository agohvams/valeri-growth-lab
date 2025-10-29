import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Kitchen & Home Blog | VALERI - Tips, Guides & Inspiration</title>
        <meta name="description" content="Discover expert kitchen tips, sustainable living guides, and home organization inspiration. Learn how to make the most of your kitchen essentials and create a better home." />
        <meta name="keywords" content="kitchen tips, home organization, sustainable living, kitchen hacks, home improvement, cooking tips, kitchen gadget reviews" />
        <link rel="canonical" href="https://valerigoods.com/blog" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kitchen & Home Blog | VALERI" />
        <meta property="og:description" content="Tips, inspiration, and guides to help you create the perfect kitchen and home" />
        <meta property="og:url" content="https://valerigoods.com/blog" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kitchen & Home Blog</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tips, inspiration, and guides to help you create the perfect kitchen and home
            </p>
            
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
