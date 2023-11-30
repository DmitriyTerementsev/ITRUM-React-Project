import { useRef, useEffect } from 'react';

function Popup({
  isOpen,
  onClose,
  categoriesSelect,
  subcategoriesSelect,
  brandSelect,
  cashbackSelect,
}) {
  const rootEl = useRef(null);
  const popup = useRef(null);

  useEffect(() => {
    const onClick = (e) =>
      e.target.className === 'popup popup_active' ? onClose() : null;
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className={isOpen ? 'popup popup_active' : 'popup'} ref={popup}>
      <div className='popup__container' ref={rootEl}>
        <div className='popup__buttons'>
          <button
            className='popup__button popup__button_delete'
            onClick={() => console.log('yes')}
          >
            Удалить
          </button>
          <button
            className='popup__button popup__button_save'
            onClick={onClose}
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
            onChange={cashbackSelect}
          />
          <p className='popup__text'>Категория</p>
          <select className='popup__select' onChange={categoriesSelect}>
            <option value='Категория 1'>Категория 1</option>
            <option value='Категория 2'>Категория 2</option>
            <option value='Категория 3'>Категория 3</option>
          </select>
          <p className='popup__text'>Подкатегория</p>
          <select className='popup__select' onChange={subcategoriesSelect}>
            <option value='Подкатегория 1'>Подкатегория 1</option>
            <option value='Подкатегория 2'>Подкатегория 2</option>
            <option value='Подкатегория 3'>Подкатегория 3</option>
          </select>
          <p className='popup__text'>Бренд</p>
          <select className='popup__select' onChange={brandSelect}>
            <option value='Бренд 1'>Бренд 1</option>
            <option value='Бренд 2'>Бренд 2</option>
            <option value='Бренд 3'>Бренд 3</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Popup;
