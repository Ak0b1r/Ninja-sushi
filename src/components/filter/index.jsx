import classNames from 'classnames'
import { MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { MdFilterList } from 'react-icons/md'
import { pepper, grass, oil, lasos, ugor, tunes, file, shitaki, pomidor, avokado, sir, tofu } from '../../images'
import styles from './filter.module.scss'
import { useState } from 'react'
import { filterByTypes, filteredByCatalog, filteredByIngredient, sortedData } from '../../redux/filter'

function Filter() {
    const {filter} = useSelector(state => state)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    console.log(filter.selectedCatalog);
    return (
        <div className={styles.filter}>
            <div className={styles.filter__top}>
                <div className={styles.filter__top_left}>
                    <button className={classNames(styles.filter__top_btn, filter.selectedTypes.includes('all') ? styles.active : filter.selectedTypes.length == 0 && styles.active)} onClick={() => dispatch(filterByTypes('all'))}>Все</button>
                    <button className={classNames(styles.filter__top_btn, filter.selectedTypes.includes('classic') && styles.active)} onClick={() => dispatch(filterByTypes('classic'))}>Классические</button>
                    <button className={classNames(styles.filter__top_btn, filter.selectedTypes.includes('maki') && styles.active)} onClick={() => dispatch(filterByTypes('maki'))}>Маки</button>
                    <button className={classNames(styles.filter__top_btn, filter.selectedTypes.includes('dragon') && styles.active)} onClick={() => dispatch(filterByTypes('dragon'))}>Драконы</button>
                    <button className={classNames(styles.filter__top_btn, filter.selectedTypes.includes('cooked') && styles.active)} onClick={() => dispatch(filterByTypes('cooked'))}>Запеченные</button>
                    <button className={classNames(styles.filter__top_btn, filter.selectedTypes.includes('felix') && styles.active)} onClick={() => dispatch(filterByTypes('felix'))}>Феликсы</button>
                    <button className={classNames(styles.filter__top_btn, filter.selectedTypes.includes('sweet') && styles.active)} onClick={() => dispatch(filterByTypes('sweet'))}>Сладкие</button>
                </div>
                <select className={styles.filter__top_select} onChange={(e)=>dispatch(sortedData(e.target.value))}>
                    <option value="expensive">От дорогих к дешевым</option>
                    <option value="cheap">От дешевого к дорогому</option>
                </select>
            </div>
            <div className={styles.filter__bottom}>
                <div className={styles.filter__bottom_left}>
                    <button className={classNames(styles.filter__bottom_btn, filter.selectedCatalog.includes('Острые') && styles.active)} onClick={() => dispatch(filteredByCatalog('Острые'))}>
                        <img src={pepper} alt="pepper" />
                        <span>Острые</span>
                    </button>
                    <button className={classNames(styles.filter__bottom_btn, filter.selectedCatalog.includes('Вегетарианские') && styles.active)} onClick={() => dispatch(filteredByCatalog('Вегетарианские'))}>
                        <img src={grass} alt="vegetable" />
                        <span>Вегетарианские</span>
                    </button>
                    <button className={classNames(styles.filter__bottom_btn, filter.selectedCatalog.includes('Безлактозные') && styles.active)} onClick={() => dispatch(filteredByCatalog('Безлактозные'))}>
                        <img src={oil} alt="oil" />
                        <span>Безлактозные</span>
                    </button>
                </div>
                <div className={styles.filter__bottom_right}>
                    <button className={classNames(styles.filter__bottom_btn,filter.selectedIngredient.includes('Лосось') && styles.active)} onClick={() => dispatch(filteredByIngredient('Лосось'))}>
                        <img src={lasos} alt="Лосось" />
                        <span>Лосось</span>
                    </button>
                    <button className={classNames(styles.filter__bottom_btn,filter.selectedIngredient.includes('Угорь') && styles.active)} onClick={() => dispatch(filteredByIngredient('Угорь'))}>
                        <img src={ugor} alt="Угорь" />
                        <span>Угорь</span>
                    </button>
                    <button className={classNames(styles.filter__bottom_btn,filter.selectedIngredient.includes('Тунец') && styles.active)} onClick={() => dispatch(filteredByIngredient('Тунец'))}>
                        <img src={tunes} alt="Тунец" />
                        <span>Тунец</span>
                    </button>
                    <button className={classNames(styles.filter__bottom_btn,filter.selectedIngredient.includes('Куриное филе') && styles.active)} onClick={() => dispatch(filteredByIngredient('Куриное филе'))}>
                        <img src={file} alt="Куриное филе" />
                        <span>Куриное филе</span>
                    </button>
                    <button className={classNames(styles.filter__bottom_btn)} onClick={() => setShow(true)}>
                        <MdFilterList />
                    </button>
                    <div className={show ? classNames(styles.filter__box, styles.active) : styles.filter__box}>
                        <div className={styles.filter__box_top}>
                            <h3 className={styles.filter__box_title}>Инградиенты</h3>
                            <div>
                                <button className={styles.filter__box_clear} onClick={()=>dispatch(filteredByIngredient('clear'))}>Сбросить все</button>
                                <button className={styles.filter__box_close} onClick={()=>setShow(false)}><MdClose /></button>
                            </div>
                        </div>
                        <div className={styles.filter__box_bottom}>
                            <button className={classNames(styles.filter__box_btn,filter.selectedIngredient.includes('Лосось') && styles.active)} onClick={() => dispatch(filteredByIngredient('Лосось'))}>
                                <img src={lasos} alt="Лосось" />
                                <span>Лосось</span>
                            </button>
                            <button className={classNames(styles.filter__box_btn,filter.selectedIngredient.includes('Угорь') && styles.active)} onClick={() => dispatch(filteredByIngredient('Угорь'))}>
                                <img src={ugor} alt="Угорь" />
                                <span>Угорь</span>
                            </button>
                            <button className={classNames(styles.filter__box_btn,filter.selectedIngredient.includes('Тунец') && styles.active)} onClick={() => dispatch(filteredByIngredient('Тунец'))}>
                                <img src={tunes} alt="Тунец" />
                                <span>Тунец</span>
                            </button>
                            <button className={classNames(styles.filter__box_btn,filter.selectedIngredient.includes('Куриное филе') && styles.active)} onClick={() => dispatch(filteredByIngredient('Куриное филе'))}>
                                <img src={file} alt="Куриное филе" />
                                <span>Куриное филе</span>
                            </button>
                            <button className={classNames(styles.filter__box_btn,filter.selectedIngredient.includes('Тофу') && styles.active)} onClick={() => dispatch(filteredByIngredient('Тофу'))}>
                                <img src={tofu} alt="Тофу" />
                                <span>Тофу</span>
                            </button>
                            <button className={classNames(styles.filter__box_btn,filter.selectedIngredient.includes('Сливочный сыр') && styles.active)} onClick={() => dispatch(filteredByIngredient('Сливочный сыр'))}>
                                <img src={sir} alt="Сливочный сыр" />
                                <span>Сливочный сыр</span>
                            </button>
                            <button className={classNames(styles.filter__box_btn,filter.selectedIngredient.includes('Авокадо') && styles.active)} onClick={() => dispatch(filteredByIngredient('Авокадо'))}>
                                <img src={avokado} alt="Авокадо" />
                                <span>Авокадо</span>
                            </button>
                            <button className={classNames(styles.filter__box_btn,filter.selectedIngredient.includes('Помидор') && styles.active)} onClick={() => dispatch(filteredByIngredient('Помидор'))}>
                                <img src={pomidor} alt="Помидор" />
                                <span>Помидор</span>
                            </button>
                            <button className={classNames(styles.filter__box_btn,filter.selectedIngredient.includes('Гриб шитаки') && styles.active)} onClick={() => dispatch(filteredByIngredient('Гриб шитаки'))}>
                                <img src={shitaki} alt="Гриб шитаки" />
                                <span>Гриб шитаки</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter