import React, { useEffect, useState } from 'react';
import styles from './Banners.module.scss';
import BannersDescription from '../BannersDescription/BannersDescription.tsx';
import BannersItem from '../BannersItem/BannersItem.tsx';
import {
  getCities,
  deleteCity,
  addCity,
} from '../../redux/thunks/cityThunk.ts';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks.ts';
import PopupOrders from '../PopupOrders/PopupOrders.tsx';

function Banners() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((item) => {
    return item.city.cities;
  });
  interface Item {
    id: string | undefined;
    description: string | undefined;
    image: string | undefined;
    name: string | undefined;
  }
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item>();
  console.log(selectedItem);
  const openPopup = () => {
    if (isOpen === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  const allBanners = data;

  useEffect(() => {
    setBanners(allBanners);
  }, [allBanners]);

  const [banners, setBanners] = useState(allBanners);

  const handleSetItem = (item) => {
    setSelectedItem(item);
    openPopup();
  };

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let id: string = String(Math.floor(Math.random() * 10000) + 1);
  };

  const handleDeleteItem = (id: string) => {
    dispatch(deleteCity(id));
    onClose();
  };

  return (
    <section className={styles.cities}>
      <button className={styles.cities__button} onClick={() => openPopup()}>
        Добавить баннер
      </button>
      <BannersDescription />
      <ul className={styles.cities__items}>
        {banners?.map((item: { id: string; name: string; address: string }) => (
          <BannersItem
            item={item}
            key={item.id}
            city={item.name}
            address={item.address}
            handleDeleteItem={() => handleDeleteItem(item.id)}
            openPopup={() => openPopup()}
            handleSetItem={() => handleSetItem(item)}
          />
        ))}
      </ul>
      <PopupOrders
        isOpen={isOpen}
        onClose={onClose}
        selectedItem={selectedItem}
        handleDeleteItem={() => handleDeleteItem(selectedItem.id)}
      />
    </section>
  );
}

export default Banners;
