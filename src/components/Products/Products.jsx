import Actions from '../Actions/Actions';
import Popup from '../Popup/Popup';
import { useState } from 'react';

function Products() {
  const [isOpen, setOpen] = useState(false);
  const openPopup = () => {
    if (isOpen === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <button onClick={openPopup} className='table__button'>
        Добавить акцию
      </button>
      <Actions />
      <Popup isOpen={isOpen}/>
    </>
  );
}

export default Products;
