import React from 'react';

interface Props {
  children: any;
  name: string;
  styles: any;
}

function NavigationItem({ children, name, styles }: Props) {
  return (
    <div className={styles.navigation__item}>
      {children}
      <p className={styles.navigation__text}>{name}</p>
    </div>
  );
}

export default NavigationItem;
