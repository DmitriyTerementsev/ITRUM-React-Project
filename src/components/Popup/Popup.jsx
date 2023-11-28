function Popup({ isOpen }) {
  return (
    <div className={isOpen ? 'popup_active' : 'popup'}>
      <div className='popup__container'>
        <div className='popup__buttons'>
          <button
            className='popup__button popup__button_delete'
            onClick={() => console.log('yes')}
          >
            Удалить
          </button>
          <button
            className='popup__button popup__button_save'
            onClick={() => console.log('yes')}
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
            <option value=''>Категория 1</option>
            <option value=''>Категория 2</option>
            <option value=''>Категория 3</option>
          </select>
          <p className='popup__text'>Подкатегория</p>
          <select className='popup__select'>
            <option value=''>Подкатегория 1</option>
            <option value=''>Подкатегория 2</option>
            <option value=''>Подкатегория 3</option>
          </select>
          <p className='popup__text'>Бренд</p>
          <select className='popup__select'>
            <option value=''>Бренд 1</option>
            <option value=''>Бренд 2</option>
            <option value=''>Бренд 3</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Popup;
