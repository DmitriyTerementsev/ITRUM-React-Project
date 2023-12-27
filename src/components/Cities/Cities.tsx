import React, { useEffect, useState } from 'react';
import styles from './Cities.module.scss';
import CitiesDescription from '../CitiesDescription/CitiesDescription.tsx';
import CitiesItem from '../CitiesItem/CitiesItem.tsx';
import { AppDispatch, RootState } from '../../redux/store/store.ts';
import { useDispatch, useSelector } from 'react-redux';

function Cities() {
  const dispatch = useDispatch<AppDispatch>();
  const data: any = useSelector<RootState>((item) => {
    return item;
  });

  const allCities: any[] = data.city.cities;
  const [cities, setCities] = useState(allCities);
  const [inputCityValue, setInputCityValue] = useState('');
  const [inputAddressValue, setInputAddressValue] = useState('');

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputCityValue.trim() && inputAddressValue.trim() !== '') {
      let id: string = String(Math.floor(Math.random() * 10000) + 1);
      setInputCityValue('');
      setInputAddressValue('');
    }
  };

  const handleDeleteItem = (id: string) => {
    // dispatch(deleteCity(id));
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
          required
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
