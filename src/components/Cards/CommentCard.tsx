import classNames from 'classnames';
import React from 'react';

const CommentCard: React.FC<CommentMessage> = ({
  commentId,
  createdAt,
  content,
  author,
}) => {
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
        <p>{content}</p>
        <strong>{author?.name}</strong> commented at {createdAt}
        <div>
          <span>commentID : {commentId}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommentCard;
