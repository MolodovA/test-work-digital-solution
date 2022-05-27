import React, { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { UserProfile } from './UserProfile';

import { selectPosts } from 'redux/selectors/selectPosts';
import { selectUser } from 'redux/selectors/selectUser';
import { useAppDispatch } from 'redux/store';
import { getUserPostsTC, getUserTC } from 'redux/thunks/usersTC';

export const UserProfileContainer: FC = () => {
  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserTC(Number(id)));
    dispatch(getUserPostsTC(Number(id)));
  }, []);

  return (
    <div>
      <UserProfile user={user} posts={posts} postId={Number(id)} />
    </div>
  );
};
