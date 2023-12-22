import React from 'react';
import styles from '../TableItem/TableItem.module.scss';
import TableItem from '../TableItem/TableItem.tsx';

function OrderItem() {
  return (
    <TableItem>
      <p className={`${styles.item__text} ${styles.item__text_order}`}>
        Иванов Иван
      </p>
      <p className={`${styles.item__text} ${styles.item__text_order}`}>
        931239312
      </p>
      <p className={`${styles.item__text} ${styles.item__text_order}`}>
        Самовывоз
      </p>
      <p className={`${styles.item__text} ${styles.item__text_date}`}>
        01.08.2022
      </p>
      <p className={`${styles.item__text} ${styles.item__text_sum}`}>8 242 Р</p>
      <p className={`${styles.item__text} ${styles.item__text_sum}`}>Нет</p>
    </TableItem>
  );
}

export default OrderItem;
