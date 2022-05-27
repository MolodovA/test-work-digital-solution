import React, { FC } from 'react';

import style from './header.module.scss';

import { Button } from 'components/common/button/Button';

export const Header: FC = () => (
  <header className={style.header}>
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.logo}>concert club</div>
        <div className={style.buttons}>
          <Button name="версия для слабовидщих" />
          <Button name="мой профиль" />
        </div>
      </div>
    </div>
  </header>
);
