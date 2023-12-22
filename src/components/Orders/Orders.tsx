import React, { useState } from 'react';
import styles from './Orders.module.scss';
import TableSearch from '../TableSearch/TableSearch.tsx';
import TableNavigation from '../TableNavigation/TableNavigation.tsx';
import OrderDescription from '../OrderDescription/OrderDescription.tsx';
import OrderItem from '../OrderItem/OrderItem.tsx';

function Orders() {
  const [inputValue, setInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [allPages, setAllPages] = useState(1);
  const [showPages, setShowPages] = useState(10);

  const handleInputClear = () => {
    console.log(inputValue);
    setInputValue('');
  };

  return (
    <section className={styles.orders}>
      <TableSearch
        placeholder='Поиск по заказам'
        inputValue={(e) => setInputValue(e.target.value)}
        handleInputClear={handleInputClear}
        value={inputValue}
      />
      <TableNavigation
        currentPage={currentPage}
        allPages={allPages}
        handleClickNext={() =>
          currentPage === allPages - 1 ? null : setCurrentPage(currentPage + 1)
        }
        handleClickPrev={() =>
          currentPage > 0 ? setCurrentPage(currentPage - 1) : null
        }
        showPages={(e: any) => setShowPages(e.target.value)}
      />
      <OrderDescription />
      <ul className={styles.orders__items}>
        <OrderItem />
      </ul>
    </section>
  );
}

export default Orders;
