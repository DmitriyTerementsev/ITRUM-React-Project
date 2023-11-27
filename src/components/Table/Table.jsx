import Products from '../Products/Products';
import { Routes, Route } from 'react-router-dom';
import TableNavigation from '../TableNavigation/TableNavigation';

function Table() {
  return (
    <div className='table'>
      <div className='table__container'>
        <TableNavigation />
        <Routes>
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default Table;
