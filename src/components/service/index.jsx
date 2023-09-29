import Container from '../../layout/container'
import app from '../../images/app.png'
import appstore from '../../images/appstore.svg'
import googleplay from '../../images/googleplay.svg'
import styles from './service.module.scss'

function Service() {
    return (
        <section className={styles.service}>
            <div className={styles.service__map}>
                <h2 className={styles.service__map_title}>Каждая кухня работает со своей зоной доставки, чтобы привезти еду максимально быстро</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47980.625679397854!2d69.16318136512153!3d41.26992756876269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a6add9db721%3A0x7a27c4f09ef4001c!2z0KfQuNC70L7QvdC30L7RgCDRgtGD0LzQsNC90LgsINCi0L5zaGtlbnQsIE9gemJla2lzdG9u!5e0!3m2!1suz!2s!4v1693054498920!5m2!1suz!2s" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map' className={styles.service__map_area}></iframe>
            </div>
            <div className={styles.service__app}>
                <Container className={styles.service__container}>
                    <div className={styles.service__block}>
                        <div className={styles.service__box}>
                            <h3 className={styles.service__app_title}>Ниндзя - это семья.Скачивайте наше приложение</h3>
                            <p className={styles.service__app_text}>Станьте ниндзя! Будьте в курсе всех новинок и никогда не оставаться голодным.</p>
                            <div className={styles.service__app_store}>
                                <button><img src={appstore} alt="app store" /></button>
                                <button><img src={googleplay} alt="google play" /></button>
                            </div>
                        </div>
                        <div className={styles.service__image}>
                            <img src={app} alt="app" />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Service