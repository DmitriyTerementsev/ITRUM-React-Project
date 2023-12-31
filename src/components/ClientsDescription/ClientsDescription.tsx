import React from 'react';

interface Props {
  description: any;
  styles: any;
}

function ClientsDescription({ description, styles }: Props) {
  return (
    <div
      className={
        styles.actions__description + ' ' + styles.actions__description_clients
      }
      ref={description}
    >
      <p className={styles.actions__text}>ФИ</p>
      <p className={styles.actions__text}>Почта</p>
      <p className={styles.actions__text}>Телефон</p>
    </div>
  );
}

export default ClientsDescription;
