import './Categories.css';
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
    <section className='categories'>
      <div className='categories__elements'>
        <div className='categories__element'>
          <input
            type='text'
            className='categories__input'
            placeholder='Введите название категории'
            value={value}
            onChange={(e: any) => setInputValueCat(e.target.value)}
          />
          <button
            type='button'
            className='categories__button'
            onClick={addCategories}
          >
            Добавить категорию
          </button>
          <ul className='categories__items'>
            <p className='categories__description'>Название категории</p>
            <p
              className={
                isActiveCat
                  ? 'categories__null categories__null_active'
                  : 'categories__null'
              }
            >
              Здесь пока нет категорий
            </p>
            {categoriesList?.map(({ categoriesName, id }) => (
              <CategoriesItem key={id} categoriesName={categoriesName} />
            ))}
          </ul>
        </div>
        <div className='categories__element'>
          <input
            type='text'
            className='categories__input'
            placeholder='Введите название подкатегории'
            value={value}
            onChange={(e: any) => setInputValueSubCat(e.target.value)}
          />
          <button
            type='button'
            className='categories__button'
            onClick={addSubCategories}
          >
            Добавить подкатегорию
          </button>
          <ul className='categories__items'>
            <p className='categories__description'>Название подкатегории</p>
            <p
              className={
                isActiveSubCat
                  ? 'categories__null categories__null_active'
                  : 'categories__null'
              }
            >
              Здесь пока нет подкатегорий
            </p>
            {subCategoriesList?.map(({ categoriesName, id }) => (
              <CategoriesItem key={id} categoriesName={categoriesName} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Categories;
