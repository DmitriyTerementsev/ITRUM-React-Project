import NavigationItem from '../NavigationItem/NavigationItem';
import products from '../../images/products.svg';
import users from '../../images/users.svg'
import categories from '../../images/categories.svg'
import towns from '../../images/towns.svg'
import brands from '../../images/brands.svg'
import protocols from '../../images/protocols.svg'
import orders from '../../images/orders.svg'
import banners from '../../images/banners.svg'
import seminares from '../../images/seminares.svg'
import promocodes from '../../images/promocodes.svg'

function Navigation() {
  return (
    <section className='navigation'>
      <NavigationItem link={products} name={'Продукты'} />
      <NavigationItem link={users} name={'Пользователи'} />
      <NavigationItem link={categories} name={'Категории'} />
      <NavigationItem link={towns} name={'Города'} />
      <NavigationItem link={brands} name={'Бренды'} />
      <NavigationItem link={protocols} name={'Протоколы'} />
      <NavigationItem link={orders} name={'Заказы'} />
      <NavigationItem link={banners} name={'Баннеры'} />
      <NavigationItem link={seminares} name={'Семинары'} />
      <NavigationItem link={promocodes} name={'Промокоды'} />
    </section>
  );
}

export default Navigation;
