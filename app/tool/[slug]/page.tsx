import { Metadata } from 'next'
import Link from 'next/link'
import toolsData from '@/data/tools.json'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

// Type for our tool data
type Tool = {
  name: string
  slug: string
  description: string
  longDescription?: string
  pricing: string
  website: string
  affiliate?: string
  features?: string[]
  pros?: string[]
  cons?: string[]
  rating?: number
  ratingCount?: number
  andysTake?: {
    snippet?: string
    mainTake?: string
    verdict?: string
    personalExperience?: string
    clientResults?: string
    bestFor?: string
    skipIf?: string
  }
}

// Generate static paths for all tools
export async function generateStaticParams() {
  return toolsData.map((tool: any) => ({
    slug: tool.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const tool = toolsData.find((t: any) => t.slug === slug) as Tool | undefined
  
  if (!tool) {
    return {
      title: 'Tool Not Found',
    }
  }

  return {
    title: `${tool.name} Review 2025 - AgencyAI.tools`,
    description: tool.description,
  }
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tool = toolsData.find((t: any) => t.slug === slug) as Tool | undefined

  if (!tool) {
    notFound()
  }

  const andysTakeText = typeof tool.andysTake === 'object' && tool.andysTake?.mainTake 
    ? tool.andysTake.mainTake 
    : typeof tool.andysTake === 'string' 
    ? tool.andysTake 
    : null

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to AgencyAI.tools
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{tool.name} Review 2025</h1>
        
        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-8 text-gray-600">
          {tool.rating && (
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span>{tool.rating}/5</span>
              {tool.ratingCount && <span>({tool.ratingCount} reviews)</span>}
            </div>
          )}
          <span>{tool.pricing}</span>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-700 mb-8">{tool.description}</p>

        {/* Andy's Take Snippet */}
        {tool.andysTake?.snippet && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <h2 className="text-lg font-semibold mb-2">Andy's Take</h2>
            <p className="text-gray-800">{tool.andysTake.snippet}</p>
          </div>
        )}

        {/* What It Does */}
        {tool.longDescription && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What It Does</h2>
            <div className="prose max-w-none text-gray-700">
              <ReactMarkdown 
                components={{
                  h2: ({node, ...props}) => <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900" {...props} />,
                  h3: ({node, ...props}) => <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-900" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 text-gray-700" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-semibold text-gray-900" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-1" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />,
                }}
              >
                {tool.longDescription}
              </ReactMarkdown>
            </div>
          </section>
        )}

        {/* Andy's Full Take */}
        {andysTakeText && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Andy's Honest Take</h2>
            <div className="prose max-w-none text-gray-700">
              <ReactMarkdown 
                components={{
                  h2: ({node, ...props}) => <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900" {...props} />,
                  h3: ({node, ...props}) => <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-900" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 text-gray-700" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-semibold text-gray-900" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-1" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />,
                }}
              >
                {andysTakeText}
              </ReactMarkdown>
            </div>
          </section>
        )}

        {/* Features */}
        {tool.features && tool.features.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {tool.features.map((feature, i) => (
                <li key={i} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Pricing */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <p className="text-lg text-gray-700">{tool.pricing}</p>
        </section>

        {/* Pros & Cons */}
        {(tool.pros || tool.cons) && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Pros & Cons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tool.pros && tool.pros.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">Pros</h3>
                  <ul className="space-y-2">
                    {tool.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {tool.cons && tool.cons.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-red-700 mb-3">Cons</h3>
                  <ul className="space-y-2">
                    {tool.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-gray-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Bottom Line */}
        {tool.andysTake?.verdict && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Bottom Line</h2>
            <p className="text-gray-700">{tool.andysTake.verdict}</p>
          </section>
        )}

        {/* CTA */}
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <a
            href={tool.affiliate || tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Visit {tool.name} →
          </a>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>© 2025 AgencyAI.tools - AI Tools for Agencies</p>
        </div>
      </footer>
    </div>
  )
}
