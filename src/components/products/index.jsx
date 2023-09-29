import React from 'react'
import Container from '../../layout/container'
import Title from '../../ui/title'
import styles from './products.module.scss'
import ProductCard from '../productCard'
import { useSelector } from 'react-redux'
import Button from '../../ui/button'

function Products({title,url,products}) {
    const {basket,favorite} = useSelector(state => state)
  return (
    <section className={styles.products}>
        <Container>
            <div className={styles.products__top}>
                <Title title={title} />
                <Button className={'white'} url={url} text="Смотреть все" />
            </div>
            <div className={styles.products__block}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} selected={product.id in basket} liked={product.id in favorite} />
                ))}
            </div>
        </Container>
    </section>
  )
}

export default Products