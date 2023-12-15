import React from 'react';

interface ActionsDescriptionProps {
  handleClickAllSelect: (e: any) => void;
  description: any;
  styles: any;
}

function ActionsDescription({
  handleClickAllSelect,
  description,
  styles,
}: ActionsDescriptionProps) {
  return (
    <div className={styles.actions__description}>
      <input
        type='checkbox'
        className={styles.actions__checkbox}
        onClick={(e: any) => handleClickAllSelect(e)}
        ref={description}
      />
      <p
        className={styles.actions__text + ' ' + styles.actions__text_categories}
      >
        Категория
      </p>
      <p
        className={
          styles.actions__text + ' ' + styles.actions__text_subcategories
        }
      >
        Подкатегория
      </p>
      <p className={styles.actions__text + ' ' + styles.actions__text_brand}>
        Бренд
      </p>
      <p className={styles.actions__text + ' ' + styles.actions__text_product}>
        Товары
      </p>
      <p className={styles.actions__text + ' ' + styles.actions__text_cashback}>
        Кешбэк
      </p>
    </div>
  );
}

export default ActionsDescription;
