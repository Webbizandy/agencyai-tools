import Link from 'next/link'
import toolsData from '@/data/tools.json'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">AgencyAI.tools</h1>
          <p className="text-gray-600 mt-2">The AI Stack for Agencies Who Actually Want to Make Money</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">All Tools ({toolsData.length})</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsData.map((tool: any) => (
            <Link
              key={tool.slug}
              href={`/tool/${tool.slug}`}
              className="border rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{tool.pricing}</span>
                {tool.rating && (
                  <span className="text-yellow-500">★ {tool.rating}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>© 2025 AgencyAI.tools - AI Tools for Agencies</p>
        </div>
      </footer>
    </div>
  )
}
