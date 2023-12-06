import arrowRight from '../../images/en-arrow-right.svg';

function TableNavigation({
  currentPage,
  allPages,
  handlerNextClick,
  handlerPrevClick,
  showPages,
}) {
  return (
    <div className='table-navigation'>
      <p className='table-navigation__text'>Показывать</p>
      <select className='table-navigation__select' onChange={showPages}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
      </select>
      <p className='table-navigation__text'>Страница</p>
      <p className='table-navigation__input'>{currentPage + 1}</p>
      <p className='table-navigation__input-text'>из {allPages}</p>
      <button
        className='table-navigation__button table-navigation__button_prev'
        onClick={handlerPrevClick}
      >
        <img
          src={arrowRight}
          alt='icon'
          className='table-navigation__button-icon'
        />
      </button>
      <button
        className='table-navigation__button table-navigation__button_next'
        onClick={handlerNextClick}
      >
        <img
          src={arrowRight}
          alt='icon'
          className='table-navigation__button-icon table-navigation__button-icon_rotate'
        />
      </button>
    </div>
  );
}

export default TableNavigation;
