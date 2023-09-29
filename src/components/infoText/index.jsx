import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import styles from './infoText.module.scss'

function InfoText() {
  return (
    <div className={styles.info}>
        <p className={styles.info__text}>В Сети полно всевозможных сервисов учета, начиная от учета времени или калорий, заканчивая учетом финансов. А вот сервиса учета инструментов до сих пор не было. Теперь – есть. Вообще, конечно, идея учета рабочего инструмента, расходных материалов и комплект... Теперь – есть.</p>
        <button className={styles.info__btn}>Читать больше <MdOutlineKeyboardArrowDown /></button>
    </div>
  )
}

export default InfoText