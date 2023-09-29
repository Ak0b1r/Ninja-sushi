import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Button from '../../ui/button';
import bitmap from '../../images/bitmap.png';
import Container from '../../layout/container'
import styles from './recommend.module.scss'

function Recommend({products}) {
    return (
        <section className={styles.recommend}>
            <Container className={styles.recommend__container}>
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay, Navigation]}
                    className={styles.recommend__swiper}
                >
                    {
                        products?.map((product) => (
                            <SwiperSlide key={product.id} className={styles.recommend__slide}>
                                <div className={styles.recommend__block}>
                                    <h2 className={styles.recommend__title}>Филадельфия с лососем</h2>
                                    <p className={styles.recommend__ingredients}>Сир вершковий, шиітаке теріякі, краб-крем, лосось</p>
                                    <div className={styles.recommend__box}>
                                        <Button className="gray" text="В корзину" />
                                        <p className={styles.recommend__price}><span>190</span> грн</p>
                                    </div>
                                </div>
                                <img src={bitmap} alt="bit map" className={styles.recommend__image} />
                                <div className={styles.recommend__offer}>Лучшее предложение недели!</div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </section>
    )
}

export default Recommend