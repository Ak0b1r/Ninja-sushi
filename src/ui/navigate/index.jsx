import {MdArrowBackIos, MdArrowForwardIos, MdOutlineHome} from 'react-icons/md'
import styles from './navigate.module.scss'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

function PageNavigate({text,position,item}) {
    const navigate = useNavigate()
    return (
        <div className={classNames(styles.navigate, position && styles.active)}>
            <button className='white' onClick={() => navigate('/')}><MdArrowBackIos /> Назад</button>
            <div className={styles.navigate_text}>
                <MdOutlineHome />
                <MdArrowForwardIos />
                <p>{text}</p>
                {item && <>
                    <MdArrowForwardIos />
                    <p>{item}</p>
                </>
                }
            </div>
        </div>
    )
}

export default PageNavigate