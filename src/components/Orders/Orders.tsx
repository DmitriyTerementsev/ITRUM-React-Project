import React, { useEffect, useState } from 'react';
import styles from './Orders.module.scss';
import TableSearch from '../TableSearch/TableSearch.tsx';
import TableNavigation from '../TableNavigation/TableNavigation.tsx';
import OrderDescription from '../OrderDescription/OrderDescription.tsx';
import OrderItem from '../OrderItem/OrderItem.tsx';
import PopupOrders from '../PopupOrders/PopupOrders.tsx';
import { order } from '../../constants/orders.ts';

function Orders() {
  const [inputValue, setInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [allPages, setAllPages] = useState(1);
  const [showPages, setShowPages] = useState(10);
  const [orders, setOrders] = useState(order);
  const [activeOrders, setActiveOrders] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  const openPopup = (item: any) => {
    if (isOpen === false) {
      setOpen(true);
      setSelectedOrder(item);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    orders.length === 0 ? setActiveOrders(true) : setActiveOrders(false);
  }, [inputValue]);

  const handleInputClear = () => {
    setInputValue('');
  };

  useEffect(() => {
    setOrders(
      orders.slice(currentPage * showPages, currentPage * showPages + showPages)
    );
  }, [currentPage, showPages]);

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOrders(
      order
        .filter(
          (item) =>
            (item.user.name !== null &&
              item.user.name
                .toLowerCase()
                .includes(inputValue.toLowerCase())) ||
            (item.user.lastName !== null &&
              item.user.lastName
                .toLowerCase()
                .includes(inputValue.toLowerCase()))
        )
        .slice(currentPage * showPages, currentPage * showPages + showPages)
        .map((item) => item)
    );
    setAllPages(Math.ceil(orders.length / showPages));
  }, [order, inputValue, showPages, currentPage]);

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
          <OrderItem
            openPopup={openPopup}
            key={item.id}
            name={item.user.name + ' ' + item.user.lastName}
            order={item.order_number}
            delivery={item.delivery_type}
            date={item.date}
            summa={item.total + ' ₽'}
            isPay={item.isPayed}
            item={item}
          />
        ))}
      </ul>
      <PopupOrders
        isOpen={isOpen}
        onClose={onClose}
        selectedOrder={selectedOrder}
      />
    </section>
  );
}

export default Orders;
