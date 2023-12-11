import React, { useState } from 'react';
import { ReactComponent as EditButton } from '../../images/editButton.svg';
import { ReactComponent as TrashButton } from '../../images/trashButton.svg';

interface Props {
  item: any;
  styles: any;
  handleDeleteItem: (id) => void;
  handleCompleteStatusUpdate: (item) => void;
  isComplete: boolean;
  handleCheckBox: () => void;
  itemName: string;
}

function CategoriesItem({
  item,
  styles,
  handleDeleteItem,
  isComplete,
  handleCheckBox,
  itemName,
}: Props) {
  const [isEdited, setIsEdited] = useState(false);
  const [text, setText] = useState(itemName);

  const handleDeleteClick = () => {
    console.log(item.id);
    handleDeleteItem(item.id);
  };

  const handleEditClick = () => {
    setIsEdited(!isEdited);
  };

  const handleEditText = (e: any) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      setIsEdited(!isEdited);
    }
  };

  return (
    <li
      className={
        isComplete
          ? styles.categories__item + ' ' + styles.categories__item_click
          : styles.categories__item
      }
    >
      <input
        type='checkbox'
        onChange={handleCheckBox}
        checked={isComplete ? true : false}
      />
      {!isEdited ? (
        <p
          className={styles.task___text_status_complete}
          onClick={handleEditClick}
        >
          {text}
        </p>
      ) : (
        <input
          className={styles.task__text_edit + ' ' + styles.task__text_active}
          name='textEdit'
          onChange={handleEditText}
          value={text}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      )}
      <div className={styles.categories__buttons}>
        <button
          type='button'
          className={
            styles.categories__button + ' ' + styles.categories__button_icon
          }
          onClick={handleEditClick}
        >
          <EditButton className={styles.categories__edit} />
        </button>
        <button
          type='button'
          className={
            styles.categories__button + ' ' + styles.categories__button_icon
          }
          onClick={handleDeleteClick}
        >
          <TrashButton className={styles.categories__edit} />
        </button>
      </div>
    </li>
  );
}

export default CategoriesItem;
