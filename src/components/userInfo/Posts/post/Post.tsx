import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import style from './post.module.scss';

import { Button } from 'components/common/button/Button';
import { PostType } from 'redux/types';

type PostPropsType = {
  post: PostType;
  isAllPosts: boolean;
  isShowFullText?: boolean;
  userId?: number;
};
export const Post: FC<PostPropsType> = ({
  post,
  isAllPosts,
  isShowFullText,
  userId,
}: PostPropsType) => {
  const { title, body, id } = post;

  if (isAllPosts) {
    return (
      <div className={`${style.post} ${style.postAll}`}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.text}>{body}</div>
        <Link to={`/user/${userId}/posts/${id}`}>
          <Button name="Открыть полностью" />
        </Link>
      </div>
    );
  }

  return (
    <div className={style.post}>
      <h3 className={style.title}>{title}</h3>
      <div className={isShowFullText ? '' : style.text}>{body}</div>
    </div>
  );
};
