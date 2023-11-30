function ClientsDescription({ clickHandlerAll, description }) {
  return (
    <div className='actions__description actions__description_clients' ref={description}>
      <p className='actions__text'>ФИ</p>
      <p className='actions__text'>Почта</p>
      <p className='actions__text'>Телефон</p>
    </div>
  );
}

export default ClientsDescription;
