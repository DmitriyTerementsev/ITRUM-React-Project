import PopupWithForm from '../PopupWithForm/PopupWithForm.tsx';
import styles from '../PopupWithForm/PopupWithForm.module.scss';
import React, { useState } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function PopupOrders({ isOpen, onClose }: PopupProps) {
  const [isSelect, setIsSelect] = useState('');
  const pickUpValue = 'Самовывоз';
  const deliveryValue = 'Доставка';

  const handleOptionValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsSelect(e.target.value);
  };

  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose}>
      <div className={styles.popup__container}>
        <form className={styles.form}>
          <div className={styles.popup__buttons}>
            <button type='button' className={styles.popup__button}>
              Закрыть
            </button>
            <button
              type='submit'
              className={`${styles.popup__button} ${styles.popup__button_submit}`}
            >
              Подтвердить
            </button>
          </div>
          <div className={styles.form__container}>
            <p className={styles.form__label}>Заказчик</p>
            <input
              type='text'
              className={styles.form__input}
              placeholder='Заказчик'
            />
            <p className={styles.form__label}>Номер заказа</p>
            <input
              type='text'
              className={styles.form__input}
              placeholder='Номер заказа'
            />
            <p className={styles.form__label}>Дата оформления</p>
            <input
              type='text'
              className={styles.form__input}
              placeholder='Дата оформления'
            />

            <p className={styles.form__label}>Способ оплаты</p>
            <select className={styles.form__select} placeholder=''>
              <option value=''>Выберите способ оплаты</option>
              <option value='Наличными курьеру'>Наличными курьеру</option>
              <option value='Онлайн'>Онлайн</option>
            </select>

            <p className={styles.form__label}>Способ получения</p>
            <select
              className={styles.form__select}
              placeholder=''
              onChange={(e) => {
                handleOptionValue(e);
              }}
            >
              <option value=''>Выберите способ получения</option>
              <option value={pickUpValue}>Самовывоз</option>
              <option value={deliveryValue}>Доставка</option>
            </select>
            {isSelect === 'Самовывоз' ? (
              <>
                <p className={styles.form__label}>Пункт самовывоза</p>
                <input
                  type='text'
                  className={styles.form__input}
                  placeholder='Пункт самовывоза'
                />
              </>
            ) : isSelect === 'Доставка' ? (
              <>
                <div className={styles.form__inputs}>
                  <div className={styles.form__element}>
                    <p className={styles.form__label}>Город</p>
                    <input
                      type='text'
                      className={`${styles.form__input} ${styles.form__input_delivery}`}
                      placeholder='Город'
                    />
                  </div>
                  <div className={styles.form__element}>
                    <p className={styles.form__label}>Улица</p>
                    <input
                      type='text'
                      className={`${styles.form__input} ${styles.form__input_delivery}`}
                      placeholder='Улица'
                    />
                  </div>
                </div>
                <div className={styles.form__inputs}>
                  <div className={styles.form__element}>
                    <p className={styles.form__label}>Дом</p>
                    <input
                      type='text'
                      className={`${styles.form__input} ${styles.form__input_delivery}`}
                      placeholder='Дом'
                    />
                  </div>
                  <div className={styles.form__element}>
                    <p className={styles.form__label}>Квартира</p>
                    <input
                      type='text'
                      className={`${styles.form__input} ${styles.form__input_delivery}`}
                      placeholder='Квартира'
                    />
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            <p className={styles.form__label}>Дополнительная информация</p>
            <input
              type='text'
              className={`${styles.form__input} ${styles.form__input_info}`}
              placeholder='Дополнительная информация'
            />
            <p className={styles.form__label}>
              Дополнительная информация по оплате
            </p>
            <input
              type='text'
              className={`${styles.form__input} ${styles.form__input_info}`}
              placeholder='Дополнительная информация по оплате'
            />
            <div className={styles.order}>
              <p className={styles.order__title}>Товары</p>
              <div className={styles.order__item}>
                <div className={styles.order__text}>
                  <p className={styles.order__name}>Kosmoteros Personnel</p>
                  <p className={styles.order__name}>SKU0002</p>
                </div>
                <div className={styles.order__text}>
                  <p className={styles.order__name}>Количество</p>
                  <p className={styles.order__name}>1</p>
                </div>
                <p className={styles.order__name}>
                  Биостимулирующий дневной крем
                </p>
                <div className={styles.order__text}>
                  <p className={styles.order__name}>100мл</p>
                  <p
                    className={`${styles.order__name} ${styles.order__name_sum}`}
                  >
                    4 567 ₽
                  </p>
                </div>
              </div>
              <div className={styles.order__item}>
                <div className={styles.order__text}>
                  <p className={styles.order__name}>Kosmoteros Personnel</p>
                  <p className={styles.order__name}>SKU0002</p>
                </div>
                <div className={styles.order__text}>
                  <p className={styles.order__name}>Количество</p>
                  <p className={styles.order__name}>1</p>
                </div>
                <p className={styles.order__name}>
                  Биостимулирующий дневной крем
                </p>
                <div className={styles.order__text}>
                  <p className={styles.order__name}>100мл</p>
                  <p
                    className={`${styles.order__name} ${styles.order__name_sum}`}
                  >
                    4 567 ₽
                  </p>
                </div>
              </div>
            </div>
            <button
              className={`${styles.popup__button} ${styles.popup__button_edit}`}
            >
              Изменить
            </button>
            <div className={styles.order__sum}>
              <p
                className={`${styles.order__title} ${styles.order__title_sum}`}
              >
                Сумма заказа
              </p>
              <div className={styles.order__item}>
                <div className={styles.order__text}>
                  <p className={styles.order__name}>Товары</p>
                  <p className={styles.order__name}>9 134 ₽</p>
                </div>
                <div className={styles.order__text}>
                  <p className={styles.order__name}>Скидка</p>
                  <p className={styles.order__name}>888 ₽</p>
                </div>
                <div className={styles.order__text}>
                  <p className={styles.order__name}>
                    Сумма начисленных бонусов
                  </p>
                  <p className={styles.order__name}>888</p>
                </div>
                <div className={styles.order__text}>
                  <p className={styles.order__name}>Итого</p>
                  <p className={styles.order__name}>8 242 ₽</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </PopupWithForm>
  );
}

export default PopupOrders;
