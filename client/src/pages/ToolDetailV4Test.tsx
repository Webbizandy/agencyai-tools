import { useParams, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import toolsData from "@/data/tools.json";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function ToolDetailV4Test() {
  const params = useParams();
  const slug = params.slug || 'chatbase'; // Fallback for specific route
  const tool = toolsData.find(t => t.slug === slug);

  console.log('=== DEBUG ===');
  console.log('params:', params);
  console.log('slug:', slug);
  console.log('tool found:', !!tool);
  console.log('toolsData length:', toolsData.length);
  
  useDocumentTitle(tool ? `${tool.name} Test - AgencyAI.tools` : "Tool Not Found");

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Tool Not Found</h1>
            <p className="text-gray-600">Slug: "{slug}"</p>
            <p className="text-sm text-gray-500">Params: {JSON.stringify(params)}</p>
            <Link href="/tools">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Browse All Tools
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <article className="flex-1">
        {/* Breadcrumb */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="container">
            <Link href="/tools">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tools
              </Button>
            </Link>
          </div>
        </section>

        {/* Simple Test Content */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {tool.name} V4 Test Page
              </h1>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-xl">{tool.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-lg mb-2">Pricing</h3>
                    <p>{tool.pricing}</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-lg mb-2">Rating</h3>
                    <p>{tool.rating}/5 ({tool.ratingCount} reviews)</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-green-50 border-2 border-green-500 rounded-xl">
                  <h2 className="text-2xl font-bold text-green-800 mb-2">✅ V4 Components Working!</h2>
                  <p className="text-green-700">
                    If you can see this page, the V4 routing is working. 
                    Now loading full components...
                  </p>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <a href={tool.website} target="_blank" rel="noopener noreferrer">
                      Visit {tool.name}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/tools">Back to Tools</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}
