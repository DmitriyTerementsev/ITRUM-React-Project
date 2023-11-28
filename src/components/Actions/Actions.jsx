import ActionsDescription from '../ActionsDescription/ActionsDescription';
import ActionsItem from '../ActionsItem/ActionsItem';
import ActionsSelected from '../ActionsSelected/ActionsSelected';
import { useState } from 'react';

function Actions({ currentPage, products, showPages, list, handleDeleteItem }) {
  const [counter, setCounter] = useState(0);

  function clickHandler(e) {
    if (e.target.checked === true) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  }

  function clickHandlerAll(e) {
    if (e.target.checked === true) {
      setCounter(showPages);
      list.current.childNodes.forEach((item) => {
        item.querySelector('.actions__checkbox').checked = true;
      });
    } else {
      setCounter(0);
      list.current.childNodes.forEach((item) => {
        item.querySelector('.actions__checkbox').checked = false;
      });
    }
  }

  let showProducts = products
    .slice(currentPage * showPages, currentPage * showPages + showPages)
    .map((item) => item);

  return (
    <div className='actions'>
      <ActionsDescription clickHandlerAll={clickHandlerAll} />
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
      <ActionsSelected counter={counter} handleDeleteItem={handleDeleteItem}/>
    </div>
  );
}

export default Actions;
