import ActionsDescription from '../ActionsDescription/ActionsDescription';
import ActionsItem from '../ActionsItem/ActionsItem';

function Actions() {
  return (
    <div className='actions'>
      <ActionsDescription />
      <ul className='actions__items'>
        <ActionsItem
          categories={'Эстетический уход'}
          subcategories={'Скрабы'}
          brand={'Academie'}
          product={'Гоммаж с кремом и витамином У, 50мл'}
          cashback={'10%'}
        />
        <ActionsItem
          categories={'Эстетический уход'}
          subcategories={'Скрабы'}
          brand={'Academie'}
          product={'Гоммаж с кремом и витамином У, 50мл'}
          cashback={'10%'}
        />
        <ActionsItem
          categories={'Эстетический уход'}
          subcategories={'Скрабы'}
          brand={'Academie'}
          product={'Гоммаж с кремом и витамином У, 50мл'}
          cashback={'10%'}
        />
        <ActionsItem
          categories={'Эстетический уход'}
          subcategories={'Скрабы'}
          brand={'Academie'}
          product={'Гоммаж с кремом и витамином У, 50мл'}
          cashback={'10%'}
        />
      </ul>
    </div>
  );
}

export default Actions;
