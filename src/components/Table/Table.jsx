import Actions from '../Actions/Actions';
import TableNavigation from '../TableNavigation/TableNavigation';

function Table() {
  return (
    <div className='table'>
      <div className='table__container'>
        <TableNavigation />
        <button className='table__button'>Добавить акцию</button>
        <Actions />
      </div>
    </div>
  );
}

export default Table;
