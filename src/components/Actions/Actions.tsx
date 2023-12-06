import React from 'react';
import styles from './Actions.module.scss';
import ActionsDescription from '../ActionsDescription/ActionsDescription.tsx';
import ActionsItem from '../ActionsItem/ActionsItem.tsx';
import ActionsSelected from '../ActionsSelected/ActionsSelected.tsx';

interface Props {
  list: any;
  handleDeleteItem: () => void;
  handleClickAllSelect: (e: any) => void;
  handleClickItem: (e: any) => void;
  counter: number;
  isActive: boolean;
  closePopup: () => void;
  showProducts: any[];
  description: any;
  checked: boolean;
}

function Actions({
  list,
  handleDeleteItem,
  handleClickAllSelect,
  handleClickItem,
  counter,
  isActive,
  closePopup,
  showProducts,
  description,
  checked
}: Props) {
  return (
    <div className={styles.actions}>
      <ActionsDescription
        handleClickAllSelect={(e: any) => handleClickAllSelect(e)}
        description={description}
        styles={styles}
      />
      <ul className={styles.actions__items} ref={list}>
        {showProducts?.map(
          ({
            id,
            categories,
            subcategories,
            brand,
            product,
            cashback,
            checked,
          }) => (
            <ActionsItem
              key={id}
              categories={categories}
              subcategories={subcategories}
              brand={brand}
              product={product}
              cashback={cashback}
              handleClickItem={(e: any) => handleClickItem(e)}
              id={id}
              styles={styles}
              checked={checked}
            />
          )
        )}
      </ul>
      <ActionsSelected
        counter={counter}
        handleDeleteItem={handleDeleteItem}
        isActive={isActive}
        closePopup={closePopup}
        styles={styles}
      />
    </div>
  );
}

export default Actions;
