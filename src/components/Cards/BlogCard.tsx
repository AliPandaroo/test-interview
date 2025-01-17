'use client';
import '@/ui/global.scss';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Modal from '@/lib/utils/Modal';
import axios from 'axios';
const BlogCard: React.FC<Blog & { refetch: () => void }> = ({
  userId,
  id,
  title,
  body,
  refetch,
}) => {
  let author: Author | undefined;
  let subject = title;
  let script = body;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteBlog = async () => {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`
    );

    console.log({ response });
    setIsOpen(false);
    refetch();
  };
  return (
    <React.Fragment>
      <div
        className={classNames(
          'rounded-2xl bg-white/10 p-2',
          'border-[0.5px] border-solid border-transparent',
          'flex !h-fit flex-col gap-2',
          'hover:!border-gray-600hover:drop-shadow-md hover:scale-[1.02]',
          'transition-all duration-200 ease-in-out',
          'md:',
          'lg:',
          'xl:',
          {}
        )}
      >
        <h2
          className={classNames(
            'text-lg font-bold leading-[1.2] text-gray-100',
            'selection:bg-gray-700 selection:!text-white',
            '',
            'md:',
            'lg:',
            'xl:',
            {}
          )}
        >
          {subject}
        </h2>
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
          {script}
        </p>

        <div className={classNames('', '', 'md:', 'lg:', 'xl:', {})}>
          {author && <img src={author?.profileImage} alt='' />}
          <span>
            AuthorID: <span className='text-green-500'>{userId}</span>
          </span>
          <span className='mx-2'>
            BlogID: <span className='text-green-500'>{id}</span>
          </span>
        </div>

        <div className='cursor-pointer self-end *:cursor-pointer'>
          <Icon
            onClick={() => setIsOpen(true)}
            icon='mdi-light:delete'
            height='32'
          />
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1 className={classNames('text-gray-900')}>Modal</h1>
        <p className={classNames('mb-6 text-gray-700')}>
          Are you sure you want to delete this item?
        </p>
        <div
          className={classNames(
            'flex w-fit items-center justify-end gap-3 self-end',
            '',
            'md:',
            'lg:',
            'xl:',
            {}
          )}
        >
          <button
            className={classNames(
              'rounded-xl p-2 text-gray-950 drop-shadow-md',
              'flex items-center justify-center gap-1',
              'hover: hover:!bg-gray-600/10 hover:!px-3',
              'transition-all duration-200 ease-in-out',
              'md:',
              'lg:',
              'xl:',
              {}
            )}
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className={classNames(
              'rounded-xl bg-red-500/50 p-2 text-white drop-shadow-md',
              'flex items-center justify-center gap-1',
              'hover: hover:!bg-red-500 hover:!px-3',
              'transition-all duration-200 ease-in-out',
              'md:',
              'lg:',
              'xl:',
              {}
            )}
            onClick={handleDeleteBlog}
          >
            Delete
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default BlogCard;
