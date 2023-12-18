import React, { useState } from 'react';
import styles from '../Brands/Brands.module.scss';
import { ReactComponent as BaseLogo } from '../../assets/icons/baseLogo.svg';
import { ReactComponent as EditButton } from '../../assets/icons/editButton.svg';
import { ReactComponent as TrashButton } from '../../assets/icons/trashButton.svg';

interface BrandsItemProps {
  brandName: string;
  logo: string;
}

function BrandsItem({ brandName, logo }: BrandsItemProps) {
  return (
    <li className={styles.brands__item}>
      <div className={styles.brands__logo}>
        {/* <img src={logo} alt='logo' className={styles.brands__image} /> */}
        <BaseLogo className={styles.brands__image} />
      </div>
      <p className={styles.brands__name}>{brandName}</p>
      <div className={styles.brands__buttons}>
        <button
          type='button'
          className={`${styles.brands__button} ${styles.brands__button_icon}`}
        >
          <EditButton className={styles.brands__edit} />
        </button>
        <button
          type='button'
          className={`${styles.brands__button} ${styles.brands__button_icon}`}
        >
          <TrashButton className={styles.brands__edit} />
        </button>
      </div>
    </li>
  );
}

export default BrandsItem;
