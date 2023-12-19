import React, { useState } from 'react';
import styles from '../Brands/Brands.module.scss';
import { ReactComponent as EditButton } from '../../assets/icons/editButton.svg';
import { ReactComponent as TrashButton } from '../../assets/icons/trashButton.svg';
import { ReactComponent as Layout } from '../../assets/icons/baseLogo.svg';

interface BrandsItemProps {
  brandName: string;
  logo: string;
  handleDeleteItem: () => void;
  item: any;
  openPopup: () => void;
}

function BrandsItem({
  brandName,
  logo,
  handleDeleteItem,
  openPopup,
}: BrandsItemProps) {
  const [isEdited, setIsEdited] = useState(false);
  const [text, setText] = useState(brandName);

  const handleEditText = (e: any) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      setIsEdited(!isEdited);
    }
  };

  const handleEditClick = () => {
    setIsEdited(!isEdited);
  };

  const handleDeleteClick = () => {
    openPopup();
  };

  const handleEditLogo = () => {};

  return (
    <li className={styles.brands__item}>
      <div className={styles.brands__logo}>
        <img
          src={logo}
          alt='logo'
          className={
            !isEdited
              ? styles.brands__image
              : `${styles.brands__image} ${styles.brands__image_active}`
          }
        />
        <Layout
          className={
            isEdited
              ? styles.brands__layout
              : `${styles.brands__layout} ${styles.brands__layout_inactive}`
          }
          onClick={handleEditLogo}
        />
      </div>
      {!isEdited ? (
        <p className={styles.brands__name} onClick={handleEditClick}>
          {text}
        </p>
      ) : (
        <input
          className={`${styles.brands__name_edit} ${styles.brands__name_active}`}
          name='textEdit'
          onChange={handleEditText}
          value={text}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      )}
      <div className={styles.brands__buttons}>
        <button
          type='button'
          className={`${styles.brands__button} ${styles.brands__button_icon}`}
          onClick={handleEditClick}
        >
          <EditButton className={styles.brands__edit} />
        </button>
        <button
          type='button'
          className={`${styles.brands__button} ${styles.brands__button_icon}`}
          onClick={handleDeleteClick}
        >
          <TrashButton className={styles.brands__edit} />
        </button>
      </div>
    </li>
  );
}

export default BrandsItem;
