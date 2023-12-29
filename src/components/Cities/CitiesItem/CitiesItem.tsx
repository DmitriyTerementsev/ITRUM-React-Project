import React from 'react';
import styles from '../TableItem/TableItem.module.scss';
import style from '../Cities/Cities.module.scss';
import TableItem from '../../Table/TableItem/TableItem';
import { ReactComponent as TrashButton } from '../../assets/icons/trashButton.svg';

interface CitiesItemProps {
  city: string;
  address: string;
  handleDeleteItem: () => void;
}

function CitiesItem({ city, address, handleDeleteItem }: CitiesItemProps) {
  return (
    <TableItem>
      <p className={`${styles.item__text} ${styles.item__text_city}`}>{city}</p>
      <p className={`${styles.item__text} ${styles.item__text_city}`}>
        {address}
      </p>
      <TrashButton
        className={style.cities__delete}
        onClick={handleDeleteItem}
      />
    </TableItem>
  );
}

export default CitiesItem;
