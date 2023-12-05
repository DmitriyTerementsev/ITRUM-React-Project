import trashIcon from '../../images/trash.svg';
import closeIcon from '../../images/en-close.svg';

function ActionsSelected({
  counter,
  handleDeleteItem,
  isActive,
  closePopup,
  styles
}) {
  return (
    <div
      className={
        isActive
          ? styles.actions__select + ' ' + styles.actions__select_active
          : styles.actions__select
      }
    >
      <button className={styles.actions__close} onClick={closePopup}>
        <img
          src={closeIcon}
          alt='icon'
          className='actions__close-icon'
        />
      </button>
      <p className={styles.select__text}>
        Количество выбранных позиций: {counter}
      </p>
      <button className={styles.actions__delete} onClick={handleDeleteItem}>
        <img
          src={trashIcon}
          alt='icon'
          className='actions__delete-icon'
        />
        <p className={styles.delete__text}>Удалить</p>
      </button>
    </div>
  );
}

export default ActionsSelected;
