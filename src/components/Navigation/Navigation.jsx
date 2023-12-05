import './Navigation.css';
import NavigationItem from '../NavigationItem/NavigationItem';
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
    <nav className='navigation'>
      <NavLink to='/products' className='nav-link'>
        <NavigationItem name={'Продукты'}>
          <Products className='icon' />
        </NavigationItem>
      </NavLink>
      <NavLink to='/clients' className='nav-link'>
        <NavigationItem name={'Пользователи'}>
          <Users className='icon' />
        </NavigationItem>
      </NavLink>
      <NavLink to='/categories' className='nav-link'>
        <NavigationItem name={'Категории'}>
          <Categories className='icon' />
        </NavigationItem>
      </NavLink>
      <NavLink to='/cities' className='nav-link'>
        <NavigationItem name={'Города'}>
          <Cities className='icon' />
        </NavigationItem>
      </NavLink>
      <NavLink to='/brands' className='nav-link'>
        <NavigationItem name={'Бренды'}>
          <Brands className='icon' />
        </NavigationItem>
      </NavLink>
      <NavLink to='/protocols' className='nav-link'>
        <NavigationItem name={'Протоколы'}>
          <Protocols className='icon' />
        </NavigationItem>
      </NavLink>
      <NavLink to='/orders' className='nav-link'>
        <NavigationItem name={'Заказы'}>
          <Orders className='icon' />
        </NavigationItem>
      </NavLink>
      <NavLink to='/banners' className='nav-link'>
        <NavigationItem name={'Баннеры'}>
          <Banners className='icon' />
        </NavigationItem>
      </NavLink>
      <NavLink to='/seminars' className='nav-link'>
        <NavigationItem name={'Семинары'}>
          <Seminars className='icon' />
        </NavigationItem>
      </NavLink>
      <NavLink to='/promocode' className='nav-link'>
        <NavigationItem name={'Промокоды'}>
          <Promocode className='icon' />
        </NavigationItem>
      </NavLink>
    </nav>
  );
}

export default Navigation;
