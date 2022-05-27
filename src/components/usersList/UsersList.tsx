import React, { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';

import style from './userList.module.scss';

import { Loader } from 'components/common/loader/Loader';
import { User } from 'components/usersList/user/User';
import { selectError } from 'redux/selectors/selectError';
import { selectStatus } from 'redux/selectors/selectStatus';
import { selectUsers } from 'redux/selectors/selectUsers';
import { useAppDispatch } from 'redux/store';
import { usersTC } from 'redux/thunks/usersTC';

export const UsersList: FC = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(selectUsers);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(usersTC());
  }, []);

  if (status === 'loading') {
    return <Loader />;
  }
  return (
    <section className={style.usersList}>
      <div className={style.usersListInfo}>
        <h2 className={style.title}>Купили билеты</h2>
        <div className={style.count}>
          {users.length}/<span>100</span>
        </div>
      </div>
      {error && error}
      <div className={style.users}>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};
