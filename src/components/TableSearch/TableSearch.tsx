import React from 'react';
import './TableSearch.scss';
import searchIcon from '../../images/en-searsh.svg';
import cancelIcon from '../../images/en-cancel-fill.svg';

/* interface TProps {
  inputValue: () => void;
  clearInput: () => void;
}
*/

function TableSearch({ inputValue, clearInput, styles }) {
  return (
    <section className='table-search'>
      {/* заменить на компоненты иконок */}
      <img
        src={searchIcon}
        alt='icon'
        className='table-search__icon table-search__icon_search'
      />
      <input
        type='text'
        className='table-search__input'
        placeholder='Поиск'
        onChange={inputValue}
      />
      <img
        src={cancelIcon}
        alt='icon'
        className='table-search__icon table-search__icon_cancel'
        onClick={clearInput}
      />
    </section>
  );
}

export default TableSearch;
