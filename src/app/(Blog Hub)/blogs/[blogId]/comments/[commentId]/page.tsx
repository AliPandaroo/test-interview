import CommentCard from '@/components/Cards/CommentCard';
import React from 'react';
interface PageProps {
  params: {
    blogId: string;
    commentId: string;
  };
}
const SingleComment: React.FC<PageProps> = ({
  params: { blogId, commentId },
}) => {
  return (
    <div>
      <h1>
        blog {blogId} comment {commentId}
      </h1>

      <CommentCard
        content='ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
        author={{ authorID: 22, name: 'eum et est occaecati' }}
        commentId={blogId}
        createdAt={'new Date().toLocaleDateString()'}
      />
    </div>
  );
};

export default SingleComment;
