import React from 'react';
import { ReactComponent as TrashIcon } from '../../images/trash.svg';
import { ReactComponent as CloseIcon } from '../../images/en-close.svg';

interface Props {
  closePopup: () => void;
  handleDeleteItem: () => void;
  isActive: boolean;
  counter: number;
  styles: any;
}

function ActionsSelected({
  counter,
  handleDeleteItem,
  isActive,
  closePopup,
  styles,
}: Props) {
  return (
    <div
      className={
        isActive
          ? styles.actions__select + ' ' + styles.actions__select_active
          : styles.actions__select
      }
    >
      <button className={styles.actions__close} onClick={closePopup}>
        <CloseIcon className={styles.actions__close} />
      </button>
      <p className={styles.select__text}>
        Количество выбранных позиций: {counter}
      </p>
      <button className={styles.actions__delete} onClick={handleDeleteItem}>
        <TrashIcon className={styles.actions__delete} />
        <p className={styles.delete__text}>Удалить</p>
      </button>
    </div>
  );
}

export default ActionsSelected;
