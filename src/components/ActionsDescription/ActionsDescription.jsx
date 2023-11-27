function ActionsDescription() {
  return (
      <div className='actions__description'>
        <input type='checkbox' className='actions__checkbox' />
        <p className='actions__text actions__text_categories'>Категория</p>
        <p className='actions__text actions__text_subcategories'>
          Подкатегория
        </p>
        <p className='actions__text actions__text_brand'>Бренд</p>
        <p className='actions__text actions__text_product'>Товары</p>
        <p className='actions__text actions__text_cashback'>Кешбэк</p>
      </div>
  );
}

export default ActionsDescription;
