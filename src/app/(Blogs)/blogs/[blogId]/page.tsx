import BlogCard from '@/components/Cards/BlogCard';
import React from 'react';
interface PageProps {
  params: {
    blogId: string;
  };
}
const SingleBlog: React.FC<PageProps> = ({ params: { blogId } }) => {
  return (
    <div>
      <h1>blog {blogId}</h1>
      <BlogCard
        body='ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
        title='eum et est occaecati'
        id={blogId}
        userId={23}
      />
    </div>
  );
};

export default SingleBlog;
