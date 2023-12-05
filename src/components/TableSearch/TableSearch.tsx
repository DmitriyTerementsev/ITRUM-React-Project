import React from 'react';
import styles from './TableSearch.module.scss';
import { ReactComponent as SearchIcon } from '../../images/en-searsh.svg';
import { ReactComponent as DeleteIcon } from '../../images/en-cancel-fill.svg';

interface Props {
  inputValue: () => void;
  clearInput: () => void;
}

function TableSearch({ inputValue, clearInput }: Props) {
  return (
    <section className={styles.search}>
      <SearchIcon
        className={styles.search__icon + ' ' + styles.search__icon_search}
      />
      <input
        type='text'
        className={styles.search__input}
        placeholder='Поиск'
        onChange={inputValue}
      />
      <DeleteIcon
        className={styles.search__icon + ' ' + styles.search__icon_cancel}
        onClick={clearInput}
      />
    </section>
  );
}

export default TableSearch;
