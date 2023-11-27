import trashIcon from '../../images/trash.svg';
import closeIcon from '../../images/en-close.svg';
import { useEffect, useState } from 'react';

function ActionsSelected({ counter }) {
  const [isActive, setActive] = useState(false);
  const closePopup = () => {
    if (isActive === true) {
      setActive(false);
    }
  };

  useEffect(() => {
    if (counter > 0) {
      setActive(true);
    } else {
      setActive(false)
    }
  }, [counter]);

  return (
    <div
      className={
        isActive ? 'actions__select-items_active' : 'actions__select-items'
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
