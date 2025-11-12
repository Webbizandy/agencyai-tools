// Category-based border colors for tool cards
export const categoryBorderColors: Record<string, string> = {
  "Chatbots": "#3b82f6", // blue-500
  "Content Creation": "#a855f7", // purple-500
  "Automation": "#22c55e", // green-500
  "Lead Generation": "#f97316", // orange-500
  "Email Outreach": "#ef4444", // red-500
  "Data Enrichment": "#06b6d4", // cyan-500
  "Video Creation": "#ec4899", // pink-500
  "Video Editing": "#6366f1", // indigo-500
  "All-in-One Platform": "#8b5cf6", // violet-500
  "CRM": "#3b82f6", // blue-500
  "Marketing": "#f97316", // orange-500
  "Sales": "#22c55e", // green-500
  "default": "#6b7280" // gray-500
};

export function getCategoryBorderColor(category: string): string {
  return categoryBorderColors[category] || categoryBorderColors.default;
}
