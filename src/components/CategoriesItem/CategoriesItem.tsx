import React from 'react';
import { ReactComponent as EditButton } from '../../images/editButton.svg';
import { ReactComponent as TrashButton } from '../../images/trashButton.svg';

interface Props {
  categoriesName: string;
  styles: any;
  editCategoriesItem: () => void;
}

function CategoriesItem({ categoriesName, styles, editCategoriesItem }: Props) {
  return (
    <li className={styles.categories__item}>
      <p className={styles.categories__name}>{categoriesName}</p>
      <div className={styles.categories__buttons}>
        <button
          type='button'
          className={
            styles.categories__button + ' ' + styles.categories__button_icon
          }
          onClick={() => editCategoriesItem()}
        >
          <EditButton className={styles.categories__edit} />
        </button>
        <button
          type='button'
          className={
            styles.categories__button + ' ' + styles.categories__button_icon
          }
          onClick={() => console.log('yes')}
        >
          <TrashButton className={styles.categories__edit} />
        </button>
      </div>
    </li>
  );
}

export default CategoriesItem;
