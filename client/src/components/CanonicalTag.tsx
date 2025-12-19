import { Helmet } from "react-helmet";
import { useLocation } from "wouter";

/**
 * CanonicalTag component
 * 
 * Automatically adds a canonical URL tag to the page head.
 * This helps prevent duplicate content issues by telling search engines
 * which version of a URL is the "official" one.
 * 
 * Usage: Add <CanonicalTag /> to any page component
 */
export default function CanonicalTag() {
  const [location] = useLocation();
  
  // Construct the canonical URL
  // Always use non-www and HTTPS as the canonical version
  const canonicalUrl = `https://agencyai.tools${location}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
