import React from 'react';
import styles from './Navigation.module.scss';
import NavigationItem from '../NavigationItem/NavigationItem.tsx';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Protocols } from '../../images/protocols.svg';
import { ReactComponent as Users } from '../../images/users.svg';
import { ReactComponent as Categories } from '../../images/categories.svg';
import { ReactComponent as Cities } from '../../images/cities.svg';
import { ReactComponent as Brands } from '../../images/brands.svg';
import { ReactComponent as Orders } from '../../images/orders.svg';
import { ReactComponent as Banners } from '../../images/banners.svg';
import { ReactComponent as Seminars } from '../../images/seminares.svg';
import { ReactComponent as Promocode } from '../../images/promocodes.svg';
import { ReactComponent as Products } from '../../images/products.svg';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavLink
        to='/products'
        className={(navbar) =>
          navbar.isActive ? styles.active : styles.navigation__link
        }
      >
        <NavigationItem styles={styles} name={'Продукты'}>
          <Products className={styles.navigation__icon} />
        </NavigationItem>
      </NavLink>
      <NavLink
        to='/clients'
        className={(navbar) =>
          navbar.isActive ? styles.active : styles.navigation__link
        }
      >
        <NavigationItem styles={styles} name={'Клиенты'}>
          <Users className={styles.navigation__icon} />
        </NavigationItem>
      </NavLink>
      <NavLink
        to='/categories'
        className={(navbar) =>
          navbar.isActive ? styles.active : styles.navigation__link
        }
      >
        <NavigationItem styles={styles} name={'Категории'}>
          <Categories className={styles.navigation__icon} />
        </NavigationItem>
      </NavLink>
      <NavLink
        to='/cities'
        className={(navbar) =>
          navbar.isActive ? styles.active : styles.navigation__link
        }
      >
        <NavigationItem styles={styles} name={'Города'}>
          <Cities className={styles.navigation__icon} />
        </NavigationItem>
      </NavLink>
      <NavLink
        to='/brands'
        className={(navbar) =>
          navbar.isActive ? styles.active : styles.navigation__link
        }
      >
        <NavigationItem styles={styles} name={'Бренды'}>
          <Brands className={styles.navigation__icon} />
        </NavigationItem>
      </NavLink>
      <NavLink
        to='/protocols'
        className={(navbar) =>
          navbar.isActive ? styles.active : styles.navigation__link
        }
      >
        <NavigationItem styles={styles} name={'Протоколы'}>
          <Protocols className={styles.navigation__icon} />
        </NavigationItem>
      </NavLink>
      <NavLink
        to='/orders'
        className={(navbar) =>
          navbar.isActive ? styles.active : styles.navigation__link
        }
      >
        <NavigationItem styles={styles} name={'Заказы'}>
          <Orders className={styles.navigation__icon} />
        </NavigationItem>
      </NavLink>
      <NavLink
        to='/banners'
        className={(navbar) =>
          navbar.isActive ? styles.active : styles.navigation__link
        }
      >
        <NavigationItem styles={styles} name={'Баннеры'}>
          <Banners className={styles.navigation__icon} />
        </NavigationItem>
      </NavLink>
      <NavLink
        to='/seminars'
        className={(navbar) =>
          navbar.isActive ? styles.active : styles.navigation__link
        }
      >
        <NavigationItem styles={styles} name={'Семинары'}>
          <Seminars className={styles.navigation__icon} />
        </NavigationItem>
      </NavLink>
      <NavLink
        to='/promocode'
        className={(navbar) =>
          navbar.isActive ? styles.active : styles.navigation__link
        }
      >
        <NavigationItem styles={styles} name={'Промокоды'}>
          <Promocode className={styles.navigation__icon} />
        </NavigationItem>
      </NavLink>
    </nav>
  );
}

export default Navigation;
