import React from 'react'
import { MdClose } from 'react-icons/md'
import styles from './basket.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import bag from '../../images/bag.svg'
import Button from '../../ui/button'
import BasketCard from '../basketCard'

function Basket({ show, setShow }) {
  const basket = useSelector(state => state.basket)
  const products = Object.values(basket)
  const checkBasket = products.length === 0
  const totalPrice = products.reduce((acc,el)=>acc + el.price * el.amount, 0)
  return (
    <div className={show ? classNames(styles.basket, styles.basket_active) : styles.basket}>
      <div className={styles.basket__top}>
        <h3 className={styles.basket__title}>Ваш заказ</h3>
        <button className={styles.basket__close} onClick={() => setShow(false)}>
          <MdClose />
        </button>
      </div>
      {
        checkBasket ? (
          <div className={styles.basket__empty}>
            <div className={styles.basket__empty_box}>
              <img src={bag} alt="shopping bag empty" className={styles.basket__empty_image} />
              <p className={styles.basket__empty_title}>В вашей корзине пока пусто</p>
              <p className={styles.basket__empty_text}>Тут появятся товары, которые вы закажите</p>
              <Button className="green" text="Повторить прошлый заказ" />
              <Button className="gray" text="История заказов" />
            </div>
          </div>
        ) : (
          <>
            <div className={styles.basket__box}>
              {
                products.map((product) => (
                  <BasketCard key={product.id} {...product} />
                ))
              }
            </div>
            <p className={styles.basket__minimal}>Минимальная сумма заказа 400 грн</p>
            <div className={styles.basket__bottom}>
              <div className={styles.basket__total}>
                <p className={styles.basket__total_text}>Итого:</p>
                <p className={styles.basket__total_price}><span>{totalPrice}</span> грн</p>
              </div>
              <Button className="green" text={"Оформить заказ"} />
            </div>
          </>

        )
      }
    </div>
  )
}

export default Basket