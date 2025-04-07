// components/MarkdownRenderer.tsx
"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Components } from "react-markdown";
import Image from "next/image";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDarkMode(theme === "dark");
    };

    // Initial check
    updateTheme();

    // Setup observer to watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Define component renderers with theme-aware styles
  const components: Components = {
    // Headers with theme-aware colors
    h1: ({ ...props }) => (
      <h1
        className="text-3xl font-bold mt-8 mb-4 text-base-content border-b pb-2 border-base-300"
        {...props}
      />
    ),
    h2: ({ ...props }) => (
      <h2
        className="text-2xl font-bold mt-6 mb-3 text-base-content border-b pb-1 border-base-300"
        {...props}
      />
    ),
    h3: ({ ...props }) => (
      <h3
        className="text-xl font-bold mt-4 mb-2 text-base-content"
        {...props}
      />
    ),
    h4: ({ ...props }) => (
      <h4
        className="text-lg font-bold mt-3 mb-1 text-base-content"
        {...props}
      />
    ),

    // Paragraphs, lists, etc.
    p: ({ ...props }) => (
      <p className="my-4 text-base-content leading-relaxed" {...props} />
    ),
    ul: ({ ...props }) => (
      <ul className="list-disc pl-6 my-4 text-base-content" {...props} />
    ),
    ol: ({ ...props }) => (
      <ol className="list-decimal pl-6 my-4 text-base-content" {...props} />
    ),
    li: ({ ...props }) => <li className="my-1 text-base-content" {...props} />,

    // Links and emphasis
    a: ({ ...props }) => (
      <a
        className="text-primary hover:text-primary-focus underline"
        {...props}
      />
    ),
    strong: ({ ...props }) => (
      <strong className="font-bold text-base-content" {...props} />
    ),
    em: ({ ...props }) => (
      <em className="italic text-base-content" {...props} />
    ),

    // Code blocks with enhanced styling
    code: ({ className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      const isInline = !match;
      return (
        <code
          className={`${className || ""} ${
            isInline
              ? "bg-base-200 text-base-content px-1.5 py-0.5 rounded text-sm font-mono"
              : "bg-base-300 text-base-content font-mono"
          }`}
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: ({ ...props }) => (
      <pre
        className="bg-base-300 text-base-content p-4 rounded-lg overflow-x-auto my-4 font-mono"
        {...props}
      />
    ),

    // Block elements
    blockquote: ({ ...props }) => (
      <blockquote
        className="border-l-4 border-primary pl-4 italic bg-base-200 p-3 rounded-r-lg my-4 text-base-content"
        {...props}
      />
    ),

    // Tables with enhanced styling
    table: ({ ...props }) => (
      <div className="overflow-x-auto my-4">
        <table
          className="table table-zebra border border-base-300 rounded-lg w-full"
          {...props}
        />
      </div>
    ),
    thead: ({ ...props }) => (
      <thead className="bg-base-200 text-base-content" {...props} />
    ),
    th: ({ ...props }) => (
      <th className="border border-base-300 px-4 py-2 text-left" {...props} />
    ),
    td: ({ ...props }) => (
      <td className="border border-base-300 px-4 py-2" {...props} />
    ),

    // Media
    img: ({ src, alt }) => {
      if (!src) return null;

      // Using fallback image dimensions for Next.js Image
      return (
        <div className="relative max-w-full h-auto my-4 mx-auto">
          <Image
            src={src}
            alt={alt || "Markdown content image"}
            width={800}
            height={600}
            className="rounded-lg"
            style={{ objectFit: "contain" }}
            unoptimized={true} // For external URLs
          />
        </div>
      );
    },
    iframe: ({ ...props }) => (
      <div className="video-wrapper my-4 rounded-lg overflow-hidden border border-base-300">
        <iframe
          {...props}
          className="w-full aspect-video rounded-lg"
          allowFullScreen
        />
      </div>
    ),
    video: ({ ...props }) => (
      <div className="video-wrapper my-4 rounded-lg overflow-hidden border border-base-300">
        <video {...props} controls className="w-full rounded-lg" />
      </div>
    ),
  };

  if (!mounted) {
    // Return a skeleton or basic version while client-side rendering is happening
    return <div className="animate-pulse bg-base-200 h-96 rounded-lg" />;
  }

  return (
    <div
      className={`markdown-content bg-transparent ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
