import React from 'react';

interface Props {
  name: string;
  email: string;
  phone: string;
  styles: any;
}

function ClientsItem({ name, email, phone, styles }: Props) {
  return (
    <li className={styles.actions__item}>
      <p className={styles.actions__text}>{name}</p>
      <p className={styles.actions__text}>{email}</p>
      <p className={styles.actions__text}>{phone}</p>
    </li>
  );
}

export default ClientsItem;
