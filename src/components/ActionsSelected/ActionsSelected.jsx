import trashIcon from '../../images/trash.svg';
import closeIcon from '../../images/en-close.svg';

function ActionsSelected({
  counter,
  handleDeleteItem,
  isActive,
  closePopup,
}) {
  return (
    <div
      className={
        isActive
          ? 'actions__select-items actions__select-items_active'
          : 'actions__select-items'
      }
    >
      <button className='actions__close-button' onClick={closePopup}>
        <img
          src={closeIcon}
          alt='icon'
          className='actions__close-button-icon'
        />
      </button>
      <p className='actions__select-text'>
        Количество выбранных позиций: {counter}
      </p>
      <button className='actions__delete-button' onClick={handleDeleteItem}>
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
