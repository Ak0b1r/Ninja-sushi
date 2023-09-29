import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { FaRegClock } from 'react-icons/fa'
import { FiCreditCard, FiGlobe, FiPhone, FiSmartphone } from 'react-icons/fi'
import { TbBottleOff, TbCashBanknote,TbCoinBitcoin, TbTruckDelivery } from 'react-icons/tb'
import styles from './delivery.module.scss'
import Container from '../../layout/container'
import { Link} from 'react-router-dom'
import Title from '../../ui/title'
import PageNavigate from '../../ui/navigate'

function Delivery() {
  return (
    <section className={styles.delivery}>
      <Container className={styles.delivery__container}>
        <PageNavigate text="Оформление заказа" />
        <div className={styles.delivery__block}>
          <Title title="Доставка" />
        </div>
      </Container>
      <div className={styles.delivery__area}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47980.625679397854!2d69.16318136512153!3d41.26992756876269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a6add9db721%3A0x7a27c4f09ef4001c!2z0KfQuNC70L7QvdC30L7RgCDRgtGD0LzQsNC90LgsINCi0L5zaGtlbnQsIE9gemJla2lzdG9u!5e0!3m2!1suz!2s!4v1693054498920!5m2!1suz!2s" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map' className={styles.delivery__area_map}></iframe>
        <div className={styles.delivery__block}>
          <div className={styles.delivery__area_box}>
            <h5 className={styles.delivery__area_title}>Условия доставки</h5>
            <p className={styles.delivery__area_text}>В настоящее время доставка осуществляется по зоне, выделенной цветом. Минимальная сумма заказа — 400 грн.</p>
            <p className={styles.delivery__area_work}>Время работы:</p>
            <p className={styles.delivery__area_time}>
              <FaRegClock />
              <span>с 11:00 до 22:45</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.delivery__block}>
        <div className={styles.delivery__catalog}>
          <div className={styles.delivery__title}>
            <Title title="Как сделать заказ?" />
            <p>Выберите наиболее удобный для вас способ</p>
          </div>
          <div className={styles.delivery__box}>
            <div className={styles.delivery__card}>
              <FiGlobe />
              <p>На сайте</p>
            </div>
            <div className={styles.delivery__card}>
              <FiSmartphone />
              <p>В мобильном приложении</p>
            </div>
            <div className={styles.delivery__card}>
              <FiPhone />
              <p>По телефону</p>
              <Link to={`tel:+380990077313`}>+38 (099) 0077-313</Link>
              <Link to={`tel:+380990077313`}>+38 (096) 0077-313</Link>
              <Link to={`tel:+380990077313`}>+38 (099) 0077-313</Link>
            </div>
          </div>
        </div>
        <div className={styles.delivery__catalog}>
          <div className={styles.delivery__title}>
            <Title title="Оплата" />
            <p>Убедитесь, что стоимость вашего заказа равна или превышает 400 гривен</p>
          </div>
          <div className={styles.delivery__box}>
            <div className={styles.delivery__card}>
              <TbCashBanknote />
              <p>Наличными курьеру</p>
              <span>У наших ниндзя всегда есть сдача</span>
            </div>
            <div className={styles.delivery__card}>
              <FiCreditCard />
              <p>Оплата картой</p>
              <span>Оплачивайте онлайн на сайте</span>
            </div>
            <div className={styles.delivery__card}>
              <TbCoinBitcoin />
              <p>Оплата картой</p>
              <span>Оплачивайте ваши заказыс помощью криптовалюты</span>
            </div>
          </div>
        </div>
        <div className={styles.delivery__catalog}>
          <div className={styles.delivery__title}>
            <Title title="Как получить заказ?" />
            <p>Среднее время доставки составляет 90 минут.</p>
          </div>
          <div className={styles.delivery__box}>
            <div className={styles.delivery__card}>
              <TbCashBanknote />
              <p>Доставка курьером</p>
              <span>Наши курьеры не заставят ждать</span>
            </div>
            <div className={styles.delivery__card}>
              <MdOutlineLocationOn />
              <p>Самовывоз</p>
              <span>Имеем 33 ресторана по всей Украине</span>
            </div>
            <div className={styles.delivery__card}>
              <TbCashBanknote />
              <p>Криптовалютой</p>
              <span>Оплачивайте ваши заказыс помощью криптовалюты</span>
            </div>
          </div>
        </div>
        <div className={styles.delivery__catalog}>
          <div className={styles.delivery__title}>
            <Title title="Дополнительные опции" />
            <p>Предлагаем большой спектр услуг, чтобы вы получали еще больше удовольствия заказывая у нас еду.</p>
          </div>
          <div className={styles.delivery__box}>
            <div className={styles.delivery__card}>
              <TbTruckDelivery />
              <p>Предзаказна указанное время</p>
              <span>Закажи зарание, чтобы не забыть</span>
            </div>
            <div className={styles.delivery__card}>
              <TbBottleOff />
              <p>Безлактозные блюда</p>
              <span>Для тех кто не переносит лактозу</span>
            </div>
            <div className={styles.delivery__card}>
              <TbCoinBitcoin />
              <p>Вегетарианские роллы</p>
              <span>Заботимся о предпочтениях каждого клиента</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.delivery__info}>
        <div className={styles.delivery__info_box}>
          <div className={styles.delivery__info_top}>
            <h4 className={styles.delivery__info_title}>О нас</h4>
            <p className={styles.delivery__info_text}>Наши мастера с многолетним опытом в совершенстве овладели техниками разных кулинарных направлений и неизменно следуют проверенным временем рецептам. Приготовить кулинарный шедевр в авторском стиле им не составит труда, но только если вы этого пожелаете.</p>
          </div>
          <div className={styles.delivery__info_bottom}>
            <h4 className={styles.delivery__info_title}>Готовим из лучших ингредиентов</h4>
            <p className={styles.delivery__info_text}>Визитная карточка NinjaSushi— свежесть и насыщенный вкус. Подобного эффекта удаётся достичь благодаря самым качественным ингредиентам, которые каждый день поступают на кухню от надёжных поставщиков. В наших правилах не экономить на объёме порций и не использовать замороженные продукты.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delivery