function ActionsItem({
  categories,
  subcategories,
  brand,
  product,
  cashback,
  clickHandler,
  id,
}) {
  return (
    <li className='actions__item' id={id}>
      <input
        type='checkbox'
        className='actions__checkbox'
        onClick={clickHandler}
      />
      <p className='actions__text actions__text_item actions__text_categories'>
        {categories}
      </p>
      <p className='actions__text actions__text_item actions__text_subcategories'>
        {subcategories}
      </p>
      <p className='actions__text actions__text_item actions__text_brand'>
        {brand}
      </p>
      <p className='actions__text actions__text_item actions__text_product'>
        {product}
      </p>
      <p className='actions__text actions__text_item actions__text_cashback'>
        {cashback}
      </p>
    </li>
  );
}

export default ActionsItem;
