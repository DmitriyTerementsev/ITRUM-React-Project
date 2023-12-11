import styles from './Categories.module.scss';
import React, { useState, useEffect } from 'react';
import CategoriesItem from '../CategoriesItem/CategoriesItem.tsx';
import categoriesList from '../../constants/categoriesList.ts';
import subCategoriesList from '../../constants/subCategoriesList.ts';
import { ReactComponent as Arrows } from '../../images/arrows.svg';

function Categories() {
  const [isActiveCat, setIsActiveCat] = useState(false);
  const [isActiveSubCat, setIsActiveSubCat] = useState(false);
  const [inputValueCat, setInputValueCat] = useState('');
  const [inputValueSubCat, setInputValueSubCat] = useState('');
  const [buttonTextCat, setButtonTextCat] = useState('Добавить категорию');
  const [buttonTextSubCat, setButtonTextSubCat] = useState(
    'Добавить подкатегорию'
  );
  const [categoriesItems, setCategoriesItems] = useState<any>([]);
  const [subCategoriesItems, setSubCategoriesItems] = useState<any>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (e: any) => {
    setInputValueCat(e.target.value);
  };

  // Обработчик добавления новой задачи
  const handleAddItem = () => {
    const newList = [
      ...categoriesItems,
      {
        categoriesName: inputValueCat,
        id: categoriesItems.length + 1,
        status: false,
      },
    ];
    setCategoriesItems(newList);
    setInputValueCat('');
  };

  // Обработчик удаления задачи
  const handleDeleteItem = (id: number) => {
    const newList = categoriesItems.filter((el) => el.id !== id);
    setCategoriesItems(newList);
  };

  const handleCompleteStatusUpdate = (item: any) => {
    const newList = categoriesItems.map((el) => {
      if (el.id === item.id) {
        el.status = item.status;
      }
      return el;
    });
    setCategoriesItems(newList);
  };

  const handleCheckBox = (item) => {
    setIsComplete(!isComplete);
    item.status = !isComplete;
    handleCompleteStatusUpdate(item);
  };

  useEffect(() => {
    categoriesItems.length > 0 ? setIsActiveCat(true) : setIsActiveCat(false);
  }, [categoriesItems.length]);

  return (
    <section className={styles.categories}>
      <div className={styles.categories__elements}>
        <div className={styles.categories__element}>
          <input
            type='text'
            className={styles.categories__input}
            placeholder='Введите название категории'
            value={inputValueCat}
            onChange={handleChange}
          />
          <button
            type='button'
            className={styles.categories__button}
            onClick={handleAddItem}
          >
            {buttonTextCat}
          </button>
          <ul className={styles.categories__items}>
            <p className={styles.categories__description}>Название категории</p>
            <p
              className={
                !isActiveCat
                  ? styles.categories__null +
                    ' ' +
                    styles.categories__null_active
                  : styles.categories__null
              }
            >
              Здесь пока нет категорий
            </p>
            {categoriesItems?.map((item: any) => (
              <CategoriesItem
                item={item}
                key={item.id}
                itemName={item.categoriesName}
                styles={styles}
                handleDeleteItem={() => handleDeleteItem(item.id)}
                handleCompleteStatusUpdate={() =>
                  handleCompleteStatusUpdate(item)
                }
                isComplete={isComplete}
                handleCheckBox={() => handleCheckBox(item)}
              />
            ))}
          </ul>
        </div>
        <Arrows className={styles.arrows} />
        <p
          className={
            !isComplete
              ? styles.categories__choice +
                ' ' +
                styles.categories__choice_active
              : styles.categories__choice
          }
        >
          Выберите категорию
        </p>
        <div
          className={
            !isComplete
              ? styles.categories__element +
                ' ' +
                styles.categories__element_null
              : styles.categories__element
          }
        >
          <input
            type='text'
            className={styles.categories__input}
            placeholder='Введите название подкатегории'
            value={inputValueSubCat}
            onChange={(e: any) => setInputValueSubCat(e.target.value)}
          />
          <button
            type='button'
            className={styles.categories__button}
            onClick={() => console.log('yes')}
          >
            {buttonTextSubCat}
          </button>
          <ul className={styles.categories__items}>
            <p className={styles.categories__description}>
              Название подкатегории
            </p>
            <p
              className={
                isActiveSubCat
                  ? styles.categories__null +
                    ' ' +
                    styles.categories__null_active
                  : styles.categories__null
              }
            >
              Здесь пока нет подкатегорий
            </p>
            {subCategoriesItems?.map(({ categoriesName, id }) => (
              <CategoriesItem
                key={id}
                categoriesName={categoriesName}
                styles={styles}
                editCategoriesItem={() => console.log('yes')}
                deleteCategoriesItem={() => console.log('yes')}
                isClicked={isClicked}
                handleClickCategories={() => console.log('yes')}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Categories;
