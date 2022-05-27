import React, { FC } from 'react';

import style from './app.module.scss';

import { Header } from 'components/header/Header';
import { Routers } from 'components/routes/Routes';

const App: FC = () => (
  <div className={style.wrapper}>
    <Header />
    <div className={style.page}>
      <Routers />
    </div>
  </div>
);

export default App;
