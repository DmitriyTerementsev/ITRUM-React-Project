import editButton from '../../images/editButton.svg';
import trashButton from '../../images/trashButton.svg';

function CategoriesItem({ categoriesName }) {
  return (
    <li className='categories__item'>
      <p className='categories__name'>{categoriesName}</p>
      <div className='categories__buttons'>
        <button
          type='button'
          className='categories__button categories__button_icon'
        >
          <img src={editButton} alt='icon' className='categories__edit' />
        </button>
        <button
          type='button'
          className='categories__button categories__button_icon'
        >
          <img src={trashButton} alt='icon' className='categories__edit' />
        </button>
      </div>
    </li>
  );
}

export default CategoriesItem;
