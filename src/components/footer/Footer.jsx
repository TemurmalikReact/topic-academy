import React from 'react'
import styles from "./footer.module.scss"
import Marquee from "react-fast-marquee";

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_top}>
                <div className={styles.footer_logo}>
                    <img src={require('../../assets/logo_horizontal.png')} alt="" />
                </div>
                <nav className={styles.footer_nav}>
                    <div className={styles.footer_nav__item}>
                        <a href="#">
                            Nega Biz
                        </a>
                    </div>
                    <div className={styles.footer_nav__item}>
                        <a href="#">
                            Natijalar
                        </a>
                    </div>
                    <div className={styles.footer_nav__item}>
                        <a href="#">
                            Kurslar
                        </a>
                    </div>
                    <div className={styles.footer_nav__item}>
                        <a href="#">
                            Savollar
                        </a>
                    </div>
                </nav>
                <div className={styles.footer_socials}>
                    <a href="#"><i className='fa fa-phone'></i></a>
                    <a href="#"><i className='fa fa-telegram'></i></a>
                    <a href="#"><i className='fa fa-instagram'></i></a>
                    <a href="#"><i className='fa fa-youtube-play'></i></a>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <img src={require('../../assets/sponsor.png')} alt="" />
            </div>
        </div>
    )
}
