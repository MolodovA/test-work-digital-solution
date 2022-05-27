import React, { FC, useState } from 'react';

import bg from '../../../assets/image/bg.jpg';

import style from './slider.module.scss';

import { Button } from 'components/common/button/Button';
import { MyNumber } from 'enum/Number';

const sliderData = [
  { titleGroup: 'Twenty One Pilots', date: '22.02.23 в 21:00' },
  { titleGroup: 'Madonna', date: '25.01.1991' },
  { titleGroup: 'Eminem', date: '25.09.2022' },
];
export const Slider: FC = () => {
  const [current, setCurrent] = useState(MyNumber.Zero);
  const { length } = sliderData;

  const onPrevStepClick = (): void => {
    setCurrent(
      current === MyNumber.Zero ? length - MyNumber.One : current - MyNumber.One,
    );
  };
  const onNextStepClick = (): void => {
    setCurrent(
      current === length - MyNumber.One ? MyNumber.Zero : current + MyNumber.One,
    );
  };

  return (
    <section
      className={style.slider}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className={style.container}>
        {sliderData.map(
          (item, i) =>
            i === current && (
              <div className={style.sliderContent} key={item.date}>
                <h1 className={style.title}>{item.titleGroup}</h1>
                <p className={style.date}>{item.date}</p>
              </div>
            ),
        )}
        <div className={style.buttons}>
          <Button name="<" callback={onPrevStepClick} />
          <Button name="Купить билет" />
          <Button name=">" callback={onNextStepClick} />
        </div>
      </div>
    </section>
  );
};
