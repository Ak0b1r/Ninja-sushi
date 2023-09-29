import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useFetch from '../../hooks/useFetch'
import Title from '../../ui/title'
import Container from '../../layout/container'
import Menu from '../../components/menu'
import Loader from '../../components/loader'
import ProductCard from '../../components/productCard'
import styles from './products.module.scss'
import Filter from '../../components/filter'
import classNames from 'classnames'
import { filterData, loadMore } from '../../redux/filter'
import { useEffect } from 'react'
import PageNavigate from '../../ui/navigate'

function Products() {
  const {basket, favorite,filter} = useSelector(state => state)
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()
  const [data,loading,error] = useFetch()

  useEffect(()=>{
    if (data?.products) {
      const filteredData = data?.products?.filter((data)=>data.category === params.category)
      dispatch(filterData(filteredData))
    }
  },[data, params.category])

  if (loading || !data) {
    return <Loader />
  }
  if (error) {
    return navigate('/notfound')
  }
  return (
    <section className={styles.products}>
      <Container className={styles.products__container}>
        <PageNavigate text={params.category} position={true} />
        <Menu />
        <div className={styles.products__block}>
          <Title title={params.category} />
          {params.category !== 'drink' && <Filter />}
          <div className={styles.products__box}>
            {
              filter?.updatedData?.slice(0,filter.dataCount).map((product)=>(
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  selected={product.id in basket} 
                  liked={product.id in favorite} 
                />
              ))
            }
          </div>
          <button className={classNames('white',styles.products__more)} onClick={()=>dispatch(loadMore(8))}>Показать больше</button>
        </div>
      </Container>
    </section>
  )
}

export default Products