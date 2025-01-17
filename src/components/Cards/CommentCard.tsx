import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

const CommentCard: React.FC<CommentMessage> = ({
  commentId,
  postId,
  name,
  email,
  body,
}) => {
  return (
    <React.Fragment>
      <div
        className={classNames(
          'overflow-hidden rounded-2xl bg-white/10 p-2',
          'border-[0.5px] border-solid border-transparent',
          'flex h-fit flex-col gap-2',
          'hover:!bg-white/20 hover:drop-shadow-md',
          'transition-all duration-200 ease-in-out',
          'md:',
          'lg:',
          'xl:',
          {}
        )}
      >
        <p
          className={classNames(
            'text-justify text-sm font-extralight text-gray-300',
            'selection:bg-gray-600 selection:!text-white',
            '',
            'md:',
            'lg:',
            'xl:',
            {}
          )}
        >
          {body}
        </p>
        <div className='flex flex-wrap items-center justify-start gap-x-2 gap-y-0.5'>
          <span className='inline-block h-auto select-none rounded-full bg-gray-500/20 px-2 pb-0.5 text-sm font-medium leading-[inherit]'>
            {name}
          </span>

          <Link
            className={classNames(
              'underline-offset-6 text-xsm font-thin text-blue-200 transition-all duration-200 ease-in-out hover:text-blue-400 hover:underline'
            )}
            href={`mailto:${email}`}
          >
            {email}
          </Link>
        </div>
        <div className={classNames('', '', 'md:', 'lg:', 'xl:', {})}>
          <span>
            BlogID: <span className='text-green-500'>{postId}</span>
          </span>
          <span className='mx-2'>
            commentID: <span className='text-green-500'>{commentId}</span>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommentCard;
