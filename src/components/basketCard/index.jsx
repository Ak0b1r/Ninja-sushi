import {MdClose} from 'react-icons/md'
import styles from './card.module.scss'
import { useDispatch } from 'react-redux'
import { addAmount, deleteAmount, deleteBasket } from '../../redux/basket'

function BasketCard({id,name,weight,price,images,amount}) {
  const [image] = images
  const dispatch = useDispatch()

  return (
    <div className={styles.basketcard}>
      <div className={styles.basketcard__left}>
        <button className={styles.basketcard__cancel} onClick={()=>dispatch(deleteBasket(id))}><MdClose /></button>
        <img src={image} alt={name} className={styles.basketcard__image}/>
        <div className={styles.basketcard__info}>
          <h3 className={styles.basketcard__title}>{name}</h3>
          <p className={styles.basketcard__weight}>Вес: <span>{weight}</span> г</p>
        </div>
      </div>
      <div className={styles.basketcard__right}>
        <p className={styles.basketcard__price}><span>{price}</span> грн</p>
        <div className={styles.basketcard__amount}>
          <button className={styles.basketcard__minus} onClick={()=>dispatch(deleteAmount(id))}>-</button>
          <p className={styles.basketcard__num}>{amount}</p>
          <button className={styles.basketcard__plus} onClick={()=>dispatch(addAmount(id))}>+</button>
        </div>
      </div>
    </div>
  )
}

export default BasketCard