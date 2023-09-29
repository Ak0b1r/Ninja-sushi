import React from 'react'
import Container from '../../layout/container'
import notfound from '../../images/notfound.png'
import styles from './notfound.module.scss'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  return (
    <section className={styles.notfound}>
      <Container className={styles.notfound__container}>
        <div className={styles.notfound__box}>
          <img src={notfound} alt="not found page" className={styles.notfound__image} />
          <h3 className={styles.notfound__title}>Ошибка 404.Что-то пошло не так.</h3>
          <p className={styles.notfound__text}>Страница, которую вы ищите, временноне доступна или ее еже нет</p>
          <button className="green" onClick={()=>navigate('/')}>Вернуться на главную</button>
        </div>
      </Container>
    </section>
  )
}

export default NotFound