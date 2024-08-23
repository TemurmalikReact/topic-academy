import React from 'react'
import styles from "./header.module.scss"

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <img src={require('../../assets/logo.png')} alt="" />
        <span>Toshkentda joylashgan Koreys tili hamda Topik o’quv markazi</span>
      </div>
      <nav className={styles.header_nav}>
        <div className={styles.header_nav__item}>
          <a href="#">
            Nega Biz
          </a>
        </div>
        <div className={styles.header_nav__item}>
          <a href="#">
            Natijalar
          </a>
        </div>
        <div className={styles.header_nav__item}>
          <a href="#">
            Kurslar
          </a>
        </div>
        <div className={styles.header_nav__item}>
          <a href="#">
            Ko'p beriladigan savollar
          </a>
        </div>
      </nav>
      <div className={styles.header_phone}>
        <p>+998 (33) 306 0098</p>
        <span>Hoziroq bog’laning</span>
      </div>
    </div>
  )
}
