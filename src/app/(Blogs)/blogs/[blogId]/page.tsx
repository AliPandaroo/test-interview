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
    </div>
  );
};

export default SingleBlog;
