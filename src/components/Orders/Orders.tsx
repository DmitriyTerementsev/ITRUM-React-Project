import React, { useEffect, useState } from 'react';
import styles from './Orders.module.scss';
import TableSearch from '../TableSearch/TableSearch.tsx';
import TableNavigation from '../TableNavigation/TableNavigation.tsx';
import OrderDescription from '../OrderDescription/OrderDescription.tsx';
import OrderItem from '../OrderItem/OrderItem.tsx';
import PopupWithForm from '../PopupWithForm/PopupWithForm.tsx';
import PopupOrders from '../PopupOrders/PopupOrders.tsx';

function Orders() {
  const [inputValue, setInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [allPages, setAllPages] = useState(1);
  const [showPages, setShowPages] = useState(10);
  const [orders, setOrders] = useState([]);
  const [activeOrders, setActiveOrders] = useState(false);

  useEffect(() => {
    orders.length === 0 ? setActiveOrders(true) : setActiveOrders(false);
  }, [orders]);

  const handleInputClear = () => {
    console.log(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    setOrders(
      orders.slice(currentPage * showPages, currentPage * showPages + showPages)
    );
  }, [orders, showPages, currentPage]);

  const [isOpen, setOpen] = useState(true);
  const onClose = () => {
    setOpen(false);
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
      <p
        className={
          activeOrders
            ? `${styles.orders__null} ${styles.orders__null_active}`
            : `${styles.orders__null}`
        }
      >
        Здесь пока нет заказов
      </p>
      <ul className={styles.orders__items}>
        {orders?.map((item: any) => (
          <OrderItem key={item.id} />
        ))}
      </ul>
      <PopupOrders isOpen={isOpen} onClose={onClose}/>
    </section>
  );
}

export default Orders;
