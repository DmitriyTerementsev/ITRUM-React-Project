import styles from './Categories.module.scss';
import React, { useState, useEffect } from 'react';
import CategoriesItem from '../CategoriesItem/CategoriesItem';
import categoriesList from '../../utils/categoriesList.ts';
import subCategoriesList from '../../utils/subCategoriesList.ts';

function Categories() {
  const [isActiveCat, setIsActiveCat] = useState(false);
  const [isActiveSubCat, setIsActiveSubCat] = useState(false);
  const [inputValueCat, setInputValueCat] = useState('');
  const [inputValueSubCat, setInputValueSubCat] = useState('');
  const [value, setValue] = useState('');

  function addCategories() {
    categoriesList.push({
      categoriesName: inputValueCat,
      id: categoriesList.length + 1,
    });
    setValue('');
  }

  function addSubCategories() {
    subCategoriesList.push({
      categoriesName: inputValueSubCat,
      id: subCategoriesList.length + 1,
    });
    setValue('');
  }

  useEffect(() => {
    categoriesList.length === 0 ? setIsActiveCat(true) : setIsActiveCat(false);
  }, [categoriesList.length]);

  useEffect(() => {
    subCategoriesList.length === 0
      ? setIsActiveSubCat(true)
      : setIsActiveSubCat(false);
  }, [subCategoriesList.length]);

  return (
    <section className={styles.categories}>
      <div className={styles.categories__elements}>
        <div className={styles.categories__element}>
          <input
            type='text'
            className={styles.categories__input}
            placeholder='Введите название категории'
            onChange={(e: any) => setInputValueCat(e.target.value)}
          />
          <button
            type='button'
            className={styles.categories__button}
            onClick={addCategories}
          >
            Добавить категорию
          </button>
          <ul className={styles.categories__items}>
            <p className={styles.categories__description}>Название категории</p>
            <p
              className={
                isActiveCat
                  ? styles.categories__null +
                    ' ' +
                    styles.categories__null_active
                  : styles.categories__null
              }
            >
              Здесь пока нет категорий
            </p>
            {categoriesList?.map(({ categoriesName, id }) => (
              <CategoriesItem key={id} categoriesName={categoriesName} styles={styles}/>
            ))}
          </ul>
        </div>
        <div className={styles.categories__element}>
          <input
            type='text'
            className={styles.categories__input}
            placeholder='Введите название подкатегории'
            onChange={(e: any) => setInputValueSubCat(e.target.value)}
          />
          <button
            type='button'
            className={styles.categories__button}
            onClick={addSubCategories}
          >
            Добавить подкатегорию
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
            {subCategoriesList?.map(({ categoriesName, id }) => (
              <CategoriesItem key={id} categoriesName={categoriesName} styles={styles}/>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Categories;
