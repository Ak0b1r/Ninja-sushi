import React from 'react'
import styles from './button.module.scss'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

function Button({url,text,className}) {
    const navigate = useNavigate()
  return (
    <button className={classNames(styles.button,className)} onClick={()=>navigate(url)}>{text}</button>
  )
}

export default Button