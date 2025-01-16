'use client';

import BlogCard from '@/components/Cards/BlogCard';
import { useFetch } from '@/hooks/useFetch';
import React, { useEffect, useState } from 'react';

interface PageProps {
  params: Promise<{ blogId: string }>;
}

const SingleBlog: React.FC<PageProps> = ({ params }) => {
  const [blogId, setBlogId] = useState<string | null>(null);

  // Unwrap params
  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setBlogId(resolvedParams.blogId);
      console.log('Resolved Blog ID:', resolvedParams.blogId);
    };

    fetchParams();
  }, [params]);

  // const blogUrl = blogId ? `/posts/${blogId}` : '';

  // Fetch blog
  const {
    data: blogData,
    error,
    loading,
  } = useFetch('/posts', {
    method: 'GET',
    params: blogId ? { id: blogId } : undefined,
  });

  // Render
  if (!blogId) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Blog {blogId}</h1>
      <BlogCard
        body={blogData?.body || 'No content available.'}
        title={blogData?.title || 'No title available.'}
        id={blogId}
        userId={blogData?.userId || 23}
      />
    </div>
  );
};

export default SingleBlog;
