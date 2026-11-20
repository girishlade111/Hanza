import { z } from "zod";
import { personalInfo, type ProjectItem, type ArticleItem } from "../content/profile";

export const PORTFOLIO_FILTER_CATEGORIES = [
  "ALL",
  "DEVELOPER TOOLS",
  "DOCUMENT UTILITIES",
  "MEASUREMENT",
  "GAMES",
] as const;

export const BLOG_FILTER_CATEGORIES = [
  "ALL",
  "DEVELOPER TOOLS",
  "ARCHITECTURE",
  "UI/UX DESIGN",
  "CAREER & CRAFT",
] as const;

export function filterProjectsByCategory(
  projects: ProjectItem[],
  category: string
): ProjectItem[] {
  const normalized = category.trim().toUpperCase();
  if (!normalized || normalized === "ALL") {
    return projects;
  }
  return projects.filter(
    (project) =>
      project.category.toUpperCase() === normalized ||
      project.filterGroup.toUpperCase() === normalized
  );
}

export function getHomeFeaturedProjects(projects: ProjectItem[]): ProjectItem[] {
  return projects.filter((p) => p.homeFeatured);
}

export function getProjectBySlug(
  projects: ProjectItem[],
  slug: string | undefined
): ProjectItem | undefined {
  if (!slug) return undefined;
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(
  projects: ProjectItem[],
  currentSlug: string
): ProjectItem | undefined {
  if (projects.length === 0) return undefined;
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  if (idx === -1) return projects[0];
  return projects[(idx + 1) % projects.length];
}

export function filterArticlesByCategory(
  articles: ArticleItem[],
  category: string
): ArticleItem[] {
  const normalized = category.trim().toUpperCase();
  if (!normalized || normalized === "ALL") {
    return articles;
  }
  return articles.filter((article) => article.category.toUpperCase() === normalized);
}

export function getArticleBySlug(
  articles: ArticleItem[],
  slug: string | undefined
): ArticleItem | undefined {
  if (!slug) return undefined;
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(
  articles: ArticleItem[],
  currentSlug: string,
  limit = 3
): ArticleItem[] {
  const current = getArticleBySlug(articles, currentSlug);
  const others = articles.filter((a) => a.slug !== currentSlug);
  if (!current) return others.slice(0, limit);

  const sameCategory = others.filter((a) => a.category === current.category);
  const differentCategory = others.filter((a) => a.category !== current.category);
  return [...sameCategory, ...differentCategory].slice(0, limit);
}

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters)."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few details about your project (at least 10 characters)."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormValues, string>>;
  data?: ContactFormValues;
}

export function validateContactForm(input: ContactFormValues): ContactValidationResult {
  const parsed = contactFormSchema.safeParse(input);
  if (parsed.success) {
    return { valid: true, errors: {}, data: parsed.data };
  }
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};
  for (const issue of parsed.error.issues) {
    const field = issue.path[0] as keyof ContactFormValues | undefined;
    if (field && !errors[field]) {
      errors[field] = issue.message;
    }
  }
  return { valid: false, errors };
}

export function getAllProjects(): ProjectItem[] {
  return personalInfo.projects;
}

export function getAllArticles(): ArticleItem[] {
  return personalInfo.articles;
}
