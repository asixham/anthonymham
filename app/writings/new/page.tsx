"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/header";

const UNLOCK_KEY = "writings-new-unlocked";

export default function NewWritingPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(UNLOCK_KEY) === "1");
    setMounted(true);
  }, []);

  const handleUnlock = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      const correct =
        process.env.NEXT_PUBLIC_WRITINGS_NEW_PASSWORD ?? "write";
      if (password === correct) {
        if (typeof window !== "undefined") sessionStorage.setItem(UNLOCK_KEY, "1");
        setUnlocked(true);
      } else {
        setError("Incorrect password.");
      }
    },
    [password]
  );

  if (!mounted) {
    return (
      <div className="relative flex justify-center min-h-screen w-full font-sans px-4">
        <div className="flex z-20 flex-col w-full max-w-2xl py-10">
          <Header />
          <main className="mt-10 flex items-center justify-center min-h-[200px]">
            <span className="text-muted-foreground">Loading...</span>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex justify-center min-h-screen w-full font-sans px-4">
      <div className="flex z-20 flex-col w-full max-w-2xl py-10">
        <Header />
        <main className="mt-10">
          <Link
            href="/writings"
            className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
          >
            ← Writings
          </Link>

          {!unlocked ? (
            <div className="max-w-sm">
              <h1 className="text-xl font-semibold text-foreground mb-2">
                New post
              </h1>
              <p className="text-muted-foreground text-sm mb-4">
                This page is password-protected. Enter the password to continue.
              </p>
              <form onSubmit={handleUnlock} className="space-y-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  autoFocus
                />
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90"
                >
                  Continue
                </button>
              </form>
            </div>
          ) : (
            <NewPostForm />
          )}
        </main>
      </div>
    </div>
  );
}

function NewPostForm() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [date, setDate] = useState(() =>
    new Date().toISOString().slice(0, 10)
  );
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = useCallback(() => {
    const s = slug || title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const md = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
slug: "${s}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
---

${body}`;
    setGenerated(md);
    setSlug((prev) => prev || s);
  }, [title, slug, date, excerpt, body]);

  const copyToClipboard = useCallback(() => {
    if (generated) {
      navigator.clipboard.writeText(generated);
    }
  }, [generated]);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-foreground">New post</h1>
      <p className="text-sm text-muted-foreground">
        Fill in the fields below. Click &quot;Generate markdown&quot; to produce the file content, then copy it and add a new <code className="px-1 py-0.5 rounded bg-muted text-foreground text-xs">.md</code> file in <code className="px-1 py-0.5 rounded bg-muted text-foreground text-xs">content/writings/</code> with that content.
      </p>
      <div className="grid gap-4">
        <label className="block">
          <span className="text-sm text-muted-foreground block mb-1">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Post title"
          />
        </label>
        <label className="block">
          <span className="text-sm text-muted-foreground block mb-1">Slug (URL)</span>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="my-post"
          />
        </label>
        <label className="block">
          <span className="text-sm text-muted-foreground block mb-1">Date</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </label>
        <label className="block">
          <span className="text-sm text-muted-foreground block mb-1">Excerpt (optional)</span>
          <input
            type="text"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Short summary"
          />
        </label>
        <label className="block">
          <span className="text-sm text-muted-foreground block mb-1">Body (markdown)</span>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={12}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Write your post in markdown..."
          />
        </label>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={generate}
          className="px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90"
        >
          Generate markdown
        </button>
        {generated && (
          <button
            type="button"
            onClick={copyToClipboard}
            className="px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted/50"
          >
            Copy to clipboard
          </button>
        )}
      </div>
      {generated && (
        <div className="mt-4">
          <span className="text-sm text-muted-foreground block mb-2">Preview — save as <code className="px-1 py-0.5 rounded bg-muted text-foreground text-xs">{slug || "slug"}.md</code> in content/writings/</span>
          <pre className="p-4 rounded-lg border border-border bg-muted/50 text-foreground text-xs overflow-x-auto whitespace-pre-wrap break-words">
            {generated}
          </pre>
        </div>
      )}
    </div>
  );
}
