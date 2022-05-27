import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import style from './userProfile.module.scss';

import { Button } from 'components/common/button/Button';
import { Loader } from 'components/common/loader/Loader';
import { Title } from 'components/common/title/Title';
import { Post } from 'components/userInfo/Posts/post/Post';
import { MyNumber } from 'enum/Number';
import { selectError } from 'redux/selectors/selectError';
import { selectStatus } from 'redux/selectors/selectStatus';
import { PostType, UserType } from 'redux/types';

type UserProfileType = {
  user: UserType;
  posts: PostType[];
  postId: number;
};
export const UserProfile: FC<UserProfileType> = ({
  posts,
  user,
  postId,
}: UserProfileType) => {
  const { name, company, username, email, phone, website, id } = user;
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const showPartPosts = posts.slice(MyNumber.Zero, MyNumber.Three);

  if (status === 'loading') {
    return <Loader />;
  }
  return (
    <div className={style.userProfile}>
      <div className={style.container}>
        <div className={style.mainInfo}>
          <h2 className={style.userName}>{username}</h2>
          <ul className={style.list}>
            <li>{name}</li>
            <li>{email}</li>
            <li>{phone}</li>
            <li>{website}</li>
            <li>
              {company.name}
              {company.bs}
            </li>
          </ul>
        </div>
        <Title title="Посты" />
        {status === 'resolved' && (
          <div className={style.posts}>
            {showPartPosts.map(post => (
              <Post key={post.id} post={post} isAllPosts={false} />
            ))}
          </div>
        )}
        <NavLink to={`/user/${id}/posts`}>
          <Button name="Посмотреть все посты" />
        </NavLink>
        {error && error}
      </div>
    </div>
  );
};
