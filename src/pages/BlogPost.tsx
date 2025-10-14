import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <article className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <Badge className="mb-4">{post.category}</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center space-x-6 text-muted-foreground mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {post.author}
            </div>
          </div>

          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, i) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={i} className="text-3xl font-bold mt-8 mb-4">{paragraph.replace('# ', '')}</h1>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold mt-6 mb-3">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={i} className="text-xl font-bold mt-4 mb-2">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.trim() === '') {
                return null;
              }
              return <p key={i} className="mb-4 text-muted-foreground leading-relaxed">{paragraph}</p>;
            })}
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-2xl font-bold mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map((relatedPost) => (
                <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`} className="group">
                  <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="font-bold group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
