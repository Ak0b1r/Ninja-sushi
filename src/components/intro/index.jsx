import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../../layout/container';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Button from '../../ui/button'
import styles from './intro.module.scss'
import Menu from '../menu';

function Intro({ products }) {
    return (
        <section className={styles.intro}>
            <Menu />
            <Container className={styles.intro__container}>
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className={styles.intro__swiper}
                >
                    {
                        products?.map((product) => (
                            <SwiperSlide key={product.id} className={styles.intro__slide}>
                                <div className={styles.intro__left}>
                                    <h1 className={styles.intro__title}>{product.name}</h1>
                                    <p className={styles.intro__text}>Доставку делаем с 10:00 до 19:30</p>
                                    <Button className="green" text={"Перейти к новости"} url="/news" />
                                </div>
                                <div className={styles.intro__right}>
                                    <img src={product.images[0]} alt={product.name} className={styles.intro__image} />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </section>
    )
}

export default Intro