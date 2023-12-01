import searchIcon from '../../images/en-searsh.svg';
import cancelIcon from '../../images/en-cancel-fill.svg';

function TableSearch({ inputValue, clearInput }) {
  return (
    <section className='table-search'>
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