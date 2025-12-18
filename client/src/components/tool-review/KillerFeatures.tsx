// /client/src/components/tool-review/KillerFeatures.tsx
interface Feature {
  title: string;
  content: string;
  image: string;
  imagePosition: 'left' | 'right';
}

interface KillerFeaturesProps {
  features: Feature[];
}

export default function KillerFeatures({ features }: KillerFeaturesProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">The 3 Killer Features</h2>
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${feature.imagePosition === 'right' ? '' : 'md:grid-flow-row-dense'}`}>
              <div className={feature.imagePosition === 'right' ? '' : 'md:col-start-2'}>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.content}</p>
              </div>
              <div className={`flex items-center justify-center ${feature.imagePosition === 'right' ? '' : 'md:col-start-1'}`}>
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="rounded-lg shadow-lg w-full h-auto max-w-md"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
