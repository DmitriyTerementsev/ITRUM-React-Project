import React, { useEffect, useState } from 'react';
import styles from './Cities.module.scss';
import CitiesDescription from '../CitiesDescription/CitiesDescription.tsx';
import CitiesItem from '../CitiesItem/CitiesItem.tsx';
import {
  getCities,
  addCity,
  deleteCity,
} from '../../redux/thunks/cityThunk.ts';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks.ts';

function Cities() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((item) => {
    return item.city.cities;
  });

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  const allCities = data;

  useEffect(() => {
    setCities(allCities);
  }, [allCities]);

  const [cities, setCities] = useState(allCities);
  const [inputCityValue, setInputCityValue] = useState('');
  const [inputAddressValue, setInputAddressValue] = useState('');

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputCityValue.trim() && inputAddressValue.trim() !== '') {
      let id: string = String(Math.floor(Math.random() * 10000) + 1);
      dispatch(
        addCity({
          name: inputCityValue,
          id: id,
          address: inputAddressValue,
        })
      );
      setInputCityValue('');
      setInputAddressValue('');
    }
  };

  const handleDeleteItem = (id: string) => {
    dispatch(deleteCity(id));
  };

  return (
    <section className={styles.cities}>
      <form className={styles.cities__form} onSubmit={handleAddItem}>
        <input
          className={styles.cities__input}
          placeholder='Введите название города'
          value={inputCityValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputCityValue(e.target.value)
          }
          required
        />
        <input
          className={styles.cities__input}
          placeholder='Введите адрес'
          value={inputAddressValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputAddressValue(e.target.value)
          }
        />
        <button className={styles.cities__button}>Добавить город</button>
      </form>
      <CitiesDescription />
      <ul className={styles.cities__items}>
        <ul className={styles.orders__items}>
          {cities?.map(
            (item: { id: string; name: string; address: string }) => (
              <CitiesItem
                key={item.id}
                city={item.name}
                address={item.address}
                handleDeleteItem={() => handleDeleteItem(item.id)}
              />
            )
          )}
        </ul>
      </ul>
    </section>
  );
}

export default Cities;
