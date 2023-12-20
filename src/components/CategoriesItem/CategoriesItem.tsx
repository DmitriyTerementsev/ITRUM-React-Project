import React, { useState } from 'react';
import { ReactComponent as EditButton } from '../../assets/icons/editButton.svg';
import { ReactComponent as TrashButton } from '../../assets/icons/trashButton.svg';
import styles from '../Categories/Categories.module.scss';
import { useDispatch } from 'react-redux';
import { editCategoryName } from '../../types/categoryTypes.ts';
import { editSubCategoryName } from '../../types/subCategoryTypes.ts';
interface CategoriesItemProps {
  item: any;
  handleDeleteItem: (id: number) => void;
  handleCompleteStatusUpdate: (item: any) => void;
  name: string;
  categoriesItems: any[];
  selectedCategory: number | null;
}

function CategoriesItem({
  item,
  handleDeleteItem,
  name,
  handleCompleteStatusUpdate,
  categoriesItems,
  selectedCategory,
}: CategoriesItemProps) {
  const dispatch = useDispatch();
  const [isEdited, setIsEdited] = useState(false);
  const [text, setText] = useState(name);

  const handleDeleteClick = () => {
    handleDeleteItem(item.id);
  };

  const handleEditClick = () => {
    if (isEdited) {
      setIsEdited(!isEdited);
      dispatch(editCategoryName(text, item.id));
      dispatch(editSubCategoryName(text, item.id));
    } else {
      setIsEdited(!isEdited);
    }
  };

  const handleEditText = (e: any) => {
    setText(e.target.value);
  };

  const handleCheckBox = () => {
    handleCompleteStatusUpdate(item);
  };

  return (
    <li
      className={
        item.position === selectedCategory && item.catalog_product === undefined
          ? `${styles.categories__item} ${styles.categories__item_click}`
          : styles.categories__item
      }
    >
      <div
        className={styles.div}
        onClick={() =>
          item.catalog_product === undefined
            ? handleCheckBox()
            : console.log('no')
        }
      >
        {!isEdited ? (
          <p className={styles.task__text}>{text}</p>
        ) : (
          <input
            className={`${styles.task__text_edit} ${styles.task__text_active}`}
            name='textEdit'
            onChange={handleEditText}
            value={text}
            autoFocus
          />
        )}
      </div>
      <div className={styles.categories__buttons}>
        <button
          type='button'
          className={`${styles.categories__button} ${styles.categories__button_icon}`}
          onClick={handleEditClick}
        >
          <EditButton className={styles.categories__edit} />
        </button>
        <button
          type='button'
          className={`${styles.categories__button} ${styles.categories__button_icon}`}
          onClick={handleDeleteClick}
        >
          <TrashButton className={styles.categories__edit} />
        </button>
      </div>
    </li>
  );
}

export default CategoriesItem;
