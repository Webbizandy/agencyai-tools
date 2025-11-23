import { Check, Zap, Shield, Gauge, Globe, Users, BarChart, Lock, Layers, Settings, Workflow, MessageSquare, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  name: string;
  description?: string;
}

interface FeaturesGridProps {
  features: Feature[] | string[];
  toolName: string;
}

// Icon mapping based on feature keywords
const getFeatureIcon = (featureName: string) => {
  const lowerName = featureName.toLowerCase();
  
  if (lowerName.includes('fast') || lowerName.includes('speed') || lowerName.includes('quick')) {
    return <Gauge className="w-6 h-6" strokeWidth={2} />;
  }
  if (lowerName.includes('secure') || lowerName.includes('security') || lowerName.includes('private')) {
    return <Shield className="w-6 h-6" strokeWidth={2} />;
  }
  if (lowerName.includes('global') || lowerName.includes('language') || lowerName.includes('multilingual')) {
    return <Globe className="w-6 h-6" strokeWidth={2} />;
  }
  if (lowerName.includes('team') || lowerName.includes('collaborate') || lowerName.includes('user')) {
    return <Users className="w-6 h-6" strokeWidth={2} />;
  }
  if (lowerName.includes('analytic') || lowerName.includes('report') || lowerName.includes('insight')) {
    return <BarChart className="w-6 h-6" strokeWidth={2} />;
  }
  if (lowerName.includes('chat') || lowerName.includes('message') || lowerName.includes('conversation')) {
    return <MessageSquare className="w-6 h-6" strokeWidth={2} />;
  }
  if (lowerName.includes('workflow') || lowerName.includes('automation') || lowerName.includes('integrate')) {
    return <Workflow className="w-6 h-6" strokeWidth={2} />;
  }
  if (lowerName.includes('custom') || lowerName.includes('setting') || lowerName.includes('config')) {
    return <Settings className="w-6 h-6" strokeWidth={2} />;
  }
  if (lowerName.includes('api') || lowerName.includes('embed') || lowerName.includes('layer')) {
    return <Layers className="w-6 h-6" strokeWidth={2} />;
  }
  if (lowerName.includes('protect') || lowerName.includes('permission') || lowerName.includes('access')) {
    return <Lock className="w-6 h-6" strokeWidth={2} />;
  }
  
  // Default icon
  return <Zap className="w-6 h-6" strokeWidth={2} />;
};

export default function FeaturesGrid({ features, toolName }: FeaturesGridProps) {
  // Normalize features to array of objects
  const normalizedFeatures = features.map(f => 
    typeof f === 'string' ? { name: f, description: '' } : f
  );

  // ChatBase-specific screenshot-focused layout
  if (toolName === "ChatBase") {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          
          {/* Feature 1: Train Your Bot */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <MessageSquare className="w-10 h-10 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Train Your Bot in Minutes</h3>
                <p className="text-lg text-muted-foreground">
                  Upload any content and ChatBase learns it instantly. No manual training, no keyword mapping.
                </p>
              </div>
            </div>
            
            <img 
              src="/screenshots/chatbase-upload-interface.jpg" 
              alt="ChatBase content upload interface"
              className="w-full rounded-lg shadow-xl mb-6"
            />
            
            <div className="grid md:grid-cols-3 gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div>
                <h4 className="font-semibold mb-2">📄 Multiple Sources</h4>
                <p className="text-sm text-muted-foreground">PDFs, Word docs, text files, FAQs - drag and drop or paste URLs</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🌐 Website Crawling</h4>
                <p className="text-sm text-muted-foreground">Enter a URL, ChatBase crawls and learns your entire site structure</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📚 Massive Capacity</h4>
                <p className="text-sm text-muted-foreground">Up to 11 million characters (~5,000 pages of content)</p>
              </div>
            </div>
          </div>

          {/* Feature 2: White-Label & Customization */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <Palette className="w-10 h-10 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">White-Label & Customization</h3>
                <p className="text-lg text-muted-foreground">
                  Make it yours. Remove all ChatBase branding and create a bot that matches your (or your client's) brand perfectly.
                </p>
              </div>
            </div>
            
            <img 
              src="/screenshots/chatbase-customization.jpg" 
              alt="ChatBase customization and white-label options"
              className="w-full rounded-lg shadow-xl mb-6"
            />
            
            <div className="grid md:grid-cols-4 gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div>
                <h4 className="font-semibold mb-2">🎨 Full Branding</h4>
                <p className="text-sm text-muted-foreground">Logo, colors, fonts - complete visual control</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔗 Custom Domain</h4>
                <p className="text-sm text-muted-foreground">chat.youragency.com - your domain, not theirs</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💬 Personality</h4>
                <p className="text-sm text-muted-foreground">Set tone, language style, and custom instructions</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🎭 No Attribution</h4>
                <p className="text-sm text-muted-foreground">Zero ChatBase branding - clients never know</p>
              </div>
            </div>
          </div>

          {/* Feature 3: Multi-Channel Deployment */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <Zap className="w-10 h-10 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Multi-Channel Deployment</h3>
                <p className="text-lg text-muted-foreground">
                  Deploy anywhere your customers are. One bot, multiple channels, zero extra work.
                </p>
              </div>
            </div>
            
            <img 
              src="/screenshots/chatbase-integrations.jpg" 
              alt="ChatBase integration and deployment options"
              className="w-full rounded-lg shadow-xl mb-6"
            />
            
            <div className="grid md:grid-cols-3 gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div>
                <h4 className="font-semibold mb-2">💻 Website Widget</h4>
                <p className="text-sm text-muted-foreground">Copy/paste embed code - live in 30 seconds</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📱 Slack & WhatsApp</h4>
                <p className="text-sm text-muted-foreground">Meet customers where they already are</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔌 API & Zapier</h4>
                <p className="text-sm text-muted-foreground">Connect to 5,000+ apps via API or Zapier</p>
              </div>
            </div>
            
            <Card className="mt-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">💰 Lead Capture Built-In</p>
                <p className="text-sm text-blue-800 dark:text-blue-200">Enable "collect email before answering" and every question becomes a qualified lead</p>
              </CardContent>
            </Card>
          </div>

          {/* Feature 4: Analytics & Optimization */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <BarChart className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Analytics & Continuous Improvement</h3>
                <p className="text-lg text-muted-foreground">
                  See what customers ask, track accuracy, and improve your bot based on real data.
                </p>
              </div>
            </div>
            
            <img 
              src="/screenshots/chatbase-dashboard.png" 
              alt="ChatBase analytics dashboard"
              className="w-full rounded-lg shadow-xl mb-6"
            />
            
            <div className="grid md:grid-cols-3 gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div>
                <h4 className="font-semibold mb-2">📊 Conversation Tracking</h4>
                <p className="text-sm text-muted-foreground">Every chat logged - see exactly what users ask and how the bot responds</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🎯 Content Gap Analysis</h4>
                <p className="text-sm text-muted-foreground">Identify questions the bot can't answer yet - then add that content</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🌍 Multi-Language</h4>
                <p className="text-sm text-muted-foreground">Automatically responds in 80+ languages - no setup required</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default grid layout for other tools
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Key Features of {toolName}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about what makes {toolName} powerful for your business
          </p>
        </div>

        {/* Features Grid - Neil's style: soft backgrounds, no borders */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {normalizedFeatures.map((feature, idx) => {
            const featureName = feature.name;
            const icon = getFeatureIcon(featureName);
            
            return (
              <div 
                key={idx}
                className="bg-[#F7F8F9] dark:bg-gray-800 rounded-2xl p-6 border border-gray-200/60 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
                    <div className="text-white">
                      {icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight pt-2">
                    {featureName}
                  </h3>
                </div>
                
                {/* Description if available */}
                {feature.description && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-16">
                    {feature.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFF2EF] dark:bg-gray-800 rounded-xl border border-orange-200/60 dark:border-gray-700/50">
            <Check className="w-5 h-5 text-emerald-500" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              All features included in free trial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
