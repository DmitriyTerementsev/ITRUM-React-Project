import React, { useState } from 'react';
import styles from '../Brands/Brands.module.scss';
import { ReactComponent as EditButton } from '../../assets/icons/editButton.svg';
import { ReactComponent as TrashButton } from '../../assets/icons/trashButton.svg';
import { ReactComponent as Layout } from '../../assets/icons/baseLogo.svg';
import { useDispatch } from 'react-redux';
import { deleteBrand, editBrandLogo, editBrandName } from '../../types/types.ts';
import PopupDeleteItem from '../PopupDeleteItem/PopupDeleteItem.tsx';

interface BrandsItemProps {
  brandName: string;
  logo: string;
  handleDeleteItem: () => void;
  item: any;
  checkUpload: () => void;
  isOpen: boolean;
  onClose: () => void;
  inputLogoTextValue: string;
  openPopup: () => void;
}

function BrandsItem({
  brandName,
  logo,
  handleDeleteItem,
  openPopup,
  checkUpload,
  isOpen,
  onClose,
  item,
  inputLogoTextValue,
}: BrandsItemProps) {
  const dispatch = useDispatch();

  const [isEdited, setIsEdited] = useState(false);
  const [text, setText] = useState(brandName);

  const handleEditText = (e: any) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      setIsEdited(!isEdited);
      dispatch(editBrandName(text, item.id));
      checkUpload();
    }
  };

  const handleEditClick = () => {
    setIsEdited(!isEdited);
    checkUpload();
  };

  const handleDeleteClick = () => {
    dispatch(deleteBrand(item.id))
  };

  const handleEditLogo = () => {
    if (inputLogoTextValue !== 'Загрузить логотип бренда') {
      checkUpload();
      dispatch(editBrandLogo(inputLogoTextValue, item.id));
    }
  };

  return (
    <>
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
      <PopupDeleteItem
        isOpen={isOpen}
        onClose={onClose}
        handleDeleteItem={handleDeleteItem}
        item={item}
      />
    </>
  );
}

export default BrandsItem;
