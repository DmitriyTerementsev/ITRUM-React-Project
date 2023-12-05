import React from 'react';
function NavigationItem({ children, name, styles }) {
  return (
    <div className={styles.navigation__item}>
      {children}
      <p className={styles.navigation__text}>{name}</p>
    </div>
  );
}

export default NavigationItem;
