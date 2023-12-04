import Products from '../Products/Products';
import Clients from '../Clients/Clients.tsx'
import { Routes, Route } from 'react-router-dom';

function Table() {
  return (
    <div className='table'>
      <div className='table__container'>
        <Routes>
          <Route path='/products' element={<Products />} />
        </Routes>
        <Routes>
          <Route path='/clients' element={<Clients />} />
        </Routes>
      </div>
    </div>
  );
}

export default Table;
