import trashIcon from '../../images/trash.svg';
import closeIcon from '../../images/en-close.svg';

function ActionsSelected() {
  return (
    <div className='actions__select-items'>
      <button className='actions__close-button'>
        <img
          src={closeIcon}
          alt='icon'
          className='actions__close-button-icon'
        />
      </button>
      <p className='actions__select-text'>Количество выбранных позиций: 3</p>
      <button className='actions__delete-button'>
        <img
          src={trashIcon}
          alt='icon'
          className='actions__delete-button-icon'
        />
        <p className='actions__delete-button-text'>Удалить</p>
      </button>
    </div>
  );
}

export default ActionsSelected;
