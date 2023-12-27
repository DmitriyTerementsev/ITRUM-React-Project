import React from 'react';
import TableDescription from '../TableDescription/TableDescription.tsx';
import styles from '../TableDescription/TableDescription.module.scss';

function CitiesDescription() {
  return (
    <TableDescription>
      <p
        className={`${styles.description__item} ${styles.description__item_city}`}
      >
        Город
      </p>
      <p
        className={`${styles.description__item} ${styles.description__item_city}`}
      >
        Адрес
      </p>
    </TableDescription>
  );
}

export default CitiesDescription;
