import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import blogPosts from "@/data/blog-posts.json";
import { useEffect } from "react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function BlogPost() {
  const [, blogParams] = useRoute("/blog/:slug");
  const [, newsletterParams] = useRoute("/newsletter/:slug");
  const params = blogParams || newsletterParams;
  const post = blogPosts.find((p: any) => p.slug === params?.slug);

  useDocumentTitle(
    post ? `${post.title} | AgencyAI.tools Blog` : "Blog Post | AgencyAI.tools",
    post?.excerpt
  );

  useEffect(() => {
    if (post) {
      // Add JSON-LD structured data for AEO
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": "Andy Kelly"
        },
        "publisher": {
          "@type": "Organization",
          "name": "AgencyAI.tools",
          "logo": {
            "@type": "ImageObject",
            "url": "https://agencyai.tools/logo.png"
          }
        }
      });
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Post Not Found</h1>
            <p className="text-muted-foreground">
              The blog post you're looking for doesn't exist.
            </p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
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
      
      <main className="flex-1">
        <article className="py-16">
          <div className="container max-w-4xl">
            {/* Back Button */}
            <Link href={newsletterParams ? "/newsletter" : "/blog"}>
              <Button variant="ghost" className="mb-8 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {newsletterParams ? "Newsletter" : "Blog"}
              </Button>
            </Link>

            {/* Article Header */}
            <header className="space-y-6 mb-12">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <Badge key={tag} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 hover:from-blue-600 hover:to-purple-700 transition-all">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                  <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{post.date}</span>
                </div>
                <span className="text-gray-400">•</span>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                  <span className="text-lg">☕</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{post.readTime}</span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg prose-headings:bg-gradient-to-r prose-headings:from-gray-900 prose-headings:to-gray-700 prose-headings:bg-clip-text prose-headings:text-transparent prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded max-w-none dark:prose-invert dark:prose-headings:from-white dark:prose-headings:to-gray-300 dark:prose-strong:text-white dark:prose-code:text-purple-400 dark:prose-code:bg-purple-950"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA Section */}
            <div className="mt-16 p-8 rounded-[32px] bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                🎯 Want More Like This?
              </h3>
              <p className="text-blue-50 mb-6 text-lg">
                Every week, I send out the best AI tools and strategies for agencies. No spam. No BS. Just tools that actually work.
              </p>
              <Link href="/#subscribe">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-6 text-lg rounded-[20px] shadow-lg">
                  Get Weekly AI Updates →
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
