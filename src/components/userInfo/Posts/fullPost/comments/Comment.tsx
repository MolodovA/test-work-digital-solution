import React, { FC } from 'react';

import style from 'components/userInfo/Posts/fullPost/comments/comment.module.scss';
import { CommentType } from 'redux/types';

type CommentPropsType = {
  comment: CommentType;
};
export const Comment: FC<CommentPropsType> = ({ comment }: CommentPropsType) => {
  const { email, name, body } = comment;

  return (
    <div className={style.comment}>
      <div className={style.name}>{name}</div>
      <div className={style.email}>{email}</div>
      <div className={style.text}>{body}</div>
    </div>
  );
};
