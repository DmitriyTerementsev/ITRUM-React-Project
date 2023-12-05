import React from 'react';

interface Props {
  clickHandlerAll: () => void;
  description: any;
  styles: any;
}

function ActionsDescription({ clickHandlerAll, description, styles }: Props) {
  return (
    <div className={styles.actions__description} ref={description}>
      <input
        type='checkbox'
        className={styles.actions__checkbox}
        onClick={clickHandlerAll}
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
