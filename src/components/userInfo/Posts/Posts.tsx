import React, { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import style from './posts.module.scss';

import { Loader } from 'components/common/loader/Loader';
import { Title } from 'components/common/title/Title';
import { Post } from 'components/userInfo/Posts/post/Post';
import { selectError } from 'redux/selectors/selectError';
import { selectStatus } from 'redux/selectors/selectStatus';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { getUserPostsTC } from 'redux/thunks/usersTC';
import { PostType } from 'redux/types';

export const Posts: FC = () => {
  const posts = useAppSelector(state => state.usersReducer.posts);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { id } = useParams();
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(getUserPostsTC(Number(id)));
  }, []);

  if (status === 'loading') {
    return <Loader />;
  }
  return (
    <div>
      <div className={style.postsList}>
        <div className={style.container}>
          <Title title="Посты" />
          {posts.map((post: PostType) => (
            <Post
              post={post}
              key={post.id}
              userId={Number(id)}
              isAllPosts={location.pathname.includes('posts')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
