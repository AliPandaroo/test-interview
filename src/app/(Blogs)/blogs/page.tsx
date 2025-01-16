import React from 'react';
interface Author {
  authorID: string;
  name: string;
  email?: string;
  profileImage?: string;
}

interface Comment {
  commentId: string;
  content: string;
  author: Author;
  createdAt: string;
}

interface Blog {
  blogId: string;
  subject: string;
  script: string;
  comments?: Comment[];
}
const BlogsPage = () => {
  return (
    <div>
      <h1>Page Blogs</h1>
    </div>
  );
};

export default BlogsPage;
