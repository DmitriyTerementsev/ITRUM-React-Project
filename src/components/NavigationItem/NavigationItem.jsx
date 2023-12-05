import './NavigationItem.css'
function NavigationItem({ children, name }) {
  return (
    <div className='navigation-item'>
      {children}
      <p className='navigation-item__text'>{name}</p>
    </div>
  );
}

export default NavigationItem;
