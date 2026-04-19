"use client";

import ReactMarkdown from "react-markdown";

export function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => <p className="mb-4 text-foreground leading-relaxed">{children}</p>,
        h2: ({ children }) => (
          <h2 className="mt-8 mb-3 text-lg font-semibold text-foreground">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-6 mb-2 text-base font-semibold text-foreground">{children}</h3>
        ),
        ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-1 text-foreground">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-1 text-foreground">{children}</ol>,
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="text-foreground underline decoration-muted-foreground hover:decoration-foreground"
          >
            {children}
          </a>
        ),
        code: ({ children }) => (
          <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-sm font-mono">
            {children}
          </code>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
