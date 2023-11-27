import TableNavigation from '../TableNavigation/TableNavigation';

function Table() {
  return (
    <div className='table'>
      <div className='table__container'>
        <TableNavigation />
        <button className='table__button'>Добавить акцию</button>
      </div>
    </div>
  );
}

export default Table;
