import React, { FC } from 'react';

import style from 'components/main/infoPanel/aboutGroup/aboutGroup.module.scss';

export const AboutGroup: FC = () => (
  <section className={style.aboutGroup}>
    <div className={style.row}>
      <div className={style.columnS}>
        <h2 className={style.title}>О группе</h2>
      </div>
      <div className={style.column}>
        <p>
          Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа
          образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша
          Дана. Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и
          Regional at Best в 2011.
        </p>
      </div>
    </div>
  </section>
);
