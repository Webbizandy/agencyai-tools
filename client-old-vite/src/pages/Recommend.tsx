import { useEffect } from "react";
import { useRoute } from "wouter";
import affiliateLinks from "@/data/affiliate-links.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Loader2 } from "lucide-react";

export default function Recommend() {
  const [, params] = useRoute("/rec/:slug");
  const slug = params?.slug;
  
  const affiliateLink = affiliateLinks.find((link: any) => link.slug === slug);

  useEffect(() => {
    if (affiliateLink) {
      // Redirect after a short delay to show the page briefly
      const timer = setTimeout(() => {
        window.location.href = affiliateLink.url;
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [affiliateLink]);

  if (!affiliateLink) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="container max-w-2xl text-center space-y-6">
            <h1 className="text-4xl font-bold">Tool Not Found</h1>
            <p className="text-xl text-muted-foreground">
              Sorry, we couldn't find that tool recommendation.
            </p>
            <Button asChild>
              <a href="/tools">Browse All Tools</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container max-w-2xl text-center space-y-8">
          <div className="flex justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Redirecting to {affiliateLink.name}...</h1>
            <p className="text-xl text-muted-foreground">
              You're being redirected to {affiliateLink.name}. If you're not redirected automatically, click the button below.
            </p>
          </div>
          <Button size="lg" asChild>
            <a href={affiliateLink.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Go to {affiliateLink.name}
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            <strong>Affiliate Disclosure:</strong> This is an affiliate link. If you make a purchase, we may earn a commission at no extra cost to you. We only recommend tools we've personally tested and use.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
