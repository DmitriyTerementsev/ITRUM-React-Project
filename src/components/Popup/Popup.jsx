function Popup({ isOpen }) {
  return (
    <div className={isOpen ? 'popup_active' : 'popup'}>
      <div className='popup__container'>
        <div className='popup__buttons'>
          <button className='popup__button popup__button_delete'>
            Удалить
          </button>
          <button
            className='popup__button popup__button_save'
          >
            Сохранить
          </button>
        </div>
        <div className='popup__choice'>
          <p className='popup__text'>Начисление кешбека с покупки</p>
          <input
            type='text'
            className='popup__input'
            placeholder='Введите Кешбэк'
          />
          <p className='popup__text'>Категория</p>
          <select className='popup__select'>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
          <p className='popup__text'>Подкатегория</p>
          <select className='popup__select'>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
          <p className='popup__text'>Бренд</p>
          <select className='popup__select'>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Popup;
