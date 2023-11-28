import ActionsDescription from '../ActionsDescription/ActionsDescription';
import ActionsItem from '../ActionsItem/ActionsItem';
import ActionsSelected from '../ActionsSelected/ActionsSelected';
import { useState } from 'react';

function Actions({ currentPage, products, onClick }) {
  const [counter, setCounter] = useState(0);
  const [showItems, setShowItems] = useState(10);

  function clickHandler(e) {
    if (e.target.checked === true) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  }

  function clickHandlerAll(e) {
    if (e.target.checked === true) {
      setCounter(products.length);
    } else {
      setCounter(0);
    }
  }

  let showProducts = products
    .slice(currentPage * showItems, currentPage * showItems + showItems)
    .map((item) => item);

  return (
    <>
      <div className='actions'>
        <ActionsDescription clickHandlerAll={clickHandlerAll} />
        <ul className='actions__items'>
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
              />
            )
          )}
        </ul>
        <ActionsSelected counter={counter} onClick={onClick} />
      </div>
    </>
  );
}

export default Actions;
