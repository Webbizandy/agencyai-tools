// Tag color mapping for consistent styling across the site
export const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  // Categories
  "Chatbots": { bg: "bg-blue-50 dark:bg-blue-950/20", text: "text-blue-700 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800" },
  "Content Creation": { bg: "bg-purple-50 dark:bg-purple-950/20", text: "text-purple-700 dark:text-purple-300", border: "border-purple-200 dark:border-purple-800" },
  "Automation": { bg: "bg-green-50 dark:bg-green-950/20", text: "text-green-700 dark:text-green-300", border: "border-green-200 dark:border-green-800" },
  "Lead Generation": { bg: "bg-orange-50 dark:bg-orange-950/20", text: "text-orange-700 dark:text-orange-300", border: "border-orange-200 dark:border-orange-800" },
  "Email Outreach": { bg: "bg-red-50 dark:bg-red-950/20", text: "text-red-700 dark:text-red-300", border: "border-red-200 dark:border-red-800" },
  "Data Enrichment": { bg: "bg-cyan-50 dark:bg-cyan-950/20", text: "text-cyan-700 dark:text-cyan-300", border: "border-cyan-200 dark:border-cyan-800" },
  "Video Creation": { bg: "bg-pink-50 dark:bg-pink-950/20", text: "text-pink-700 dark:text-pink-300", border: "border-pink-200 dark:border-pink-800" },
  "Video Editing": { bg: "bg-indigo-50 dark:bg-indigo-950/20", text: "text-indigo-700 dark:text-indigo-300", border: "border-indigo-200 dark:border-indigo-800" },
  "All-in-One Platform": { bg: "bg-violet-50 dark:bg-violet-950/20", text: "text-violet-700 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800" },
  
  // Tags
  "White Label": { bg: "bg-purple-50 dark:bg-purple-950/20", text: "text-purple-700 dark:text-purple-300", border: "border-purple-200 dark:border-purple-800" },
  "Easy Setup": { bg: "bg-green-50 dark:bg-green-950/20", text: "text-green-700 dark:text-green-300", border: "border-green-200 dark:border-green-800" },
  "Content": { bg: "bg-blue-50 dark:bg-blue-950/20", text: "text-blue-700 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800" },
  "Marketing": { bg: "bg-orange-50 dark:bg-orange-950/20", text: "text-orange-700 dark:text-orange-300", border: "border-orange-200 dark:border-orange-800" },
  "Integration": { bg: "bg-cyan-50 dark:bg-cyan-950/20", text: "text-cyan-700 dark:text-cyan-300", border: "border-cyan-200 dark:border-cyan-800" },
  "Featured": { bg: "bg-yellow-50 dark:bg-yellow-950/20", text: "text-yellow-700 dark:text-yellow-300", border: "border-yellow-200 dark:border-yellow-800" },
  
  // Default fallback
  "default": { bg: "bg-gray-50 dark:bg-gray-950/20", text: "text-gray-700 dark:text-gray-300", border: "border-gray-200 dark:border-gray-800" }
};

export function getTagColor(tag: string) {
  return tagColors[tag] || tagColors.default;
}
