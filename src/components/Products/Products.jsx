import Actions from '../Actions/Actions';
import Popup from '../Popup/Popup';
import { useEffect, useState, useRef } from 'react';
import TableNavigation from '../TableNavigation/TableNavigation';
import products from '../../utils/products';
import { ShowItemsValue, ProductList } from '../../contexts/ShowItemsValue';

function Products() {
  const [currentPage, setCurrentPage] = useState(0);
  const [allPages, setAllPages] = useState(1);
  const [showPages, setShowPages] = useState(10);
  const [isOpen, setOpen] = useState(false);
  const list = useRef(null);

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

  useEffect(() => {
    function keyHandler(evt) {
      if (evt.key === 'Escape') {
        setOpen(false);
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
  }, [showPages]);

  function handleDeleteItem() {
    const listItems = list.current.childNodes;
    console.log(listItems);
    for (let i = 0; i < listItems.length; i++) {
      if (listItems[i].querySelector('.actions__checkbox').checked === true) {
        listItems[i].remove();
      }
    }
    console.log(listItems);
  }

  return (
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
        />
        <Popup isOpen={isOpen} onClose={onClose} />
      </ProductList.Provider>
    </ShowItemsValue.Provider>
  );
}

export default Products;
