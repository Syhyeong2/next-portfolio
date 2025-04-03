// components/MarkdownRenderer.tsx
"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // 유튜브나 일반 비디오에 대한 커스텀 렌더링 처리
          iframe: ({ node, ...props }) => (
            <div className="video-wrapper my-4">
              <iframe {...props} className="w-full aspect-video rounded-lg" />
            </div>
          ),
          video: ({ node, ...props }) => (
            <div className="video-wrapper my-4">
              <video {...props} controls className="w-full rounded-lg" />
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
