import classNames from 'classnames';
import React from 'react';

const BlogCard: React.FC<Blog> = ({ userId, id, title, body }) => {
  let author: Author | undefined;
  let subject = title;
  let script = body;
  return (
    <React.Fragment>
      <div
        className={classNames(
          'overflow-hidden rounded-2xl bg-white/10 p-2',
          '',
          'md:',
          'lg:',
          'xl:',
          {}
        )}
      >
        <h2
          className={classNames(
            'text-xl font-bold text-white',
            '',
            'md:',
            'lg:',
            'xl:',
            {}
          )}
        >
          {subject}
        </h2>
        <p>{script}</p>

        <div className={classNames('', '', 'md:', 'lg:', 'xl:', {})}>
          {author && <img src={author?.profileImage} alt='' />}
          <span>Author: {userId}</span>
          <span className='mx-2'>ID: {id}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogCard;
