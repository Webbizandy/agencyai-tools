import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Star } from "lucide-react";
import blogPosts from "@/data/blog-posts.json";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useState } from "react";
import { Helmet } from "react-helmet";

const personas = [
  {
    title: "Founder",
    emoji: "👔",
    name: "Sara Blakely",
    description: "Started with $5K. Built an empire.",
    color: "from-blue-400 via-cyan-400 to-teal-500",
    interests: ["Agency Growth", "Tool Selection", "Starting Out"],
    image: "https://sspark.genspark.ai/cfimages?u1=Fj57EmEu97%2Fe3Mtk0ww5sshVwvVX1DTuURYYwnuIAlDcNmYDAWNmlth6tM%2Fi0pas26W82j5Vg5QwBLaqXyAvUdK%2Ffm2ru1wlU7marXltfTctXNDeHx9Wgr4uVC7kFJGT4Wbn8xjLaEBXl8SXKE0%3D&u2=NXOvXXoKlVeFLvUe&width=400"
  },
  {
    title: "Marketer",
    emoji: "📈",
    name: "Seth Godin",
    description: "Making marketing that matters",
    color: "from-purple-400 via-pink-400 to-rose-500",
    interests: ["Marketing Automation", "Email Marketing", "Client Results"],
    image: "https://sspark.genspark.ai/cfimages?u1=E3oHleHMFxo7UEOFLRn%2BLgF%2B6NT9VLP0kRWhiP%2FNwFnDedODp%2FHtDOqKyzZhYE2h6rZBQYRxOycO81pST314spQBPLv1xAX6WJSj3CDR16sQeH1qDHza0Y877A9ftLzJFcfZzeix5vwaTPf27PicjSvGrHR%2BePSmKuQqvwzF6JtgTl9Ie79RFdQk0z4fpsFWEJZzTNRJNpDrRqjxzVplmgjG5OdY%2FLPwpZq3AfX9LeBi%2Btoy33gLgrtfZ708ly8Bc0cYQP6tKa61ba71rEuKPK2EZG1ZR0S%2B7st9K%2BV4sA%3D%3D&u2=W6N%2Fo0j%2FuJGKtkFH&width=400"
  },
  {
    title: "Freelancer",
    emoji: "🎨",
    name: "Tim Ferriss",
    description: "One person, multiple clients",
    color: "from-emerald-400 via-green-400 to-lime-500",
    interests: ["AI Tools", "Automation", "Productivity", "Tool Selection"],
    image: "https://sspark.genspark.ai/cfimages?u1=2LfMO8MYq6hGRnQxV55ObAQCZfi1ALlWJbgKkblaQkgZlX%2B7k%2FoIP6IpJnPdcD2TXap8GSCN40A6enMbj5%2FyJTcXDegJAR4EmT11iD2p0ecySNEHGI8DMA%3D%3D&u2=CDbet4Di3usbGG1R&width=400"
  },
  {
    title: "Agency Owner",
    emoji: "🚀",
    name: "Gary Vee",
    description: "Built it. Now scaling it.",
    color: "from-orange-400 via-amber-400 to-yellow-500",
    interests: ["White Label", "Scaling", "Team Building"],
    image: "https://sspark.genspark.ai/cfimages?u1=vMU8UKv658lsdxKaX%2FPAF%2BWL4URNckvVWeUYNtlpWVXJ0VVlVzcG0Kry%2BeLNdyEqfHNpu8bcfaEthgZ0r0TdEUPrDovwsP5S%2Fjs28iJyOS049qFUVqhaHyOEfAj2rsUMyAvevSHM220rZQ%2B9J6OS359OcJYDc%2FMkIQ%3D%3D&u2=TJvbHpZY6VNp%2BN7e&width=400"
  }
];

// Mark featured posts (can be dynamic later)
const featuredSlugs = ["lead-generation-tools-agencies-2025", "choosing-email-marketing-tool-agency-stage"];

export default function Newsletter() {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

  useDocumentTitle(
    "Newsletter | AgencyAI.tools",
    "Weekly AI insights for agency founders. Real tools, real results, zero fluff."
  );

  // Filter posts if a persona is selected
  const filteredPosts = selectedPersona
    ? blogPosts.filter((post: any) => 
        post.tags.some((tag: string) => 
          personas.find(p => p.title === selectedPersona)?.interests.some(interest => 
            tag.toLowerCase().includes(interest.toLowerCase()) || 
            interest.toLowerCase().includes(tag.toLowerCase())
          )
        )
      )
    : blogPosts;

  const featuredPosts = filteredPosts.filter((post: any) => featuredSlugs.includes(post.slug));
  const latestPosts = filteredPosts.filter((post: any) => !featuredSlugs.includes(post.slug));

  return (
    <div
      <Helmet>
        <link rel="canonical" href="https://agencyai.tools/newsletter" />
      </Helmet>
 className="min-h-screen flex flex-col bg-[#F9FAFB] dark:bg-gray-950">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - "Who Are You?" */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
          <div className="container max-w-5xl">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Who are you?
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                  Find newsletters that actually matter to you
                </p>
              </div>

              {/* Persona Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {personas.map((persona) => (
                  <button
                    key={persona.title}
                    onClick={() => setSelectedPersona(selectedPersona === persona.title ? null : persona.title)}
                    className={`group relative overflow-hidden rounded-[32px] transition-all duration-300 ${
                      selectedPersona === persona.title
                        ? 'ring-4 ring-blue-500 scale-105 shadow-2xl'
                        : 'hover:scale-105 hover:shadow-xl'
                    }`}
                  >
                    {/* Multi-color gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
                    
                    {/* Photo with blend effect */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                      <img 
                        src={persona.image} 
                        alt={persona.name}
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                    </div>

                    {/* Glassmorphism overlay */}
                    <div className="absolute inset-0 backdrop-blur-[2px] bg-white/5" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center space-y-3 p-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                        <img 
                          src={persona.image} 
                          alt={persona.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-white/90 uppercase tracking-wider mb-1 font-semibold">
                          {persona.name}
                        </p>
                        <h3 className="font-bold text-white text-lg md:text-xl">
                          {persona.title}
                        </h3>
                        <p className="text-sm text-white/95 mt-1 italic font-medium">
                          {persona.description}
                        </p>
                      </div>
                    </div>

                    {selectedPersona === persona.title && (
                      <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-lg">
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {selectedPersona && (
                <div className="mt-6">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedPersona(null)}
                    className="bg-white/90 backdrop-blur"
                  >
                    Clear Filter
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Section */}
        {featuredPosts.length > 0 && (
          <section className="py-16 border-b border-gray-200 dark:border-gray-800">
            <div className="container max-w-6xl">
              <div className="flex items-center gap-3 mb-8">
                <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
                <h2 className="text-3xl font-bold">Don't Miss These ⭐</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.map((post: any) => (
                  <Link key={post.slug} href={`/newsletter/${post.slug}`}>
                    <Card className="group h-full overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 bg-white dark:bg-gray-900">
                      {post.image && (
                        <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <CardContent className="p-6">
                        {/* Metadata */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          {post.tags[0] && (
                            <>
                              <Badge className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                                {post.tags[0]}
                              </Badge>
                              <span>•</span>
                            </>
                          )}
                          <span className="text-base">☕</span>
                          <span>{post.readTime}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>

                        {/* Date */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{post.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Latest Newsletter Archive */}
        <section className="py-16">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">
              {selectedPersona ? `For ${selectedPersona}s 🎯` : 'Fresh Off the Press 📰'}
            </h2>
            
            {latestPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  No newsletters match your selection. Try a different persona!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {latestPosts.map((post: any) => (
                  <Link key={post.slug} href={`/newsletter/${post.slug}`}>
                    <Card className="group overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-blue-500 transition-all duration-300 bg-white dark:bg-gray-900">
                      <div className="flex flex-col md:flex-row">
                        {/* Thumbnail */}
                        {post.image && (
                          <div className="md:w-80 aspect-video md:aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <CardContent className="flex-1 p-6">
                          {/* Metadata */}
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            {post.tags[0] && (
                              <>
                                <Badge className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                                  {post.tags[0]}
                                </Badge>
                                <span>•</span>
                              </>
                            )}
                            <span className="text-base">☕</span>
                            <span>{post.readTime}</span>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          {/* Footer */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>{post.date}</span>
                            </div>
                            
                            <div className="flex gap-2">
                              {post.tags.slice(1, 3).map((tag: string) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
          <div className="container max-w-3xl">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Want This in Your Inbox?
              </h2>
              <p className="text-xl text-white/90">
                Every week, the best AI tools and strategies for agencies. No spam. No BS. Just what actually works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
                <Link href="/#subscribe" className="flex-1">
                  <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                    Subscribe Now
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-white/80">
                Join 500+ agencies who get it first ⚡
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
