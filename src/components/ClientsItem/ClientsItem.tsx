import React from 'react';

interface ClientsItemProps {
  name: string;
  email: string;
  phone: string;
  styles: any;
}

function ClientsItem({ name, email, phone, styles }: ClientsItemProps) {
  return (
    <li className={styles.actions__item}>
      <p className={styles.actions__text}>{name}</p>
      <p className={styles.actions__text}>{email}</p>
      <p className={styles.actions__text}>{phone}</p>
    </li>
  );
}

export default ClientsItem;
