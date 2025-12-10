import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

const BlogPost = ({ slug }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((response) => response.text())
      .then((text) => {
        const { content } = matter(text);
        setContent(content);
      });
  }, [slug]);

  return (
    <div className="blog-post">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;