'use client';

import BlogCard from '@/components/Cards/BlogCard';
import CommentCard from '@/components/Cards/CommentCard';
import { useFetch } from '@/hooks/useFetch';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface PageProps {
  params: { blogId: string };
}

const SingleBlog: React.FC<PageProps> = ({ params: { blogId } }) => {
  const router = useRouter();
  const [displayComments, setDisplayComments] = useState<boolean>(false);

  // Unwrap params
  useEffect(() => {
    // const fetchParams = async () => {
    //   const resolvedParams = await params;
    //   setBlogId(resolvedParams.blogId);
    //   console.log('Resolved Blog ID:', resolvedParams.blogId);
    // };
    // fetchParams();
  }, [blogId]);

  // Fetch blog
  const {
    data: blogData,
    error: blogError,
    loading: blogLoading,
    refetch: refetchBlog,
  } = useFetch<Blog>('/posts', {
    method: 'GET',
    params: blogId ? { id: blogId } : undefined,
  });

  // Fetch comment
  const {
    data: comments,
    error: commentsError,
    loading: commentsLoading,
    refetch: refetchComments,
  } = useFetch<CommentMessage[]>('/comments', {
    method: 'GET',
    query: blogId ? { postId: blogId } : undefined,
  });

  // Combined refetch function
  const refetchData = async () => {
    console.log('Refetching data...');
    await Promise.all([refetchBlog(), refetchComments()]);
    await router.push('/blogs');
  };

  // Render
  if (!blogId) return <p>Loading...</p>;
  if (blogLoading || commentsLoading) return <p>Loading...</p>;
  if (blogError || commentsError)
    return <p>Error: {blogError || commentsError}</p>;

  return (
    <div className=''>
      {/* <h1>Blog {blogId}</h1> */}
      <div className='mx-auto w-fit max-w-[36rem] space-y-2'>
        {blogData && !blogLoading && (
          <div className='w-[95%] md:w-full'>
            <BlogCard
              body={blogData?.body || 'No content available.'}
              title={blogData?.title || 'No title available.'}
              id={blogId}
              userId={blogData?.userId || 23}
              refetch={() => refetchData}
            />
          </div>
        )}
        {blogData && comments && comments.length > 0 && !commentsLoading && (
          <div
            className={classNames(
              'ml-auto flex w-fit items-center justify-center gap-1 rounded-md px-2 py-1 text-white drop-shadow-xl',
              'transition-all duration-500 ease-in-out',
              {
                'bg-[#1f1f1e]': displayComments,
                'bg-[#232323]': !displayComments,
              }
            )}
          >
            <button onClick={() => setDisplayComments((prev) => !prev)}>
              {displayComments ? 'Hide' : 'Show comments'}
            </button>
          </div>
        )}
        {blogData && comments && comments.length > 0 ? (
          <div
            className={classNames(
              'max-w-128 relative grid w-[90%] grid-cols-1 gap-4 overflow-hidden',
              'mx-auto my-2 rounded-2xl p-4',
              'bg-white/[2%]',
              'transition-[max-height] delay-200 duration-500 ease-in-out',
              {
                'max-h-0': !displayComments,
                'max-h-auto': displayComments, // Adjust this value as needed
              }
            )}
          >
            <div
              className={classNames(
                'absolute inset-0 h-full w-full translate-y-0 bg-[#0a0a0a]',
                'transition-all duration-300 ease-in-out',
                {
                  'translate-y-full': displayComments,
                }
              )}
            ></div>
            {comments.map((comment: CommentMessage) => (
              <React.Fragment key={comment.id}>
                <CommentCard
                  id={comment.id}
                  commentId={comment.id}
                  postId={comment.postId}
                  body={comment.body}
                  email={comment.email}
                  name={comment.name}
                ></CommentCard>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <p>No comments available.</p>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
