import Products from '../Products/Products';
import { Routes, Route } from 'react-router-dom';

function Table() {
  return (
    <div className='table'>
      <div className='table__container'>
        <Routes>
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default Table;
