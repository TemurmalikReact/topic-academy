import React from 'react'
import styles from "./request.module.scss"
import Marquee from 'react-fast-marquee'

export const Request = () => {
    return (
        <div className={styles.request}>
            <div className={styles.request_title}>Muvafaqqiyatli bitiruvchilarimizga universitet <br /> tanlash va grant yutishda yordam beramiz</div>
            <div className={styles.request_container}>
                <div className={styles.form}>
                    <div className={styles.form_text}>
                       <b>TOPIK academy consulting</b> jamoasi sizga universitet tanlash, visa olish va grant yutishingizda yaqindan ko’maklashadi
                    </div>
                    <div className={styles.form_submit}>
                        <span>Ko’proq ma’lumot olish uchun <br /> bepul konsultatsiyaga yoziling!</span>
                        <button className='gradient-button'>ARIZA QOLDIRISH</button>
                    </div>
                </div>

                <Marquee className={styles.request_marquee} autoFill>
                    <div className={styles.request_content}>
                        <div className={styles.request_column}>
                            <img src={require('../../assets/example-small.png')} alt="" />
                            <div className={styles.request_column__footer}>
                                <span>Topik 5</span>
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div >
    )
}
