import Link from "next/link";
import { getAllPosts } from "@/lib/writings";
import Header from "@/components/header";

export const metadata = {
  title: "Writings | Anthony Ham",
  description: "Blog posts and notes.",
};

export default function WritingsPage() {
  const posts = getAllPosts();

  return (
    <div className="relative flex justify-center min-h-screen w-full font-sans px-4">
      <div className="flex z-20 flex-col w-full max-w-2xl py-10">
        <Header />
        <main className="mt-10">
          <h1 className="text-2xl font-semibold text-foreground mb-2">Writings</h1>
          <p className="text-muted-foreground mb-8">
            Occasional posts and notes.
          </p>
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No posts yet.</p>
          ) : (
            <ul className="space-y-6">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/writings/${post.slug}`}
                    className="block group rounded-lg border border-border bg-card/50 p-4 transition hover:bg-muted/50 hover:border-white/15"
                  >
                    <h2 className="text-lg font-medium text-foreground group-hover:underline">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                    <time className="mt-2 inline-block text-xs text-muted-foreground">
                      {post.date}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </main>
      </div>
    </div>
  );
}
