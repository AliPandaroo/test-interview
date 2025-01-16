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
    </div>
  );
};

export default SingleComment;
