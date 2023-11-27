import ActionsDescription from '../ActionsDescription/ActionsDescription';
import ActionsItem from '../ActionsItem/ActionsItem';
import ActionsSelected from '../ActionsSelected/ActionsSelected';
import { useState } from 'react';

function Actions() {
  const [counter, setCounter] = useState(0)
  
	function clickHandler() {
		setCounter(counter + 1)
	}

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
          clickHandler={clickHandler}
        />
        <ActionsItem
          categories={'Эстетический уход'}
          subcategories={'Скрабы'}
          brand={'Academie'}
          product={'Гоммаж с кремом и витамином У, 50мл'}
          cashback={'10%'}
          clickHandler={clickHandler}
        />
        <ActionsItem
          categories={'Эстетический уход'}
          subcategories={'Скрабы'}
          brand={'Academie'}
          product={'Гоммаж с кремом и витамином У, 50мл'}
          cashback={'10%'}
          clickHandler={clickHandler}
        />
        <ActionsItem
          categories={'Эстетический уход'}
          subcategories={'Скрабы'}
          brand={'Academie'}
          product={'Гоммаж с кремом и витамином У, 50мл'}
          cashback={'10%'}
          clickHandler={clickHandler}
        />
      </ul>
      <ActionsSelected counter={counter}/>
    </div>
  );
}

export default Actions;
