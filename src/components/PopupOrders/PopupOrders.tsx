import PopupWithForm from '../PopupWithForm/PopupWithForm.tsx';
import styles from '../PopupWithForm/PopupWithForm.module.scss';
import React, { useEffect, useState } from 'react';

interface PopupProps {}

function PopupOrders({ isOpen, onClose }) {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose}>
      <div className={styles.popup__container}>
        <form className={styles.form}>
          <div className={styles.popup__buttons}>
            <button
              type='button'
              className={styles.popup__button}
              onClick={onClose}
            >
              Удалить
            </button>
            <button
              type='submit'
              className={`${styles.popup__button} ${styles.popup__button_submit}`}
            >
              Сохранить
            </button>
          </div>
          <div className={styles.form__container}>
            <p className={styles.form__label}>Заголовок</p>
            <input
              type='text'
              className={styles.form__input}
              placeholder='Заголовок'
              required
            />
            <p className={styles.form__label}>Краткое описание</p>
            <input
              type='text'
              className={styles.form__input}
              placeholder='Краткое описание'
              required
            />
            <p className={styles.form__label}>Процент скидки</p>
            <input
              type='text'
              className={styles.form__input}
              placeholder='Процент скидки'
              required
            />
            <p className={styles.form__label}>Баннер</p>
            <input
              className={styles.form__input}
              type='file'
              id='file'
            />
            <input
              className={styles.form__input}
              type='email'
              onChange={() => console.log('yes')}
            />
          </div>
        </form>
      </div>
    </PopupWithForm>
  );
}

export default PopupOrders;
