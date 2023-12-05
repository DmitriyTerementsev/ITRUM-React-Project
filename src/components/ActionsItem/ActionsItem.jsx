function ActionsItem({
  categories,
  subcategories,
  brand,
  product,
  cashback,
  clickHandler,
  id,
  styles,
}) {
  return (
    <li className={styles.actions__item} id={id}>
      <input
        type='checkbox'
        className={styles.actions__checkbox}
        onClick={clickHandler}
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
