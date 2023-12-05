import React from 'react';
import styles from './Actions.module.scss';
import ActionsDescription from '../ActionsDescription/ActionsDescription.tsx';
import ActionsItem from '../ActionsItem/ActionsItem.tsx';
import ActionsSelected from '../ActionsSelected/ActionsSelected.tsx';

interface Props {
  list: any;
  handleDeleteItem: () => void;
  clickHandlerAll: () => void;
  clickHandler: () => void;
  counter: number;
  isActive: boolean;
  closePopup: () => void;
  showProducts: any[];
  description: any;
}

function Actions({
  list,
  handleDeleteItem,
  clickHandlerAll,
  clickHandler,
  counter,
  isActive,
  closePopup,
  showProducts,
  description,
}: Props) {
  return (
    <div className={styles.actions}>
      <ActionsDescription
        clickHandlerAll={clickHandlerAll}
        description={description}
        styles={styles}
      />
      <ul className={styles.actions__items} ref={list}>
        {showProducts?.map(
          ({ id, categories, subcategories, brand, product, cashback }) => (
            <ActionsItem
              key={id}
              categories={categories}
              subcategories={subcategories}
              brand={brand}
              product={product}
              cashback={cashback}
              clickHandler={clickHandler}
              id={id}
              styles={styles}
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
