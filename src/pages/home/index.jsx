import React from 'react'
import Intro from '../../components/intro'
import useFetch from '../../hooks/useFetch'
import Products from '../../components/products'
import Recommend from '../../components/recommend'
import Service from '../../components/service'
import InfoText from '../../components/infoText'
import Loader from '../../components/loader'
import styles from './home.module.scss'

function Home() {
  const [data,loading,error] = useFetch()
  if (loading || !data) {
    return <Loader />
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className={styles.home}>
      <Intro products={data?.news?.slice(0,8)} />
      <Products title="Суши" url="/products/sushi" products={data?.products?.filter(product => product.category === "sushi").slice(0,8)} />
      <Products title="Роллы" url="/products/roll" products={data?.products?.filter(product => product.category === "roll").slice(0,8)} />
      <Products title="Сеты" url="/products/set" products={data?.products?.filter(product => product.category === "set").slice(0,8)} />
      <Recommend products={data?.news} />
      <Products title="Закуски" url="/products/sneaks" products={data?.products?.filter(product => product.category === "sneaks").slice(0,8)} />
      <Products title="Напитки" url="/products/drink" products={data?.products?.filter(product => product.category === "drink").slice(0,8)} />
      <Service />
      <InfoText />
    </div>
  )
}

export default Home