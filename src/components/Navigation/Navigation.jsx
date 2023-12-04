import './Navigation.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import { NavLink } from 'react-router-dom';
import navigationItems from '../../utils/constants';
import { ReactComponent as Protocols } from '../../images/protocols.svg';

function Navigation() {
  return (
    <nav className='navigation'>
      <div className='kek'>
        <Protocols className='lol' />
      </div>

      <NavLink to='/products' className='nav-link'>
        <NavigationItem link={navigationItems.products} name={'Продукты'} />
      </NavLink>
      <NavLink to='/clients' className='nav-link'>
        <NavigationItem link={navigationItems.users} name={'Пользователи'} />
      </NavLink>
      <NavLink to='/categories' className='nav-link'>
        <NavigationItem link={navigationItems.categories} name={'Категории'} />
      </NavLink>
      <NavLink to='/cities' className='nav-link'>
        <NavigationItem link={navigationItems.cities} name={'Города'} />
      </NavLink>
      <NavLink to='/brands' className='nav-link'>
        <NavigationItem link={navigationItems.brands} name={'Бренды'} />
      </NavLink>
      <NavLink to='/protocols' className='nav-link'>
        <NavigationItem link={navigationItems.protocols} name={'Протоколы'} />
      </NavLink>
      <NavLink to='/orders' className='nav-link'>
        <NavigationItem link={navigationItems.orders} name={'Заказы'} />
      </NavLink>
      <NavLink to='/banners' className='nav-link'>
        <NavigationItem link={navigationItems.banners} name={'Баннеры'} />
      </NavLink>
      <NavLink to='/seminars' className='nav-link'>
        <NavigationItem link={navigationItems.seminars} name={'Семинары'} />
      </NavLink>
      <NavLink to='/promocode' className='nav-link'>
        <NavigationItem link={navigationItems.promocode} name={'Промокоды'} />
      </NavLink>
    </nav>
  );
}

export default Navigation;
