import { useState } from 'react';

function NavigationItem({ link, name }) {
  const [isActive, setActive] = useState(false);

  const handleToggleActive = () => {
    if (isActive) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <div
      className={
        isActive ? 'navigation-item navigation-item_active' : 'navigation-item'
      }
      onClick={handleToggleActive}
    >
      <img src={link} alt='icon' className='navigation-item__icon' />
      <p className='navigation-item__text'>{name}</p>
    </div>
  );
}

export default NavigationItem;
