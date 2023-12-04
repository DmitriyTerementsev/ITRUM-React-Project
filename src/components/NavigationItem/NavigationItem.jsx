import './NavigationItem.css'
function NavigationItem({ link, name }) {
  return (
    <div className='navigation-item'>
      <div className='navigation-item__icon'>{link}</div>
      <p className='navigation-item__text'>{name}</p>
    </div>
  );
}

export default NavigationItem;
