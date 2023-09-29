import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Container from '../../layout/container'
import Loader from '../../components/loader'
import styles from './news.module.scss'
import YouTube from 'react-youtube'
import PageNavigate from '../../ui/navigate'

function NewsItem() {
    const navigate = useNavigate()
    const params = useParams()
    const [data, loading, error] = useFetch()
    if (loading || !data) {
        return <Loader />
    }
    if (error) {
        return navigate('/notfound')
    }
    const details = data?.news?.filter((item) => item.id == params.item)
    return (
        <section className={styles.item}>
            <Container className={styles.item__container}>
                <PageNavigate text="Новости" item={details[0]?.name} />
                <div className={styles.item__block}>
                    <h1 className={styles.item__title}>{details[0]?.name}</h1>
                    <div className={styles.item__time}>
                        <button className='black'>Новости</button>
                        <p className={styles.item__date}>{details[0]?.date}</p>
                    </div>
                </div>
                <img src={details[0]?.images[0]} alt={details[0]?.name} className={styles.item__image} />
                <div className={styles.item__block}>
                    <p className={styles.item__text}>{details[0]?.text}</p>
                </div>
                <YouTube videoId={details[0]?.videos[0]} className={styles.item__video} />
            </Container>
        </section>
    )
}

export default NewsItem