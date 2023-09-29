import React from 'react'
import { Link } from 'react-router-dom'
import { menuList } from '../../helpers'
import styles from './menu.module.scss'

function Menu() {
  return (
    <section className={styles.menu}>
      <ul className={styles.menu__list}>
        {menuList.map((item) => (
          <li key={item.id} className={styles.menu__item}>
            {
              item.path === '/products' ? (
                <Link to="#!" className={styles.menu__link} disabled>
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </Link>
              ) : (
                <Link to={item.path} className={styles.menu__link}>
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </Link>
              )
            }

          </li>
        ))}
      </ul>
    </section>
  )
}

export default Menu