import Actions from '../Actions/Actions';
import Popup from '../Popup/Popup';
import { useEffect, useState, useRef } from 'react';
import TableNavigation from '../TableNavigation/TableNavigation';
import products from '../../utils/products';
import {
  ShowItemsValue,
  ProductList,
  ItemsDescription,
} from '../../contexts/ShowItemsValue';

function Products() {
  //----------States
  const [isActive, setActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [allPages, setAllPages] = useState(1);
  const [showPages, setShowPages] = useState(10);
  const [isOpen, setOpen] = useState(false);
  const list = useRef(null);
  const description = useRef(null);
  let showProducts = products
    .slice(currentPage * showPages, currentPage * showPages + showPages)
    .map((item) => item);

  //----------functions
  //----------Open/Close Popups
  const closePopup = () => {
    if (isActive === true) {
      setActive(false);
    }
  };

  const openPopup = () => {
    if (isOpen === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  //----------Click On Next/Prev Button

  function clickHandler(e) {
    if (e.target.checked === true) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  }

  //----------Click on checkbox - select All

  function clickHandlerAll(e) {
    if (e.target.checked === true) {
      setCounter(showProducts.length);
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

  //----------Click on delete items

  function handleDeleteItem() {
    const listItems = list.current.childNodes;
    for (let i = 0; i < listItems.length; i++) {
      for (let j = 0; j < products.length; j++) {
        if (
          listItems[i].id == products[j].id &&
          listItems[i].querySelector('.actions__checkbox').checked === true
        ) {
          products.splice(j, 1);
        }
      }
    }
    setActive(false);
    setCounter(0);
    description.current.querySelector('.actions__checkbox').checked = false;
  }

  //----------Effects

  useEffect(() => {
    if (counter > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [counter]);

  useEffect(() => {
    function keyHandler(evt) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', keyHandler);
    }
    return () => {
      document.removeEventListener('keydown', keyHandler);
    };
  }, [isOpen]);

  useEffect(() => {
    setAllPages(Math.ceil(products.length / showPages));
  }, [products.length]);

  useEffect(() => {
    setAllPages(Math.ceil(products.length / showPages));
  }, [showPages]);

  return (
    <ItemsDescription.Provider value={description}>
      <ShowItemsValue.Provider value={showPages}>
        <ProductList.Provider value={list}>
          <TableNavigation
            currentPage={currentPage}
            allPages={allPages}
            handlerNextClick={() =>
              currentPage === allPages - 1
                ? null
                : setCurrentPage(currentPage + 1)
            }
            handlerPrevClick={() =>
              currentPage > 0 ? setCurrentPage(currentPage - 1) : null
            }
            showPages={(e) => setShowPages(e.target.value)}
          />
          <button onClick={openPopup} className='table__button'>
            Добавить акцию
          </button>
          <Actions
            currentPage={currentPage}
            products={products}
            showPages={showPages}
            list={list}
            handleDeleteItem={handleDeleteItem}
            clickHandlerAll={clickHandlerAll}
            clickHandler={clickHandler}
            counter={counter}
            closePopup={closePopup}
            isActive={isActive}
            description={description}
            showProducts={showProducts}
          />
          <Popup isOpen={isOpen} />
        </ProductList.Provider>
      </ShowItemsValue.Provider>
    </ItemsDescription.Provider>
  );
}

export default Products;
