import React from 'react';
import styles from './Actions.module.scss'
import ActionsDescription from '../ActionsDescription/ActionsDescription';
import ActionsItem from '../ActionsItem/ActionsItem';
import ActionsSelected from '../ActionsSelected/ActionsSelected';

function Actions({
  list,
  handleDeleteItem,
  clickHandlerAll,
  clickHandler,
  counter,
  isActive,
  closePopup,
  showProducts,
  description
}) {
  //---------render items by showPages icon

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
