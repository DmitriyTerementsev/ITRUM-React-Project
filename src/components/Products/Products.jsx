import Actions from '../Actions/Actions';
import Popup from '../Popup/Popup';
import { useEffect, useState } from 'react';
import TableNavigation from '../TableNavigation/TableNavigation';
import products from '../../utils/products';

function Products() {
  const [currentPage, setCurrentPage] = useState(0);
  const [allPages, setAllPages] = useState(1);

  const [isOpen, setOpen] = useState(false);
  const openPopup = () => {
    if (isOpen === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    setAllPages(Math.ceil(products.length / 10));
  }, [products]);

  return (
    <>
      <TableNavigation
        currentPage={currentPage}
        allPages={allPages}
        handlerNextClick={() =>
          currentPage === allPages - 1 ? null : setCurrentPage(currentPage + 1)
        }
        handlerPrevClick={() =>
          currentPage > 0 ? setCurrentPage(currentPage - 1) : null
        }
      />
      <button onClick={openPopup} className='table__button'>
        Добавить акцию
      </button>
      <Actions currentPage={currentPage} />
      <Popup isOpen={isOpen} />
    </>
  );
}

export default Products;
