import styles from './Categories.module.scss';
import React, { useState, useEffect } from 'react';
import CategoriesItem from '../CategoriesItem/CategoriesItem.tsx';
import categoriesList from '../../constants/categoriesList.ts';
import subCategoriesList from '../../constants/subCategoriesList.ts';

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

  function addCategories() {
    if (inputValueCat !== '' && buttonTextCat === 'Добавить категорию') {
      categoriesList.push({
        categoriesName: inputValueCat,
        id: categoriesList.length + 1,
      });
      setInputValueCat('');
    } else if (buttonTextCat === 'Сохранить изменения') {
      setInputValueCat('');
      setButtonTextCat('Добавить категорию');
    }
  }

  function addSubCategories() {
    if (
      inputValueSubCat !== '' &&
      buttonTextSubCat === 'Добавить подкатегорию'
    ) {
      subCategoriesList.push({
        categoriesName: inputValueSubCat,
        id: subCategoriesList.length + 1,
      });
      setInputValueSubCat('');
    } else if (buttonTextSubCat === 'Сохранить изменения') {
      setInputValueSubCat('');
      setButtonTextSubCat('Добавить подкатегорию');
    }
  }

  function editCategoriesItem(categoriesName: string, id: number) {
    setButtonTextCat('Сохранить изменения');
    setInputValueCat(categoriesName);
  }

  function editSubCategoriesItem(categoriesName: string, id: number) {
    setButtonTextSubCat('Сохранить изменения');
    setInputValueSubCat(categoriesName);
  }

  function deleteCategoriesItem(id: number) {
    categoriesList.splice(id - 1, 1);
  }

  function deleteSubCategoriesItem(id: number) {
    subCategoriesList.splice(id - 1, 1);
  }

  useEffect(() => {
    categoriesList.length === 0 ? setIsActiveCat(true) : setIsActiveCat(false);
  }, [categoriesList.length]);

  useEffect(() => {
    subCategoriesList.length === 0
      ? setIsActiveSubCat(true)
      : setIsActiveSubCat(false);
  }, [subCategoriesList.length]);

  useEffect(() => {
    setCategoriesItems(categoriesList);
    setSubCategoriesItems(subCategoriesList);
  }, [categoriesList, subCategoriesList]);

  return (
    <section className={styles.categories}>
      <div className={styles.categories__elements}>
        <div className={styles.categories__element}>
          <input
            type='text'
            className={styles.categories__input}
            placeholder='Введите название категории'
            value={inputValueCat}
            onChange={(e: any) => setInputValueCat(e.target.value)}
          />
          <button
            type='button'
            className={styles.categories__button}
            onClick={addCategories}
          >
            {buttonTextCat}
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
            {categoriesItems?.map(({ categoriesName, id }) => (
              <CategoriesItem
                key={id}
                categoriesName={categoriesName}
                styles={styles}
                editCategoriesItem={() =>
                  editCategoriesItem(categoriesName, id)
                }
                deleteCategoriesItem={() => deleteCategoriesItem(id)}
              />
            ))}
          </ul>
        </div>
        <div className={styles.categories__element}>
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
            onClick={addSubCategories}
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
                editCategoriesItem={() =>
                  editSubCategoriesItem(categoriesName, id)
                }
                deleteCategoriesItem={() => deleteSubCategoriesItem(id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Categories;
