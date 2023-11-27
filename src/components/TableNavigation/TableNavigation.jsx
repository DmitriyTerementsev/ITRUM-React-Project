import arrowRight from '../../images/en-arrow-right.svg';

function TableNavigation() {
  return (
      <div className='table-navigation'>
        <p className='table-navigation__text'>Показывать</p>
        <select className='table-navigation__select'>
          <option value='10'>10</option>
          <option value='20'>20</option>
        </select>
        <p className='table-navigation__text'>Страница</p>
        <input className='table-navigation__input' type='text' value='1' />
        <p className='table-navigation__input-text'>из 1</p>
        <button className='table-navigation__button table-navigation__button_prev'>
          <img
            src={arrowRight}
            alt='icon'
            className='table-navigation__button-icon'
          />
        </button>
        <button className='table-navigation__button table-navigation__button_next'>
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
