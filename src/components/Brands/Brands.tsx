import React, { useEffect, useState } from 'react';
import styles from './Brands.module.scss';
import BrandsDescription from '../BrandsDescription/BrandsDescription.tsx';
import { ReactComponent as Upload } from '../../assets/icons/upload.svg';
import brandsList from '../../constants/brandsList.ts';
import BrandsItem from '../BrandsItem/BrandsItem.tsx';

function Brands() {
  const [brandsItems, setBrandsItems] = useState(brandsList);
  const [activeBrands, setActiveBrands] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [inputLogoValue, setInputLogoValue] = useState('');
  const [inputLogoTextValue, setInputTextValue] = useState(
    'Загрузить логотип бренда'
  );

  useEffect(() => {
    brandsItems.length > 0 ? setActiveBrands(false) : setActiveBrands(true);
  }, [brandsItems.length]);

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      let id: number = Math.floor(Math.random() * 10000) + 1;
      const newList = [
        ...brandsItems,
        {
          brandName: inputValue,
          id: id,
          logo: inputLogoValue,
        },
      ];
      brandsList.push({
        brandName: inputValue,
        id: id,
        logo: inputLogoValue,
      });
      setBrandsItems(newList);
      setInputValue('');
    }
    console.log(brandsItems)
  };

  const handleDeleteItem = (id: number) => {
    const newList = brandsItems.filter((el) => el.id !== id);
    setBrandsItems(newList);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLogoValue(e.target.value);
  };

  useEffect(() => {
    inputLogoValue.trim() === ''
      ? setInputTextValue('Загрузить логотип бренда')
      : setInputTextValue(inputLogoValue);
  }, [inputLogoValue]);

  return (
    <section className={styles.brands}>
      <form className={styles.brands__form} onSubmit={handleAddItem}>
        <input
          className={styles.brands__input}
          type='text'
          placeholder='Введите название бренда'
          value={inputValue}
          onChange={handleChange}
        />
        <div
          className={`${styles.brands__input} ${styles.brands__input_upload}`}
        >
          <input
            type='file'
            id='file'
            value={inputLogoValue}
            onChange={handleChangeFile}
          />
          <input type='text' value={inputLogoTextValue} onChange={() => console.log("yes")} />
          <Upload className={styles.icon} />
        </div>
        <button className={styles.brands__button} type='submit'>
          Добавить бренд
        </button>
        <span>Размер логотипа 500x500 px PNG, JPG, JPEG</span>
      </form>
      <BrandsDescription />
      <ul className={styles.brands__items}>
        {activeBrands ? (
          <p className={styles.brands__null}>Здесь пока нет брендов</p>
        ) : (
          brandsItems?.map((item) => {
            <BrandsItem key={item.id} name={item.brandName} link={item.link} handleAddItem={handleAddItem} />;
          })
        )}
      </ul>
    </section>
  );
}

export default Brands;
