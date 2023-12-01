import searchIcon from '../../images/en-searsh.svg';
import cancelIcon from '../../images/en-cancel-fill.svg';

function TableSearch({ inputValue, search }) {
  return (
    <section className='table-search'>
      <img
        src={searchIcon}
        alt='icon'
        className='table-search__icon table-search__icon_search'
        onClick={search}
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
      />
    </section>
  );
}

export default TableSearch;
