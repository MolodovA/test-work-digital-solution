import React, { FC } from 'react';

import { Routes, Route } from 'react-router-dom';

import { Main } from 'components/main/Main';
import { PostFullInfo } from 'components/userInfo/Posts/fullPost/PostFullInfo';
import { Posts } from 'components/userInfo/Posts/Posts';
import { UserProfileContainer } from 'components/userInfo/UserProfileContainer';
import { PATH } from 'enum/PATH';

export const Routers: FC = () => (
  <Routes>
    <Route path={PATH.MAIN} element={<Main />} />
    <Route path={PATH.USER_PROFILE_CONTAINER} element={<UserProfileContainer />}>
      <Route path={PATH.USER_PROFILE_CONTAINER_ID} element={<UserProfileContainer />} />
    </Route>
    <Route path={PATH.USER_ID_POSTS} element={<Posts />} />
    <Route path={PATH.USER_ID_POSTS_ID_FULL_INFO} element={<PostFullInfo />} />
  </Routes>
);
