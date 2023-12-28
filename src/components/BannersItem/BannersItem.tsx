import React from 'react';
import styles from '../TableItem/TableItem.module.scss';
import style from '../Banners/Banners.module.scss';
import TableItem from '../TableItem/TableItem.tsx';
import { ReactComponent as TrashButton } from '../../assets/icons/trashButton.svg';
import { ReactComponent as EditButton } from '../../assets/icons/editButton.svg';

interface BannersItemProps {
  city: string;
  address: string;
  handleDeleteItem: () => void;
  openPopup: () => void;
}

function BannersItem({ city, handleDeleteItem, openPopup }: BannersItemProps) {
  return (
    <TableItem>
      <p className={`${styles.item__text} ${styles.item__text_city}`}>{city}</p>
      <div className={styles.item__buttons}>
        <EditButton className={style.cities__delete} onClick={openPopup} />
        <TrashButton
          className={style.cities__delete}
          onClick={handleDeleteItem}
        />
      </div>
    </TableItem>
  );
}

export default BannersItem;
