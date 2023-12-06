import React from 'react';
import styles from './Table.module.scss'
import { Routes, Route } from 'react-router-dom';
import Products from '../Products/Products.tsx';

function Table() {
  return (
    <div className={styles.table}>
      <div className={styles.table__container}>
        <Routes>
          <Route path='/products' element={<Products styles={styles}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default Table;
