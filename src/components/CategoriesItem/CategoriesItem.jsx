import editButton from '../../images/editButton.svg';
import trashButton from '../../images/trashButton.svg';

function CategoriesItem({ categoriesName, styles }) {
  return (
    <li className={styles.categories__item}>
      <p className={styles.categories__name}>{categoriesName}</p>
      <div className={styles.categories__buttons}>
        <button
          type='button'
          className={styles.categories__button + ' ' + styles.categories__button_icon}
        >
          <img src={editButton} alt='icon' className={styles.categories__edit} />
        </button>
        <button
          type='button'
          className={styles.categories__button + ' ' + styles.categories__button_icon}
        >
          <img src={trashButton} alt='icon' className={styles.categories__edit} />
        </button>
      </div>
    </li>
  );
}

export default CategoriesItem;
