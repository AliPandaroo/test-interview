'use client';

import BlogCard from '@/components/Cards/BlogCard';
import { useFetch } from '@/hooks/useFetch';
import classNames from 'classnames';
import React from 'react';

const BlogsPage = () => {
  // Fetch blogs
  const {
    data: blogs,
    error: blogsError,
    loading: blogsLoading,
    refetch: refetchBlogs,
  } = useFetch<Blog[]>('/posts', {
    method: 'GET',
  });

  if (blogsLoading) return <p>Loading...</p>;
  if (blogsError) return <p>{blogsError}</p>;

  return (
    <div>
      <h1>Page Blogs</h1>

      {!blogsLoading && blogs && blogs.length > 0 ? (
        <div
          className={classNames(
            'max-w-128 grid w-[95%] grid-cols-1 gap-4',
            'mx-auto my-2 rounded-2xl p-4',
            'bg-white/[4%]',
            {}
          )}
        >
          {blogs.map((blog: Blog) => (
            <React.Fragment key={blog.id}>
              <BlogCard
                id={blog?.id}
                body={blog?.body || 'No content available.'}
                title={blog?.title || 'No title available.'}
                userId={blog?.userId || 23}
                refetch={() => refetchBlogs}
              />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p>No Blogs available.</p>
      )}
    </div>
  );
};

export default BlogsPage;
