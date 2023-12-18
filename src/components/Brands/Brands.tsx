import React from 'react';
import styles from './Brands.module.scss';
import BrandsDescription from '../BrandsDescription/BrandsDescription.tsx';
import { ReactComponent as Upload } from '../../assets/icons/upload.svg';

function Brands() {
  return (
    <section className={styles.brands}>
      <form className={styles.brands__form}>
        <input
          className={styles.brands__input}
          type='text'
          placeholder='Введите название бренда'
        />
        <div
          className={`${styles.brands__input} ${styles.brands__input_upload}`}
        >
          <input type='file' id='file' />
          <input type='text' value='Загрузите логотип бренда' />
          <Upload className={styles.icon} />
        </div>
        <button className={styles.brands__button} type='submit'>
          Добавить бренд
        </button>
        <span>Размер логотипа 500x500 px PNG, JPG, JPEG</span>
      </form>
      <BrandsDescription />
    </section>
  );
}

export default Brands;
