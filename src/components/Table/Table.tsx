import React from 'react';
import styles from './Table.module.scss';
import { Routes, Route } from 'react-router-dom';

function Table() {
  return (
    <div className={styles.table}>
      <div className={styles.table__container}>
        <Routes></Routes>
      </div>
    </div>
  );
}

export default Table;
