import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/writings";
import Header from "@/components/header";
import { MarkdownContent } from "./markdown-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = getAllPosts().map((p) => p.slug);
  return slugs.map((slug) => ({ slug }));
}

export default async function WritingPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="relative flex justify-center min-h-screen w-full font-sans px-4">
      <div className="flex z-20 flex-col w-full max-w-2xl py-10">
        <Header />
        <article className="mt-10">
          <Link
            href="/writings"
            className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
          >
            ← Writings
          </Link>
          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
              {post.title}
            </h1>
            <time className="text-sm text-muted-foreground mt-2 block">
              {post.date}
            </time>
          </header>
          <div className="max-w-none">
            <MarkdownContent content={post.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
