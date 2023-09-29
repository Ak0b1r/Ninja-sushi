import React, { useState } from 'react'
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FiBell, FiHeart, FiPhoneCall, FiShoppingBag, FiUser } from 'react-icons/fi';
import Container from '../../layout/container'
import { navList } from '../../helpers';
import logoSushi from '../../images/logoSushi.png';
import flag from '../../images/flag.svg';
import styles from './navbar.module.scss'
import Basket from '../basket';
import { useSelector } from 'react-redux';

function NavBar() {
  const { basket, favorite } = useSelector(state => state)
  const [logo, setLogo] = useState('sushi')
  const [showBasket, setShowBasket] = useState(false)
  const handleChange = (event) => {
    setLogo(event.target.value);
  };
  console.log(basket);
  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <nav className={styles.header__nav}>
          <div className={styles.header__left}>
            <Select
              value={logo}
              onChange={handleChange}
              className={styles.header__select}
            >
              <MenuItem value={"sushi"} className={styles.header__item}>
                <img src={logoSushi} alt="ninja sushi" />
              </MenuItem>
              <MenuItem value={"wok"} className={styles.header__item}>
                <img src={logoSushi} alt="ninja wok" />
              </MenuItem>
              <MenuItem value={"pizza"} className={styles.header__item}>
                <img src={logoSushi} alt="ninja pizza" />
              </MenuItem>
            </Select>
          </div>
          <div className={styles.header__list}>
            <div className={styles.header__location}>
              <img src={flag} alt="location" />
              <p>Киев <span>RU</span></p>
            </div>
            {navList.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) => isActive
                  ? classNames(styles.header__link, styles.header__link_active)
                  : styles.header__link}
              >{link.name}</NavLink>
            ))}
            <Link to={'tel:+380976993438'} className={styles.header__phone}>
              <FiPhoneCall />
              <span>+38 097 699 34 38</span>
            </Link>
          </div>
          <div className={styles.header__right}>
            <div className={styles.header__icon}>
              {Object.keys(basket).length > 0 && <span className={styles.header__icon_num}>{Object.keys(basket).length}</span>}
              <FiBell />
            </div>
            <div className={styles.header__icon}>
              {Object.keys(favorite).length > 0 && <span className={styles.header__icon_num}>{Object.keys(favorite).length}</span>}
              <FiHeart />
            </div>
            <div className={styles.header__icon}>
              <FiUser />
            </div>
            <div className={styles.header__icon} onClick={() => setShowBasket(true)}>
              {Object.keys(basket).length > 0 && <span className={styles.header__icon_num}>{Object.keys(basket).length}</span>}
              <p className={styles.header__icon_text}>Корзина</p>
              <FiShoppingBag />
            </div>
            <Basket show={showBasket} setShow={setShowBasket} />
          </div>
        </nav>
      </Container>
      <div className={showBasket ? styles.active : ''}></div>
    </header>
  )
}

export default NavBar