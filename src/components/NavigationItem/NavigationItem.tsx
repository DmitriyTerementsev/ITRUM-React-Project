import React from 'react';
import styles from '../Navigation/Navigation.module.scss';
interface NavigationItemProps {
  children: any;
  name: string;
  styles: any;
}

function NavigationItem({ children, name }: NavigationItemProps) {
  return (
    <div className={styles.navigation__item}>
      {children}
      <p className={styles.navigation__text}>{name}</p>
    </div>
  );
}

export default NavigationItem;
