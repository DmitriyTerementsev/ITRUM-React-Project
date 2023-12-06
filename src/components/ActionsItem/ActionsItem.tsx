import React from 'react';

interface Props {
  handleClickItem: (e: any) => void;
  categories: string;
  subcategories: string;
  brand: string;
  cashback: string;
  product: string;
  id: string;
  styles: any;
  checked: boolean;
}

function ActionsItem({
  categories,
  subcategories,
  brand,
  product,
  cashback,
  handleClickItem,
  id,
  styles,
  checked,
}: Props) {
  return (
    <li className={styles.actions__item} id={id}>
      <input
        type='checkbox'
        className={styles.actions__checkbox}
        onClick={(e: any) => handleClickItem(e)}
        onChange={() => checked}
      />
      <p
        className={
          styles.actions__text +
          ' ' +
          styles.actions__text_item +
          ' ' +
          styles.actions__text_categories
        }
      >
        {categories}
      </p>
      <p
        className={
          styles.actions__text +
          ' ' +
          styles.actions__text_item +
          ' ' +
          styles.actions__text_subcategories
        }
      >
        {subcategories}
      </p>
      <p
        className={
          styles.actions__text +
          ' ' +
          styles.actions__text_item +
          ' ' +
          styles.actions__text_brand
        }
      >
        {brand}
      </p>
      <p
        className={
          styles.actions__text +
          ' ' +
          styles.actions__text_item +
          ' ' +
          styles.actions__text_product
        }
      >
        {product}
      </p>
      <p
        className={
          styles.actions__text +
          ' ' +
          styles.actions__text_item +
          ' ' +
          styles.actions__text_cashback
        }
      >
        {cashback}
      </p>
    </li>
  );
}

export default ActionsItem;
