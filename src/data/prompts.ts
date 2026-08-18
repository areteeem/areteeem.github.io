export type Prompt = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  usageNote: string;
  updatedAt: string;
  promptUrl: string;
};

export const prompts: Prompt[] = [
  { id: "opportunity-scout", slug: "opportunity-scout", title: "Opportunity Scout", description: "Finds high-value programs I can actually apply to, with strict age, funding and eligibility checks.", category: "Opportunities", tags: ["education", "stem", "business", "ukraine", "scholarships", "research"], usageNote: "Use for recurring searches for camps, academic programs, entrepreneurship programs, research opportunities, competitions and fully funded international programs.", updatedAt: "2026-08-18", promptUrl: "/prompts/opportunity-scout.txt" },
  { id: "hackathon-watcher", slug: "hackathon-watcher", title: "Hackathon Watcher", description: "Checks for newly opened online hackathons that teenagers can actually enter.", category: "Hackathons", tags: ["hackathons", "software", "AI", "web", "students"], usageNote: "Useful as a recurring monitor rather than a one-time search.", updatedAt: "2026-08-18", promptUrl: "/prompts/hackathon-watcher.txt" },
  { id: "inbox-zero-manager", slug: "inbox-zero-manager", title: "Inbox Zero Manager", description: "Turns an overloaded inbox into a small queue of messages that actually need attention.", category: "Email", tags: ["gmail", "productivity", "inbox-zero", "automation"], usageNote: "Designed for an AI agent with access to email management tools.", updatedAt: "2026-08-18", promptUrl: "/prompts/inbox-zero-manager.txt" },
  { id: "idea-stress-test", slug: "idea-stress-test", title: "Idea Stress Test", description: "Challenges a product idea before it is built, looking for realistic weak assumptions and failure modes.", category: "Research", tags: ["product", "startup", "validation", "risk", "review"], usageNote: "Use before committing substantial time or engineering effort to a new product idea.", updatedAt: "2026-08-18", promptUrl: "/prompts/idea-stress-test.txt" },
];
