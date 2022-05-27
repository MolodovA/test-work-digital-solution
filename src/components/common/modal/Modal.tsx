import React, { FC } from 'react';

import { useFormik } from 'formik';

import style from './modal.module.scss';

import { Button } from 'components/common/button/Button';
import { useAppDispatch } from 'redux/store';
import { addCommitTC } from 'redux/thunks/commentTC';

type ModalType = {
  isOpenModal: boolean;
  onBlur: (value: boolean) => void;
  id: number;
};
export const Modal: FC<ModalType> = ({ isOpenModal, onBlur, id }: ModalType) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    validate: data => {
      if (!data.email) {
        return {
          email: 'Введите почту',
        };
      }
      if (!data.firstName) {
        return {
          firstName: 'Введите имя',
        };
      }
      if (!data.body) {
        return {
          body: 'Введите текст',
        };
      }
      return undefined;
    },
    initialValues: {
      firstName: '',
      email: '',
      body: '',
    },
    onSubmit: data => {
      dispatch(addCommitTC({ data, id }));
      onBlur(false);
    },
  });

  if (!isOpenModal) {
    return null;
  }
  return (
    <form onSubmit={formik.handleSubmit} className={style.form}>
      <label htmlFor="firstName" className={style.label}>
        Имя :
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </label>
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      <label htmlFor="email" className={style.label}>
        Email:
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </label>
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <div className={style.formItem}>
        <label htmlFor="body" className={style.label}>
          Текст:
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <textarea {...formik.getFieldProps('body')} />
          {formik.errors.body ? <div>{formik.errors.body}</div> : null}
        </label>
      </div>

      <Button name="Отправить" type="submit" />
    </form>
  );
};
