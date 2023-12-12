import React, { useState } from 'react';
import { ReactComponent as EditButton } from '../../images/editButton.svg';
import { ReactComponent as TrashButton } from '../../images/trashButton.svg';

interface Props {
  item: any;
  styles: any;
  handleDeleteItem: (id) => void;
  handleCompleteStatusUpdate: (item) => void;
  itemName: string;
  categoriesItems: any;
}

function CategoriesItem({
  item,
  styles,
  handleDeleteItem,
  itemName,
  handleCompleteStatusUpdate,
  categoriesItems,
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

  const [isComplete, setIsComplete] = useState(false);
  
  const handleCheckBox = () => {
    categoriesItems.map(item => {
      console.log(item)
      item.status === true? item.status = false :  item.status = false
      handleCompleteStatusUpdate(item)
      setIsComplete(false);
    })
    if (isComplete === false) {
      setIsComplete(true);
      item.status = true;
    } else {
      setIsComplete(false);
      item.status = false;
    }
    handleCompleteStatusUpdate(item);
  };

  return (
    <li
      className={
        item.status === true
          ? styles.categories__item + ' ' + styles.categories__item_click
          : styles.categories__item
      }
    >
      <input
        type='checkbox'
        onChange={handleCheckBox}
        checked={item.status === true ? true : false}
      />
      {!isEdited ? (
        <p className={styles.task__text} onClick={handleEditClick}>
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
