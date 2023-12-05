function ClientsItem({ name, email, phone, styles }) {
  return (
    <li className={styles.actions__item}>
      <p className={styles.actions__text}>
        {name}
      </p>
      <p className={styles.actions__text}>
        {email}
      </p>
      <p className={styles.actions__text}>
        {phone}
      </p>
    </li>
  );
}

export default ClientsItem;
