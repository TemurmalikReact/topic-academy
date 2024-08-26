import React from 'react'
import styles from "./video-block.module.scss"

export const Videoblock = () => {
    return (
        <>

            <div className={styles.videoblock}>
                <div className={styles.videoblock_title}>Koreya Universitetlariga 100% gacha grant yutish imkoniyati</div>
                <div className={styles.videoblock_container}>
                    <div className={styles.videoblock_image}>
                        <img src={require('../../assets/scholarship.png')} alt="" />
                    </div>
                    <div className={styles.videoblock_content}>
                        <div>
                            <div className={styles.videoblock_content__title}>GKS (Global Korean Scholarship) <b className={styles.green}>$70.000</b> lik Grant</div>
                            <div className={styles.videoblock_content__text}>
                                Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning Xalqaro ta'lim bo'yicha milliy
                                instituti <b>tomonidan</b> xorijiy talabalarning Koreyada bakalavr va magistratura
                                bosqichida <b>100% gacha to’liq grant</b> va oylik <b>stipendiya</b> olish imkoniyatingiz bor</div>
                        </div>
                        <div>
                            <div className={styles.videoblock_content__title}>GKS granti sizga nima beradi
                            </div>
                            <ul className={styles.videoblock_content__ul}>
                                <li>Dastur boshlanganida va tugaganida Koreyaga borish hamda Koreyadan qaytish xarajatlari qoplanadi.</li>
                                <li>
                                    Koreyaga yetib borganda joylashib olish uchun bir martalik to'lovberiladi. Miqdori - 200 000 Koreya
                                    voni (taxminan 157 AQSh dollari).
                                </li>
                                <li>Til kursi va universitetning kontrak to'lovi to'liq to'lab beriladi
                                    (faqat magistr va doktorantlarga)... <b className={styles.green}>ko'proq</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className={styles.videoblock_frame}>
                <iframe width="853" height="480" src="https://www.youtube.com/embed/xvFZjo5PgG0" title="Rick Roll (Different link + no ads)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div className={styles.videoblock_frame__title}>GKS granti haqida to’liq siz uchun tayyorlagan video suhbatimizda bilib oling! ...
                    </div>
                </div>
            </div >
        </>
    )
}
