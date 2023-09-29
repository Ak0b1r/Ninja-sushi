import React from 'react'
import {AiFillHeart, AiOutlineHeart, AiOutlineCheck, AiOutlinePlus} from 'react-icons/ai'
import pepper from '../../images/pepper.svg'
import grass from '../../images/grass.svg'
import oil from '../../images/oil.png'
import styles from './card.module.scss'
import { useDispatch } from 'react-redux'
import { addBasket, deleteBasket } from '../../redux/basket'
import { toggleFavorite } from '../../redux/favorite'

function ProductCard({ product, selected, liked }) {
    const dispatch = useDispatch()
    const handleToggle = ()=>{
        selected ? dispatch(deleteBasket(product.id)) : dispatch(addBasket(product))
    }
    return (
        <div className={styles.card}>
            <div className={styles.card__image}>
                {product?.status && (
                    <div className={styles.card__popular}>
                        {product?.status.map((status) => {
                           return status.toLowerCase() === 'hit' ? <p className={styles.card__hit}>{status}</p> : <p className={styles.card__new}>{status}</p>
                        })}
                    </div>
                )}
                <img src={product?.images[0]} alt={product?.name}  className={styles.card__img} />
                {
                    product?.catalog && (
                        <div className={styles.card__catalog}>
                            {product.catalog.map((el) =>{
                                if (el === "Острые") {
                                    return <img src={pepper} alt={el} />
                                } else if (el === "Вегетарианские") {
                                    return <img src={grass} alt={el} />
                                }else if(el === "Безлактозные"){
                                    return <img src={oil} alt={el} />
                                }
                            })}
                        </div>
                    )
                }
            </div>
            <h3 className={styles.card__title}>{product?.name}</h3>
            <p className={styles.card__weight}>{product?.category === "drink" ? (`Объем: ${product?.weight} л`)  : (`Вес: ${product?.weight} г`)}</p>
            <p className={styles.card__incredients}>
                {product?.incredients?.join(', ')}
            </p>
            <div className={styles.card__bottom}>
                <p className={styles.card__price}><span>{product?.price}</span> грн</p>
                <div className={styles.card__box}>
                    <button className={styles.card__like} onClick={()=>dispatch(toggleFavorite(product))}>
                        {liked ? <AiFillHeart /> : <AiOutlineHeart />}
                    </button>
                    <button className={styles.card__add} onClick={handleToggle}>
                        {selected ? <AiOutlineCheck /> : <AiOutlinePlus />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard