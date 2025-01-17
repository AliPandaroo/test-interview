'use client';

import CommentCard from '@/components/Cards/CommentCard';
import { useFetch } from '@/hooks/useFetch';
import React, { useEffect, useState } from 'react';
interface CommentPageProps {
  params: Promise<{ blogId: string; commentId: string }>; // if dont use Promise, it will throw error on npm run build
}
const SingleComment: React.FC<CommentPageProps> = ({ params }) => {
  const [blogId, setBlogId] = useState<string | null>(null); // should have state when its promis async
  const [commentId, setCommentId] = useState<string | null>(null); // should have state when its promis async

  useEffect(() => {
    const fetchParams = async () => {
      const { blogId, commentId } = await params;
      setBlogId(blogId);
      setCommentId(commentId);
    };

    fetchParams();
  }, [params]);

  // Fetch Comment
  const {
    data: comment,
    error: commentsError,
    loading: commentsLoading,
  } = useFetch<CommentMessage>('/comments', {
    method: 'GET',
    query: commentId && blogId ? { postId: blogId } : undefined,
  });

  // Render
  if (!commentId) return <p>Loading...</p>;
  if (commentsLoading) return <p>Loading...</p>;
  if (commentsError) return <p>Error: {commentsError}</p>;

  return (
    <div>
      <CommentCard
        id={comment?.id || ''}
        commentId={comment?.id || ''}
        postId={comment?.postId || ''}
        body={comment?.body || ''}
        email={comment?.email || ''}
        name={comment?.name || ''}
      />
    </div>
  );
};

export default SingleComment;
