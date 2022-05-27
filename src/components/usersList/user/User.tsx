import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from './user.module.scss';

import { Button } from 'components/common/button/Button';
import { UserType } from 'redux/types';

type UserTypeProps = {
  user: UserType;
};
export const User: FC<UserTypeProps> = ({ user }: UserTypeProps) => {
  const { name, id, address } = user;

  return (
    <div className={style.user}>
      <div className={style.name}>{name}</div>
      <div className={style.city}>{address.city}</div>
      <div className={style.button}>
        <NavLink to={`/user/${id}`}>
          <Button name="Смотреть профиль" />
        </NavLink>
      </div>
    </div>
  );
};
