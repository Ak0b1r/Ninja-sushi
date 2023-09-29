import React from 'react'
import Container from '../../layout/container'
import styles from './footer.module.scss'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaTelegramPlane, FaTwitterSquare } from 'react-icons/fa'
import Button from '../../ui/button'
import logo from '../../images/logoSushi.png'
import appstore from '../../images/appstore.svg'
import googleplay from '../../images/googleplay.svg'
import mastercard from '../../images/mastercard.svg'
import visacard from '../../images/visacard.svg'
import pbcard from '../../images/pbcard.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footer__container}>
        <div className={styles.footer__top}>
          <div className={styles.footer__left}>
            <Link className={styles.footer__logo}>
              <img src={logo} alt="footer logo" />
            </Link>
            <div className={styles.footer__store}>
              <button><img src={appstore} alt="app store" /></button>
              <button><img src={googleplay} alt="google play" /></button>
            </div>
            <p className={styles.footer__rights}>© Ninja Sushi. All rights reserved.</p>
          </div>
          <div className={styles.footer__center}>
            <div className={styles.footer__box}>
              <p className={styles.footer__box_title}>Навигация:</p>
              <div className={styles.footer__list}>
                <Link to="/" className={styles.footer__link}>Главная</Link>
                <Link to="/menu" className={styles.footer__link}>Меню</Link>
                <Link to="/delivery" className={styles.footer__link}>Доставка</Link>
                <Link to="/vacancy" className={styles.footer__link}>Вакансии</Link>
                <Link to="/news" className={styles.footer__link}>Новости</Link>
              </div>
            </div>
            <div className={styles.footer__box}>
              <p className={styles.footer__box_title}>Оформить заказ:</p>
              <div className={styles.footer__list}>
                <Link to="tel:+380674366127" className={styles.footer__link}>+38 (067) 436 61 27</Link>
                <Link to="tel:+380660317630" className={styles.footer__link}>+38 (066) 031 76 30</Link>
                <Link to="tel:+380939249828" className={styles.footer__link}>+38 (093) 924 98 28</Link>
              </div>
            </div>
            <div className={styles.footer__box}>
              <p className={styles.footer__box_title}>Время работы:</p>
              <div className={styles.footer__list}>
                <p className={styles.footer__time}>с 11:00 до 22:45</p>
                <p className={styles.footer__time}>с 22.45 до 06.00</p>
                <p className={styles.footer__order}>Ночная доставка</p>
              </div>
            </div>
            <div className={styles.footer__box}>
              <p className={styles.footer__box_title}>Мы в соц. сетях::</p>
              <div className={styles.footer__social}>
                <Link to="#!" className={styles.footer__social_link}><FaFacebookSquare /></Link>
                <Link to="#!" className={styles.footer__social_link}><FaInstagramSquare /></Link>
                <Link to="#!" className={styles.footer__social_link}><FaTwitterSquare /></Link>
              </div>
              <button className={styles.footer__social_telegram}>
                <FaTelegramPlane />
                <span>Техподдержка</span>
              </button>
            </div>
          </div>
          <div className={styles.footer__right}>
            <h2 className={styles.footer__title}>#NinjaSushi</h2>
            <p className={styles.footer__text}>Ninja Sushi в фотографиях наших клиентов</p>
            <Button text="Перейти в instagram" className="gray" />
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <p className={styles.footer__bottom_text}>Политика конфиденциальности</p>
          <div className={styles.footer__cards}>
            <Link className={styles.footer__card}>
              <img src={mastercard} alt="master card" />
            </Link>
            <Link className={styles.footer__card}>
              <img src={visacard} alt="visa card" />
            </Link>
            <Link className={styles.footer__card}>
              <img src={pbcard} alt="pb card" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer