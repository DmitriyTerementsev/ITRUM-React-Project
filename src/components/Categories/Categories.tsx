import styles from './Categories.module.scss';
import React, { useState, useEffect } from 'react';
import CategoriesItem from '../CategoriesItem/CategoriesItem.tsx';
import categoriesList from '../../constants/categoriesList.ts';
import subCategoriesList from '../../constants/subCategoriesList.ts';
import { ReactComponent as Arrows } from '../../images/arrows.svg';

function Categories() {
  const [isActiveCat, setIsActiveCat] = useState<boolean>(false);
  const [isActiveSubCat, setIsActiveSubCat] = useState<boolean>(false);
  const [inputValueCat, setInputValueCat] = useState<string>('');
  const [inputValueSubCat, setInputValueSubCat] = useState<string>('');
  const [buttonTextCat, setButtonTextCat] =
    useState<string>('Добавить категорию');
  const [buttonTextSubCat, setButtonTextSubCat] = useState<string>(
    'Добавить подкатегорию'
  );
  const [selectedCategorie, setSelectedCategorie] = useState(0);
  const [categoriesItems, setCategoriesItems] = useState<any[]>(categoriesList);
  const [subCategoriesItems, setSubCategoriesItems] =
    useState<any[]>(subCategoriesList);

  const handleChange = (e: any) => {
    setInputValueCat(e.target.value);
  };

  const handleChangeSub = (e: any) => {
    setInputValueSubCat(e.target.value);
  };

  // Обработчик добавления новой задачи
  const handleAddItem = (e:any) => {
    e.preventDefault()
    if (inputValueCat.trim() !== '') {
      let id: number = Math.floor(Math.random() * 10000) + 1;
      const newList = [
        ...categoriesItems,
        {
          categoriesName: inputValueCat,
          id: id,
          status: false,
        },
      ];
      categoriesList.push({
        categoriesName: inputValueCat,
        id: id,
        status: false,
      });
      setCategoriesItems(newList);
      setInputValueCat('');
    }
  };

  const handleAddSubItem = (e: any) => {
    e.preventDefault()
    if (inputValueSubCat.trim() !== '') {
      let id: number = Math.floor(Math.random() * 10000) + 1;
      const newList = [
        ...subCategoriesItems,
        {
          categoriesName: inputValueSubCat,
          id: id,
          categories: selectedCategorie,
        },
      ];
      subCategoriesList.push({
        categoriesName: inputValueSubCat,
        id: id,
        categories: selectedCategorie,
      });
      setSubCategoriesItems(newList);
      setInputValueSubCat('');
    }
  };

  // Обработчик удаления задачи
  const handleDeleteItem = (id: number) => {
    const newList = categoriesItems.filter((el) => el.id !== id);
    setCategoriesItems(newList);
  };

  const handleDeleteSubItem = (id: number) => {
    const newList = subCategoriesItems.filter((el) => el.id !== id);
    setSubCategoriesItems(newList);
  };

  const handleCompleteStatusUpdate = (item: any) => {
    const newList = categoriesItems.map((el: any) => {
      if (el.id === item.id) {
        el.status = item.status;
      }
      return el;
    });
    setCategoriesItems(newList);
  };

  useEffect(() => {
    categoriesItems.length > 0 ? setIsActiveCat(true) : setIsActiveCat(false);
  }, [categoriesItems.length]);

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(categoriesItems.some((element) => element.status === true));
  }, [categoriesItems]);

  useEffect(() => {
    subCategoriesItems.length === 0
      ? setIsActiveSubCat(true)
      : setIsActiveSubCat(false);
  });

  useEffect(() => {
    if (isClicked === false) {
      setSelectedCategorie(0);
    } else {
      setSelectedCategorie(selectedCategorie);
    }
  }, [isClicked]);

  useEffect(() => {
    categoriesItems.forEach((item) => {
      if (item.status === true) {
        setSelectedCategorie(item.id);
      }
    });
    setSubCategoriesItems(
      subCategoriesList
        .filter((item: any) => item.categories === selectedCategorie)
        .map((item: any) => item)
    );
  }, [categoriesItems, selectedCategorie, subCategoriesList]);

  useEffect(() => {
    setSubCategoriesItems(
      subCategoriesList
        .filter((item: any) => item.categories === selectedCategorie)
        .map((item: any) => item)
    );
  }, [categoriesItems, isClicked]);

  return (
    <section className={styles.categories}>
      <div className={styles.categories__elements}>
        <div className={styles.categories__element}>
          <form action='' onSubmit={e => handleAddItem(e)} >
            <input
              type='text'
              className={styles.categories__input}
              placeholder='Введите название категории'
              value={inputValueCat}
              onChange={handleChange}
            />
            <button type='submit' className={styles.categories__button} onClick={handleAddItem}>
              {buttonTextCat}
            </button>
          </form>
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
                categoriesItems={categoriesItems}
                subCategoriesItems={subCategoriesItems}
                item={item}
                key={item.id}
                itemName={item.categoriesName}
                styles={styles}
                handleDeleteItem={() => handleDeleteItem(item.id)}
                handleCompleteStatusUpdate={() =>
                  handleCompleteStatusUpdate(item)
                }
              />
            ))}
          </ul>
        </div>
        <Arrows className={styles.arrows} />
        <p
          className={
            !isClicked
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
            !isClicked
              ? styles.categories__element +
                ' ' +
                styles.categories__element_null
              : styles.categories__element
          }
        ><form action='' onSubmit={e => handleAddSubItem(e)} >
          <input
            type='text'
            className={styles.categories__input}
            placeholder='Введите название подкатегории'
            value={inputValueSubCat}
            onChange={handleChangeSub}
          />
          <button
            type='submit'
            className={styles.categories__button}
            onClick={handleAddSubItem}
          >
            {buttonTextSubCat}
          </button></form>
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
            {subCategoriesItems?.map((item: any) => (
              <CategoriesItem
                categoriesItems={categoriesItems}
                subCategoriesItems={subCategoriesItems}
                item={item}
                key={item.id}
                itemName={item.categoriesName}
                styles={styles}
                handleDeleteItem={() => handleDeleteSubItem(item.id)}
                handleCompleteStatusUpdate={() =>
                  handleCompleteStatusUpdate(item)
                }
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Categories;
