import fs from "fs";
import path from "path";
import matter from "gray-matter";

const WRITINGS_DIR = path.join(process.cwd(), "content", "writings");

export type WritingPost = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
};

function getSlugs(): string[] {
  if (!fs.existsSync(WRITINGS_DIR)) return [];
  return fs
    .readdirSync(WRITINGS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): Omit<WritingPost, "content">[] {
  const slugs = getSlugs();
  const posts = slugs
    .map((slug) => {
      const fullPath = path.join(WRITINGS_DIR, `${slug}.md`);
      const raw = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: (data.title as string) ?? slug,
        date: (data.date as string) ?? "",
        excerpt: (data.excerpt as string) | undefined,
      };
    })
    .sort((a, b) => (b.date > a.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(slug: string): WritingPost | null {
  const fullPath = path.join(WRITINGS_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? "",
    excerpt: (data.excerpt as string) | undefined,
    content,
  };
}
