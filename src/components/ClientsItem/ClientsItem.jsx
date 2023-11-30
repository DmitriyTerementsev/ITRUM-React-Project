function ClientsItem({ name, email, phone }) {
  return (
    <li className='actions__item'>
      <p className='actions__text'>
        {name}
      </p>
      <p className='actions__text'>
        {email}
      </p>
      <p className='actions__text'>
        {phone}
      </p>
    </li>
  );
}

export default ClientsItem;
