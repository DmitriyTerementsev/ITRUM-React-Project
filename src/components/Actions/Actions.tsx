import React from 'react';
import styles from './Actions.module.scss';
import ActionsDescription from '../ActionsDescription/ActionsDescription.tsx';
import ActionsItem from '../ActionsItem/ActionsItem.tsx';
import ActionsSelected from '../ActionsSelected/ActionsSelected.tsx';

interface ActionsProps {
  list: any;
  handleDeleteItem: () => void;
  handleClickAllSelect: (e: any) => void;
  handleClickItem: (e: any) => void;
  counter: number;
  isActive: boolean;
  closePopup: () => void;
  showProducts: any[];
  description: any;
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
}: ActionsProps) {
  return (
    <div className={styles.actions}>
      <ActionsDescription
        handleClickAllSelect={(e: any) => handleClickAllSelect(e)}
        description={description}
        styles={styles}
      />
      <ul className={styles.actions__items} ref={list}>
        {showProducts?.map(
          (product) => (
            <ActionsItem
              key={product.id}
              categories={product.categories}
              subcategories={product.subcategories}
              brand={product.brand}
              product={product.product}
              cashback={product.cashback}
              handleClickItem={(e: any) => handleClickItem(e)}
              id={product.id}
              checked={product.checked}
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
