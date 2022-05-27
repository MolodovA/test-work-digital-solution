import React, { FC } from 'react';

import { Button } from 'components/common/button/Button';
import style from 'components/main/infoPanel/about/about.module.scss';

export const About: FC = () => (
  <section className={style.about}>
    <div className={style.row}>
      <div className={style.column}>
        <h2 className={style.title}>О площадке</h2>
        <article className={style.article}>
          <h3 className={style.articleTitle}>
            Современная площадка для проведения концертов и других мероприятий любой
            сложности
          </h3>
          <p className={style.articleText}>
            Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые
            решения под все основные задачи любого события, а также современное
            оборудование, соответствующее самым высоким мировым стандартам. Мы
            предоставляем всю необходимую для организаторов инфраструктуру и готовые
            решения под все основные задачи любого события, а также современное
            оборудование, соответствующее самым высоким мировым стандартам
          </p>
        </article>
      </div>
      <div className={style.columnB}>
        <div className={style.request}>
          <h3 className={style.requestTitle}>Оставить заявку на проведение концерта</h3>
          <textarea placeholder="Расскажите о вашем предложении " />
          <div className={style.button}>
            <Button name="отправить" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
