import React, { useEffect, useState, useRef } from 'react';
import Actions from '../Actions/Actions.tsx';
import Popup from '../Popup/Popup.tsx';
import TableNavigation from '../TableNavigation/TableNavigation.tsx';
import products from '../../constants/products.ts';
import {
  ShowItemsValue,
  ProductList,
  ItemsDescription,
} from '../../contexts/ShowItemsValue';

function Products({ styles }) {
  //----------States
  const [checked, setChecked] = useState(false)
  const [isActive, setActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [allPages, setAllPages] = useState(1);
  const [showPages, setShowPages] = useState(10);
  const [isOpen, setOpen] = useState(false);

  const [categoriesSelect, setCategories] = useState('');
  const [subcategoriesSelect, setSubcategories] = useState('');
  const [brandSelect, setBrand] = useState('');
  const [cashbackSelect, setCashback] = useState('');
  const list: any = useRef<HTMLElement>(null);
  const description: any = useRef<HTMLElement>(null);

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
    addItem();
  };

  function addItem() {
    if (
      (categoriesSelect &&
        subcategoriesSelect &&
        brandSelect &&
        cashbackSelect) !== ''
    ) {
      let newObject: {
        categories: string;
        subcategories: string;
        brand: string;
        cashback: string;
        id: number;
      } = {
        categories: categoriesSelect,
        subcategories: subcategoriesSelect,
        brand: brandSelect,
        cashback: cashbackSelect,
        id: products.length + 1,
      };
      products.push(newObject);
    }
  }

  //----------Click On Next/Prev Button

  function handleClickItem(e: any) {
    if (e.target.checked === true) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  }

  //----------Click on checkbox - select All

  function handleClickAllSelect(e: any) {
    if (e.target.checked === true) {
      setCounter(showProducts.length);
      list.current!.childNodes.forEach((item: any) => {
        console.log(item)
        //console.log(item.querySelector(`.${styles.actions__checkbox}`))
        //item.querySelector(styles.actions__checkbox).checked = true;
      });
    } else {
      setCounter(0);
      list.current!.childNodes.forEach((item: any) => {
        item.querySelector(styles.actions__checkbox).checked = false;
      });
    }
  }

  //----------Click on delete items

  function handleDeleteItem() {
    console.log(description.current)
    const listItems = list.current!.childNodes;
    for (let i: number = 0; i < listItems.length; i++) {
      for (let j: number = 0; j < products.length; j++) {
        if (
          listItems[i].id == products[j].id &&
          listItems[i].querySelector(styles.actions__checkbox).checked === true
        ) {
          products.splice(j, 1);
        }
      }
    }
    setActive(false);
    setCounter(0);
    description.checked =
      false;
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
    function keyHandler(evt: any) {
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
  }, [products.length, showPages]);

  return (
    <ItemsDescription.Provider value={description}>
      <ShowItemsValue.Provider value={showPages}>
        <ProductList.Provider value={list}>
          <TableNavigation
            currentPage={currentPage}
            allPages={allPages}
            handleClickNext={() =>
              currentPage === allPages - 1
                ? null
                : setCurrentPage(currentPage + 1)
            }
            handleClickPrev={() =>
              currentPage > 0 ? setCurrentPage(currentPage - 1) : null
            }
            showPages={(e: any) => setShowPages(e.target.value)}
          />
          <button onClick={openPopup} className={styles.table__button}>
            Добавить акцию
          </button>
          <Actions
            list={list}
            handleDeleteItem={() => handleDeleteItem()}
            handleClickAllSelect={(e: any) => handleClickAllSelect(e)}
            handleClickItem={(e: any) => handleClickItem(e)}
            counter={counter}
            closePopup={closePopup}
            isActive={isActive}
            description={description}
            showProducts={showProducts}
            checked={checked}
          />
          <Popup
            isOpen={isOpen}
            onClose={onClose}
            categoriesSelect={(e: any) => setCategories(e.target.value)}
            subcategoriesSelect={(e: any) => setSubcategories(e.target.value)}
            brandSelect={(e: any) => setBrand(e.target.value)}
            cashbackSelect={(e: any) => setCashback(e.target.value)}
          />
        </ProductList.Provider>
      </ShowItemsValue.Provider>
    </ItemsDescription.Provider>
  );
}

export default Products;
