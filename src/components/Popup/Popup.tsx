import styles from './Popup.module.scss';
import React, { useRef, useEffect } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  categoriesSelect: (e: any) => void;
  subcategoriesSelect: (e: any) => void;
  brandSelect: (e: any) => void;
  cashbackSelect: (e: any) => void;
}

function Popup({
  isOpen,
  onClose,
  categoriesSelect,
  subcategoriesSelect,
  brandSelect,
  cashbackSelect,
}: Props) {
  const rootEl: any = useRef(null);
  const popup: any = useRef(null);

  useEffect(() => {
    const onClick = (e: any) =>
      e.target.className === styles.popup + ' ' + styles.popup_active
        ? onClose()
        : null;
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [onClose]);

  return (
    <div
      className={
        isOpen ? styles.popup + ' ' + styles.popup_active : styles.popup
      }
      ref={popup}
    >
      <div className={styles.popup__container} ref={rootEl}>
        <div className={styles.popup__buttons}>
          <button
            className={styles.popup__button + ' ' + styles.popup__button_delete}
            onClick={() => console.log('yes')}
          >
            Удалить
          </button>
          <button
            className={styles.popup__button + ' ' + styles.popup__button_save}
            onClick={onClose}
          >
            Сохранить
          </button>
        </div>
        <div className={styles.popup__choice}>
          <p className={styles.popup__text}>Начисление кешбека с покупки</p>
          <input
            type='text'
            className={styles.popup__input}
            placeholder='Введите Кешбэк'
            onChange={cashbackSelect}
          />
          <p className={styles.popup__text}>Категория</p>
          <select className={styles.popup__select} onChange={categoriesSelect}>
            <option value=''>Выберите категорию</option>
            <option value='Категория 1'>Категория 1</option>
            <option value='Категория 2'>Категория 2</option>
            <option value='Категория 3'>Категория 3</option>
          </select>
          <p className={styles.popup__text}>Подкатегория</p>
          <select
            className={styles.popup__select}
            onChange={subcategoriesSelect}
          >
            <option value=''>Выберите подкатегорию</option>
            <option value='Подкатегория 1'>Подкатегория 1</option>
            <option value='Подкатегория 2'>Подкатегория 2</option>
            <option value='Подкатегория 3'>Подкатегория 3</option>
          </select>
          <p className={styles.popup__text}>Бренд</p>
          <select className={styles.popup__select} onChange={brandSelect}>
            <option value=''>Выберите бренд</option>
            <option value='Бренд 1'>Бренд 1</option>
            <option value='Бренд 2'>Бренд 2</option>
            <option value='Бренд 3'>Бренд 3</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Popup;
