import arrowRight from '../../images/en-arrow-right.svg';

function TableNavigation({ currentPage, allPages, handlerNextClick, handlerPrevClick }) {
  return (
    <div className='table-navigation'>
      <p className='table-navigation__text'>Показывать</p>
      <select
        className='table-navigation__select'
        onChange={(e) => {
          console.log(e.target.value);
        }}
      >
        <option value='10'>10</option>
        <option value='20'>20</option>
      </select>
      <p className='table-navigation__text'>Страница</p>
      <input
        className='table-navigation__input'
        type='text'
        value={currentPage + 1}
      />
      <p className='table-navigation__input-text'>из {allPages}</p>
      <button className='table-navigation__button table-navigation__button_prev'>
        <img
          src={arrowRight}
          alt='icon'
          className='table-navigation__button-icon'
          onClick={handlerPrevClick}
        />
      </button>
      <button className='table-navigation__button table-navigation__button_next'>
        <img
          src={arrowRight}
          alt='icon'
          className='table-navigation__button-icon table-navigation__button-icon_rotate'
          onClick={handlerNextClick}
        />
      </button>
    </div>
  );
}

export default TableNavigation;
