import React, { FC } from 'react';

import style from './button.module.scss';

type ButtonType = {
  name: string;
  callback?: () => void;
  type?: 'submit' | 'button';
};
export const Button: FC<ButtonType> = ({ name, type, callback }: ButtonType) => {
  const onCallbackClick = (): void => callback && callback();
  return (
    <button className={style.button} type={type} onClick={onCallbackClick}>
      {name}
    </button>
  );
};
