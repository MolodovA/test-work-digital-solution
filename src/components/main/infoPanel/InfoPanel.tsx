import React, { FC } from 'react';

import style from './infoPanel.module.scss';

import { About } from 'components/main/infoPanel/about/About';
import { AboutGroup } from 'components/main/infoPanel/aboutGroup/AboutGroup';
import { UsersList } from 'components/usersList/UsersList';

export const InfoPanel: FC = () => (
  <section className={style.infoPanel}>
    <div className={style.container}>
      <UsersList />
      <About />
      <AboutGroup />
    </div>
  </section>
);
