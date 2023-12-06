import React from 'react';
import styles from './TableSearch.module.scss';
import { ReactComponent as SearchIcon } from '../../images/en-searsh.svg';
import { ReactComponent as DeleteIcon } from '../../images/en-cancel-fill.svg';

interface Props {
  inputValue: (e: any) => void;
  handleInputClear: () => void;
}

function TableSearch({ inputValue, handleInputClear }: Props) {
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
        onClick={handleInputClear}
      />
    </section>
  );
}

export default TableSearch;
