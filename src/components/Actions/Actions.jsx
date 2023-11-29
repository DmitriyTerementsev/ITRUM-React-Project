import ActionsDescription from '../ActionsDescription/ActionsDescription';
import ActionsItem from '../ActionsItem/ActionsItem';
import ActionsSelected from '../ActionsSelected/ActionsSelected';

function Actions({
  showPages,
  list,
  handleDeleteItem,
  products,
  currentPage,
  clickHandlerAll,
  clickHandler,
  counter,
  isActive,
  description,
  closePopup,
}) {
  //---------render items by showPages icon
  let showProducts = products
    .slice(currentPage * showPages, currentPage * showPages + showPages)
    .map((item) => item);

  return (
    <div className='actions'>
      <ActionsDescription
        clickHandlerAll={clickHandlerAll}
        description={description}
      />
      <ul className='actions__items' ref={list}>
        {showProducts?.map(
          ({ id, categories, subcategories, brand, product, cashback }) => (
            <ActionsItem
              key={id}
              categories={categories}
              subcategories={subcategories}
              brand={brand}
              product={product}
              cashback={cashback}
              clickHandler={clickHandler}
              id={id}
            />
          )
        )}
      </ul>
      <ActionsSelected
        counter={counter}
        handleDeleteItem={handleDeleteItem}
        isActive={isActive}
        closePopup={closePopup}
      />
    </div>
  );
}

export default Actions;
