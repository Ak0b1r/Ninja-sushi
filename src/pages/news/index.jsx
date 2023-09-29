import { useState } from 'react'
import YouTube from 'react-youtube'
import { Link, useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import useFetch from '../../hooks/useFetch'
import Title from '../../ui/title'
import Container from '../../layout/container'
import Loader from '../../components/loader'
import styles from './news.module.scss'
import classNames from 'classnames'
import PageNavigate from '../../ui/navigate'

function News() {
  const [data,loading,error] = useFetch()
  const [search,setSearch] = useState('')
  const navigate = useNavigate()
  if (loading || !data) {
    return <Loader />
  }
  if (error) {
    return navigate('/notfound')
  }
  return (
    <section className={styles.news}>
      <Container className={styles.news__container}>
        <PageNavigate text="Новости" />
        <Title title="Новости"/>
        <div className={styles.news__search}>
          <FiSearch />
          <input 
            type="text" 
            placeholder='Введите ключевые слова' 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
        <div className={styles.news__block}>
          {data?.news?.slice(0,10).map((el)=>(
            <div className={styles.news__box}>
              <YouTube videoId={el.videos[0]}/>
              <div className={styles.news__info}>
                <p className={styles.news__date}>{el.date}</p>
                <h4 className={styles.news__name}>{el.name}</h4>
                <Link to={`/news/${el.id}`} className={styles.news__link}>Подробнее</Link>
              </div>
            </div>
          ))}
        </div>
        <button className={classNames('white',styles.news__more)}>Показать больше</button>
      </Container>
    </section>
  )
}

export default News